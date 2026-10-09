import { useState } from 'react';
import SEO from './SEO';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';
import SupportingCard from './SupportingCard';
import projects from '../lists/projectList';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ALL_CATEGORY, matchesCategory } from '../utils/projectFilter';

const Projects = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);

  const visibleProjects = projects.filter((project) => matchesCategory(project, activeCategory));
  const flagship = visibleProjects.filter((project) => project.featured);
  const supporting = visibleProjects.filter((project) => !project.featured);
  const isEmpty = flagship.length === 0 && supporting.length === 0;

  const resetFilter = () => setActiveCategory(ALL_CATEGORY);

  return (
    <>
      <SEO
        title="Projects & Case Studies | Fiza Shakil — Product-Minded Full-Stack Developer"
        description="Case studies of e-commerce platforms, business operations systems, AI-powered products, and product frontends — each one starting with a business problem."
        canonical="https://fiza-shakil.dev/projects"
        keywords="product engineering case studies, e-commerce development, full-stack developer portfolio, restaurant management system, AI meeting assistant, product-minded developer"
      />
      <section className="section section-bg-a">
        <div className="section-inner pt-10 lg:pt-16 pb-16 lg:pb-20">
          <div ref={headerRef} className={`reveal-fade-up flex flex-col gap-6 mb-8 lg:mb-10 ${headerVisible ? 'visible' : ''}`}>
            <p className="kicker-rule">Projects & case studies</p>
            <h1 className="text-display font-medium tracking-tight text-balance max-w-3xl">
              Each build started with a <span className="serif-accent">problem</span>
            </h1>
            <p className="text-body text-ink-muted leading-relaxed max-w-prose">
              These projects span commerce, operations, AI, 3D experiences, and
              product frontends, but they all follow the same pattern: understand the
              problem, design the workflow, build the solution.
            </p>
          </div>

          <div className="mb-10 lg:mb-14">
            <ProjectFilter
              projects={projects}
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />
          </div>

          {isEmpty ? (
            <div className="border border-line p-8 sm:p-12 flex flex-col items-center gap-4 text-center">
              <p className="text-body text-ink-muted">No projects in this category yet.</p>
              <button type="button" className="btn-secondary" onClick={resetFilter}>
                Show all projects
              </button>
            </div>
          ) : (
            <>
              {flagship.length > 0 && (
                <div className="flex flex-col gap-10 lg:gap-14 mb-14 sm:mb-20">
                  {flagship.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      no={String(index + 1).padStart(2, '0')}
                      isReversed={index % 2 === 1}
                    />
                  ))}
                </div>
              )}

              {supporting.length > 0 && (
                <div>
                  <div className="hairline-t pt-8 mb-10">
                    <h2 className="text-subheading md:text-heading font-medium text-ink">Supporting projects</h2>
                    <p className="text-caption text-ink-faint mt-2 max-w-prose">
                      Additional work that shows the range — product frontends, search interfaces, and API design.
                    </p>
                  </div>
                  <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-line">
                    {supporting.map((project) => (
                      <SupportingCard key={project.id} project={project} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
