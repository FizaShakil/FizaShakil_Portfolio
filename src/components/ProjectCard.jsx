import { Link } from 'react-router-dom';
import { ArrowRight } from './Reusable-Components/Arrow';
import { useScrollReveal } from '../hooks/useScrollReveal';

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

export default ProjectCard;
