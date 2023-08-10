import "./globals.css";

import GeneralProvider from "@/components/GeneralProvider";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: 'threads',
    description: 'Bootleg version of threads by Zetomis'
}

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <GeneralProvider>{children}</GeneralProvider>
            </body>
        </html>
    );
};

export default RootLayout;
