import React from "react";

const Hero = () => {
  return (
    <section className="pt-6 pb-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <div className="hidden fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
            <div className="fixed inset-0 bg-gray-800 opacity-80" />
            <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
              <div className="flex flex-wrap justify-between h-full">
                <div className="w-full">
                  <div className="flex items-center justify-between -m-2">
                    <div className="w-auto p-2">
                      <a className="inline-block" href="#">
                        <img src="assets/logos/zanrly-logo.svg" alt />
                      </a>
                    </div>
                    <div className="w-auto p-2">
                      <button className="inline-block">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 18L18 6M6 6L18 18"
                            stroke="#111827"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center py-8 w-full">
                  <ul>
                    <li className="mb-9">
                      <a
                        className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                        href="#"
                      >
                        Features
                      </a>
                    </li>
                    <li className="mb-9">
                      <a
                        className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                        href="#"
                      >
                        Solutions
                      </a>
                    </li>
                    <li className="mb-9">
                      <a
                        className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                        href="#"
                      >
                        Resources
                      </a>
                    </li>
                    <li>
                      <a
                        className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                        href="#"
                      >
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-end w-full pb-8">
                  <div className="flex flex-wrap -m-2">
                    <div className="w-full p-2">
                      <a
                        className="block w-full px-4 py-2.5 text-sm text-center text-gray-900 font-bold bg-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 border rounded-full"
                        href="#"
                      >
                        Log In
                      </a>
                    </div>
                    <div className="w-full p-2">
                      <a
                        className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                        href="#"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="mb-8 p-8 bg-white rounded-3xl">
          <div className="flex flex-wrap lg:items-center -m-8">
            <div className="w-full md:w-1/2 p-8">
              <div className="md:max-w-lg mx-auto">
                <span className="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">
                  Best caption here
                </span>
                <h1 className="font-heading mb-4 text-5xl text-gray-900 font-black tracking-tight">
                  <span>Build better products</span>
                  <span className="text-transparent bg-clip-text bg-gradient-orange">
                    faster
                  </span>
                  <span>than ever.</span>
                </h1>
                <p className="mb-6 text-xl font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  venenatis volutpat velit.
                </p>
                <div className="flex flex-wrap -m-2">
                  <div className="w-full md:w-auto p-2">
                    <a
                      className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                      href="#"
                    >
                      Get Started
                    </a>
                  </div>
                  <div className="w-full md:w-auto p-2">
                    <a
                      className="block w-full px-4 py-2.5 text-sm text-center text-gray-900 font-bold bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 rounded-full"
                      href="#"
                    >
                      Watch Video
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <div className="max-w-max mx-auto md:mr-0 bg-white overflow-hidden rounded-3xl">
                <img
                  className="mx-auto"
                  src="assets/images/headers/work.png"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
