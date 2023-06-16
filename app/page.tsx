'use client';

import GoogleButton from 'react-google-button'
import { signIn } from 'next-auth/react'

export default function Home() {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-xl">Welcome to Homepage!</h1>
      <GoogleButton onClick={()=>{signIn('google')}} className="mx-auto mt-16" />
    </main>
  )
}
