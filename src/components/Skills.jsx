import Heading from './Reusable-Components/Heading';
import { FaHtml5, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb,
  SiMysql, SiSupabase, SiPostgresql, SiTypescript,
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'Supabase', icon: <SiSupabase /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'HTML/CSS', icon: <FaHtml5 /> },
];

const Skills = () => {
  return (
    <section className="section-padding bg-[#04090d] border-t border-gray-800/50 pb-24 md:pb-16" id="skills" aria-labelledby="skills-heading">
      <div className="section-container max-w-4xl text-center">
        <Heading
          heading="Technical Foundation"
          subtitle="Modern, proven tools power every project — kept here for technical reviewers."
        />

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 bg-[#191818] border border-gray-800 rounded-full px-3 sm:px-4 py-2 text-gray-400 text-caption sm:text-sm hover:border-[#517E4F]/30 transition-colors"
            >
              <span className="text-[#517E4F] text-sm sm:text-base shrink-0">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
