import Comments from "@/components/Comments";
import PostDescription from "@/components/PostDescription";

interface SinglePostPageProps {
    params: {
        postId: string;
    };
}


const SinglePostPage = ({ params }: SinglePostPageProps) => {
    const { postId } = params
    console.log(postId);
    return (
        <div className="w-full overflow-auto hide-scrollbar">
            <PostDescription />
            <Comments />
        </div>
    )
}

export default SinglePostPage