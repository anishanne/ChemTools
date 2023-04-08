import { Fragment, useRef, Dispatch, SetStateAction, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";

export default function Classwork({
  open,
  setOpen,
  ionization,
  electronegativity,
  configuration,
  boil,
  melt,
  dense,
  affinity,
  phase,
  appearance,
  name,
  symbol,
}) {
  const cancelButtonRef = useRef(null);
  const ionizationString = ionization.toString();
  return (
    <Transition.Root show={open}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-70"
          leave="ease-in duration-200"
          leaveFrom="opacity-50"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600  bg-opacity-100 transition-opacity" />
        </Transition.Child>

        <div className=" fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-0 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative my-8 mx-8 w-full transform overflow-hidden  rounded-lg bg-gray-800 p-6 pt-5 pb-4 text-left shadow-xl transition-all dark:bg-slate-900 md:w-3/4">
                <div className="mt-6 ">
                  <div className="sm:block">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                      <div className="mt-2 flex flex-col ">
                        <div className="min-w-full overflow-hidden overflow-x-auto rounded-lg align-middle shadow">
                          <div className="overflow-hidden bg-gray-800 shadow sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6">
                              {" "}
                              <h3 className="text-lg font-bold text-center  leading-6 bg-inherit text-gray-100">
                                {name} ({symbol}) Stats
                              </h3>
                            </div>
                            <div className="bg-gray-900 border-t border-gray-900">
                              <dl>
                                <div className="bg-gray-700 rounded-t-md px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt className="text-sm bg-inherit font-medium text-gray-50">
                                    Ionization Energies{" "}
                                    <span className=" bg-gray-700 text-red-500">
                                      (kJ/mol)
                                    </span>
                                  </dt>
                                  <dd className="mt-1 bg-inherit text-sm text-gray-100 sm:col-span-2 sm:mt-0 whitespace-normal break-words">
                                    {ionizationString
                                      ? ionizationString
                                      : "Not Found"}
                                  </dd>
                                </div>
                                <div className="bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt className="text-sm bg-inherit font-medium text-gray-50">
                                    Electronegativity{" "}
                                    <span className=" bg-gray-800 text-red-500">
                                      (pauling)
                                    </span>
                                  </dt>
                                  <dd className="mt-1 bg-inherit text-sm text-gray-100 sm:col-span-2 sm:mt-0">
                                    {electronegativity
                                      ? electronegativity
                                      : "Not Found"}
                                  </dd>
                                </div>
                                <div className="bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt className="text-sm bg-inherit font-medium text-gray-50">
                                    Electron Configuration
                                  </dt>
                                  <dd className="mt-1 bg-inherit text-sm text-gray-100 sm:col-span-2 sm:mt-0">
                                    {configuration
                                      ? configuration
                                      : "Not Found"}
                                  </dd>
                                </div>
                                <div className="bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt className="text-sm bg-inherit font-medium text-gray-50">
                                    Boiling Point{" "}
                                    <span className=" bg-gray-800 text-red-500">
                                      (&deg;C)
                                    </span>
                                  </dt>
                                  <dd className="mt-1 bg-inherit text-sm text-gray-100 sm:col-span-2 sm:mt-0">
                                    {boil ? boil : "Not Found"}
                                  </dd>
                                </div>
                                <div className="bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt className="text-sm bg-inherit font-medium text-gray-50">
                                    Melting Point{" "}
                                    <span className=" bg-gray-700 text-red-500">
                                      (&deg;C)
                                    </span>
                                  </dt>
                                  <dd className="mt-1 bg-inherit text-sm text-gray-100 sm:col-span-2 sm:mt-0">
                                    {melt ? melt : "Not Found"}
                                  </dd>
                                </div>
                                <div className="bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt className="text-sm bg-inherit font-medium text-gray-50">
                                    Density{" "}
                                    <span className=" bg-gray-800 text-red-500">
                                      (g/cm<sup className="bg-gray-800">3</sup>)
                                    </span>
                                  </dt>
                                  <dd className="mt-1 bg-inherit text-sm text-gray-100 sm:col-span-2 sm:mt-0">
                                    {dense ? dense : "Not Found"}
                                  </dd>
                                </div>
                                <div className="bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt className="text-sm bg-inherit font-medium text-gray-50">
                                    Electron Affinity{" "}
                                    <span className=" bg-gray-700 text-red-500">
                                      (kJ/mol)
                                    </span>
                                  </dt>
                                  <dd className="mt-1 bg-inherit text-sm text-gray-100 sm:col-span-2 sm:mt-0">
                                    {affinity ? affinity : "Not Found"}
                                  </dd>
                                </div>
                                <div className="bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt className="text-sm bg-inherit font-medium text-gray-50">
                                    Phase
                                  </dt>
                                  <dd className="mt-1 bg-inherit text-sm text-gray-100 sm:col-span-2 sm:mt-0">
                                    {" "}
                                    {phase ? phase : "Not Found"}
                                  </dd>
                                </div>
                                <div className="bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt className="text-sm bg-inherit font-medium text-gray-50">
                                    Appearance
                                  </dt>
                                  <dd className="mt-1 bg-inherit text-sm text-gray-100 sm:col-span-2 sm:mt-0">
                                    {appearance ? appearance : "Not Found"}
                                  </dd>
                                </div>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="bg-gray-900 flex mt-6">
                  <button
                    type="button"
                    className=" mx-auto  lg:w-1/4 sm:w-1/2  justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
