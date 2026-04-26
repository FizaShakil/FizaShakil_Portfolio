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
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express JS", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "Java", icon: <FaJava /> },
];

// Split into two rows for desktop timeline
const row1 = skills.slice(0, 7);
const row2 = skills.slice(7);

const SkillNode = ({ skill, isOdd }) => (
  <div className="relative flex flex-col items-center z-10 flex-1 cursor-pointer min-w-0">
    {isOdd ? (
      <>
        <span className="mb-2 text-xs font-semibold text-center whitespace-nowrap">{skill.name}</span>
        <div className="w-0.5 h-6 bg-[#497c47]" />
      </>
    ) : (
      <div className="h-[52px]" />
    )}

    <div className="bg-[#497c47] text-white px-[10px] py-1 rounded-xl border-[0.1px] border-white text-xl shadow-md z-10 transform transition-all duration-300 hover:shadow-2xl hover:bg-[#5a8a58]">
      {skill.icon}
    </div>

    {!isOdd ? (
      <>
        <div className="w-0.5 h-6 bg-[#497c47]" />
        <span className="mt-2 text-xs font-semibold text-center whitespace-nowrap">{skill.name}</span>
      </>
    ) : (
      <div className="h-[52px]" />
    )}
  </div>
);

const Skills = () => {
  return (
    <div
      className="text-white pt-24 pb-32 px-4 rounded-2xl shadow-lg max-w-7xl mx-auto mt-10"
      id="skills"
    >
      <div>
        <Heading heading={"Skills"} />
      </div>
      <p className="text-center text-sm lg:text-base text-gray-300 mb-10">
        Leveraging a diverse tech stack to build modern, scalable, and responsive web applications.
      </p>

      {/* Desktop Timeline Layout - Two Rows */}
      <div className="hidden md:flex flex-col gap-6">
        {/* Row 1 */}
        <div className="relative flex justify-between items-center px-4">
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-[#497c47] z-0" />
          {row1.map((skill, index) => (
            <SkillNode key={index} skill={skill} isOdd={index % 2 === 0} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="relative flex justify-between items-center px-4">
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-[#497c47] z-0" />
          {row2.map((skill, index) => (
            <SkillNode key={index} skill={skill} isOdd={index % 2 === 0} />
          ))}
        </div>
      </div>

      {/* Mobile/Tablet View */}
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
