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
import { useCallback } from "react";
import { set } from "zod";
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
  color1:
    " rounded-lg text-center font-bold align-middle w-12 hover:brightness-150 hover:text-black bg-red-600",
  color2:
    "  rounded-lg text-center font-bold align-middle w-12 hover:brightness-150 hover:text-black bg-blue-700",
  color3:
    "  rounded-lg text-center font-bold align-middle w-12 hover:brightness-150 hover:text-black bg-blue-500",
  color4:
    "  rounded-lg text-center font-bold align-middle w-12 hover:brightness-150 hover:text-black bg-teal-600",
  color5: "bg-red-500",
  color6: "bg-yellow-500",
  color7: "bg-orange-500",
  color8: "bg-green-400",
  color9:
    " rounded-lg text-center font-bold align-middle w-12 hover:brightness-150 hover:text-black bg-teal-700 ",
  color10: "bg-blue-800",
  color11: "bg-gray-200",
  color12: "bg-gray-400 ",
  reference: "bg-teal-600 hover:none  pointer-events-none",
  reference2: "bg-blue-800 hover:none  pointer-events-none",
  heading: "font-xl",
  none: " cursor-default",
};
const style =
  " cursor-pointer  rounded-lg text-center font-bold align-middle   w-12 hover:brightness-150 hover:text-black";
const style2 =
  " border-2 border-gray-200 cursor-pointer border-gray-800 rounded-lg text-center font-bold align-middle  text-base w-12 hover:brightness-150 hover:text-black";

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

  const handleBackspace = () => {
    // keyCode 8 is the code for the backspace key
    const updatedElements = [...elementString];
    updatedElements.pop(); // remove the last added element

    // update state directly
    setPolyatomic("");
    setElements(updatedElements);
    setGrams((prevMass) => {
      const removedElement = data.elements.find(
        (element) =>
          element.symbol === updatedElements[updatedElements.length - 1]
      );
      return removedElement ? prevMass - removedElement.atomic_mass : 0;
    });
    setInputGrams((prevMass) => {
      const removedElement = data.elements.find(
        (element) =>
          element.symbol === updatedElements[updatedElements.length - 1]
      );

      return removedElement ? (prevMass - removedElement.mass).toFixed(3) : 0;
    });
    setH2("");
  };

  useEffect(() => {
    setH2("");
    getOccurrences();
  }, [elementString]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const reset = useCallback(() => {
    setGrams(0);
    setInputGrams(0);
    setInputMoles(0);
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
  const [inputMoles, setInputMoles] = useState(0);
  const isValidNumber = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
  };
  useEffect(() => {
    const moles = parseFloat(inputGrams) / grams;
    setInputMoles(moles ? moles.toFixed(3) : 0);

    if (!inputGrams && isValidNumber(inputMoles)) {
      const calculatedGrams = parseFloat(inputMoles) * grams;
      setInputGrams(
        isValidNumber(calculatedGrams) ? calculatedGrams.toFixed(3) : ""
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
      setInputMoles(isValidNumber(moles) ? moles.toFixed(3) : "");
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
        isValidNumber(calculatedGrams) ? calculatedGrams.toFixed(3) : ""
      );
    } else {
      setInputGrams("");
    }
  };

  return (
    <>
      <div className="h-max pb-8 ">
        <Head>
          <title>ChemTools | Molar Mass</title>
        </Head>{" "}
        <div className="z-0">
          {" "}
          <Navbar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            page="Molar Mass"
          />
          <div className=" md:hidden unhidden flex flex-col md:pl-64">
            <div className="mb-8 sticky top-0 z-10 flex h-max flex-shrink-0 shadow ">
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
        </div>
        <main className="flex-1">
          <div
            className="sm:absolute hidden inset-x-0 -z-20 sm:flex justify-center overflow-hidden blur-3xl"
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
          <div className="h-full  text-wrap">
            <div className="  md:ml-48 lg:ml-72 md:mx-auto text-wrap ">
              <div className="flex justify-left h-full w-full   text-lg">
                {" "}
                <div className="top-0 z-0 w-full flex  flex-shrink-0 p  ">
                  <div className="w-full col-md-9 col-sm-8 col-12 smallcenter mx-auto my-auto ml-2 md:m-16">
                    <h1 className="text-center sm:text-5xl mb-6 text-4xl font-bold md:text-7xl">
                      Gram Formula Mass Calculator
                    </h1>
                    <p className="text-center mx-8 text-xl sm:text-2xl font-light md:text-3xl">
                      Calculate the GFM of any compound
                    </p>
                    <hr className="mx-8 text-white mt-8 border-dotted "></hr>
                  </div>{" "}
                </div>
              </div>
              <div className="flex justify-center   ">
                <form className="grid grid-cols-1 md:grid-cols-2 mx-8 ml-8 mt-8 shadow-md bg-gray-900 rounded px-8 pt-6 pb-8 mb-3 bg-opacity-50 backdrop-blur-lg">
                  <div className="mb-3">
                    <label
                      className="block text-gray-300 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Formula
                    </label>

                    <div className="border rounded w-full py-2 px-3 text-black focus:outline-none bg-white">
                      {(h2string.length > 0 || polyatomic) && (
                        <div className="rounded w-full text-black focus:outline-none bg-white">
                          <div className="flex flex-wrap">
                            {polyatomic}
                            {h2string.length > 0 && polyatomic ? " + " : ""}
                            {h2string.map((text, index) => {
                              const match = text.match(/\d+/);
                              if (match) {
                                const [count] = match;
                                const parts = text.split(count);
                                return (
                                  <React.Fragment key={index}>
                                    <span className="flex items-center">
                                      {capitalizeFirstLetter(parts[0])}
                                      <sub className="bg-white  text-black">
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
                        <span className="text-black bg-white">
                          Formula will Appear Here
                        </span>
                      )}
                    </div>
                    <div className="mt-6 mb-6">
                      <label
                        className="block text-gray-300 text-sm font-bold mb-2"
                        htmlFor="password"
                      >
                        Gram Formula Mass
                      </label>
                      <div className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline">
                        {Math.round(grams * 100) / 100}g/mol
                      </div>
                    </div>
                  </div>

                  <div className="mx-8">
                    <label
                      className="block text-gray-300 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Grams
                    </label>
                    <input
                      className="border rounded w-full py-2 px-3 text-black focus:outline-none bg-white "
                      type="text"
                      value={inputGrams}
                      onChange={handleGramsChange}
                    />
                    <label
                      className="mt-6 block text-gray-300 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Moles
                    </label>
                    <input
                      className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      value={inputMoles}
                      onChange={handleMolesChange}
                    />
                  </div>
                </form>
              </div>
              <div
                className="sm:absolute hidden inset-x-0 -z-20 sm:flex justify-center overflow-hidden blur-3xl"
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
              <div className=" grid grid-cols-2 mt-16 bg-inherit">
                <button
                  onClick={() => reset()}
                  className="bg-indigo-500 py-1 px-2 md:w-1/2 w-1/2  mx-auto h-full rounded-md hover:bg-indigo-600 "
                >
                  Reset
                </button>

                <button
                  onClick={() => handleBackspace()}
                  className="bg-indigo-500 py-1 px-2 h-full md:w-1/2 w-1/2  mx-auto rounded-md hover:bg-indigo-600 "
                >
                  Delete
                </button>
              </div>

              <div className="w-full max-w-xs"></div>
              {/* Your content goes here */}

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

              <table className="hidden md:table w-11/12 mx-8 border-collapse border-transparent mt-8 cursor-pointer">
                <tbody>
                  <tr>
                    <td
                      onClick={() =>
                        specialSetElements(0, data.elements[0].symbol)
                      }
                      className={`${colors.color1} `}
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
                      className={colors.color9}
                    >
                      2<br></br>He
                    </td>
                  </tr>

                  <tr>
                    <td
                      onClick={() =>
                        specialSetElements(2, data.elements[2].symbol)
                      }
                      className={colors.color2}
                    >
                      3<br></br>Li
                    </td>
                    <td
                      onClick={() =>
                        specialSetElements(3, data.elements[3].symbol)
                      }
                      className={colors.color3}
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
                      className={colors.color2}
                    >
                      11<br></br>Na
                    </td>
                    <td
                      onClick={() =>
                        specialSetElements(11, data.elements[11].symbol)
                      }
                      className={colors.color3}
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
                  <div
                    className="sm:absolute hidden inset-x-0 -z-20 sm:flex justify-center overflow-hidden blur-3xl"
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

              <div className="text-center mt-24 m-8">
                <h1 className=" text-center font-bold text-2xl m-8">
                  Common Polyatomic Ions
                </h1>
                <div className="mx-auto text-center font-bold text-sm md:text-base mt-4">
                  <div className="mx-auto flex flex-wrap -m-2">
                    {" "}
                    {data.dataArray.map((element, index) => (
                      <div
                        key={index}
                        className=" p-3 w-fit md:w-64 mx-auto  hover:text-blue-500 cursor-pointer"
                        onClick={() => {
                          setGrams(element.mass), setInputGrams(element.mass);
                          setPolyatomic(element.formula);
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
    </>
  );
}
