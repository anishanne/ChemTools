/* eslint-disable react/no-unescaped-entities */
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
          <title>ChemTools | About</title>
        </Head>{" "}
        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          page="About Us"
        />
        <div className="bg-gray-700 flex flex-col md:pl-64">
          <div className=" sticky top-0 z-10 flex flex-shrink-0 bg-gray-300  dark:bg-gray-900">
            <button
              type="button"
              className=" px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset h-16 focus:ring-indigo-500 dark:text-gray-500 md:hidden"
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
                <div className="top-0 z-0 flex h-64 flex-shrink-0 bg-gray-300  w-full dark:bg-gray-800">
                  <div className="w-full col-md-9 col-sm-8 col-12 smallcenter mx-auto my-auto ml-2 md:m-16">
                    <h1 className="text-center my-8 text-5xl font-bold md:text-7xl">
                      About
                    </h1>
                    <p className="mx-8 text-center text-2xl font-light md:text-3xl">
                      Heres what we do and why we do it...
                    </p>
                    <hr className="text-white my-16 mx-8 border-dotted "></hr>
                  </div>{" "}
                </div>
              </div>

              <div className="relative z-0 bg-gray-800 mt-6">
                <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                  <h2 className="text-5xl mt-16 font-bold text-blue-500">
                    Master Chemistry
                  </h2>
                  <p className="mx-auto mt-5 max-w-prose text-xl text-white-300">
                    At Chem Tools, we're all about simplifying chemistry. Our
                    easy-to-use tools, including a Gram Formula Mass Calculator,
                    Element Information Database, Bond Character Calculator, and
                    Acid-Base Calculator, are designed to make your chemistry
                    experience hassle-free. While we may not be changing the
                    world, we're certainly making your chemistry studies a whole
                    lot easier. Thank you for choosing Chem Tools; we're here to
                    support you on your journey to chemistry success!
                  </p>

                  <h2 className="text-4xl mt-8 text-blue-500 font-semibold">
                    Who are we?
                  </h2>
                  <p className="mx-auto mt-5 max-w-prose text-xl text-gray-300">
                    Arnav is a senior Joe money is a junior
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
