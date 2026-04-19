import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Heading = ({ heading }) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div ref={ref} className={`reveal-fade-up ${isVisible ? 'visible' : ''}`}>
      <h2 className='text-center text-gray-200 font-bold text-3xl mb-8 md:text-4xl'>
        {heading}
      </h2>
    </div>
  );
};

export default Heading;