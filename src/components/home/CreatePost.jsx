import React from "react";
import { ChatIcon, HeartIcon, NewspaperIcon, PhotographIcon, ShareIcon, VideoCameraIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function CreatePost() {
  return (
    <section className="w-100 hidden lg:block  px-3 py-5 m-2 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
      <div className="flex gap-3 relative items-center ">
        <img
          className="h-12 w-12 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
          alt=""
        />
        <Link to={"/create-post"} className="grow w-full">
          <div className="grow relative mx-auto text-gray-600">
            <input
              className="w-full border-2 border-gray-300 bg-gray-50 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="text"
              name="Write"
              placeholder="Write a post"
            />
          </div>
        </Link>
      </div>
      <Link to={"/create-post"}>
        <div className="px-3 py-1 grid grid-cols-3">
          <button className="flex items-center justify-center hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
            <PhotographIcon className={"h-6 w-6 text-orange-500 "} />
            <p className="mr-1">Photo</p>
          </button>
          <button className="flex items-center justify-center hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
            <VideoCameraIcon className="h-6 w-6 text-teal-400" />
            <p className="mr-1">Video</p>
          </button>
          <button className="flex items-center justify-center hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
            <NewspaperIcon className="h-6 w-6 text-red-400" />
            <p className="mr-1">Article</p>
          </button>
        </div>
      </Link>
    </section>
  );
}

export default CreatePost;
