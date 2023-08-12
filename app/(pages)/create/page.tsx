"use client";

import { newPost } from "@/libs/actions/post.action";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const CreatePage = () => {
    const [text, setText] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const { data: session, status } = useSession();
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);

        if (session?.user) {
            const post = await newPost(text, session.user.id);
            router.push(`/post/${post.id}`);
        }

        setIsLoading(false);
    };

    if (status === "loading") {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    if (status === "unauthenticated") {
        return (
            <div>
                <h1>Sign in to continue.</h1>
            </div>
        );
    }

    return (
        <div>
            <h1 className="font-semibold text-lg mb-4">Create new Post</h1>
            <form
                className="flex flex-col gap-y-2"
                onSubmit={(event) => handleSubmit(event)}
            >
                <textarea
                    className="bg-slate-950 border border-slate-100 rounded px-4 py-2"
                    onChange={(event) => setText(event.target.value)}
                />
                <button
                    className="button_default place-self-end"
                    disabled={isLoading}
                >
                    Create
                </button>
            </form>
        </div>
    );
};

export default CreatePage;
