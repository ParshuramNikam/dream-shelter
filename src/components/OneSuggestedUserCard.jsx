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
    <div
      className="w-100 p-2 m-3 bg-gray-100 rounded flex cursor-pointer flex justify-between"
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
            {/* <span className="text-indigo-700">item</span> */}
          </p>
          <p className="text-xs leading-3 pt-1 text-gray-500">New To Dream Shelter</p>
          <p className="text-xs leading-3 pt-2 text-gray-500">Followed by Jim Carry + 11...</p>
        </div>
      </div>
        <div>
        <button
          type="button"
          className="bg-gray-200 p-1.5 mt-3 mr-1 rounded-full text-gray-800 ml-7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">Suggestions</span>
          <UserAddIcon
            className="w-5 h-5 hover:stroke-cyan-800"
            aria-hidden="true"
          />
        </button>
    </div>
    </div>
  );
};

export default OneSuggestedUserCard;
