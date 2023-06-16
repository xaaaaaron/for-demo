import { NextAuthOptions }  from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth/next'

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? '',
            clientSecret: process.env.GOOGLE_SECRET ?? '',
        }),
    ],
    secret: process.env.SECRET 
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }

export default NextAuth(authOptions);