import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import BlogPageLoadingSkeleton from '../components/blogspot/BlogPageLoadingSkeleton';
import { blogList } from '../dummy-data/data';

const OneBlogPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const currentBlog = blogList.find((blogDetails) => blogDetails.id === parseInt(id));

        if (currentBlog) {
            setTimeout(() => {
                setBlog(currentBlog);
            }, 1000);
        }
    }, []);


    return (
        <section className='max-w-6xl mx-auto my-2 p-1.5'>
            {
                blog
                    ?
                    <>
                        <div>
                            <Link className='flex items-center' to='/blogs'>
                                <div className="p-2 bg-gray-200 rounded-full">
                                    <ArrowLeftIcon className="w-4 stroke-gray-700 hover:stroke-gray-900 float-left rounded-full" />
                                </div>
                                <div className='ml-2'>GO Back</div>
                            </Link>
                        </div>

                        <header className='my-4 mx-auto text-center'>
                            <h3 className='text-sm mb-1'>Published on {blog.createdAt}</h3>
                            <h1 className='mb-4 text-center text-xl lg:text-2xl xl:text-3xl font-medium'>{blog.title}</h1>
                            {
                                blog.subCategory.map((category, index) =>
                                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{"#" + category}</span>
                                )
                            }
                            <img src={blog.cover} alt='blog-image' className='mt-3 object-cover w-full h-72 rounded-lg' />
                        </header>

                        <main className='mt-2'>
                            &emsp; {blog.description} <br /> <br />
                            &emsp; {blog.description} <br /> <br />
                            &emsp; {blog.description} <br /> <br />

                            <img src='' alt='blog-image' />

                            &emsp; {blog.description} <br /> <br />
                            &emsp; {blog.description} <br /> <br />
                            &emsp; {blog.description} <br /> <br />
                        </main>
                    </>
                    :
                    <BlogPageLoadingSkeleton />
            }
        </section>
    )
}

export default OneBlogPage