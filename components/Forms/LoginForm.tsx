'use client'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "../ui/button"
import { useForm } from "react-hook-form"
import Link from "next/link"
import { TUser } from "@/types"
import { useRouter } from "next/navigation"
import { useAppDispatch } from "@/redux/hooks"
import { setUser } from "@/redux/slices/authSlice"

const formSchema = z.object({
    email: z.string().email("Invalid email address."),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
})

const LoginForm = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (values: Partial<TUser>) => {

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            const result = await response.json();

            if (response.ok) {
                // console.log("Login successful:", result);

                const { user, token } = result.data;
                dispatch(setUser({ user, token }));
                router.push('/');
            } else {
                console.error("Login failed:", result.message);
            }
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-lg max-md:mx-auto w-full p-6 space-y-8">
                <div className="mb-12">
                    <h3 className="text-gray-800 text-4xl font-extrabold">Sign in</h3>
                    <p className="text-gray-800 text-sm mt-6">
                        Immerse yourself in a hassle-free login journey with our intuitively designed login form. Effortlessly access your account.
                    </p>
                </div>

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="text"
                                    placeholder="Enter email"
                                    className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
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
                                    {...field}
                                    type="text"
                                    placeholder="Enter password"
                                    className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex flex-wrap items-center gap-4 justify-between mt-4">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="shrink-0 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md"
                        />
                        <label className="ml-3 block text-sm text-gray-800">Remember me</label>
                    </div>
                    <div className="text-sm">
                        <a className="text-teal-600 font-semibold hover:underline">
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <Button type="submit" className="w-full shadow-xl py-3 px-6 text-sm tracking-wide font-semibold rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none">
                    Log in
                </Button>

                <p className="text-sm mt-8 text-center text-gray-800">
                    Don&apos;t have an account? <Link href='/sign-up' className="text-teal-600 font-semibold tracking-wide hover:underline ml-1">Register here</Link>
                </p>
            </form>
        </Form>
    )
}

export default LoginForm