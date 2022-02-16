import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames';
import {  BookmarkIcon, CheckCircleIcon, CheckIcon, LinkIcon, StatusOfflineIcon, TrashIcon, XCircleIcon,  } from '@heroicons/react/outline'



// Only one notication component :-
const OneNotication = () => {
  const noticationClickListner = () => {
    alert("Notication cliked!");
  };

  const [postOptions, setPostOptions] = useState(["Delete", "Mark As Read", "Turn Off"])

  return (
    <div
      className="w-100 p-2 m-3 bg-gray-100 rounded flex cursor-pointer flex justify-between"
      onClick={() => noticationClickListner()}
    >
      <div className='flex items-center'>
        <div className="w-8 h-8 border rounded-full border-gray-500 ">
          <img
            className="h-8 w-8 rounded-full "
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="pl-3 aboslute ">
          <p className="text-sm leading-none">
            <span className="text-indigo-700">James Doe</span> Liked your Answer{" "}
            {/* <span className="text-indigo-700">item</span> */}
          </p>
          <p className="text-xs leading-3 pt-1 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
          <p className="text-xs leading-3 pt-2 text-gray-500">2 hours ago</p>
        </div>
      </div>
      <Menu as="div" className="ml-3 relative">
                        <div>
                            <Menu.Button className=" flex text-sm ">
                                <span className="sr-only">Open user menu</span>
                                <div className='font-lg'>&#xFE19;</div>  {/* &#xFE19; => html code for 3  dots */}
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
                                {
                                    postOptions.map((option, index) =>
                                        <Menu.Item key={index}>
                                            {({ active }) => (
                                                <button className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 w-full')}>
                                                    {
                                                        option.toLowerCase() === "delete" ?<TrashIcon className='h-5 w-5 flex float-left mr-3 stroke-1 stroke-indigo-800' /> : null

                                                    }
                                                    {
                                                        option.toLowerCase() === "mark as read" ? <CheckIcon className='h-5 w-5 flex float-left mr-3 stroke-1 stroke-indigo-800' /> : null
                                                    }
                                                    {
                                                        option.toLowerCase() === "turn off" ? <StatusOfflineIcon className='h-5 w-5 flex float-left mr-3 stroke-1 stroke-indigo-800' /> : null
                                                    }
                                                    <p className='float-left font-bold'>{option}</p>
                                                </button>
                                            )}
                                        </Menu.Item>
                                    )
                                }
                            </Menu.Items>
                        </Transition>
                    </Menu>
            
            
    </div>
  );
};

export default OneNotication;
