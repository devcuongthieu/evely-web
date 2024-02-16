import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "user@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const response = await fetch("http://localhost:8000/auth/sign-in", {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });

        if (response.status === 401) {
          throw new Error("Unauthorized");
        }

        const responseData = await response.json();

        // if (responseData.user.role !== "ADMIN") {
        //   throw new Error("Unauthorized");
        // }

        return {
          access_token: responseData.access_token,
          refresh_token: responseData.refresh_token,
          role: responseData.user.role,
          id: responseData.user.id,
          email: responseData.user.email,
          name: responseData.user.first_name,
          picture: responseData.user.avatar,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, trigger }) {
      const isSignIn = trigger === "signIn";
      if (user && isSignIn) {
        token.access_token = user.access_token;
        token.refresh_token = user.refresh_token;
        token.role = user.role;
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.access_token = token.access_token;
      session.user.refresh_token = token.refresh_token;
      session.user.role = token.role;
      session.user.id = token.id as string;
      session.user.email = token.email as string;
      session.user.name = token.name as string;
      session.user.image = token.picture as string;

      return session;
    },
  },

  session: { strategy: "jwt" },
  pages: {
    signIn: "/sign-in",
  },
};
