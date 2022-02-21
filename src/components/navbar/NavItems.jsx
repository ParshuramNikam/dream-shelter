import { Disclosure } from '@headlessui/react';
import { BellIcon, ChatAltIcon, HomeIcon, NewspaperIcon, PlusCircleIcon, UsersIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavItems = () => {
    
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

    
    return (
        <div>
            <Link to={"/"}>
                <button
                    type="button"
                    className="bg-gray-200 p-1 rounded-full text-gray-800 mr-1 ml-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                    <span className="sr-only">Home</span>
                    <HomeIcon
                        className="h-6 w-6 hover:stroke-gray-800 solid-fill"
                        aria-hidden="true"
                    />
                </button>
            </Link>

            <Link to={"/SuggestionPage"}>
                <button
                    type="button"
                    className="bg-gray-200 p-1 rounded-full text-gray-800 mr-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                    <span className="sr-only">Add Friends</span>
                    <UsersIcon
                        className="h-6 w-6 hover:stroke-cyan-800"
                        aria-hidden="true"
                    />
                </button>
            </Link>

            <Link to={"/messenger"}>
                <button
                    type="button"
                    className="bg-gray-200 p-1 rounded-full text-gray-800 mr-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                    <span className="sr-only">Chat-Box</span>
                    <ChatAltIcon
                        className="h-6 w-6 hover:stroke-cyan-800"
                        aria-hidden="true"
                    />
                </button>
            </Link>

            <Link to={"/create-post"}>
                <button
                    type="button"
                    className="bg-gray-200 p-1 rounded-full text-gray-800 mr-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                > 
                    <span className="sr-only">Create-A-Post</span>
                    <PlusCircleIcon
                        className="h-6 w-6 hover:stroke-cyan-800"
                        aria-hidden="true"
                    />
                </button>
            </Link>

            <Link to={"/blogs"}>
                <button
                    type="button"
                    className="bg-gray-200 p-1 rounded-full text-gray-800 mr-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                    <span className="sr-only">Blog-Post</span>
                    <NewspaperIcon
                        className="h-6 w-6 hover:stroke-cyan-800"
                        aria-hidden="true"
                    />
                </button>
            </Link>

            <Link to={"/notifications"}>
                <button
                    type="button"
                    className="bg-gray-200  p-1 rounded-full text-gray-800   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                    <span className="sr-only">Notifications</span>
                    <BellIcon
                        className="h-6 w-6  hover:stroke-cyan-800"
                        aria-hidden="true"
                    />
                </button>
            </Link>
        </div>
    )
}

export default NavItems