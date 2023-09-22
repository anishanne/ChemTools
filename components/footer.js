const navigation = {
  main: [
    { name: "Home", href: "/" },
    {
      name: "Contact",
      href: "mailto:mishrarnav@gmail.com,joey.marra2007@gmail.com?subject=Chem Tools Support",
    },

    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
  ],
};
export default function Example() {
  return (
    <footer className=" md:ml-52 lg:ml-64 ">
      <hr className=" text-gray-800 bg-gray-900 dark:text-white md:mx-8 mx-8 mt-8 border-dotted "></hr>
      <div className="mx-auto  max-w-7xl overflow-hidden px-6 pb-16 lg:px-8">
        <nav
          className=" columns-2 flex justify-center space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="mt-8">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-700 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        <p className="mt-10 text-center text-xs leading-5 text-gray-700 dark:text-gray-300">
          &copy; 2023 ChemTools, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
