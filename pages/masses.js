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
import { useCallback } from "react";
import { set } from "zod";
import Source from "../components/source";
import Footer from "../components/footer";
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

const colors = {
  color1: "text-white bg-red-600",
  color2: "bg-blue-700",
  color3: "bg-blue-500",
  color4: "bg-teal-600",
  color5: "bg-red-500",
  color6: "bg-yellow-500",
  color7: "bg-orange-500",
  color8: "bg-green-400",
  color9: "bg-teal-700 ",
  color10: "bg-blue-800",
  color11: "bg-gray-200",
  color12: "bg-gray-400 ",
  reference: "bg-teal-600 hover:none  pointer-events-none",
  reference2: "bg-blue-800 hover:none  pointer-events-none",
  heading: "font-xl",
  none: " cursor-default",
};
const style =
  "  rounded-lg lg:transition ease-in-out delay-0 lg:hover:scale-110 text-center font-bold align-middle text-white w-12 hover:brightness-150 hover:text-black";
const style2 =
  " border-2 border-gray-200 cursor-pointer border-gray-300 dark:border-gray-800 text-white rounded-lg text-center font-bold align-middle  text-base w-12 hover:brightness-150 hover:text-black";

export default function Home() {
  const [grams, setGrams] = useState(0);
  const [elementString, setElements] = useState([]);
  const [h2string, setH2] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [polyatomic, setPolyatomic] = useState("");

  const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const checkOccurrence = (elementsString, element) =>
    capitalizeFirstLetter(element) +
    (elementsString.flat().filter((item) => item.toLowerCase() === element)
      .length === 1
      ? ""
      : elementsString.flat().filter((item) => item.toLowerCase() === element)
          .length);

  const getOccurrences = () =>
    setH2(
      Array.from(
        new Set(
          elementString.map((element) =>
            checkOccurrence(elementString, element.toLowerCase())
          )
        )
      )
    );

  useEffect(() => {
    setH2("");
    getOccurrences();
  }, [elementString]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const reset = useCallback(() => {
    setGrams(0.0);
    setInputGrams(0.0);
    setInputMoles(0.0);
    setElements([]);
    setH2("");
    setPolyatomic("");
  });

  const specialSetElements = (index, name) => {
    const atomic_mass = data.elements[index].mass;

    // Round atomic_mass to two decimal places
    const rounded_atomic_mass = parseFloat(atomic_mass.toFixed(2));

    // Round grams, setInputGrams, and atomic_mass to two decimal places
    const newGrams = parseFloat((grams + rounded_atomic_mass).toFixed(2));

    setGrams(newGrams);
    setInputGrams(newGrams);

    setElements((prev) => [...prev, name]);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const elementStates = (mass, name) => {
    // Round mass to two decimal places
    const roundedMass = parseFloat(mass.toFixed(2));

    // Round grams, setInputGrams, and roundedMass to two decimal places
    const newGrams = parseFloat((grams + roundedMass).toFixed(2));

    setGrams(newGrams);
    setInputGrams(newGrams);

    setElements((prev) => [...prev, name]);
  };

  const [inputGrams, setInputGrams] = useState(0);
  const [inputMoles, setInputMoles] = useState(0.0);
  const isValidNumber = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
  };
  useEffect(() => {
    const moles = parseFloat(inputGrams) / grams;
    setInputMoles(moles ? moles.toFixed(2) : 0.0);

    if (!inputGrams && isValidNumber(inputMoles)) {
      const calculatedGrams = parseFloat(inputMoles) * grams;
      setInputGrams(
        isValidNumber(calculatedGrams) ? calculatedGrams.toFixed(2) : ""
      );
    }
  }, [grams]);

  const handleGramsChange = (event) => {
    const gramsValue = event.target.value;
    setInputGrams(gramsValue);
    if (!gramsValue) {
      setInputMoles("0");
    } else if (isValidNumber(gramsValue)) {
      const moles = parseFloat(gramsValue) / grams;
      setInputMoles(isValidNumber(moles) ? moles.toFixed(2) : "");
    } else {
      setInputMoles("");
    }
  };

  const handleMolesChange = (event) => {
    const molesValue = event.target.value;
    setInputMoles(molesValue);
    if (!molesValue) {
      setInputGrams(grams.toFixed(4));
    } else if (isValidNumber(molesValue)) {
      const calculatedGrams = parseFloat(molesValue) * grams;
      setInputGrams(
        isValidNumber(calculatedGrams) ? calculatedGrams.toFixed(2) : ""
      );
    } else {
      setInputGrams("");
    }
  };

  return (
    <>
      <div className="  lg:bg-none bg-gradient-to-t from-white via-20% via-indigo-50 to-white dark:bg-gradient-to-t dark:from-black dark:via-20% dark:via-[#120126] dark:to-black">
        <div className="relative pb-8">
          <Head>
            <title>ChemTools: Gram Formula Mass</title>
            <Source
              description={
                "Using ChemTools, easily find Gram Formula Masses of molecular compounds."
              }
            />
          </Head>{" "}
          <div className="z-0">
            {" "}
            <Navbar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              page="Molar Mass"
            />
            <div className=" md:hidden unhidden flex flex-col md:pl-64">
              <div className="mb-8 sticky top-0 z-10 flex h-max flex-shrink-0  ">
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
                        alt="Chemtools Logo"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <main className="grow sm:mb-16">
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
                <div className=" px-6 sm:pb-24 pt-24 sm:pt-32 lg:px-8">
                  <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-7xl">
                      Gram Formula Mass Calculator
                    </h2>
                    <p className="mt-6 text-2xl leading-8 dark:text-white text-gray-600">
                      Calculate the gram formula mass of any compound by
                      clicking on the elements on our interactive periodic table
                    </p>
                  </div>
                </div>

                <div className="flex justify-center   ">
                  <form className="grid grid-cols-1 md:grid-cols-2 mx-8 ml-8 mt-36 shadow-md bg-gray-300 dark:border dark:border-gray-700  dark:bg-transparent  rounded px-8 pt-6 pb-8 mb-3 bg-opacity-50 backdrop-blur-lg">
                    <div className="mb-3">
                      <label
                        className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                        htmlFor="username"
                      >
                        Formula
                      </label>

                      <div className=" rounded w-full py-2 px-3 dark:text-white focus:outline-none bg-white dark:bg-gray-700">
                        {(h2string.length > 0 || polyatomic) && (
                          <div className="rounded w-full dark:text-white focus:outline-none bg-white dark:bg-gray-700">
                            <div className="flex flex-wrap">
                              {polyatomic}
                              {h2string.length > 0 && polyatomic ? " + " : "  "}
                              {h2string.map((text, index) => {
                                const match = text.match(/\d+/);
                                if (match) {
                                  const [count] = match;
                                  const parts = text.split(count);
                                  return (
                                    <React.Fragment key={index}>
                                      {" "}
                                      <span className="flex items-center">
                                        {capitalizeFirstLetter(parts[0])}
                                        <sub className="bg-white dark:bg-gray-700 dark:text-white">
                                          {count}
                                        </sub>
                                        {parts[1]}
                                      </span>
                                      {parts[1]}
                                    </React.Fragment>
                                  );
                                } else {
                                  return (
                                    <React.Fragment key={index}>
                                      {text}
                                    </React.Fragment>
                                  );
                                }
                              })}
                            </div>
                          </div>
                        )}
                        {h2string.length === 0 && !polyatomic && (
                          <span className="dark:text-white bg-white dark:bg-gray-700">
                            Formula will Appear Here
                          </span>
                        )}
                      </div>
                      <div className="mt-6 mb-6">
                        <label
                          className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                          htmlFor="password"
                        >
                          Gram Formula Mass
                        </label>
                        <div className="shadow appearance-none bg-white  dark:bg-gray-700 rounded w-full py-2 px-3 dark:text-white mb-3 leading-tight focus:outline-none focus:shadow-outline">
                          {Math.round(grams * 100) / 100}g/mol
                        </div>
                      </div>
                    </div>

                    <div className="mx-8">
                      <label
                        className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                        htmlFor="username"
                      >
                        Grams
                      </label>
                      <input
                        className=" rounded w-full py-2 px-3 dark:text-white focus:outline-none bg-white dark:bg-gray-700 "
                        type="number"
                        min={0}
                        value={inputGrams}
                        onChange={handleGramsChange}
                      />

                      <label
                        className="mt-6 block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                        htmlFor="username"
                      >
                        Moles
                      </label>
                      <input
                        className="shadow appearance-none bg-white  dark:bg-gray-700 rounded w-full py-2 px-3 dark:text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={inputMoles}
                        onChange={handleMolesChange}
                      />
                    </div>
                  </form>
                </div>

                <div className="w-full flex justify-center mt-8 items-center">
                  <button
                    onClick={() => reset()}
                    className="bg-indigo-500 py-1 px-2 lg:w-1/4 md:w-1/3 text-white  rounded-md hover:bg-indigo-600"
                  >
                    Reset
                  </button>
                </div>

                <div className="m-8">
                  <div className="md:hidden pb-8 flex flex-wrap justify-center">
                    {data.elements.map((element, index) => (
                      <div
                        key={index}
                        onClick={() =>
                          elementStates(element.mass, element.symbol)
                        }
                        className={`${
                          colors[element.color]
                        } h-12 text-center flex flex-col items-center justify-center text-base ${style2}`}
                      >
                        <div className="text-sm"> {element.number}</div>

                        <div> {element.symbol}</div>
                      </div>
                    ))}
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

                <table className="hidden md:table border-separate border-spacing-1 max-w-7xl mx-auto w-11/12    border-transparent mt-8 cursor-pointer">
                  <tbody>
                    <tr>
                      <td
                        onClick={() =>
                          specialSetElements(0, data.elements[0].symbol)
                        }
                        className={`${colors.color1} + ${style} `}
                      >
                        1<br></br>H
                      </td>
                      <td
                        className={`${colors.none} cursor-default  `}
                        colSpan="16"
                      ></td>
                      <td
                        onClick={() =>
                          specialSetElements(1, data.elements[1].symbol)
                        }
                        className={`${colors.color9} + ${style}`}
                      >
                        2<br></br>He
                      </td>
                    </tr>

                    <tr>
                      <td
                        onClick={() =>
                          specialSetElements(2, data.elements[2].symbol)
                        }
                        className={`${colors.color2} + ${style}`}
                      >
                        3<br></br>Li
                      </td>
                      <td
                        onClick={() =>
                          specialSetElements(3, data.elements[3].symbol)
                        }
                        className={`${colors.color3} + ${style}`}
                      >
                        4<br></br>Be
                      </td>
                      <td
                        className={`${colors.none} cursor-default `}
                        colSpan="10"
                      ></td>
                      {data.fiveTen.map((element, key) => (
                        <td
                          key={key}
                          onClick={() =>
                            elementStates(element.mass, element.symbol)
                          }
                          className={colors[element.color] + style || ""}
                        >
                          {element.number}
                          <br></br>
                          {element.symbol}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td
                        onClick={() =>
                          specialSetElements(10, data.elements[10].symbol)
                        }
                        className={`${colors.color2} + ${style}`}
                      >
                        11<br></br>Na
                      </td>
                      <td
                        onClick={() =>
                          specialSetElements(11, data.elements[11].symbol)
                        }
                        className={`${colors.color3} + ${style}`}
                      >
                        12<br></br>Mg
                      </td>
                      <td
                        className={`${colors.none} cursor-default`}
                        colSpan="10"
                      ></td>
                      {data.thirteenEighteen.map((element, key) => (
                        <td
                          key={key}
                          onClick={() =>
                            elementStates(element.mass, element.symbol)
                          }
                          className={colors[element.color] + style || ""}
                        >
                          {element.number}
                          <br></br>
                          {element.symbol}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      {data.row1.map((element, key) => (
                        <td
                          key={key}
                          onClick={() =>
                            elementStates(element.mass, element.symbol)
                          }
                          className={colors[element.color] + style || ""}
                        >
                          {element.number}
                          <br></br>
                          {element.symbol}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      {data.row2.map((element, key) => (
                        <td
                          key={key}
                          onClick={() =>
                            elementStates(element.mass, element.symbol)
                          }
                          className={colors[element.color] + style || ""}
                        >
                          {element.number}
                          <br></br>
                          {element.symbol}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      {data.row3.map((element, key) => (
                        <td
                          key={key}
                          onClick={() =>
                            elementStates(element.mass, element.symbol)
                          }
                          className={colors[element.color] + style || ""}
                        >
                          {element.number}
                          <br></br>
                          {element.symbol}
                        </td>
                      ))}
                    </tr>

                    <tr>
                      {data.eightyseven118.map((element, key) => (
                        <td
                          key={key}
                          onClick={() =>
                            elementStates(element.mass, element.symbol)
                          }
                          className={colors[element.color] + style || ""}
                        >
                          {element.number}
                          <br></br>
                          {element.symbol}
                        </td>
                      ))}
                    </tr>

                    <tr>
                      <td
                        className="cursor-default   "
                        colSpan="2"
                        rowSpan="2"
                      ></td>
                      {data.fiftyseven71.map((element, key) => (
                        <td
                          onClick={() =>
                            elementStates(element.mass, element.symbol)
                          }
                          key={key}
                          className={colors[element.color] + style || ""}
                        >
                          {element.number}
                          <br></br>
                          {element.symbol}
                        </td>
                      ))}
                      <td className=" " colSpan="1" rowSpan="1"></td>
                    </tr>

                    <tr>
                      {data.eightynineonehundredand3.map((element, key) => (
                        <td
                          key={key}
                          onClick={() =>
                            elementStates(element.mass, element.symbol)
                          }
                          className={colors[element.color] + style || ""}
                        >
                          {element.number}
                          <br></br>
                          {element.symbol}
                        </td>
                      ))}

                      <td className="cursor-default "></td>
                    </tr>
                  </tbody>
                </table>

                <div className="text-center mx-auto max-w-7xl mt-24 m-8">
                  <h1 className=" text-center font-bold text-2xl m-8">
                    Common Polyatomic Ions
                  </h1>
                  <div className="mx-8 text-center font-bold text-sm md:text-base mt-4">
                    <div className="mx-auto flex flex-wrap m-2">
                      {" "}
                      {data.dataArray.map((element, index) => (
                        <div
                          key={index}
                          className=" p-3 w-fit transition ease-in-out delay-0 hover:scale-110 mx-auto border border-gray-400 rounded-lg m-2 hover:bg-gray-800   cursor-pointer"
                          onClick={() => {
                            setGrams(parseFloat(grams + element.mass)),
                              setInputGrams(
                                parseFloat(inputGrams) +
                                  parseFloat(element.mass)
                              );

                            setPolyatomic(
                              polyatomic
                                ? element.formula + " + " + polyatomic
                                : element.formula
                            );
                            scrollToTop();
                          }}
                        >
                          {element.name + " " + element.formula}
                        </div>
                      ))}
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
