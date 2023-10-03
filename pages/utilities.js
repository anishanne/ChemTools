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
import { Switch } from "@headlessui/react";

import { countSigFigs } from "../utils/calculator";
import {
  CloudArrowUpIcon,
  Bars3BottomLeftIcon,
  BeakerIcon,
  LockClosedIcon,
  ArrowPathIcon,
  BookOpenIcon,
  CubeTransparentIcon,
  NewspaperIcon,
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
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sigFigsInput, setSigFigsInput] = useState("");
  const [sigFigsResult, setSigFigsResult] = useState("");
  const [enabled, setEnabled] = useState(false);

  const handleSigFigsInputChange = (e) => {
    const { value } = e.target;

    setSigFigsInput(value);
  };

  const handleSigFigsCalculate = () => {
    const result = countSigFigs(sigFigsInput);
    setSigFigsResult(
      `The number ${sigFigsInput} has ${result} significant figures.`
    );
  };

  return (
    <>
      <div className="  lg:bg-none bg-gradient-to-t from-white via-20% via-indigo-50 to-white dark:bg-gradient-to-t dark:from-black dark:via-20% dark:via-[#120126] dark:to-black">
        <div className="relative pb-8">
          {" "}
          <Head>
            <Source
              description={
                "Using ChemTools, find sig figs, balance equations, and more."
              }
            />
            <title>ChemTools: Other Utilities</title>
          </Head>{" "}
          <div className="z-0">
            {" "}
            <Navbar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              page="Utilities"
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
                  <Link href="/">
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
                <div className=" px-6 pb-24 pt-24 sm:pt-32 lg:px-8">
                  <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-7xl">
                      Other Utilities
                    </h2>
                    <p className="mt-6 text-2xl leading-8 dark:text-white text-gray-600">
                      Sig figs and balancing equations have you stumped? We have
                      to tools for you!
                    </p>
                  </div>
                </div>
                <div className="relative z-0 mx-8 md:mr-16 ">
                  <div className="sm:rounded-lg border border-gray-500 flex">
                    <div className="flex-grow px-4 py-5 sm:p-6">
                      <h3 className="text-base font-semibold leading-6 text-gray-50">
                        {enabled ? "Sig Fig Converter" : "Sig Fig Counter"}
                      </h3>
                      <div className="mt-2 max-w-xl text-sm text-gray-300">
                        <p>
                          {enabled
                            ? "Change the amount of Significant Figures in any number"
                            : "Count the amount of Significant Figures in any number"}
                        </p>
                      </div>
                      <form className="mt-5 sm:flex sm:items-center">
                        <div className="w-full sm:max-w-xs">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-4 sm:text-sm sm:leading-6"
                            placeholder="12345"
                          />
                        </div>
                        <button
                          type="submit"
                          className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
                        >
                          Calculate
                        </button>
                      </form>
                    </div>
                    <div className="sm:p-6 p-5  flex items-center flex-col">
                      <p className="text-gray-50 pb-8">
                        {enabled ? "Sig Fig Counter" : "Sig Fig Converter"}
                      </p>
                      <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={classNames(
                          enabled ? "bg-indigo-600" : "bg-gray-200",
                          "relative inline-flex h-6 w-11 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(
                            enabled ? "translate-x-5" : "translate-x-0",
                            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                          )}
                        />
                      </Switch>
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
