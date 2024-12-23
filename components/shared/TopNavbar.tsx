/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { InputFocusAnimation } from "../input-focus-animation"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "../ui/button"
import { useState, FormEvent, useEffect } from "react"
import { useRouter } from "next/navigation"

const TopNavbar = () => {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filter, setFilter] = useState<string>('');
    const router = useRouter();

    const handleSearch = (e?: FormEvent) => {
        if (e) e.preventDefault();

        const searchParams = new URLSearchParams();

        if (searchTerm) searchParams.set('searchTerm', searchTerm);
        if (filter) searchParams.set('sort', filter);

        router.push(`/?${searchParams.toString()}`);
    };

    useEffect(() => {
        if (filter) {
            handleSearch();
        }
    }, [filter]);


    return (
        <div className="w-full border-b p-2 sm:p-4 md:p-8 bg-white">
            <form className="flex flex-col sm:flex-row sm:justify-around md:gap-x-4 md:justify-center gap-y-3 items-center" onSubmit={handleSearch}>
                <div className="flex gap-x-3">
                    {/* Search Input */}
                    <InputFocusAnimation
                        label="Search"
                        type="text"
                        name="search"
                        autoComplete="off"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button type="submit" className="bg-teal-600 hover:bg-teal-500 h-10">Search</Button>
                </div>

                {/* Filter Select */}
                <Select value={filter} onValueChange={(val: string) => setFilter(val)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a filter" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Sort By</SelectLabel>
                            <SelectItem value="-createdAt">Recent Posts</SelectItem>
                            <SelectItem value="-upvotes">Popular</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </form>
        </div>
    )
}

export default TopNavbar
