import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline'
import React from 'react'

const NextPrevBtns = ({ nextBtnClickListner, prevBtnClickListner }) => {
    return (
        <div className="relative bottom-3 right-3">
            <div className="flex justify-center items-center w-max">
                <button className="p-2 m-2 bg-gray-400 rounded-full"
                    onClick={prevBtnClickListner}
                >
                    <ArrowLeftIcon className='h-5 w-5 stroke stroke-gray-800' />
                </button>

                <button className="p-2 m-2 bg-gray-400 rounded-full"
                    onClick={nextBtnClickListner}
                >
                    <ArrowRightIcon className='h-5 w-5 stroke stroke-gray-800' />
                </button>
            </div>
        </div>
    )
}

export default NextPrevBtns