import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
	BellIcon,
	ChatAltIcon,
	MenuIcon,
	NewspaperIcon,
	SearchIcon,
	XIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

const navigation = [
	//   { name: 'Dashboard', href: '#', current: true },
	//   { name: 'Team', href: '#', current: false },
	//   { name: 'Projects', href: '#', current: false },
	//   { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
	const [hidden, setHidden] = useState(false);

	function showSearchBox() {
		setHidden(true);
	}

	function hideSearchBox() {
		setHidden(false)
	}

	return (
		<Disclosure as="nav" className="bg-white border-2 ">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex sm:hidden"></div>
							<div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">
								<div className="flex ">
									<Link to={"/"}>
										<div className={` ${hidden ? 'hidden' : ''} flex-shrink-0 flex items-center`}>
											<img
												className="block  h-8 w-auto rounded-full"
												src="/images/logo.jpg"
												alt="Dream Shelter"
											/>
											<div className="hidden sm:block font-bold text-xl font-size cursor-pointer flex items-center font-[Poppins] text-gray-800 pr-3">
												<span className="text-5x1 text-blue-600 mr-1 pt-2">
													<ion-icon name="logo-ionic"></ion-icon>
												</span>
												Dream Shelter
											</div>
										</div>
									</Link>
									<button
										type="button"
										className={` ${hidden ? 'hidden' : ''} bg-gray-200 p-1 rounded-sm text-gray-800  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white block sm:hidden ml-2 `}
										onClick={showSearchBox}
									>
										<span className="sr-only">Chat-Box</span>
										<SearchIcon
											className="h-5 w-5 hover:stroke-cyan-800"
											aria-hidden="true"
										/>
									</button>
								</div>
								<div class={` ${!hidden ? 'hidden' : 'block'} pt-2 relative mx-auto text-gray-600`}>
									<input
										class=" bg-gray-200 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-60 md:w-96 "
										type="search"
										name="search"
										placeholder="Search"
										onBlur={hideSearchBox} /* event pccurs when focus gets out of input box */
									/>
									<button
										type="submit"
										class="absolute right-0 top-0 mt-5 mr-4 "
									>
										<SearchIcon class="text-gray-600 h-4 w-4 stroke-gray-800"></SearchIcon>
									</button>
								</div>
								<button onClick={hideSearchBox} className={` ${!hidden ? 'hidden' : ''}`}>
									<XIcon className="h-5 w-5" />
								</button>


							</div>
							<div className={`${hidden ? 'hidden' : ''} absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0`}>
								<Link to={"/blogs"} >
									<button
										type="button"
										className="bg-gray-200 p-1 rounded-full text-gray-800 mr-1 ml-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
									>
										<span className="sr-only">Blog-Post</span>
										<NewspaperIcon
											className="h-6 w-6 hover:stroke-cyan-800"
											aria-hidden="true"
										/>
									</button>
								</Link>

								<Link to={"/notifications"} >
									<button
										type="button"
										className="bg-gray-200  p-1 rounded-full text-gray-800 mr-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
									>
										<span className="sr-only">Notifications</span>
										<BellIcon
											className="h-6 w-6  hover:stroke-cyan-800"
											aria-hidden="true"
										/>
									</button>
								</Link>

								<Link to={"/messages"} >
									<button
										type="button"
										className="bg-gray-200 p-1 rounded-full text-gray-800  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
									>
										<span className="sr-only">Chat-Box</span>
										<ChatAltIcon
											className="h-6 w-6 hover:stroke-cyan-800"
											aria-hidden="true"
										/>
									</button>
								</Link>

								{/* Profile dropdown */}
								<Menu as="div" className="ml-3 relative">
									<div>
										<Menu.Button className="bg-gray-200 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
											<span className="sr-only">Open user menu</span>
											<img
												className="h-8 w-8 rounded-full"
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
										<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Your Profile
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Settings
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Sign out
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block px-3 py-2 rounded-md text-base font-medium"
									)}
									aria-current={item.current ? "page" : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
