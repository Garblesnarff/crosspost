"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function AuthPage() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Logged in as {session.user?.name}</CardTitle>
            <CardDescription>You're currently signed in.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Email: {session.user?.email}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => signOut()}>Sign out</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Authentication</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Twitter</CardTitle>
          </CardHeader>
          <CardFooter>
            <Button onClick={() => signIn("twitter")}>Sign in with Twitter</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Instagram</CardTitle>
          </CardHeader>
          <CardFooter>
            <Button onClick={() => signIn("instagram")}>Sign in with Instagram</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>LinkedIn</CardTitle>
          </CardHeader>
          <CardFooter>
            <Button onClick={() => signIn("linkedin")}>Sign in with LinkedIn</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>YouTube</CardTitle>
          </CardHeader>
          <CardFooter>
            <Button onClick={() => signIn("google")}>Sign in with Google</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}