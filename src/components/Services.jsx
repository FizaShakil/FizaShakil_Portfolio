import React from 'react';
import Heading from './Reusable-Components/Heading';
import servicesData from './servicesList';

const Services = () => {
  return (
    <div className="w-full px-4 md:px-20 pt-16 pb-16 text-center bg-[#040a0e] bg-opacity-[90%] text-white">
      <Heading heading={"Services"}/>

      {/* Top Row: 3 Cards */}
      <div className="flex flex-col items-center space-y-10 md:space-y-0 md:flex-row md:justify-center md:space-x-4 mb-12">
        {servicesData.slice(0, 3).map((service, index) => (
          <div
            key={index}
            className="w-full max-w-xs md:h-[40vh] text-left border-l-[6px] rounded-md border-[#517E4F] bg-[#191818] shadow-md px-4 py-3"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
            <p className="text-gray-400 text-sm lg:text-base">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Bottom Row: 2 Cards */}
      <div className="flex flex-col rounded-md items-center space-y-10 md:space-y-0 md:flex-row md:justify-center md:space-x-8">
        {servicesData.slice(3).map((service, index) => (
          <div
            key={index}
            className="w-full max-w-xs md:max-w-xl md:w-[475px] text-left border-l-[6px] rounded-md border-[#517E4F] bg-[#191818] shadow-md px-6 py-3"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm lg:text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
