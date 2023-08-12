import PostComment from "@/components/forms/PostComment";
import PostCommentDisplay from "@/components/previews/PostCommentDisplay";
import PostWidget from "@/components/widgets/PostWidget";

const PostPage = ({ params }: { params: { postId: string } }) => {
    return (
        <div className="grid gap-y-6">
            <PostWidget postId={params.postId} />
            <PostComment postId={params.postId} />
            <PostCommentDisplay postId={params.postId} />
        </div>
    );
};

export default PostPage;
