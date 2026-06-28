import { useEffect, useState } from 'react';
import backGroundImage from '../assets/background_image_heroSection.jpg';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen-nav flex flex-col overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src={backGroundImage}
          alt=""
          className={`w-full h-full object-cover object-center transition-opacity duration-700 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-[#04090d]" />
      </div>

      <div className="relative z-10 flex flex-col justify-center flex-1 section-container px-4 sm:px-6 py-10 sm:py-14 text-center max-w-4xl">
        <p
          className={`text-[#517E4F] text-caption font-semibold uppercase tracking-widest mb-3 sm:mb-4 transition-all duration-500 ease-out motion-safe:transition-all ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 motion-reduce:opacity-100 motion-reduce:translate-y-0'
          }`}
        >
          For Startups &amp; Growing Businesses
        </p>

        <h1
          className={`text-display text-white text-balance font-bold transition-all duration-500 ease-out delay-75 motion-safe:transition-all ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 motion-reduce:opacity-100 motion-reduce:translate-y-0'
          }`}
        >
          I Build Digital Products That{' '}
          <span className="text-[#517E4F]">Grow Your Business</span>
        </h1>

        <p
          className={`text-gray-300 mt-4 sm:mt-6 text-body max-w-prose mx-auto text-balance transition-all duration-500 ease-out delay-150 motion-safe:transition-all ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 motion-reduce:opacity-100 motion-reduce:translate-y-0'
          }`}
        >
          I help startups and businesses launch products, improve customer experience,
          and automate workflows — so you spend less time on manual work and more time growing revenue.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 w-full max-w-md sm:max-w-none mx-auto transition-all duration-500 ease-out delay-200 motion-safe:transition-all ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 motion-reduce:opacity-100 motion-reduce:translate-y-0'
          }`}
        >
          <a href="#contact" className="w-full sm:w-auto" aria-label="Book a free discovery call">
            <span className="btn-primary btn-premium inline-flex items-center justify-center gap-2 w-full">
              Book a Free Consultation
              <i className="fa-solid fa-calendar-check" aria-hidden="true"></i>
            </span>
          </a>
          <a href="#case-studies" className="w-full sm:w-auto" aria-label="View case studies">
            <span className="btn-secondary btn-premium inline-flex items-center justify-center gap-2 w-full">
              See Client Results
              <i className="fa-solid fa-arrow-down" aria-hidden="true"></i>
            </span>
          </a>
        </div>

        <p
          className={`text-gray-500 text-caption mt-5 sm:mt-6 max-w-sm sm:max-w-none mx-auto transition-opacity duration-500 delay-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0 motion-reduce:opacity-100'
          }`}
        >
          Trusted by founders &amp; businesses worldwide
          <span className="hidden sm:inline"> · </span>
          <span className="block sm:inline mt-0.5 sm:mt-0">Responds within 24 hours</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
