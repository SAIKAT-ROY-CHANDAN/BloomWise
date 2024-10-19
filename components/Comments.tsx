'use client'
import { useAddCommentMutation } from "@/redux/api/postApi"
import { InputFocusAnimation as CommentInput } from "./input-focus-animation"
import { FormEvent, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "./ui/button";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Send } from "lucide-react";


const Comments = () => {
    const { postId } = useParams()
    const [addComment] = useAddCommentMutation();
    const [commentText, setCommentText] = useState("");
    const token = useAppSelector((state) => state.auth.token)
    const profileImage = useAppSelector((state) => state.auth.user?.profileImage)

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
            <div className="flex justify-center gap-x-4 mt-7">
                <Image
                    src={profileImage as string}
                    width={720}
                    height={1080}
                    alt="profile image"
                    className="rounded-full size-10"
                />
                <form onSubmit={onSubmitComment} className="flex items-center gap-x-2">
                    <div className="rounded-lg w-[760px]">
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
            <span className="border max-w-4xl"></span>
            <div>
                <div className="bg-white p-4 max-w-4xl space-y-1 mx-auto mt-4 rounded-xl shadow-sm border">
                    <h1 className="text-md text-gray-800 font-semibold">User Name</h1>
                    <p className="text-gray-700 text-sm mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis at ut repudiandae atque, nihil aliquam molestias nesciunt repellendus magnam ipsa?</p>
                    <h2 className="text-xs font-medium text-gray-600">Created At: 12.00 Am</h2>
                </div>
                <div className="bg-white p-4 max-w-4xl space-y-1 mx-auto mt-4 rounded-xl shadow-sm border">
                    <h1 className="text-md text-gray-800 font-semibold">User Name</h1>
                    <p className="text-gray-700 text-sm mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis at ut repudiandae atque, nihil aliquam molestias nesciunt repellendus magnam ipsa?</p>
                    <h2 className="text-xs font-medium text-gray-600">Created At: 12.00 Am</h2>
                </div>
                <div className="bg-white p-4 max-w-4xl space-y-1 mx-auto mt-4 rounded-xl shadow-sm border">
                    <h1 className="text-md text-gray-800 font-semibold">User Name</h1>
                    <p className="text-gray-700 text-sm mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis at ut repudiandae atque, nihil aliquam molestias nesciunt repellendus magnam ipsa?</p>
                    <h2 className="text-xs font-medium text-gray-600">Created At: 12.00 Am</h2>
                </div>
            </div>
        </>
    )
}

export default Comments