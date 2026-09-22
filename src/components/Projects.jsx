import { Link } from 'react-router-dom';
import SEO from './SEO';
import { ArrowRight } from './Reusable-Components/Arrow';
import projects from '../lists/projectList';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Projects = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const flagship = projects.filter((p) => p.featured);
  const supporting = projects.filter((p) => !p.featured);

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
          <div ref={headerRef} className={`reveal-fade-up flex flex-col gap-6 mb-10 lg:mb-14 ${headerVisible ? 'visible' : ''}`}>
            <p className="kicker-rule">Projects & case studies</p>
            <h1 className="text-display font-medium tracking-tight text-balance max-w-3xl">
              Each build started with a <span className="serif-accent">problem</span>
            </h1>
            <p className="text-body text-ink-muted leading-relaxed max-w-prose">
              These projects span commerce, operations, AI, and product frontends —
              but they all follow the same pattern: understand the problem, design
              the workflow, build the solution.
            </p>
          </div>

          <div className="flex flex-col gap-10 lg:gap-14 mb-14 sm:mb-20">
            {flagship.map((project, index) => (
              <ProjectCard key={project.id} project={project} no={String(index + 1).padStart(2, '0')} isReversed={index % 2 === 1} />
            ))}
          </div>

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
        </div>
      </section>
    </>
  );
};

const ProjectCard = ({ project, no, isReversed }) => {
  const [cardRef, cardVisible] = useScrollReveal();
  const hasDemo = project.demoLink && project.demoLink !== '#';
  const hasGithub = project.githubLink && project.githubLink !== '#';

  return (
    <article
      ref={cardRef}
      className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-start reveal-fade-up ${cardVisible ? 'visible' : ''}`}
    >
      <div className={`lg:col-span-7 ${isReversed ? 'lg:col-start-6 lg:col-span-7 lg:row-start-1' : ''}`}>
        <Link to={`/case-study/${project.id}`} className="group block" aria-label={`Explore case study: ${project.title}`}>
          <div className="img-zoom relative overflow-hidden border border-line bg-base-2 aspect-[3/2]">
            <img
              src={project.localImage || project.image}
              alt={`${project.title} — project screenshot`}
              className="w-full h-full object-cover"
              loading="lazy"
              width={900}
              height={600}
            />
          </div>
        </Link>
      </div>

      <div className={`flex flex-col gap-4 py-2 ${isReversed ? 'lg:col-span-5 lg:col-start-1 lg:row-start-1' : 'lg:col-span-5'}`}>
        <div className="flex items-center gap-4">
          <span className="font-mono text-kicker text-accent">{no}</span>
          <p className="text-kicker text-ink-faint">{project.tag || project.industry}</p>
        </div>

        <h2 className="text-subheading font-medium text-ink text-balance">
          <Link to={`/case-study/${project.id}`} className="hover:text-accent-soft transition-colors">
            {project.title}
          </Link>
        </h2>

        <dl className="hairline-t pt-4 flex flex-col gap-3">
          {project.problemShort && (
            <div>
              <dt className="kicker text-ink-faint mb-1">The problem</dt>
              <dd className="text-body text-ink-muted leading-relaxed">{project.problemShort}</dd>
            </div>
          )}
          {project.solutionShort && (
            <div>
              <dt className="kicker text-ink-faint mb-1">What I built</dt>
              <dd className="text-body text-ink-muted leading-relaxed">{project.solutionShort}</dd>
            </div>
          )}
          {project.valueShort && (
            <div>
              <dt className="kicker text-accent mb-1">Why it matters</dt>
              <dd className="text-body text-ink leading-relaxed">{project.valueShort}</dd>
            </div>
          )}
        </dl>

        {project.proofPoints && (
          <div className="flex flex-wrap gap-2">
            {project.proofPoints.map((point) => (
              <span key={point} className="px-3 py-1 text-kicker text-ink-muted border border-line">
                {point}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4 pt-1">
          <Link
            to={`/case-study/${project.id}`}
            className="btn-primary"
          >
            Explore Case Study <ArrowRight className="w-4 h-4" />
          </Link>

          {hasDemo && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Live Demo <ArrowRight className="w-4 h-4" />
            </a>
          )}

          {hasGithub && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-link text-body text-ink-muted hover:text-ink transition-colors"
            >
              View source <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const SupportingCard = ({ project }) => {
  const [ref, visible] = useScrollReveal();
  return (
    <article ref={ref} className={`reveal-fade-up border-b border-r border-line group ${visible ? 'visible' : ''}`}>
      <Link to={`/case-study/${project.id}`} className="block" aria-label={`Explore case study: ${project.title}`}>
        <div className="img-zoom relative overflow-hidden aspect-[16/10] border-b border-line">
          <img
            src={project.localImage || project.image}
            alt={`${project.title} — project screenshot`}
            className="w-full h-full object-cover"
            loading="lazy"
            width={800}
            height={500}
          />
        </div>
      </Link>
      <div className="p-6 lg:p-7 flex flex-col gap-3">
        <p className="text-kicker text-ink-faint">{project.tag || project.industry}</p>
        <Link to={`/case-study/${project.id}`}>
          <h3 className="text-body font-medium text-ink hover:text-accent-soft transition-colors">
            {project.title}
          </h3>
        </Link>
        <p className="text-caption text-ink-muted leading-relaxed">
          {project.valueShort || project.userOutcome}
        </p>
        <Link
          to={`/case-study/${project.id}`}
          className="arrow-link text-caption text-accent-soft hover:text-white transition-colors self-start mt-1"
        >
          Explore case study <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
};

export default Projects;