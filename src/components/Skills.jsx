import SectionHeading from './Reusable-Components/SectionHeading';
import { FaReact, FaNodeJs, FaNetworkWired, FaLock, FaCodeBranch } from 'react-icons/fa6';
import {
  SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiTypescript,
  SiPrisma, SiTailwindcss, SiMysql,
} from 'react-icons/si';
import { useScrollReveal } from '../hooks/useScrollReveal';

const skillGroups = [
  {
    no: '01',
    title: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    no: '02',
    title: 'Backend & APIs',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express', icon: SiExpress },
      { name: 'REST APIs', icon: FaNetworkWired },
      { name: 'JWT Auth', icon: FaLock },
    ],
  },
  {
    no: '03',
    title: 'Data & Tools',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'Git & CI/CD', icon: FaCodeBranch },
    ],
  },
];

const Skills = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="section section-bg-b border-t border-line py-16 lg:py-20" id="skills" aria-labelledby="skills-heading">
      <div className="section-inner">
        <SectionHeading
          kicker="Stack"
          heading={
            <>
              Tools chosen for the{' '}
              <span className="serif-accent">problem</span>, not for show
            </>
          }
          intro="A focused set of technologies. I'd rather do fewer things well than depend on a long list of things I barely use."
        />

        <div ref={ref} className={`reveal-fade-up mt-10 ${visible ? 'visible' : ''}`}>
          <div className="grid md:grid-cols-3 border-t border-l border-line">
            {skillGroups.map((group, gi) => (
              <div key={group.title} className={`border-b border-r border-line p-7 lg:p-9 ${gi === 0 ? 'md:col-span-3 lg:col-span-1' : ''}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-kicker text-accent">{group.no}</span>
                  <h3 className="text-body font-medium text-ink">{group.title}</h3>
                </div>
                <ul className="mt-4 flex flex-col">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <li
                        key={skill.name}
                        className="flex items-center gap-3 py-2 text-body text-ink-muted border-t border-line first:border-t-0"
                      >
                        <Icon className="w-3.5 h-3.5 text-accent-soft shrink-0" />
                        <span>{skill.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;