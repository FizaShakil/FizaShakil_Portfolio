import { Link } from 'react-router-dom';
import SEO from './SEO';
import { ArrowLeft, ArrowRight } from './Reusable-Components/Arrow';
import { useScrollReveal } from '../hooks/useScrollReveal';
import heroImg from '../assets/digitalPillars.png';
import pillarsImg from '../assets/fourPillars_digitalPillars.png';
import servicesImg from '../assets/servicesDetailed_DigitalPillars.png';

const project = {
  title: 'Digital Pillars',
  descriptor: 'Cinematic 3D Marketing Site',
  tagline: 'An immersive agency website built around one architectural idea: growth built in layers.',
  demoLink: 'https://digital-pillars-sandy.vercel.app/',
  githubLink: 'https://github.com/FizaShakil/digital_pillars',
  role: 'UI/UX Designer + Full Stack Developer',
  platform: 'Responsive Marketing Website',
  stack: ['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'GSAP', 'Lenis', 'Tailwind CSS'],
  focus: ['3D Experience', 'Motion', 'Conversion', 'Interactive UI'],
};

const snapshot = [
  { label: 'Product', value: 'Cinematic Marketing Website' },
  { label: 'Role', value: 'UI/UX Designer + Full Stack Dev' },
  { label: 'Platform', value: 'Responsive Marketing Website' },
  { label: 'Core Stack', value: 'React / TypeScript / Three.js' },
  { label: 'Focus', value: '3D Experience · Motion · Conversion' },
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
        width={1440}
        height={900}
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
const OverviewSection = () => (
  <section id="cs-overview" className="scroll-mt-nav">
    <Reveal>
      <div className="hairline-t pt-4 mb-8">
        <p className="text-kicker text-ink-faint">Overview</p>
        <h2 className="text-subheading md:text-heading font-medium text-ink text-balance mt-3">
          The site had to prove the craft before it sold a single service.
        </h2>
      </div>
    </Reveal>
    <Reveal>
      <div className="flex flex-col gap-6 text-body text-ink-muted leading-relaxed max-w-prose">
        <p className="drop-cap">
          Digital Pillars is a marketing website for a growth agency that sells paid
          social, social presence, digital experiences, and consulting. The visitor is
          a business owner comparing agencies, and the judgment happens in seconds,
          on the strength of the site itself.
        </p>
        <p>
          The design challenge was narrow: build something that feels custom, not
          assembled. Cinematic 3D, glass interfaces, and motion had to work as one
          system, and the whole thing had to hold up on a phone.
        </p>
      </div>
    </Reveal>
  </section>
);

const ProblemSection = () => (
  <section id="cs-problem" className="scroll-mt-nav">
    <Reveal>
      <div className="hairline-t pt-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-kicker text-accent">01</span>
          <p className="text-kicker text-ink-faint">The Problem</p>
        </div>
        <h2 className="text-subheading md:text-heading font-medium text-ink text-balance mt-3">
          The imagery was placed on the page. It never belonged to it.
        </h2>
      </div>
    </Reveal>
    <Reveal>
      <div className="flex flex-col gap-6 text-body text-ink-muted leading-relaxed max-w-prose">
        <p>
          The previous site leaned on AI-generated visuals. Each image looked
          convincing on its own, but they sat on top of the layout like stickers.
          The type ignored them, the spacing did not respond to them, and the
          transitions had nothing to do with them.
        </p>
        <p>
          For an agency selling creative and technical work, that gap is the pitch.
          A visitor should feel the build quality before reading a service line.
        </p>
        <p>
          So this was not a reskin. The goal was an environment: a continuous 3D
          scene with glass UI and motion, all governed by the same rules.
        </p>
      </div>
    </Reveal>
    <Reveal>
      <div className="mt-8 sm:mt-10 grid sm:grid-cols-3 gap-3 sm:gap-4">
        {[
          { problem: 'Visuals without a system', detail: 'AI imagery dropped into a layout it had no relationship with. Type, spacing, and motion each followed their own logic.' },
          { problem: 'Nothing to look at first', detail: 'Every section competed for attention. No obvious entry point, and no sense of what the brand stands for.' },
          { problem: 'Motion without meaning', detail: 'Scroll effects existed, but they played in isolation. They never carried content or revealed an idea.' },
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
          One architectural object could carry the whole story.
        </h2>
      </div>
    </Reveal>
    <Reveal>
      <div className="flex flex-col gap-6 text-body text-ink-muted leading-relaxed max-w-prose">
        <p>
          The shift was treating 3D as structure instead of decoration. Rather than
          scatter effects across every section, I built the experience around a
          single form: a stacked architectural object I named the Growth Pillar.
        </p>
        <p>
          It gives the site a thesis. Growth built in layers. The pillar is not an
          illustration of the services. It is the operating model made physical, and
          each section attaches to it.
        </p>
        <p>
          That decision settled most of the arguments that came after it. If a
          visual did not serve the pillar, its data, or its motion, it did not ship.
        </p>
      </div>
    </Reveal>
    <Reveal>
      <div className="mt-8 sm:mt-10 border border-line p-5 sm:p-6 lg:p-8 bg-base-2">
        <p className="kicker text-ink-faint mb-4">The key insight</p>
        <blockquote className="text-subheading font-normal text-ink leading-relaxed text-balance max-w-2xl">
          With one dominant object, everything else can stay quiet. The pillar
          carries the drama, so the type and cards only have to be clear.
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
          <p className="text-kicker text-ink-faint">The Approach</p>
        </div>
        <h2 className="text-subheading md:text-heading font-medium text-ink text-balance mt-3">
          Cinematic, but legible.
        </h2>
      </div>
    </Reveal>
    <Reveal>
      <div className="flex flex-col gap-6 text-body text-ink-muted leading-relaxed max-w-prose">
        <p>
          Six constraints kept the build focused. Each one removed options instead
          of adding more.
        </p>
      </div>
    </Reveal>
    <Reveal>
      <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-3 sm:gap-4">
        {[
          { title: 'Cinematic 3D environment', detail: 'One dark, continuous scene runs behind the page. Light, camera, and depth stay consistent from the hero to the footer.' },
          { title: 'Architectural focal object', detail: 'The Growth Pillar holds the center of every frame, so the composition always has an anchor.' },
          { title: 'Glass data interfaces', detail: 'Performance cards render as glass inside the scene. Data belongs to the environment instead of sitting on it.' },
          { title: 'Black and lime only', detail: 'A near-black base with one lime accent. No second highlight, no gradient competing for attention.' },
          { title: 'Motion-led storytelling', detail: 'Scroll drives the camera and the reveal order. GSAP with ScrollTrigger choreographs it, Lenis smooths the input.' },
          { title: 'Responsive thinking', detail: 'The scene adapts down to small screens with fewer objects and a simpler camera, while the hierarchy stays the same.' },
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

const SolutionSection = () => (
  <section id="cs-solution" className="scroll-mt-nav">
    <Reveal>
      <div className="hairline-t pt-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-kicker text-accent">04</span>
          <p className="text-kicker text-ink-faint">The Solution</p>
        </div>
        <h2 className="text-subheading md:text-heading font-medium text-ink text-balance mt-3">
          One story, told in order.
        </h2>
      </div>
    </Reveal>

    <Reveal>
      <ScreenshotFrame
        src={pillarsImg}
        alt="Digital Pillars services section listing four numbered pillars of growth"
        caption="Four pillars of growth, numbered inside the 3D scene with one action per service."
        className="mt-8 sm:mt-10"
      />
    </Reveal>

    <Reveal>
      <div className="mt-8 sm:mt-10 flex flex-col gap-3 max-w-prose">
        <p className="kicker text-accent">Service sections</p>
        <p className="text-body text-ink-muted leading-relaxed">
          Paid social, social presence, digital experiences, and consulting each get
          a number, one line of context, a proof point, and a single action. The
          services read as a set rather than four separate pages.
        </p>
      </div>
    </Reveal>

    <Reveal>
      <ScreenshotFrame
        src={servicesImg}
        alt="Digital Pillars service detail with a glass metric, supporting copy and a lime call to action"
        caption="Service detail with a glass metric, supporting copy, and one lime call to action."
        className="mt-10 sm:mt-14"
      />
    </Reveal>

    <Reveal>
      <div className="mt-8 sm:mt-10 flex flex-col gap-3 max-w-prose">
        <p className="kicker text-accent">Glass performance cards</p>
        <p className="text-body text-ink-muted leading-relaxed">
          Metrics float as glass surfaces inside the scene, with the lime accent
          reserved for the value and the button. The card has a border, a soft glow,
          and nothing else.
        </p>
      </div>
    </Reveal>

    <Reveal>
      <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 gap-3 sm:gap-4">
        {[
          { title: 'Cinematic 3D hero', detail: 'Type, camera, and pillar open the page together in one continuous scene.' },
          { title: 'Growth Pillar', detail: 'The stacked form stays present as sections pass, holding the composition together.' },
          { title: 'Scroll choreography', detail: 'Reveals and camera moves sequence on scroll instead of firing at random.' },
          { title: 'Testimonials', detail: 'Client quotes sit under the services, short and quiet, in the same visual language.' },
          { title: 'Ask Pillars', detail: 'A floating assistant answers common questions without sending the visitor elsewhere.' },
          { title: 'Mobile experience', detail: 'On small screens the scene simplifies, the cards stack, and the calls to action stay reachable.' },
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

const UIUXSection = () => (
  <section id="cs-uiux" className="scroll-mt-nav">
    <Reveal>
      <div className="hairline-t pt-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-kicker text-accent">05</span>
          <p className="text-kicker text-ink-faint">UI/UX Decisions</p>
        </div>
        <h2 className="text-subheading md:text-heading font-medium text-ink text-balance mt-3">
          Restraint did the heavy lifting.
        </h2>
      </div>
    </Reveal>
    <Reveal>
      <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-3 sm:gap-4">
        {[
          { title: '3D as brand concept', detail: 'The pillar is the argument, not an ornament. Removing it would break the idea instead of tidying the page.' },
          { title: 'One focal object', detail: 'Hierarchy is built around a single dominant form, so every screen has a clear first read.' },
          { title: 'Glass inside the scene', detail: 'Cards share the scene lighting and depth, which makes them feel placed rather than pasted.' },
          { title: 'Thin, high-contrast type', detail: 'Light weights against near-black keep the interface quiet while the 3D stays loud.' },
          { title: 'One accent color', detail: 'A single lime accent marks the value and the action. Everything else stays monochrome.' },
          { title: 'Clear CTA hierarchy', detail: 'One primary action per view: start a project, then start a pillar. Buttons never compete.' },
          { title: 'Intentional motion', detail: 'Hover, reveal, and scroll each have a job. Nothing moves without a reason.' },
          { title: 'Simplified mobile', detail: 'The scene sheds detail on small screens but keeps the same order and the same hierarchy.' },
          { title: 'Reduced motion', detail: 'Visitors who prefer reduced motion get a static scene with the same content and the same paths forward.' },
        ].map((item, i, arr) => (
          <div
            key={item.title}
            className={`border border-line p-5 flex flex-col gap-2 ${i === arr.length - 1 ? 'sm:col-span-2' : ''}`}
          >
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
          From a generic marketing site to a distinctive one.
        </h2>
      </div>
    </Reveal>
    <Reveal>
      <div className="grid sm:grid-cols-2 gap-6 mt-2">
        <div>
          <p className="kicker text-accent mb-3">Product Outcome</p>
          <ul className="flex flex-col gap-3">
            {[
              'A continuous 3D environment replacing pasted-on imagery',
              'One focal object organising every section around a single idea',
              'Services presented as numbered pillars with one action each',
              'Glass performance cards that read as part of the scene',
              'A responsive experience that keeps hierarchy on small screens',
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
              '3D tied to the brand concept instead of applied as decoration',
              'A restrained system: near-black base, one accent, thin type',
              'Motion choreographed on scroll with a clear purpose',
              'A reduced-motion path that keeps content and navigation intact',
              'Reusable sections that can grow without redesigning the page',
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
          A 3D scene that stays maintainable.
        </h2>
      </div>
    </Reveal>
    <Reveal>
      <div className="flex flex-col gap-6 text-body text-ink-muted leading-relaxed max-w-prose">
        <p>
          React with TypeScript holds the page structure, so sections, content, and
          interactions stay typed and easy to change. React Three Fiber renders the
          scene through Three.js inside that same component tree, instead of a canvas
          bolted on beside it.
        </p>
        <p>
          GSAP with ScrollTrigger drives the choreography and Lenis smooths the scroll
          input. Tailwind CSS handles layout and the type scale. Geometry, materials,
          and animation counts stay light so the scene holds up on mid-range hardware.
        </p>
        <p>
          Motion respects the reduced-motion preference, and no content depends on the
          scene to be readable.
        </p>
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
const DigitalPillarsCaseStudy = () => {
  const hasDemo = project.demoLink && project.demoLink !== '#';
  const hasGithub = project.githubLink && project.githubLink !== '#';

  return (
    <>
      <SEO
        title="Digital Pillars -- Cinematic 3D Case Study | Fiza Shakil"
        description="How I built a cinematic marketing website around an architectural 3D experience: a Growth Pillar focal object, glass data interfaces, motion-led storytelling, and a restrained black and lime system."
        canonical="https://fiza-shakil.dev/case-study/4"
        keywords="digital pillars, 3D website case study, React Three Fiber, Three.js, GSAP motion design, UI UX design, cinematic web experience, product design"
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
                <div className="flex flex-wrap items-center gap-4 pt-1">
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
                  {hasGithub && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="arrow-link text-body text-ink-muted hover:text-ink transition-colors"
                    >
                      View source <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="img-zoom relative overflow-hidden border border-line aspect-[16/10]">
                  <img
                    src={heroImg}
                    alt="Digital Pillars landing with the Growth Pillar, cinematic hero and floating glass performance cards"
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

          <div className="lg:col-span-8 lg:col-start-5 flex flex-col gap-10 sm:gap-14 lg:gap-20">
            <OverviewSection />
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

export default DigitalPillarsCaseStudy;
