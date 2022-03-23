import React from 'react'

function QuestionLoadingSkeleton() {
  return (
    <div className='w-96 mt-10  '>
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
            </div>
  )
}

export default QuestionLoadingSkeleton