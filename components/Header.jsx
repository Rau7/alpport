"use client";

import React, { useState } from "react";
import logos from "@/public/assets/logos/alp-toker-logo.svg";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <section className="py-6 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between px-6 py-3.5 rounded-full bg-white">
            <div className="w-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-auto">
                  <a href="#">
                    <Image src={logos} alt="Alp Toker Logo" />
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
                  <button onClick={toggleMobileMenu} className="inline-block">
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
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      >
        <div
          className={`fixed right-0 top-0 bottom-0 w-64 bg-white transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-end mb-8">
              <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-gray-900">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <nav className="space-y-6">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg"
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg"
              >
                Contact
              </button>
            </nav>
            <div className="mt-8 space-y-4">
              <a
                className="block w-full px-4 py-2.5 text-sm text-center text-gray-900 font-bold bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 rounded-full"
                href="#"
              >
                ThemeChange
              </a>
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
    </>
  );
};

export default Header;
