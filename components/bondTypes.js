import { Fragment, useRef, Dispatch, SetStateAction, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";

export default function Classwork({ open, setOpen, bondType }) {
  const cancelButtonRef = useRef(null);
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
          <div className="fixed inset-0 bg-gray-100 dark:bg-gray-900  bg-opacity-100 transition-opacity" />
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
              <Dialog.Panel className="relative my-8 mx-8 w-full transform overflow-hidden  rounded-lg p-6 pt-5 pb-4 text-left shadow-xl transition-all bg-white dark:bg-gray-900 md:w-3/4">
                <div className="mt-6 ">
                  <div className="sm:block">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                      <div className="mt-2 flex flex-col ">
                        <div className="min-w-full overflow-hidden overflow-x-auto rounded-lg align-middle shadow">
                          <div className="overflow-hidden bg-gray-300 dark:bg-gray-800 p-8 shadow sm:rounded-lg">
                            {bondType === "Non-polar covalent" ? (
                              <p className="text-center text-2xl font-medium text-gray-700 dark:text-white">
                                Non-polar covalent diatomic compounds are
                                characterized by a balanced sharing of electrons
                                between the two atoms, typically with similar
                                electronegativity values. As a result, they
                                exhibit a symmetrical molecular structure, and
                                the electrons are evenly distributed around the
                                atoms. These compounds have no permanent dipole
                                moment, meaning there is no separation of
                                charges, and they do not possess any net
                                polarity. Non-polar covalent diatomic compounds
                                are relatively stable and have low melting and
                                boiling points due to weak intermolecular
                                forces.
                              </p>
                            ) : bondType === "Polar covalent" ? (
                              <p className="text-center text-2xl font-medium text-gray-700 dark:text-white">
                                Polar covalent diatomic compounds involve an
                                unequal sharing of electrons, resulting in a
                                partial positive charge on one atom and a
                                partial negative charge on the other. The
                                electronegativity difference between the bonded
                                atoms creates a dipole moment, leading to a
                                polar molecular structure. These compounds
                                exhibit stronger intermolecular forces compared
                                to non-polar covalent compounds, and as a
                                result, they have higher melting and boiling
                                points. Polar covalent diatomic compounds also
                                have unique properties such as dipole-dipole
                                interactions and hydrogen bonding, which
                                significantly influence their physical
                                properties and behavior.
                              </p>
                            ) : bondType === "Ionic" ? (
                              <p className="text-center text-2xl font-medium text-gray-700 dark:text-white">
                                Ionic diatomic compounds are compounds that
                                transfer of electrons from one atom to anotherwhich 
                                results in the formation of ions with opposite
                                charges. This creates an ionic bond, which is
                                has strong electrostatic
                                attractions between the cation and anion. Additionally, ionic diatomic
                                compounds tend to be more soluble in polar
                                solvents and have a crystalline structure in
                                their solid form.
                              </p>
                            ) : (
                              <p className="text-center text-2xl font-medium text-gray-700 dark:text-white">
                                This most likely means one or more of the
                                elements you selected doesnt have a defined
                                electronegativity, so the calculation cannot
                                occur.
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="dark:bg-gray-900 flex mt-6">
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
