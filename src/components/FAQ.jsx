import { useState } from 'react';
import Heading from './Reusable-Components/Heading';
import SectionCTA from './Reusable-Components/SectionCTA';
import faqData from '../lists/faqList';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [sectionRef, sectionVisible] = useScrollReveal();

  return (
    <section className="section-padding bg-[#04090d]" id="faq" aria-labelledby="faq-heading">
      <div ref={sectionRef} className={`section-container max-w-3xl reveal-fade-up ${sectionVisible ? 'visible' : ''}`}>
        <Heading
          heading="Common Questions"
          subtitle="Answers to what business owners ask before starting a project."
        />

        <div className="space-y-2 sm:space-y-3">
          {faqData.map((item, index) => (
            <div key={index} className="card-base">
              <button
                type="button"
                className="w-full text-left px-4 sm:px-6 py-4 flex items-start justify-between gap-3 text-white font-medium hover:bg-[#0f0e0e] transition-colors duration-200 min-h-touch"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-caption sm:text-sm leading-snug pr-2">{item.question}</span>
                <i
                  className={`fa-solid fa-chevron-down text-[#517E4F] shrink-0 mt-0.5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                ></i>
              </button>
              {openIndex === index && (
                <div id={`faq-answer-${index}`} className="px-4 sm:px-6 pb-4">
                  <p className="text-gray-400 text-caption sm:text-sm leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <SectionCTA text="Still Have Questions? Let's Talk" />
      </div>
    </section>
  );
};

export default FAQ;
