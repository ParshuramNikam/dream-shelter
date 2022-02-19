import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames';
import { BellIcon, BookmarkIcon, CheckCircleIcon, CheckIcon, LinkIcon, StatusOfflineIcon, TrashIcon, XCircleIcon, } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';



// Only one notication component :-
const OneNotication = ({ id, img, timestamp, title, desc, read }) => {
  const noticationClickListner = () => {
    details.read = true;
    alert("Notification : " + id + " read!!");
  };

  const [postOptions, setPostOptions] = useState(["Delete", "Mark As Read", "Turn Off"])
  const [details, setDetails] = useState({ id, img, timestamp, title, desc, read });

  return (
    details
      ? <div className="my-1.5">
        <div className="m-auto">
          <div className={`bg-white rounded-lg  border p-3 shadow-lg border-l-4 ${!details.read ? 'border-l-indigo-500' : ''}`}>
            <div className="flex flex-row justify-between">
              <div className="px-2 my-auto flex items-center">
                {/* <BellIcon className='h-8 w-8' /> */}
                <Link to={'/notification/dummy'}
                  onClick={() => noticationClickListner()}
                >
                  <img className='w-10 h-10 rounded-full'
                    src={details.img}
                    alt="user"
                  />
                </Link>

                {/* Show time and date near img */}
                <span className="inline-block sm:hidden ml-2 text-xs text-gray-500">{details.timestamp}</span>
              </div>


              {/* Hide middle box on mobile device */}
              <Link to={'/notification/dummy'}
                onClick={() => noticationClickListner()}
              >
                <div className="hidden sm:inline-block grow ml-2 mr-1">
                  <span className="font-semibold">{details.title}</span>
                  <span className='block'>{details.desc}</span>
                  <span className="block text-xs text-gray-500">{details.timestamp}</span>
                </div>
              </Link>

              {/* Menu with dropdown options */}
              <div className="align-right">
                <Menu as="div" className="ml-3 relative ">
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
                                  option.toLowerCase() === "delete" ? <TrashIcon className='h-5 w-5 flex float-left mr-3 stroke-1 stroke-indigo-800' /> : null

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

            </div>

            {/* Show middle box on mobile device */}
            <Link to={'/notification/dummy'}
              onClick={() => noticationClickListner()}
            >
              <div className="inline-block sm:hidden grow ml-2 mr-1 bg-white">
                <span className="font-semibold">{title}</span>
                <span className='block'>{desc}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      : null
  );
};

export default OneNotication;
