import React from "react";
import { UserAddIcon } from "@heroicons/react/outline";

const SuggestedUsers = () => {
  // const [mySuggestions, setMySuggestions] = useState(false);

  const noticationClickListner = () => {
    alert("Profile cliked!");
  };

  const handleClick = () => {
    alert("see All Clicked!");
  };

  return (
    <section className="w-75 hidden lg:block  h-max px-1 py-2 m-2 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
      <div className="flex justify-between pr-2 ">
        <h1 className="pl-2 font-semibold text-base">Suggestions For You</h1>
        <button className="hover:bg-gray-100 rounded-md cursor-pointer px-2 text-xs" onClick={() => handleClick()}>See All</button>
      </div>
      <div
        className="w-60 p-1 m-2 rounded flex justify-between cursor-pointer"
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
        <button
          type="button"
          className="bg-gray-200 p-1.5 rounded-full text-gray-800 ml-7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">Suggestions</span>
          <UserAddIcon
            className="h-5 w-5 hover:stroke-cyan-800"
            aria-hidden="true"
          />
        </button>
      </div>
      <div
        className="w-60 p-1 m-2 rounded flex justify-between cursor-pointer"
        onClick={() => noticationClickListner()}
      >
        <div className="w-8 h-8  flex items-center justify-center">
          <img
            className="h-8 w-12 rounded-full"
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        </div>
        <div className="pl-3">
          <p className="text-sm leading-none">
            <span className="text-indigo-700 font-semibold">Rachel Green</span>
            {/* favourited an <span className="text-indigo-700">item</span> */}
          </p>
          <p className="text-xs leading-3 pt-1 text-gray-500">
            Followed by Jim Carry
          </p>
        </div>
        <button
          type="button"
          className="bg-gray-200 p-1.5 rounded-full text-gray-800 ml-7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">Suggestions</span>
          <UserAddIcon
            className="h-5 w-5 hover:stroke-cyan-800"
            aria-hidden="true"
          />
        </button>
      </div>
      <div
        className="w-60 p-1 m-2  rounded flex justify-between cursor-pointer"
        onClick={() => noticationClickListner()}
      >
        <div className="w-8 h-8 flex items-center justify-center">
          <img
            className="h-8 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="pl-3">
          <p className="text-sm leading-none">
            <span className="text-indigo-700 font-semibold">David Beckham</span>
            {/* favourited an <span className="text-indigo-700">item</span> */}
          </p>
          <p className="text-xs leading-3 pt-1 text-gray-500">
            Followed by John Doe
          </p>
        </div>
        <button
          type="button"
          className="bg-gray-200 p-1.5 rounded-full text-gray-800 ml-7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">Suggestions</span>
          <UserAddIcon
            className="w-5 h-5 hover:stroke-cyan-800"
            aria-hidden="true"
          />
        </button>
      </div>
      
    </section>
  );
};

export default SuggestedUsers;
