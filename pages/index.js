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
  Bars3BottomLeftIcon,
  LockClosedIcon,
  ArrowPathIcon,
  BookOpenIcon,
  CubeTransparentIcon,
  NewspaperIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";
const featuredTestimonial = {
  body: "I love using Chem Tools.",
  author: {
    name: "Leah Miller",
    handle: "AP Chemistry Teacher",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
    logoUrl: "https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg",
  },
};
const testimonials = [
  [
    [
      {
        body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
        author: {
          name: "Leslie Alexander",
          handle: "lesliealexander",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
        author: {
          name: "Lindsay Walton",
          handle: "lindsaywalton",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
        author: {
          name: "Tom Cook",
          handle: "tomcook",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
        author: {
          name: "Leonard Krasner",
          handle: "leonardkrasner",
          imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
      <div className="relative  pb-8 lg:bg-none bg-gradient-to-t from-black via-20% via-[#120126] to-black">
        <Head>
          <title>ChemTools | Home</title>
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
                className="px-4 focus:outline-none focus:ring-2 focus:ring-inset h-16 focus:ring-indigo-500 text-gray-500 md:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <img className="w-16 h-16  mr-4" src="chemlogo.png" />
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
          <div className="h-full   text-wrap">
            <div className="  md:ml-48 lg:ml-72 md:mx-auto text-wrap ">
              <div className="flex justify-left h-full w-full   text-lg">
                {" "}
                <div className="top-0 z-0 w-full flex  flex-shrink-0 p  ">
                  <div className="w-full col-md-9 col-sm-8 col-12 smallcenter mx-auto my-auto ml-2 md:m-16">
                    <h1 className="text-center sm:text-5xl mb-6 text-4xl font-bold md:text-7xl">
                      ChemTools
                    </h1>
                    <p className="text-center mx-8 text-xl sm:text-2xl font-light md:text-3xl">
                      Taking chemistry to the next energy level
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
                  <p className="mt-8 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
                    One Student At a Time.
                  </p>
                  <p className="mx-auto mt-8 max-w-prose text-xl text-gray-300">
                    ChemTools is the next generation online platform designed
                    for chemistry students and professionals, offering a variety
                    of resources including calculators for chemistry and
                    information on the periodic table.
                  </p>
                  <div className="mt-16">
                    <div className="grid grid-cols-1  gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {features.map((feature) => (
                        <Link key={feature.name} href={feature.href}>
                          <div key={feature.name} className="pt-6 ">
                            <div className="flow-root lg:h-60 h-72  rounded-lg bg-gray-1000 px-4 pb-4 hover:brightness-125  border-gray-900 border-4 ">
                              <div className="-mt-6 ">
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
          <div className="md:ml-52 mt-16 lg:ml-64">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="sm:mx-auto max-w-xl mx-8 text-center">
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                  Testimonials
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                  Here's what others are saying about ChemTools
                </p>
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
              <div className="sm:mx-auto mx-8 mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-200 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                <figure className="col-span-2  block rounded-2xl sm:bg-black border-white border-2 shadow-lg ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                  <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-50">
                    <p>{`“${featuredTestimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                    <img
                      className="h-10 w-10 flex-none rounded-full bg-black"
                      src={featuredTestimonial.author.imageUrl}
                      alt=""
                    />
                    <div className="flex-auto">
                      <div className="font-semibold">
                        {featuredTestimonial.author.name}
                      </div>
                      <div className="text-gray-300">{`${featuredTestimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
                {/* {testimonials.map((columnGroup, columnGroupIdx) => (
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
                            className="rounded-2xl bg-black border-white border-2 p-6 shadow-lg ring-1 ring-gray-900/5"
                          >
                            <blockquote className="text-gray-50">
                              <p>{`“${testimonial.body}”`}</p>
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-x-4">
                              <img
                                className="h-10 w-10 rounded-full bg-gray-50"
                                src={testimonial.author.imageUrl}
                                alt=""
                              />
                              <div>
                                <div className="font-semibold">
                                  {testimonial.author.name}
                                </div>
                                <div className="text-gray-300">{`@${testimonial.author.handle}`}</div>
                              </div>
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    ))}
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
