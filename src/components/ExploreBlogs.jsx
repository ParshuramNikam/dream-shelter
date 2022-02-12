import { Link } from "react-router-dom"
import HorizontalBlog from "./HorizontalBlog"

const ExploreBlogs = () => {
    return (
        <section className="sticky top-2 w-80 hidden lg:block  h-max px-3 pt-3 m-2 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
            
            <div className="flex flex-wrap justify-between items-center pb-3">
                <div className="text-cyan-900 font-semibold">Explore Blogs</div>
                <Link to={"/blogs"} className="text-xs text-gray-800 font-medium">See all</Link>
            </div>

            <hr />

            <HorizontalBlog id={1}/>
            <HorizontalBlog id={2}/>
            <HorizontalBlog id={3}/>
            <HorizontalBlog id={4}/>
            <HorizontalBlog id={5}/>

        </section>
    )
}

export default ExploreBlogs
