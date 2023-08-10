import GeneralProvider from "@/components/GeneralProvider";
import { ReactNode } from "react";

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
