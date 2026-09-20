import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from './SEO';
import { ArrowLeft, ArrowRight } from './Reusable-Components/Arrow';
import { useScrollReveal } from '../hooks/useScrollReveal';
import caseStudies from '../lists/casestudiesList';
import projects from '../lists/projectList';

const CaseStudySection = ({ number, title, eyebrow, children }) => {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={`reveal-fade-up scroll-mt-24 ${visible ? 'visible' : ''}`}>
      <div className="hairline-t pt-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-kicker text-accent">{number}</span>
          {eyebrow && <p className="text-kicker text-ink-faint">{eyebrow}</p>}
        </div>
        <h2 className="text-subheading md:text-heading font-medium text-ink text-balance mt-3">{title}</h2>
      </div>
      {children}
    </div>
  );
};

const BulletList = ({ items, accent = false }) => (
  <ul className="flex flex-col gap-3">
    {items?.map((item, index) => (
      <li key={index} className="flex items-start gap-4">
        <span className={`w-1.5 h-1.5 mt-[0.65em] shrink-0 ${accent ? 'bg-accent' : 'bg-ink-faint'}`} aria-hidden="true" />
        <p className="text-body text-ink-muted leading-relaxed">{item}</p>
      </li>
    ))}
  </ul>
);

const CaseStudy = () => {
  const { id } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const studyId = parseInt(id, 10);
    setCaseStudy(caseStudies.find((cs) => cs.id === studyId) || null);
    setProject(projects.find((p) => p.id === studyId) || null);
  }, [id]);

  if (!caseStudy) {
    return (
      <>
        <SEO
          title="Case Study Not Found | Fiza Shakil"
          description="The requested case study could not be found. Explore other projects in my portfolio."
          canonical="https://fiza-shakil.dev/projects"
        />
        <div className="min-h-screen-nav section section-bg-a flex flex-col items-center justify-center gap-6 text-center px-4">
          <h1 className="text-heading font-medium text-ink text-balance">Case study not found.</h1>
          <p className="text-body text-ink-muted max-w-prose">
            The page you're looking for doesn't exist. Explore the other projects instead.
          </p>
          <Link to="/projects" className="btn-secondary">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </>
    );
  }

  const hasDemo = caseStudy.demoLink && caseStudy.demoLink !== '#';
  const hasGithub = caseStudy.githubLink && caseStudy.githubLink !== '#';
  const projectImage = project?.localImage || project?.image;

  const sections = [
    { num: '01', eyebrow: 'Context', title: caseStudy.context ? 'The context' : null, body: caseStudy.context },
    { num: '02', eyebrow: 'Problem', title: caseStudy.problem ? 'The problem' : null, body: caseStudy.problem },
    { num: '03', eyebrow: 'Approach', title: caseStudy.approach ? 'My approach' : null, body: caseStudy.approach },
    {
      num: '04',
      eyebrow: 'Solution',
      title: caseStudy.solution ? 'The solution' : null,
      body: caseStudy.solution,
      list: caseStudy.keyFeatures?.length ? caseStudy.keyFeatures : null,
    },
    { num: '05', eyebrow: 'Challenge', title: caseStudy.hardPart ? 'The hard part' : null, body: caseStudy.hardPart },
    {
      num: '06',
      eyebrow: 'How I solved it',
      title: caseStudy.hardPartSolution ? 'How I solved it' : null,
      body: caseStudy.hardPartSolution,
    },
    {
      num: '07',
      eyebrow: 'Result',
      title: caseStudy.result ? 'The result' : null,
      body: caseStudy.result,
      outcomes: caseStudy.userOutcome?.length || caseStudy.businessValue?.length,
    },
  ].filter((s) => s.title);

  return (
    <>
      <SEO
        title={`${caseStudy.title} | Case Study — Fiza Shakil`}
        description={caseStudy.tagline}
        canonical={`https://fiza-shakil.dev/case-study/${caseStudy.id}`}
        keywords={`${caseStudy.title}, case study, full stack developer, product minded, ${caseStudy.techStack?.join(', ')}`}
        type="article"
      />
      <div className="section-bg-a">
        {/* Header */}
        <section className="border-b border-line">
          <div className="section-inner pt-10 pb-8 sm:pt-14 sm:pb-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-kicker text-ink-faint hover:text-ink transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-accent" />
              Back to Projects
            </Link>
          </div>
        </section>

        {/* Hero */}
        <section className="border-b border-line">
          <div className="section-inner py-12 lg:py-20">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
              <div className="lg:col-span-7 flex flex-col gap-6">
                {caseStudy.tag && <p className="kicker-rule">{caseStudy.tag}</p>}
                <h1 className="text-display font-medium tracking-tight text-balance">
                  {caseStudy.title}
                </h1>
                <p className="text-body text-ink-muted leading-relaxed max-w-prose">
                  {caseStudy.tagline}
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  {hasDemo && (
                    <a
                      href={caseStudy.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Live Demo <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                  {hasGithub && (
                    <a
                      href={caseStudy.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      View Repository <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              {projectImage && (
                <div className="lg:col-span-5">
                  <div className="img-zoom relative overflow-hidden border border-line aspect-[16/10]">
                    <img
                      src={projectImage}
                      alt={`${caseStudy.title} screenshot`}
                      className="w-full h-full object-cover"
                      loading="eager"
                      width={800}
                      height={500}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Body — sticky rail layout */}
        <div className="section-inner py-12 lg:py-20 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <aside className="hidden lg:block lg:col-span-3">
            <nav className="sticky top-24 flex flex-col gap-1" aria-label="Case study sections">
              {sections.map((section) => (
                <a
                  key={section.num}
                  href={`#cs-${section.num}`}
                  className="flex items-center gap-3 py-2 text-caption text-ink-faint hover:text-accent-soft transition-colors"
                >
                  <span className="font-mono">{section.num}</span>
                  <span>{section.title.replace(/^The /, '')}</span>
                </a>
              ))}
            </nav>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5 flex flex-col gap-14 lg:gap-20">
            {sections.map((section) => (
              <div key={section.num} id={`cs-${section.num}`}>
                <CaseStudySection number={section.num} eyebrow={section.eyebrow} title={section.title}>
                  {section.body && (
                    <p className="text-body text-ink-muted leading-relaxed max-w-prose">{section.body}</p>
                  )}
                  {section.body && section.list && (
                    <div className="mt-6">
                      <BulletList items={section.list} accent />
                    </div>
                  )}
                  {section.outcomes && (
                    <div className="mt-6 flex flex-col gap-6">
                      {caseStudy.userOutcome?.length && (
                        <div>
                          <p className="kicker text-accent mb-3">User outcome</p>
                          <BulletList items={caseStudy.userOutcome} accent />
                        </div>
                      )}
                      {caseStudy.businessValue?.length && (
                        <div>
                          <p className="kicker text-accent mb-3">Business value</p>
                          <BulletList items={caseStudy.businessValue} accent />
                        </div>
                      )}
                    </div>
                  )}
                </CaseStudySection>
              </div>
            ))}

            {/* How it works */}
            {caseStudy.howItWorks?.length > 0 && (
              <div id="cs-08">
                <CaseStudySection number="08" eyebrow="Workflow" title="How it works end to end">
                  <ol className="flex flex-col">
                    {caseStudy.howItWorks.map((step, index) => (
                      <li key={index} className="flex gap-5">
                        <div className="flex flex-col items-center">
                          <span className="flex items-center justify-center w-8 h-8 border border-accent bg-base text-accent font-mono text-[0.7rem] shrink-0">
                            {index + 1}
                          </span>
                          {index < caseStudy.howItWorks.length - 1 && (
                            <span className="w-px flex-1 bg-line-strong my-2" aria-hidden="true" />
                          )}
                        </div>
                        <p className="pb-8 text-body text-ink-muted leading-relaxed">{step}</p>
                      </li>
                    ))}
                  </ol>
                </CaseStudySection>
              </div>
            )}

            {/* Architecture */}
            {caseStudy.architecture?.length > 0 && (
              <div id="cs-09">
                <CaseStudySection number="09" eyebrow="Architecture" title="How the pieces connect">
                  <p className="text-caption text-ink-faint mb-6 -mt-2">
                    The relevant stack — supporting the product, not the headline.
                  </p>
                  <div className="flex flex-col gap-3">
                    {caseStudy.architecture.map((item, index) => (
                      <div key={index} className="border-l-2 border-accent bg-base-2 px-5 py-4">
                        <p className="text-body text-ink-muted leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </CaseStudySection>
              </div>
            )}

            {/* Tech stack */}
            {caseStudy.techStack?.length > 0 && (
              <div id="cs-10">
                <CaseStudySection number="10" eyebrow="Technology" title="Built with">
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 text-kicker text-ink-muted border border-line">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CaseStudySection>
              </div>
            )}
          </div>
        </div>

        {/* Closing CTA */}
        <section className="border-t border-line">
          <div className="section-inner py-16 lg:py-20">
            <div className="border border-line bg-base-2 p-8 lg:p-12 text-center flex flex-col items-center gap-5 max-w-3xl mx-auto">
              <h2 className="text-subheading md:text-heading font-medium text-ink text-balance max-w-xl">
                {hasGithub
                  ? "Explore the code, or bring me your problem."
                  : "Like what you see? Let's talk about your problem."}
              </h2>
              <p className="text-body text-ink-muted leading-relaxed max-w-prose">
                {hasGithub
                  ? 'View the repository for implementation details, or reach out if you need someone who builds solutions, not just code.'
                  : 'Looking for a developer who solves the problem behind the website? I respond within 24 hours.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                {hasGithub && (
                  <a href={caseStudy.githubLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    View Repository <ArrowRight className="w-4 h-4" />
                  </a>
                )}
                <a href="/#contact" className="btn-secondary">
                  Start a Project <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudy;