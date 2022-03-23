import React from 'react'

function QuestionLoadingSkeleton() {
    return (
        <div className='w-100 md:w-96'>
            <div className="pt-2 flex justify-center h-max">
                {/* CARD */}
                <div className="post_card w-full rounded-lg overflow-hidden shadow-lg py-2 bg-white border border-gray-200">
                    {/* Post header 👇 */}
                    <div className="flex  items-center justify-between px-4 pt-2">
                        <div className="flex  items-center">
                            <div
                                className="w-10 h-10 rounded-full bg-gray-300 animate-pulse"
                            // src="https://shortner-urls.herokuapp.com/BeKgZyu"
                            >

                            </div>

                            <div className="text-xs ml-2 ">
                                <p className="font-bold flex justify-center items-center">
                                    <div className='h-3 w-20 bg-gray-300 animate-pulse'></div> &nbsp;
                                    <div className='h-3 w-20 bg-gray-300 animate-pulse'></div>
                                </p>
                                <p className='mt-1'>
                                    <div className='h-3 w-24 bg-gray-300 animate-pulse'></div>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Post Question answer */}
                    <div className="px-6 py-4 pt-6">
                        <div className="font-bold text-xl mb-2 hover:underline">
                            <div className='h-4 w-full bg-gray-300 animate-pulse '></div>
                            <div className='h-4 w-full bg-gray-300 mt-1 animate-pulse '></div>
                            <div className='h-4 w-24 bg-gray-300 mt-1 animate-pulse '></div>
                        </div>
                        <p className="text-gray-700 text-base mt-5">
                            <div className=" flex gap-2 ">
                                <div
                                    className="w-10 h-9 mt-2 rounded-full bg-gray-300 animate-pulse"
                                />
                                <div className="bg-gray-300 animate-pulse w-full mr-1 my-1 p-1 rounded-tr rounded-br rounded-bl">
                                    <p className="text-sm font-semibold text-black flex">
                                        <p className='h-3 w-5 animate-pulse'></p>
                                        <p className='h-3 w-5 animate-pulse'></p>
                                    </p>
                                    <p className="">
                                        <p className='h-3 w-full animate-pulse'></p>
                                        <p className='h-3 w-full animate-pulse'></p>
                                        <p className='h-3 w-full animate-pulse'></p>
                                        <p className='h-3 w-full animate-pulse'></p>
                                        <p className='h-3 w-42 animate-pulse'></p>
                                    </p>
                                </div>
                            </div>

                        </p>
                    </div>

                    <div className="px-3 py-1 grid grid-cols-4 gap-2">
                        <div
                            className="flex items-center justify-center bg-gray-300 animate-pulse px-1 py-2 rounded-md"
                        >
                            <div className='h-4 w-6 animate-pulse '></div>
                            {/* <p className="ml-2">{postBtnClick.like ? 'Unlike' : 'Like'}</p> */}
                        </div>
                        <div
                            className="flex items-center justify-center bg-gray-300 animate-pulse px-3 py-2 rounded-md"
                        // onClick={() => postBtnClickAction("answer")}
                        >
                            <div className='h-4 w-6 animate-pulse '></div>
                        </div>
                        <div
                            className="flex items-center justify-center bg-gray-300 animate-pulse px-3 py-2 rounded-md"
                        >
                            <div className='h-4 w-6 animate-pulse '></div>
                        </div>

                        <div
                            className="flex items-center justify-center bg-gray-300 animate-pulse px-3 py-2 rounded-md"
                        >
                            <div className='h-4 w-6 animate-pulse '></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default QuestionLoadingSkeleton