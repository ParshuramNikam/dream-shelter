import { useState } from "react";
import {
  ChatIcon,
  NewspaperIcon,
  PhotographIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import PostQuestionPopup from "./PostQuestionPopup";
import { Fragment } from "react";

function CreatePost({ ishidden }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <section
      className={`w-100 ${
        ishidden ? "hidden lg:block" : "block"
      }  px-3 py-5 m-2 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg`}
    >
      <div className="flex gap-3 relative items-center ">
        <img
          className="h-12 w-12 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
          alt=""
        />
        <div
          className="grow w-full bg-gray-200 text-gray-600 rounded-lg h-10 px-3 py-2.5 cursor-pointer"
          onClick={openModal}
        >
          Ask a Question...
        </div>
      </div>
      <PostQuestionPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
      />
    </section>
  );
}

export default CreatePost;
