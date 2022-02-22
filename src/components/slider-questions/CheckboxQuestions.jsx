import React from 'react'
import NextPrevBtns from './NextPrevBtns'

const CheckboxQuestions = ({ question, nextBtnClickListner, prevBtnClickListner }) => {
  return (
    <div className="flex flex-col h-full justify-center ">
            <div className="mb-10">
                <h3 className='text-2xl font-medium '>
                    {question.id} &#8594; &nbsp;{question.question}
                    <span className='text-red-900 ml-2'>*</span>
                </h3>
                <div className="mx-3 my-5">
                    <input type="text" placeholder='Type your answer here...'
                        className=' w-full text-lg bg-transparent px-3 py-3 border-b-2 border-b-gray-700 focus:border-b-gray-900 focus:outline-none'
                    />
                </div>
            </div>
            <NextPrevBtns nextBtnClickListner={nextBtnClickListner} prevBtnClickListner={prevBtnClickListner}  />
        </div>
  )
}

export default CheckboxQuestions