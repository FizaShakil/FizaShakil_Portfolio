import SectionHeading from './Reusable-Components/SectionHeading';
import { ArrowRight } from './Reusable-Components/Arrow';
import servicesData from '../lists/servicesList';
import { useStaggeredReveal } from '../hooks/useScrollReveal';

const ServiceRow = ({ service, isLast, visible }) => (
  <li className={`${isLast ? '' : 'hairline-b'} stagger-item ${visible ? 'visible' : ''}`}>
    <div className="group grid md:grid-cols-12 gap-6 lg:gap-8 py-7 lg:py-9 transition-colors duration-300">
      {/* Index + group */}
      <div className="md:col-span-2 flex items-start gap-4">
        <span className="font-mono text-kicker text-accent">{service.no}</span>
        <span className="hidden md:block text-kicker text-ink-faint pt-px">{service.group}</span>
      </div>

      {/* Title + problem */}
      <div className="md:col-span-5">
        <h3 className="text-subheading font-medium text-ink text-balance">{service.title}</h3>
        <p className="text-caption text-ink-faint leading-relaxed mt-2 max-w-sm">
          {service.problem}
        </p>
      </div>

      {/* Description + example */}
      <div className="md:col-span-5 flex flex-col gap-4">
        <p className="text-body text-ink-muted leading-relaxed">{service.description}</p>
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {service.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-kicker text-ink-faint border border-line"
              >
                {t}
              </span>
            ))}
          </div>
          <span className="hidden lg:block text-accent">
            <ArrowRight className="w-5 h-5" />
          </span>
        </div>
        <p className="text-caption text-ink-muted">
          <span className="text-accent">Example — </span>
          {service.example}
        </p>
      </div>
    </div>
  </li>
);

const Services = () => {
  const [listRef, listVisible] = useStaggeredReveal(servicesData.length);

  return (
    <section className="section section-bg-b border-t border-line py-16 lg:py-20" id="services">
      <div className="section-inner">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              kicker="What I solve"
              heading={
                <>
                  I build the software{' '}
                  <span className="serif-accent">behind</span> the outcome
                </>
              }
              intro="Different businesses run on different problems. I've worked across all three — not by copying a template, but by rebuilding what the business actually needs."
            />
          </div>

          <div className="lg:col-span-7">
            <ol ref={listRef} className="border-t border-line">
              {servicesData.map((service, index) => (
                <ServiceRow
                  key={service.group}
                  service={service}
                  isLast={index === servicesData.length - 1}
                  visible={listVisible}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;