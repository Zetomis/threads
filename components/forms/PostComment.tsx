"use client";

import { postSendComment } from "@/libs/actions/post.action";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const PostComment = ({ postId }: { postId: string }) => {
    const { data: session, status } = useSession();
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);
        if (status === "authenticated") {
            await postSendComment(postId, content, session.user.id);
        }
        setContent("");
        setIsLoading(false);
        router.refresh();
    };

    return (
        <div>
            <h1 className="block mb-2 font-semibold text-xl">
                Send a Comment!
            </h1>
            <form
                className="flex gap-x-2 h-fit"
                onSubmit={(event) => handleSubmit(event)}
            >
                <input
                    type="text"
                    className="input flex-1"
                    onChange={(event) => setContent(event.target.value)}
                    value={content}
                />
                <button
                    className="button_default"
                    disabled={
                        status === "unauthenticated" ||
                        status === "loading" ||
                        isLoading
                    }
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default PostComment;
