/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { BloomWise } from "@/svgs"
import { Button } from "../ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from "next/link"
import { TUser } from "@/types"

const formSchema = z.object({
    username: z.string().min(2, { message: "Username must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    password: z.string().min(6, { message: "Password must be at least 6 characters." }),
    phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
    address: z.string().min(5, { message: "Address must be at least 5 characters." }),
})

const SignInForm = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            phone: "",
            address: "",
        },
    })

    const onSubmit = (data: Partial<TUser>) => {
        console.log(data)
    }

    return (
        <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
            <div className="max-w-xl lg:max-w-3xl">
                <div className="relative -mt-16 block lg:hidden">
                    <a
                        className="inline-flex size-16 items-center justify-center rounded-full bg-white text-teal-600 sm:size-20"
                        href="#"
                    >
                        <span className="sr-only">Home</span>
                        <BloomWise />
                    </a>

                    <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                        Welcome to Bloom Wise
                    </h1>

                    <p className="mt-4 leading-relaxed text-gray-500">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                        quibusdam aperiam voluptatum.
                    </p>
                </div>

                <Form {...form}>
                    <h1 className="text-teal-600 font-semibold text-4xl mb-6">Register</h1>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-3 gap-x-5 gap-y-3">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="col-span-2">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="example@mail.com" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />

                        {/* Password Field */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="col-span-3">
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="********" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />

                        {/* Phone Field */}
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                        <Input type="tel" placeholder="+1234567890" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem className="col-span-2">
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="123 Main St" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />

                        <Button className="col-span-3 bg-teal-600 hover:bg-teal-500" type="submit">Submit</Button>
                        <p className="text-sm mt-8 text-center text-gray-800">
                            Already have an account? {" "}
                            <Link href="/sign-up" className="text-gray-700 underline">Log in</Link>.
                        </p>
                    </form>
                </Form>
            </div>
        </main>
    )
}

export default SignInForm