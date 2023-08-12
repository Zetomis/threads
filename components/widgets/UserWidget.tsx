"use client";

import { getUser } from "@/libs/actions/user.actions";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const UserWidget = ({ userId }: { userId: string }) => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const effectGetUser = async () => {
            const currentUser = await getUser(userId);
            if (currentUser) {
                setUser(currentUser);
            }
        };

        effectGetUser();
    }, []);

    if (!user) {
        return (
            <div className="flex items-center gap-x-4">
                <div className="w-12 h-12 rounded-full bg-slate-200"></div>
                <div className="h-3 w-16 bg-slate-200"></div>
            </div>
        );
    }

    return (
        <Link
            href={`/profile/${user.id}`}
            className="flex items-center gap-x-4"
        >
            <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                    src={user.image ?? ""}
                    alt="User's Image"
                    width={48}
                    height={48}
                />
            </div>
            <h1 className="font-semibold">{user.name}</h1>
        </Link>
    );
};

export default UserWidget;
