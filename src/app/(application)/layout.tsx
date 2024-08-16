import "@/src/styles/global.css"
import {Providers} from "@/src/app/(website)/providers";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { AppHeader } from "@/src/app/(application)/_userheader/userheader"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" className="dark">
        <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
          <Providers>
            <AppHeader/>
            <main>{children}</main>
  
            <footer>
  
            </footer>
          </Providers>
        </body>
      </html>
    );
  }