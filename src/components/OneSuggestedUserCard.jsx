import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import {
  UserAddIcon,
  CheckIcon,
  StatusOfflineIcon,
  TrashIcon,
} from "@heroicons/react/outline";

// Only one notication component :-
const OneSuggestedUserCard = () => {
  const noticationClickListner = () => {
    alert("Notication cliked!");
  };

  const [postOptions, setPostOptions] = useState([
    "Delete",
    "Mark As Read",
    "Turn Off",
  ]);

  return (
    <div className="max-w-max sm:max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-2">
      <img className="w-full h-52 object-cover object-center" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />
      <div className="py-4 px-6">
        <h1 className="text-lg font-semibold text-gray-800">Patterson johnson</h1>
        <p className="py-2 text-gray-700">Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>
        <div className="flex items-center mt-4 text-gray-700">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
            <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
          </svg>
          <h1 className="px-2 text-sm">California</h1>
        </div>
      </div>
    </div>
  );
};

export default OneSuggestedUserCard;


/* 
<div
      className="w-80 p-2 m-3 bg-gray-100 rounded flex cursor-pointer flex justify-between"
      onClick={() => noticationClickListner()}
    >
      <div className="flex items-center ">
        <div className="w-8 h-8 border rounded-full border-gray-500 ">
          <img
            className="h-8 w-8 rounded-full "
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="pl-3 aboslute ">
          <p className="text-sm leading-none">
            <span className="text-indigo-700">Justin Lancer</span>
            {/* <span className="text-indigo-700">item</span> */
/*      </p>
      <p className="text-xs leading-3 pt-1 text-gray-500">New To Dream Shelter</p>
      <p className="text-xs leading-3 pt-2 text-gray-500">Followed by Jim Carry + 11...</p>
    </div>
  </div>
    <div>
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
</div>
*/
