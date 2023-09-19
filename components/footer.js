const navigation = {
  main: [
    { name: "Home", href: "/" },
    {
      name: "Contact",
      href: "mailto:mishrarnav@gmail.com?subject=Chem Tools Support",
    },
    
    { name: "About", href: "/about" },
  ],
};
export default function Example() {
  return (
    <footer className="bg-none    md:ml-52 lg:ml-64 ">
      <hr className=" text-white md:mx-8 mx-8 mt-8 border-dotted "></hr>
      <div className="mx-auto  max-w-7xl overflow-hidden px-6 pb-16 lg:px-8">
        <nav
          className=" columns-2 flex justify-center space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="mt-8">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-200 hover:text-gray-400"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        <p className="mt-10 text-center text-xs leading-5 text-gray-300">
          &copy; 2023 ChemTools, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
