import { useState } from 'react';
import SectionHeading from './Reusable-Components/SectionHeading';
import { ArrowDown } from './Reusable-Components/Arrow';
import faqData from '../lists/faqList';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [sectionRef, sectionVisible] = useScrollReveal();

  return (
    <section className="section section-bg-a border-t border-line py-16 lg:py-20" id="faq">
      <div className="section-inner">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <SectionHeading
                kicker="Questions"
                heading={
                  <>
                    Before you get in{' '}
                    <span className="serif-accent">touch</span>
                  </>
                }
                intro="Answers for founders, recruiters, and technical leads evaluating my work."
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div ref={sectionRef} className={`reveal-fade-up border-t border-line ${sectionVisible ? 'visible' : ''}`}>
              {faqData.map((item, index) => (
                <div key={index} className="border-b border-line">
                  <button
                    type="button"
                    className="group w-full text-left py-5 flex items-center justify-between gap-6 text-body font-medium text-ink transition-colors duration-200 min-h-touch"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="leading-snug">{item.question}</span>
                    <ArrowDown
                      className={`w-4 h-4 text-accent shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openIndex === index && (
                    <div id={`faq-answer-${index}`} className="pb-6 -mt-1">
                      <p className="text-caption text-ink-muted leading-relaxed max-w-2xl">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;