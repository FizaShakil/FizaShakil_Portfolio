import SectionHeading from './Reusable-Components/SectionHeading';
import processSteps from '../lists/processList';
import { useStaggeredReveal } from '../hooks/useScrollReveal';

const Process = () => {
  const [gridRef, gridVisible] = useStaggeredReveal(processSteps.length);

  return (
    <section className="section section-bg-a border-t border-line py-16 lg:py-20" id="process">
      <div className="section-inner">
        <SectionHeading
          kicker="How I work"
          heading={
            <>
              A clear path from problem to{' '}
              <span className="serif-accent">launch</span>
            </>
          }
          intro="You always know what's being built, why, and what comes next. No surprises, no black-box process."
          align="center"
        />

        <ol ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-5 mt-10 lg:mt-12 border-t border-line">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className={`relative group stagger-item stagger-delay-${Math.min(index + 1, 6)} ${gridVisible ? 'visible' : ''} border-b border-r border-line`}
            >
              <div className="flex flex-col gap-3 h-full p-6 lg:px-6 lg:py-8">
                <span className="font-mono text-kicker text-accent">{step.step}</span>
                <h3 className="text-body font-medium text-ink">{step.title}</h3>
                <p className="text-caption text-ink-faint leading-relaxed">{step.description}</p>
              </div>
              <span className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" aria-hidden="true" />
            </li>
          ))}
        </ol>

        <p className="text-center text-body text-ink-muted max-w-2xl mx-auto mt-10">
          I don't just receive requirements and code. I think through the solution
          with you — from the outcome backwards.
        </p>
      </div>
    </section>
  );
};

export default Process;