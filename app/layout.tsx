import LeftBar from "@/components/previews/LeftBar";
import "./globals.css";

import GeneralProvider from "@/components/generals/GeneralProvider";
import TopBar from "@/components/previews/TopBar";
import { Metadata } from "next";
import { ReactNode } from "react";
import RightBar from "@/components/previews/RightBar";

export const metadata: Metadata = {
    title: "threads",
    description: "Bootleg version of threads by Zetomis",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body className="bg-slate-950 w-full min-h-screen text-white">
                <GeneralProvider>
                    <div className="w-full max-w-screen-xl mx-auto px-4 py-2">
                        <TopBar />
                        <div className="container mt-20">
                            <LeftBar />
                            {children}
                            <RightBar />
                        </div>
                    </div>
                </GeneralProvider>
            </body>
        </html>
    );
};

export default RootLayout;
