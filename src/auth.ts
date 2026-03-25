import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email as string | undefined;
        const password = credentials?.password as string | undefined;

        if (!email || !password) {
          return null;
        }

        if (
          email === process.env.DEMO_EMAIL &&
          password === process.env.DEMO_PASSWORD
        ) {
          return {
            id: "demo-user",
            name: "Gov AI Hub User",
            email,
            role: "member",
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role?: string }).role ?? "member";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = (token.role as string | undefined) ?? "member";
      }
      return session;
    },
    authorized({ auth, request }) {
      const pathname = request.nextUrl.pathname;

      const publicPaths = ["/", "/login"];
      const isPublic = publicPaths.includes(pathname);

      if (isPublic) {
        return true;
      }

      return !!auth;
    },
  },
});