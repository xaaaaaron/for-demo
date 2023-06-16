import { NextAuthOptions }  from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredenialsProvider from 'next-auth/providers/credentials'
import NextAuth from 'next-auth/next'

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? '',
            clientSecret: process.env.GOOGLE_SECRET ?? '',
        }),
    ],
    secret: process.env.SECRET ?? ''
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }