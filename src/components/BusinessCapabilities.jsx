import Heading from './Reusable-Components/Heading';
import capabilities from '../lists/capabilitiesList';
import { useStaggeredReveal } from '../hooks/useScrollReveal';

const BusinessCapabilities = () => {
  const [gridRef, gridVisible] = useStaggeredReveal(capabilities.length);

  return (
    <section className="section-padding bg-[#04090d]" id="capabilities" aria-labelledby="capabilities-heading">
      <div className="section-container">
        <Heading
          heading="What I Help You Achieve"
          subtitle="Business outcomes first — the technology is just how we get there."
        />

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className={`card-base p-5 sm:p-6 text-center hover:border-[#517E4F]/30 transition-colors duration-300 stagger-item stagger-delay-${Math.min(index + 1, 6)} ${gridVisible ? 'visible' : ''}`}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#517E4F]/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <i className={`${cap.icon} text-[#517E4F] text-base sm:text-lg`} aria-hidden="true"></i>
              </div>
              <h3 className="text-white font-semibold text-body mb-1.5">{cap.title}</h3>
              <p className="text-gray-400 text-caption sm:text-sm leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessCapabilities;
