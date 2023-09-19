import Head from "next/head";
import Image from "next/image";
import data from "../data.json";
import { useState } from "react";
import { Link } from "next/link";
import { useEffect } from "react";
import React from "react";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";
import {
  CloudArrowUpIcon,
  Bars3BottomLeftIcon,
  LockClosedIcon,
  ArrowPathIcon,
  BookOpenIcon,
  CubeTransparentIcon,
  NewspaperIcon,
  BeakerIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="h-screen bg-gray-800 ">
        <Head>
          <title>ChemTools | Acid Base</title>
        </Head>{" "}
        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          page="About Us"
        />
        <div className="bg-gray-700 flex flex-col md:pl-64">
          <div className=" sticky top-0 z-10 flex flex-shrink-0 bg-gray-300 shadow dark:bg-gray-900">
            <button
              type="button"
              className=" px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:text-gray-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <main className="bg-gray-800 h-full flex-1">
          <div className="h-full bg-gray-800  text-wrap">
            <div className="bg-gray-800  md:ml-48 lg:ml-72 md:mx-auto text-wrap ">
              <div className="mx-auto  flex justify-left h-full w-full bg-gray-800 text-lg">
                {" "}
                <div className="top-0 z-10 flex h-64 flex-shrink-0 bg-gray-300 shadow w-full dark:bg-gray-800">
                  <button
                    type="button"
                    className="left-0 h-16 bg-white px-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-gray-900 md:hidden"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <span className="sr-only">Open sidebar</span>
                    <Bars3BottomLeftIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </button>
                  <div className="w-full col-md-9 col-sm-8 col-12 smallcenter mx-auto my-auto ml-2 md:m-16">
                    <h1 className="text-center mb-6 text-5xl font-bold md:text-7xl">
                      Acid Base Calculations
                    </h1>
                    <p className="text-center text-2xl font-light md:text-3xl">
                      Too easy
                    </p>
                    <hr className="text-white my-16 border-dotted "></hr>
                  </div>{" "}
                </div>
              </div>

              <div className="relative z-0 bg-gray-800 py-16 sm:py-24 lg:py-20">
                <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                  <h2 className="text-5xl font-bold text-blue-500"></h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl"></p>
                  <p className="mx-auto mt-5 max-w-prose text-xl text-white-300"></p>
                  <h2 className="text-5xl mt-8 font-semibold">
                    WORK IN PROGRESS
                  </h2>
                  <p className="mx-auto mt-5 max-w-prose text-xl text-gray-300"></p>
                  <p className="mx-auto mt-5 max-w-prose text-xl text-gray-300"></p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
