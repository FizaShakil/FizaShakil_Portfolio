import { Link } from 'react-router-dom';
import SEO from './SEO';
import { ArrowLeft, ArrowRight } from './Reusable-Components/Arrow';
import { useScrollReveal } from '../hooks/useScrollReveal';
import productPageImg from '../assets/Fashionista-productPage.png';
import dashboardImg from '../assets/dashboardFashionista.png';
import wholesaleImg from '../assets/fashionistaWholesale.png';
import heroImg from '../assets/fashionista_newImg.png';

const project = {
  title: 'Fashionista',
  descriptor: 'B2B + B2C Fashion E-Commerce Platform',
  tagline:
    'Turning fragmented fashion selling into one structured commerce experience.',
  demoLink: 'https://fashionista-client.onrender.com/',
  role: 'Full-Stack Developer',
  platform: 'Customer Storefront + Admin Platform',
  stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'REST API', 'JWT Auth'],
  focus: ['Commerce', 'Product Discovery', 'Wholesale', 'Admin Operations'],
};

const snapshot = [
  { label: 'Product', value: 'B2B + B2C Fashion E-Commerce' },
  { label: 'Role', value: 'Full-Stack Developer' },
  { label: 'Platform', value: 'Customer Storefront + Admin Platform' },
  { label: 'Core Stack', value: 'React / Node.js / Express / MongoDB' },
  { label: 'Focus', value: 'Commerce · Discovery · Wholesale · Admin' },
];

const navSections = [
  { id: 'cs-overview', label: 'Overview' },
  { id: 'cs-problem', label: 'Problem' },
  { id: 'cs-solution', label: 'Solution' },
  { id: 'cs-experience', label: 'Experience' },
  { id: 'cs-wholesale', label: 'Wholesale' },
  { id: 'cs-admin', label: 'Admin' },
  { id: 'cs-architecture', label: 'Architecture' },
  { id: 'cs-hard', label: 'Hard Problems' },
  { id: 'cs-outcome', label: 'Outcome' },
];

const Reveal = ({ children, className = '' }) => {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={`reveal-fade-up ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

const StickyNav = () => (
  <nav className="sticky top-24 flex flex-col gap-1" aria-label="Case study sections">
    {navSections.map((s) => (
      <a
        key={s.id}
        href={`#${s.id}`}
        className="flex items-center gap-3 py-2 text-caption text-ink-faint hover:text-accent-soft transition-colors"
      >
        <span>{s.label}</span>
      </a>
    ))}
  </nav>
);

const ScreenshotFrame = ({ src, alt, caption, className = '' }) => (
  <figure className={`flex flex-col gap-3 ${className}`}>
    <div className="img-zoom border border-line overflow-hidden bg-base-2">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain max-h-[50vh] sm:max-h-[60vh]"
        loading="lazy"
      />
    </div>
    {caption && (
      <figcaption className="text-caption text-ink-faint leading-relaxed">{caption}</figcaption>
    )}
  </figure>
);

const SnapshotBar = () => (
  <section className="border-b border-line">
    <div className="section-inner py-6 sm:py-8 lg:py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
        {snapshot.map((item) => (
          <div key={item.label} className="flex flex-col gap-1">
            <span className="text-kicker text-ink-faint">{item.label}</span>
            <span className="text-body text-ink font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section id="cs-problem" className="scroll-mt-nav">
    <Reveal>
      <div className="hairline-t pt-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-kicker text-accent">01</span>
          <p className="text-kicker text-ink-faint">The Business Problem</p>
        </div>
        <h2 className="text-subheading md:text-heading font-medium text-ink text-balance mt-3">
          Selling fashion through social media is not a business model.
        </h2>
      </div>
    </Reveal>

    <Reveal>
      <div className="flex flex-col gap-6 text-body text-ink-muted leading-relaxed max-w-prose">
        <p className="drop-cap">
          Fashion sellers often start on Instagram and WhatsApp -- posting products, taking orders
          through DMs, and tracking payments manually. It works until it doesn't. Orders get lost
          in message threads. Customers ask the same questions repeatedly. There is no way to see what is
          in stock, what's sold, or who owes what.
        </p>
        <p>
          The business needed a real storefront: product pages customers can browse, a cart they
          can trust, checkout that works on any device, and an admin panel where the store owner
          can manage everything without scattering data across screenshots and spreadsheets.
        </p>
      </div>
    </Reveal>

    <Reveal>
      <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-3 sm:gap-4">
        {[
          { problem: 'No structured catalog', detail: 'Products lived in social media posts with no filtering, search, or inventory tracking.' },
          { problem: 'Manual order handling', detail: 'Orders arrived through DMs. No systematic tracking, no order history, no automation.' },
          { problem: 'No customer accounts', detail: "Customers couldn't save addresses, reorder, or track purchases -- every transaction started from scratch." },
          { problem: 'Scattered operations', detail: 'Product management, orders, and customer data lived in separate tools with no unified view.' },
        ].map((item) => (
          <div key={item.problem} className="border border-line p-5 flex flex-col gap-2">
            <span className="text-body font-medium text-ink">{item.problem}</span>
            <span className="text-caption text-ink-faint leading-relaxed">{item.detail}</span>
          </div>
        ))}
      </div>
    </Reveal>
  </section>
);

const ComplexitySection = () => (
  <section id="cs-complexity" className="scroll-mt-nav">
    <Reveal>
      <div className="hairline-t pt-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-kicker text-accent">02</span>
          <p className="text-kicker text-ink-faint">The Real Complexity</p>
        </div>
        <h2 className="text-subheading md:text-heading font-medium text-ink text-balance mt-3">
          One catalog. Two customer types. Different rules for each.
        </h2>
      </div>
    </Reveal>

    <Reveal>
      <div className="flex flex-col gap-6 text-body text-ink-muted leading-relaxed max-w-prose">
        <p>
          Fashionista isn't a simple product catalog. It supports two fundamentally different
          buying contexts -- retail customers shopping for themselves, and business buyers
          purchasing wholesale. Each context has different pricing, different minimum order
          quantities, and different eligibility rules.
        </p>
        <p>
          A product doesn't just have one price. It has a retail price, a wholesale price,
          and potentially a sale price -- and the system needs to show the right one based on
          who's looking. The cart has to validate pricing server-side. Orders need to remember
          what the customer actually paid, not what the price is today.
        </p>
      </div>
    </Reveal>

    <Reveal>
      <div className="mt-8 sm:mt-10 flex flex-col gap-3">
        {[
          {
            challenge: 'Context-aware pricing',
            detail: 'Retail customers see retail prices. Approved wholesale buyers see wholesale pricing. Sale prices apply selectively. The backend resolves which price applies -- not the frontend.',
          },
          {
            challenge: 'Wholesale eligibility',
            detail: 'Wholesale access is not automatic. Customers apply, the store owner reviews, and only approved accounts see wholesale pricing and MOQ requirements.',
          },
          {
            challenge: 'Product-specific MOQ',
            detail: 'Minimum order quantities aren\'t global -- they\'re set per product. A wholesale buyer might need 50 units of one item but only 10 of another.',
          },
          {
            challenge: 'Server-authoritative checkout',
            detail: 'The browser is not the source of truth. When an order is placed, the backend re-evaluates pricing, validates MOQ, and snapshots the actual unit price paid.',
          },
        ].map((item) => (
          <div key={item.challenge} className="border-l-2 border-accent bg-base-2 px-5 py-4">
            <p className="text-body font-medium text-ink">{item.challenge}</p>
            <p className="text-caption text-ink-muted leading-relaxed mt-1">{item.detail}</p>
          </div>
        ))}
      </div>
    </Reveal>
  </section>
);

const SolutionOverview = () => (
  <section id="cs-solution" className="scroll-mt-nav">
    <Reveal>
      <div className="hairline-t pt-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-kicker text-accent">03</span>
          <p className="text-kicker text-ink-faint">The Solution</p>
        </div>
        <h2 className="text-subheading md:text-heading font-medium text-ink text-balance mt-3">
          A complete commerce system -- not just a storefront.
        </h2>
      </div>
    </Reveal>

    <Reveal>
      <div className="flex flex-col gap-6 text-body text-ink-muted leading-relaxed max-w-prose">
        <p>
          I built a full-stack commerce platform with three interconnected parts: a customer-facing
          storefront for browsing and purchasing, a wholesale program with approval-gated pricing,
          and an admin operations platform for managing the entire business.
        </p>
        <p>
          All three share the same data layer and API. Products, orders, customers, and pricing
          flow through a single business logic layer -- so a customer's order appears instantly
          in the admin dashboard, and a price change in admin immediately affects what customers see.
        </p>
      </div>
    </Reveal>

    <Reveal>
      <ScreenshotFrame
        src={heroImg}
        alt="Fashionista storefront -- contemporary fashion for everyday life with retail and wholesale shopping"
        caption="The customer storefront: retail shopping with wholesale access for approved business buyers."
        className="mt-8 sm:mt-10"
      />
    </Reveal>
  </section>
);

const ExperienceSection = () => (
  <section id="cs-experience" className="scroll-mt-nav">
    <Reveal>
      <div className="hairline-t pt-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-kicker text-accent">04</span>
          <p className="text-kicker text-ink-faint">Customer Experience</p>
        </div>
        <h2 className="text-subheading md:text-heading font-medium text-ink text-balance mt-3">
          From browsing to checkout -- one clear path.
        </h2>
      </div>
    </Reveal>

    <Reveal>
      <div className="flex flex-col gap-6 text-body text-ink-muted leading-relaxed max-w-prose">
        <p>
          The storefront is designed around a single goal: help customers find the right product
          and complete a purchase without friction. Every screen -- from the catalog to the product
          detail page to the cart and checkout -- follows a clear visual hierarchy.
        </p>
        <p>
          Product discovery is driven by filtering (category, color, price range, sale status),
          search, and sorting. Customers can narrow a catalog of hundreds down to exactly what
          they're looking for in a few clicks.
        </p>
      </div>
    </Reveal>

    <Reveal>
      <ScreenshotFrame
        src={productPageImg}
        alt="Fashionista product catalog with search, category filters, color filter, price range, and sort options"
        className="mt-8 sm:mt-10"
      />
    </Reveal>

    <Reveal>
      <div className="mt-8 sm:mt-10 grid sm:grid-cols-3 gap-3 sm:gap-4">
        {[
          { feature: 'Product Discovery', detail: 'Search, category, color, price range, and sale filters help customers find specific products quickly.' },
          { feature: 'Cart & Checkout', detail: 'Multi-step checkout with saved account details for returning customers. Server validates pricing at every step.' },
          { feature: 'Account System', detail: 'Customer authentication with session management. Saved profiles speed up repeat purchases.' },
        ].map((item) => (
          <div key={item.feature} className="border border-line p-5 flex flex-col gap-2">
            <span className="text-body font-medium text-ink">{item.feature}</span>
            <span className="text-caption text-ink-faint leading-relaxed">{item.detail}</span>
          </div>
        ))}
      </div>
    </Reveal>
  </section>
);

const WholesaleSection = () => (
  <section id="cs-wholesale" className="scroll-mt-nav">
    <Reveal>
      <div className="hairline-t pt-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-kicker text-accent">05</span>
          <p className="text-kicker text-ink-faint">Wholesale &amp; B2B</p>
        </div>
        <h2 className="text-subheading md:text-heading font-medium text-ink text-balance mt-3">
          Wholesale is not just a discount. It's a different buying context.
        </h2>
      </div>
    </Reveal>

    <Reveal>
      <div className="flex flex-col gap-6 text-body text-ink-muted leading-relaxed max-w-prose">
        <p>
          The wholesale program gives approved business buyers access to wholesale pricing and
          product-specific minimum order quantities -- through the same catalog, cart, and checkout
          they already use. No separate wholesale portal. No separate login.
        </p>
        <p>
          A boutique owner browsing products sees wholesale prices automatically. A retail
          customer sees retail prices. The system resolves which context applies based on the
          customer's approval status and the product's wholesale eligibility.
        </p>
      </div>
    </Reveal>

    <Reveal>
      <ScreenshotFrame
        src={wholesaleImg}
        alt="Fashionista wholesale program -- buy wholesale in bulk with business pricing and product-specific MOQ"
        className="mt-8 sm:mt-10"
      />
    </Reveal>

    <Reveal>
      <div className="mt-8 sm:mt-10 border border-line p-5 sm:p-6 lg:p-8">
        <p className="kicker text-ink-faint mb-4">Wholesale Flow</p>
        <div className="flex flex-col gap-3">
          {[
            { step: '01', label: 'Customer applies', detail: 'A business buyer requests wholesale access through the storefront.' },
            { step: '02', label: 'Store owner reviews', detail: 'The admin panel shows pending requests. The owner approves or declines.' },
            { step: '03', label: 'Pricing unlocks', detail: 'Approved buyers see wholesale prices and MOQ requirements across the catalog.' },
            { step: '04', label: 'Cart validates', detail: 'The backend enforces MOQ per product and applies wholesale pricing at checkout.' },
            { step: '05', label: 'Order records', detail: 'The order snapshot captures the wholesale price paid -- not the current listing price.' },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 items-start">
              <span className="font-mono text-kicker text-accent shrink-0 mt-0.5">{item.step}</span>
              <div>
                <span className="text-body font-medium text-ink">{item.label}</span>
                <p className="text-caption text-ink-muted leading-relaxed mt-0.5">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  </section>
);

const AdminSection = () => (
  <section id="cs-admin" className="scroll-mt-nav">
    <Reveal>
      <div className="hairline-t pt-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-kicker text-accent">06</span>
          <p className="text-kicker text-ink-faint">Admin Operations</p>
        </div>
        <h2 className="text-subheading md:text-heading font-medium text-ink text-balance mt-3">
          The business owner's command center.
        </h2>
      </div>
    </Reveal>

    <Reveal>
      <div className="flex flex-col gap-6 text-body text-ink-muted leading-relaxed max-w-prose">
        <p>
          The admin platform gives the store owner full operational control -- from catalog
          management to order tracking to wholesale request approval. It's not an afterthought;
          it's half the product.
        </p>
        <p>
          The dashboard surfaces the metrics that matter: total revenue, order volume split by
          channel (retail vs. wholesale), customer count, product inventory, and wholesale request
          status. Everything the owner needs to run the business from one screen.
        </p>
      </div>
    </Reveal>

    <Reveal>
      <ScreenshotFrame
        src={dashboardImg}
        alt="Fashionista admin dashboard showing revenue, orders by type, wholesale requests, and product management"
        className="mt-8 sm:mt-10"
      />
    </Reveal>

    <Reveal>
      <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {[
          { area: 'Product Management', detail: 'Full CRUD for products, categories, pricing (retail + wholesale + sale), and inventory.' },
          { area: 'Order Visibility', detail: 'All orders in one view -- retail and wholesale -- with status tracking and order details.' },
          { area: 'Wholesale Requests', detail: 'Review, approve, or decline wholesale applications. Approved buyers auto-unlock wholesale pricing.' },
          { area: 'Customer Management', detail: 'View all registered customers, their order history, and wholesale approval status.' },
          { area: 'Revenue Analytics', detail: 'Revenue split by channel, top products by revenue, order volume trends -- all from the dashboard.' },
          { area: 'Category Management', detail: 'Organize products into browsable categories that power the storefront filtering.' },
        ].map((item) => (
          <div key={item.area} className="border border-line p-5 flex flex-col gap-2">
            <span className="text-body font-medium text-ink">{item.area}</span>
            <span className="text-caption text-ink-faint leading-relaxed">{item.detail}</span>
          </div>
        ))}
      </div>
    </Reveal>
  </section>
);

const ArchitectureSection = () => (
  <section id="cs-architecture" className="scroll-mt-nav">
    <Reveal>
      <div className="hairline-t pt-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-kicker text-accent">07</span>
          <p className="text-kicker text-ink-faint">Architecture</p>
        </div>
        <h2 className="text-subheading md:text-heading font-medium text-ink text-balance mt-3">
          Two frontends. One API. One data layer.
        </h2>
      </div>
    </Reveal>

    <Reveal>
      <div className="flex flex-col gap-6 text-body text-ink-muted leading-relaxed max-w-prose">
        <p>
          The architecture is built around a single principle: both the customer storefront and
          the admin platform operate on the same data through the same API. There's no data
          synchronization, no duplicate logic, no separate databases.
        </p>
      </div>
    </Reveal>

    <Reveal>
      <div className="mt-8 sm:mt-10 border border-line overflow-hidden">
        <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-line">
          <div className="p-6 flex flex-col gap-3">
            <span className="text-kicker text-accent">Customer Storefront</span>
            <ul className="flex flex-col gap-2 text-caption text-ink-muted leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Product browsing, search, filtering
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Cart with context-aware pricing
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Multi-step checkout
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Customer authentication &amp; accounts
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Wholesale application &amp; status
              </li>
            </ul>
          </div>
          <div className="p-6 flex flex-col gap-3 bg-base-2">
            <span className="text-kicker text-accent">REST API + Business Logic</span>
            <ul className="flex flex-col gap-2 text-caption text-ink-muted leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                JWT authentication &amp; role-based access
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Product &amp; category APIs
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Pricing resolution (retail / wholesale / sale)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Cart &amp; order processing with server validation
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Wholesale eligibility &amp; MOQ enforcement
              </li>
            </ul>
          </div>
          <div className="p-6 flex flex-col gap-3">
            <span className="text-kicker text-accent">Admin Platform</span>
            <ul className="flex flex-col gap-2 text-caption text-ink-muted leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Dashboard with revenue &amp; order analytics
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Product CRUD with multi-price management
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Order management &amp; status updates
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Wholesale request review &amp; approval
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Customer management &amp; role assignment
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Reveal>

    <Reveal>
      <div className="mt-8 sm:mt-10 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="px-3 py-1.5 text-kicker text-ink-muted border border-line">
            {tech}
          </span>
        ))}
      </div>
    </Reveal>
  </section>
);

const HardProblemSection = () => (
  <section id="cs-hard" className="scroll-mt-nav">
    <Reveal>
      <div className="hairline-t pt-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-kicker text-accent">08</span>
          <p className="text-kicker text-ink-faint">Why This Was Hard</p>
        </div>
        <h2 className="text-subheading md:text-heading font-medium text-ink text-balance mt-3">
          The decisions that made this more than a CRUD app.
        </h2>
      </div>
    </Reveal>

    <Reveal>
      <div className="flex flex-col gap-8 max-w-prose">
        {[
          {
            title: 'One product, multiple prices.',
            body: 'A sweater might retail for Rs. 1,799 but wholesale for Rs. 1,200. Add a sale and it\'s Rs. 1,499 for retail. The system can\'t just store "a price" -- it needs to resolve the correct price based on who\'s buying, their approval status, and the current promotion. This resolution happens server-side, not in the browser.',
          },
          {
            title: 'The cart doesn\'t trust the client.',
            body: 'When a customer adds an item to cart, the price displayed is what they saw on the product page. But when they place the order, the backend re-evaluates everything -- current pricing, wholesale eligibility, MOQ compliance -- and records the actual unit price paid. This protects against stale prices and client-side manipulation.',
          },
          {
            title: 'Wholesale is a relationship, not a button.',
            body: 'A wholesale customer isn\'t just someone with a discount code. They apply, get reviewed, and are approved. That approval changes what they see across the entire catalog. The system maintains this relationship in the data model -- not as a flag on the user, but as a business relationship with status, history, and per-product eligibility.',
          },
          {
            title: 'Orders remember what happened, not what\'s current.',
            body: 'When an order is placed, the system snapshots the price paid at that moment. If prices change later, existing orders aren\'t affected. This is critical for wholesale -- a buyer who purchased at Rs. 1,200 shouldn\'t see Rs. 1,400 on their order history because the wholesale price changed.',
          },
        ].map((item) => (
          <div key={item.title} className="border-l-2 border-accent pl-5">
            <h3 className="text-subheading font-medium text-ink">{item.title}</h3>
            <p className="text-body text-ink-muted leading-relaxed mt-2">{item.body}</p>
          </div>
        ))}
      </div>
    </Reveal>
  </section>
);

const OutcomeSection = () => (
  <section id="cs-outcome" className="scroll-mt-nav">
    <Reveal>
      <div className="hairline-t pt-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-kicker text-accent">09</span>
          <p className="text-kicker text-ink-faint">Outcome</p>
        </div>
        <h2 className="text-subheading md:text-heading font-medium text-ink text-balance mt-3">
          From scattered selling to structured commerce.
        </h2>
      </div>
    </Reveal>

    <Reveal>
      <div className="grid sm:grid-cols-2 gap-6 mt-2">
        <div>
          <p className="kicker text-accent mb-3">Product Outcome</p>
          <ul className="flex flex-col gap-3">
            {[
              'Structured customer shopping experience with search, filtering, and cart',
              'Unified retail + wholesale commerce in a single platform',
              'Centralized admin operations for catalog, orders, and customers',
              'Context-aware pricing that resolves correctly for every buyer type',
              'Approval-gated wholesale program with per-product MOQ',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" aria-hidden="true" />
                <span className="text-body text-ink-muted leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="kicker text-accent mb-3">Business Value</p>
          <ul className="flex flex-col gap-3">
            {[
              'Replaces informal social-media selling with a professional storefront',
              'Supports two distinct purchasing models without separate systems',
              'Inventory updates with each order, reducing overselling risk',
              'Order history and admin visibility support better business decisions',
              'Creates a scalable foundation for growing fashion commerce operations',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" aria-hidden="true" />
                <span className="text-body text-ink-muted leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  </section>
);

const FashionistaCaseStudy = () => {
  const hasDemo = project.demoLink && project.demoLink !== '#';

  return (
    <>
      <SEO
        title="Fashionista -- B2B + B2C E-Commerce Platform | Case Study -- Fiza Shakil"
        description="How I built a full-stack fashion e-commerce platform with retail + wholesale pricing, admin CMS, and server-authoritative checkout."
        canonical="https://fiza-shakil.dev/case-study/2"
        keywords="fashionista, e-commerce case study, wholesale ecommerce, full stack developer, React ecommerce, admin CMS, product-minded developer"
        type="article"
      />

      <div className="section-bg-a">
        {/* Header */}
        <section className="border-b border-line">
          <div className="section-inner pt-6 pb-6 sm:pt-10 sm:pb-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-kicker text-ink-faint hover:text-ink transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-accent" />
              Back to Projects
            </Link>
          </div>
        </section>

        {/* Hero */}
        <section className="border-b border-line">
          <div className="section-inner py-8 sm:py-12 lg:pb-16 -mt-6">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-end">
              <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
                <p className="kicker-rule">{project.descriptor}</p>
                <h1 className="text-display font-medium tracking-tight text-balance">
                  <span className="serif-accent">{project.title}</span>
                </h1>
                <p className="text-subheading text-ink-muted leading-relaxed max-w-prose font-normal">
                  {project.tagline}
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  {hasDemo && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Live Demo <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                  <a href="#cs-problem" className="btn-secondary">
                    Read the Story <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="img-zoom relative overflow-hidden border border-line aspect-[16/10]">
                  <img
                    src={productPageImg}
                    alt="Fashionista product catalog with filters and product cards"
                    className="w-full h-full object-cover"
                    loading="eager"
                    width={800}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Snapshot */}
        <SnapshotBar />

        {/* Body -- sticky rail layout */}
        <div className="section-inner py-8 sm:py-12 lg:py-16 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="hidden lg:block lg:col-span-3">
            <StickyNav />
          </aside>

          <div className="lg:col-span-8 lg:col-start-5 flex flex-col gap-10 sm:gap-14 lg:gap-20" id="cs-overview">
            <ProblemSection />
            <ComplexitySection />
            <SolutionOverview />
            <ExperienceSection />
            <WholesaleSection />
            <AdminSection />
            <ArchitectureSection />
            <HardProblemSection />
            <OutcomeSection />
          </div>
        </div>

        {/* Closing CTA */}
        <section className="border-t border-line">
          <div className="section-inner py-10 sm:py-16 lg:py-20">
            <div className="border border-line bg-base-2 p-6 sm:p-8 lg:p-12 text-center flex flex-col items-center gap-5 max-w-3xl mx-auto">
              <h2 className="text-subheading md:text-heading font-medium text-ink text-balance max-w-xl">
                Like what you see? Let's talk about your problem.
              </h2>
              <p className="text-body text-ink-muted leading-relaxed max-w-prose">
                Looking for a developer who understands business complexity and builds complete
                commerce systems -- not just product pages? I respond within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                {hasDemo && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    View Live Demo <ArrowRight className="w-4 h-4" />
                  </a>
                )}
                <a href="/#contact" className="btn-secondary">
                  Start a Project <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FashionistaCaseStudy;
