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
      <div className="h-screen ">
        <Head>
          <title>ChemTools | Home</title>
        </Head>{" "}
        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          page="Home"
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
        <main className="z-0  h-full flex-1">
          <div
            className="absolute inset-x-0 -z-20 flex justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1318/752] w-full md:w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-40 sm:opacity-25"
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
                <div className="top-0 z-0 w-full flex  flex-shrink-0 p  ">
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
              <div className="relative z-0  py-8 ">
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
                    <div className="grid grid-cols-1  gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {features.map((feature) => (
                        <Link key={feature.name} href={feature.href}>
                          <div key={feature.name} className="pt-6 ">
                            <div className="flow-root lg:h-60 h-72  rounded-lg bg-gray-1000 px-4 pb-4 hover:brightness-125  border-gray-900 border-4 ">
                              <div className="-mt-6 ">
                                <div>
                                  <div
                                    className="absolute sm:hidden inset-x-0 -z-20 flex justify-center overflow-hidden blur-3xl"
                                    aria-hidden="true"
                                  >
                                    <div
                                      className="aspect-[1318/752] w-full md:w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-40 sm:opacity-25"
                                      style={{
                                        clipPath:
                                          "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                                      }}
                                    />
                                  </div>
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
