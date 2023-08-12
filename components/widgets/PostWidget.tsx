"use client";

import {
    getPost,
    handlePostDislike,
    handlePostLike,
} from "@/libs/actions/post.action";
import { Post } from "@prisma/client";
import { useEffect, useState } from "react";
import TextLoading from "../loading/TextLoading";
import UserWidget from "./UserWidget";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartFilled } from "@fortawesome/free-solid-svg-icons";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { useSession } from "next-auth/react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const PostWidget = ({ postId }: { postId: string }) => {
    const [post, setPost] = useState<Post>();
    const { data: session, status } = useSession();

    const effectGetPost = async () => {
        const currentPost = await getPost(postId);
        if (currentPost) {
            setPost(currentPost);
        }
    };

    useEffect(() => {
        effectGetPost();
    }, []);

    const handlePostLikeOrDislike = async () => {
        if (status === "authenticated") {
            if (post?.likes.includes(session.user.id)) {
                await handlePostDislike(postId, session.user.id);
            } else {
                await handlePostLike(postId, session.user.id);
            }
        }

        effectGetPost();
    };

    if (!post) {
        return (
            <div className="flex flex-col gap-y-2">
                <div className="flex items-center gap-x-4">
                    <div className="w-12 h-12 rounded-full bg-slate-200"></div>
                    <div className="h-3 w-16 bg-slate-200"></div>
                </div>
                <TextLoading length={"full"} />
                <TextLoading length={"full"} />
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-y-2">
            <UserWidget userId={post.userId} />
            <p>{post.content}</p>
            <div className="border-t border-slate-100 grid grid-cols-2 items-center justify-items-center py-2">
                <button
                    className="button flex items-center gap-x-2"
                    disabled={
                        status === "loading" || status === "unauthenticated"
                    }
                    onClick={handlePostLikeOrDislike}
                >
                    {status === "authenticated" &&
                    post.likes.includes(session.user.id) ? (
                        <FontAwesomeIcon
                            className="text-slate-100 text-2xl"
                            icon={faHeartFilled}
                        />
                    ) : (
                        <FontAwesomeIcon
                            className="text-slate-100 text-2xl"
                            icon={faHeart}
                        />
                    )}

                    <span className="font-semibold">{post.likes.length}</span>
                </button>
                <Link href={`/post/${postId}`} className="button">
                    <FontAwesomeIcon
                        className="text-slate-100 text-2xl"
                        icon={faComment}
                    />
                </Link>
            </div>
        </div>
    );
};

export default PostWidget;
