import fashionistaImg from '../assets/fashionista_newImg.png';
import rmsImg from '../assets/rms.png';
import sumitupImg from '../assets/api-01_generated.jpg';
import glanceImg from '../assets/glance_Mockup.png';
import crystalImg from '../assets/crystal_mockup.png';
import apiImg from '../assets/api-01_generated.jpg';
import digitalPillarsImg from '../assets/digitalPillars.png';

const projects = [
  {
    id: 2,
    title: "Fashionista — B2B + B2C Commerce Platform",
    featured: true,
    tag: "B2B + B2C E-Commerce",
    context:
      "One platform serving two completely different buyers — retail customers shopping for themselves, and wholesale businesses purchasing in bulk. Same catalog, different rules.",
    problem:
      "Fashion sellers rely on social media DMs for orders. No structured catalog, no checkout, no wholesale pricing, no admin control. Retail and wholesale buyers clash in the same messy workflow.",
    problemShort:
      "Social-media selling with no wholesale support — retail and business buyers colliding in one messy workflow.",
    solution:
      "Built a full-stack commerce platform with context-aware pricing: retail customers see retail prices, approved wholesale buyers see wholesale pricing and MOQ — all through one storefront, one API, and one admin dashboard.",
    solutionShort:
      "Context-aware commerce: retail + wholesale pricing, approval-gated wholesale, server-authoritative checkout — one platform, two buyer types.",
    value:
      "One platform handles both retail and wholesale without separate systems. Store owners manage catalog, orders, and wholesale requests from a single dashboard.",
    valueShort:
      "One platform, two buyer types — retail and wholesale managed from a single dashboard.",
    userOutcome:
      "Retail customers shop normally. Wholesale buyers get approved, see bulk pricing, and order with MOQ — all through the same storefront.",
    businessValue:
      "Eliminates the need for separate retail and wholesale systems. One catalog, one admin, context-aware pricing that resolves correctly for every buyer type.",
    description:
      "B2B + B2C fashion e-commerce with context-aware pricing, wholesale approval workflows, server-authoritative checkout, and a full admin operations platform.",
    localImage: fashionistaImg,
    githubLink: "#",
    demoLink: "https://fashionista-client.onrender.com/",
    industry: "B2B + B2C E-Commerce",
    categories: ["E-commerce", "Dashboards"],
    proofPoints: ["B2B + B2C Pricing", "Wholesale Approval Flow", "Server-Authoritative Checkout"],
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
    categories: ["Restaurants", "Dashboards"],
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
    categories: ["SaaS", "AI"],
    proofPoints: ["End-to-End Ownership", "Real-Time Notifications", "AI Workflows"],
    techStack: ["React", "Node.js", "TypeScript", "PostgreSQL", "Email API"],
  },
  {
    id: 6,
    title: "Glance — Travel Booking UX",
    featured: true,
    index: "04",
    tag: "Product Frontend",
    context:
      "A travel booking platform where browsing destinations becomes booking stays — mood-based discovery, comparison-ready hotel cards, and transparent pricing.",
    problem:
      "Travel websites show beautiful destinations but give no guidance on choosing. Users are overwhelmed by options and leave before booking.",
    problemShort:
      "Travel sites overwhelm users with options instead of helping them decide — no decision path, no booking confidence.",
    solution:
      "Designed a traveler-first booking experience: mood-based filtering, curated stays, destination context pages, and a transparent booking widget with date-based pricing.",
    solutionShort:
      "Traveler-first UX: mood-based discovery, curated hotels, destination context, and transparent booking flow.",
    value:
      "A travel frontend where every screen serves a decision — discover destinations, compare stays, understand quality, book with confidence.",
    valueShort:
      "Every screen serves a decision — discover, compare, understand, book.",
    userOutcome:
      "Travelers narrow by mood, compare hotel cards with ratings and prices, read destination context, and book through a transparent flow with no hidden fees.",
    businessValue:
      "Demonstrates product UX thinking: information architecture that guides decisions, mobile-first design, and frontend architecture built for maintainability.",
    description:
      "Travel booking UX with mood-based discovery, curated hotel comparison, destination context pages, and a transparent booking widget.",
    localImage: glanceImg,
    demoLink: "https://glance-one.vercel.app/",
    industry: "Travel & Hospitality",
    categories: ["Travel & Tourism"],
    proofPoints: ["UX Design", "Mobile-First UI", "Booking Flow", "Product Frontend"],
    techStack: ["React", "Vite", "Tailwind CSS", "React Router", "Framer Motion"],
  },
  {
    id: 4,
    title: "Digital Pillars — Cinematic 3D Marketing Site",
    featured: true,
    tag: "3D Experience · Motion",
    context:
      "A marketing agency website built around an immersive 3D experience: one architectural Growth Pillar, glass data interfaces, and motion that carries the story instead of decorating it.",
    problem:
      "The previous site relied on AI-generated visuals that sat on top of the layout. Nothing connected the imagery to the type, spacing, or motion, so the site felt assembled instead of built.",
    problemShort:
      "AI imagery pasted onto the layout, with no connection to the type, spacing, or motion around it.",
    solution:
      "Built a cinematic 3D site around a single focal object: the Growth Pillar. A near-black base, one lime accent, glass performance cards, and scroll choreography with GSAP and Lenis.",
    solutionShort:
      "A cinematic 3D site built around one focal object: Growth Pillar, glass cards, restrained motion.",
    value:
      "The site feels custom rather than assembled. Services, proof points, and calls to action sit inside one visual system that holds from hero to footer.",
    valueShort:
      "One visual system holds from hero to footer: 3D, glass UI, and motion governed by the same rules.",
    userOutcome:
      "Visitors get a clear read of the agency's four services with one action per section, on desktop and on mobile, with a reduced-motion path available.",
    businessValue:
      "Shows how I solve complex frontend, UX, and visual problems: 3D in React, motion choreography, and a disciplined design system under real constraints.",
    description:
      "Cinematic marketing website with a Three.js focal object, glassmorphic data cards, GSAP scroll choreography, and a responsive black and lime design system.",
    localImage: digitalPillarsImg,
    githubLink: "https://github.com/FizaShakil/digital_pillars",
    demoLink: "https://digital-pillars-sandy.vercel.app/",
    industry: "Marketing & 3D Experience",
    categories: ["Marketing"],
    proofPoints: ["React Three Fiber", "GSAP Motion", "UI/UX Design"],
    techStack: ["React", "TypeScript", "Three.js", "GSAP", "Tailwind CSS"],
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
    categories: ["Marketing"],
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
    categories: ["Marketplace"],
    proofPoints: ["API Design", "MongoDB Models", "Marketplace MVP"],
    techStack: ["Node.js", "Express", "MongoDB"],
  },
];

export default projects;