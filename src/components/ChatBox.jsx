import React from "react";
import { PencilAltIcon, SearchIcon, UserAddIcon } from "@heroicons/react/outline";

function ChatBox() {
  const noticationClickListner = () => {
    alert("Profile cliked!");
  };

  const handleClick = () => {
    alert("see All Clicked!");
  };

  return (
    <section className="w-75 hidden lg:block  h-max px-1 py-2 m-2 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
      <div className="flex justify-between pr-2 ">
        <h1 className="pl-2 font-semibold text-base">Messages</h1>
        <button
          type="button"
          className=" p-1.5 rounded-full text-gray-800 ml-7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">New Message</span>
          <PencilAltIcon
            className="w-5 h-5 hover:stroke-cyan-800"
            aria-hidden="true"
          />
        </button>
      </div>
      <div class="pt-2 relative mx-auto text-gray-600">
        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search"/>
        <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
          <SearchIcon className="h-5 w-5 hover:stroke-cyan-800"
											aria-hidden="true"/>
        </button>
      </div>
      <div
        className="w-60 p-1 m-2 rounded flex justify-start cursor-pointer"
        onClick={() => noticationClickListner()}
      >
        <div className="w-8 h-8  flex items-center justify-center">
          <img
            class="h-8 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt=""
          />
        </div>
        <div className="pl-3">
          <p className="text-sm leading-none">
            <span className="text-indigo-700 font-semibold">Richard Henriksen</span>
            {/* favourited an <span className="text-indigo-700">item</span> */}
          </p>
          <p className="text-xs leading-3 pt-1 text-gray-500">
            Active 21m ago
          </p>
        </div>
      </div>
      <div
        className="w-60 p-1 m-2 rounded flex justify-start cursor-pointer"
        onClick={() => noticationClickListner()}
      >
        <div className="w-8 h-8  flex items-center justify-center relative ">
          <img
            class="h-8 w-12 rounded-full "
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="absolute w-2.5 h-2.5 rounded bg-lime-500 bottom-0.5 right-0.5"></div>
        </div>
        <div className="pl-3">
          <p className="text-sm leading-none">
            <span className="text-indigo-700 font-semibold">Grace Kelly</span>
            {/* favourited an <span className="text-indigo-700">item</span> */}
          </p>
          <p className="text-xs leading-3 pt-1 text-gray-500">
            You: Thank you
          </p>
        </div>
      </div>
      <div
        className="w-60 p-1 m-2  rounded flex justify-start cursor-pointer"
        onClick={() => noticationClickListner()}
      >
        <div className="w-8 h-8 flex items-center justify-center">
          <img
            class="h-8 w-12 rounded-full"
            src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        </div>
        <div className="pl-3">
          <p className="text-sm leading-none">
            <span className="text-indigo-700 font-semibold">Kevin Hart</span>
            {/* favourited an <span className="text-indigo-700">item</span> */}
          </p>
          <p className="text-xs leading-3 pt-1 text-gray-500">
            Send a post
          </p>
        </div>
      </div>
      <div
        className="w-60 p-1 m-2  rounded flex justify-start cursor-pointer"
        onClick={() => noticationClickListner()}
      >
        <div className="w-8 h-8 flex items-center justify-center relative">
          <img
            class="h-8 w-12 rounded-full"
            src="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="absolute w-2.5 h-2.5 rounded bg-lime-500 bottom-0.5 right-0.5"></div>
        </div>
        <div className="pl-3">
          <p className="text-sm leading-none">
            <span className="text-indigo-700 font-semibold">Dwayne Johnson</span>
            {/* favourited an <span className="text-indigo-700">item</span> */}
          </p>
          <p className="text-xs leading-3 pt-1 text-gray-500">
            Active now
          </p>
        </div>
      </div>
      <div
        className="w-60 p-1 m-2  rounded flex justify-start cursor-pointer"
        onClick={() => noticationClickListner()}
      >
        <div className="w-8 h-8 flex items-center justify-center">
          <img
            class="h-8 w-12 rounded-full"
            src="https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        </div>
        <div className="pl-3">
          <p className="text-sm leading-none">
            <span className="text-indigo-700 font-semibold">Tim Smith</span>
            {/* favourited an <span className="text-indigo-700">item</span> */}
          </p>
          <p className="text-xs leading-3 pt-1 text-gray-500">
            Tim: Okay
          </p>
        </div>
      </div>
      <div
        className="w-60 p-1 m-2  rounded flex justify-start cursor-pointer"
        onClick={() => noticationClickListner()}
      >
        <div className="w-8 h-8 flex items-center justify-center">
          <img
            class="h-8 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt=""
          />
        </div>
        <div className="pl-3">
          <p className="text-sm leading-none">
            <span className="text-indigo-700 font-semibold">Richard Henriksen</span>
            {/* favourited an <span className="text-indigo-700">item</span> */}
          </p>
          <p className="text-xs leading-3 pt-1 text-gray-500">
            Richard: Hii
          </p>
        </div>
      </div>
      <div
        className="w-60 p-1 m-2  rounded flex justify-start cursor-pointer"
        onClick={() => noticationClickListner()}
      >
        <div className="w-8 h-8 flex items-center justify-center relative">
          <img
            class="h-8 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
          <div className="absolute w-2.5 h-2.5 rounded bg-lime-500 bottom-0.5 right-0.5"></div>
        </div>
        <div className="pl-3">
          <p className="text-sm leading-none">
            <span className="text-indigo-700 font-semibold">Jim Carry</span>
          </p>
          <p className="text-xs leading-3 pt-1 text-gray-500">
            Jim: fine.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ChatBox;
