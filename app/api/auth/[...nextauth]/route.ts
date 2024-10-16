import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@/prisma/generated/client';
import bcrypt from 'bcrypt';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'Sign in',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Missing credentials');
                }

                // Fetch user from the database
                const user = await prisma.users.findUnique({
                    where: { email: credentials.email },
                });

                if (!user) {
                    throw new Error('User not found');
                }

                // Validate the password
                const isValidPassword = await bcrypt.compare(
                    credentials.password,
                    user.password
                );

                if (!isValidPassword) {
                    throw new Error('Invalid credentials');
                }

                // Return user object
                return {
                    id: user.user_id,
                    name: user.name,
                    email: user.email,
                };
            },
        }),
    ],
    pages: {
        signIn: '/login',
        error: '/login', // Error page
    },
    session: {
        strategy: 'jwt', // Optional: Use JWT for stateless sessions
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = (user as { id: string }).id;
                token.name = user.name;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            // Ensure session.user is not undefined before assigning values
            if (session.user) {
                session.user.id = token.id as string;
            }
            return session;
        },
    },
};


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };