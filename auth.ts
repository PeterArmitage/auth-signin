import NextAuth from 'next-auth';
import authConfig from './auth.config';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from './lib/db';

export const { auth, handlers, signIn, signOut } = NextAuth({
	callbacks: {
		async session({ token, session }) {
			return session;
		},
		async jwt({ token }) {
			return token;
		},
	},
	adapter: PrismaAdapter(prisma),
	session: { strategy: 'jwt' },
	...authConfig,
});