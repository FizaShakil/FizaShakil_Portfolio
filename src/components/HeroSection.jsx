import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from './Reusable-Components/Arrow';

const thinkingSteps = [
  {
    no: '01',
    label: 'The problem',
    text: 'Why it matters — the business issue the product exists to solve.',
  },
  {
    no: '02',
    label: 'The product',
    text: 'The workflow, rules, and decisions the software has to support.',
  },
  {
    no: '03',
    label: 'The software',
    text: 'Working code — frontend, backend, and data — built around both.',
  },
];

const HeroSection = () => {
  const [vizRef, vizVisible] = useScrollReveal();

  return (
    <section id="home" className="relative section-bg-a overflow-hidden" aria-label="Hero">
      {/* Fine vertical grid guides — editorial texture, not decoration */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: 'calc(100% / 6) 100%',
          maskImage: 'linear-gradient(to bottom, black, transparent 70%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative section-inner section grid lg:grid-cols-12 gap-12 lg:gap-8 min-h-screen-nav items-center py-12 lg:py-16">
        {/* Left — the statement */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <p className="kicker-rule">Product-Minded Full-Stack Developer</p>

          <h1 className="text-display font-medium tracking-tight text-balance">
            I turn business <span className="serif-accent">problems</span> into
            software that <span className="serif-accent">works</span>.
          </h1>

          <p className="text-body text-ink-muted max-w-prose leading-relaxed">
            I build web applications, e-commerce platforms, business systems, and
            AI-powered products — starting from what the business is trying to
            achieve, not from the technology. Full-stack, end to end.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch gap-3 pt-1">
            <a href="#work" className="btn-primary" aria-label="View my work and case studies">
              View My Work
              <ArrowRight />
            </a>
            <a href="#contact" className="btn-secondary" aria-label="Start a project">
              Start a Project
            </a>
          </div>

          <div className="hairline-t pt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-caption text-ink-faint">
            <span>Frontend · Backend · Database</span>
            <span className="hidden sm:inline text-accent">/</span>
            <span>Remote worldwide</span>
            <span className="hidden sm:inline text-accent">/</span>
            <span>React · Node.js · SQL</span>
          </div>
        </div>

        {/* Right — structured thinking visual */}
        <div className="lg:col-span-5">
          <div ref={vizRef} className={`reveal-left border border-line bg-base-2 p-8 lg:p-10 ${vizVisible ? 'visible' : ''}`}>
            <div className="flex items-center justify-between mb-8">
              <p className="kicker">How I approach a build</p>
              <span className="font-mono text-kicker text-ink-faint">Notes</span>
            </div>

            <ol className="relative">
              <div className="absolute left-[0.95rem] top-2 bottom-2 w-px bg-line-strong" aria-hidden="true" />
              {thinkingSteps.map((step) => (
                <li key={step.no} className="relative pl-14 mb-8 last:mb-0">
                  <span className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 border border-accent bg-base text-accent font-mono text-[0.7rem]">
                    {step.no}
                  </span>
                  <h2 className="text-subheading font-medium text-ink">{step.label}</h2>
                  <p className="text-caption text-ink-muted leading-relaxed mt-1 max-w-xs">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>

            <div className="hairline-t pt-5 mt-8 flex items-center justify-between text-caption">
              <span className="text-ink-faint">business → product → software</span>
              <span className="w-2 h-2 bg-accent" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;