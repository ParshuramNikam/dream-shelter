import React from 'react'
import { BellIcon, BookmarkAltIcon, ChatAltIcon, HomeIcon, NewspaperIcon, PlusCircleIcon, UsersIcon } from '@heroicons/react/outline';
import { Fragment } from "react";
import { Link } from 'react-router-dom';

const OneNavItem = ({ title, icon, path }) => {
    return (
        <Link to={path} className={`${title==="Create-A-Post" ? "sm:hidden": "inline-block" } w-max  mx-auto`} >
            <button
                type="button"
                className="bg-gray-200 p-1 rounded-full text-gray-800 m-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
                <span className="sr-only">Add Friends</span>
                {
                    icon === "HomeIcon"
                        ? <HomeIcon className="h-6 w-6  hover:stroke-cyan-800"
                            aria-hidden="true" /> : null
                }
                {
                    icon === "UsersIcon"
                        ? <UsersIcon className="h-6 w-6  hover:stroke-cyan-800"
                            aria-hidden="true" /> : null
                }
                {
                    icon === "ChatAltIcon"
                        ? <ChatAltIcon className="h-6 w-6  hover:stroke-cyan-800"
                            aria-hidden="true" /> : null
                }
                {
                    icon === "PlusCircleIcon"
                        ? <PlusCircleIcon className="h-6 w-6  hover:stroke-cyan-800"
                            aria-hidden="true" /> : null
                }
                {
                    icon === "NewspaperIcon"
                        ? <NewspaperIcon className="h-6 w-6  hover:stroke-cyan-800"
                            aria-hidden="true" /> : null
                }
                {
                    icon === "BellIcon"
                        ? <BellIcon className="h-6 w-6  hover:stroke-cyan-800"
                            aria-hidden="true" /> : null
                }
                {
                    icon === "BookmarkAltIcon"
                        ? <BookmarkAltIcon className="h-6 w-6  hover:stroke-cyan-800"
                            aria-hidden="true" /> : null
                }
            </button>
        </Link>
    )
}

export default OneNavItem