import React from "react";

const Blog = () => {
  return (
    <section id="blog" className="py-10 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 bg-white rounded-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:max-w-4xl mx-auto text-center">
              <span className="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest">
                Blog
              </span>
              <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
                Resources and stories center
              </h2>
              <p className="md:max-w-md mx-auto text-gray-500 font-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada tellus vestibulum, commodo pulvinar.
              </p>
            </div>
            <div className="flex flex-wrap -m-4 mb-6">
              <div className="w-full md:w-1/3 p-4">
                <div className="h-full bg-gray-100 rounded-3xl">
                  <img
                    className="w-full"
                    src="assets/images/blog/blog.png"
                    alt
                  />
                  <div className="p-8">
                    <a className="group inline-block mb-4" href="#">
                      <h3 className="font-heading text-2xl text-gray-900 hover:text-gray-700 group-hover:underline font-black">
                        You will never believe these bizarre truth of travel.
                      </h3>
                    </a>
                    <p className="text-sm text-gray-500 font-bold">
                      Design process • 4 min read
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="h-full bg-gray-100 rounded-3xl">
                  <img
                    className="w-full"
                    src="assets/images/blog/blog2.png"
                    alt
                  />
                  <div className="p-8">
                    <a className="group inline-block mb-4" href="#">
                      <h3 className="font-heading text-2xl text-gray-900 hover:text-gray-700 group-hover:underline font-black">
                        Five web design blogs you should be reading
                      </h3>
                    </a>
                    <p className="text-sm text-gray-500 font-bold">
                      Technology • 4 min read
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="h-full bg-gray-100 rounded-3xl">
                  <img
                    className="w-full"
                    src="assets/images/blog/blog3.png"
                    alt
                  />
                  <div className="p-8">
                    <a className="group inline-block mb-4" href="#">
                      <h3 className="font-heading text-2xl text-gray-900 hover:text-gray-700 group-hover:underline font-black">
                        80 Best Virtual Reality Blogs and Websites
                      </h3>
                    </a>
                    <p className="text-sm text-gray-500 font-bold">
                      Inspiration • 4 min read
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden w-full md:w-1/3 p-4">
                <div className="h-full bg-gray-100 rounded-3xl">
                  <img
                    className="w-full"
                    src="assets/images/blog/blog.png"
                    alt
                  />
                  <div className="p-8">
                    <a className="group inline-block mb-4" href="#">
                      <h3 className="font-heading text-2xl text-gray-900 hover:text-gray-700 group-hover:underline font-black">
                        Unveiling the Bizarre Truths of Travel
                      </h3>
                    </a>
                    <p className="text-sm text-gray-500 font-bold">
                      Design process • 4 min read
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden w-full md:w-1/3 p-4">
                <div className="h-full bg-gray-100 rounded-3xl">
                  <img
                    className="w-full"
                    src="assets/images/blog/blog2.png"
                    alt
                  />
                  <div className="p-8">
                    <a className="group inline-block mb-4" href="#">
                      <h3 className="font-heading text-2xl text-gray-900 hover:text-gray-700 group-hover:underline font-black">
                        80 Must-Follow Virtual Reality Blogs and Websites
                      </h3>
                    </a>
                    <p className="text-sm text-gray-500 font-bold">
                      Technology • 4 min read
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden w-full md:w-1/3 p-4">
                <div className="h-full bg-gray-100 rounded-3xl">
                  <img
                    className="w-full"
                    src="assets/images/blog/blog3.png"
                    alt
                  />
                  <div className="p-8">
                    <a className="group inline-block mb-4" href="#">
                      <h3 className="font-heading text-2xl text-gray-900 hover:text-gray-700 group-hover:underline font-black">
                        Five Web Design Blogs You Can't Miss
                      </h3>
                    </a>
                    <p className="text-sm text-gray-500 font-bold">
                      Inspiration • 4 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap md:justify-center -m-2">
              <div className="w-full md:w-auto p-2">
                <a
                  className="block w-full px-12 py-3.5 text-lg text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 rounded-full"
                  href="#"
                >
                  Read more News
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
