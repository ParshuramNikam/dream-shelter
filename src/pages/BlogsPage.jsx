import BlogPost from "../components/blogspot/BlogPost"
import { blogList } from "../dummy-data/data"

const BlogsPage = () => {
    return (
        <section>
            <div className="flex items-center justify-center my-3">
                <div className="w-max mx-2">
                    <input type="text" className="rounded w-60 px-3 py-2 border-2 border-cyan-700" placeholder={"Search by category.."} />
                    <button className="rounded px-5 py-2 bg-cyan-700 hover:bg-cyan-800 text-white ml-3"
                        onClick={() => alert("Cliked!")}
                    >
                        Go
                    </button>
                </div>
            </div>

            <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5" >
                {
                    blogList.map( blog => 
                        <BlogPost id={blog.id} title={blog.title} subCategory={blog.subCategory}  description={blog.description} authorName={blog.authorName} authorAvatar={blog.authorAvatar} cover={blog.cover} createdAt={blog.createdAt} />    
                    )
                }
            </div>
        </section>
    )
}

export default BlogsPage
