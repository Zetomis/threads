"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

export const newPost = async (text: string, userId: string) => {
    const post = await prisma.post.create({
        data: {
            content: text,
            userId: userId,
        },
    });

    return post;
};

export const getPost = async (postId: string) => {
    const post = await prisma.post.findUnique({
        where: {
            id: postId,
        },
    });

    return post;
};

export const handlePostLike = async (postId: string, userId: string) => {
    await prisma.post.update({
        where: { id: postId },
        data: {
            likes: {
                push: userId,
            },
        },
    });

    return;
};

export const handlePostDislike = async (postId: string, userId: string) => {
    const post = await getPost(postId);

    await prisma.post.update({
        where: {
            id: postId,
        },
        data: {
            likes: {
                set: post?.likes.filter((id) => id !== userId),
            },
        },
    });

    return;
};

export const postSendComment = async (
    postId: string,
    content: string,
    userId: string
) => {
    const comment = await prisma.comment.create({
        data: {
            postId,
            content,
            userId,
        },
    });

    return comment;
};

export const getPostComment = async (postId: string) => {
    const post = await prisma.post.findUnique({
        where: {
            id: postId,
        },
        select: {
            comments: true,
        },
    });

    return post
};
