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
  none: "  cursor-default",
};
const style =
  "  rounded-lg lg:transition ease-in-out delay-0 lg:hover:scale-110 text-center font-bold align-middle text-white w-12 hover:brightness-150 hover:text-black";
const style2 =
  " border-2 border-gray-200 cursor-pointer border-gray-300 dark:border-gray-800 text-white rounded-lg text-center font-bold align-middle  text-base w-12 hover:brightness-150 hover:text-black";

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
const fiftyseven71 = [
  {
    number: 57,
    symbol: "La",
    name: "Lanthanum",
    color: colors.color4 + style,
    mass: 138.91,
  },
  {
    number: 58,
    symbol: "Ce",
    name: "Cerium",
    color: colors.color4 + style,
    mass: 140.12,
  },
  {
    number: 59,
    symbol: "Pr",
    name: "Praseodymium",
    color: colors.color4 + style,
    mass: 140.91,
  },
  {
    number: 60,
    symbol: "Nd",
    name: "Neodymium",
    color: colors.color4 + style,
    mass: 144.24,
  },
  {
    number: 61,
    symbol: "Pm",
    name: "Promethium",
    color: colors.color4 + style,
    mass: 150,
  },
  {
    number: 62,
    symbol: "Sm",
    name: "Samarium",
    color: colors.color4 + style,
    mass: 150.36,
  },
  {
    number: 63,
    symbol: "Eu",
    name: "Europium",
    color: colors.color4 + style,
    mass: 151.96,
  },
  {
    number: 64,
    symbol: "Gd",
    name: "Gadolinium",
    color: colors.color4 + style,
    mass: 157.25,
  },
  {
    number: 65,
    symbol: "Tb",
    name: "Terbium",
    color: colors.color4 + style,
    mass: 158.93,
  },
  {
    number: 66,
    symbol: "Dy",
    name: "Dysprosium",
    color: colors.color4 + style,
    mass: 162.5,
  },
  {
    number: 67,
    symbol: "Ho",
    name: "Holmium",
    color: colors.color4 + style,
    mass: 164.93,
  },
  {
    number: 68,
    symbol: "Er",
    name: "Erbium",
    color: colors.color4 + style,
    mass: 167.26,
  },
  {
    number: 69,
    symbol: "Tm",
    name: "Thulium",
    color: colors.color4 + style,
    mass: 168.93,
  },
  {
    number: 70,
    symbol: "Yb",
    name: "Ytterbium",
    color: colors.color4 + style,
    mass: 173.05,
  },
  {
    number: 71,
    symbol: "Lu",
    name: "Lutetium",
    color: colors.color4 + style,
    mass: 174.97,
  },
];

const eightynineonehundredand3 = [
  {
    number: 89,
    symbol: "Ac",
    name: "Actinium",
    color: colors.color10 + style,
    mass: 227,
  },
  {
    number: 90,
    symbol: "Th",
    name: "Thorium",
    color: colors.color10 + style,
    mass: 232.04,
  },
  {
    number: 91,
    symbol: "Pa",
    name: "Protactinium",
    color: colors.color10 + style,
    mass: 231.04,
  },
  {
    number: 92,
    symbol: "U",
    name: "Uranium",
    color: colors.color10 + style,
    mass: 238.03,
  },
  {
    number: 93,
    symbol: "Np",
    name: "Neptunium",
    color: colors.color10 + style,
    mass: 237,
  },
  {
    number: 94,
    symbol: "Pu",
    name: "Plutonium",
    color: colors.color10 + style,
    mass: 244,
  },
  {
    number: 95,
    symbol: "Am",
    name: "Americium",
    color: colors.color10 + style,
    mass: 243,
  },
  {
    number: 96,
    symbol: "Cm",
    name: "Curium",
    color: colors.color10 + style,
    mass: 247,
  },
  {
    number: 97,
    symbol: "Bk",
    name: "Berkelium",
    color: colors.color10 + style,
    mass: 247,
  },
  {
    number: 98,
    symbol: "Cf",
    name: "Californium",
    color: colors.color10 + style,
    mass: 251,
  },
  {
    number: 99,
    symbol: "Es",
    name: "Einsteinium",
    color: colors.color10 + style,
    mass: 252,
  },
  {
    number: 100,
    symbol: "Fm",
    name: "Fermium",
    color: colors.color10 + style,
    mass: 257,
  },
  {
    number: 101,
    symbol: "Md",
    name: "Mendelevium",
    color: colors.color10 + style,
    mass: 258,
  },
  {
    number: 102,
    symbol: "No",
    name: "Nobelium",
    color: colors.color10 + style,
    mass: 259,
  },
  {
    number: 103,
    symbol: "Lr",
    name: "Lawrencium",
    color: colors.color10 + style,
    mass: 266,
  },
];
const fiveTen = [
  {
    number: 5,
    symbol: "B",
    name: "Boron",
    color: colors.color6 + style,
    mass: 10.81,
  },
  {
    number: 6,
    symbol: "C",
    name: "Carbon",
    color: colors.color1 + style,
    mass: 12.011,
  },
  {
    number: 7,
    symbol: "N",
    name: "Nitrogen",
    color: colors.color1 + style,
    mass: 14.007,
  },
  {
    number: 8,
    symbol: "O",
    name: "Oxygen",
    color: colors.color1 + style,
    mass: 15.999,
  },
  {
    number: 9,
    symbol: "F",
    name: "Fluorine",
    color: colors.color8 + style,
    mass: 18.998,
  },
  {
    number: 10,
    symbol: "Ne",
    name: "Neon",
    color: colors.color9 + style,
    mass: 20.18,
  },
];
const eightyseven118 = [
  {
    number: 87,
    symbol: "Fr",
    name: "Francium",
    color: colors.color2 + style,
    mass: 223,
  },
  {
    number: 88,
    symbol: "Ra",
    name: "Radium",
    color: colors.color3 + style,
    mass: 226,
  },
  {
    number: "89 - 103",
    name: "",
    color: colors.reference2 + style,
    mass: 0.0,
  },
  {
    number: 104,
    symbol: "Rf",
    name: "Rutherfordium",
    color: colors.color5 + style,
    mass: 267,
  },
  {
    number: 105,
    symbol: "Db",
    name: "Dubnium",
    color: colors.color5 + style,
    mass: 268,
  },
  {
    number: 106,
    symbol: "Sg",
    name: "Seaborgium",
    color: colors.color5 + style,
    mass: 269,
  },
  {
    number: 107,
    symbol: "Bh",
    name: "Bohrium",
    color: colors.color5 + style,
    mass: 270,
  },
  {
    number: 108,
    symbol: "Hs",
    name: "Hassium",
    color: colors.color5 + style,
    mass: 277,
  },
  {
    number: 109,
    symbol: "Mt",
    name: "Meitnerium",
    color: colors.color5 + style,
    mass: 278,
  },
  {
    number: 110,
    symbol: "Ds",
    name: "Darmstadtium",
    color: colors.color5 + style,
    mass: 281,
  },
  {
    number: 111,
    symbol: "Rg",
    name: "Roentgenium",
    color: colors.color5 + style,
    mass: 282,
  },
  {
    number: 112,
    symbol: "Cn",
    name: "Copernicium",
    color: colors.color5 + style,
    mass: 285,
  },
  {
    number: 113,
    symbol: "Nh",
    name: "Nihonium",
    color: colors.color12 + style,
    mass: 286,
  },
  {
    number: 114,
    symbol: "Fl",
    name: "Flerovium",
    color: colors.color12 + style,
    mass: 289,
  },
  {
    number: 115,
    symbol: "Mc",
    name: "Moscovium",
    color: colors.color12 + style,
    mass: 290,
  },
  {
    number: 116,
    symbol: "Lv",
    name: "Livermorium",
    color: colors.color12 + style,
    mass: 293,
  },
  {
    number: 117,
    symbol: "Ts",
    name: "Tennessine",
    color: colors.color12 + style,
    mass: 294,
  },
  {
    number: 118,
    symbol: "Og",
    name: "Oganesson",
    color: colors.color12 + style,
    mass: 294,
  },
];
const thirteenEighteen = [
  {
    number: 13,
    symbol: "Al",
    name: "Aluminum",
    color: colors.color7 + style,
    mass: 26.982,
  },
  {
    number: 14,
    symbol: "Si",
    name: "Silicon",
    color: colors.color6 + style,
    mass: 28.085,
  },
  {
    number: 15,
    symbol: "P",
    name: "Phosphorus",
    color: colors.color1 + style,
    mass: 20.974,
  },
  {
    number: 16,
    symbol: "S",
    name: "Sulfur",
    color: colors.color1 + style,
    mass: 32.06,
  },
  {
    number: 17,
    symbol: "Cl",
    name: "Chlorine",
    color: colors.color8 + style,
    mass: 35.45,
  },
  {
    number: 18,
    symbol: "Ar",
    name: "Argon",
    color: colors.color9 + style,
    mass: 39.948,
  },
];
const row1 = [
  {
    number: 19,
    symbol: "K",
    name: "Potassium",
    color: colors.color2 + style,
    mass: 39.098,
  },
  {
    number: 20,
    symbol: "Ca",
    name: "Calcium",
    color: colors.color3 + style,
    mass: 40.078,
  },
  {
    number: 21,
    symbol: "Sc",
    name: "Scandium",
    color: colors.color5 + style,
    mass: 44.956,
  },
  {
    number: 22,
    symbol: "Ti",
    name: "Titanium",
    color: colors.color5 + style,
    mass: 47.867,
  },
  {
    number: 23,
    symbol: "V",
    name: "Vanadium",
    color: colors.color5 + style,
    mass: 50.942,
  },
  {
    number: 24,
    symbol: "Cr",
    name: "Chromium",
    color: colors.color5 + style,
    mass: 51.996,
  },
  {
    number: 25,
    symbol: "Mn",
    name: "Manganese",
    color: colors.color5 + style,
    mass: 54.938,
  },
  {
    number: 26,
    symbol: "Fe",
    name: "Iron",
    color: colors.color5 + style,
    mass: 55.845,
  },
  {
    number: 27,
    symbol: "Co",
    name: "Cobalt",
    color: colors.color5 + style,
    mass: 58.933,
  },
  {
    number: 28,
    symbol: "Ni",
    name: "Nickel",
    color: colors.color5 + style,
    mass: 58.693,
  },
  {
    number: 29,
    symbol: "Cu",
    name: "Copper",
    color: colors.color5 + style,
    mass: 63.546,
  },
  {
    number: 30,
    symbol: "Zn",
    name: "Zinc",
    color: colors.color5 + style,
    mass: 65.38,
  },
  {
    number: 31,
    symbol: "Ga",
    name: "Gallium",
    color: colors.color7 + style,
    mass: 69.723,
  },
  {
    number: 32,
    symbol: "Ge",
    name: "Germanium",
    color: colors.color6 + style,
    mass: 72.63,
  },
  {
    number: 33,
    symbol: "As",
    name: "Arsenic",
    color: colors.color1 + style,
    mass: 74.922,
  },
  {
    number: 34,
    symbol: "Se",
    name: "Selenium",
    color: colors.color1 + style,
    mass: 78.971,
  },
  {
    number: 35,
    symbol: "Br",
    name: "Bromine",
    color: colors.color8 + style,
    mass: 79.904,
  },
  {
    number: 36,
    symbol: "Kr",
    name: "Krypton",
    color: colors.color9 + style,
    mass: 83.798,
  },
];

const row2 = [
  {
    number: 37,
    symbol: "Rb",
    name: "Rubidium",
    color: colors.color2 + style,
    mass: 85.468,
  },
  {
    number: 38,
    symbol: "Sr",
    name: "Strontium",
    color: colors.color3 + style,
    mass: 87.62,
  },
  {
    number: 39,
    symbol: "Y",
    name: "Yttrium",
    color: colors.color5 + style,
    mass: 88.906,
  },
  {
    number: 40,
    symbol: "Zr",
    name: "Zirconium",
    color: colors.color5 + style,
    mass: 91.224,
  },
  {
    number: 41,
    symbol: "Nb",
    name: "Niobium",
    color: colors.color5 + style,
    mass: 92.906,
  },
  {
    number: 42,
    symbol: "Mo",
    name: "Molybdenum",
    color: colors.color5 + style,
    mass: 95.95,
  },
  {
    number: 43,
    symbol: "Tc",
    name: "Technetium",
    color: colors.color5 + style,
    mass: 98,
  },
  {
    number: 44,
    symbol: "Ru",
    name: "Ruthenium",
    color: colors.color5 + style,
    mass: 101.07,
  },
  {
    number: 45,
    symbol: "Rh",
    name: "Rhodium",
    color: colors.color5 + style,
    mass: 102.91,
  },
  {
    number: 46,
    symbol: "Pd",
    name: "Palladium",
    color: colors.color5 + style,
    mass: 106.42,
  },
  {
    number: 47,
    symbol: "Ag",
    name: "Silver",
    color: colors.color5 + style,
    mass: 107.87,
  },
  {
    number: 48,
    symbol: "Cd",
    name: "Cadmium",
    color: colors.color5 + style,
    mass: 112.41,
  },
  {
    number: 49,
    symbol: "In",
    name: "Indium",
    color: colors.color7 + style,
    mass: 114.82,
  },
  {
    number: 50,
    symbol: "Sn",
    name: "Tin",
    color: colors.color7 + style,
    mass: 188.71,
  },
  {
    number: 51,
    symbol: "Sb",
    name: "Antimony",
    color: colors.color6 + style,
    mass: 121.76,
  },
  {
    number: 52,
    symbol: "Te",
    name: "Tellurium",
    color: colors.color6 + style,
    mass: 127.6,
  },
  {
    number: 53,
    symbol: "I",
    name: "Iodine",
    color: colors.color8 + style,
    mass: 126.9,
  },
  {
    number: 54,
    symbol: "Xe",
    name: "Xenon",
    color: colors.color9 + style,
    mass: 131.29,
  },
];
const row3 = [
  {
    number: 55,
    symbol: "Cs",
    name: "Cesium",
    color: colors.color2 + style,
    mass: 132.91,
  },
  {
    number: 56,
    symbol: "Ba",
    name: "Barium",
    color: colors.color3 + style,
    mass: 137.33,
  },
  { number: "57 - 71", color: colors.reference + style, mass: 0.0 },
  {
    number: 72,
    symbol: "Hf",
    name: "Hafnium",
    color: colors.color5 + style,
    mass: 87.49,
  },
  {
    number: 73,
    symbol: "Ta",
    name: "Tantalum",
    color: colors.color5 + style,
    mass: 180.95,
  },
  {
    number: 74,
    symbol: "W",
    name: "Tungsten",
    color: colors.color5 + style,
    mass: 18384,
  },
  {
    number: 75,
    symbol: "Re",
    name: "Rhenium",
    color: colors.color5 + style,
    mass: 86.21,
  },
  {
    number: 76,
    symbol: "Os",
    name: "Osmium",
    color: colors.color5 + style,
    mass: 190.23,
  },
  {
    number: 77,
    symbol: "Ir",
    name: "Iridium",
    color: colors.color5 + style,
    mass: 192.22,
  },
  {
    number: 78,
    symbol: "Pt",
    name: "Platinum",
    color: colors.color5 + style,
    mass: 195.08,
  },
  {
    number: 79,
    symbol: "Au",
    name: "Gold",
    color: colors.color5 + style,
    mass: 196.97,
  },
  {
    number: 80,
    symbol: "Hg",
    name: "Mercury",
    color: colors.color5 + style,
    mass: 200.59,
  },
  {
    number: 81,
    symbol: "Tl",
    name: "Thallium",
    color: colors.color7 + style,
    mass: 204.38,
  },
  {
    number: 82,
    symbol: "Pb",
    name: "Lead",
    color: colors.color7 + style,
    mass: 207.2,
  },
  {
    number: 83,
    symbol: "Bi",
    name: "Bismuth",
    color: colors.color7 + style,
    mass: 208.98,
  },
  {
    number: 84,
    symbol: "Po",
    name: "Polonium",
    color: colors.color6 + style,
    mass: 209,
  },
  {
    number: 85,
    symbol: "At",
    name: "Astatine",
    color: colors.color8 + style,
    mass: 210,
  },
  {
    number: 86,
    symbol: "Rn",
    name: "Radon",
    color: colors.color9 + style,
    mass: 222,
  },
];
export default function Home() {
  //   useEffect(() => {
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
  const [gram, setMass] = useState(0);
  const [elementString, setElements] = useState([]);
  const [h2string, setH2] = useState("");
  const [info, setInfoOpen] = useState(false);
  const [ionization, setIonization] = useState([]);
  const [electronegativity, setElectronegativity] = useState("");
  const [configuration, setConfiguration] = useState("");
  const [boil, setBoil] = useState("");
  const [melt, setMelt] = useState("");
  const [dense, setDense] = useState("");
  const [affinity, setAffinity] = useState("");
  const [phase, setPhase] = useState("");
  const [appearance, setAppearance] = useState("");
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [oxidation, setOxidation] = useState([]);

  return (
    <>
      <div className="  lg:bg-none bg-gradient-to-t from-white via-20% via-indigo-50 to-white dark:bg-gradient-to-t dark:from-black dark:via-20% dark:via-[#120126] dark:to-black">
        <div className="relative pb-8">
          {" "}
          <Head>
            <title>ChemTools: Element Stats</title>
            <Source description={"Element information at your fingertips."} />
          </Head>{" "}
          <div className="z-0">
            {" "}
            <Navbar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              page="Element Info"
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
                        alt="Chemtools Logo"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <main className="sm:pb-80">
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
                      Element Info
                    </h2>
                    <p className="mt-6 text-2xl leading-8 dark:text-white text-gray-600">
                      View all of the important information about any element by
                      clicking on the elements on our interactive periodic table
                    </p>
                  </div>
                </div>
                <div className="w-full max-w-xs"></div>
                <div className="m-8 ">
                  <div className="md:hidden pb-8 flex flex-wrap justify-center">
                    {data.elements.map((element, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setInfoOpen(true);
                          setIonization(
                            data.elements.filter(
                              (name) => name.symbol === element.symbol
                            )[0].ionization_energies
                          );
                          setOxidation(
                            data.elements.filter(
                              (name) => name.symbol === element.symbol
                            )[0].oxidationStates
                          );
                          setAffinity(
                            data.elements.filter(
                              (name) => name.symbol === element.symbol
                            )[0].electron_affinity
                          );
                          setAppearance(
                            data.elements.filter(
                              (name) => name.symbol === element.symbol
                            )[0].appearance
                          );
                          setBoil(
                            data.elements.filter(
                              (name) => name.symbol === element.symbol
                            )[0].boil
                          );
                          setConfiguration(
                            data.elements.filter(
                              (name) => name.symbol === element.symbol
                            )[0].electron_configuration
                          );
                          setDense(
                            data.elements.filter(
                              (name) => name.symbol === element.symbol
                            )[0].density
                          );
                          setMelt(
                            data.elements.filter(
                              (name) => name.symbol === element.symbol
                            )[0].melt
                          );
                          setElectronegativity(
                            data.elements.filter(
                              (name) => name.symbol === element.symbol
                            )[0].en
                          );
                          setPhase(
                            data.elements.filter(
                              (name) => name.symbol === element.symbol
                            )[0].phase
                          );
                          setName(
                            data.elements.filter(
                              (name) => name.symbol === element.symbol
                            )[0].name
                          );

                          setSymbol(element.symbol);
                        }}
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
                <table className="hidden mt-8 md:table border-separate border-spacing-1 max-w-7xl mx-auto w-11/12    border-transparent  cursor-pointer">
                  <tbody className="">
                    <tr>
                      <td
                        onClick={() => {
                          setInfoOpen(true);
                          setIonization(data.elements[0].ionization_energies);
                          setAffinity(data?.elements[0].electron_affinity);
                          setAppearance(data.elements[0].appearance);
                          setBoil(data.elements[0].boil);
                          setConfiguration(
                            data.elements[0].electron_configuration
                          );
                          setDense(data.elements[0].density);
                          setMelt(data.elements[0].melt);
                          setName(data.elements[0].name);
                          setSymbol(data.elements[0].symbol);
                          setOxidation(data.elements[0].oxidationStates);

                          setElectronegativity(data.elements[0].en);
                          setPhase(data.elements[0].phase);
                        }}
                        className={`${colors.color1 + style} `}
                      >
                        1<br></br>H
                      </td>
                      <td
                        className={`${colors.none} cursor-default `}
                        colSpan="16"
                      ></td>
                      <td
                        onClick={() => {
                          setInfoOpen(true);
                          setIonization(data.elements[1].ionization_energies);
                          setAffinity(data?.elements[1].electron_affinity);
                          setAppearance(data.elements[1].appearance);
                          setBoil(data.elements[1].boil);
                          setConfiguration(
                            data.elements[31].electron_configuration
                          );
                          setDense(data.elements[1].density);
                          setMelt(data.elements[1].melt);
                          setName(data.elements[1].name);
                          setSymbol(data.elements[1].symbol);
                          setOxidation(data.elements[1].oxidationStates);

                          setElectronegativity(data.elements[1].en);
                          setPhase(data.elements[1].phase);
                        }}
                        className={colors.color9 + style}
                      >
                        2<br></br>He
                      </td>
                    </tr>
                    <tr>
                      <td
                        onClick={() => {
                          setInfoOpen(true);
                          setIonization(data.elements[2].ionization_energies);
                          setAffinity(data?.elements[2].electron_affinity);
                          setAppearance(data.elements[2].appearance);
                          setBoil(data.elements[2].boil);
                          setConfiguration(
                            data.elements[2].electron_configuration
                          );
                          setDense(data.elements[2].density);
                          setMelt(data.elements[2].melt);
                          setName(data.elements[2].name);
                          setSymbol(data.elements[2].symbol);
                          setOxidation(data.elements[2].oxidationStates);

                          setElectronegativity(data.elements[2].en);
                          setPhase(data.elements[2].phase);
                        }}
                        className={colors.color2 + style}
                      >
                        3<br></br>Li
                      </td>
                      <td
                        onClick={() => {
                          setInfoOpen(true);
                          setIonization(data.elements[3].ionization_energies);
                          setAffinity(data?.elements[3].electron_affinity);
                          setAppearance(data.elements[3].appearance);
                          setOxidation(data.elements[3].oxidationStates);

                          setBoil(data.elements[3].boil);
                          setConfiguration(
                            data.elements[3].electron_configuration
                          );
                          setDense(data.elements[3].density);
                          setMelt(data.elements[3].melt);
                          setElectronegativity(data.elements[3].en);
                          setName(data.elements[3].name);
                          setSymbol(data.elements[3].symbol);
                          setPhase(data.elements[3].phase);
                        }}
                        className={colors.color3 + style}
                      >
                        4<br></br>Be
                      </td>
                      <td
                        className={`${colors.none} cursor-default `}
                        colSpan="10"
                      ></td>
                      {fiveTen.map((element, key) => (
                        <td
                          key={key}
                          onClick={() => {
                            setInfoOpen(true);
                            setIonization(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].ionization_energies
                            );
                            setOxidation(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].oxidationStates
                            );
                            setAffinity(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].electron_affinity
                            );
                            setAppearance(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].appearance
                            );
                            setBoil(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].boil
                            );
                            setConfiguration(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].electron_configuration
                            );
                            setDense(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].density
                            );
                            setMelt(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].melt
                            );
                            setElectronegativity(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].en
                            );
                            setPhase(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].phase
                            );
                            setName(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].name
                            );

                            setSymbol(element.symbol);
                          }}
                          className={element.color}
                        >
                          {element.number}
                          <br></br>
                          {element.symbol}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td
                        onClick={() => {
                          setInfoOpen(true);
                          setIonization(data.elements[10].ionization_energies);
                          setAffinity(data?.elements[10].electron_affinity);
                          setAppearance(data.elements[10].appearance);
                          setBoil(data.elements[10].boil);
                          setConfiguration(
                            data.elements[10].electron_configuration
                          );
                          setDense(data.elements[10].density);
                          setMelt(data.elements[10].melt);
                          setElectronegativity(data.elements[10].en);
                          setPhase(data.elements[10].phase);
                          setName(data.elements[10].name);
                          setSymbol(data.elements[10].symbol);
                          setOxidation(data.elements[10].oxidationStates);
                        }}
                        className={colors.color2 + style}
                      >
                        11<br></br>Na
                      </td>
                      <td
                        onClick={() => {
                          setInfoOpen(true);
                          setIonization(data.elements[11].ionization_energies);
                          setAffinity(data?.elements[11].electron_affinity);
                          setAppearance(data.elements[11].appearance);
                          setBoil(data.elements[11].boil);
                          setConfiguration(
                            data.elements[11].electron_configuration
                          );
                          setDense(data.elements[11].density);
                          setMelt(data.elements[11].melt);
                          setOxidation(data.elements[11].oxidationStates);
                          setElectronegativity(data.elements[11].en);
                          setPhase(data.elements[11].phase);
                          setName(data.elements[11].name);
                          setSymbol(data.elements[11].symbol);
                        }}
                        className={colors.color3 + style}
                      >
                        12<br></br>Mg
                      </td>

                      <td
                        className={`${colors.none} cursor-default`}
                        colSpan="10"
                      ></td>
                      {thirteenEighteen.map((element, key) => (
                        <td
                          key={key}
                          onClick={() => {
                            setInfoOpen(true);
                            setIonization(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].ionization_energies
                            );
                            setAffinity(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].electron_affinity
                            );
                            setAppearance(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].appearance
                            );
                            setBoil(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].boil
                            );
                            setConfiguration(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].electron_configuration
                            );
                            setDense(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].density
                            );
                            setOxidation(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].oxidationStates
                            );
                            setMelt(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].melt
                            );
                            setElectronegativity(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].en
                            );
                            setPhase(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].phase
                            );
                            setName(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].name
                            );
                            setSymbol(element.symbol);
                          }}
                          className={element.color}
                        >
                          {element.number}
                          <br></br>
                          {element.symbol}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      {row1.map((element, key) => (
                        <td
                          key={key}
                          onClick={() => {
                            setInfoOpen(true);
                            setIonization(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].ionization_energies
                            );
                            setOxidation(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].oxidationStates
                            );
                            setAffinity(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].electron_affinity
                            );
                            setAppearance(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].appearance
                            );
                            setBoil(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].boil
                            );
                            setConfiguration(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].electron_configuration
                            );
                            setDense(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].density
                            );
                            setMelt(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].melt
                            );
                            setElectronegativity(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].en
                            );
                            setPhase(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].phase
                            );
                            setName(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].name
                            );
                            setSymbol(element.symbol);
                          }}
                          className={element.color}
                        >
                          {element.number}
                          <br></br>
                          {element.symbol}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      {row2.map((element, key) => (
                        <td
                          key={key}
                          onClick={() => {
                            setInfoOpen(true);
                            setOxidation(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].oxidationStates
                            );
                            setIonization(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].ionization_energies
                            );
                            setAffinity(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].electron_affinity
                            );
                            setAppearance(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].appearance
                            );
                            setBoil(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].boil
                            );
                            setConfiguration(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].electron_configuration
                            );
                            setDense(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].density
                            );
                            setMelt(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].melt
                            );
                            setElectronegativity(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].en
                            );
                            setPhase(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].phase
                            );
                            setName(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].name
                            );
                            setSymbol(element.symbol);
                          }}
                          className={element.color}
                        >
                          {element.number}
                          <br></br>
                          {element.symbol}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      {row3.map((element, key) => (
                        <td
                          key={key}
                          onClick={() => {
                            setInfoOpen(true);
                            setOxidation(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].oxidationStates
                            );
                            setIonization(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].ionization_energies
                            );
                            setAffinity(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].electron_affinity
                            );
                            setAppearance(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].appearance
                            );
                            setBoil(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].boil
                            );
                            setConfiguration(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].electron_configuration
                            );
                            setDense(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].density
                            );
                            setMelt(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].melt
                            );
                            setElectronegativity(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].en
                            );
                            setPhase(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].phase
                            );
                            setName(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].name
                            );
                            setSymbol(element.symbol);
                          }}
                          className={element.color}
                        >
                          {element.number}
                          <br></br>
                          {element.symbol}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      {eightyseven118.map((element, key) => (
                        <td
                          key={key}
                          onClick={() => {
                            setInfoOpen(true);
                            setOxidation(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].oxidationStates
                            );
                            setIonization(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].ionization_energies
                            );
                            setAffinity(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].electron_affinity
                            );
                            setAppearance(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].appearance
                            );
                            setBoil(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].boil
                            );
                            setConfiguration(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].electron_configuration
                            );
                            setDense(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].density
                            );
                            setMelt(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].melt
                            );
                            setElectronegativity(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].en
                            );
                            setPhase(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].phase
                            );
                            setName(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].name
                            );
                            setSymbol(element.symbol);
                          }}
                          className={element.color}
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
                      {fiftyseven71.map((element, key) => (
                        <td
                          onClick={() => {
                            setInfoOpen(true);
                            setOxidation(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].oxidationStates
                            );
                            setIonization(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].ionization_energies
                            );
                            setAffinity(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].electron_affinity
                            );
                            setAppearance(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].appearance
                            );
                            setBoil(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].boil
                            );
                            setConfiguration(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].electron_configuration
                            );
                            setDense(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].density
                            );
                            setMelt(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].melt
                            );
                            setElectronegativity(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].en
                            );
                            setPhase(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].phase
                            );
                            setName(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].name
                            );
                            setSymbol(element.symbol);
                          }}
                          key={key}
                          className={element.color}
                        >
                          {element.number}
                          <br></br>
                          {element.symbol}
                        </td>
                      ))}
                      <td
                        className="  cursor-default border-gray-800"
                        colSpan="1"
                        rowSpan="1"
                      ></td>
                    </tr>

                    <tr>
                      {eightynineonehundredand3.map((element, key) => (
                        <td
                          key={key}
                          onClick={() => {
                            setInfoOpen(true);
                            setIonization(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].ionization_energies
                            );
                            setOxidation(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].oxidationStates
                            );
                            setAffinity(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].electron_affinity
                            );
                            setAppearance(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].appearance
                            );
                            setBoil(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].boil
                            );
                            setConfiguration(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].electron_configuration
                            );
                            setDense(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].density
                            );
                            setMelt(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].melt
                            );
                            setElectronegativity(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].en
                            );
                            setPhase(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].phase
                            );
                            setName(
                              data.elements.filter(
                                (name) => name.symbol === element.symbol
                              )[0].name
                            );
                            setSymbol(element.symbol);
                          }}
                          className={element.color}
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

                <Info
                  open={info}
                  setOpen={setInfoOpen}
                  ionization={ionization}
                  electronegativity={electronegativity}
                  configuration={configuration}
                  boil={boil}
                  affinity={affinity}
                  melt={melt}
                  dense={dense}
                  phase={phase}
                  appearance={appearance}
                  name={name}
                  oxidation={oxidation}
                  symbol={symbol}
                />
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
