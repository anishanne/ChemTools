/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import data from "../data.json";
import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import React from "react";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Source from "../components/source";
import {
  CloudArrowUpIcon,
  ServerIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ChartPieIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/20/solid";

import {
  Bars3BottomLeftIcon,
  ArrowPathIcon,
  BookOpenIcon,
  CubeTransparentIcon,
  NewspaperIcon,
  BeakerIcon,
  LockClosedIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="  lg:bg-none bg-gradient-to-t from-white via-20% via-indigo-50 to-white dark:bg-gradient-to-t dark:from-black dark:via-20% dark:via-[#120126] dark:to-black">
        <div className="relative pb-8">
          {" "}
          <Head>
            <title>ChemTools: About Us</title>
            <Source
              description={
                "Learn more about ChemTools, the team, and our mission."
              }
            />
          </Head>{" "}
          <Navbar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            page="About Us"
          />
          <div className=" md:hidden unhidden flex flex-col md:pl-64">
            <div className="mb-8 sticky top-0 z-10 flex h-16 flex-shrink-0  ">
              <div className="w-full flex justify-between items-center">
                <button
                  type="button"
                  className="px-4 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 text-gray-500 md:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <Link href="/index">
                  <div className=" flex flex-shrink-0 items-center px-4">
                    <Image
                      width={70}
                      height={90}
                      className=" mx-auto "
                      src="/chemlogo.png"
                      alt="ChemTools"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <main className=" h-full pb-36">
            <div
              className="lg:absolute hidden inset-x-0 -z-20 lg:flex justify-center overflow-hidden blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1318/752] w-full md:w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-40 lg:opacity-25"
                style={{
                  clipPath:
                    "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                }}
              />
            </div>

            <div className="h-full   text-wrap">
              <div className="  md:ml-48 lg:ml-72 md:mx-auto text-wrap ">
                <div className="mx-auto  flex justify-left h-full w-full  text-lg">
                  {" "}
                  <div className="top-0 z-0 flex h-64 flex-shrink-0  w-full ">
                    <div className="w-full col-md-9 col-sm-8 col-12 smallcenter mx-auto my-auto ml-2 md:m-16">
                      <h1 className="text-center my-8 text-5xl font-bold md:text-7xl">
                        About
                      </h1>
                      <p className="mx-8 text-center text-2xl font-light md:text-3xl">
                        Here's what we do and why we do it
                      </p>
                      <hr className="mx-8 bg-gray-800 dark:text-white mt-8 border-dotted "></hr>
                    </div>
                  </div>
                </div>

                <div className="mx-auto  mt-16 max-w-2xl gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none  lg:items-start lg:gap-y-10">
                  <div className="lg:pr-4">
                    <div className="max-w-xl text-base leading-7 text-gray-600 dark:text-white lg:max-w-full">
                      <div className=" m-8 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div>
                          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-4xl text-center">
                            Chem Tools
                          </h1>
                          <p className="mt-6 my-8 text-xl sm:text-left text-center  leading-8 text-gray-600 dark:text-white">
                            At Chem Tools, we're all about simplifying chemistry
                            making your chemistry experience hassle-free. While
                            we may not be changing the world, we're certainly
                            making your chemistry journey a whole lot easier.
                          </p>
                          <p className="mt-6 my-8 text-xl sm:text-left text-center leading-8 text-gray-600 dark:text-white">
                            Thank you for choosing Chem Tools; we're here to
                            support you on your journey to chemistry success!
                          </p>
                          <ul
                            role="list"
                            className="mt-8 space-y-8 text-gray-600 dark:text-white"
                          >
                            <li className="flex gap-x-3">
                              <ClockIcon
                                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                aria-hidden="true"
                              />
                              <span>
                                <strong className="font-semibold text-gray-800 dark:text-white">
                                  Save Time
                                </strong>{" "}
                                <br></br>
                                Without having to waste time looking up info in
                                the reference table and performing calculations,
                                you can focus on what's important: learning
                                chemistry.
                              </span>
                            </li>
                            <li className="flex gap-x-3">
                              <ChartPieIcon
                                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                aria-hidden="true"
                              />
                              <span>
                                <strong className="font-semibold text-gray-800 dark:text-white">
                                  Easy to Use
                                </strong>{" "}
                                <br></br>
                                Our straightforward interface makes it
                                effortless to find the information you need.
                              </span>
                            </li>
                            <li className="flex gap-x-3">
                              <ExclamationTriangleIcon
                                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                aria-hidden="true"
                              />
                              <span>
                                <strong className="font-semibold text-gray-800 dark:text-white">
                                  Reduce Mistakes
                                </strong>{" "}
                                <br></br>
                                Our calculators help you get accurate results
                                free from human error.
                              </span>
                            </li>
                          </ul>
                          {/* <a
                          href="mailto:mishrarnav@gmail.com?subject=Chem Tools Support"
                          className=" my-8 pt-8 mt-16 text-xl  leading-8 text-white text-center"
                        >
                          Questions? Email{" "}
                          <span className="hover:text-indigo-500">
                            mishrarnav@gmail.com.
                          </span>
                        </a> */}
                        </div>
                        <div className="sm:text-left text-center">
                          <h1 className="lg:mt-2 mt-8 text-center  text-4xl font-bold tracking-tight text-gray-800 dark:text-white">
                            About the Team
                          </h1>
                          <p className=" mt-6 text-center">
                            <strong>Arnav</strong> is a senior at John Jay
                            currently making light pink titrations.
                          </p>
                          {/* <img
                          className=" rounded-lg my-8 mx-auto"
                          src="/smurfcat.jpeg"
                        ></img> */}
                          <p className=" mt-6 text-center">
                            <strong>Joe</strong> is a junior at John Jay who
                            loves Nutella Biscuits
                          </p>
                          {/*}  <img
                          className="h-64  rounded-lg my-8 mx-auto"
                          src="/strawberryele.jpeg"
                        ></img> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
