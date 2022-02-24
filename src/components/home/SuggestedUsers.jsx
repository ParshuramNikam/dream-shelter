import React, { useState } from "react";
import { UserAddIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const SuggestedUsers = () => {
  const [suggestedUsers, setSuggestedUsers] = useState([1, 2, 3, 4, 5]);

  const noticationClickListner = () => {
    alert("Profile cliked!");
  };

  const handleClick = () => {
    // alert("see All Clicked!");
  };

  return (
    <section className="w-72 hidden lg:block  h-max px-1 py-2 m-2 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
      <Link to={"/SuggestionPage"}>
        <div className="flex justify-between pr-2 mb-3">
          <h1 className="pl-2 font-semibold text-base">Suggestions For You</h1>
          <button
            className="hover:bg-gray-100 rounded-md cursor-pointer px-2 text-xs"
            onClick={() => handleClick()}
          >
            See All
          </button>
        </div>
      </Link>

      {suggestedUsers.map((index) => (
        <div className="flex">
        <div
          key={index}
          className=" p-1 m-2 rounded flex justify-between cursor-pointer"
          onClick={() => noticationClickListner()}
        >
          <div className="w-8 h-8  flex items-center justify-center">
            <img
              className="h-8 w-12 rounded-full"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="pl-3">
            <p className="text-sm leading-none">
              <span className="text-indigo-700 font-semibold">Jim Carry</span>
              {/* favourited an <span className="text-indigo-700">item</span> */}
            </p>
            <p className="text-xs leading-3 pt-1 text-gray-500">
              New to Dream Shelter
            </p>
          </div>
          </div>
          <div className="ml-2 relative top-4 ">
            <button
              type="button"
              className="bg-gray-200 p-1.5 rounded-full text-gray-800 ml-7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only ">Suggestions</span>
              <UserAddIcon
                className="h-5 w-5 hover:stroke-cyan-800"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SuggestedUsers;
