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
  none: " cursor-default",
};
const style =
  "  cursor-pointer   rounded-lg text-center font-bold align-middle w-12 hover:brightness-150 hover:text-black";
const style2 =
  " border-2 border-gray-200 cursor-pointer border-gray-800 rounded-lg text-center font-bold align-middle  text-base w-12 hover:brightness-150 hover:text-black";
export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
      <div className="pb-8 h-screen  ">
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
        </div>
        <PolarCovalent open={open} setOpen={setOpen} bondType={bondType} />
        <main className="flex-1">
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
          <div className="h-full my-auto pb-8   text-wrap">
            <div className="  md:ml-48 lg:ml-72 md:mx-auto text-wrap ">
              <div className="flex justify-left h-full w-full   text-lg">
                {" "}
                <div className="top-0 z-0 w-full flex  flex-shrink-0 p ">
                  <div className="w-full col-md-9 col-sm-8 col-12 smallcenter mx-auto my-auto ml-2 md:m-16">
                    <h1 className="text-center sm:text-5xl mb-6 text-4xl font-bold md:text-7xl">
                      Bond Character
                    </h1>
                    <p className="text-center mx-8 text-xl sm:text-2xl font-light md:text-3xl">
                      Calculate the bond character between any two elements
                    </p>
                    <hr className="mx-8 text-white mt-8 border-dotted "></hr>
                  </div>{" "}
                </div>
              </div>

              {element1 ? (
                <div className="mx-8 grid  grid-cols-1 md:grid-cols-5">
                  {" "}
                  {element1 ? (
                    <>
                      {" "}
                      <p
                        className={`${
                          bondType ? "col-span-2" : "col-span-4"
                        } md:m-8 mx-auto my-8 w-full text-center text-sm md:text-xl font-bold`}
                      >
                        Predicted bond type between {element1.name} (
                        {element1.en ? element1.en : "Undefined"}) and{" "}
                        {element2?.name ? element2.name : "..."} (
                        {element2?.en === null
                          ? "Undefined"
                          : element2?.en
                          ? element2.en
                          : "..."}
                        )
                      </p>
                      {bondType ? (
                        <p
                          onClick={() => setOpen(true)}
                          className="md:m-8 mx-auto col-span-2 w-full hover:underline  cursor-pointer text-center text-3xl font-bold"
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
                    className="mt-8  bg-indigo-500 py-1 px-2 h-1/2 md:h-1/3 w-1/3 rounded-md hover:bg-indigo-600 mx-auto"
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
                    className="m-8 mx-auto text-xl text-center bg-indigo-500  py-1 px-2 h-1/3  rounded-md hover:bg-indigo-600"
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
              <div className="m-8">
                <div className="md:hidden pb-8 flex flex-wrap justify-center">
                  {data.elements.map((element, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        handleElementClick(element);
                        scrollToTop();
                      }}
                      className={`${
                        colors[element.color]
                      } h-12 text-center flex flex-col items-center justify-center text-base ${style2}`}
                    >
                      <div className="text-sm">{element.number}</div>
                      <div>{element.symbol}</div>
                    </div>
                  ))}
                </div>
              </div>

              <table className="hidden md:table w-11/12 m-8 mt-4 cursor-pointer">
                <tbody className="">
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
                      className="cursor-default  "
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
                      className=" cursor-default "
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
                    <td className="cursor-default"></td>
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
