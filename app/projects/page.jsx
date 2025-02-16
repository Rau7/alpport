"use client";

import React from "react";
import Link from "next/link";

const AllProjects = () => {
  const projects = [
    {
      id: 1,
      title: "xSPECTAR Gallery Project",
      description: "React.js, SCSS, HTML - NFT Gallery Showcase",
      image: "https://picsum.photos/800/600?random=1",
      detailLink: "/projects/xspectar-gallery",
      sourceCode: "https://github.com/Rau7/xspectar-gallery"
    },
    {
      id: 2,
      title: "Wedding Website",
      description: "React.js, CSS, HTML - Elegant Wedding Website",
      image: "https://picsum.photos/800/600?random=2",
      detailLink: "/projects/wedding-website",
      sourceCode: "https://github.com/Rau7/wedding-website"
    },
    {
      id: 3,
      title: "The Batmobile Game",
      description: "C#, Windows Forms - Interactive Game Development",
      image: "https://picsum.photos/800/600?random=3",
      detailLink: "/projects/batmobile-game",
      sourceCode: "https://github.com/Rau7/TheBatmobileGame"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Next.js, Tailwind CSS - Personal Portfolio",
      image: "https://picsum.photos/800/600?random=4",
      detailLink: "/projects/portfolio",
      sourceCode: "https://github.com/Rau7/alpport"
    },
    {
      id: 5,
      title: "Task Management App",
      description: "React.js, Node.js, MongoDB - Full Stack Application",
      image: "https://picsum.photos/800/600?random=5",
      detailLink: "/projects/task-manager",
      sourceCode: "https://github.com/Rau7/task-manager"
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "JavaScript, OpenWeather API - Real-time Weather App",
      image: "https://picsum.photos/800/600?random=6",
      detailLink: "/projects/weather-dashboard",
      sourceCode: "https://github.com/Rau7/weather-dashboard"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="py-16 px-8 bg-white rounded-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:max-w-2xl mx-auto text-center">
            <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
              All Projects
            </h2>
            <p className="text-gray-500 font-bold">
              Explore all my projects and their details
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <div key={project.id} className="w-full md:w-1/3 p-4">
                <div className="h-full p-8 text-center hover:bg-gray-50 rounded-3xl transition duration-200">
                  <div className="mb-6 relative h-52 w-full">
                    <div className="absolute top-0 left-0 w-full h-full rounded-3xl border border-gray-100 overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={project.image}
                        alt={project.title}
                      />
                    </div>
                  </div>
                  <h3 className="font-heading mb-2 text-xl text-gray-900 font-black">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-500 font-bold">
                    {project.description}
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Link
                      className="inline-block px-4 py-2 text-sm text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full"
                      href={project.detailLink}
                    >
                      View Details
                    </Link>
                    <a
                      className="inline-block px-4 py-2 text-sm text-gray-900 font-bold bg-gray-100 hover:bg-gray-200 rounded-full"
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
