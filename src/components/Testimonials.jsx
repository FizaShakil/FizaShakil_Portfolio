import React from 'react';
import Heading from './Reusable-Components/Heading';
import testimonialsData from '../lists/testimonialsList';
import { useStaggeredReveal } from '../hooks/useScrollReveal';

const Testimonials = () => {
  const [gridRef, gridVisible] = useStaggeredReveal(testimonialsData.length);

  // Function to render stars
  const renderStars = () => {
    return (
      <div className="flex mb-4">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="text-[#517E4F] text-xl">★</span>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full px-4 md:px-20 pt-16 pb-16 text-center bg-[#040a0e] bg-opacity-[90%] text-white" id='testimonials'>
      <div>
        <Heading heading={"Testimonials"}/>
      </div>

      {/* Testimonials Grid */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`text-left border-l-[6px] rounded-md border-[#517E4F] bg-[#191818] hover:bg-[#0f0e0e] shadow-md px-6 py-6 cursor-pointer transform transition-all duration-500 hover:shadow-2xl hover:border-[#6a9a68] flex flex-col btn-premium stagger-item stagger-delay-${Math.min(index + 1, 6)} ${gridVisible ? 'visible' : ''}`}
          >
            {/* Stars */}
            {renderStars()}
            
            {/* Testimonial Text */}
            <p className="text-gray-400 text-sm lg:text-base mb-6 italic leading-relaxed flex-grow">
              "{testimonial.feedback}"
            </p>
            
            {/* Client Info */}
            <div className="flex items-center mt-auto">
              <div className="w-10 h-10 bg-[#517E4F] rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-semibold text-sm">
                  {testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                </span>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                <p className="text-gray-400 text-xs">{testimonial.role}</p>
                {testimonial.project && (
                  <p className="text-[#517E4F] text-xs">{testimonial.project}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;