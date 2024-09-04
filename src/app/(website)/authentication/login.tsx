"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/src/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form"
import { Input } from "@/src/components/ui/input"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/src/components/ui/card"
import { Separator } from "@/src/components/ui/seperator"
import { Label } from "@/src/components/ui/label"


const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

export function LoginForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof loginSchema>>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
        email: "",
        password: ""
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof loginSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }

    return (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Login with Google, Apple, or enter your email below
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Button variant="outline" className="w-full">
                Login with Google
            </Button>
            <Separator title="OR CONTINUE WITH"/>
            <Form {...form}>
                <form className='flex flex-col gap-2' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type='email'
                                        placeholder='Enter your email...'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='password'
                                            placeholder="Enter your password..."
                                            {...field}
                                            onChange={(e) => {
                                                e.target.value = e.target.value.trim();
                                                field.onChange(e);
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type='submit' className='self-start'>
                            Login
                        </Button>
                </form>
            </Form>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
    )
  }
