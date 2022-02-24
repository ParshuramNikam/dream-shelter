import React from "react";

function UserDetailedInfo({edit}) {
  return (
    <div className="w-96 block bg-white  px-3 py-5 m-2 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
      <div className="profile-stats pt-1  pb-2">
        <ul className="flex justify-evenly text-center">
          <li className=" cursor-pointer border-r  border-gray-600">
            <span className="profile-stat-count font-bold text-gray-800 hover:text-cyan-700">
              164
            </span>{" "}
            Posts
          </li>
          <li className=" cursor-pointer border-r  border-gray-600">
            <span className="profile-stat-count font-bold text-gray-800 hover:text-cyan-700">
              188
            </span>{" "}
            Followers
          </li>
          <li className=" cursor-pointer">
            <span className="profile-stat-count font-bold text-gray-800 hover:text-cyan-700">
              206
            </span>{" "}
            Following
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center pt-2">
        <div className="px-3 py-1 grid grid-cols-2 ">
          <button className="flex items-center text-lg text-white bg-blue-800 justify-center hover:bg-blue-900  rounded-md cursor-pointer mr-2">
            <p className="">Follow</p>
          </button>
          <button className="flex items-center text-lg justify-center hover:bg-blue-800 hover:text-white text-blue-800 px-2 py-1.5 rounded-md cursor-pointer rounded-lg border-2 border-solid border-blue-800">
            <p className="mr-1">Message</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDetailedInfo;
