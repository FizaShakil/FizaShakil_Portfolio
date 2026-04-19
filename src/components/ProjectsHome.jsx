import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../lists/projectList';
import { useScrollReveal, useStaggeredReveal } from '../hooks/useScrollReveal';

const ProjectsHome = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useStaggeredReveal(3);
  
  // Get first 3 projects
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="min-h-screen text-white pb-16 px-4 sm:px-6 lg:px-8 bg-[#040a0e]" id='projectsHome'>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className={`flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 reveal-fade-up ${headerVisible ? 'visible' : ''}`}>
          <div className="mb-6 lg:mb-0">
            <h2 className='text-3xl mb-8 md:text-4xl text-gray-200 font-bold mt-6'>Featured Projects</h2>
            <p className="text-gray-400 text-sm lg:text-base mt-2 max-w-md">
              A selection of recent works that demonstrate technical complexity and design precision.
            </p>
          </div>
          
          <Link to="/projects" className="self-start lg:self-auto">
            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base">
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <img
                  src={project.localImage || project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                {/* Tech Stack Tags */}
                {project.techStack && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.techStack.slice(0, 2).map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-400 bg-gray-800 rounded-md"
                      >
                        <i className={`${tech.icon} text-sm`}></i>
                        <span className="uppercase">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description.length > 120 
                    ? `${project.description.substring(0, 120)}...` 
                    : project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    title="View Live Demo"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    title="View Source Code"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsHome;
