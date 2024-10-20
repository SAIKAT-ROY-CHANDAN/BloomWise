'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { DropdownMenuRadioGroup } from "@radix-ui/react-dropdown-menu"
import { Trash2 } from "lucide-react";
import { EditComment } from "@/svgs";

interface CommentEditDeleteProps {
    postId: string | string[];
    commentId: string | string[];
    token: string | null;
};

const CommentEditDelete = ({ postId, commentId, token }: CommentEditDeleteProps) => {
    console.log(postId, commentId, token);
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className="border border-gray-500 rounded-full p-1 focus:outline-none focus:ring-0">
                        <HiOutlineDotsHorizontal className="text-gray-500" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuRadioGroup value="right">
                    <DropdownMenuContent className="w-24 text-center" side="left">
                        {/* New Edit and Delete items */}
                        <DropdownMenuItem>
                            <EditComment />  Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Trash2 strokeWidth={0.75} /> Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenuRadioGroup>
            </DropdownMenu>
        </div>
    )
}

export default CommentEditDelete