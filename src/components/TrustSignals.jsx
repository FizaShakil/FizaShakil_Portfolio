import SectionHeading from './Reusable-Components/SectionHeading';
import { ArrowRight } from './Reusable-Components/Arrow';
import { trustSignals, linkedInRecommendation } from '../lists/trustSignalsList';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TrustSignals = () => {
  const [ref, visible] = useScrollReveal();
  const five = trustSignals.length;

  return (
    <section className="section section-bg-b border-t border-line py-16 lg:py-20" id="trust">
      <div className="section-inner">
        <SectionHeading
          kicker="Credibility"
          heading={
            <>
              Trustworthy because it's{' '}
              <span className="serif-accent">verifiable</span>
            </>
          }
          intro="Not invented metrics or fake testimonials — real work, a real internship, and an open-source contribution, each linked for review."
        />

        <div ref={ref} className={`reveal-fade-up ${visible ? 'visible' : ''}`}>
          <div className="grid sm:grid-cols-2 border-t border-l border-line mt-10">
            {trustSignals.map((signal, i) => {
              const Icon = signal.icon;
              return (
                <div
                  key={signal.title}
                  className={`group border-b border-r border-line p-7 lg:p-9 transition-colors duration-300 ${
                    i === five - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <span className="flex items-center justify-center w-10 h-10 border border-accent text-accent-soft shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-body font-medium text-ink">{signal.title}</h3>
                      <p className="text-caption text-ink-muted leading-relaxed">{signal.description}</p>
                      <a
                        href={signal.link}
                        target={signal.link.startsWith('http') ? '_blank' : undefined}
                        rel={signal.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="arrow-link self-start text-caption text-accent-soft hover:text-white transition-colors mt-1"
                      >
                        {signal.linkLabel} <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Recommendation — editorial pull quote */}
          <figure className="max-w-3xl mx-auto mt-12 lg:mt-16">
            <div className="flex justify-center mb-8" aria-hidden="true">
              <span className="serif text-5xl text-accent leading-none">“</span>
            </div>
            <blockquote className="text-center">
              <p className="text-subheading font-normal text-ink leading-relaxed text-balance">
                {linkedInRecommendation.quote}
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center gap-4 mt-8">
              <span className="w-8 h-px bg-accent" aria-hidden="true" />
              <div className="text-center">
                <span className="block text-body font-medium text-ink">{linkedInRecommendation.author}</span>
                <span className="block text-caption text-ink-faint mt-0.5">{linkedInRecommendation.context}</span>
              </div>
              <span className="w-8 h-px bg-accent" aria-hidden="true" />
            </figcaption>
            <div className="text-center mt-6">
              <a
                href={linkedInRecommendation.link}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link text-caption text-accent-soft hover:text-white transition-colors"
              >
                View on LinkedIn <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;