import NextAuth, { AuthOptions } from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";

const authOptions: AuthOptions = {
  providers: [
    AppleProvider({
      clientId: process.env.APPLE_ID!,
      clientSecret: process.env.APPLE_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  cookies: {
    pkceCodeVerifier: {
      name: "next-auth.pkce.code_verifier",
      options: {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
      },
    },
  },

  callbacks: {
    session: async ({ session }: any) => {
      session.customValue = new Date().toISOString();
      return Promise.resolve(session);
    },
  },
};

export default NextAuth(authOptions);
