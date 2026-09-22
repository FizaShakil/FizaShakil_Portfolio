const caseStudies = [
  {
    id: 2,
    title: "Fashionista — B2B + B2C Commerce Platform",
    tag: "B2B + B2C E-Commerce",
    tagline:
      "Turning fragmented fashion selling into one structured commerce experience — retail and wholesale, one platform.",
    context:
      "Fashionista is a fashion e-commerce platform that serves two fundamentally different buyers: retail customers shopping for themselves, and business buyers purchasing wholesale. It replaces informal social-media selling with a structured commerce system where pricing, eligibility, and checkout all adapt to who is buying.",
    problem:
      "Selling through social media made order tracking unreliable. There was no proper storefront with secure checkout, no way to differentiate retail and wholesale buyers, and no admin panel to manage products, orders, and wholesale requests in one place.",
    solution:
      "I built a full-stack commerce platform with context-aware pricing — retail customers see retail prices, approved wholesale buyers see wholesale pricing and MOQ requirements. One storefront, one API layer, one admin dashboard. The backend resolves which pricing context applies, not the frontend.",
    approach:
      "I started with the two distinct buying contexts this product serves. Retail customers need a clean path from browsing to checkout. Wholesale buyers need approval-gated access to bulk pricing and minimum order quantities. The system gives each context its own rules while sharing the same catalog, cart, and order infrastructure.",
    hardPart:
      "One product cannot simply have one price. The same sweater might retail at Rs. 1,799, wholesale at Rs. 1,200, or go on sale at Rs. 1,499. The cart needs to validate pricing server-side. Orders need to snapshot what the customer actually paid, not what the price is today. And wholesale eligibility is a relationship, not a discount code.",
    hardPartSolution:
      "I kept all pricing logic in the API layer. When a customer views a product, the backend resolves which price to show based on their account type and wholesale approval status. When an order is placed, the backend re-evaluates pricing, validates MOQ, and records the actual unit price paid. This protects against stale prices and client-side manipulation.",
    keyFeatures: [
      "Context-aware pricing — retail, wholesale, and sale prices resolved server-side",
      "Wholesale approval workflow — customers apply, store owner reviews, approved buyers unlock bulk pricing",
      "Product-specific MOQ — minimum order quantities set per product, not globally",
      "Server-authoritative checkout — pricing re-evaluated at order time, historical price snapshots preserved",
      "Admin CMS — product management, order tracking, wholesale request review, and revenue analytics",
    ],
    howItWorks: [
      "Retail customers browse the catalog, filter by category, and checkout at retail prices",
      "Wholesale buyers apply for approval through the storefront",
      "The store owner reviews applications in the admin panel and approves qualified buyers",
      "Approved buyers see wholesale prices and MOQ requirements across the catalog",
      "The cart validates pricing and MOQ server-side before placing an order",
      "Orders snapshot the price paid at purchase time — historical orders are unaffected by future price changes",
      "The admin dashboard shows revenue split by channel (retail vs. wholesale), top products, and order volume",
    ],
    userOutcome: [
      "Retail customers get a clean shopping experience with search, filtering, and secure checkout",
      "Wholesale buyers get approved once, then shop with bulk pricing through the same storefront",
      "Store owners manage catalog, orders, wholesale requests, and revenue from one admin dashboard",
    ],
    businessValue: [
      "One platform replaces separate retail and wholesale systems",
      "Context-aware pricing eliminates manual price negotiation for wholesale buyers",
      "Server-authoritative checkout protects against pricing errors and manipulation",
      "Revenue analytics by channel support better business decisions",
    ],
    architecture: [
      "Customer Storefront (React) — product browsing with filters, cart, checkout, wholesale application, and account management",
      "Admin Dashboard (React) — product CRUD with multi-price management, order management, wholesale request review, revenue analytics",
      "REST API (Express/Node.js) — JWT auth, pricing resolution service, cart/order processing with server validation, wholesale eligibility logic",
      "MongoDB — products with retail/wholesale/sale prices, orders with historical price snapshots, customer accounts with wholesale status",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST API", "JWT Auth"],
    githubLink: "#",
    demoLink: "https://fashionista-client.onrender.com/",
    result:
      "A commerce platform where retail and wholesale coexist naturally — context-aware pricing resolves correctly for every buyer type, wholesale is an approval-gated relationship rather than a discount code, and the admin dashboard gives the store owner full operational control over both channels.",
    futureScope: [
      "Payment gateway integration (Stripe/PayPal)",
      "Order email notifications for customers and store owners",
      "Sales analytics dashboard with trend visualization in the admin panel",
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
    title: "Glance — Travel Booking UX",
    tag: "Product Frontend",
    tagline:
      "A traveler-first approach to destination discovery and hotel booking.",
    context:
      "Glance is a travel booking platform that turns destination browsing into booking decisions. It serves travelers who need to discover destinations, compare stays, understand quality, and book with confidence — all through a frontend designed around the decision journey.",
    problem:
      "Most travel platforms overwhelm users with options instead of guiding decisions. Beautiful destination photography exists, but there is no decision infrastructure — no way to narrow by mood, compare on quality, or understand what makes each stay different before committing to dates.",
    solution:
      "I built a traveler-first booking experience with mood-based filtering (Beach, Romantic, City, Nature, Luxury, Hidden), curated hotel cards showing the right information hierarchy, destination context pages with tabbed content, and a transparent booking widget with date-based pricing and room selection.",
    approach:
      "I started by asking what a traveler actually needs when choosing where to stay — not what a travel platform typically shows. The answer was better information architecture: mood-based discovery, consistent comparison through card design, context-setting destination pages, and a booking flow that feels like a natural next step rather than a separate transaction.",
    hardPart:
      "The same hotel can look different depending on what a traveler cares about. A beach resort appeals to someone seeking relaxation but not to someone looking for city nightlife. The interface needs to help travelers discover what matches their mood without filtering out quality options.",
    hardPartSolution:
      "I designed mood-based filters as the primary discovery mechanism instead of category checkboxes. Each destination page sets context before showing listings. Hotel cards show a consistent information hierarchy — image, name, location, rating, price, amenities — so travelers can compare naturally. The booking widget stays visible but does not dominate until the traveler is ready to commit.",
    keyFeatures: [
      "Mood-based filtering — Beach, Romantic, City, Nature, Luxury, Hidden categories that match traveler intent",
      "Curated hotel cards — consistent information hierarchy with rating, price, location, and amenity badges",
      "Destination context pages — region info, tabbed content (About, Why visit, History), and curated stays count",
      "Transparent booking widget — date-based pricing, room selection, tax breakdown, and clear Reserve CTA",
      "Mobile-first responsive design — every screen works from 320px to wide desktop",
    ],
    howItWorks: [
      "The landing page leads with a traveler-centric value proposition, search bar, and curated stats (15 destinations, 24 stays, 9.0 rating)",
      "Travelers browse destinations with visual cards or use the search bar with Where, Check-in, and Guests fields",
      "Destination pages set context with region info, average rating, and tabbed content before showing curated stays",
      "Stays listing pages show filter sidebar (Mood, Guest Rating, Price) and hotel cards with save badges",
      "Hotel detail pages show image carousel, highlights, amenities, room options, and a sticky booking widget",
      "The booking widget displays date-based pricing, tax breakdown, and a clear Reserve button as the final step",
    ],
    userOutcome: [
      "Travelers discover destinations by mood, not just category — matching how people actually choose where to stay",
      "Hotel comparison becomes natural through consistent card design with rating, price, and amenity information",
      "Destination pages set context before listings, helping travelers understand what makes each location different",
      "The booking flow feels like a natural next step — transparent pricing with no hidden fees or confusion",
    ],
    businessValue: [
      "Demonstrates product UX thinking: every design decision serves a real traveler need",
      "Mobile-first approach reflects how most travelers browse and book on the go",
      "Information architecture that guides decisions instead of overwhelming with options",
      "Frontend architecture built for component reuse and maintainability",
    ],
    architecture: [
      "Landing Page — hero with search bar, curated stats, and destination-first value proposition",
      "Destination Pages — region context, tabbed content, and curated stays with average ratings",
      "Stays Listing — filter sidebar with mood, rating, and price controls, hotel comparison cards",
      "Hotel Detail — image carousel, highlights, amenities, rooms, and sticky booking widget with pricing",
      "React SPA — component-driven architecture with React Router for navigation across five page types",
      "Responsive System — Tailwind CSS powering mobile-first layout from 320px to wide desktop",
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "React Router", "Framer Motion", "Responsive Design"],
    demoLink: "https://glance-one.vercel.app/",
    result:
      "A travel frontend where every screen serves a decision — from mood-based discovery through destination context to transparent booking. The interface guides travelers with confidence instead of overwhelming them with options.",
    futureScope: [
      "Backend integration for real availability and dynamic pricing",
      "User accounts with saved stays and booking history",
      "Payment gateway integration for direct booking",
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