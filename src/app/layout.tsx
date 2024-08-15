import "../styles/global.css"
import {Providers} from "./providers";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { NavMenu } from "./_header/header";

 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Providers>
          <NavMenu/>
          <main>{children}</main>

          <footer>

          </footer>
        </Providers>
      </body>
    </html>
  );
}

