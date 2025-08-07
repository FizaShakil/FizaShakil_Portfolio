import React from 'react';
import Heading from './Reusable-Components/Heading';
import fashionista from '../assets/fashionista_mockup2.png'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Modern E-Commerce Platform",
      description: "A full-featured online store with an intuitive admin panel, secure payment gateway, and responsive design.",
      image: fashionista,
      githubLink: "#",
      demoLink: "#"
    },
    {
      id: 2,
      title: "Restaurant Management System",
      description: "A custom management system streamlining operations for restaurants, including order management, inventory, and analytics.",
      image: "https://via.placeholder.com/400x300/1a1a2e/ffffff?text=Restaurant+System",
      githubLink: "#",
      demoLink: "#"
    },
    {
      id: 3,
      title: "Personal Blog Site",
      description: "A sleek, responsive blog platform featuring dynamic content, user authentication, and robust backend API integrations.",
      image: "https://via.placeholder.com/400x300/16213e/ffffff?text=Blog+Platform",
      githubLink: "#",
      demoLink: "#"
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Heading heading={"Projects"}/>

        {/* Projects Container */}
        <div className="flex flex-col md:flex-row md:gap-8 lg:gap-12 space-y-12 md:space-y-0">
          {projects.map((project, index) => (
            <div key={project.id} className="flex-1 group">
              {/* Project Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="aspect-[4/3] relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[40vh] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-0"></div>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    className="px-6 py-2.5 text-white text-sm font-medium rounded-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black"
                    style={{ backgroundColor: '#517E4F' }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#5d8a5a';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#517E4F';
                    }}
                  >
                    GitHub
                  </button>
                  
                  <button className="px-6 py-2.5 text-gray-400 text-sm font-medium border border-gray-600 rounded-md transition-all duration-300 hover:border-gray-500 hover:text-gray-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-gray-500">
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;