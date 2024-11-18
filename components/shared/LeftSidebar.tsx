'use client'

import { BloomWiseTeal } from "@/svgs"
import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"
import { useAppSelector } from "@/redux/hooks"

const LeftSidebar = () => {
    const navItems = [
        { label: 'News Feed', href: '/' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Profile', href: '/profile' },
        { label: 'Dashboard', href: '/dashboard' },
    ];
    const token = useAppSelector((state) => state.auth.token)
    const user = useAppSelector((state) => state.auth.user)

    return (
        <div className="hidden lg:block w-[15%]">
            <div className="flex h-screen flex-col justify-between border-e bg-white">
                <div className="px-4 py-6">
                    <span className="grid h-10 w-16 text-teal-600 place-content-center rounded-lg">
                        <BloomWiseTeal />
                    </span>

                    <ul className="mt-6 space-y-1">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href}>
                                    <span
                                        className={`block rounded-lg px-4 py-3 text-md font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700`}
                                    >
                                        {item.label}
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

                                <div>
                                    <p className="text-xs">
                                        <strong className="block font-medium">{user?.username}</strong>

                                        <span> {user?.email}</span>
                                    </p>
                                </div>
                            </Link>
                        </div> : <div className="mb-4 p-2 flex flex-col justify-center items-center gap-y-2">
                            <Link href="/sign-in">
                                <Button
                                    className="bg-teal-600 rounded-lg text-white hover:bg-white w-48 hover:text-teal-600 hover:border hover:border-teal-600"
                                >
                                    Login
                                </Button>
                            </Link>
                            <Link href="/sign-up">
                                <Button
                                    className="bg-white text-teal-600 border border-teal-600 w-48 hover:bg-teal-600 hover:text-white hover:border-white"
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

export default LeftSidebar