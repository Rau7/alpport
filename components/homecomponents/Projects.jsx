import React from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="py-10 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 bg-white rounded-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 md:max-w-2xl mx-auto text-center">
              <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
                Featured Projects
              </h2>
              <p className="text-gray-500 font-bold">
                Here are some of my notable projects that showcase my skills and
                expertise
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              {/* Project 1 */}
              <div className="w-full md:w-1/3 p-4">
                <div className="h-full p-8 text-center hover:bg-gray-50 rounded-3xl transition duration-200">
                  <div className="mb-6 relative h-52 w-full">
                    <div className="absolute top-0 left-0 w-full h-full rounded-3xl border border-gray-100 overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src="https://picsum.photos/800/600?random=1"
                        alt="Project 1"
                      />
                    </div>
                  </div>
                  <h3 className="font-heading mb-2 text-xl text-gray-900 font-black">
                    xSPECTAR Gallery Project
                  </h3>
                  <p className="mb-4 text-gray-500 font-bold">
                    React.js, SCSS, HTML - NFT Gallery Showcase
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Link
                      className="inline-block px-4 py-2 text-sm text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full"
                      href="/projects/xspectar-gallery"
                    >
                      View Details
                    </Link>
                    <a
                      className="inline-block px-4 py-2 text-sm text-gray-900 font-bold bg-gray-100 hover:bg-gray-200 rounded-full"
                      href="https://github.com/Rau7/xspectar-gallery"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
              {/* Project 2 */}
              <div className="w-full md:w-1/3 p-4">
                <div className="h-full p-8 text-center hover:bg-gray-50 rounded-3xl transition duration-200">
                  <div className="mb-6 relative h-52 w-full">
                    <div className="absolute top-0 left-0 w-full h-full rounded-3xl border border-gray-100 overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src="https://picsum.photos/800/600?random=2"
                        alt="Project 2"
                      />
                    </div>
                  </div>
                  <h3 className="font-heading mb-2 text-xl text-gray-900 font-black">
                    Wedding Website
                  </h3>
                  <p className="mb-4 text-gray-500 font-bold">
                    React.js, CSS, HTML - Elegant Wedding Website
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Link
                      className="inline-block px-4 py-2 text-sm text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full"
                      href="/projects/wedding-website"
                    >
                      View Details
                    </Link>
                    <a
                      className="inline-block px-4 py-2 text-sm text-gray-900 font-bold bg-gray-100 hover:bg-gray-200 rounded-full"
                      href="https://github.com/Rau7/wedding-website"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
              {/* Project 3 */}
              <div className="w-full md:w-1/3 p-4">
                <div className="h-full p-8 text-center hover:bg-gray-50 rounded-3xl transition duration-200">
                  <div className="mb-6 relative h-52 w-full">
                    <div className="absolute top-0 left-0 w-full h-full rounded-3xl border border-gray-100 overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src="https://picsum.photos/800/600?random=3"
                        alt="Project 3"
                      />
                    </div>
                  </div>
                  <h3 className="font-heading mb-2 text-xl text-gray-900 font-black">
                    The Batmobile Game
                  </h3>
                  <p className="mb-4 text-gray-500 font-bold">
                    C#, Windows Forms - Interactive Game Development
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Link
                      className="inline-block px-4 py-2 text-sm text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full"
                      href="/projects/batmobile-game"
                    >
                      View Details
                    </Link>
                    <a
                      className="inline-block px-4 py-2 text-sm text-gray-900 font-bold bg-gray-100 hover:bg-gray-200 rounded-full"
                      href="https://github.com/Rau7/TheBatmobileGame"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Link
                href="/projects"
                className="inline-block px-8 py-4 text-sm text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full transition duration-200"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
