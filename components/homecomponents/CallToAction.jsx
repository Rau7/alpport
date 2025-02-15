import React from "react";

const CallToAction = () => {
  return (
    <section className="py-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 md:px-16 bg-gradient-red rounded-3xl">
          <div className="flex flex-wrap items-center -m-4">
            <div className="w-full md:w-1/2 p-4">
              <h2 className="font-heading text-4xl md:text-5xl text-white font-black tracking-tight">
                Ready to dive in? Let’s start together.
              </h2>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="flex flex-wrap md:justify-end -m-2">
                <div className="w-auto p-2">
                  <a
                    className="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 rounded-full"
                    href="#"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
