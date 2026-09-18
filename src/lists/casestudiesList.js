const caseStudies = [
  {
    id: 2,
    title: "Fashionista — E-Commerce with Admin CMS",
    tag: "B2C E-Commerce Platform",
    tagline:
      "A complete shopping experience with authentication, cart, checkout, and store management — built full-stack.",
    context:
      "Fashionista is an e-commerce platform where customers browse and purchase products online, and store owners manage catalog, orders, and inventory from an admin CMS. It replaces informal social-media selling with a structured store.",
    problem:
      "Selling through social media made order tracking unreliable. There was no proper storefront with secure checkout, no way for customers to save accounts, and no admin panel to manage products and orders in one place.",
    solution:
      "I built a full-stack e-commerce system — customer-facing storefront with auth, cart, and checkout, plus an admin dashboard for product management, order tracking, and inventory control.",
    approach:
      "I started with the two users this product serves — shoppers and store owners — and designed around their separate workflows. Shoppers need a clean path from browsing to checkout; store owners need control over catalog, orders, and stock. The system gives each side its own interface over the same underlying product and order data.",
    hardPart:
      "Keeping the customer storefront and the admin CMS working on the same data without conflict. Products, orders, and stock have to stay consistent even though two very different interfaces read and write them.",
    hardPartSolution:
      "I kept product and order logic in a single API layer that both frontends use. The customer storefront only reads products and creates orders; the admin interface handles product management and order status. Because both sides go through the same business rules, an order placed by a customer appears correctly in the admin panel and stock updates stay accurate.",
    keyFeatures: [
      "Product catalog with categories and filtering",
      "Customer authentication with session management",
      "Shopping cart with a streamlined multi-step checkout",
      "Admin CMS for product, order, and inventory management",
    ],
    howItWorks: [
      "Customers browse the product catalog, filter by category, and view product details",
      "Logged-in users add items to cart and proceed through a streamlined checkout flow",
      "The backend processes orders, updates inventory, and stores order history",
      "Store owners log into the admin panel to manage products, view orders, and track inventory",
      "The entire flow is responsive — customers shop on mobile or desktop with the same experience",
    ],
    userOutcome: [
      "Customers complete purchases through a clear, secure checkout instead of manual messaging",
      "Repeat customers can log in and checkout faster with saved account details",
      "Store owners manage products and orders from one dashboard instead of scattered tools",
    ],
    businessValue: [
      "Replaces informal selling with a professional storefront that can scale",
      "Inventory updates with each order, reducing overselling and manual tracking",
      "Order history and admin visibility support better business decisions",
    ],
    architecture: [
      "Customer Storefront (React) — product browsing, cart, checkout, and account pages",
      "Admin Dashboard (React) — product CRUD, order management, and inventory views",
      "REST API (Express/Node.js) — handles auth, products, orders, and cart operations",
      "MongoDB — stores users, products, orders, and inventory data",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST API", "JWT Auth"],
    githubLink: "#",
    demoLink: "https://fashionista-client.onrender.com/",
    result:
      "A working commerce platform where shoppers can browse, purchase, and re-order, while store owners run catalog and orders from a single dashboard — replacing chaotic social-media selling with a structured store.",
    futureScope: [
      "Payment gateway integration (Stripe/PayPal)",
      "Order email notifications for customers and store owners",
      "Sales analytics dashboard in the admin panel",
    ],
  },
  {
    id: 3,
    title: "RMS — Restaurant Operations System",
    tag: "Business Operations",
    tagline:
      "Digital order flow, automated billing, and role-based dashboards for daily restaurant operations.",
    context:
      "RMS is a restaurant management system built for daily operational workflows — taking orders, coordinating kitchen prep, generating bills, tracking inventory, and giving managers visibility into sales.",
    problem:
      "The restaurant relied on paper order slips and manual billing. Orders got lost between front-of-house and kitchen, billing errors were common, and managers had no real-time view of operations during service.",
    solution:
      "I built a full-stack system where staff enter orders digitally, kitchen sees incoming orders immediately, bills generate automatically, and managers access sales and inventory from a dashboard.",
    approach:
      "I treated the restaurant itself as the user. The workflow runs from order to kitchen to bill, so I designed each role to see exactly what its job needs — no more, no less. That drove both the role-based access model and the screen-by-screen flow.",
    hardPart:
      "Designing role-based access so managers, servers, and kitchen staff each get the right view without revealing privileged data or cluttering their workflow — while keeping order data consistent across every role.",
    hardPartSolution:
      "I mapped each role to the actions its workflow actually requires, then enforced those limits in the backend rather than just hiding buttons in the UI. Orders are stored once and flow through the same pipeline, so the kitchen sees what servers entered and billing is generated from the same order data — nothing duplicated, nothing lost between shifts.",
    keyFeatures: [
      "Role-based access for managers, servers, and kitchen staff",
      "Digital order entry that flows to a kitchen display",
      "Automatic bill calculation from order data",
      "Inventory deduction and manager sales reporting",
    ],
    howItWorks: [
      "Staff log in with role-based credentials — managers see everything, servers see their tables, kitchen sees orders",
      "Servers enter orders through the interface; orders appear on the kitchen display in real time",
      "When service completes, the system calculates the bill automatically from order items",
      "Inventory deducts as items are served, giving managers visibility into stock levels",
      "Managers view sales reports and operational data from the dashboard",
    ],
    userOutcome: [
      "Orders reach the kitchen without paper slips getting lost",
      "Billing is consistent — every item ordered appears on the receipt",
      "Staff see only what they need, reducing confusion during busy service",
      "Managers check sales and inventory without manual counting",
    ],
    businessValue: [
      "Eliminates paper-based order tracking and manual billing errors",
      "Faster order-to-kitchen flow during peak hours",
      "Inventory visibility prevents running out of popular items unexpectedly",
      "Operational data supports better staffing and menu decisions",
    ],
    architecture: [
      "Staff Interface (React) — order entry, table management, and billing views",
      "Kitchen Display (React) — incoming orders organized for preparation",
      "Manager Dashboard (React) — sales reports, inventory, and staff overview",
      "REST API (Express/Node.js) — order processing, billing calculations, role-based access",
      "MySQL Database — orders, menu, inventory, users, and sales data",
    ],
    techStack: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS", "REST API", "Role-Based Auth"],
    githubLink: "https://github.com/FizaShakil/Restaurant-Management-System.git",
    demoLink:
      "https://www.linkedin.com/posts/fiza-shakil_finally-its-completed-a-full-stack-restaurant-activity-7340391306973569024-djg5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEITf3UBUBhyM3ABzp_Zav9FuqWXLJqiWaE",
    result:
      "A single system that replaced paper slips and manual billing: orders flow to the kitchen instantly, bills are calculated automatically from order data, and managers get real-time sales and inventory visibility.",
    futureScope: [
      "Online ordering for customers before arrival",
      "Real-time low-stock alerts for kitchen and managers",
      "Multi-location support for restaurant chains",
    ],
  },
  {
    id: 1,
    title: "SumItUp — AI Meeting Intelligence Platform",
    tag: "AI-Powered Product",
    tagline:
      "End-to-end ownership of real-time email notifications inside an AI-powered meeting assistant.",
    context:
      "SumItUp is an AI meeting intelligence platform that transcribes online and offline meetings, generates summaries, and extracts key topics and action items. It's built for teams who need meeting context without manual note-taking.",
    problem:
      "After meetings end, context gets lost. Users had to manually check the dashboard to see if processing finished and copy summaries themselves. There was no reliable way to deliver meeting intelligence automatically — which meant follow-ups were inconsistent and easy to miss.",
    solution:
      "I built a real-time email notification system that connects the dashboard to backend delivery logic. When a meeting finishes processing, users can trigger — or the system automatically initiates — an email with the summary and action items.",
    approach:
      "The product's value only lands if meeting intelligence reaches the people who need it. So I traced the journey a finished meeting takes — from AI processing, to the dashboard, to the user's inbox — and designed the notification system to make that handoff automatic and reliable.",
    hardPart:
      "Reliability. A notification pipeline has many failure points — a meeting still processing, an invalid email payload, a failed delivery call. Without careful state handling, users either get emails for meetings that aren't ready or never get one they expected.",
    hardPartSolution:
      "I made the flow state-driven. The backend validates the meeting status before composing any payload, so an email can only be sent for a meeting that actually finished processing. Delivery state is tracked across the lifecycle, errors are caught with retry logic, and the dashboard reflects the real status — so users always know what happened.",
    keyFeatures: [
      "Dashboard trigger UI with clear queued/sent state",
      "Backend endpoints that validate meeting status before delivery",
      "Email payload composition from summary and action items",
      "Delivery tracking with error handling and retry logic",
    ],
    howItWorks: [
      "A meeting is recorded and processed through SumItUp's AI pipeline (transcription → summary → action items)",
      "Once processing completes, the dashboard shows the meeting results with a notification trigger",
      "The trigger calls the backend API, which validates the meeting state and prepares the email content",
      "The backend queues and delivers the email with the summary and action items to the user's inbox",
      "The dashboard reflects delivery status so users know the notification was sent successfully",
    ],
    userOutcome: [
      "Users receive meeting summaries in their inbox without manually checking the dashboard",
      "Action items arrive alongside the summary, making post-meeting follow-up straightforward",
      "The notification flow feels reliable — users trust that they'll be informed when processing completes",
    ],
    businessValue: [
      "Reduces manual follow-up work after every meeting",
      "Makes the AI meeting assistant more useful inside real daily workflows",
      "Improves product reliability — a core feature users depend on, not an optional add-on",
      "Supports scalability as more meetings are processed without requiring manual intervention",
    ],
    architecture: [
      "Dashboard (React) — displays meeting results and exposes the notification trigger",
      "API Layer (Node.js/Express) — validates requests, composes email payloads, manages delivery state",
      "AI Processing Pipeline — transcribes audio, generates summaries and action items",
      "Email Service — delivers notifications with summary content to the user's inbox",
      "Database — stores meeting records, processing status, and notification delivery logs",
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Email API", "REST API"],
    githubLink: "https://github.com/SumitUp-AI/sumitup-ai-meet",
    demoLink: "#",
    result:
      "A notification flow that teams can rely on: meeting intelligence arrives in the inbox automatically, delivery state is visible in the dashboard, and the backend only sends emails for meetings that are genuinely ready.",
    futureScope: [
      "Scheduled digest emails for multiple meetings",
      "In-app notification center alongside email delivery",
      "User-configurable notification preferences per meeting type",
    ],
  },
  {
    id: 6,
    title: "Glance — Travel Booking Frontend",
    tagline: "Destination discovery and booking flow — mobile-first product frontend.",
    context:
      "Glance is a travel booking platform frontend focused on showcasing destinations beautifully and making the booking process feel effortless on any device.",
    problem:
      "Travel websites often overwhelm users with cluttered layouts and slow mobile experiences — causing people to leave before booking.",
    solution:
      "I designed and built a React frontend with destination showcases, filtering, mobile-first responsive layout, and a step-by-step booking flow.",
    approach:
      "Research shows most travel browsing happens on mobile, so I built mobile-first. Every screen was designed around a clear visual hierarchy: beautiful destinations first, decision-making information second, and a booking flow with no more than one clear action at each step.",
    howItWorks: [
      "Users browse destinations with visual cards and category filters",
      "Destination detail pages provide the information needed to decide",
      "A step-by-step booking flow guides users through date and detail selection",
      "The layout adapts seamlessly from mobile to desktop",
    ],
    userOutcome: [
      "Browsing destinations feels visual and engaging, not overwhelming",
      "Mobile users get the same quality experience as desktop users",
      "The booking flow has clear steps without confusion about what's next",
    ],
    businessValue: [
      "Demonstrates product UI skills where visual presentation drives user engagement",
      "Mobile-first approach reflects how most users browse travel products today",
    ],
    architecture: [
      "React SPA — destination browsing, filtering, and booking flow",
      "Mobile-first responsive design with Tailwind CSS",
    ],
    techStack: ["React", "Tailwind CSS", "Responsive Design"],
    demoLink: "https://glance-one.vercel.app/",
    result:
      "A visual, mobile-first travel frontend where destination discovery feels effortless and the booking flow guides users one clear step at a time.",
    futureScope: [
      "Backend integration for real availability and pricing",
      "User accounts and booking history",
    ],
  },
  {
    id: 5,
    title: "Crystal — Digital Document Management",
    tagline: "Organized document browsing and search — a frontend-focused product interface.",
    context:
      "Crystal is a document management interface for organizing, categorizing, and searching digital files — designed as a clean, user-facing product experience.",
    problem:
      "Documents scattered across folders are hard to find. Users waste time searching and lose track of important files.",
    solution:
      "I built a React frontend with an inbox-style interface, document categorization, search functionality, and responsive design for access from any device.",
    approach:
      "Findability was the core problem, so search and categorization drive the interface. I designed a clean visual hierarchy so documents can be located quickly — by category or keyword — without the interface getting in the way.",
    howItWorks: [
      "Users view documents in an organized inbox with category filters",
      "Search finds documents by keyword across the collection",
      "Document previews let users confirm they have the right file before opening",
      "The interface adapts to mobile and desktop screen sizes",
    ],
    userOutcome: [
      "Documents are findable through search instead of manual folder browsing",
      "The interface works on mobile for access away from a desk",
    ],
    businessValue: [
      "Demonstrates ability to build data-heavy product interfaces with good UX",
      "Shows frontend craft for products where findability and clarity matter",
    ],
    architecture: [
      "React SPA — document inbox, search, and category management UI",
      "Responsive design — mobile-first layout with Tailwind CSS",
    ],
    techStack: ["React", "Tailwind CSS", "Responsive Design"],
    githubLink: "https://github.com/FizaShakil/Crystal.git",
    demoLink: "https://crystal-phi.vercel.app/",
    result:
      "A fast, searchable document interface that makes finding files simple — on mobile or desktop.",
    futureScope: [
      "Backend storage integration for file upload and persistence",
      "Automatic document categorization based on content",
    ],
  },
  {
    id: 7,
    title: "DevConnect — Developer Marketplace MVP",
    tagline: "Marketplace backend MVP — project posting, bidding, and developer profiles.",
    context:
      "DevConnect is a marketplace MVP connecting businesses with developers through project posting, transparent bidding, and profile-based discovery.",
    problem:
      "Businesses and freelancers lack a structured platform for matching projects with clear terms, pricing, and workflow.",
    solution:
      "I built the backend API — project creation, bid management, user profiles, and agreement tracking through a Node.js/Express server with MongoDB.",
    approach:
      "A marketplace has two distinct users trying to reach each other, so the data model had to support a two-sided flow from day one. I designed the API around concrete workflows — a business posts a project, developers bid, both sides reach an agreement.",
    howItWorks: [
      "Businesses create project listings with requirements, budget, and timeline",
      "Developers browse projects and submit bids with rates and proposed timelines",
      "Both sides manage agreements and project status through the API",
      "Developer profiles showcase skills and past work for hiring decisions",
    ],
    userOutcome: [
      "Projects and bids are structured instead of scattered across messages",
      "Developers can discover opportunities in one place",
    ],
    businessValue: [
      "MVP architecture demonstrates API design for multi-sided marketplace workflows",
      "Foundation for adding frontend, payments, and messaging in future iterations",
    ],
    architecture: [
      "REST API (Express/Node.js) — project, bid, and user endpoints",
      "MongoDB — document models for projects, bids, profiles, and agreements",
    ],
    techStack: ["Node.js", "Express", "MongoDB", "REST API"],
    githubLink: "https://github.com/FizaShakil/DevConnect-lite.git",
    demoLink: "#",
    result:
      "A working backend MVP where projects, bids, and agreements are structured and trackable — a foundation ready for a frontend and payments.",
    futureScope: [
      "Frontend for businesses and developers",
      "Secure payment escrow system",
      "In-platform messaging",
    ],
  },
];

export default caseStudies;