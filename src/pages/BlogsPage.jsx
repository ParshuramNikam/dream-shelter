import { Link } from "react-router-dom"
import BlogPost from "../components/blogspot/BlogPost"
import { blogList } from "../dummy-data/data"

const BlogsPage = () => {
    return (
        <section>
            <div className="mt-2 sm:flex items-center justify-center sm:justify-between px-5 sm:px-10 gap-3 mt-2">
                <div className="w-max my-2">
                    <input type="text" className=" rounded w-44 sm:w-60 px-3 py-2 border-2 border-cyan-700" placeholder={"Search by category.."} />
                    <button className="rounded px-5 py-2 bg-cyan-700 hover:bg-cyan-800 text-white ml-3"
                        onClick={() => alert("Cliked!")}
                    >
                        Go
                    </button>
                </div>
                <div>
                    <Link to="/create-post">
                        <button className="rounded px-5 py-2 bg-cyan-700 hover:bg-cyan-800 text-white ml-3">
                            Create Blog
                        </button>
                    </Link>
                </div>
            </div>

            <div className="px-5 sm:px-10 py-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5" >
                {
                    blogList.map(blog =>
                        <Link to={`/blog/${blog.id}`} key={blog.id}>
                            <BlogPost id={blog.id} title={blog.title} subCategory={blog.subCategory} description={blog.description} authorName={blog.authorName} authorAvatar={blog.authorAvatar} cover={blog.cover} createdAt={blog.createdAt} />
                        </Link>
                    )
                }
            </div>
        </section>
    )
}

export default BlogsPage
