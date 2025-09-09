import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail } from "./data/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials: { email: string; password: string }) {
        if (credentials === null) return null;
        try {
          const user = await getUserByEmail(credentials?.email);
          if (user) {
            const isMatch = user?.password == credentials?.password;
            if (isMatch) {
              return user;
            } else {
              throw new Error("Password doesn't match");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
});
