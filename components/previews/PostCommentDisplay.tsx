"use client";

import { getPostComment } from "@/libs/actions/post.action";
import { useEffect, useState } from "react";
import { Comment } from "@prisma/client";
import UserWidget from "../widgets/UserWidget";

const PostCommentDisplay = ({ postId }: { postId: string }) => {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        const fetchPostComment = async () => {
            const post = await getPostComment(postId);
            if (post?.comments) {
                setComments(post.comments);
            }
        };

        fetchPostComment();
    }, []);

    return (
        <div className="mt-4 flex flex-col gap-y-4">
            {comments.map((cmt) => (
                <div className="flex flex-col gap-y-2">
                    <UserWidget userId={cmt.userId} />
                    <p>{cmt.content}</p>
                </div>
            ))}
        </div>
    );
};

export default PostCommentDisplay;
