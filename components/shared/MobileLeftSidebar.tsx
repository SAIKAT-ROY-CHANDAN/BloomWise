'use client'

import { BloomWiseTeal } from "@/svgs"
import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"
import { useAppSelector } from "@/redux/hooks"
import { House, Images, SquareUserRound, Store, UserRound } from "lucide-react"

const MobileLeftSidebar = () => {
    const navItems = [
        { label: 'News Feed', href: '/', icon: <House strokeWidth={1.25} /> },
        { label: 'Gallery', href: '/gallery', icon: <Images strokeWidth={1.75} /> },
        { label: 'About', href: '/about', icon: <Store strokeWidth={1.25} /> },
        { label: 'Contact', href: '/contact', icon: <SquareUserRound strokeWidth={1.25} /> },
        { label: 'Profile', href: '/profile', icon: <UserRound strokeWidth={1.25} /> },
    ];
    const token = useAppSelector((state) => state.auth.token)
    const user = useAppSelector((state) => state.auth.user)

    return (
        <div className="lg:hidden">
            <div className="flex h-screen flex-col justify-between border-e bg-white">
                <div className="px-4 py-6">
                    <span className="grid  text-teal-600 place-content-center rounded-lg">
                        <BloomWiseTeal />
                    </span>

                    <ul className="mt-6 space-y-1">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href}>
                                    <span
                                        className={`block rounded-lg px-1 md:px-4 py-3 text-md font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700`}
                                    >
                                        {item.icon} {/* Render only the icon */}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                    {
                        token ? <div>
                            <Link href="/profile" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                                <Image
                                    width={1080}
                                    height={720}
                                    alt=""
                                    src={user?.profileImage as string}
                                    className="size-10 rounded-full object-cover"
                                />

                                {/* <div>
                                <p className="text-xs">
                                    <strong className="block font-medium">{user?.username}</strong>

                                    <span> {user?.email}</span>
                                </p>
                            </div> */}
                            </Link>
                        </div> : <div className="mb-4 p-2 flex flex-col justify-center items-center gap-y-2">
                            <Link href="/sign-in">
                                <Button
                                    className="bg-teal-600 rounded-lg text-white hover:bg-white w-32 hover:text-teal-600 hover:border hover:border-teal-600"
                                >
                                    Login
                                </Button>
                            </Link>
                            <Link href="/sign-up">
                                <Button
                                    className="bg-white text-teal-600 border border-teal-600 w-32 hover:bg-teal-600 hover:text-white hover:border-white"
                                >
                                    Register
                                </Button>
                            </Link>
                        </div>
                    }
                </div>
            </div >
        </div>
    )
}

export default MobileLeftSidebar