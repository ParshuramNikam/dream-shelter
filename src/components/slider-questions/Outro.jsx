import React from 'react'
import NextPrevBtns from './NextPrevBtns'

const Outro = ({ submitQuestions, nextBtnClickListner, prevBtnClickListner }) => {
    return (
        <div className="flex h-full justify-center items-center">
            <div>
                <h1 className='font-serif my-3 text-2xl font-medium '>
                    Fantastic—you're all set!
                </h1>
                <div className="flex justify-between">
                    <button className='mt-8 bg-gray-800 text-white py-2.5 px-6 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-800'
                        onClick={prevBtnClickListner}
                    >
                        back
                    </button>
                    <button className='mt-8 bg-gray-800 text-white py-2.5 px-6 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-800'
                        onClick={submitQuestions}
                    >
                        Let's do this
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Outro