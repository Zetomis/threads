"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const UserControlWidget = () => {
    const [isShowing, setIsShowing] = useState(false);
    const widgetRef = useRef<HTMLDivElement>(null);

    const { data: session, status } = useSession();

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (
                widgetRef.current &&
                !widgetRef.current.contains(event.target as Node)
            ) {
                setIsShowing(false);
            }
        };

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    if (status === "loading") {
        return (
            <button className="cursor-not-allowed">
                <div className="h-10 w-10 bg-slate-200 rounded-full"></div>
            </button>
        );
    }

    if (status === "unauthenticated") {
        return <button onClick={() => signIn("google")}>Sign In</button>;
    }

    if (status === "authenticated") {
        return (
            <div className="relative flex items-center" ref={widgetRef}>
                <button
                    onClick={() => setIsShowing((before) => !before)}
                    className="h-10 w-10 rounded-full overflow-hidden"
                >
                    <Image
                        src={session.user.image}
                        width={40}
                        height={40}
                        alt=""
                    />
                </button>
                {isShowing && (
                    <div className="absolute bg-slate-950 top-full mt-2 right-0 z-20 border border-slate-100 rounded p-4 flex flex-col gap-y-2 w-40 items-end">
                        <Link
                            href={`/profile/${session.user.id}`}
                            className="button"
                        >
                            Profile
                        </Link>
                        <button
                            onClick={() => signOut()}
                            className="button_default w-full text-right"
                        >
                            Sign Out
                        </button>
                    </div>
                )}
            </div>
        );
    }
};

export default UserControlWidget;
