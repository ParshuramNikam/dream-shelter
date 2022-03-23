import React from 'react'

const Intro = ({nextBtnClickListner, prevBtnClickListner}) => {
    return (
        <div className="flex h-full justify-center items-center">
            <div>
                <h1 className='font-serif my-3 text-2xl font-medium '>
                    <span className=''>&ldquo;</span> Let's get you set up
                </h1>
                <p className="text-lg mx-2 text-gray-800">
                    It only takes a moment. And it'll make your time with DreamShelter forum even better.
                </p>
                <button className='float-right mt-8 bg-gray-800 text-white py-2.5 px-6 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-800'
                    onClick={nextBtnClickListner}
                >
                    Get set up
                </button>
            </div>
        </div>
    )
}

export default Intro