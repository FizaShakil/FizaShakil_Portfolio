import React from "react";
import Heading from "./Reusable-Components/Heading";

const skills = [
  { name: "HTML5", icon: "fa-html5" },
  { name: "CSS3", icon: "fa-css3-alt" },
  { name: "JavaScript", icon: "fa-js" },
  { name: "React.js", icon: "fa-react" },
  { name: "Tailwind CSS", icon: "fa-t" }, // Placeholder for Tailwind
  { name: "Node.js", icon: "fa-node-js" },
  { name: "Express JS", icon: "fa-solid fa-e" },
  { name: "MongoDB", icon: "fa-solid fa-database" },
  { name: "MySQL", icon: "fa-solid fa-database" }, // Same icon for MySQL
  { name: "Java", icon: "fa-java" },
];

const Skills = () => {
  return (
    <div className="text-white pt-6 pb-16 px-4 rounded-2xl shadow-lg max-w-7xl mx-auto mt-10" 
          id="skills">
      {/* Heading */}
      <Heading heading={"Skills"}/>
      <p className="text-center text-lg text-gray-300 mb-10">
        Leveraging a diverse tech stack to build modern, scalable, and responsive web applications.
      </p>

      {/* Desktop Timeline Layout */}
      <div className="hidden md:flex relative justify-between items-center px-4">
        {/* Horizontal line behind icons */}
        <div className="absolute top-1/2 left-0 w-[88%] h-0.5 bg-[#497c47] z-0 mx-20" />

        {skills.map((skill, index) => {
          const isOdd = index % 2 === 0;

          return (
            <div key={index} className="relative flex flex-col items-center z-10 w-[80%]">
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
              <div className="bg-[#497c47] text-white px-[10px] py-1 rounded-xl border-[0.1px] border-white text-xl shadow-md z-10">
                <i className={`fab ${skill.icon}`}></i>
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
          <div key={index} className="flex flex-col items-center">
            <div className="bg-[#497c47] text-white px-[10px] py-1 rounded-xl border-[0.1px] border-white text-xl shadow-md">
              <i className={`fab ${skill.icon}`}></i>
            </div>
            <span className="mt-2 text-sm font-semibold text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;