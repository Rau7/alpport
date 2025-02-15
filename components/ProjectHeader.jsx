"use client";

import React from "react";
import Link from "next/link";

const ProjectHeader = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Alp Toker
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/#about" className="text-gray-600 hover:text-gray-900">
              About Me
            </Link>
            <Link href="/#projects" className="text-gray-600 hover:text-gray-900">
              Projects
            </Link>
            <Link href="/#technologies" className="text-gray-600 hover:text-gray-900">
              Technologies
            </Link>
            <Link href="/#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ProjectHeader;
