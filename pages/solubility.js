/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import data from "../data.json";
import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import React from "react";
import { useRouter } from "next/router";
import Info from "../components/info";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Source from "../components/source";
import {
  CloudArrowUpIcon,
  Bars3BottomLeftIcon,
  LockClosedIcon,
  ArrowPathIcon,
  BookOpenIcon,
  CubeTransparentIcon,
  NewspaperIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";
const navigation = {
  main: [
    { name: "About", href: "/about" },
    {
      name: "Help",
      href: "mailto:mishrarnav@gmail.com?subject=Chem Tools Support",
    },
    { name: "Home", href: "/" },
  ],
};

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="  lg:bg-none bg-gradient-to-t from-white via-20% via-indigo-50 to-white dark:bg-gradient-to-t dark:from-black dark:via-20% dark:via-[#120126] dark:to-black">
        <div className="relative pb-8">
          <Head>
            <title>ChemTools: Solubility</title>
            <Source
              description={"Using ChemTools, find solubility of compounds."}
            />
          </Head>{" "}
          <div className="z-0">
            {" "}
            <Navbar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              page="Solubility"
            />
            <div className=" md:hidden unhidden flex flex-col md:pl-64">
              <div className="mb-8 sticky top-0 z-10 flex h-16 flex-shrink-0  ">
                <div className="w-full flex justify-between items-center">
                  <button
                    type="button"
                    className="px-4 focus:outline-none focus:ring-2 focus:ring-inset h-16 focus:ring-indigo-500 text-gray-500 md:hidden"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <span className="sr-only">Open sidebar</span>
                    <Bars3BottomLeftIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
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
          </div>
          <main className="pb-96 mb-64 sm:mb-40 ">
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
                <div className="flex justify-left h-full w-full   text-lg">
                  {" "}
                  <div className="top-0 z-0 w-full flex  flex-shrink-0 p   ">
                    <div className="w-full col-md-9 col-sm-8 col-12 smallcenter mx-auto my-auto ml-2 md:m-16">
                      <h1 className="text-center sm:text-5xl mb-6 text-4xl font-bold md:text-7xl">
                        Solubility
                      </h1>
                      <p className="text-center mx-8 text-xl sm:text-2xl font-light md:text-3xl">
                        Find out if a compound is soluble or insoluble
                      </p>
                      <hr className="mx-8 bg-gray-800 dark:text-white mt-8 border-dotted "></hr>
                    </div>{" "}
                  </div>
                </div>
                <div className="relative z-0 py-16 sm:py-24 lg:py-20">
                  <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                    <h2 className="text-5xl font-bold text-blue-500"></h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl"></p>
                    <p className="mx-auto mt-5 max-w-prose text-xl text-white-300"></p>
                    <h2 className="text-5xl mt-8 font-semibold">Coming Soon</h2>
                    <p className="mx-auto mt-5 max-w-prose text-xl text-gray-300"></p>
                    <p className="mx-auto mt-5 max-w-prose text-xl text-gray-300"></p>
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
