import Link from "next/link";

export default function Example() {
  return (
    <>
      <div className="grid min-h-screen grid-cols-1 gap-y-4 lg:bg-none bg-gradient-to-t from-black via-20% via-[#120126] to-black lg:grid-cols-[max(50%,36rem),1fr]">
        <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 md:col-span-2 md:col-start-1 md:row-start-1 md:px-8">
          <a href="#">
            <span className="sr-only">Your Company</span>
            <img className="h-20 w-auto sm:h-24" src="/chemlogo.png" alt="" />
          </a>
        </header>
        <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 md:col-span-2 md:col-start-1 md:row-start-2 md:px-8">
          <div className="md:hidden mx-auto max-w-7xl md:col-span-2">
            <img
              src="/smurfcat.jpeg"
              alt=""
              className="absolute bottom-0 inset-0 h-1/2 w-full object-cover"
            />
          </div>
          <div className="max-w-lg mt-64 md:mt-0">
            <p className="text-base font-semibold leading-8 text-indigo-600">
              404
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-base leading-7 text-white">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 text-indigo-600">
              <Link
                href="/"
                className="text-sm font-semibold leading-7 text-indigo-600"
              >
                &larr; Back to home
              </Link>{" "}
            </div>
          </div>
        </main>

        <footer className="self-end md:col-span-2 md:col-start-1 md:row-start-3">
          <div className="border-t border-gray-100 py-10">
            <nav className="mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm leading-7 text-white lg:px-8">
              <a href="#">Contact support</a>
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="h-0.5 w-0.5 fill-gray-300"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <a href="#">Status</a>
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="h-0.5 w-0.5 fill-gray-300"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <a href="#">Twitter</a>
            </nav>
          </div>
        </footer>
        <div className="hidden md:block md:relative md:col-start-2 md:row-start-1 md:row-end-4">
          <img
            src="/smurfcat.jpeg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
