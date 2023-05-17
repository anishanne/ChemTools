import Head from "next/head";
import Image from "next/image";
import data from "../data.json";
import { useState } from "react";
import React from "react";

import Navbar from "../components/navbar";
const colors = {
  color1:
    "bg-red-600 hover:brightness-150 hover:text-black border-white border-2",
  color2: "bg-blue-700 hover:brightness-150 border-2 border-white",
  color3: "bg-blue-500 hover:brightness-150 border-2 border-white",
  color4:
    "bg-teal-600 hover:brightness-150 hover:text-black border-white border-2",
  color5: "bg-red-500 hover:brightness-150 border-2 border-white",
  color6:
    "bg-yellow-500 hover:brightness-150 border-2 border-white hover:text-black",
  color7: "bg-orange-500 hover:brightness-150 border-2 border-white",
  color8: "bg-green-400 border-2 border-white hover:brightness-150",
  color9: "bg-teal-700 hover:brightness-150 border-white border-2",
  color10: "bg-blue-800 hover:brightness-150 border-2 border-white",
  color11:
    "bg-gray-200 hover:brightness-150 hover:text-black borer-2 border-white",
  color12:
    "bg-gray-400 hover:brightness-150 hover:text-black border-2 border-white",
  reference: "bg-teal-600 hover:none border-2 border-white pointer-events-none",
  reference2:
    "bg-blue-800 hover:none border-2 border-white pointer-events-none",
  heading: "font-xl",
  none: "border-t border-slate-800 bg-slate-800 cursor-default",
};

const fiftyseven71 = [
  {
    number: 57,
    symbol: "La",
    name: "Lanthanum",
    color: colors.color4,
    en: 1.1,
  },
  { number: 58, symbol: "Ce", name: "Cerium", color: colors.color4, en: 1.12 },
  {
    number: 59,
    symbol: "Pr",
    name: "Praseodymium",
    color: colors.color4,
    en: 1.13,
  },
  {
    number: 60,
    symbol: "Nd",
    name: "Neodymium",
    color: colors.color4,
    en: 1.14,
  },
  {
    number: 61,
    symbol: "Pm",
    name: "Promethium",
    color: colors.color4,
    en: 1.13,
  },
  {
    number: 62,
    symbol: "Sm",
    name: "Samarium",
    color: colors.color4,
    en: 1.17,
  },
  { number: 63, symbol: "Eu", name: "Europium", color: colors.color4, en: 1.2 },
  {
    number: 64,
    symbol: "Gd",
    name: "Gadolinium",
    color: colors.color4,
    en: 1.2,
  },
  { number: 65, symbol: "Tb", name: "Terbium", color: colors.color4, en: 1.2 },
  {
    number: 66,
    symbol: "Dy",
    name: "Dysprosium",
    color: colors.color4,
    en: 1.22,
  },
  { number: 67, symbol: "Ho", name: "Holmium", color: colors.color4, en: 1.23 },
  { number: 68, symbol: "Er", name: "Erbium", color: colors.color4, en: 1.24 },
  { number: 69, symbol: "Tm", name: "Thulium", color: colors.color4, en: 1.25 },
  {
    number: 70,
    symbol: "Yb",
    name: "Ytterbium",
    color: colors.color4,
    en: 1.1,
  },
  {
    number: 71,
    symbol: "Lu",
    name: "Lutetium",
    color: colors.color4,
    en: 1.27,
  },
];

const eightynineonehundredand3 = [
  {
    number: 89,
    symbol: "Ac",
    name: "Actinium",
    color: colors.color10,
    en: 1.1,
  },
  { number: 90, symbol: "Th", name: "Thorium", color: colors.color10, en: 1.3 },
  {
    number: 91,
    symbol: "Pa",
    name: "Protactinium",
    color: colors.color10,
    en: 1.5,
  },
  { number: 92, symbol: "U", name: "Uranium", color: colors.color10, en: 1.38 },
  {
    number: 93,
    symbol: "Np",
    name: "Neptunium",
    color: colors.color10,
    en: 1.36,
  },
  {
    number: 94,
    symbol: "Pu",
    name: "Plutonium",
    color: colors.color10,
    en: 1.28,
  },
  {
    number: 95,
    symbol: "Am",
    name: "Americium",
    color: colors.color10,
    en: 1.13,
  },
  { number: 96, symbol: "Cm", name: "Curium", color: colors.color10, en: 1.28 },
  {
    number: 97,
    symbol: "Bk",
    name: "Berkelium",
    color: colors.color10,
    en: 1.3,
  },
  {
    number: 98,
    symbol: "Cf",
    name: "Californium",
    color: colors.color10,
    en: 1.3,
  },
  {
    number: 99,
    symbol: "Es",
    name: "Einsteinium",
    color: colors.color10,
    en: 1.3,
  },
  {
    number: 100,
    symbol: "Fm",
    name: "Fermium",
    color: colors.color10,
    en: 1.3,
  },
  {
    number: 101,
    symbol: "Md",
    name: "Mendelevium",
    color: colors.color10,
    en: 1.3,
  },
  {
    number: 102,
    symbol: "No",
    name: "Nobelium",
    color: colors.color10,
    en: 1.3,
  },
  {
    number: 103,
    symbol: "Lr",
    name: "Lawrencium",
    color: colors.color10,
    en: 1.3,
  },
];

const fiveTen = [
  { number: 5, symbol: "B", name: "Boron", color: colors.color6, en: 2.04 },
  { number: 6, symbol: "C", name: "Carbon", color: colors.color1, en: 2.55 },
  { number: 7, symbol: "N", name: "Nitrogen", color: colors.color1, en: 3.04 },
  { number: 8, symbol: "O", name: "Oxygen", color: colors.color1, en: 3.44 },
  { number: 9, symbol: "F", name: "Fluorine", color: colors.color8, en: 3.98 },
  { number: 10, symbol: "Ne", name: "Neon", color: colors.color9, en: null },
];
const eightyseven118 = [
  { number: 87, symbol: "Fr", name: "Francium", color: colors.color2, en: 0.7 },
  { number: 88, symbol: "Ra", name: "Radium", color: colors.color3, en: 0.9 },
  {
    number: "89-103",
    name: "",
    color: colors.reference2,
    en: 0.0,
  },
  {
    number: 104,
    symbol: "Rf",
    name: "Rutherfordium",
    color: colors.color5,
    en: 0.0,
  },
  { number: 105, symbol: "Db", name: "Dubnium", color: colors.color5, en: 0.0 },
  {
    number: 106,
    symbol: "Sg",
    name: "Seaborgium",
    color: colors.color5,
    en: 0.0,
  },
  { number: 107, symbol: "Bh", name: "Bohrium", color: colors.color5, en: 0.0 },
  { number: 108, symbol: "Hs", name: "Hassium", color: colors.color5, en: 0.0 },
  {
    number: 109,
    symbol: "Mt",
    name: "Meitnerium",
    color: colors.color5,
    en: 0.0,
  },
  {
    number: 110,
    symbol: "Ds",
    name: "Darmstadtium",
    color: colors.color5,
    en: 0.0,
  },
  {
    number: 111,
    symbol: "Rg",
    name: "Roentgenium",
    color: colors.color5,
    en: 0.0,
  },
  {
    number: 112,
    symbol: "Cn",
    name: "Copernicium",
    color: colors.color5,
    en: 0.0,
  },
  {
    number: 113,
    symbol: "Nh",
    name: "Nihonium",
    color: colors.color12,
    en: 1.1,
  },
  {
    number: 114,
    symbol: "Fl",
    name: "Flerovium",
    color: colors.color12,
    en: 1.3,
  },
  {
    number: 115,
    symbol: "Mc",
    name: "Moscovium",
    color: colors.color12,
    en: 1.5,
  },
  {
    number: 116,
    symbol: "Lv",
    name: "Livermorium",
    color: colors.color12,
    en: 1.8,
  },
  {
    number: 117,
    symbol: "Ts",
    name: "Tennessine",
    color: colors.color12,
    en: 2.0,
  },
  {
    number: 118,
    symbol: "Og",
    name: "Oganesson",
    color: colors.color12,
    en: 0.0,
  },
];
const thirteenEighteen = [
  {
    number: 13,
    symbol: "Al",
    name: "Aluminum",
    color: colors.color7,
    en: 1.61,
  },
  { number: 14, symbol: "Si", name: "Silicon", color: colors.color6, en: 1.9 },
  {
    number: 15,
    symbol: "P",
    name: "Phosphorus",
    color: colors.color1,
    en: 2.19,
  },
  { number: 16, symbol: "S", name: "Sulfur", color: colors.color1, en: 2.58 },
  {
    number: 17,
    symbol: "Cl",
    name: "Chlorine",
    color: colors.color8,
    en: 3.16,
  },
  { number: 18, symbol: "Ar", name: "Argon", color: colors.color9, en: null },
];

const row1 = [
  {
    number: 19,
    symbol: "K",
    name: "Potassium",
    color: colors.color2,
    en: 0.82,
  },
  { number: 20, symbol: "Ca", name: "Calcium", color: colors.color3, en: 1.0 },
  {
    number: 21,
    symbol: "Sc",
    name: "Scandium",
    color: colors.color5,
    en: 1.36,
  },
  {
    number: 22,
    symbol: "Ti",
    name: "Titanium",
    color: colors.color5,
    en: 1.54,
  },
  { number: 23, symbol: "V", name: "Vanadium", color: colors.color5, en: 1.63 },
  {
    number: 24,
    symbol: "Cr",
    name: "Chromium",
    color: colors.color5,
    en: 1.66,
  },
  {
    number: 25,
    symbol: "Mn",
    name: "Manganese",
    color: colors.color5,
    en: 1.55,
  },
  { number: 26, symbol: "Fe", name: "Iron", color: colors.color5, en: 1.83 },
  { number: 27, symbol: "Co", name: "Cobalt", color: colors.color5, en: 1.88 },
  { number: 28, symbol: "Ni", name: "Nickel", color: colors.color5, en: 1.91 },
  { number: 29, symbol: "Cu", name: "Copper", color: colors.color5, en: 1.9 },
  { number: 30, symbol: "Zn", name: "Zinc", color: colors.color5, en: 1.65 },
  { number: 31, symbol: "Ga", name: "Gallium", color: colors.color7, en: 1.81 },
  {
    number: 32,
    symbol: "Ge",
    name: "Germanium",
    color: colors.color6,
    en: 2.01,
  },
  { number: 33, symbol: "As", name: "Arsenic", color: colors.color1, en: 2.18 },
  {
    number: 34,
    symbol: "Se",
    name: "Selenium",
    color: colors.color1,
    en: 2.55,
  },
  { number: 35, symbol: "Br", name: "Bromine", color: colors.color8, en: 2.96 },
  { number: 36, symbol: "Kr", name: "Krypton", color: colors.color9, en: 3.0 },
];

const row2 = [
  {
    number: 37,
    symbol: "Rb",
    name: "Rubidium",
    color: colors.color2,
    en: 0.82,
  },
  {
    number: 38,
    symbol: "Sr",
    name: "Strontium",
    color: colors.color3,
    en: 0.95,
  },
  { number: 39, symbol: "Y", name: "Yttrium", color: colors.color5, en: 1.22 },
  {
    number: 40,
    symbol: "Zr",
    name: "Zirconium",
    color: colors.color5,
    en: 1.33,
  },
  { number: 41, symbol: "Nb", name: "Niobium", color: colors.color5, en: 1.6 },
  {
    number: 42,
    symbol: "Mo",
    name: "Molybdenum",
    color: colors.color5,
    en: 2.16,
  },
  {
    number: 43,
    symbol: "Tc",
    name: "Technetium",
    color: colors.color5,
    en: 1.9,
  },
  {
    number: 44,
    symbol: "Ru",
    name: "Ruthenium",
    color: colors.color5,
    en: 2.2,
  },
  { number: 45, symbol: "Rh", name: "Rhodium", color: colors.color5, en: 2.28 },
  {
    number: 46,
    symbol: "Pd",
    name: "Palladium",
    color: colors.color5,
    en: 2.2,
  },
  { number: 47, symbol: "Ag", name: "Silver", color: colors.color5, en: 1.93 },
  { number: 48, symbol: "Cd", name: "Cadmium", color: colors.color5, en: 1.69 },
  { number: 49, symbol: "In", name: "Indium", color: colors.color7, en: 1.78 },
  { number: 50, symbol: "Sn", name: "Tin", color: colors.color7, en: 1.96 },
  {
    number: 51,
    symbol: "Sb",
    name: "Antimony",
    color: colors.color6,
    en: 2.05,
  },
  {
    number: 52,
    symbol: "Te",
    name: "Tellurium",
    color: colors.color6,
    en: 2.1,
  },
  { number: 53, symbol: "I", name: "Iodine", color: colors.color8, en: 2.66 },
  { number: 54, symbol: "Xe", name: "Xenon", color: colors.color9, en: 2.6 },
];

const row3 = [
  { number: 55, symbol: "Cs", name: "Cesium", color: colors.color2, en: 0.79 },
  { number: 56, symbol: "Ba", name: "Barium", color: colors.color3, en: 0.89 },
  { number: "57 - 71", color: colors.reference, en: 0.0 },
  { number: 72, symbol: "Hf", name: "Hafnium", color: colors.color5, en: 1.3 },
  { number: 73, symbol: "Ta", name: "Tantalum", color: colors.color5, en: 1.5 },
  { number: 74, symbol: "W", name: "Tungsten", color: colors.color5, en: 2.36 },
  { number: 75, symbol: "Re", name: "Rhenium", color: colors.color5, en: 1.9 },
  { number: 76, symbol: "Os", name: "Osmium", color: colors.color5, en: 2.2 },
  { number: 77, symbol: "Ir", name: "Iridium", color: colors.color5, en: 2.2 },
  {
    number: 78,
    symbol: "Pt",
    name: "Platinum",
    color: colors.color5,
    en: 2.28,
  },
  { number: 79, symbol: "Au", name: "Gold", color: colors.color5, en: 2.54 },
  { number: 80, symbol: "Hg", name: "Mercury", color: colors.color5, en: 2.0 },
  {
    number: 81,
    symbol: "Tl",
    name: "Thallium",
    color: colors.color7,
    en: 1.62,
  },
  { number: 82, symbol: "Pb", name: "Lead", color: colors.color7, en: 2.33 },
  { number: 83, symbol: "Bi", name: "Bismuth", color: colors.color7, en: 2.02 },
  { number: 84, symbol: "Po", name: "Polonium", color: colors.color6, en: 2.0 },
  { number: 85, symbol: "At", name: "Astatine", color: colors.color8, en: 2.2 },
  { number: 86, symbol: "Rn", name: "Radon", color: colors.color9, en: 0.0 },
];

export default function Home() {
  const [gram, setMass] = useState(0);
  const [elementString, setElements] = useState([]);
  const [h2string, setH2] = useState("");
  const [info, setInfoOpen] = useState(false);
  const [ionization, setIonization] = useState([]);
  const [en, setElectronegativity] = useState("");
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
  const [element1, setElement1] = useState("");
  const [element2, setElement2] = useState("");
  const [difference, setDifference] = useState("");

  function calculateElectronegativityDifference(element1, element2) {
    const difference = Math.abs(element1 - element2);
    setDifference(difference.toFixed(2));
  }

  return (
    <>
      <div className= "h-screen bg-gray-200 dark:bg-gray-800">
        <Head>
          <title>ChemTools | Bond Type</title>
        </Head>{" "}
        <div className="z-0">
          {" "}
          <Navbar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            page="Bond Type"
          />
        </div>
        <main className="flex-1">
          <div className="h-full bg-gray-800 py-6 dark:bg-gray-800 text-wrap">
            <div className="bg-gray-800 h-full ml-8 md:ml-48 lg:ml-72 px-3 pb-3 sm:px-6 md:mx-auto md:px-8 text-wrap ">
              <table className="mt-96 bg-gray-800 cursor-pointer">
                {JSON.stringify(difference)}
                <tbody>
                  <tr>
                    <td className={`${colors.color1} text-xs sm:text-xl`}>
                      1<br></br>H
                    </td>
                    <td
                      className={`${colors.none} cursor-default text-xs sm:text-xl `}
                      colSpan="16"
                    ></td>
                    <td className={colors.color9}>
                      2<br></br>He
                    </td>
                  </tr>
                  <tr>
                    <td className={colors.color2}>
                      3<br></br>Li
                    </td>
                    <td className={colors.color3}>
                      4<br></br>Be
                    </td>
                    <td
                      className={`${colors.none} cursor-default `}
                      colSpan="10"
                    ></td>
                    {fiveTen.map((element, key) => (
                      <td
                        onClick={() =>
                          element1
                            ? calculateElectronegativityDifference(
                                element1,
                                element.en
                              )
                            : (setElement2(""), setElement1(element.en))
                        }
                        key={key}
                        className={element.color}
                      >
                        {element.number}
                        <br></br>
                        {element.symbol}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className={colors.color2}>
                      11<br></br>Na
                    </td>
                    <td className={colors.color3}>
                      12<br></br>Mg
                    </td>

                    <td
                      className={`${colors.none} cursor-default`}
                      colSpan="10"
                    ></td>
                    {thirteenEighteen.map((element, key) => (
                      <td
                        onClick={() =>
                          element1
                            ? calculateElectronegativityDifference(
                                element1,
                                element.en
                              )
                            : (setElement2(""), setElement1(element.en))
                        }
                        key={key}
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
                        onClick={() =>
                          element1
                            ? calculateElectronegativityDifference(
                                element1,
                                element.en
                              )
                            : (setElement2(""), setElement1(element.en))
                        }
                        key={key}
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
                        onClick={() =>
                          element1
                            ? calculateElectronegativityDifference(
                                element1,
                                element.en
                              )
                            : (setElement2(""), setElement1(element.en))
                        }
                        key={key}
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
                        onClick={() =>
                          element1
                            ? calculateElectronegativityDifference(
                                element1,
                                element.en
                              )
                            : (setElement2(""), setElement1(element.en))
                        }
                        key={key}
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
                        onClick={() =>
                          element1
                            ? calculateElectronegativityDifference(
                                element1,
                                element.en
                              )
                            : (setElement2(""), setElement1(element.en))
                        }
                        key={key}
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
                      className="cursor-default bg-gray-800 border-l border-b border-gray-800 "
                      colSpan="2"
                      rowSpan="2"
                    ></td>
                    {fiftyseven71.map((element, key) => (
                      <td
                        onClick={() =>
                          element1
                            ? calculateElectronegativityDifference(
                                element1,
                                element.en
                              )
                            : (setElement2(""), setElement1(element.en))
                        }
                        key={key}
                        className={element.color}
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
                    {eightynineonehundredand3.map((element, key) => (
                      <td
                        onClick={() =>
                          element1
                            ? calculateElectronegativityDifference(
                                element1,
                                element.en
                              )
                            : (setElement2(""), setElement1(element.en))
                        }
                        key={key}
                        className={element.color}
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
