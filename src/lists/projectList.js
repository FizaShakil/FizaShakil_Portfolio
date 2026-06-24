// Import local images
import fashionistaImg from '../assets/fashionista_newImg.png';
import rmsImg from '../assets/rms.png';
import crystalImg from '../assets/crystal_mockup.png';
import apiImg from '../assets/api-01_generated.jpg'
import glanceImg from '../assets/glance_Mockup.png'

const projects = [
  {
    id: 1,
    title: "Fashionista - Complete Online Store System",
   description: "A fully-functional online store where customers can browse products, add items to their cart, and complete secure purchases. The store owner can manage inventory, track orders, see sales analytics, and have full control from an admin dashboard. This system works smoothly 24/7 and can handle growing sales without slowdowns.",
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
    title: "RMS Pro – Restaurant Management System",
    description: "A complete system for restaurants to manage orders, payments, and staff roles. When a customer orders, it automatically goes to the kitchen. Staff can track orders in real-time. The system generates invoices automatically and managers can see reports on sales, busy times, and what's selling. No more manual order books or billing mistakes.",
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
    title: "Crystal – Digital Mail & Document Management",
    description: "An organized system for managing physical mail digitally. Documents are scanned and automatically sorted by type. You get a clean inbox where you can find anything instantly, from bills to contracts. No more lost papers or messy filing cabinets. Access your important documents from anywhere, anytime.",
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
    title: "Glance – Beautiful Travel Booking Platform",
    description: "A visually stunning travel website that makes customers excited to book trips. The platform showcases destinations beautifully, loads fast on phones and computers, and makes booking smooth and intuitive. Designed to increase bookings by making the experience enjoyable and easy.",
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
    title: "DevConnect – Freelance Developer Marketplace",
    description: "A complete marketplace where businesses post projects and developers bid to take them on. The system manages project postings, tracks bids, handles agreements, and keeps everything organized. Businesses find talented developers quickly and transparently, developers get access to projects that match their skills. Everything happens in one secure platform.",
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
