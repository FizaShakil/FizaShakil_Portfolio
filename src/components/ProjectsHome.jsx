import React from 'react';
import Heading from './Reusable-Components/Heading';
import projects from './projectList';
import { Link } from 'react-router-dom';

const ProjectsHome = () => {
  return (
    <section className="min-h-screen text-white pb-16 px-4 sm:px-6 lg:px-8" id='projectsHome'>
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <Heading heading="Projects" />

        {/* Projects Container */}
        <div className="flex flex-wrap justify-center gap-10 mt-12">
          {projects.slice(0,3).map((project) => (
            <div
              key={project.id}
              className="w-full sm:w-[48%] lg:w-[30%] flex flex-col group"
            >
              {/* Image Wrapper */}
              <div className="relative mb-4 overflow-hidden rounded-lg left-1/2 transform -translate-x-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-[300px] h-[45vh] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-0"></div>
              </div>

              {/* Info Section */}
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold leading-tight">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Icons */}
                {project.techStack && (
                  <div className="flex flex-wrap gap-3 mt-2">
                    {project.techStack.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-gray-800 px-2 py-1 rounded-md text-xs text-gray-300"
                      >
                        <i className={`${tech.icon} text-lg`}></i>
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 text-sm font-medium text-white rounded-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black"
                    style={{ backgroundColor: '#517E4F' }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#5d8a5a';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#517E4F';
                    }}
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 text-sm font-medium text-gray-400 border border-gray-600 rounded-md transition-all duration-300 hover:text-gray-300 hover:border-gray-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-gray-500"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to={'/projects'}>
         <button 
                  className='relative left-1/2 transform -translate-x-1/2 rounded-full text-sm bg-[#517E4F] text-white mt-9
                     w-[150px] py-2 hover:bg-black border-2 border-[#517E4F] duration-500 mb-5'>
                        View more Projects
        </button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsHome;
