import NoPosts from "../UserProfile/NoPosts"
import PostCard from "./PostCard"

const PostsContainer = () => {
    return (
        <section className="overflow-y-auto px-2">
            <NoPosts />
            {/* <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/> */}
        </section>
    )
}

export default PostsContainer
