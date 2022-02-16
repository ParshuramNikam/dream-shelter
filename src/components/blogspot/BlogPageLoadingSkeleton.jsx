import React from 'react'

const BlogPageLoadingSkeleton = () => {
    return (
        <>
            <header className='my-4 mx-auto text-center'>

                <h3 className='max-w-sm mx-auto text-sm mb-3 flex animate-pulse bg-gray-300 w-full h-5 rounded '></h3>
                <h3 className='max-w-xl mx-auto text-sm mb-1 flex animate-pulse bg-gray-300 w-full h-5 rounded'></h3>

                <div className="flex items-center justify-center gap-5">
                    <div className="mt-3 bg-gray-300 animate-pulse h-6 w-20 rounded"></div>
                    <div className="mt-3 bg-gray-300 animate-pulse h-6 w-20 rounded"></div>
                    <div className="mt-3 bg-gray-300 animate-pulse h-6 w-20 rounded"></div>
                </div>

                <div className="bg-gray-200 h-56 w-full mt-10  animate-pulse rounded-lg"></div>
            </header>

            <main className='mt-10'>
                <div className="mt-4">
                    <div className="bg-gray-200 h-4 w-full mb-2 animate-pulse rounded-sm"></div>
                    <div className="bg-gray-200 h-4 w-full mb-2 animate-pulse rounded-sm"></div>
                    <div className="bg-gray-200 h-4 w-full mb-2 animate-pulse rounded-sm"></div>
                    <div className="bg-gray-200 h-4 w-5/12 mb-2 animate-pulse rounded-sm"></div>
                </div>
                <div className="mt-4">
                    <div className="bg-gray-200 h-4 w-full mb-2 animate-pulse rounded-sm"></div>
                    <div className="bg-gray-200 h-4 w-full mb-2 animate-pulse rounded-sm"></div>
                    <div className="bg-gray-200 h-4 w-full mb-2 animate-pulse rounded-sm"></div>
                    <div className="bg-gray-200 h-4 w-8/12 mb-2 animate-pulse rounded-sm"></div>
                </div>
                <div className="mt-4">
                    <div className="bg-gray-200 h-4 w-full mb-2 animate-pulse rounded-sm"></div>
                    <div className="bg-gray-200 h-4 w-full mb-2 animate-pulse rounded-sm"></div>
                    <div className="bg-gray-200 h-4 w-full mb-2 animate-pulse rounded-sm"></div>
                    <div className="bg-gray-200 h-4 w-6/12 mb-2 animate-pulse rounded-sm"></div>
                </div>
            </main>
        </>
    )
}

export default BlogPageLoadingSkeleton