"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Navbar() {
  const pathname = usePathname()
  const { data: session } = useSession()

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Cross-Posting App
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/create-post" passHref>
            <Button variant={pathname === "/create-post" ? "default" : "ghost"}>
              Create Post
            </Button>
          </Link>
          <Link href="/dashboard" passHref>
            <Button variant={pathname === "/dashboard" ? "default" : "ghost"}>
              Dashboard
            </Button>
          </Link>
          <Link href="/settings" passHref>
            <Button variant={pathname === "/settings" ? "default" : "ghost"}>
              Settings
            </Button>
          </Link>
          {session ? (
            <Link href="/auth" passHref>
              <Button variant="outline">Account</Button>
            </Link>
          ) : (
            <Link href="/auth" passHref>
              <Button variant="outline">Sign In</Button>
            </Link>
          )}
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}