import Link from "next/link";

export default function Example() {
  return (
    <>
      <div className="grid min-h-screen grid-cols-1 gap-y-4 lg:bg-none bg-gradient-to-t from-black via-20% via-[#120126] to-black lg:grid-cols-[max(50%,36rem),1fr]">
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

        <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
          <a href="#">
            <span className="sr-only">Your Company</span>
            <img className="h-20 w-auto sm:h-24" src="/chemlogo.png" alt="" />
          </a>
        </header>
        <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
          <div className="lg:mt-0 mt-80  max-w-lg">
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
        <div className="lg:hidden mx-auto max-w-7xl lg:col-span-2">
          <img
            src="/smurfcat.jpeg"
            alt=""
            className="absolute inset-0 h-4/6 w-full object-cover"
          />
        </div>

        <div className="hidden lg:block lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4">
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
