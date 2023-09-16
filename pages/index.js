import Head from "next/head";
import Image from "next/image";
import data from "../data.json";
import { useState } from "react";
import Link from "next/link";
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
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Molar Mass Calculator",
    description:
      "Calculate the molar mass of any compound using a user-friendly and clickable periodic table!",
    icon: BeakerIcon,
    href: "/masses",
  },
  {
    name: "Element Information",
    description:
      "Find out information on elements such as electronegativity, electron configuration, ionization energies!",
    icon: NewspaperIcon,
    href: "/stats",
  },
  {
    name: "Bond Type Predictor",
    description:
      "Predict bond type on any two elements by clicking any two elements on the periodic table!",
    icon: CubeTransparentIcon,
    href: "/bond",
  },
  // {
  // 	name: "Advanced Security",
  // 	description: "Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.",
  // 	icon: ShieldCheckIcon,
  // },
  // {
  // 	name: "Powerful API",
  // 	description: "Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.",
  // 	icon: CogIcon,
  // },
  // {
  // 	name: "Database Backups",
  // 	description: "Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.",
  // 	icon: ServerIcon,
  // },
];
export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="h-screen bg-gray-800 ">
        <Head>
          <title>ChemTools | Home</title>
        </Head>{" "}
        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          page="Home"
        />
        <div className="bg-gray-800 md:hidden unhidden flex flex-col md:pl-64">
          <div className="mb-8 sticky top-0 z-10 flex h-16 flex-shrink-0 bg-gray-300 shadow dark:bg-gray-900">
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
        <main className="z-0 bg-gray-800 h-full flex-1">
          <div className="h-full bg-gray-800  text-wrap">
            <div className="bg-gray-800  md:ml-48 lg:ml-72 md:mx-auto text-wrap ">
              <div className="flex justify-left h-full w-full  bg-gray-800 text-lg">
                {" "}
                <div className="top-0 z-0 w-full flex  flex-shrink-0 p bg-gray-200  dark:bg-gray-800">
                  <div className="w-full col-md-9 col-sm-8 col-12 smallcenter mx-auto my-auto ml-2 md:m-16">
                    <h1 className="text-center sm:text-5xl mb-6 text-4xl font-bold md:text-7xl">
                      Chem Tools
                    </h1>
                    <p className="text-center mx-8 text-xl sm:text-2xl font-light md:text-3xl">
                      Taking chemistry to the next level
                    </p>
                    <hr className="mx-8 text-white mt-8 border-dotted "></hr>
                  </div>{" "}
                </div>
              </div>
              <div className="relative z-0 bg-gray-800 py-8 ">
                <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                  <h2 className="text-5xl font-bold text-blue-500">
                    Transforming chemistry education.
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
                    One Student At a Time.
                  </p>
                  <p className="mx-auto mt-5 max-w-prose text-xl text-gray-300">
                    Chem Tools is the next generation online platform designed
                    for chemistry students and professionals, offering a variety
                    of resources including calculators for chemistry and
                    information on the periodic table.
                  </p>
                  <div className="mt-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {features.map((feature) => (
                        <Link key={feature.name} href={feature.href}>
                          <div key={feature.name} className="pt-6">
                            <div className="flow-root lg:h-56 h-64 rounded-lg bg-gray-700 px-4 pb-4 hover:brightness-125">
                              <div className="-mt-6">
                                <div>
                                  <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-blue-600 p-3 shadow-lg">
                                    <feature.icon
                                      className="h-6 w-6 text-white"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-50">
                                  {feature.name}
                                </h3>
                                <p className="mt-5 my-auto  text-base text-gray-300">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
