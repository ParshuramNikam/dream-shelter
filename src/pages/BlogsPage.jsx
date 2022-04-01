import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogPost from "../components/blogspot/BlogPost";
import { blogList } from "../dummy-data/data";
import { db, storage } from "../database/firebase.config.js";

const BlogsPage = ({userDetails}) => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    db.collection("blogPosts")
      .doc("suMBrSmkTuc5f4vwPdYC")
      .get()
      .then(async (snapshot) => {
        console.log(snapshot.data());
        await Object.keys(snapshot.data()).forEach((id) => {
          setBlogPosts((prevBlogArray) => [
            ...prevBlogArray,
            { blogId: id, blogDetails: snapshot.data()[id] },
          ]);
        });
      });

  }, []);

  return (
    <section>
      <div className="mt-2 sm:flex items-center justify-center sm:justify-between px-5 sm:px-10 gap-3 mt-2">
        <div className="w-max my-2">
          <input
            type="text"
            className=" rounded w-44 sm:w-60 px-3 py-2 border-2 border-cyan-700"
            placeholder={"Search by category.."}
          />
          <button
            className="rounded px-5 py-2 bg-cyan-700 hover:bg-cyan-800 text-white ml-3"
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

      <div className="px-5 sm:px-10 py-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {blogPosts.map((blog) => (
          <Link to={`/blog/${blog.id}`} key={blog.id}>
            <BlogPost
              id={blog.blogId}
              title={blog.blogDetails.title}
              subCategory={blog.blogDetails.tags}
              description={blog.blogDetails.description}
              authorId={blog.blogDetails.blogUserId}
              authorName={blog.blogDetails.fname+" "+blog.blogDetails.lname}
              authorAvatar={blog.blogDetails.photoURL}
            //   cover={blog.blogDetails.bane}
              createdAt={blog.blogDetails.createdAt}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogsPage;
