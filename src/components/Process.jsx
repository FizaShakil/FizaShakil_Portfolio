import Heading from './Reusable-Components/Heading';
import SectionCTA from './Reusable-Components/SectionCTA';
import processSteps from '../lists/processList';
import { useStaggeredReveal } from '../hooks/useScrollReveal';

const Process = () => {
  const [gridRef, gridVisible] = useStaggeredReveal(processSteps.length);

  return (
    <section className="section-padding bg-[#040a0e]" id="process" aria-labelledby="process-heading">
      <div className="section-container">
        <Heading
          heading="How We'll Work Together"
          subtitle="A clear, predictable process so you always know what happens next."
        />

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className={`card-base p-5 sm:p-6 hover:border-[#517E4F]/50 transition-colors duration-300 stagger-item stagger-delay-${Math.min(index + 1, 6)} ${gridVisible ? 'visible' : ''}`}
            >
              <span className="text-[#517E4F] font-mono text-caption font-bold">{step.step}</span>
              <h3 className="text-white font-semibold text-body mt-1.5 mb-1.5">{step.title}</h3>
              <p className="text-gray-400 text-caption sm:text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <SectionCTA text="Start With a Discovery Call" />
      </div>
    </section>
  );
};

export default Process;
