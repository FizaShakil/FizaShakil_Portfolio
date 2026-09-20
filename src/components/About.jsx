import SectionHeading from './Reusable-Components/SectionHeading';
import { ArrowRight } from './Reusable-Components/Arrow';
import myImage from '../assets/myImage.jpg';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const [imgRef, imgVisible] = useScrollReveal();
  const [textRef, textVisible] = useScrollReveal();

  return (
    <section className="section section-bg-b border-t border-line py-16 lg:py-20 scroll-mt-nav" id="about">
      <div className="section-inner">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <div
              ref={imgRef}
              className={`reveal-left ${imgVisible ? 'visible' : ''}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-line">
                <img
                  src={myImage}
                  alt="Fiza Shakil — product-minded full-stack developer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={700}
                  height={875}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                  <span className="text-body text-white font-medium">Fiza Shakil</span>
                  <span className="w-5 h-5 bg-accent" aria-hidden="true" />
                </div>
              </div>
              <div className="flex items-center justify-between py-4 text-caption text-ink-faint">
                <span>Full-Stack Developer</span>
                <span className="font-mono">based · remote worldwide</span>
              </div>
            </div>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-6">
            <div ref={textRef} className={`reveal-fade-up flex flex-col gap-6 ${textVisible ? 'visible' : ''}`}>
              <SectionHeading
                kicker="About"
                heading={
                  <>
                    A developer who thinks like a{' '}
                    <span className="serif-accent">product person</span>
                  </>
                }
              />

              <div className="flex flex-col gap-5 text-body text-ink-muted leading-relaxed">
                <p className="drop-cap">
                  I'm Fiza Shakil — I build software the way a product team would:
                  understand what the business needs first, design the workflow
                  second, and write code last. That ordering is the whole job.
                </p>
                <p>
                  I work across the full stack — React and TypeScript on the
                  frontend, Node.js and Express on the backend, and MongoDB,
                  PostgreSQL, or MySQL for data. End to end, I own a feature
                  from idea to running product.
                </p>
                <p>
                  The work I enjoy most has real depth: commerce with business
                  rules, operations systems with role-based workflows, or
                  AI-powered products that have to feel reliable in daily use.
                </p>
              </div>

              <div className="border border-line p-6 mt-2 flex flex-col gap-4">
                <p className="text-kicker text-ink-faint">The standard I hold</p>
                <p className="text-body text-ink leading-relaxed">
                  I've worked inside a production engineering team at 10Pearls —
                  code reviews, structured sprints, shipping features alongside
                  senior developers. That's the bar I bring to independent work.
                </p>
              </div>

              <a href="#work" className="arrow-link self-start text-body text-accent-soft hover:text-white transition-colors">
                See what that standard looks like <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;