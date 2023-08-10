import "./globals.css";

import GeneralProvider from "@/components/generals/GeneralProvider";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "threads",
    description: "Bootleg version of threads by Zetomis",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body className="bg-slate-950 w-full min-h-screen text-white">
                <GeneralProvider>{children}</GeneralProvider>
            </body>
        </html>
    );
};

export default RootLayout;
