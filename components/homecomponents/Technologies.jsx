import React from "react";
import {
  SiJavascript,
  SiReact,
  SiPhp,
  SiMoodle,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiNextdotjs,
  SiDjango,
  SiBootstrap,
} from "react-icons/si";

const Technologies = () => {
  const technologies = [
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
    { icon: SiReact, name: "React.js", color: "text-blue-400" },
    { icon: SiPhp, name: "PHP", color: "text-indigo-400" },
    { icon: SiMoodle, name: "Moodle", color: "text-orange-500" },
    { icon: SiHtml5, name: "HTML5", color: "text-red-500" },
    { icon: SiCss3, name: "CSS3", color: "text-blue-500" },
    { icon: SiMysql, name: "MySQL", color: "text-blue-600" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-teal-400" },
    { icon: SiGit, name: "Git", color: "text-orange-600" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-gray-900" },
    { icon: SiDjango, name: "Django", color: "text-green-600" },
    { icon: SiBootstrap, name: "Bootstrap", color: "text-purple-600" },
  ];

  return (
    <section id="technologies" className="py-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 bg-white rounded-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 md:max-w-2xl mx-auto text-center">
              <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
                Technologies
              </h2>
              <p className="text-gray-500 font-bold">
                Here are the technologies I work with
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-xl transition duration-200"
                >
                  <tech.icon
                    className={`${tech.color} w-16 h-16 mb-4 transition-transform hover:scale-110`}
                  />
                  <span className="text-gray-700 font-bold">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
