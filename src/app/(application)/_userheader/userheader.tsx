"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu"
import {
  User,
  Search,
  LayoutDashboard,

} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import { Input } from "@/src/components/ui/input"
import { AvatarIcon } from "@nextui-org/react"

export function AppHeader() {
  return (
    <>
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center 
        md:gap-5 md:text-sm lg:gap-6">
          <Link href="/dashboard" className="text-muted-foreground transition-colors hover:text-foreground">
            Dashboard
          </Link>
          <Link href="/programs" className="text-muted-foreground transition-colors hover:text-foreground">
            Programs
          </Link>
          <Link href="/athletes" className="text-muted-foreground transition-colors hover:text-foreground">
            Athletes
          </Link>
          <Link href="/exercisedb" className="text-muted-foreground transition-colors hover:text-foreground">
            Exercises
          </Link>
        </nav>
      </header>
    </div>
    </>
  )
}