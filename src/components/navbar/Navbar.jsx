import React from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import classNames from "classnames";
import NavItems from "./NavItems";
import OneNavItem from "./OneNavItem";
import NavSearchBar from "./NavSearchBar";
import { SearchIcon } from "@heroicons/react/outline";
import { useUserAuth } from "../../context/UserAuthContextProvider";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const navBarItems = [
  { title: "Home", icon: "HomeIcon", path: "/" },
  { title: "Add Friends", icon: "UsersIcon", path: "/SuggestionPage" },
  { title: "Chat-Box", icon: "ChatAltIcon", path: "/messenger" },
  { title: "Create-A-Post", icon: "PlusCircleIcon", path: "/create-post" },
  { title: "Blog-Post", icon: "NewspaperIcon", path: "/blogs" },
  { title: "Notifications", icon: "BellIcon", path: "/notifications" },
  { title: "BookMarks", icon: "BookmarkAltIcon", path: "/bookmarks" },
];

const Navbar = () => {
  const [toggleSearchBox, setToggleSearchBox] = useState(false);

  const { user, logOut } = useUserAuth();

  const history = useHistory();

  const logOutHandler = () => {
    logOut().then(() => {
      history.push("/login");
    }).catch((err) => alert("Signout Error : " + err))
  }

  return (
    <>
      <nav className="w-full bg-white border-b-2 border-b-gray-400 md:border-b-white px-2">
        <div className=" py-2 max-w-7xl mx-auto flex items-center justify-between">
          <div
            className={`flex items-center ${toggleSearchBox ? "hidden" : ""}`}
          >
            {/* navbar logo and company name */}
            <Link to={"/aboutus"}>
              <div className={` flex-shrink-0 flex items-center`}>
                <img
                  className="block  h-8 w-auto rounded-full"
                  src="/images/logo.jpg"
                  alt="Dream Shelter"
                />
                <div className="hidden sm:block whitespace-nowrap font-bold text-xl font-size cursor-pointer items-center font-[Poppins] text-gray-800 mr-2">
                  <span className="text-5x1 text-blue-600 mr-0 lg:mr-2">
                    <ion-icon name="logo-ionic"></ion-icon>
                  </span>
                  Dream Shelter
                </div>
              </div>
            </Link>

            {/* toggle navbar button in mobile device */}
            <label htmlFor="search_bar">
              <button
                onClick={() => {
                  setToggleSearchBox(!toggleSearchBox);
                  console.log("toggle search box is " + !toggleSearchBox);
                }}
                className={`lg:hidden ${toggleSearchBox ? "hidden" : ""
                  } bg-gray-200 ml-2  p-1.5 rounded border-2 bordler-gray-500 text-gray-800 m-1.5 focus:outline-none`}
              >
                <SearchIcon className=" text-gray-600 h-4 w-4 stroke-2 stroke-black k" />
              </button>
            </label>
          </div>

          <div
            className={`my-auto ${toggleSearchBox ? "block w-100 mx-auto" : "hidden"
              } lg:block`}
          >
            <NavSearchBar
              toggleSearchBox={toggleSearchBox}
              setToggleSearchBox={setToggleSearchBox}
            />
          </div>

          <div className={`flex ${toggleSearchBox ? "hidden" : ""}`}>
            {/* Nav Items */}
            <div className="hidden sm:block">
              {navBarItems.map((item, index) => (
                <OneNavItem
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  path={item.path}
                />
              ))}
            </div>

            {/* Profile dropdown */}
            {
              user && <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="bg-gray-200 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
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
                  <Menu.Items className="z-50 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to={`/myprofile/${localStorage.getItem('ds-user-uid')}`}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Your Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          onClick={logOutHandler}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "cursor-pointer px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Sign out
                        </div>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            }
          </div>
        </div>
      </nav>
      <div className="z-20 block sm:hidden max-w-7xl mx-auto py-2 sticky top-0 bg-white shadow">
        <div className="grid grid-row grid-cols-7 items-center justify-center sticky top-0">
          {navBarItems.map((item, index) => (
            <OneNavItem
              key={index}
              title={item.title}
              icon={item.icon}
              path={item.path}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
