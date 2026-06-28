import { Link } from 'react-router-dom';
import SEO from './SEO';
import projects from '../lists/projectList';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Projects = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  const getProjectCategory = (id) => {
    const categories = {
      1: 'E-COMMERCE',
      2: 'RESTAURANT',
      3: 'DOCUMENT MANAGEMENT',
      4: 'TRAVEL BOOKING',
      5: 'MARKETPLACE',
    };
    return categories[id] || 'FULL-STACK';
  };

  const showcaseProjects = projects.map((project) => ({
    ...project,
    category: project.industry || getProjectCategory(project.id),
    metrics: project.metrics || [],
  }));

  return (
    <>
      <SEO
        title="Case Studies | Fiza Shakil — Business Results Through Custom Web Solutions"
        description="Real case studies showing how I helped businesses increase sales, automate operations, and improve customer experience through custom web development."
        canonical="https://fiza-shakil.dev/projects"
        keywords="web development case studies, business automation, e-commerce development, SaaS case studies, restaurant management system, landing page results"
      />
      <section className="section-padding bg-black text-white pb-28 md:pb-20">
        <div className="section-container">
          <div ref={headerRef} className={`text-center mb-10 sm:mb-16 reveal-fade-up ${headerVisible ? 'visible' : ''}`}>
            <p className="text-[#507e4f] text-caption font-medium tracking-wider uppercase mb-3">
              CASE STUDIES
            </p>
            <h1 className="text-display text-white font-bold mb-4 text-balance px-2">
              Real Problems. Measurable Results.
            </h1>
            <p className="text-gray-400 text-body max-w-prose mx-auto">
              Each project built to solve a real business challenge — increasing sales, reducing costs,
              improving efficiency, or enhancing customer experience.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
            {showcaseProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} isReversed={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const ProjectCard = ({ project, isReversed }) => {
  const [cardRef, cardVisible] = useScrollReveal();
  const hasDemo = project.demoLink && project.demoLink !== '#';
  const hasGithub = project.githubLink && project.githubLink !== '#';

  return (
    <article
      ref={cardRef}
      className={`flex flex-col ${isReversed ? 'xl:flex-row-reverse' : 'xl:flex-row'} items-stretch gap-6 sm:gap-8 xl:gap-12 reveal-fade-up ${cardVisible ? 'visible' : ''}`}
    >
      <div className="w-full xl:flex-1">
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 p-3 sm:p-5 lg:p-6">
          <img
            src={project.localImage || project.image}
            alt={`${project.title} — project screenshot`}
            className="w-full aspect-[16/10] sm:aspect-[4/3] xl:aspect-[16/10] object-cover rounded-xl"
            loading="lazy"
          />
        </div>
      </div>

      <div className="w-full xl:flex-1 flex flex-col gap-4 text-left">
        <span className="text-[#507e4f] text-caption font-semibold tracking-wider uppercase">
          {project.category}
        </span>

        <h2 className="text-heading text-white font-bold text-balance">{project.title}</h2>

        {project.businessChallenge && (
          <p className="text-gray-500 text-caption sm:text-sm">
            <span className="text-gray-400 font-medium">Challenge: </span>
            {project.businessChallenge}
          </p>
        )}
        {project.solution && (
          <p className="text-gray-400 text-caption sm:text-sm leading-relaxed">
            <span className="text-gray-300 font-medium">Solution: </span>
            {project.solution}
          </p>
        )}
        {project.businessOutcome && (
          <p className="text-[#507e4f] text-caption sm:text-sm font-medium leading-snug">
            <span className="font-semibold">Result: </span>
            {project.businessOutcome}
          </p>
        )}

        {project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-sm xl:max-w-none">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="text-center bg-[#191818] rounded-lg py-2.5 px-1 min-w-0">
                <p className="text-white text-sm sm:text-base font-bold truncate">{metric.value}</p>
                <p className="text-[#507e4f] text-[9px] sm:text-xs font-medium uppercase leading-tight mt-0.5 line-clamp-2">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
          <Link
            to={`/case-study/${project.id}`}
            className="btn-primary btn-premium inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            View Case Study
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {hasDemo && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-premium inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Live Demo
            </a>
          )}

          {hasGithub && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target border border-gray-600 text-gray-400 rounded-lg hover:border-gray-400 hover:text-white transition-colors self-center sm:self-auto"
              aria-label="View source code on GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default Projects;
