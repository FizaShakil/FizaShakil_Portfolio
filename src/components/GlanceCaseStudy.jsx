import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import { ArrowLeft, ArrowRight } from './Reusable-Components/Arrow';
import { useScrollReveal } from '../hooks/useScrollReveal';
import heroImg from '../assets/glance_Mockup.png';
import staysImg from '../assets/stays_glance.png';
import stayDetailImg from '../assets/stayindividualPage_glance.png';
import destinationImg from '../assets/destination_individualPage_glance.png';

const project = {
  title: 'Glance',
  descriptor: 'Travel Booking Frontend',
  tagline: 'A traveler-first approach to destination discovery and hotel booking.',
  demoLink: 'https://glance-one.vercel.app/',
  role: 'UI/UX Designer + Frontend Developer',
  platform: 'Responsive Web Application',
  stack: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Framer Motion', 'JavaScript'],
  focus: ['UX Design', 'Responsive Design', 'Booking Flow', 'Frontend Architecture'],
};

const snapshot = [
  { label: 'Product', value: 'Travel & Hotel Booking' },
  { label: 'Role', value: 'UI/UX Designer + Frontend Dev' },
  { label: 'Platform', value: 'Responsive Web App' },
  { label: 'Core Stack', value: 'React / Vite / Tailwind CSS' },
  { label: 'Focus', value: 'Discovery · Comparison · Booking' },
];

const slides = [
  { src: heroImg, alt: 'Glance landing page — find a stay worth travelling for', caption: 'Landing page with search, curated stats, and destination-first hero' },
  { src: destinationImg, alt: 'Glance destination page — Costa Rica with curated stays and region info', caption: 'Destination page with region context, curated stays, and tabbed content' },
  { src: staysImg, alt: 'Glance stays listing — filter by mood, rating, and price with hotel cards', caption: 'Stays listing with mood filters, ratings, and comparison-ready cards' },
  { src: stayDetailImg, alt: 'Glance hotel detail — Playa Tamarindo Surf Lodge with booking widget', caption: 'Hotel detail with highlights, amenities, rooms, and date-based pricing' },
];

const navSections = [
  { id: 'cs-overview', label: 'Overview' },
  { id: 'cs-problem', label: 'Problem' },
  { id: 'cs-shift', label: 'The Shift' },
  { id: 'cs-approach', label: 'Approach' },
  { id: 'cs-solution', label: 'Solution' },
  { id: 'cs-uiux', label: 'UI/UX' },
  { id: 'cs-result', label: 'Result' },
  { id: 'cs-architecture', label: 'Architecture' },
];

const Reveal = ({ children, className = '' }) => {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={`reveal-fade-up ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

/* ================================================================
   Image Slider
   ================================================================ */
const ImageSlider = ({ slides: inputSlides }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback((idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % inputSlides.length);
  }, [inputSlides.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + inputSlides.length) % inputSlides.length);
  }, [inputSlides.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const slide = inputSlides[current];

  return (
    <div className="flex flex-col gap-4">
      <div className="relative group border border-line overflow-hidden bg-base-2">
        <img
          src={slide.src}
          alt={slide.alt}
          className="w-full h-auto object-cover aspect-[16/10] sm:aspect-[16/9]"
          loading="lazy"
          key={current}
        />
        {/* Arrows */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-base/80 border border-line text-ink opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Previous screenshot"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-base/80 border border-line text-ink opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Next screenshot"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
        {/* Counter */}
        <span className="absolute bottom-3 right-3 px-3 py-1 text-caption text-ink bg-base/80 border border-line">
          {current + 1} / {inputSlides.length}
        </span>
      </div>
      {/* Caption */}
      <p className="text-caption text-ink-faint leading-relaxed text-center">{slide.caption}</p>
      {/* Dots */}
      <div className="flex items-center justify-center gap-2">
        {inputSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className={`w-2 h-2 transition-colors duration-300 ${i === current ? 'bg-accent' : 'bg-line-strong'}`}
            aria-label={`Go to screenshot ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

/* ================================================================
   Sticky Nav
   ================================================================ */
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

/* ================================================================
   Screenshot Frame
   ================================================================ */
const ScreenshotFrame = ({ src, alt, caption, className = '' }) => (
  <figure className={`flex flex-col gap-3 ${className}`}>
    <div className="img-zoom border border-line overflow-hidden bg-base-2">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover"
        loading="lazy"
      />
    </div>
    {caption && (
      <figcaption className="text-caption text-ink-faint leading-relaxed">{caption}</figcaption>
    )}
  </figure>
);

/* ================================================================
   Sections
   ================================================================ */
const ProblemSection = () => (
  <section id="cs-problem" className="scroll-mt-nav">
    <Reveal>
      <div className="hairline-t pt-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-kicker text-accent">01</span>
          <p className="text-kicker text-ink-faint">The Problem</p>
        </div>
        <h2 className="text-subheading md:text-heading font-medium text-ink text-balance mt-3">
          Travel websites show destinations. They do not help you decide.
        </h2>
      </div>
    </Reveal>
    <Reveal>
      <div className="flex flex-col gap-6 text-body text-ink-muted leading-relaxed max-w-prose">
        <p className="drop-cap">
          Most travel platforms are built around inventory: list as many hotels as
          possible, show a map, hope the user figures it out. But the real problem
          is not access to options. It is confidence in choosing.
        </p>
        <p>
          A traveler looking at 200 hotels in Bali is not closer to booking than
          someone looking at 5. They are more overwhelmed. The decision process
          needs structure: narrow by mood, compare on quality, understand what
          makes each stay different, and only then commit to dates and payment.
        </p>
        <p>
          The original Glance experience had beautiful destination photography but
          lacked the decision-making infrastructure that turns browsing into
          booking.
        </p>
      </div>
    </Reveal>
    <Reveal>
      <div className="mt-8 sm:mt-10 grid sm:grid-cols-3 gap-3 sm:gap-4">
        {[
          { problem: 'No decision path', detail: 'Destinations looked beautiful but gave no guidance on how to narrow choices or compare stays.' },
          { problem: 'No booking confidence', detail: 'Users could not see pricing, availability, or room details until deep into the experience.' },
          { problem: 'No mobile-first thinking', detail: 'The experience was designed desktop-first, making mobile browsing frustrating and booking unreliable.' },
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

const ShiftSection = () => (
  <section id="cs-shift" className="scroll-mt-nav">
    <Reveal>
      <div className="hairline-t pt-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-kicker text-accent">02</span>
          <p className="text-kicker text-ink-faint">The Shift in Thinking</p>
        </div>
        <h2 className="text-subheading md:text-heading font-medium text-ink text-balance mt-3">
          I stopped looking at Glance as a developer and started looking at it as a traveler.
        </h2>
      </div>
    </Reveal>
    <Reveal>
      <div className="flex flex-col gap-6 text-body text-ink-muted leading-relaxed max-w-prose">
        <p>
          The turning point was asking a different question. Not &ldquo;how do I build
          a travel frontend?&rdquo; but &ldquo;what do I actually need when I am
          choosing where to stay?&rdquo;
        </p>
        <p>
          The answer was not more options. It was better information architecture.
          I needed to see destinations as contexts, not just photos. I needed to
          filter by the thing that matters most to travelers: mood. Beach, romantic,
          city, nature, luxury, hidden. Not by star rating or price alone.
        </p>
        <p>
          I needed hotel cards that show the right information at the right time.
          Location, rating, price, and a reason to care. Not a wall of identical
          thumbnails. And I needed the booking process to feel like a natural next
          step, not a separate transaction.
        </p>
      </div>
    </Reveal>
    <Reveal>
      <div className="mt-8 sm:mt-10 border border-line p-5 sm:p-6 lg:p-8 bg-base-2">
        <p className="kicker text-ink-faint mb-4">The key insight</p>
        <blockquote className="text-subheading font-normal text-ink leading-relaxed text-balance max-w-2xl">
          Travelers do not compare hotels. They compare experiences. The interface
          needs to show what each stay feels like, not just what it costs.
        </blockquote>
      </div>
    </Reveal>
  </section>
);

const ApproachSection = () => (
  <section id="cs-approach" className="scroll-mt-nav">
    <Reveal>
      <div className="hairline-t pt-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-kicker text-accent">03</span>
          <p className="text-kicker text-ink-faint">UX Approach</p>
        </div>
        <h2 className="text-subheading md:text-heading font-medium text-ink text-balance mt-3">
          Discover. Search. Compare. Understand. Book.
        </h2>
      </div>
    </Reveal>
    <Reveal>
      <div className="flex flex-col gap-6 text-body text-ink-muted leading-relaxed max-w-prose">
        <p>
          I structured the entire experience around the traveler&apos;s decision
          journey. Each stage has a specific UX goal, and the interface is designed
          to move the user forward with confidence.
        </p>
      </div>
    </Reveal>
    <Reveal>
      <div className="mt-8 sm:mt-10 flex flex-col gap-4">
        {[
          { stage: 'Discover', ux: 'Hero-first landing with search bar and curated stats. The traveler immediately understands what Glance offers: 15 destinations, 24 hand-picked stays, 9.0 average rating. Not a wall of listings.', color: 'bg-accent' },
          { stage: 'Search', ux: 'Search by destination, dates, and guests. Mood-based filters (Beach, Romantic, City, Nature, Luxury, Hidden) let travelers narrow by feeling, not just category. Guest rating and price filters add precision.', color: 'bg-accent-light' },
          { stage: 'Compare', ux: 'Hotel cards show the right information hierarchy: image, name, location, rating, price, amenities. Save badges (Guest favourite, Most booked) and discount percentages help prioritize. Side-by-side comparison becomes natural.', color: 'bg-accent-soft' },
          { stage: 'Understand', ux: 'Destination pages give context: region, curated stays count, average rating, tabbed content (About, Why visit, History, Good to know). Hotel detail pages show highlights, amenities, room options, and transparent pricing.', color: 'bg-accent-deep' },
          { stage: 'Book', ux: 'Date-based pricing with calendar widget. Room selection with capacity and size. Price breakdown (nightly rate, taxes, total). The Reserve button is the clear next step. No hidden fees, no confusion.', color: 'bg-accent' },
        ].map((item) => (
          <div key={item.stage} className="border border-line p-5 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-3 shrink-0">
              <span className={`w-3 h-3 ${item.color} shrink-0`} aria-hidden="true" />
              <span className="text-body font-medium text-ink">{item.stage}</span>
            </div>
            <p className="text-caption text-ink-muted leading-relaxed">{item.ux}</p>
          </div>
        ))}
      </div>
    </Reveal>
  </section>
);

const SolutionSection = () => (
  <section id="cs-solution" className="scroll-mt-nav">
    <Reveal>
      <div className="hairline-t pt-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-kicker text-accent">04</span>
          <p className="text-kicker text-ink-faint">The Solution</p>
        </div>
        <h2 className="text-subheading md:text-heading font-medium text-ink text-balance mt-3">
          Every screen serves a decision.
        </h2>
      </div>
    </Reveal>

    <Reveal>
      <ImageSlider slides={slides} className="mt-8 sm:mt-10" />
    </Reveal>

    <Reveal>
      <div className="mt-10 sm:mt-14 flex flex-col gap-10 sm:gap-14">
        {/* Landing */}
        <div>
          <p className="kicker text-accent mb-3">Landing Page</p>
          <p className="text-body text-ink-muted leading-relaxed max-w-prose">
            The hero leads with a traveler-centric value proposition: &ldquo;Find a
            stay worth travelling for.&rdquo; Below it, a search bar with three
            fields (Where, Check-in/Check-out, Guests) and a prominent Search
            button. Curated stats (15 destinations, 24 stays, 9.0 rating) establish
            credibility without corporate language. The &ldquo;DISCOVER &middot;
            COMPARE &middot; BOOK&rdquo; tagline communicates the product promise
            in three words.
          </p>
        </div>

        {/* Destination */}
        <div>
          <p className="kicker text-accent mb-3">Destination Discovery</p>
          <p className="text-body text-ink-muted leading-relaxed max-w-prose">
            Each destination has its own page with a full-bleed hero, region context
            (Central America, Costa Rica), curated stays count, and average guest
            rating. Tabbed content (About, Why visit, History, Good to know, Stays)
            lets travelers explore without leaving the page. The destination page is
            not a listing. It is a context-setting experience.
          </p>
        </div>

        {/* Stays */}
        <div>
          <p className="kicker text-accent mb-3">Stays Listing</p>
          <p className="text-body text-ink-muted leading-relaxed max-w-prose">
            The stays page shows 24 hand-picked hotels with a filter sidebar that
            works by mood, guest rating, and price. Each card displays an image,
            hotel name, location, rating with review count, and amenity badges (Free
            Wi-Fi, Infinity Pool, etc.). Save badges like &ldquo;Guest
            favourite&rdquo; and &ldquo;Most booked&rdquo; help travelers
            prioritize. The sort dropdown (Recommended) adds another layer of
            curation.
          </p>
        </div>

        {/* Hotel Detail */}
        <div>
          <p className="kicker text-accent mb-3">Hotel Detail + Booking</p>
          <p className="text-body text-ink-muted leading-relaxed max-w-prose">
            The hotel detail page is where browsing becomes booking. An image
            carousel with navigation arrows and counter. Location, rating, and
            review count. Highlights that communicate the experience (Surf lessons
            on the doorstep, Sunsets over the Pacific). Amenities as visual chips.
            Room options with capacity and size. A sticky booking widget with
            date-based pricing, tax breakdown, and a clear Reserve button.
          </p>
        </div>
      </div>
    </Reveal>
  </section>
);

const UIUXSection = () => (
  <section id="cs-uiux" className="scroll-mt-nav">
    <Reveal>
      <div className="hairline-t pt-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-kicker text-accent">05</span>
          <p className="text-kicker text-ink-faint">UI/UX Decisions</p>
        </div>
        <h2 className="text-subheading md:text-heading font-medium text-ink text-balance mt-3">
          The details that make the experience work.
        </h2>
      </div>
    </Reveal>
    <Reveal>
      <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-4 sm:gap-6">
        {[
          { title: 'Information hierarchy', detail: 'Each screen shows the information the traveler needs at that moment. Hero images first. Decision data (rating, price, location) second. Booking details last.' },
          { title: 'Visual hierarchy', detail: 'Serif headings for emotional context. Sans-serif body for readability. Accent colors for actions. Rating badges for trust signals. The eye moves naturally.' },
          { title: 'Responsive design', detail: 'Every screen works from 320px to wide desktop. The search bar, filter sidebar, hotel cards, and booking widget all adapt without losing functionality.' },
          { title: 'CTA hierarchy', detail: 'One primary action per screen. Search on the landing page. View stays on the destination page. Reserve on the hotel detail page. No competing buttons.' },
          { title: 'Progressive disclosure', detail: 'Destination pages reveal content through tabs. Hotel details unfold through scrolling. The booking widget stays visible but does not dominate until needed.' },
          { title: 'Micro-interactions', detail: 'Image carousel transitions, filter state changes, save button feedback, and hover effects on cards. Motion that supports the experience without distracting from it.' },
        ].map((item) => (
          <div key={item.title} className="border border-line p-5 flex flex-col gap-2">
            <span className="text-body font-medium text-ink">{item.title}</span>
            <span className="text-caption text-ink-faint leading-relaxed">{item.detail}</span>
          </div>
        ))}
      </div>
    </Reveal>
  </section>
);

const ResultSection = () => (
  <section id="cs-result" className="scroll-mt-nav">
    <Reveal>
      <div className="hairline-t pt-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-kicker text-accent">06</span>
          <p className="text-kicker text-ink-faint">Result</p>
        </div>
        <h2 className="text-subheading md:text-heading font-medium text-ink text-balance mt-3">
          From generic travel showcase to decision-focused booking experience.
        </h2>
      </div>
    </Reveal>
    <Reveal>
      <div className="grid sm:grid-cols-2 gap-6 mt-2">
        <div>
          <p className="kicker text-accent mb-3">Product Outcome</p>
          <ul className="flex flex-col gap-3">
            {[
              'Structured travel discovery: mood-based filtering, curated stays, destination context',
              'Hotel comparison through consistent card design with rating, price, and amenity information',
              'Transparent booking: date-based pricing, room selection, tax breakdown, clear Reserve CTA',
              'Mobile-first responsive experience across all screens and interactions',
              'Destination pages that set context before showing listings',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" aria-hidden="true" />
                <span className="text-body text-ink-muted leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="kicker text-accent mb-3">Design Value</p>
          <ul className="flex flex-col gap-3">
            {[
              'Traveler-first thinking: every UX decision serves a real booking need',
              'Information architecture that guides decisions instead of overwhelming with options',
              'Visual design that communicates quality without corporate language',
              'Responsive implementation that works on the devices travelers actually use',
              'Frontend architecture built for maintainability and component reuse',
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

const ArchitectureSection = () => (
  <section id="cs-architecture" className="scroll-mt-nav">
    <Reveal>
      <div className="hairline-t pt-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-kicker text-accent">07</span>
          <p className="text-kicker text-ink-faint">Architecture</p>
        </div>
        <h2 className="text-subheading md:text-heading font-medium text-ink text-balance mt-3">
          Component-driven frontend built for scale.
        </h2>
      </div>
    </Reveal>
    <Reveal>
      <div className="flex flex-col gap-6 text-body text-ink-muted leading-relaxed max-w-prose">
        <p>
          The frontend is built with React and Vite for fast development and
          optimized builds. React Router handles navigation across five page types:
          Home, Destinations, Destination Detail, Stays, and Stay Detail. Each page
          is a composable set of reusable components.
        </p>
        <p>
          Tailwind CSS powers the responsive design system. Framer Motion handles
          page transitions and scroll-triggered animations. The component
          architecture separates data, presentation, and interaction logic so each
          screen can evolve independently.
        </p>
      </div>
    </Reveal>
    <Reveal>
      <div className="mt-8 sm:mt-10 border border-line overflow-hidden">
        <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-line">
          <div className="p-6 flex flex-col gap-3">
            <span className="text-kicker text-accent">Data Layer</span>
            <ul className="flex flex-col gap-2 text-caption text-ink-muted leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Structured destination and hotel data
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Price, rating, amenity, and room information
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Mood and category classification
              </li>
            </ul>
          </div>
          <div className="p-6 flex flex-col gap-3 bg-base-2">
            <span className="text-kicker text-accent">UI Components</span>
            <ul className="flex flex-col gap-2 text-caption text-ink-muted leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Search bar with date picker and guest selector
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Hotel cards with rating, price, and save functionality
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Filter sidebar with mood, rating, and price controls
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Booking widget with calendar and price breakdown
              </li>
            </ul>
          </div>
          <div className="p-6 flex flex-col gap-3">
            <span className="text-kicker text-accent">Pages</span>
            <ul className="flex flex-col gap-2 text-caption text-ink-muted leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Landing with hero, search, and curated stats
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Destination detail with tabs and context
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Stays listing with filters and sorting
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                Stay detail with carousel and booking widget
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

/* ================================================================
   Main Component
   ================================================================ */
const GlanceCaseStudy = () => {
  const hasDemo = project.demoLink && project.demoLink !== '#';

  return (
    <>
      <SEO
        title="Glance -- Travel Booking UX Case Study | Fiza Shakil"
        description="How I redesigned a travel booking experience around the traveler's decision-making process -- mood-based discovery, comparison-ready hotel cards, and transparent booking."
        canonical="https://fiza-shakil.dev/case-study/6"
        keywords="glance, travel booking case study, UX design, hotel booking frontend, React travel app, product design, mobile-first design"
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
                    src={heroImg}
                    alt="Glance landing page with search bar and destination hero"
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

        {/* Body */}
        <div className="section-inner py-8 sm:py-12 lg:py-16 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="hidden lg:block lg:col-span-3">
            <StickyNav />
          </aside>

          <div className="lg:col-span-8 lg:col-start-5 flex flex-col gap-10 sm:gap-14 lg:gap-20" id="cs-overview">
            <ProblemSection />
            <ShiftSection />
            <ApproachSection />
            <SolutionSection />
            <UIUXSection />
            <ResultSection />
            <ArchitectureSection />
          </div>
        </div>

        {/* Closing CTA */}
        <section className="border-t border-line">
          <div className="section-inner py-10 sm:py-16 lg:py-20">
            <div className="border border-line bg-base-2 p-6 sm:p-8 lg:p-12 text-center flex flex-col items-center gap-5 max-w-3xl mx-auto">
              <h2 className="text-subheading md:text-heading font-medium text-ink text-balance max-w-xl">
                Like what you see? Let&apos;s talk about your problem.
              </h2>
              <p className="text-body text-ink-muted leading-relaxed max-w-prose">
                Looking for a developer who understands user experience and builds
                complete product frontends? I respond within 24 hours.
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

export default GlanceCaseStudy;
