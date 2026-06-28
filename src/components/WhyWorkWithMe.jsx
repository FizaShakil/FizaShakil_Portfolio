import Heading from './Reusable-Components/Heading';
import SectionCTA from './Reusable-Components/SectionCTA';
import whyWorkWithMe from '../lists/whyWorkWithMeList';
import { useStaggeredReveal } from '../hooks/useScrollReveal';

const WhyWorkWithMe = () => {
  const [gridRef, gridVisible] = useStaggeredReveal(whyWorkWithMe.length);

  return (
    <section className="section-padding bg-[#04090d]" id="why-me" aria-labelledby="why-me-heading">
      <div className="section-container">
        <Heading
          heading="Why Work With Me"
          subtitle="You're not hiring a coder — you're gaining a partner who cares about your business results."
        />

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {whyWorkWithMe.map((item, index) => (
            <div
              key={item.title}
              className={`card-base border-l-4 border-l-[#517E4F] p-5 sm:p-6 hover:bg-[#0f0e0e] transition-colors duration-300 stagger-item stagger-delay-${Math.min(index + 1, 6)} ${gridVisible ? 'visible' : ''}`}
            >
              <i className={`${item.icon} text-[#517E4F] text-lg sm:text-xl mb-3`} aria-hidden="true"></i>
              <h3 className="text-white font-semibold text-body mb-1.5">{item.title}</h3>
              <p className="text-gray-400 text-caption sm:text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <SectionCTA text="Let's Discuss Your Idea" />
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
