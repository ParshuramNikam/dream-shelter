import { useState } from 'react'
import { BellIcon, BookmarkAltIcon, ChatAltIcon, HomeIcon, NewspaperIcon, PlusCircleIcon, UsersIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import PostQuestionPopup from '../home/PostQuestionPopup';

const OneNavItem = ({ title, icon, path }) => {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        title !== "Create-A-Post"
            ? <Link to={path} className="w-max inline-block mx-auto">
                <button
                    type="button"
                    className="bg-gray-200 p-1 rounded-full text-gray-800 m-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                    <span className="sr-only">{title}</span>
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
            : <>
                <button
                    type="button"
                    className="bg-gray-200 w-max inline-block mx-auto p-1 rounded-full text-gray-800 m-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    onClick={openModal}
                >
                    <span className="sr-only">{title}</span>
                    <PlusCircleIcon className="h-6 w-6  hover:stroke-cyan-800" />
                </button>

                <PostQuestionPopup isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} />
            </>
    )
}

export default OneNavItem