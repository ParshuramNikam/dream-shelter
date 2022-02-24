import { ShareIcon, SearchIcon, CogIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { categories } from "../../dummy-data/data";

const UserProfileCard = ({ edit }) => {
  return (
    <section className=" max-w:sm lg:block bg-white  h-max px-3 py-5 m-2 border border-gray-200 rounded-lg  overflow-hidden shadow-lg">
      {/* <div className=" justify-center items-center"> */}
      <div className="flex flex-wrap justify-end pb-2 ">
        <button
          type="button"
          className=" p-1 rounded-full text-gray-800  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">Share</span>
          <ShareIcon
            className="w-5 h-5 hover:stroke-cyan-800"
            aria-hidden="true"
          />
        </button>
        <button
          type="button"
          className=" p-1 rounded-full text-gray-800  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">Edit Profile</span>
          <CogIcon
            className="w-5 h-5 hover:stroke-cyan-800"
            aria-hidden="true"
          />
        </button>
      </div>
      <div className="flex  mx-auto text-gray-600 justify-center  items-center">
        <img
          className="flex h-60 w-40 rounded-lg"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
      </div>
      <div className="flex justify-center items-center text-cyan-700   font-semibold text-2xl pt-3">
        <h4>Kshiti Ghelani</h4>
      </div>
      <div className="flex justify-center text-gray-700 items-center font-medium text-base pt-1">
        <p>Full Stack Developer</p>
      </div>
      <div className="flex justify-center text-gray-700 border-b  border-gray-600 pb-2 items-center font-normal text-base">
        <p>San Francisco, CA</p>
      </div>
      <div className="profile-stats pt-1 border-b  border-gray-600 pb-1">
        <ul className="flex justify-evenly text-center">
          <li className=" cursor-pointer">
            <span className="profile-stat-count font-bold text-gray-800 hover:text-cyan-700">164</span> posts
          </li>
          <li className=" cursor-pointer">
            <span className="profile-stat-count font-bold text-gray-800 hover:text-cyan-700">188</span> followers
          </li>
          <li className=" cursor-pointer">
            <span className="profile-stat-count font-bold text-gray-800 hover:text-cyan-700">206</span> following
          </li>
        </ul>
      </div>
      <div className="profile-bio">
        <p className="text-center pt-1">
          <span className="profile-real-name"></span>Tell anything about you, only in one sentence. 📷✈️🏕️
        </p>
      </div>
      {!edit ? (
        <>
          <div className="flex justify-center items-center pt-3">
            <div className="px-3 py-1 grid grid-cols-2 ">
              <button className="flex items-center text-lg text-white bg-blue-800 justify-center hover:bg-blue-900  rounded-md cursor-pointer mr-2">
                <p className="">Follow</p>
              </button>
              <button className="flex items-center text-lg justify-center hover:bg-blue-800 hover:text-white text-blue-800 px-2 py-1.5 rounded-md cursor-pointer rounded-lg border-2 border-solid border-blue-800">
                <p className="mr-1">Message</p>
              </button>
            </div>
          </div>
        </>
      ) : null}
      {/* </div> */}
    </section>
  );
};

export default UserProfileCard;
