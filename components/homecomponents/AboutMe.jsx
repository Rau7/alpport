import React from "react";

const AboutMe = () => {
  return (
    <section className="py-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 bg-white rounded-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 md:max-w-2xl mx-auto text-center">
              <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
                About Me
              </h2>
            </div>
            <div className="flex flex-wrap -m-8">
              <div className="w-full md:w-1/2 p-8">
                <div className="md:max-w-md">
                  <p className="text-gray-900 font-bold mb-6">
                    As a Full-Stack Developer with over four years of
                    experience, I specialize in designing and developing
                    scalable, high-performance web applications. My expertise
                    spans from crafting dynamic user interfaces with React.js to
                    building efficient and secure backend systems using PHP and
                    SQL. I have a strong track record of optimizing database
                    queries, enhancing platform functionality, and developing
                    custom Moodle plugins to improve e-learning experiences.
                    Passionate about writing clean, maintainable code, I
                    continuously explore new technologies and best practices to
                    deliver seamless digital solutions.
                  </p>
                  <div className="mb-6">
                    <h3 className="font-heading mb-4 text-2xl text-gray-900 font-black">
                      Areas of Expertise
                    </h3>
                    <ul className="list-disc list-inside text-gray-500 font-bold">
                      <li>Dynamic UI Development with React.js</li>
                      <li>
                        Advanced Backend Solutions with PHP, SQL, and Moodle
                        Plugin Development
                      </li>
                      <li>Optimized Database Querying and Reporting</li>
                      <li>
                        Responsive Web Design and Mobile-First Implementation
                      </li>
                      <li>Data Analysis & Visualization</li>
                      <li>End-to-End Project Lifecycle Management</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-heading mb-4 text-2xl text-gray-900 font-black">
                      Education
                    </h3>
                    <p className="text-gray-500 font-bold">
                      Bachelor of Science in Computer Engineering
                      <br />
                      TOBB University of Economics and Technology, Ankara,
                      Turkey
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <div className="md:max-w-md">
                  <div className="mb-6">
                    <h3 className="font-heading mb-4 text-2xl text-gray-900 font-black">
                      Current Role
                    </h3>
                    <p className="text-gray-500 font-bold mb-4">
                      Currently working as a Freelance Full-Stack Developer,
                      collaborating with companies like REBLIKA and COBIDU on
                      various projects including:
                    </p>
                    <ul className="list-disc list-inside text-gray-500 font-bold">
                      <li>Frontend platform enhancements</li>
                      <li>Moodle plugin development</li>
                      <li>User engagement features</li>
                      <li>Performance optimization</li>
                      <li>SEO implementation</li>
                      <li>AI integration research</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-heading mb-4 text-2xl text-gray-900 font-black">
                      Connect With Me
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/Rau7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 text-sm text-white font-bold bg-gray-900 hover:bg-gray-700 rounded-full"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/alp-toker/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 text-sm text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-full"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
