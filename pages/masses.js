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
    "border-2 border-gray-200 dark:border-gray-800 rounded-lg text-center font-bold align-middle w-12 hover:brightness-150 hover:text-black bg-red-600",
  color2:
    " border-2 border-gray-200 dark:border-gray-800 rounded-lg text-center font-bold align-middle w-12 hover:brightness-150 hover:text-black bg-blue-700",
  color3:
    " border-2 border-gray-200 dark:border-gray-800 rounded-lg text-center font-bold align-middle w-12 hover:brightness-150 hover:text-black bg-blue-500",
  color4:
    " border-2 border-gray-200 dark:border-gray-800 rounded-lg text-center font-bold align-middle w-12 hover:brightness-150 hover:text-black bg-teal-600",
  color5: "bg-red-500",
  color6: "bg-yellow-500",
  color7: "bg-orange-500",
  color8: "bg-green-400",
  color9:
    "border-2 border-gray-200 dark:border-gray-800 rounded-lg text-center font-bold align-middle w-12 hover:brightness-150 hover:text-black bg-teal-700 ",
  color10: "bg-blue-800",
  color11: "bg-gray-200",
  color12: "bg-gray-400 ",
  reference: "bg-teal-600 hover:none  pointer-events-none",
  reference2: "bg-blue-800 hover:none  pointer-events-none",
  heading: "font-xl",
  none: "border-t border-gray-800 bg-gray-800 cursor-default",
};
const style =
  " border-2 border-gray-200 dark:border-gray-800 rounded-lg text-center font-bold align-middle w-12 hover:brightness-150 hover:text-black";

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
      return removedElement
        ? (prevMass - removedElement.atomic_mass).toFixed(3)
        : 0;
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
    const { atomic_mass } = data.elements[index];
    setGrams(grams + atomic_mass);
    setInputGrams(grams + atomic_mass);
    setElements((prev) => [...prev, name]);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const elementStates = (mass, name) => {
    setGrams(grams + mass);
    setInputGrams(grams + mass);
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
      <div className="h-max pb-8  bg-gray-200 dark:bg-gray-800">
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
        </div>
        <main className="flex-1">
          <div className="h-full bg-gray-800  text-wrap">
            <div className="bg-gray-800  md:ml-48 lg:ml-72 md:mx-auto text-wrap ">
              <div className="flex justify-left h-full w-full  bg-gray-800 text-lg">
                {" "}
                <div className="top-0 z-0 w-full flex  flex-shrink-0 p bg-gray-200  dark:bg-gray-800">
                  <div className="w-full col-md-9 col-sm-8 col-12 smallcenter mx-auto my-auto ml-2 md:m-16">
                    <h1 className="text-center  mb-6 text-5xl font-bold md:text-7xl">
                      Chemistry Tools
                    </h1>
                    <p className="text-center  text-2xl font-light md:text-3xl">
                      We've got solutions... not just reactions
                    </p>
                    <hr className="text-white mt-16 border-dotted "></hr>
                  </div>{" "}
                </div>
              </div>
              <div className="flex justify-center  bg-gray-800 ">
                <form className="grid grid-cols-2 bg-gray-900 mx-8 ml-8  mt-8 shadow-md rounded px-8 pt-6 pb-8 mb-3">
                  <div className=" mb-3">
                    <label
                      className=" block text-gray-300 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Formula
                    </label>
                    {polyatomic === "" ? (
                      <div className="border rounded w-full py-2 px-3 text-black focus:outline-none bg-white">
                        {h2string.length > 0 ? (
                          h2string.map((text, index) => {
                            const match = text.match(/\d+/);
                            if (match) {
                              const [count] = match;
                              const parts = text.split(count);
                              return (
                                <React.Fragment key={index}>
                                  {capitalizeFirstLetter(parts[0])}
                                  <sub
                                    style={{
                                      backgroundColor: "white",
                                      color: "black",
                                    }}
                                  >
                                    {count}
                                  </sub>
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
                          })
                        ) : (
                          <span className="text-black bg-white">
                            Formula will Appear Here
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="border rounded w-full py-2 px-3 text-black focus:outline-none bg-white">
                        {polyatomic}
                      </div>
                    )}

                    <div className=" mt-6 mb-6">
                      <label
                        className="block text-gray-300  text-sm font-bold mb-2"
                        htmlFor="password"
                      >
                        Gram Formula Mass
                      </label>
                      <div className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline">
                        {grams.toFixed(3)}g/mol
                      </div>
                    </div>
                  </div>

                  <div className="mx-8">
                    <label
                      className=" block text-gray-300 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Grams
                    </label>
                    <input
                      className=" border rounded w-full py-2 px-3 text-black focus:outline-none bg-white "
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

                <div className="grid mt-16 bg-inherit">
                  <button
                    onClick={() => reset()}
                    className="bg-indigo-500 py-1 px-2 h-1/3 justify-self-end rounded-md hover:bg-indigo-600 mx-8"
                  >
                    Reset
                  </button>

                  <button
                    onClick={() => handleBackspace()}
                    className="bg-indigo-500 py-1 px-2 h-1/3 justify-self-end rounded-md hover:bg-indigo-600 mx-8"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="w-full max-w-xs"></div>
              <table className="w-11/12 mx-8 bg-gray-800 mt-8 cursor-pointer">
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
                      3<br></br>Be
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

                  <tr>
                    <td
                      className="cursor-default bg-gray-800 border-l border-b border-gray-800 "
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
                    <td
                      className="bg-gray-800 border cursor-default border-gray-800"
                      colSpan="1"
                      rowSpan="1"
                    ></td>
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
                    <td className="cursor-default bg-gray-800"></td>
                  </tr>
                </tbody>
              </table>
              <h1 className=" bg-gray-800 text-center font-bold text-2xl mt-24 m-8">
                Common Polyatomic Ions
              </h1>
              <table className="mx-auto p-3 bg-gray-800 border-2 w-3/4">
                <tbody className="bg-gray-800 border-2 p-3 b">
                  {data.dataArray.map((row) => (
                    <tr
                      key={row.id}
                      className="border-2 p-3 bg-gray-800 hover:bg-gray-700 cursor-pointer"
                    >
                      <td
                        onClick={() => {
                          setGrams(row.cell1.mass),
                            setInputGrams(row.cell1.mass);
                          setPolyatomic(
                            row.cell1.name + " " + row.cell1.formula
                          );
                          scrollToTop();
                        }}
                        className="border-2 p-3 bg-gray-800 hover:bg-gray-700 cursor-pointer"
                      >
                        {row.cell1.name + " " + row.cell1.formula}
                      </td>
                      <td
                        onClick={() => {
                          setGrams(row.cell2.mass),
                            setInputGrams(row.cell2.mass);
                          setPolyatomic(
                            row.cell2.name + " " + row.cell2.formula
                          );
                          scrollToTop();
                        }}
                        className="border-2 p-3 bg-gray-800 hover:bg-gray-700 cursor-pointer"
                      >
                        {row.cell2.name + " " + row.cell2.formula}
                      </td>
                      <td
                        onClick={() => {
                          setGrams(row.cell3.mass),
                            setInputGrams(row.cell3.mass);
                          setPolyatomic(
                            row.cell3.name + " " + row.cell3.formula
                          );
                          scrollToTop();
                        }}
                        className="border-2 p-3 bg-gray-800 hover:bg-gray-700 cursor-pointer"
                      >
                        {row.cell3.name + " " + row.cell3.formula}
                      </td>
                      <td
                        onClick={() => {
                          setGrams(grams + row.cell4.mass),
                            setInputGrams(grams + row.cell4.mass);
                          setPolyatomic(
                            row.cell4.name + " " + row.cell4.formula
                          );
                          scrollToTop();
                        }}
                        className="border-2 p-3 bg-gray-800 hover:bg-gray-700 cursor-pointer"
                      >
                        {row.cell4.name + " " + row.cell4.formula}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
