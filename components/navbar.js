/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  HomeIcon,
  XMarkIcon,
  BeakerIcon,
  BookOpenIcon,
  CubeTransparentIcon,
  NewspaperIcon,
  UserCircleIcon,
  BoltSlashIcon,
  StarIcon,
  FireIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Molar Mass", href: "/masses", icon: BeakerIcon },
  { name: "Element Info", href: "/stats", icon: NewspaperIcon },
  { name: "Bond Character", href: "/bond", icon: CubeTransparentIcon },
  { name: "Acid Base", href: "/acidbase", icon: FireIcon },
  { name: "Solubility", href: "/solubility", icon: FunnelIcon },
  { name: "Utilities", href: "/utilities", icon: StarIcon },

  { name: "About", href: "/about", icon: UserCircleIcon },
];
export default function Sidebar({ sidebarOpen, setSidebarOpen, page }) {
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-white dark:bg-black bg-opacity-90" />
          </Transition.Child>

          <div className="fixed inset-0 z-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-trangray-x-full"
              enterTo="trangray-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="trangray-x-0"
              leaveTo="-trangray-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col pt-5 pb-4 ">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black dark:focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 dark:text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className=" flex flex-shrink-0 items-center px-4">
                  <img className="w-42 h-48 mx-auto " src="chemlogo.png" />
                </div>
                <div className="z-0 text-2xl mt-5 h-0 flex-1 overflow-y-auto">
                  <nav className="space-y-1 text-2xl px-2">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <div
                          className={`${
                            page === item.name
                              ? "p-8  dark:bg-gray-800 bg-gray-400  text-white"
                              : "p-8 text-gray-800 dark:text-gray-100  hover:bg-gray-400 dark:hover:bg-gray-700 hover:text-white"
                          }
													group flex cursor-pointer text-lg items-center rounded-md px-2 py-2 font-medium`}
                        >
                          <item.icon
                            className={`${
                              page === item.name
                                ? "text-gray-300"
                                : "text-gray-400 group-hover:text-gray-300"
                            }
														mr-4 h-6 w-6 flex-shrink-0`}
                            aria-hidden="true"
                          />
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:fixed z-10 md:inset-y-0 md:flex  w-52 lg:w-72 md:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex min-h-0 flex-1 flex-col  ">
          <div className="flex h-36 lg:h-48 flex-shrink-0 items-center  px-4 0">
            <img
              className=" md:unhidden lg:m-6 hidden lg:mr-9 md:inline-flex md:h-42 md:w-48 lg:h-48 lg:w-52 "
              src="chemlogo.png"
            />
          </div>
          <div className="z-10 flex flex-1 flex-col  overflow-y-auto">
            <nav className="flex-1 space-y-1 px-8 py-4 ">
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                  <div
                    className={`${
                      page === item.name
                        ? " dark:bg-gray-800 bg-gray-400  text-white"
                        : "   text-gray-800 dark:text-gray-100  hover:bg-gray-400 dark:hover:bg-gray-700 hover:text-white"
                    }
										group cursor-pointer flex items-center rounded-md px-2 py-2 text-sm lg:text-xl font-medium`}
                  >
                    <item.icon
                      className={`
											mr-3 h-6 w-6 bg-inherit flex-shrink-0`}
                      aria-hidden="true"
                    />
                    {item.name}
                  </div>
                </Link>
              ))}
            </nav>
            <div className="m-2  font-semibold">
              <h1 className=" m-8 justify-items-center text-center  text-gray-900 dark:text-gray-100 text-sm">
                Made By: Arnav Mishra and Joseph "Money" Marra
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
