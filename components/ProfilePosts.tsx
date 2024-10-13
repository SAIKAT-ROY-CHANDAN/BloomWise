/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useGetUserOwnPostsQuery } from "@/redux/api/postApi"
import PostCard from "./PostCard";
import { TPost } from "@/types";
import { useAppSelector } from "@/redux/hooks";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    PaginationEllipsis,
} from "@/components/ui/pagination";
import { useState } from "react";

const ProfilePosts = () => {
    const token = useAppSelector((state) => state.auth.token)
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 3;
    const { data: postData } = useGetUserOwnPostsQuery({ token, page: currentPage, limit });

    const handlePageChange = (page: any) => {
        setCurrentPage(page);
    };

    return (
        <div className="max-w-5xl mx-auto mt-4">
            <h1 className="text-xl font-medium my-2">Posts</h1>
            <div className="space-y-2">
                {postData?.data?.map((post: TPost) => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>

            {/* Pagination Component */}
            <Pagination className="mt-2">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                    </PaginationItem>
                    {Array.from({ length: postData?.totalPages }, (_, index) => (
                        <PaginationItem className="cursor-pointer" key={index + 1}>
                            <PaginationLink
                                onClick={() => handlePageChange(index + 1)}
                                isActive={index + 1 === currentPage}
                            >
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === postData?.totalPages} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

export default ProfilePosts