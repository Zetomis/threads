"use client";

import { signIn } from "next-auth/react";

const RootPage = () => {
    return (
        <div>
            <h1>
                <button onClick={() => signIn("google")}>Sign In</button>
            </h1>
        </div>
    );
};

export default RootPage;
