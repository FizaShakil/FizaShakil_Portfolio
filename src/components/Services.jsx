import Heading from './Reusable-Components/Heading';
import servicesData from '../lists/servicesList';
import SectionCTA from './Reusable-Components/SectionCTA';
import { useStaggeredReveal } from '../hooks/useScrollReveal';

const Services = () => {
  const [gridRef, gridVisible] = useStaggeredReveal(servicesData.length);

  return (
    <section className="section-padding bg-[#040a0e]" id="services" aria-labelledby="services-heading">
      <div className="section-container">
        <Heading
          heading="Solutions for Real Business Problems"
          subtitle="Every service is designed around a specific challenge — and a measurable outcome."
        />

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {servicesData.map((service, index) => (
            <div
              key={service.title}
              className={`text-left border-l-4 border-[#517E4F] card-base hover:bg-[#0f0e0e] px-5 py-4 sm:px-6 sm:py-5 transition-colors duration-300 stagger-item stagger-delay-${Math.min(index + 1, 6)} ${gridVisible ? 'visible' : ''}`}
            >
              <h3 className="text-subheading text-white font-semibold mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-gray-400 text-caption sm:text-sm leading-relaxed mb-3 sm:mb-4">{service.description}</p>
              <div className="space-y-1.5 text-caption">
                <p className="break-words">
                  <span className="text-[#517E4F] font-medium">For: </span>
                  <span className="text-gray-500">{service.forWho}</span>
                </p>
                <p className="break-words">
                  <span className="text-[#517E4F] font-medium">Outcome: </span>
                  <span className="text-gray-400">{service.outcome}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <SectionCTA text="Get Started on Your Project" />
      </div>
    </section>
  );
};

export default Services;
