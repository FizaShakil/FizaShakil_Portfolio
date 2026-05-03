import { Link } from 'react-router-dom';
import SEO from './SEO';
import projects from '../lists/projectList';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Projects = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  // Create enhanced project data for all projects with enterprise positioning
  const getProjectCategory = (id) => {
    const categories = {
      1: "E-COMMERCE",
      2: "RESTAURANT", 
      3: "ENTERPRISE",
      4: "TRAVEL",
      5: "API DEVELOPMENT"
    };
    return categories[id] || "FULL-STACK";
  };

  const getProjectMetrics = (id) => {
    const metrics = {
      1: [
        { label: "CONVERSION", value: "48%" },
        { label: "PERFORMANCE", value: "127%" },
        { label: "SCALABILITY", value: "99.9%" }
      ],
      2: [
        { label: "UPTIME", value: "99.9%" },
        { label: "LATENCY", value: "<200ms" },
        { label: "SECURITY", value: "RBAC" }
      ],
      3: [
        { label: "ENGAGEMENT", value: "85%" },
        { label: "LOAD TIME", value: "1.2s" },
        { label: "RESPONSIVE", value: "100%" }
      ],
      4: [
        { label: "EFFICIENCY", value: "247%" },
        { label: "AUTOMATION", value: "95%" },
        { label: "PERFORMANCE", value: "+83%" }
      ],
      5: [
        { label: "DESIGN", value: "A+" },
        { label: "RESPONSIVE", value: "100%" },
        { label: "PERFORMANCE", value: "98%" }
      ],
      6: [
        { label: "UI/UX", value: "Modern" },
        { label: "RESPONSIVE", value: "100%" },
        { label: "PERFORMANCE", value: "Fast" }
      ],
      7: [
        { label: "DESIGN", value: "Clean" },
        { label: "RESPONSIVE", value: "100%" },
        { label: "PERFORMANCE", value: "Optimized" }
      ],
      8: [
        { label: "ENDPOINTS", value: "15+" },
        { label: "SECURITY", value: "JWT" },
        { label: "SCALABILITY", value: "High" }
      ]
    };
    return metrics[id] || [
      { label: "QUALITY", value: "High" },
      { label: "PERFORMANCE", value: "Fast" },
      { label: "RESPONSIVE", value: "100%" }
    ];
  };

  const getProjectPositioning = (project) => {
    const positioning = {
      1: "High-impact MERN stack e-commerce solution engineered for enterprise-grade scalability and maximum ROI. Features comprehensive admin panel and secure payment integration.",
      2: "Full-stack restaurant management system with role-based access control, real-time order processing, and automated PDF invoice generation for streamlined operations.",
      3: "AI-powered mail digitization interface with smart home commerce integration, featuring cloud inbox simulation, document classification flows, and IoT-driven product experiences.",
      4: "Professionally designed travel experience platform showcasing immersive destinations with responsive design, smooth navigation, and premium visual storytelling.",
      5: "Clean and professional corporate portfolio developed through team collaboration, focused on marketing strategy development and brand positioning optimization.",
      6: "Sleek, responsive frontend clone demonstrating advanced UI/UX skills and modern web development practices with collaborative team development approach.",
      7: "Responsive restaurant landing page showcasing modern design principles, optimized performance, and comprehensive business information presentation.",
      8: "Robust backend API system for video streaming platform, featuring comprehensive YouTube-like functionality with scalable architecture and secure endpoints."
    };
    return positioning[project.id] || project.description;
  };

  // Enhanced project data with all projects
  const showcaseProjects = projects.map(project => ({
    ...project,
    category: getProjectCategory(project.id),
    positioning: getProjectPositioning(project),
    metrics: getProjectMetrics(project.id)
  }));

  return (
    <>
      <SEO 
        title="Projects | Fiza Shakil - Full Stack Developer Portfolio"
        description="Explore my portfolio of full-stack web applications built with React.js, Node.js, MySQL, and MongoDB. Featuring e-commerce platforms, restaurant management systems, and SaaS solutions."
        canonical="https://fiza-shakil.dev/projects"
        keywords="Fiza Shakil projects, React projects, Node.js applications, MERN stack portfolio, full stack projects, web development portfolio"
      />
      <section className="bg-black text-white pt-10 pb-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div ref={headerRef} className={`text-center mb-16 md:mb-20 reveal-fade-up ${headerVisible ? 'visible' : ''}`}>
          <p className="text-[#507e4f] text-sm font-medium tracking-wider uppercase mb-4">
            ENGINEERED SOLUTIONS
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-4">
            Architectural Showcase
          </h1>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-4">
            High-impact MERN stack solutions engineered for enterprise-grade scalability 
            and maximum ROI. Focusing on robust system architecture and seamless 
            user experience.
          </p>
        </div>

        {/* Projects Showcase */}
        <div className="space-y-20 md:space-y-32">
          {showcaseProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

// Reusable ProjectCard Component
const ProjectCard = ({ project, isReversed }) => {
  const [cardRef, cardVisible] = useScrollReveal();
  
  return (
    <div 
      ref={cardRef}
      className={`flex flex-col ${isReversed ? 'xl:flex-row-reverse' : 'xl:flex-row'} 
                  items-center gap-8 md:gap-12 xl:gap-16 group reveal-fade-up ${cardVisible ? 'visible' : ''}`}
    >
      {/* Project Image */}
      <div className="w-full xl:flex-1 relative">
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 p-4 sm:p-6 lg:p-8 
                        transform transition-all duration-500 group-hover:scale-[1.02] 
                        group-hover:shadow-2xl group-hover:shadow-[#507e4f]/20">
          <img
            src={project.localImage || project.image}
            alt={`${project.title} - Full Stack Web Application Project Screenshot`}
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover rounded-xl 
                       transform transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
        </div>
      </div>

      {/* Project Content */}
      <div className="w-full xl:flex-1 space-y-4 md:space-y-6 text-center xl:text-left">
        {/* Category & Title */}
        <div>
          <div className="flex items-center justify-center xl:justify-start gap-3 md:gap-4 mb-3 md:mb-4 flex-wrap">
            <span className="text-[#507e4f] text-xs font-semibold tracking-wider uppercase">
              {project.category}
            </span>
            <span className="text-gray-600 text-xs font-medium tracking-wider uppercase">
              MERN ECOSYSTEM
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold mb-3 md:mb-4 leading-tight">
            {project.title}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto xl:mx-0">
            {project.positioning}
          </p>
        </div>

        {/* Metrics */}
        <div className="flex flex-wrap justify-center xl:justify-start gap-4 md:gap-6">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="text-center min-w-[80px]">
              <div className="text-[#507e4f] text-xs font-medium tracking-wider uppercase mb-1">
                {metric.label}
              </div>
              <div className="text-white text-base md:text-lg font-bold">
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-3 md:gap-4 pt-2 md:pt-4">
          <Link
            to={`/case-study/${project.id}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#507e4f] text-white px-4 md:px-6 py-3 
                       rounded-lg font-medium transition-all duration-300 
                       hover:bg-[#5d8a5a] hover:scale-105 hover:shadow-lg 
                       hover:shadow-[#507e4f]/30 focus:outline-none focus:ring-2 
                       focus:ring-[#507e4f] focus:ring-offset-2 focus:ring-offset-black btn-premium text-sm md:text-base"
          >
            View Case Study
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-600 text-gray-300 
                       px-4 md:px-6 py-3 rounded-lg font-medium transition-all duration-300 
                       hover:border-gray-400 hover:text-white hover:scale-105 
                       focus:outline-none focus:ring-2 focus:ring-gray-500 
                       focus:ring-offset-2 focus:ring-offset-black btn-premium text-sm md:text-base"
          >
            Live Demo
          </a>
          
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 border border-gray-600 
                       text-gray-400 rounded-lg transition-all duration-300 
                       hover:border-gray-400 hover:text-white hover:scale-105 
                       focus:outline-none focus:ring-2 focus:ring-gray-500 
                       focus:ring-offset-2 focus:ring-offset-black btn-premium"
            title="View Source Code"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
