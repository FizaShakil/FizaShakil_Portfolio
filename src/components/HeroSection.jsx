import React, { useEffect, useState } from 'react';
import backGroundImage from '../assets/background_image_heroSection.jpg';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="relative overflow-hidden">
        {/* Background Image with Scale Animation */}
        <div className="relative">
          <img 
            src={backGroundImage} 
            alt="heroSection_Image" 
            className={`w-full h-[500px] object-cover transition-all duration-1000 ease-out ${
              isLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
            }`}
          />
          <div className='absolute top-0 left-0 w-full h-[573px] bg-black opacity-80'></div>
        </div>

        {/* Hero Content with Staggered Animations */}
        <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
          {/* Main Heading with Fade Up Animation */}
          <h1 className={`text-white mx-4 text-2xl md:text-4xl font-bold text-center transition-all duration-800 ease-out ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Fiza Shakil:
            <span className='text-gray-300'> Full Stack Developer for SaaS MVPs</span>
          </h1>

          {/* Subtitle with Delayed Fade Up */}
          <h2 className={`text-white mx-4 mt-6 italic text-center transition-all duration-800 ease-out delay-200 ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Deciphering the digital language, bridging the gap between ideas and reality
          </h2> 

          {/* Buttons with Staggered Entrance */}
          <div className={`flex items-center gap-4 mt-14 text-sm md:text-base transition-all duration-800 ease-out delay-400 ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <a href="https://drive.google.com/file/d/1qZpH4NrmwIfEgAe12mG1lqooG2icnKJ2/view?usp=sharing" target='_blank' rel='noopener'>
              <button className='bg-[#517E4F] border-[2px] border-[#517E4F] duration-300 hover:bg-[#04090d] text-white md:px-4 px-2 py-2 rounded-md transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-[#517E4F]/30 btn-premium'>
                View my Resume <i className='fa-solid fa-download'></i> 
              </button>
            </a>
            <a href="#contact">
              <button className='bg-[#04090d] border-[2px] border-[#517E4F] hover:bg-[#517E4F] duration-300 text-white md:px-4 px-2 py-2 rounded-md transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-[#517E4F]/30 btn-premium'>
                Get in Touch <i className='fa-solid fa-arrow-right'></i>  
              </button>
            </a>
          </div>

          {/* Subtle Scroll Indicator with Fade In */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out delay-600 ${
            isLoaded 
              ? 'opacity-60 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
