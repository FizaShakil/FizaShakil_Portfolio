import { useForm, ValidationError } from '@formspree/react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from './Reusable-Components/Arrow';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa6';

const whatHappensNext = [
  { step: '1', text: "I'll review your message and respond within 24 hours." },
  { step: '2', text: "We'll discuss the product, the feature, and what success looks like." },
  { step: '3', text: "You'll get an honest assessment of scope, timeline, and approach." },
  { step: '4', text: 'No pressure — you decide if we build together.' },
];

const meta = [
  { label: 'Email', value: 'fizashakilofficial@gmail.com', href: 'mailto:fizashakilofficial@gmail.com' },
  { label: 'Location', value: 'Pakistan · Remote worldwide' },
  { label: 'Availability', value: 'Mon – Fri, 9 AM – 6 PM PKT' },
];

const Contact = () => {
  const [state, handleSubmit] = useForm('mkgzebla');
  const [leftRef, leftVisible] = useScrollReveal();
  const [formRef, formVisible] = useScrollReveal();

  if (state.succeeded) {
    return (
      <section className="section section-bg-b py-16 lg:py-24" id="contact">
        <div className="section-inner max-w-2xl text-center flex flex-col items-center gap-6">
          <span className="flex items-center justify-center w-12 h-12 border border-accent bg-base text-accent">
            ✓
          </span>
          <h2 className="text-heading font-medium text-ink text-balance">Message received.</h2>
          <p className="text-body text-ink-muted leading-relaxed">
            Thanks for reaching out. I'll review your message and get back to you within 24 hours.
          </p>
          <ol className="hairline-t pt-6 mt-2 text-left w-full max-w-md">
            {whatHappensNext.map((item) => (
              <li key={item.step} className="flex gap-4 py-3 text-caption text-ink-muted border-b border-line">
                <span className="font-mono text-accent shrink-0">{item.step}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    <section className="section section-bg-b border-t border-line py-16 lg:py-24 scroll-mt-nav" id="contact" aria-labelledby="contact-heading">
      <div className="section-inner">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — invitation */}
          <div className="lg:col-span-5">
            <div ref={leftRef} className={`lg:sticky lg:top-24 reveal-fade-up flex flex-col gap-8 ${leftVisible ? 'visible' : ''}`}>
              <div>
                <p className="kicker-rule">Let's talk</p>
                <h2 id="contact-heading" className="text-display font-medium tracking-tight text-balance mt-6">
                  Tell me the problem.{' '}
                  <span className="serif-accent">I'll map the build.</span>
                </h2>
              </div>

              <p className="text-body text-ink-muted leading-relaxed max-w-prose">
                Describe the feature or product you're building. I'll respond within
                24 hours with an honest read on approach and scope — no sales
                pressure, no jargon.
              </p>

              <div className="hairline-t pt-6">
                <ul className="flex flex-col">
                  {meta.map((item) => (
                    <li key={item.label} className="flex items-baseline gap-6 py-3 border-b border-line last:border-b-0">
                      <span className="text-kicker text-ink-faint w-24 shrink-0">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="text-body text-ink hover:text-accent-soft transition-colors break-all">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-body text-ink-muted">{item.value}</span>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-3 mt-6">
                  <span className="text-caption text-ink-faint uppercase tracking-widest">Connect</span>
                  <span className="w-px h-4 bg-line-strong" aria-hidden="true" />
                  <a href="https://linkedin.com/in/fiza-shakil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center justify-center w-10 h-10 border border-line text-ink-muted hover:text-accent-soft hover:border-accent transition-colors">
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                  <a href="https://github.com/FizaShakil" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center justify-center w-10 h-10 border border-line text-ink-muted hover:text-accent-soft hover:border-accent transition-colors">
                    <FaGithub className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div ref={formRef} className={`reveal-fade-up border border-line bg-base-2 p-7 sm:p-10 ${formVisible ? 'visible' : ''}`}>
              <div className="hairline-b pb-6 mb-8">
                <h3 className="text-subheading font-medium text-ink">Send a message</h3>
                <p className="text-caption text-ink-faint mt-1">
                  The more specific, the better — a few lines is enough.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6" aria-label="Contact form">
                <div>
                  <label htmlFor="name" className="block text-caption font-medium text-ink-muted mb-2">
                    Your name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="input-field"
                    placeholder="John Smith"
                    required
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-caption font-medium text-ink-muted mb-2">
                    Email address <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    inputMode="email"
                    className="input-field"
                    placeholder="john@yourbusiness.com"
                    required
                    autoComplete="email"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-caption font-medium text-ink-muted mb-2">
                    Tell me about the problem <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="input-field resize-none min-h-[7rem]"
                    placeholder="What are you trying to achieve? What stands in the way?"
                    required
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending...' : "Let's talk about your project"}
                  {!state.submitting && <ArrowRight className="w-4 h-4" />}
                </button>

                <p className="text-caption text-ink-faint text-center">
                  Your information is kept private and never shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;