import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({ session }) {
            return session;
        },
        async signIn({ user }) {
            console.log(user);
            return true;
        },
    },
    secret: process.env.SECRET,
    pages: {
        signIn: "/sign-in",
    },
};

const handler = NextAuth(authOptions);
export { handler as POST, handler as GET };
