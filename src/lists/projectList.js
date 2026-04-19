// Import local images
import fashionistaImg from '../assets/fashionista_newImg.png';
import rmsImg from '../assets/rms.png';
import crystalImg from '../assets/crystal_mockup.png';
import apiImg from '../assets/api-01_generated.jpg'
import glanceImg from '../assets/glance_mockup.png'

const projects = [
  {
    id: 1,
    title: "Fashionista - Scalable E-Commerce Platform",
   description: "A production-ready full-stack e-commerce platform built with the MERN stack, featuring secure authentication, dynamic product management, cart and checkout workflows, and a dedicated admin dashboard. Designed with scalable architecture, Redux-powered state management, RESTful API integration, and performance-focused UI to simulate real-world online commerce systems.",
    localImage: fashionistaImg,
    githubLink: "#",
    demoLink: "https://fashionista-client.onrender.com/",
    techStack: [
      { icon: "fab fa-react", name: "React" },
      { icon: "fab fa-node-js", name: "Node.js" },
      { icon: "fa-solid fa-e", name: "Express JS" },
      { icon: "fas fa-database", name: "MongoDB" },
      { icon: "fa-solid fa-t", name: "Tailwind CSS" },
    ]
  },
  {
    id: 2,
    title: "RMS Pro – Restaurant Operations & Order Management Platform",
    description: "A full-stack restaurant operations platform engineered to digitize order processing, billing, and product management through role-based access control. Includes secure authentication, structured database design, invoice generation with PDF exports, and workflow automation to streamline restaurant efficiency and operational visibility.",
    image: "https://res.cloudinary.com/dzjyybld9/image/upload/v1754745755/rms_mockup_2_nntwdf.png",
    localImage: rmsImg,
    githubLink: "https://github.com/FizaShakil/Restaurant-Management-System.git",
    demoLink: "https://www.linkedin.com/posts/fiza-shakil_finally-its-completed-a-full-stack-restaurant-activity-7340391306973569024-djg5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEITf3UBUBhyM3ABzp_Zav9FuqWXLJqiWaE",
    techStack: [
      { icon: "fab fa-react", name: "React" },
      { icon: "fab fa-node-js", name: "Node.js" },
      { icon: "fa-solid fa-e", name: "Express JS" },
      { icon: "fas fa-database", name: "MySQL" },
      { icon: "fa-solid fa-t", name: "Tailwind CSS" },
    ]
  },
  {
    id: 3,
    title: "Crystal – AI-Powered Mail Digitization & Smart Commerce Interface",
    description: "A modern frontend interface prototype designed for an AI-powered mail digitization and smart home commerce system. Focused on clean UI architecture, responsive layouts, and intuitive user flows, simulating document classification, cloud inbox integration, and IoT-driven product experiences.",
    image: "https://res.cloudinary.com/dzjyybld9/image/upload/v1754743572/crystal_mockup_rnq4qn.png",
    localImage: crystalImg,
    githubLink: "https://github.com/FizaShakil/Crystal.git",
    demoLink: "https://crystal-phi.vercel.app/",
    techStack: [
     { icon: "fab fa-react", name: "React" },
      { icon: "fa-solid fa-t", name: "Tailwind CSS" },
    ]
  },
  {
    id: 4,
    title: "Glance – Immersive Travel Experience Web Platform",
    description: "A responsive travel experience platform designed to showcase premium destinations through immersive layouts and optimized UI performance. Built with a design-first approach, emphasizing user engagement, smooth navigation, and visual storytelling aligned with modern tourism brands.",
    localImage: glanceImg,
    demoLink: "https://glance-one.vercel.app/",
    techStack: [
      { icon: "fab fa-react", name: "React" },
      { icon: "fa-solid fa-t", name: "Tailwind CSS" },
    ]
  },
  // {
  //   id: 5,
  //   title: "Business Portfolio",
  //   description: "A clean and professional single-page portfolio website developed with team collaboration at the Web development Competetion by ACM-NUCES at FAST-NUCES, Karachi. It is developed for a corporate consultant focused on marketing strategy development, performance optimization, and brand positioning.",
  //   image: "https://res.cloudinary.com/dzjyybld9/image/upload/v1754803755/globex_mockup_afmhve.png",
  //   githubLink: "https://github.com/FizaShakil/DevDay25_Project.git",
  //   demoLink: "https://www.linkedin.com/posts/fiza-shakil_devday25-teamwork-webdevelopment-activity-7318982316972761089-I7fa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEITf3UBUBhyM3ABzp_Zav9FuqWXLJqiWaE",
  //   techStack: [
  //     { icon: "fab fa-react", name: "React" },
  //     { icon: "fa-solid fa-t", name: "Tailwind CSS" },
  //   ]
  // },
  {
    id: 5,
    title: "DevConnect – Multi-Role Developer Marketplace Backend System ",
    description: "A scalable backend architecture built with Node.js, Express, and MongoDB, enabling multi-role authentication, project lifecycle management, and a competitive bidding engine. Designed with secure REST APIs, modular routing, protected middleware layers, and structured database relationships to simulate a real-world freelance marketplace platform.",
    githubLink: "https://github.com/FizaShakil/DevConnect-lite.git",
    demoLink: "#",
    localImage: apiImg,
    techStack: [
      { icon: "fab fa-node-js", name: "Node JS" },
      { icon: "fa-solid fa-e", name: "Express JS" },
      { icon: "fas fa-database", name: "MongoDB" }
    ]
  }
];

export default projects;
