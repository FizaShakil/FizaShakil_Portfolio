import { Link } from 'react-router-dom';
import { ArrowRight } from './Reusable-Components/Arrow';
import { useScrollReveal } from '../hooks/useScrollReveal';

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

export default SupportingCard;
