'use client'

import { BloomWiseTeal } from "@/svgs"
import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"
import { useAppSelector } from "@/redux/hooks"

const LeftSidebar = () => {
    const navItems = [
        { label: 'News Feed', href: '/', isActive: true },
        { label: 'Gallery', href: '/gallery' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Profile', href: '/profile' },
    ];
    const token = useAppSelector((state) => state.auth.token)
    const user = useAppSelector((state) => state.auth.user)

    return (
        <div className="flex h-screen flex-col w-[15%] justify-between border-e bg-white">
            <div className="px-4 py-6">
                <span className="grid h-10 w-16 text-teal-600 place-content-center rounded-lg">
                    <BloomWiseTeal />
                </span>

                <ul className="mt-6 space-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}>
                                <span
                                    className={`block rounded-lg px-4 py-3 text-md font-medium ${item.isActive
                                        ? 'bg-gray-100 text-gray-700'
                                        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                                        }`}
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
                    </div> : <div className="flex text-center flex-col gap-2 mb-4 mx-4">
                        <Button
                            className="bg-teal-600 rounded-lg text-white hover:bg-white hover:text-teal-600 hover:border hover:border-teal-600"
                        >
                            <Link href="/sign-in">Login</Link>
                        </Button>
                        <Button
                            className="bg-white text-teal-600 border border-teal-600 hover:bg-teal-600 hover:text-white hover:border-white"
                        >
                            <Link
                                href="/sign-up"
                            >
                                Register
                            </Link>
                        </Button>
                    </div>
                }
            </div>
        </div>
    )
}

export default LeftSidebar