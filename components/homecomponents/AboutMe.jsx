import React from "react";

const AboutMe = () => {
  return (
    <section className="py-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 bg-white border border-gray-100 rounded-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap lg:items-center -m-8">
              <div className="w-full md:w-1/2 p-8">
                <img
                  className="mx-auto md:ml-0 rounded-3xl"
                  src="assets/images/testimonials/woman.png"
                  alt
                />
              </div>
              <div className="w-full md:w-1/2 p-8">
                <p className="mb-10 text-2xl font-bold">
                  "Had some issues where my site crashed and broke, reached out
                  to Shuffle Editor to see if they could help me fix it. Even
                  though we are 12 hours apart in time, they were quick to reply
                  and helpful/willing to do what is needed to fix the issue."
                </p>
                <h3 className="font-heading text-2xl text-gray-900 font-black">
                  Monica
                </h3>
                <p className="text-sm text-gray-500 font-bold">
                  @monicajohnson
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
