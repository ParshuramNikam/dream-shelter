import React from "react";

function UserSkills() {
  return (
    <div className="w-96 hidden lg:block  px-3 py-5 m-2 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
      <div className="">
        <div className="">
          <h1 className="flex justify-center pb-2 font-semibold text-xl">
            Skills 🖊
          </h1>
        </div >
        <div className="">
            <div className="ml-5 border-b text-base border-gray-400 pb-1">
                <p>React JS</p>
            </div>
            <div className="ml-5 border-b text-base  border-gray-400 pb-1">
                <p>Node JS</p>
            </div>
            <div className="ml-5 border-b  text-base border-gray-400 pb-1">
                <p>MongoDB</p>
            </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <h1 className="flex justify-center pb-2 font-semibold text-xl mt-3">
            Intrests🧠
          </h1>
        </div >
        <div className="">
            <div className="ml-5 border-b text-base border-gray-400 pb-1 ">
                <p>Geo-Politics</p>
            </div>
            <div className="ml-5 border-b text-base  border-gray-400 pb-1 ">
                <p>Learning New Technologies</p>
            </div>
            <div className="ml-5 border-b  text-base border-gray-400 pb-1">
                <p>Making YouTube Videos</p>
            </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <h1 className="flex justify-center pb-2 font-semibold text-xl mt-3">
            Education🎓
          </h1>
        </div >
        <div className="">
            <div className="ml-5 border-b text-base border-gray-400 pb-1 ">
                <p>Dominican University of California, Bay Area, San Francisco, CA</p>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default UserSkills;
