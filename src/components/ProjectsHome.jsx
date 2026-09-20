import { Link } from 'react-router-dom';
import SectionHeading from './Reusable-Components/SectionHeading';
import { ArrowRight } from './Reusable-Components/Arrow';
import projects from '../lists/projectList';
import { useStaggeredReveal } from '../hooks/useScrollReveal';

const WorkRow = ({ project, index, visible }) => {
  const caseStudyLink = `/case-study/${project.id}`;
  const hasImage = project.localImage || project.image;

  return (
    <li className={`group stagger-item stagger-delay-${Math.min(index + 1, 6)} ${visible ? 'visible' : ''} border-b border-line`}>
      <Link
        to={caseStudyLink}
        className="grid gap-4 md:grid-cols-12 md:gap-8 items-center py-6 lg:py-7"
        aria-label={`Read the ${project.title} case study`}
      >
        {/* Index */}
        <div className="md:col-span-1 font-mono text-kicker text-accent">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Image */}
        <div className="md:col-span-3">
          {hasImage ? (
            <div className="img-zoom relative overflow-hidden border border-line aspect-[16/10]">
              <img
                src={project.localImage || project.image}
                alt={`${project.title} — project screenshot`}
                className="w-full h-full object-cover"
                loading="lazy"
                width={560}
                height={350}
              />
            </div>
          ) : (
            <div className="aspect-[16/10] border border-line bg-base-2 flex items-center justify-center">
              <span className="text-kicker text-ink-faint">Case study</span>
            </div>
          )}
        </div>

        {/* Title + line */}
        <div className="md:col-span-5 flex flex-col gap-1.5">
          <p className="text-kicker text-ink-faint">{project.tag || project.industry}</p>
          <h3 className="text-subheading font-medium text-ink group-hover:text-accent-soft transition-colors duration-300 text-balance">
            {project.title}
          </h3>
          <p className="text-caption text-ink-muted leading-relaxed max-w-prose hidden sm:block">
            {project.valueShort}
          </p>
        </div>

        {/* Meta + arrow */}
        <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-4">
          <span className="text-caption text-ink-faint hidden lg:block max-w-[14rem] truncate">
            {project.techStack.slice(0, 3).join(' · ')}
          </span>
          <span className="inline-flex items-center gap-2 text-body text-accent-soft arrow-link shrink-0">
            Case study
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 translate-y-0" />
          </span>
        </div>
      </Link>
    </li>
  );
};

const ProjectsHome = () => {
  const flagship = projects.filter((p) => p.featured);
  const supporting = projects.find((p) => p.supporting);
  const rows = supporting ? [...flagship, supporting] : flagship;
  const [listRef, listVisible] = useStaggeredReveal(rows.length);

  if (!rows.length) return null;

  return (
    <section className="section section-bg-a border-t border-line py-16 lg:py-20 scroll-mt-nav" id="work">
      <div className="section-inner">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 lg:mb-12">
          <SectionHeading
            kicker="Selected work"
            heading={
              <>
                Each build started with a{' '}
                <span className="serif-accent">problem</span>
              </>
            }
            intro="Three flagship builds, presented as case studies — plus a polished product frontend."
          />
          <Link
            to="/projects"
            className="arrow-link text-body text-ink-muted hover:text-ink transition-colors shrink-0 mb-1"
          >
            All projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ul ref={listRef} className="border-t border-line">
          {rows.map((project, index) => (
            <WorkRow key={project.id} project={project} index={index} visible={listVisible} />
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-caption text-ink-faint">
          <p className="text-center sm:text-left">
            Product engineering, end to end — from the workflow to the code.
          </p>
          <Link to="/projects" className="arrow-link text-accent-soft hover:text-white transition-colors shrink-0">
            Browse all projects <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHome;