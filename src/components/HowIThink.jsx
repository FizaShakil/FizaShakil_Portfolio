import SectionHeading from './Reusable-Components/SectionHeading';
import { useStaggeredReveal, useScrollReveal } from '../hooks/useScrollReveal';

const pipeline = [
  {
    no: '01',
    label: 'Business problem',
    text: 'What the business actually needs to change.',
  },
  {
    no: '02',
    label: 'User needs',
    text: 'Who is affected, and what they struggle with today.',
  },
  {
    no: '03',
    label: 'Workflow',
    text: 'How the work flows — and where it breaks.',
  },
  {
    no: '04',
    label: 'Product decisions',
    text: 'What to build, and what to deliberately not build.',
  },
  {
    no: '05',
    label: 'Technical build',
    text: 'Frontend, backend, and data that match those decisions.',
  },
  {
    no: '06',
    label: 'Working solution',
    text: 'Software people can actually use — end to end.',
  },
];

const ThinkingStep = ({ step, isLast, visible, delay }) => (
  <li className={`flex gap-5 ${isLast ? '' : 'pb-0'}`}>
    <div className="flex flex-col items-center">
      <span className="flex items-center justify-center w-9 h-9 border border-accent bg-base text-accent font-mono text-[0.7rem] shrink-0">
        {step.no}
      </span>
      {!isLast && <span className="w-px flex-1 bg-line-strong my-2" aria-hidden="true" />}
    </div>
    <div className={`pb-6 stagger-item ${delay} ${visible ? 'visible' : ''}`}>
      <h3 className="text-body font-medium text-ink">{step.label}</h3>
      <p className="text-caption text-ink-faint leading-relaxed mt-1">{step.text}</p>
    </div>
  </li>
);

const HowIThink = () => {
  const [sectionRef, sectionVisible] = useStaggeredReveal(pipeline.length);
  const [ruleRef, ruleVisible] = useScrollReveal();

  return (
    <section className="section section-bg-b py-16 lg:py-20 scroll-mt-nav" id="how-i-think">
      <div className="section-inner">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left — the statement */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 flex flex-col gap-8">
              <SectionHeading
                kicker="How I think"
                heading={
                  <>
                    I don't start with technology. I start with the{' '}
                    <span className="serif-accent">problem</span>.
                  </>
                }
                intro="Technology is the last decision, not the first. Before any code, I trace what the business is trying to achieve — and what stands in its way."
              />
              <div ref={ruleRef}>
                <div className={`reveal-rule h-px bg-accent w-full ${ruleVisible ? 'visible' : ''}`} aria-hidden="true" />
              </div>
              <p className="text-body text-ink-muted leading-relaxed max-w-prose">
                Most of the work isn't writing software. It's understanding the
                process well enough that the software becomes obvious. That's
                the part that determines whether a build actually gets used.
              </p>
            </div>
          </div>

          {/* Right — the pipeline */}
          <div className="lg:col-span-6 lg:col-start-7">
            <ol ref={sectionRef} className="flex flex-col">
              {pipeline.map((step, index) => (
                <ThinkingStep
                  key={step.no}
                  step={step}
                  isLast={index === pipeline.length - 1}
                  visible={sectionVisible}
                  delay={`stagger-delay-${Math.min(index + 1, 6)}`}
                />
              ))}
            </ol>
            <p className="text-caption text-ink-faint mt-2 max-w-prose">
              Problem in, working solution out. Each step is a decision — and
              your product is the sum of those decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIThink;