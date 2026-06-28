import { Link } from 'react-router-dom';
import projects from '../lists/projectList';
import SectionCTA from './Reusable-Components/SectionCTA';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ProjectsHome = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="section-padding bg-[#040a0e]" id="case-studies" aria-labelledby="case-studies-heading">
      <div className="section-container">
        <div ref={headerRef} className={`mb-8 sm:mb-12 reveal-fade-up ${headerVisible ? 'visible' : ''}`}>
          <p className="text-[#517E4F] text-caption font-semibold uppercase tracking-widest mb-2">Featured Case Studies</p>
          <h2 id="case-studies-heading" className="text-heading text-white font-bold text-balance">
            Real Problems. Real Results.
          </h2>
          <p className="text-gray-400 text-body mt-3 max-w-prose">
            See how I helped businesses solve challenges and achieve measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="card-base hover:border-[#517E4F]/30 transition-colors duration-300 group flex flex-col h-full"
            >
              <Link
                to={`/case-study/${project.id}`}
                className="block relative aspect-[16/10] overflow-hidden"
                aria-label={`Read case study: ${project.title}`}
              >
                <img
                  src={project.localImage || project.image}
                  alt={`${project.title} — project screenshot`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                {project.industry && (
                  <span className="absolute top-3 left-3 bg-[#517E4F] text-white text-caption px-2.5 py-1 rounded-full">
                    {project.industry}
                  </span>
                )}
              </Link>

              <div className="p-4 sm:p-6 flex flex-col flex-1 gap-2">
                <Link to={`/case-study/${project.id}`}>
                  <h3 className="text-subheading text-white font-bold hover:text-[#517E4F] transition-colors text-balance">
                    {project.title}
                  </h3>
                </Link>

                {project.businessOutcome && (
                  <p className="text-[#517E4F] text-caption sm:text-sm font-medium leading-snug">
                    {project.businessOutcome.length > 90
                      ? `${project.businessOutcome.substring(0, 90)}...`
                      : project.businessOutcome}
                  </p>
                )}

                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 mt-auto pt-2">
                    {project.metrics.slice(0, 3).map((m) => (
                      <div key={m.label} className="text-center bg-[#0f0e0e] rounded-lg py-2 px-1 min-w-0">
                        <p className="text-white font-bold text-sm truncate">{m.value}</p>
                        <p className="text-gray-500 text-[9px] sm:text-[10px] uppercase leading-tight mt-0.5 line-clamp-2">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <Link
                  to={`/case-study/${project.id}`}
                  className="text-[#517E4F] text-caption sm:text-sm font-medium hover:text-white transition-colors inline-flex items-center gap-1 mt-2 touch-target justify-start w-fit -ml-1 px-1"
                >
                  Read Case Study <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            to="/projects"
            className="text-gray-400 hover:text-white transition-colors text-caption sm:text-sm flex items-center gap-2 touch-target px-2"
          >
            View All Case Studies
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <SectionCTA text="Let's Build Your Success Story" />
      </div>
    </section>
  );
};

export default ProjectsHome;
