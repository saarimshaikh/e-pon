import NextAuth from 'next-auth';

declare module 'next-auth' {
  export interface Session {
        user: {
            id: string;
            name?: string | null;
            email?: string | null;
            password?: string | null;
        };
    }

    interface JWT {
        id: string;
    }
}

export interface Session<T> {
    user: T
}
