"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectFooter = () => {
  return (
    <section className="py-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 mb-8 bg-white rounded-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-between -m-4">
              <div className="w-auto p-4">
                <Link href="/" className="inline-block">
                  <Image src="/assets/logos/zanrly-logo.svg" alt="Logo" width={120} height={40} />
                </Link>
              </div>
              <div className="w-auto p-4">
                <ul className="-m-6">
                  <li className="inline-flex p-6">
                    <Link href="/#about" className="text-gray-500 hover:text-gray-600 font-bold">
                      About Me
                    </Link>
                  </li>
                  <li className="inline-flex p-6">
                    <Link href="/#projects" className="text-gray-500 hover:text-gray-600 font-bold">
                      Projects
                    </Link>
                  </li>
                  <li className="inline-flex p-6">
                    <Link href="/#technologies" className="text-gray-500 hover:text-gray-600 font-bold">
                      Technologies
                    </Link>
                  </li>
                  <li className="inline-flex p-6">
                    <Link href="/#contact" className="text-gray-500 hover:text-gray-600 font-bold">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-auto p-4">
                <div className="flex flex-wrap -m-4">
                  <div className="w-auto p-4">
                    <a className="block" href="#" target="_blank" rel="noopener noreferrer">
                      <Image src="/assets/images/insta.svg" alt="Instagram" width={24} height={24} />
                    </a>
                  </div>
                  <div className="w-auto p-4">
                    <a className="block" href="#" target="_blank" rel="noopener noreferrer">
                      <Image src="/assets/images/twitter.svg" alt="Twitter" width={24} height={24} />
                    </a>
                  </div>
                  <div className="w-auto p-4">
                    <a className="block" href="#" target="_blank" rel="noopener noreferrer">
                      <Image src="/assets/images/fb.svg" alt="Facebook" width={24} height={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center font-bold">
          <span>Ⓒ Copyright. All rights reserved by </span>
          <Link href="/" className="text-blue-500 hover:text-blue-600">
            Alp Toker
          </Link>
        </p>
      </div>
    </section>
  );
};

export default ProjectFooter;
