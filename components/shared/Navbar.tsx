'use client'

import { BloomWiseTeal } from "@/svgs"
import Link from "next/link"
import { Button } from "../ui/button"

const Navbar = () => {
    const links = [
        { label: 'News Feed', href: '#' },
        { label: 'About', href: '#' },
        { label: 'Contact', href: '#' },
    ]

    return (
        <header className="bg-white border">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <a className="block text-teal-600" href="#">
                    <span className="sr-only">Home</span>
                    <BloomWiseTeal />
                </a>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href}>
                                        <span className="text-gray-500 transition hover:text-gray-500/75">
                                            {link.label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <Link href="/sign-up" passHref>
                                <Button variant="default" size="lg" className="bg-teal-600 hover:bg-teal-700">
                                    Login
                                </Button>
                            </Link>

                            <Link href="/sign-in" passHref>
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="hidden sm:block bg-gray-100 text-teal-600 hover:text-teal-600/75"
                                >
                                    Register
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar