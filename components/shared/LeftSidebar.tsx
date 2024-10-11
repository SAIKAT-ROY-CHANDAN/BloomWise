'use client'

import { BloomWiseTeal } from "@/svgs"
import { Button } from "../ui/button"
import Link from "next/link"

const LeftSidebar = () => {
    const navItems = [
        { label: 'News Feed', href: '/' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'About', href: '/about', isActive: true },
        { label: 'Contact', href: '/contact' }
    ];
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
                <div className="flex text-center flex-col gap-2 mb-4 mx-4">
                    <Button
                        className="bg-teal-600 rounded-lg text-white hover:bg-white hover:text-teal-600 hover:border hover:border-teal-600"
                    >
                        <Link href="/sign-up">Login</Link>
                    </Button>
                    <Button
                        className="bg-white text-teal-600 border border-teal-600 hover:bg-teal-600 hover:text-white hover:border-white"
                    >
                        <Link
                            href="/sign-in"
                        >
                            Register
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar