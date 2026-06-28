import { useForm, ValidationError } from '@formspree/react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const whatHappensNext = [
  { step: '1', text: "I'll review your message and respond within 24 hours." },
  { step: '2', text: "We'll schedule a free 30-minute discovery call to discuss your goals." },
  { step: '3', text: "You'll receive a clear proposal with timeline, scope, and investment." },
  { step: '4', text: "No pressure — you decide if we're the right fit." },
];

const contactDetails = [
  {
    label: 'Email',
    value: 'fizashakilofficial@gmail.com',
    href: 'mailto:fizashakilofficial@gmail.com',
    icon: 'fa-solid fa-envelope',
  },
  {
    label: 'Location',
    value: 'Pakistan · Remote Worldwide',
    icon: 'fa-solid fa-location-dot',
  },
  {
    label: 'Availability',
    value: 'Mon – Fri, 9 AM – 6 PM PKT',
    icon: 'fa-solid fa-clock',
  },
];

const Contact = () => {
  const [state, handleSubmit] = useForm('mkgzebla');
  const [sectionRef, sectionVisible] = useScrollReveal();

  if (state.succeeded) {
    return (
      <section className="section-padding flex flex-col items-center justify-center bg-[#040a0e] pb-28 md:pb-20" id="contact">
        <div className="text-center max-w-lg w-full px-2">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#517E4F] rounded-full flex items-center justify-center mx-auto mb-5">
            <i className="fa-solid fa-check text-xl sm:text-2xl text-white" aria-hidden="true"></i>
          </div>
          <h2 className="text-heading text-white font-bold mb-3">Message Received!</h2>
          <p className="text-gray-400 text-body mb-6">
            Thanks for reaching out. I'll review your message and get back to you within 24 hours.
          </p>
          <div className="card-base p-5 sm:p-6 text-left space-y-3">
            <p className="text-white font-semibold text-sm">What happens next:</p>
            {whatHappensNext.map((item) => (
              <div key={item.step} className="flex gap-3 text-caption sm:text-sm">
                <span className="text-[#517E4F] font-bold shrink-0">{item.step}.</span>
                <span className="text-gray-400">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-[#040a0e] pb-28 md:pb-20 scroll-mt-nav" id="contact" aria-labelledby="contact-heading">
      <div ref={sectionRef} className={`section-container reveal-fade-up ${sectionVisible ? 'visible' : ''}`}>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Intro — first on mobile, left on desktop */}
          <div className="w-full lg:flex-1 lg:max-w-lg space-y-6">
            <div>
              <p className="text-[#517E4F] text-caption font-semibold uppercase tracking-widest mb-3">
                Get Started
              </p>
              <h2 id="contact-heading" className="text-heading text-white font-bold leading-tight text-balance">
                Let's Talk About{' '}
                <span className="text-[#517E4F]">Your Project</span>
              </h2>
            </div>

            <p className="text-gray-400 text-body leading-relaxed max-w-prose">
              Share your business challenge and what success looks like. I'll respond within 24 hours
              with honest feedback — no sales pressure, no jargon.
            </p>

            <ul className="space-y-3">
              {contactDetails.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#517E4F]/15 border border-[#517E4F]/20 shrink-0 mt-0.5">
                    <i className={`${item.icon} text-[#517E4F] text-sm`} aria-hidden="true"></i>
                  </span>
                  <div className="min-w-0">
                    <p className="text-gray-500 text-[11px] font-semibold uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-200 text-caption sm:text-sm hover:text-[#517E4F] transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-200 text-caption sm:text-sm">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 pt-1">
              <span className="text-gray-500 text-caption font-medium uppercase tracking-wider">Connect</span>
              <div className="flex gap-2">
                {[
                  { href: 'https://linkedin.com/in/fiza-shakil', icon: 'fab fa-linkedin', label: 'LinkedIn' },
                  { href: 'https://github.com/FizaShakil', icon: 'fab fa-github', label: 'GitHub' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-800 bg-[#191818] text-gray-400 hover:text-[#517E4F] hover:border-[#517E4F]/40 transition-colors"
                    aria-label={social.label}
                  >
                    <i className={`${social.icon} text-base`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-base p-5 sm:p-6">
              <p className="text-white font-semibold text-sm mb-3">What happens after you reach out</p>
              <ol className="space-y-2.5">
                {whatHappensNext.map((item) => (
                  <li key={item.step} className="flex gap-3 text-caption sm:text-sm text-gray-400">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#517E4F]/20 text-[#517E4F] text-[10px] font-bold shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Form — second on mobile, right on desktop */}
          <div className="w-full lg:flex-1 lg:max-w-lg">
            <div className="card-base p-5 sm:p-8 lg:p-10">
              <div className="mb-6 pb-5 border-b border-gray-800">
                <h3 className="text-white font-semibold text-subheading">Send a Message</h3>
                <p className="text-gray-500 text-caption mt-1">
                  Fill in the details below and I'll be in touch shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" aria-label="Contact form">
                <div>
                  <label htmlFor="name" className="block text-caption font-medium text-gray-400 mb-1.5">
                    Your Name <span className="text-[#517E4F]">*</span>
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
                  <label htmlFor="email" className="block text-caption font-medium text-gray-400 mb-1.5">
                    Email Address <span className="text-[#517E4F]">*</span>
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
                  <label htmlFor="message" className="block text-caption font-medium text-gray-400 mb-1.5">
                    Tell Me About Your Project <span className="text-[#517E4F]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="input-field resize-none min-h-[7rem]"
                    placeholder="What challenge are you trying to solve? What does success look like?"
                    required
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn-primary btn-premium w-full text-base sm:text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending...' : 'Book a Free Consultation'}
                  {!state.submitting && <span aria-hidden="true">→</span>}
                </button>

                <p className="text-gray-600 text-[11px] text-center leading-relaxed">
                  Your information is kept private and never shared with third parties.
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
