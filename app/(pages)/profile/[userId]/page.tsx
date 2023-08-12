"use client";

import TextLoading from "@/components/loading/TextLoading";
import UserImageLoading from "@/components/loading/UserImageLoading";
import { getUser } from "@/libs/actions/user.actions";
import { User } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProfilePage = ({ params }: { params: { userId: string } }) => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const effectGetUser = async () => {
            if (params.userId) {
                const currentUser = await getUser(params.userId);
                if (currentUser) {
                    setUser(currentUser);
                }
            }
        };

        effectGetUser();
    }, []);

    if (!user) {
        return (
            <div className="flex flex-col gap-y-2 items-center">
                <UserImageLoading />
                <TextLoading length={40} />
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-y-2 items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center ">
                <Image
                    src={user.image ?? ""}
                    alt="User's Image"
                    height={96}
                    width={96}
                />
            </div>
            <h1 className="text-lg font-semibold text-center">{user.name}</h1>
        </div>
    );
};

export default ProfilePage;
