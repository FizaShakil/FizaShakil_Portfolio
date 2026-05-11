import React from 'react';
import SEO from './SEO';
import Heading from './Reusable-Components/Heading';
import servicesData from '../lists/servicesList';
import { useStaggeredReveal } from '../hooks/useScrollReveal';

const Services = ({ showSEO = true }) => {
  const [topRowRef, topRowVisible] = useStaggeredReveal(3);
  const [bottomRowRef, bottomRowVisible] = useStaggeredReveal(2);

  return (
    <>
      {showSEO && (
        <SEO 
          title="Services | Fiza Shakil - Full Stack Development Services"
          description="Professional full-stack development services including React.js applications, Node.js backends, database design, and SaaS solutions. Custom web development for businesses."
          canonical="https://fiza-shakil.dev/#services"
          keywords="full stack development services, React development, Node.js development, web application development, SaaS development, custom software development"
        />
      )}
      <div className="w-full px-4 md:px-20 pt-16 pb-16 text-center bg-[#040a0e] bg-opacity-[90%] text-white" id='services'>
      <div>
        <Heading heading={"Services"}/>
      </div>

      {/* Top Row: 3 Cards */}
      <div ref={topRowRef} className="flex flex-col items-center space-y-10 md:space-y-0 md:flex-row md:justify-center md:space-x-4 mb-12">
        {servicesData.slice(0, 3).map((service, index) => (
          <div
            key={index}
            className={`w-full max-w-xs md:h-[40vh] text-left border-l-[6px] rounded-md border-[#517E4F] bg-[#191818] hover:bg-[#0f0e0e] shadow-md px-4 py-3 cursor-pointer transform transition-all duration-500 hover:shadow-2xl hover:border-[#6a9a68] btn-premium stagger-item stagger-delay-${index + 1} ${topRowVisible ? 'visible' : ''}`}
          >
            <h1 className="text-xl font-semibold mb-2 text-white">{service.title}</h1>
            <p className="text-gray-400 text-sm lg:text-base">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Bottom Row: 2 Cards */}
      <div ref={bottomRowRef} className="flex flex-col rounded-md items-center space-y-10 md:space-y-0 md:flex-row md:justify-center md:space-x-8">
        {servicesData.slice(3).map((service, index) => (
          <div
            key={index}
            className={`w-full max-w-xs md:max-w-xl md:w-[475px] text-left border-l-[6px] rounded-md border-[#517E4F] bg-[#191818] hover:bg-[#0f0e0e] shadow-md px-6 py-3 cursor-pointer transform transition-all duration-500 hover:shadow-2xl hover:border-[#6a9a68] btn-premium stagger-item stagger-delay-${index + 1} ${bottomRowVisible ? 'visible' : ''}`}
          >
            <h1 className="text-xl font-semibold mb-2">{service.title}</h1>
            <p className="text-gray-400 text-sm lg:text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Services;
