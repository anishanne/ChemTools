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
      <div className="h-screen ">
        <Head>
          <title>ChemTools | About</title>
        </Head>{" "}
        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          page="About Us"
        />
        <div className=" md:hidden unhidden flex flex-col md:pl-64">
          <div className="mb-8 sticky top-0 z-10 flex h-16 flex-shrink-0 shadow ">
            <div className="w-full flex justify-between items-center">
              <button
                type="button"
                className="px-4 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 text-gray-500 md:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <img className="w-16 h-16  mr-4" src="chemlogo.png" />
            </div>
          </div>
        </div>
        <main className=" h-full flex-1">
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
                      Here's what we do and why we do it...
                    </p>
                    <hr className="text-white my-16  border-dotted "></hr>
                  </div>
                </div>
              </div>

              <div className=" z-0 mt-6">
                <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                  <h2 className="text-4xl mt-16 font-bold text-blue-500 ">
                    Thank you for choosing Chem Tools
                  </h2>
                  <br></br>
                  <p className="mx-auto mt-5 max-w-prose text-xl text-white-300">
                    At Chem Tools, we're all about simplifying chemistry making
                    your chemistry experience hassle-free. While we may not be
                    changing the world, we're certainly making your chemistry
                    journey a whole lot easier.
                  </p>

                  <p className="mx-auto mt-5 max-w-prose text-xl text-white-800">
                    Thank you for choosing Chem Tools; we're here to support you
                    on your journey to chemistry success!
                  </p>

                  <br></br>
                  <br></br>
                  <h2 className="text-4xl mt-8 text-blue-500 font-semibold">
                    Who are we?
                  </h2>
                  <p className="mx-auto mt-5 max-w-prose text-xl text-gray-100">
                    Arnav is a senior at John Jay who is currently making light
                    pink titrations.
                  </p>

                  <p className="mx-auto my-5 pb-8 max-w-prose text-xl text-gray-100">
                    Joe Money is a junior at John Jay who loves Nutella
                    Biscuits.
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
