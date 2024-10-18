import Image from "next/image"
import postImage from '@/assets/close-up-picture-sapling-plant-is-growing.jpg'
import { Badge } from "./ui/badge"
import { MessageSquareMore, ThumbsDown, ThumbsUp } from "lucide-react"

const actions = [
    { icon: <ThumbsUp size={14} />, value: 1121, label: '' },
    { icon: <ThumbsDown size={14} />, value: 112, onClick: () => { }, label: '' },
    { icon: <MessageSquareMore size={14} />, value: `${1} comments`, label: '' }
];


const PostDescription = () => {
    return (
        <div className="bg-white max-w-5xl mx-auto mt-5 flex items-center justify-center">
            <div className="space-y-4 px-8 py-8 rounded-2xl">
                <h1 className="text-xl font-bold">I am a garden</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, maiores!</p>
                <Badge variant='outline'>Category</Badge>
                <Image
                    src={postImage}
                    width={820}
                    height={720}
                    alt="post image"
                    className="rounded-xl"
                />
                <div className="mt-2 flex justify-between items-center gap-3">
                    <div className="flex gap-x-3">
                        {actions.map((action, index) => (
                            <div key={index} className="flex items-center gap-1 text-gray-500 cursor-pointer">
                                <>
                                    {action.icon}
                                    <p className="text-xs">{action.value}</p>
                                </>
                            </div>
                        ))}
                    </div>

                    {/* <span className="hidden sm:block" aria-hidden="true">&middot;</span> */}

                    <div className="flex gap-x-2">
                        <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                            Posted by
                            <a className="font-medium underline hover:text-gray-700"> John </a>
                        </p>

                        <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                            Created At {" "}
                            <span className="font-medium hover:text-gray-700"> 12.00 Am </span>
                        </p>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default PostDescription