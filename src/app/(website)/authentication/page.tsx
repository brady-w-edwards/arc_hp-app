import { LoginForm } from "@/src/app/(website)/authentication/login"
import { SignupForm } from "@/src/app/(website)/authentication/signup"

import { Button } from "@/src/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Separator } from "@/src/components/ui/seperator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs"


export default function AuthenticationPage() {
  return (
    <div className="relative flex w-full h-screen">
      <div className='max-w-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'> 
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm/>
          </TabsContent>
          <TabsContent value="signup">
            <SignupForm/>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
