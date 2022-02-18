import React from "react";

function OtherUserDetailedInfo() {
  return (
    <div className="w-96 hidden lg:block  px-3 py-5 m-2 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
      <div className="flex justify-start border-b  border-gray-600 pb-1">
        <div className="flex">
          <div>
            <p className="text-base font-semibold   w-28">Full Name</p>
          </div>
        </div>
        <div className="text-gray-500 ">
          <p>Kshiti Ross Ghelani</p>
        </div>
      </div>
      <div className="flex justify-start border-b  border-gray-600 pb-1">
        <div className="flex">
          <div>
            <p className="text-base font-semibold   w-28">E-mail</p>
          </div>
        </div>
        <div className="text-gray-500 ">
          <p>@kshitighelani.com</p>
        </div>
      </div>
      <div className="flex justify-start border-b  border-gray-600 pb-1">
        <div className="flex">
          <div>
            <p className="text-base font-semibold   w-28">Mobile</p>
          </div>
        </div>
        <div className="text-gray-500 ">
          <p>+13 9234283491</p>
        </div>
      </div>
      <div className="flex justify-start border-b  border-gray-600 pb-1">
        <div className="flex">
          <div>
            <p className="text-base font-semibold   w-28">Status</p>
          </div>
        </div>
        <div className="text-gray-500 ">
          <p>Tell anything about you, only in one sentence. </p>
        </div>
      </div>
      <div className="flex justify-start border-b  border-gray-600 pb-1">
        <div className="flex">
          <div>
            <p className="text-base font-semibold   w-24">Detail Address</p>
          </div>
        </div>
        <div className="text-gray-500 pl-3">
          <p>Bay Area, San Francisco, CA Bay Area, San Francisco, CA</p>
        </div>
      </div>
      {/* <div className="flex justify-center pt-2">
        <div className="flex">
          <button className="flex items-center text-lg text-white bg-blue-800 justify-center hover:bg-blue-900  rounded-md cursor-pointer px-3 py-1">
            <p className="">Edit</p>
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default OtherUserDetailedInfo;
