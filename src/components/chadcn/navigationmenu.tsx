/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Pv8am0ZBOKU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/src/components/ui/dropdown-menu"
import { Button } from "@/src/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/src/components/ui/avatar"
import { User, icons } from "lucide-react"

export default function NavMenu() {
  return (
    <header className="flex items-center justify-between bg-background px-4 py-3 shadow-sm md:px-6">
      <div className="flex items-center gap-4">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Arc HP</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Services
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Contact
          </Link>
        </nav>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>
                <User></User>
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <div className="h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <div className="h-4 w-4" />
              <span>Notifications</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <div className="h-4 w-4" />
              <span>Login / Sign up</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}