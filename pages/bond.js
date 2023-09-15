/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import data from "../data.json";
import { useState } from "react";
import React from "react";
import PolarCovalent from "../components/bondTypes";
import {
  calculateElectronegativityDifference,
  getBondType,
} from "@/utils/bondUtils";
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
import Navbar from "../components/navbar";
const colors = {
  color1: "bg-red-600",
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
  none: "border-t border-gray-800 bg-gray-800 cursor-default",
};
const style =
  " border-2 border-gray-200 dark:border-gray-800 rounded-lg text-center font-bold align-middle w-12 hover:brightness-150 hover:text-black";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [element1, setElement1] = useState(null);
  const [element2, setElement2] = useState(null);
  const [bondType, setBondType] = useState(null);

  const handleElementClick = (element) => {
    if (!element1) {
      setElement1(element);
    } else if (!element2) {
      setElement2(element);
      calculateBondType(element1, element);
    }
  };

  const calculateBondType = (el1, el2) => {
    const electronegativityDiff = calculateElectronegativityDifference(
      el1.en === null ? null : el1.en,
      el2.en === null ? null : el2.en
    );
    const bondType = getBondType(electronegativityDiff);
    setBondType(bondType);
  };

  return (
    <>
      <div className="pb-8 h-screen  bg-gray-200 dark:bg-gray-800">
        <Head>
          <title>ChemTools | Molar Mass</title>
        </Head>{" "}
        <div className="z-0">
          {" "}
          <Navbar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            page="Bond Character"
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
        <PolarCovalent open={open} setOpen={setOpen} bondType={bondType} />
        <main className="flex-1">
          <div className="h-full bg-gray-800  text-wrap">
            <div className="bg-gray-800  md:ml-48 lg:ml-72 md:mx-auto text-wrap ">
              <div className="flex justify-left h-full w-full  bg-gray-800 text-lg">
                {" "}
                <div className="top-0 z-0 w-full flex h-64 flex-shrink-0 p bg-gray-200  dark:bg-gray-800">
                  <div className="w-full col-md-9 col-sm-8 col-12 smallcenter mx-auto my-auto ml-2 md:m-16">
                    <h1 className="text-center  mb-6 text-5xl font-bold md:text-7xl">
                      Chemistry Tools
                    </h1>
                    <p className="text-center  text-2xl font-light md:text-3xl">
                      We've got solutions... not just reactions
                    </p>
                    <hr className="text-white my-16 border-dotted "></hr>
                  </div>{" "}
                </div>
              </div>

              {element1 ? (
                <div className="mx-8 grid grid-cols-5">
                  {" "}
                  {element1 ? (
                    <>
                      {" "}
                      <p
                        className={`${
                          bondType ? "col-span-2" : "col-span-4"
                        } m-8 w-full text-center text-base md:text-xl font-bold`}
                      >
                        Predicted bond type between {element1.name} (
                        {element1.en ? element1.en : "Undefined"}) and{" "}
                        {element2?.name ? element2.name : "..."} (
                        {element2?.en === null
                          ? "Undefined"
                          : element2?.en
                          ? element2.en
                          : "..."}
                        )" :
                      </p>
                      {bondType ? (
                        <p
                          onClick={() => setOpen(true)}
                          className="m-8 col-span-2 w-full hover:underline  cursor-pointer text-center text-3xl font-bold"
                        >
                          <div class="tooltip-container">
                            {bondType}

                            <sup className="text-sm text-purple-600 ">
                              {bondType ? "ⓘ" : ""}
                            </sup>
                            <div class="tooltip-text">What does this mean?</div>
                          </div>
                        </p>
                      ) : null}
                    </>
                  ) : (
                    <div className="w-full col-span-1"></div>
                  )}
                  <button
                    className="mt-8   bg-indigo-500 py-1 px-2 h-1/3 justify-self-end rounded-md hover:bg-indigo-600 mx-8"
                    onClick={() => {
                      setElement1();
                      setElement2();
                      setBondType();
                    }}
                  >
                    Reset
                  </button>
                </div>
              ) : (
                <div className="flex mx-auto items-center">
                  <button
                    className="m-8 mx-auto text-center bg-indigo-500 py-1 px-2 h-1/3  rounded-md hover:bg-indigo-600"
                    onClick={() => {
                      setElement1();
                      setElement2();
                      setBondType();
                    }}
                  >
                    Reset
                  </button>
                </div>
              )}

              <table className="w-11/12 mx-8 bg-gray-800 mt-8 cursor-pointer">
                <tbody>
                  <tr>
                    <td
                      className={`${colors.color1 + style} text-xs sm:text-xl`}
                      onClick={() => handleElementClick(data.elements[0])}
                    >
                      1<br></br>H
                    </td>
                    <td
                      className={`${colors.none} cursor-default text-xs sm:text-xl `}
                      colSpan="16"
                    ></td>
                    <td
                      onClick={() => handleElementClick(data.elements[1])}
                      className={colors.color9 + style}
                    >
                      2<br></br>He
                    </td>
                  </tr>
                  <tr>
                    <td
                      onClick={() => handleElementClick(data.elements[2])}
                      className={colors.color2 + style}
                    >
                      3<br></br>Li
                    </td>
                    <td
                      onClick={() => handleElementClick(data.elements[3])}
                      className={colors.color3 + style}
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
                        onClick={() => handleElementClick(element)}
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
                      onClick={() => handleElementClick(data.elements[10])}
                      className={colors.color2 + style}
                    >
                      11<br></br>Na
                    </td>
                    <td
                      onClick={() => handleElementClick(data.elements[11])}
                      className={colors.color3 + style}
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
                        onClick={() => handleElementClick(element)}
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
                        onClick={() => handleElementClick(element)}
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
                        onClick={() => handleElementClick(element)}
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
                        onClick={() => handleElementClick(element)}
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
                        onClick={() => handleElementClick(element)}
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
                        key={key}
                        onClick={() => handleElementClick(element)}
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
                        onClick={() => handleElementClick(element)}
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
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
