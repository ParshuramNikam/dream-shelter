import React from "react";

function Activity() {
  return (
    <div className="grow   h-max m-2 mt-3   overflow-hidden shadow-lg bg-blue-500">
      <div className="grid grid-cols-2 gap-0">
        <div className="  bg-blue-500 py-1 hover:border-2">
          <div className="flex  justify-center font-medium text-2xl text-base text-white  bg-blue-500 ">
            3
          </div>
          <div className="flex justify-center font-medium text-base text-white  bg-blue-500 ">
            Questions
          </div>
        </div>
        <div className="  bg-blue-600 py-1 hover:border-2">
          <div className="flex justify-center font-medium text-2xl text-base text-white  bg-blue-600 ">
            7
          </div>
          <div className="flex justify-center font-medium text-base text-white  bg-blue-600 ">
            Answers
          </div>
        </div>

        <div className="  bg-blue-600 py-1 hover:border-2">
          <div className="flex justify-center font-medium text-2xl text-base text-white  bg-blue-600 ">
            255
          </div>
          <div className="flex justify-center font-medium text-base text-white  bg-blue-600 ">
            Followers
          </div>
        </div>
        <div className="  bg-blue-500 py-1 hover:border-2">
          <div className="flex justify-center font-medium text-2xl text-base text-white  bg-blue-500 ">
            65
          </div>
          <div className="flex justify-center font-medium text-base text-white  bg-blue-500 ">
            Following
          </div>
        </div>

        <div className="  bg-blue-500 py-1 hover:border-2">
          <div className="flex justify-center font-medium text-2xl text-base text-white  bg-blue-500 ">
            3
          </div>
          <div className="flex justify-center font-medium text-base text-white  bg-blue-500 ">
            Posts
          </div>
        </div>
        <div className="  bg-blue-600 py-1 hover:border-2">
          <div className="flex justify-center font-medium text-2xl text-base text-white  bg-blue-600 ">
            5
          </div>
          <div className="flex justify-center font-medium text-base text-white  bg-blue-600 ">
            Edits
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
