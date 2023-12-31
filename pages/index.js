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
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import {
  CloudArrowUpIcon,
  Bars3BottomLeftIcon,
  LockClosedIcon,
  ArrowPathIcon,
  CubeTransparentIcon,
  HomeIcon,
  XMarkIcon,
  BeakerIcon,
  BookOpenIcon,
  NewspaperIcon,
  UserCircleIcon,
  BoltSlashIcon,
  StarIcon,
  FireIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";
const featuredTestimonial = {
  body: "Chem Tools is an amazing one stop shop. It's a great supplemental tool for students' basic chemistry needs. Joey and Arnav are thorough, dedicated, and hard working both inside and outide the classroom. This tool will be utilized for years to come and is a wonderful legacy to leave behind!",
  author: {
    name: "Leah Miller",
    handle:
      "John Jay High School AP Chemistry Teacher and Science Olympiad Coach",
    imageUrl: "/miller.jpeg",
    logoUrl: "https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg",
  },
};

const testimonials = [
  [
    [
      {
        body: (
          <div>
            Written by students for students, ChemTools has some{" "}
            <span className="font-bold text-blue-500">AMAZING tools</span> for
            anyone who wants to learn chemistry! With continued support and
            encouragement, I can see this turning into a robust and powerful
            site for chemistry students everywhere! So if you like ChemTools,
            please tell Arnav and Joe to keep up the good work!
          </div>
        ),
        header: "Robust and Powerful Site",
        author: {
          name: "Ian Freedman",
          handle: "AP Physics Teacher and Science Olympiad Coach",
          imageUrl: "/freedman.jpeg",
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: (
          <div>
            An absolute 🔥 program for chemistry students at{" "}
            <span className="font-bold text-blue-500">
              all levels of learning.
            </span>{" "}
            With a sleek and fast UI, it's no wonder why this is a top choice
            for students. Clunky reference tables will soon be that of the past!
          </div>
        ),
        header: "Top Choice for Students",
        author: {
          name: "Brent DiVittorio",
          handle: "AP Biology Teacher and XC Coach",
          imageUrl: "/brent.png",
        },
      },
      // More testimonials...
    ],
  ],
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
  {
    name: "Acid Base",
    description: "Calculate pH, pOH, and concentration of H+ and OH-",
    icon: FireIcon,
    href: "/acidbase",
  },

  {
    name: "Solubility",
    description: "Predict if a compound is soluble or insoluble",
    icon: FunnelIcon,
    href: "/solubility",
  },
  {
    name: "Utilities",
    description:
      "Sig figs and balancing equations have you stumped? We got what you need!",
    icon: StarIcon,
    href: "/utilities",
  },
];

export default function Home() {
  // useEffect(() => {
  //   const targetHostname = "www.chemistrytools.org"; // Target hostname
  //   const currentHostname = window.location.hostname;

  //   if (currentHostname !== targetHostname) {
  //     const redirectTimer = setTimeout(() => {
  //       window.location.href = `https://${targetHostname}`;
  //     }, 1000); // 1 second in milliseconds

  //     // Clear the timer when the component unmounts (optional)
  //     return () => clearTimeout(redirectTimer);
  //   }
  // }, []);
  const [show, setShow] = useState(true);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {/*
      <div
        aria-live="assertive"
        className="z-10 pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg dark:bg-gray-700 bg-opacity-50 bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4 bg-opacity-20">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon
                      className="h-6 w-6 text-green-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div
                    onClick={() =>
                      (window.location.href = "https://www.chemistrytools.org/")
                    }
                    className="cursor-pointer ml-3 w-0 flex-1 pt-0.5"
                  >
                    <p className="text-sm font-medium dark:text-white text-gray-700">
                      Welcome to our new home!
                    </p>
                    <p className="mt-1 text-sm dark:text-gray-200 text-gray-500">
                      Update your bookmarks!{" "}
                      <span className="text-blue-400">
                        www.chemistrytools.org
                      </span>
                    </p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md dark:bg-gray-700 bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    */}
      <div className="  lg:bg-none bg-gradient-to-t from-white via-20% via-indigo-50 to-white dark:bg-gradient-to-t dark:from-black dark:via-20% dark:via-[#120126] dark:to-black">
        <div className="relative pb-8">
          {" "}
          <Head>
            <title>ChemTools</title>
            <Source
              description={
                "ChemTools, transforming chemistry education one student at a time."
              }
            />
          </Head>{" "}
          <Navbar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            page="Home"
          />
          <div className=" md:hidden unhidden flex flex-col md:pl-64">
            <div className="mb-8 sticky top-0 z-10 flex h-16 flex-shrink-0  ">
              <div className="w-full flex justify-between items-center">
                <button
                  type="button"
                  className="px-4 focus:outline-none focus:ring-2 focus:ring-inset h-16 focus:ring-blue-500 text-gray-500 md:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className=" flex flex-shrink-0 items-center px-4">
                  <Image
                    width={70}
                    height={90}
                    className=" mx-auto "
                    src="/chemlogo.png"
                    alt="ChemTools"
                  />
                </div>
              </div>
            </div>
          </div>
          <main className="sm:pb-48">
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
            <div className="h-full  text-wrap">
              <div className="  md:ml-48 lg:ml-72 md:mx-auto text-wrap ">
                <div className="flex justify-left h-full w-full   text-lg">
                  {" "}
                  <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div
                      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                      aria-hidden="true"
                    >
                      <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                          clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="relative z-0  py-8 ">
                  <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                    <div className=" mx-auto w-full ">
                      {/* <div
                        onClick={() =>
                          (window.location.href =
                            "https://www.chemistrytools.org/")
                        }
                        className=" cursor-pointer relative mb-10 mx-auto sm:flex sm:justify-center"
                      >
                        <div className=" rounded-full cursor-pointer px-3 py-1 text-sm leading-6 dark:text-gray-300 text-gray-600 ring-1 ring-gray-400 hover:ring-gray-200">
                          Welcome to our new home
                          <span className="text-blue-600" aria-hidden="true">
                            {" "}
                            &rarr; chemistrytools.org
                          </span>
                        </div>
                      </div> */}
                      <div className="text-center mx-auto">
                        <h1 className="text-5xl  font-bold tracking-tight dark:text-white text-gray-900 sm:text-7xl">
                          ChemTools
                        </h1>
                        <h2 className="my-2 mb-8 text-xl">
                          {" "}
                          Taking chemistry to the next energy level
                        </h2>
                      </div>
                      <h2 className="text-4xl mt-8 font-bold text-blue-500">
                        Transforming chemistry education
                      </h2>
                      <p className="mt-8 text-4xl font-bold tracking-tight text-gray-600 dark:text-gray-200 sm:text-2xl">
                        One Student At a Time
                      </p>
                      <p className="mt-6 text-xl leading-8 dark:text-gray-200 text-gray-600">
                        ChemTools is the next generation online platform
                        designed for chemistry students and professionals,
                        offering a variety of resources including calculators
                        for chemistry and information on the periodic table.
                      </p>
                    </div>

                    <div className="mt-16">
                      <div className="grid grid-cols-1  gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
                        {features.map((feature, index) => (
                          <Link key={feature.name} href={feature.href}>
                            <div
                              key={feature.name}
                              className={`pt-6 ${
                                index >= 4
                                  ? "sm:col-span-1 justify-center"
                                  : "sm:col-span-2"
                              }`}
                            >
                              <div className="flow-root h-auto rounded-lg bg-gray-1000 px-2 pb-6 hover:border-blue-500 transition ease-in-out delay-0 hover:scale-110 dark:border-gray-600 border-gray-400 border-4">
                                <div className="-mt-6">
                                  <div>
                                    <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-blue-600 p-3 shadow-lg">
                                      <feature.icon
                                        className="h-6 w-6 text-white"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </div>
                                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-800 dark:text-gray-50">
                                    {feature.name}
                                  </h3>
                                  <p className="mt-5 my-auto text-base text-gray-600 dark:text-gray-300">
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
            <div className="md:ml-52 mt-16 lg:ml-64">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto text-center max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto max-w-4xl sm:text-center">
                    <h2 className="text-3xl font-bold leading-7 text-blue-600">
                      Teacher Testimonials
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight  dark:text-white text-gray-900 sm:text-4xl">
                      See what our amazing teachers have to say
                    </p>
                    <p className="mt-6 text-lg leading-8 dark:text-gray-300 text-gray-900">
                      ChemTools has been positively reviewed by some of John Jay
                      High School's best teachers.
                    </p>
                    <p className="mt-6 text-xl font-bold leading-8">
                      We don't just have reactions... we have solutions!
                    </p>
                  </div>
                </div>
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
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                  <figure className="rounded-2xl bg-white dark:bg-black border border-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
                    <blockquote className="sm:p-12 p-4 text-xl font-semibold leading-8 tracking-tight text-gray-700 dark:text-gray-50">
                      <p className=" text-3xl font-bold text-center">
                        "Great Supplemental Tool"
                      </p>
                      <br></br>
                      <p className="text-center">
                        "Chem Tools is an{" "}
                        <span className="font-bold text-blue-500">
                          amazing one stop shop
                        </span>
                        . It's a great supplemental tool for students' basic
                        chemistry needs. Joey and Arnav are thorough, dedicated,
                        and hard working both inside and outside the classroom.
                        This tool will be{" "}
                        <span className="font-bold text-blue-500">
                          utilized for years to come
                        </span>{" "}
                        and is a wonderful legacy to leave behind!"
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                      <div className="relative overflow-hidden">
                        <Image
                          width={100}
                          height={100}
                          className="h-auto aspect-auto w-12 flex-none rounded-full bg-black"
                          src="/miller.jpeg"
                          alt="Featured Testimonial Image"
                        />
                      </div>
                      <div className="flex-auto">
                        <div className="font-bold text-gray-800 dark:text-gray-300">
                          {"Leah Miller"}
                        </div>
                        <div className="text-gray-800 dark:text-gray-300">{`AP Chemistry Teacher and Science Olympiad Coach`}</div>
                      </div>
                    </figcaption>
                  </figure>
                  {testimonials.map((columnGroup, columnGroupIdx) => (
                    <div
                      key={columnGroupIdx}
                      className="space-y-8 xl:contents xl:space-y-0"
                    >
                      {columnGroup.map((column, columnIdx) => (
                        <div
                          key={columnIdx}
                          className={classNames(
                            (columnGroupIdx === 0 && columnIdx === 0) ||
                              (columnGroupIdx === testimonials.length - 1 &&
                                columnIdx === columnGroup.length - 1)
                              ? "xl:row-span-2"
                              : "xl:row-start-1",
                            "space-y-8"
                          )}
                        >
                          {column.map((testimonial) => (
                            <figure
                              key={testimonial.author.handle}
                              className="rounded-2xl dark:bg-black bg-white border-white border p-6 shadow-lg ring-1 ring-gray-900/5"
                            >
                              <blockquote className="font-bold text-center text-lg text-gray-50">
                                <p className="font-bold text-2xl dark:text-white text-gray-900">{`"${testimonial.header}"`}</p>
                              </blockquote>
                              <br></br>{" "}
                              <blockquote className="text-center text-lg dark:text-white text-gray-900">
                                {testimonial.body}
                              </blockquote>
                              <figcaption className="mt-6 flex items-center gap-x-4">
                                <img
                                  className="h-10 w-10 rounded-full bg-gray-50"
                                  src={testimonial.author.imageUrl}
                                  alt=""
                                />
                                <div>
                                  <div className=" dark:text-white text-gray-900 font-semibold">
                                    {testimonial.author.name}
                                  </div>
                                  <div className="dark:text-white text-gray-900">{`${testimonial.author.handle}`}</div>
                                </div>
                              </figcaption>
                            </figure>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
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
