import Heading from './Reusable-Components/Heading';
import SectionCTA from './Reusable-Components/SectionCTA';
import industries from '../lists/industriesList';
import { useScrollReveal } from '../hooks/useScrollReveal';

const WhoIWorkWith = () => {
  const [sectionRef, sectionVisible] = useScrollReveal();

  return (
    <section className="section-padding bg-[#040a0e]" id="clients" aria-labelledby="clients-heading">
      <div ref={sectionRef} className={`section-container reveal-fade-up ${sectionVisible ? 'visible' : ''}`}>
        <Heading
          heading="Who I Work With"
          subtitle="I partner with founders, business owners, and teams who want measurable results — not just a website."
        />

        <p className="text-gray-300 text-body max-w-prose mx-auto text-center mb-8 sm:mb-10">
          Ideal clients are startups launching their first product, established businesses going digital,
          restaurants and local shops needing better systems, and agencies looking for a reliable development partner.
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto">
          {industries.map((industry) => (
            <span
              key={industry}
              className="px-3 sm:px-4 py-2 bg-[#191818] border border-gray-800 rounded-full text-gray-300 text-caption sm:text-sm hover:border-[#517E4F]/50 transition-colors duration-300"
            >
              {industry}
            </span>
          ))}
        </div>

        <SectionCTA text="Tell Me About Your Project" />
      </div>
    </section>
  );
};

export default WhoIWorkWith;
