import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from './SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';
import caseStudies from '../lists/casestudiesList';

const CaseStudy = () => {
  const { id } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);

  useEffect(() => {
    const study = caseStudies.find(cs => cs.id === parseInt(id));
    setCaseStudy(study);
  }, [id]);

  if (!caseStudy) {
    return (
      <>
        <SEO 
          title="Case Study Not Found | Fiza Shakil"
          description="The requested case study could not be found. Explore other projects in my portfolio."
          canonical="https://fiza-shakil.dev/projects"
        />
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Case Study Not Found</h2>
            <Link to="/projects" className="text-[#507e4f] hover:underline">
              ← Back to Projects
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title={`Case Study: ${caseStudy.title} | Fiza Shakil`}
        description={caseStudy.tagline || caseStudy.problem?.substring(0, 160)}
        canonical={`https://fiza-shakil.dev/case-study/${caseStudy.id}`}
        keywords={`${caseStudy.title}, case study, full stack development, React, Node.js, ${caseStudy.title.includes('E-Commerce') ? 'e-commerce development' : ''} ${caseStudy.title.includes('Restaurant') ? 'restaurant management system' : ''}`}
        type="article"
      />
      <div className="min-h-screen bg-black text-white">
        {/* Background Gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90 pointer-events-none"></div>
        <div className="fixed inset-0 bg-gradient-to-t from-[#507e4f]/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="relative z-10">
          {/* Navigation */}
          <nav className="px-4 sm:px-6 lg:px-8 py-6">
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
          </nav>

          {/* Hero Section */}
          <HeroSection caseStudy={caseStudy} />

          {/* Problem Section */}
          <ProblemSection problem={caseStudy.problem} />

          {/* Solution Section */}
          <SolutionSection solution={caseStudy.solution} />

          {/* Engineering Features */}
          <EngineeringFeaturesSection engineeringFeatures={caseStudy.engineeringFeatures} />

          {/* System Architecture */}
          <ArchitectureSection architecture={caseStudy.architecture} />

          {/* Engineering Challenges */}
          <ChallengesSection challenges={caseStudy.challenges} />

          {/* System Performance */}
          <PerformanceSection 
            optimization={caseStudy.optimization} 
            results={caseStudy.results} 
          />

          {/* Future Roadmap */}
          <RoadmapSection futureScope={caseStudy.futureScope} />

          {/* Final CTA */}
          <CTASection caseStudy={caseStudy} />
        </div>
      </div>
    </>
  );
};

// Hero Section Component
const HeroSection = ({ caseStudy }) => {
  const [heroRef, heroVisible] = useScrollReveal();

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div ref={heroRef} className={`text-center reveal-fade-up ${heroVisible ? 'visible' : ''}`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            {caseStudy.title.split(' ').map((word, index) => (
              <span 
                key={index}
                className={word.includes('–') || word.includes('Scalable') || word.includes('AI-Powered') || word.includes('Pro') ? 'text-[#507e4f]' : ''}
              >
                {word}{' '}
              </span>
            ))}
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed">
            {caseStudy.tagline}
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10">
            {['React', 'Node.js', 'MongoDB', 'Express', 'REST API'].map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-800/50 border border-[#507e4f]/30 rounded-full text-xs md:text-sm font-medium text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-12 md:mb-16">
            <button className="w-full sm:w-auto bg-[#507e4f] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-[#5d8a5a] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#507e4f]/30">
              View Live Demo
            </button>
            <button className="w-full sm:w-auto border border-gray-600 text-gray-300 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:border-gray-400 hover:text-white transition-all duration-300 hover:scale-105">
              View Repository
            </button>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 border border-[#507e4f]/20 shadow-2xl shadow-[#507e4f]/10">
              <div className="bg-gray-700 rounded-lg h-48 md:h-64 lg:h-80 flex items-center justify-center">
                <span className="text-gray-400 text-sm md:text-base lg:text-lg">Project Mockup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Problem Section Component
const ProblemSection = ({ problem }) => {
  const [problemRef, problemVisible] = useScrollReveal();

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div ref={problemRef} className={`reveal-fade-up ${problemVisible ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <span className="text-[#507e4f] font-mono text-xs md:text-sm">01.</span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">The Problem</h2>
          </div>
          <p className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed">
            {problem}
          </p>
        </div>
      </div>
    </section>
  );
};

// Solution Section Component
const SolutionSection = ({ solution }) => {
  const [solutionRef, solutionVisible] = useScrollReveal();

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div ref={solutionRef} className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center reveal-fade-up ${solutionVisible ? 'visible' : ''}`}>
          <div>
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <span className="text-[#507e4f] font-mono text-xs md:text-sm">02.</span>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">The Solution</h2>
            </div>
            <p className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed">
              {solution}
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 md:p-8 border border-[#507e4f]/20">
            <div className="space-y-3 md:space-y-4">
              <div className="h-1.5 md:h-2 bg-[#507e4f] rounded-full w-3/4"></div>
              <div className="h-1.5 md:h-2 bg-gray-600 rounded-full w-1/2"></div>
              <div className="h-1.5 md:h-2 bg-gray-700 rounded-full w-2/3"></div>
              <div className="text-center pt-3 md:pt-4">
                <span className="text-[#507e4f] font-semibold text-sm md:text-base">Solution Progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Engineering Features Section Component
const EngineeringFeaturesSection = ({ engineeringFeatures }) => {
  const [featuresRef, featuresVisible] = useScrollReveal();

  const getFeatureIcon = (index) => {
    const icons = [
      <svg key={index} className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>,
      <svg key={index} className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>,
      <svg key={index} className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>,
      <svg key={index} className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>,
      <svg key={index} className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>,
      <svg key={index} className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ];
    return icons[index % icons.length];
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div ref={featuresRef} className={`reveal-fade-up ${featuresVisible ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
            <span className="text-[#507e4f] font-mono text-xs md:text-sm">03.</span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Engineering Features</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {engineeringFeatures?.map((feature, index) => (
              <EngineeringFeatureCard 
                key={index} 
                feature={feature} 
                icon={getFeatureIcon(index)}
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Engineering Feature Card Component
const EngineeringFeatureCard = ({ feature, icon, index }) => {
  return (
    <div className={`group bg-gray-900/40 border border-gray-800/60 rounded-xl p-4 md:p-6 
                     hover:border-[#507e4f]/50 hover:shadow-lg hover:shadow-[#507e4f]/10 
                     hover:bg-gray-900/60 transition-all duration-300 hover:-translate-y-1 
                     stagger-item stagger-delay-${Math.min(index + 1, 6)}`}>
      
      <div className="flex items-start gap-3 md:gap-4">
        <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#507e4f]/20 rounded-lg 
                        flex items-center justify-center text-[#507e4f] group-hover:bg-[#507e4f]/30 
                        transition-colors duration-300">
          {icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-sm md:text-base font-semibold text-white mb-2 leading-tight">
            {feature.title}
          </h3>
          
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Simplified remaining sections for brevity
const ArchitectureSection = ({ architecture }) => (
  <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
        <span className="text-[#507e4f] font-mono text-xs md:text-sm">04.</span>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">System Blueprint</h2>
      </div>
      <div className="space-y-3 md:space-y-4">
        {architecture?.map((item, index) => (
          <div key={index} className="bg-gray-800/20 border-l-4 border-[#507e4f] p-3 md:p-4 rounded-r-lg">
            <p className="text-gray-300 text-sm md:text-base">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ChallengesSection = ({ challenges }) => (
  <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
        <span className="text-[#507e4f] font-mono text-xs md:text-sm">05.</span>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Engineering Trade-offs</h2>
      </div>
      <div className="bg-gray-800/30 border border-[#507e4f]/20 rounded-2xl p-6 md:p-8">
        <div className="space-y-4 md:space-y-6">
          {challenges?.map((challenge, index) => (
            <div key={index} className="flex items-start gap-3 md:gap-4">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#507e4f] rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
              <p className="text-gray-300 text-sm md:text-base lg:text-lg">{challenge}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const PerformanceSection = ({ optimization, results }) => (
  <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
        <span className="text-[#507e4f] font-mono text-xs md:text-sm">06.</span>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">System Performance</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <div>
          <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4 text-[#507e4f]">Optimizations</h3>
          <div className="space-y-2 md:space-y-3">
            {optimization?.map((item, index) => (
              <div key={index} className="flex items-center gap-2 md:gap-3">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#507e4f] rounded-full"></div>
                <span className="text-gray-300 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4 text-[#507e4f]">Results</h3>
          <div className="space-y-2 md:space-y-3">
            {results?.map((item, index) => (
              <div key={index} className="flex items-center gap-2 md:gap-3">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#507e4f] rounded-full"></div>
                <span className="text-gray-300 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const RoadmapSection = ({ futureScope }) => (
  <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
        <span className="text-[#507e4f] font-mono text-xs md:text-sm">07.</span>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Future Roadmap</h2>
      </div>
      <div className="space-y-4 md:space-y-6">
        {futureScope?.map((item, index) => (
          <div key={index} className="flex items-start gap-4 md:gap-6">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-[#507e4f] rounded-full"></div>
              {index < futureScope.length - 1 && (
                <div className="w-px h-8 md:h-12 bg-[#507e4f]/30 mt-2"></div>
              )}
            </div>
            <div className="flex-1 pb-6 md:pb-8">
              <h3 className="text-sm md:text-base lg:text-lg font-semibold text-white mb-1 md:mb-2">{item}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = ({ caseStudy }) => (
  <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 pb-16 md:pb-24">
    <div className="max-w-4xl mx-auto">
      <div className="text-center">
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-[#507e4f]/30 rounded-2xl p-8 md:p-12 shadow-2xl shadow-[#507e4f]/10">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">Want to see the source?</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-6 md:mb-8">
            Explore the complete implementation and technical details
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <button className="w-full sm:w-auto bg-[#507e4f] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-[#5d8a5a] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#507e4f]/30">
              View Repository
            </button>
            <a
              href="/#contact"
              className="w-full sm:w-auto border border-gray-600 text-gray-300 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:border-gray-400 hover:text-white transition-all duration-300 hover:scale-105 text-center"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CaseStudy;