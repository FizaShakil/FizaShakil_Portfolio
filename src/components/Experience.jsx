import SectionHeading from './Reusable-Components/SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';

const experience = [
  {
    company: '10Pearls',
    role: 'Full Stack Web Development Intern',
    period: 'Professional Internship',
    location: 'Production engineering team',
    summary:
      'A real, working development environment — not isolated assignments. I picked up tasks, shipped features across frontend and backend, submitted code for review, and iterated on feedback from senior developers.',
    highlights: [
      'Shipped production-level features across React frontend and Node.js/Express backend',
      'Database work with PostgreSQL and Prisma',
      'REST API development with authentication',
      'Git and GitHub workflows — branches, pull requests, code review',
      'Testing, CI/CD, and SonarCloud code-quality checks',
    ],
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'REST APIs', 'Git', 'CI/CD'],
  },
];

const Experience = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="section section-bg-a border-t border-line py-16 lg:py-20" id="experience">
      <div className="section-inner">
        <SectionHeading
          kicker="Experience"
          heading={
            <>
              Worked in a real development{' '}
              <span className="serif-accent">environment</span>
            </>
          }
          intro="Independent work is my craft — but it's grounded in shipping software inside a production team."
        />

        <div ref={ref} className={`reveal-fade-up mt-10 ${visible ? 'visible' : ''}`}>
          <ol className="border-t border-line">
            {experience.map((job) => (
              <li key={job.company} className="border-b border-line">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 py-8 lg:py-10">
                  {/* Company meta */}
                  <div className="lg:col-span-4">
                    <h3 className="text-subheading font-medium text-ink">{job.company}</h3>
                    <p className="text-body text-accent-soft mt-1">{job.role}</p>
                    <div className="mt-4 flex flex-col gap-1 text-caption text-ink-faint">
                      <span>{job.period}</span>
                      <span>{job.location}</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-5 flex flex-col gap-5">
                    <p className="text-body text-ink-muted leading-relaxed">{job.summary}</p>
                    <ul className="flex flex-col gap-2.5">
                      {job.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-caption text-ink-muted leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack */}
                  <div className="lg:col-span-3">
                    <p className="text-kicker text-ink-faint mb-3">Stack & practices</p>
                    <ul className="flex flex-wrap gap-2">
                      {job.stack.map((t) => (
                        <li
                          key={t}
                          className="px-3 py-1.5 text-kicker text-ink-muted border border-line"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;