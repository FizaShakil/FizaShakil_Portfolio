import Heading from './Reusable-Components/Heading';
import SectionCTA from './Reusable-Components/SectionCTA';
import testimonialsData from '../lists/testimonialsList';
import { useStaggeredReveal } from '../hooks/useScrollReveal';

const Testimonials = () => {
  const [gridRef, gridVisible] = useStaggeredReveal(testimonialsData.length);

  return (
    <section className="section-padding bg-[#040a0e]" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="section-container">
        <Heading
          heading="What Clients Say"
          subtitle="Real feedback from business owners and founders I've worked with."
        />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonialsData.map((testimonial, index) => (
            <blockquote
              key={testimonial.name}
              className={`text-left border-l-4 border-[#517E4F] card-base px-5 py-5 sm:px-6 sm:py-6 flex flex-col h-full stagger-item stagger-delay-${Math.min(index + 1, 6)} ${gridVisible ? 'visible' : ''}`}
            >
              <div className="flex mb-2" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#517E4F] text-base sm:text-lg" aria-hidden="true">★</span>
                ))}
              </div>

              <p className="text-gray-300 text-caption sm:text-sm leading-relaxed mb-3 flex-grow italic">
                &ldquo;{testimonial.feedback}&rdquo;
              </p>

              {testimonial.outcome && (
                <p className="text-[#517E4F] text-caption font-medium mb-3 bg-[#517E4F]/10 rounded-lg px-3 py-2 leading-snug">
                  Outcome: {testimonial.outcome}
                </p>
              )}

              <footer className="flex items-center mt-auto gap-3">
                <div className="w-10 h-10 bg-[#517E4F] rounded-full flex items-center justify-center shrink-0" aria-hidden="true">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name.split(' ').map((n) => n[0]).join('').toUpperCase()}
                  </span>
                </div>
                <div className="min-w-0">
                  <cite className="text-white font-semibold text-caption sm:text-sm not-italic block truncate">
                    {testimonial.name}
                  </cite>
                  <p className="text-gray-500 text-caption truncate">{testimonial.role}</p>
                  {testimonial.company && (
                    <p className="text-gray-600 text-caption truncate">{testimonial.company}</p>
                  )}
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        <SectionCTA text="Join These Happy Clients" />
      </div>
    </section>
  );
};

export default Testimonials;
