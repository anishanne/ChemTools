/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import data from "../data.json";

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
  " border-2 border-gray-200 dark:border-gray-800 pointer-cursor rounded-lg text-center font-bold align-middle w-12 hover:brightness-150 hover:text-black";

export default function Home() {
  return (
    <>
      <div className="m-8">
        <div className="flex flex-wrap -mx-2">
          {data.elements.map((element, index) => (
            <div key={index} className={colors[element.color] + style || ""}>
              {element.symbol}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
