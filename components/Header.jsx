"use client";

import React from "react";
import logos from "@/public/assets/logos/alp-toker-logo.svg";
import Image from "next/image";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-6 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between px-6 py-3.5 rounded-full bg-white ">
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto">
                <a href="#">
                  <Image src={logos} alt="Zanrly Logo" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto hidden lg:block">
                <ul className="flex items-center justify-center">
                  <li className="mr-9">
                    <button
                      onClick={() => scrollToSection("about")}
                      className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                    >
                      About Me
                    </button>
                  </li>
                  <li className="mr-9">
                    <button
                      onClick={() => scrollToSection("projects")}
                      className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                    >
                      Projects
                    </button>
                  </li>
                  <li className="mr-9">
                    <button
                      onClick={() => scrollToSection("blog")}
                      className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                    >
                      Blog
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto hidden lg:block">
                <div className="flex flex-wrap -m-2">
                  <div className="w-full md:w-auto p-2">
                    <a
                      className="block w-full px-4 py-2.5 text-sm text-center text-gray-900 font-bold bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 rounded-full"
                      href="#"
                    >
                      ThemeChange
                    </a>
                  </div>
                  <div className="w-full md:w-auto p-2">
                    <a
                      className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                      href="#"
                    >
                      Language
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-auto lg:hidden">
                <button className="inline-block">
                  <svg
                    className="text-blue-500"
                    width={45}
                    height={45}
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={56} height={56} rx={28} fill="currentColor" />
                    <path
                      d="M37 32H19M37 24H19"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
          <div className="fixed inset-0 bg-gray-800 opacity-80" />
          <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
            <div className="flex flex-wrap justify-between h-full">
              <div className="w-full">
                <div className="flex items-center justify-between -m-2">
                  <div className="w-auto p-2">
                    <a className="inline-block" href="#">
                      <img src={logos} alt />
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
                    <button
                      onClick={() => scrollToSection("about")}
                      className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                    >
                      About Me
                    </button>
                  </li>
                  <li className="mb-9">
                    <button
                      onClick={() => scrollToSection("projects")}
                      className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                    >
                      Projects
                    </button>
                  </li>
                  <li className="mb-9">
                    <button
                      onClick={() => scrollToSection("blog")}
                      className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                    >
                      Blog
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                    >
                      Contact
                    </button>
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
                      ThemeChange
                    </a>
                  </div>
                  <div className="w-full p-2">
                    <a
                      className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                      href="#"
                    >
                      Language
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Header;
