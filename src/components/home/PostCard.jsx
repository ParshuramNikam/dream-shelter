import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  BookmarkIcon,
  ChatIcon,
  HeartIcon,
  LinkIcon,
  MenuIcon,
  ShareIcon,
  XCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import classNames from "classnames";
import { Link } from "react-router-dom";

const PostCard = () => {
  const [like, setLike] = useState(false);

  const [postBtnClick, setPostBtnClick] = useState({
    like: false,
    comment: false,
    share: false,
  });

  const [postOptions, setPostOptions] = useState([
    "bookmark",
    "Copy link",
    "unfollow",
  ]);

  const postBtnClickAction = (btn) => {
    btn = btn.toLowerCase();
    switch (btn) {
      case "like":
        setPostBtnClick({ ...postBtnClick, like: !postBtnClick.like });
        break;
      case "comment":
        // setPostBtnClick({...postBtnClick, comment: !postBtnClick.comment});
        alert("Comment btn cliked");
        break;
      case "share":
        // setPostBtnClick({...postBtnClick, comment: !postBtnClick.comment});
        alert("Share btn cliked");
        break;
      default:
        break;
    }
  };

  return (
    <div className="pt-2 flex justify-center h-ma">
      {/* CARD */}
      <div className="post_card max-w-2xl rounded-lg overflow-hidden shadow-lg py-2 bg-white border border-gray-200">
        {/* Post header 👇 */}
        <div className="flex  items-center justify-between px-4 pt-2">
          <Link to={"/OtherProfilePage"}>
            
              <div className="flex  items-center">
                <img
                  className="w-10 mt-1 rounded-full"
                  src="https://shortner-urls.herokuapp.com/BeKgZyu"
                  alt="Avatar"
                />

                <div className="text-xs ml-2">
                  <p className="font-bold ">John Doe</p>
                  <p>Khopoli - Maharashtra</p>
                </div>
              </div>
            
          </Link>

          {/* Post header menu -> three dots */}
          <Menu as="div" className="ml-3 relative">
            <div>
              <Menu.Button className=" flex text-sm ">
                <span className="sr-only">Open user menu</span>
                <div className="font-lg">&#xFE19;</div>{" "}
                {/* &#xFE19; => html code for 3  dots */}
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                {postOptions.map((option, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700 w-full"
                        )}
                      >
                        {option.toLowerCase() === "bookmark" ? (
                          <BookmarkIcon className="h-4 w-4 flex float-left mr-3 stroke-1 stroke-indigo-800" />
                        ) : null}
                        {option.toLowerCase() === "copy link" ? (
                          <LinkIcon className="h-4 w-4 flex float-left mr-3 stroke-1 stroke-indigo-800" />
                        ) : null}
                        {option.toLowerCase() === "unfollow" ? (
                          <XCircleIcon className="h-4 w-4 flex float-left mr-3 stroke-1 stroke-indigo-800" />
                        ) : null}
                        <p className="float-left font-bold">{option}</p>
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        {/* Post image 👇 */}
        <img
          className="mt-3 object-cover w-full h-56 rounded-sm"
          src="https://shortner-urls.herokuapp.com/OxyrAsn"
          alt="Nature"
        />

        {/* Post Question answer */}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            Lorem ipsum dolor sit amet.
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            aliquid odio tenetur atque! Enim aperiam reiciendis commodi et
            deleniti sit. Ut amet ducimus accusamus. Quia.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>

        {/* Tages */}
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-100 text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-100 text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-100 text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>

        <div className="px-3 py-1 grid grid-cols-3">
          <button
            className="flex items-center justify-center hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer"
            onClick={() => postBtnClickAction("like")}
          >
            <HeartIcon
              className={`h-6 w-6 text-indigo-500 ${
                postBtnClick.like ? "fill-indigo-300" : ""
              } `}
            />
            <p className="ml-2">Like</p>
          </button>
          <button
            className="flex items-center justify-center hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer"
            onClick={() => postBtnClickAction("comment")}
          >
            <ChatIcon className="h-6 w-6 text-indigo-500" />
            <p className="ml-2">Comment</p>
          </button>
          <button
            className="flex items-center justify-center hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer"
            onClick={() => postBtnClickAction("share")}
          >
            <ShareIcon className="h-6 w-6 text-indigo-500" />
            <p className="ml-2">Share</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
