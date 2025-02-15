"use client";

import React from "react";
import Image from "next/image";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 mb-8 bg-white rounded-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-between -m-4">
              <div className="w-auto p-4">
                <a className="inline-block" href="#">
                  <Image
                    src="/assets/logos/zanrly-logo.svg"
                    alt="Logo"
                    width={120}
                    height={40}
                  />
                </a>
              </div>
              <div className="w-auto p-4">
                <ul className="-m-6">
                  <li className="inline-flex p-6">
                    <button
                      onClick={() => scrollToSection("about")}
                      className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                    >
                      About Me
                    </button>
                  </li>
                  <li className="inline-flex p-6">
                    <button
                      onClick={() => scrollToSection("projects")}
                      className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                    >
                      Projects
                    </button>
                  </li>
                  <li className="inline-flex p-6">
                    <button
                      onClick={() => scrollToSection("technologies")}
                      className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                    >
                      Technologies
                    </button>
                  </li>
                  <li className="inline-flex p-6">
                    <button
                      onClick={() => scrollToSection("blog")}
                      className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                    >
                      Blog
                    </button>
                  </li>
                  <li className="inline-flex p-6">
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
              <div className="w-auto p-4">
                <div className="flex flex-wrap -m-4">
                  <div className="w-auto p-4">
                    <a className="block" href="#">
                      <Image
                        src="/assets/images/insta.svg"
                        alt="Instagram"
                        width={24}
                        height={24}
                      />
                    </a>
                  </div>
                  <div className="w-auto p-4">
                    <a className="block" href="#">
                      <Image
                        src="/assets/images/twitter.svg"
                        alt="Twitter"
                        width={24}
                        height={24}
                      />
                    </a>
                  </div>
                  <div className="w-auto p-4">
                    <a className="block" href="#">
                      <Image
                        src="/assets/images/fb.svg"
                        alt="Facebook"
                        width={24}
                        height={24}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center font-bold">
          <span>Ⓒ Copyright. All rights reserved by </span>
          <a className="text-blue-500 hover:text-blue-600" href="#">
            Alp Toker
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
