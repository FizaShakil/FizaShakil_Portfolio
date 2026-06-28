// Import local images
import fashionistaImg from '../assets/fashionista_newImg.png';
import rmsImg from '../assets/rms.png';
import crystalImg from '../assets/crystal_mockup.png';
import apiImg from '../assets/api-01_generated.jpg'
import glanceImg from '../assets/glance_Mockup.png'

const projects = [
  {
    id: 1,
    title: "Fashionista — Online Store That Drives Sales",
    businessChallenge: "A retail business needed to move beyond social media sales and accept orders online without hiring a full tech team.",
    clientGoals: "Launch a professional store, manage inventory easily, and give customers a smooth checkout experience.",
    solution: "I created a complete e-commerce platform with product catalog, secure payments, order tracking, and an admin dashboard for inventory and sales analytics.",
    businessOutcome: "48% increase in sales, 127% faster checkout, and 99.9% uptime during peak shopping periods.",
    description: "A fully-functional online store where customers browse, purchase securely, and store owners manage inventory, orders, and sales analytics from one dashboard.",
    localImage: fashionistaImg,
    githubLink: "#",
    demoLink: "https://fashionista-client.onrender.com/",
    industry: "E-commerce",
    metrics: [
      { label: "Sales Increase", value: "48%" },
      { label: "Faster Checkout", value: "+127%" },
      { label: "Uptime", value: "99.9%" },
    ],
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
    title: "RMS Pro — Restaurant Operations, Simplified",
    businessChallenge: "A busy restaurant was losing orders to paper-based systems, billing errors, and slow kitchen communication.",
    clientGoals: "Automate order flow from customer to kitchen, eliminate billing mistakes, and give managers real-time visibility into sales.",
    solution: "I built a restaurant management system with real-time order routing, automated invoicing, role-based staff access, and sales reporting dashboards.",
    businessOutcome: "80% less time on manual tasks, orders processed in under 2 minutes, and 95% reduction in billing errors.",
    description: "A complete system for restaurants to manage orders, payments, and staff — with automatic kitchen routing and real-time sales reports.",
    image: "https://res.cloudinary.com/dzjyybld9/image/upload/v1754745755/rms_mockup_2_nntwdf.png",
    localImage: rmsImg,
    githubLink: "https://github.com/FizaShakil/Restaurant-Management-System.git",
    demoLink: "https://www.linkedin.com/posts/fiza-shakil_finally-its-completed-a-full-stack-restaurant-activity-7340391306973569024-djg5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEITf3UBUBhyM3ABzp_Zav9FuqWXLJqiWaE",
    industry: "Restaurants",
    metrics: [
      { label: "Time Saved", value: "80%" },
      { label: "Order Speed", value: "<2 min" },
      { label: "Error Reduction", value: "95%" },
    ],
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
    title: "Crystal — Find Any Document in Seconds",
    businessChallenge: "Important documents were scattered across filing cabinets and inboxes, making it impossible to find what was needed quickly.",
    clientGoals: "Digitize mail management, organize documents automatically, and access files from anywhere.",
    solution: "I created a digital mail and document management system with automatic sorting, instant search, and mobile access.",
    businessOutcome: "Documents found in 30 seconds, 24/7 access from any device, and zero lost paperwork.",
    description: "An organized system for managing physical mail digitally — scanned, sorted, and searchable from anywhere.",
    image: "https://res.cloudinary.com/dzjyybld9/image/upload/v1754743572/crystal_mockup_rnq4qn.png",
    localImage: crystalImg,
    githubLink: "https://github.com/FizaShakil/Crystal.git",
    demoLink: "https://crystal-phi.vercel.app/",
    industry: "Document Management",
    metrics: [
      { label: "Search Time", value: "30 sec" },
      { label: "Accessibility", value: "24/7" },
      { label: "Mobile Ready", value: "100%" },
    ],
    techStack: [
     { icon: "fab fa-react", name: "React" },
      { icon: "fa-solid fa-t", name: "Tailwind CSS" },
    ]
  },
  {
    id: 4,
    title: "Glance — Travel Bookings That Inspire Action",
    businessChallenge: "A travel business needed a website that looked as good as the destinations they sell — and actually converted browsers into bookers.",
    clientGoals: "Showcase destinations beautifully, load fast on mobile, and make the booking process effortless.",
    solution: "I designed and built a visually stunning travel platform with fast load times, mobile-first design, and an intuitive booking flow.",
    businessOutcome: "30% higher conversion rate, 45% more mobile bookings, and 2.1-second page load time.",
    description: "A travel booking platform designed to inspire customers and drive bookings with beautiful visuals and a smooth experience.",
    localImage: glanceImg,
    demoLink: "https://glance-one.vercel.app/",
    industry: "Travel",
    metrics: [
      { label: "Conversion", value: "+30%" },
      { label: "Mobile Bookings", value: "+45%" },
      { label: "Load Time", value: "2.1s" },
    ],
    techStack: [
      { icon: "fab fa-react", name: "React" },
      { icon: "fa-solid fa-t", name: "Tailwind CSS" },
    ]
  },
  {
    id: 5,
    title: "DevConnect — Hire Developers Faster",
    businessChallenge: "Businesses struggled to find reliable developers, and freelancers had no central place to discover quality projects.",
    clientGoals: "Create a transparent marketplace where businesses post projects and developers bid with clear terms.",
    solution: "I built a marketplace platform with project postings, bid management, secure agreements, and organized workflows for both sides.",
    businessOutcome: "70% reduction in hiring time, 95%+ project match rate, and 4.8/5 user satisfaction.",
    description: "A marketplace connecting businesses with qualified developers — transparent pricing, secure agreements, all in one platform.",
    githubLink: "https://github.com/FizaShakil/DevConnect-lite.git",
    demoLink: "#",
    localImage: apiImg,
    industry: "Marketplace",
    metrics: [
      { label: "Hiring Time", value: "-70%" },
      { label: "Match Rate", value: "95%+" },
      { label: "Satisfaction", value: "4.8/5" },
    ],
    techStack: [
      { icon: "fab fa-node-js", name: "Node JS" },
      { icon: "fa-solid fa-e", name: "Express JS" },
      { icon: "fas fa-database", name: "MongoDB" }
    ]
  }
];

export default projects;
