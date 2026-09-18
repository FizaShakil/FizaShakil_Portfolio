import fashionistaImg from '../assets/fashionista_newImg.png';
import rmsImg from '../assets/rms.png';
import sumitupImg from '../assets/api-01_generated.jpg';
import glanceImg from '../assets/glance_Mockup.png';
import crystalImg from '../assets/crystal_mockup.png';
import apiImg from '../assets/api-01_generated.jpg';

const projects = [
  {
    id: 2,
    title: "Fashionista — E-Commerce with Admin CMS",
    featured: true,
    tag: "B2C E-Commerce Platform",
    context:
      "A full online store where customers browse and purchase products, and store owners manage catalog, orders, and inventory from an admin panel.",
    problem:
      "Selling through social media made order tracking messy. There was no proper storefront, no checkout flow, and no single place to manage products and orders.",
    problemShort:
      "Selling through social media made order tracking messy — no real storefront, checkout, or admin control.",
    solution:
      "Built a full-stack store — React storefront with cart and multi-step checkout, Node.js/Express API, MongoDB database, and an admin CMS for products, orders, and inventory.",
    solutionShort:
      "Built a full-stack store: React storefront with cart and checkout, Node/Express API, MongoDB, and an admin CMS.",
    value:
      "Customers get a real shopping experience. Store owners manage catalog and orders from one dashboard instead of scattered social-media messages.",
    valueShort:
      "Customers get a real shopping experience; store owners manage catalog and orders from one dashboard.",
    userOutcome:
      "Customers complete purchases in a straightforward flow. Store owners manage everything from one admin interface instead of scattered messages.",
    businessValue:
      "Replaces informal selling with a structured store that supports growth — inventory tracking, order history, and a professional shopping experience.",
    description:
      "Full-stack e-commerce platform with customer auth, cart, checkout, and an admin CMS — not just a product catalog.",
    localImage: fashionistaImg,
    githubLink: "#",
    demoLink: "https://fashionista-client.onrender.com/",
    industry: "E-Commerce",
    proofPoints: ["Full-Stack Build", "Auth + Cart + Checkout", "Admin CMS"],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "RMS — Restaurant Operations System",
    featured: true,
    index: "02",
    tag: "Business Operations",
    context:
      "A restaurant management system for daily operations — order entry, kitchen coordination, billing, inventory, and manager reporting.",
    problem:
      "Paper-based order taking caused lost orders, billing mistakes, and no visibility into what was happening during service.",
    problemShort:
      "Paper order slips got lost between front-of-house and kitchen — billing errors and zero operational visibility.",
    solution:
      "Built role-based restaurant operations — digital order flow to the kitchen, automatic billing, inventory tracking, and manager dashboards.",
    solutionShort:
      "Built role-based restaurant operations: digital order flow, automatic billing, inventory tracking, and manager dashboards.",
    value:
      "Fewer lost orders, consistent billing, and real-time sales and inventory visibility for managers.",
    valueShort:
      "Fewer lost orders, consistent billing, and real-time sales/inventory visibility for managers.",
    userOutcome:
      "Staff spend less time on manual billing and order coordination. Managers get operational visibility without paper tracking.",
    businessValue:
      "Replaces fragmented manual processes with a single system for orders, billing, and inventory — reducing errors during busy service hours.",
    description:
      "Restaurant operations system with order flow, role-based staff access, automated billing, and manager dashboards.",
    localImage: rmsImg,
    githubLink: "https://github.com/FizaShakil/Restaurant-Management-System.git",
    demoLink:
      "https://www.linkedin.com/posts/fiza-shakil_finally-its-completed-a-full-stack-restaurant-activity-7340391306973569024-djg5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEITf3UBUBhyM3ABzp_Zav9FuqWXLJqiWaE",
    industry: "Operations",
    proofPoints: ["Role-Based Access", "Order + Billing Flow", "Manager Dashboard"],
    techStack: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
  },
  {
    id: 1,
    title: "SumItUp — AI Meeting Intelligence",
    featured: true,
    index: "03",
    tag: "AI-Powered Product",
    context:
      "An AI-powered meeting assistant that transcribes meetings, generates summaries, and extracts action items — so teams don't lose context after every call.",
    problem:
      "Teams finish meetings with notes scattered across tools. Nobody reliably receives summaries or follow-ups unless someone manually sends them.",
    problemShort:
      "Meeting context vanishes after every call — summaries and action items never reliably reach the right people.",
    solution:
      "Owned the real-time email notification system end-to-end — dashboard trigger UI, backend delivery logic, and API integration with the AI processing pipeline.",
    solutionShort:
      "Owned the real-time email notification system end-to-end — dashboard trigger, backend delivery logic, and AI pipeline integration.",
    value:
      "Users receive meeting intelligence in their inbox automatically — no manual checking after every meeting.",
    valueShort:
      "Users receive meeting intelligence in their inbox automatically after each meeting.",
    userOutcome:
      "Users receive meeting intelligence in their inbox without manually checking the dashboard after every meeting.",
    businessValue:
      "Reduces manual follow-up work and makes post-meeting workflows more reliable inside the product.",
    description:
      "Flagship product work: AI meeting assistant with real-time email notifications, dashboard triggers, and backend delivery logic — built end-to-end.",
    localImage: sumitupImg,
    githubLink: "https://github.com/SumitUp-AI/sumitup-ai-meet",
    demoLink: "#",
    industry: "AI Product",
    proofPoints: ["End-to-End Ownership", "Real-Time Notifications", "AI Workflows"],
    techStack: ["React", "Node.js", "TypeScript", "PostgreSQL", "Email API"],
  },
  {
    id: 6,
    title: "Glance — Travel Booking Frontend",
    featured: false,
    supporting: true,
    tag: "Product Frontend",
    context:
      "A travel booking platform frontend focused on destination discovery and a smooth booking experience across devices.",
    problem:
      "Travel sites often feel cluttered on mobile and slow to navigate — users leave before completing a booking.",
    problemShort:
      "Travel sites feel cluttered on mobile and slow to navigate — users leave before booking.",
    solution:
      "Designed and built a polished React frontend — destination showcases, filtering, mobile-first responsive layout, and booking flow UI.",
    solutionShort:
      "Built a polished React frontend — destination showcases, filtering, mobile-first layout, and booking flow.",
    value:
      "A visually clear browsing and booking experience that works consistently across screen sizes.",
    valueShort:
      "A visually clear browsing and booking experience that works across all screen sizes.",
    userOutcome:
      "A visually clear browsing and booking experience that works consistently across screen sizes.",
    businessValue:
      "Shows ability to build polished, user-facing product interfaces where visual hierarchy and mobile experience matter.",
    description:
      "Travel booking frontend with destination discovery, mobile-first design, and intuitive booking flow.",
    localImage: glanceImg,
    demoLink: "https://glance-one.vercel.app/",
    industry: "Travel",
    proofPoints: ["Mobile-First UI", "Booking Flow", "Visual Design"],
    techStack: ["React", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "Crystal — Digital Document Management",
    featured: false,
    context:
      "A document management interface for organizing and searching digital files — built as a frontend-focused product project.",
    problem:
      "Finding specific documents across unorganized storage wastes time and leads to misplaced files.",
    myContribution:
      "Built the React frontend with document browsing, categorization UI, search interface, and responsive layout.",
    userOutcome:
      "Documents are organized and searchable from one interface instead of scattered folders.",
    description:
      "Document management frontend with search, categorization, and cloud-ready responsive design.",
    localImage: crystalImg,
    githubLink: "https://github.com/FizaShakil/Crystal.git",
    demoLink: "https://crystal-phi.vercel.app/",
    industry: "Document Management",
    proofPoints: ["Search UI", "Responsive Design", "Product Frontend"],
    techStack: ["React", "Tailwind CSS"],
  },
  {
    id: 7,
    title: "DevConnect — Developer Marketplace MVP",
    featured: false,
    context:
      "A marketplace MVP connecting businesses with developers — project posting, bidding, profiles, and agreements.",
    problem:
      "Businesses and freelancers lack a structured place to match projects with clear terms and transparent workflows.",
    myContribution:
      "Built the backend API — Node.js/Express server, MongoDB models, project posting, bid management, and user profile endpoints.",
    userOutcome:
      "A structured starting point for project discovery instead of unstructured outreach.",
    description:
      "Marketplace MVP backend with project posting, bidding system, and developer profiles.",
    localImage: apiImg,
    githubLink: "https://github.com/FizaShakil/DevConnect-lite.git",
    demoLink: "#",
    industry: "Marketplace",
    proofPoints: ["API Design", "MongoDB Models", "Marketplace MVP"],
    techStack: ["Node.js", "Express", "MongoDB"],
  },
];

export default projects;