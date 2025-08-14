import React from "react";
import Heading from "./Reusable-Components/Heading";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  // SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  // { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Express JS", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Java", icon: <FaJava /> },
];

const Skills = () => {
  return (
    <div
      className="text-white pt-24 pb-32 px-4 rounded-2xl shadow-lg max-w-7xl mx-auto mt-10"
      id="skills"
    >
      {/* Heading */}
      <div>
        <Heading heading={"Skills"} />
      </div>
      <p className="text-center text-sm lg:text-base text-gray-300 mb-10">
        Leveraging a diverse tech stack to build modern, scalable, and responsive web applications.
      </p>

      {/* Desktop Timeline Layout */}
      <div className="hidden md:flex relative justify-between items-center px-4">
        {/* Horizontal line behind icons */}
        <div className="absolute top-1/2 left-0 w-[88%] h-0.5 bg-[#497c47] z-0 mx-20" />

        {skills.map((skill, index) => {
          const isOdd = index % 2 === 0;

          return (
            <div
              key={index}
              className="relative flex flex-col items-center z-10 w-[80%] cursor-pointer"
            >
              {isOdd ? (
                <>
                  {/* Top label */}
                  <span className="mb-2 text-sm font-semibold text-center">{skill.name}</span>
                  {/* Top vertical line */}
                  <div className="w-0.5 h-7 bg-[#497c47]" />
                </>
              ) : (
                <div className="h-8" /> // Spacer for alignment
              )}

              {/* Icon box */}
              <div className="bg-[#497c47] text-white px-[10px] py-1 rounded-xl border-[0.1px] border-white text-xl shadow-md z-10 transform transition-all duration-300 hover:shadow-2xl hover:bg-[#5a8a58]">
                {skill.icon}
              </div>

              {!isOdd ? (
                <>
                  {/* Bottom vertical line */}
                  <div className="w-0.5 h-7 bg-[#497c47]" />
                  {/* Bottom label */}
                  <span className="mt-2 text-sm font-semibold text-center">{skill.name}</span>
                </>
              ) : (
                <div className="h-8" /> // Spacer for alignment
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile/Table View */}
      <div className="md:hidden grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center mt-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center cursor-pointer">
            <div className="bg-[#497c47] text-white px-[10px] py-1 rounded-xl border-[0.1px] border-white text-xl shadow-md transform transition-all duration-300 hover:shadow-2xl hover:bg-[#5a8a58]">
              {skill.icon}
            </div>
            <span className="mt-2 text-sm font-semibold text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
