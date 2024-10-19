/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useAddCommentMutation, useGetCommentsQuery } from "@/redux/api/postApi"
import { InputFocusAnimation as CommentInput } from "./input-focus-animation"
import { FormEvent, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "./ui/button";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Send } from "lucide-react";
import { getTimeAgo } from "@/utils";

const Comments = () => {
    const { postId } = useParams()
    const [addComment] = useAddCommentMutation();
    const [commentText, setCommentText] = useState("");
    const token = useAppSelector((state) => state.auth.token)
    const { data: commentsData, isLoading } = useGetCommentsQuery({ postId, token })
    const profileImage = useAppSelector((state) => state.auth.user?.profileImage)

    if (isLoading) return <div>Loading...</div>;

    const onSubmitComment = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!commentText) return;
        try {
            const res = await addComment({ token, id: postId, commentText }).unwrap();
            console.log(res);
            setCommentText("");
        } catch (error) {
            console.error("Failed to add comment: ", error);
        }
    };

    return (
        <>
            <span className="border-t border-gray-300 max-w-4xl block mx-auto my-4"></span>
            <div className="flex justify-center mx-auto md:w-10/12 gap-x-2 md:gap-x-4 mt-7">
                <div>
                    <Image
                        src={profileImage as string}
                        width={720}
                        height={720}
                        alt="profile image"
                        className="rounded-full size-10"
                    />
                </div>
                <form onSubmit={onSubmitComment} className="flex justify-center items-center gap-x-2">
                    <div className="rounded-lg 2xl:w-[760px]">
                        <CommentInput
                            label="Add a Comment"
                            type="text"
                            name="comment"
                            autoComplete="off"
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                        />
                    </div>
                    <Button variant='outline' className="bg-transparent" type="submit">
                        <Send strokeWidth={1.25} className="" />
                    </Button>
                </form>
            </div>


            <div className="mb-8">
                {commentsData?.data?.map((comment: any) => (
                    <div
                        key={comment._id}
                        className="bg-white space-y-2 w-11/12 sm:w-10/12 p-3 md:p-4 max-w-4xl mx-auto mt-4 rounded-xl shadow-sm border"
                    >
                        <h1 className="md:text-md text-sm text-gray-800 font-semibold">
                            {comment.createdBy?.username}
                        </h1>
                        <p className="text-gray-700 md:text-sm text-xs mb-2">
                            {comment.commentText}
                        </p>
                        <h2 className="text-xs font-medium text-gray-400 md:text-gray-600">
                            Created At: {getTimeAgo(comment.createdAt)}
                        </h2>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Comments