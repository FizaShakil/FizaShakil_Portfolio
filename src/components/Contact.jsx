import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  const [state, handleSubmit] = useForm("mkgzebla"); // Your Formspree form ID
  const [sectionRef, sectionVisible] = useScrollReveal();

  if (state.succeeded) {
    return (
      <section className="text-white py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
        <p className="text-lg bg-green-800 px-6 py-3 rounded-lg shadow-lg">
           Thanks for your message! I'll get back to you soon.
        </p>
      </section>
    );
  }

  return (
    <div>
      <section className="text-white pb-16 pt-16 px-4 sm:px-6 lg:px-8 bg-[#040a0e]" id="contact">
        <div ref={sectionRef} className={`max-w-7xl mx-auto reveal-fade-up ${sectionVisible ? 'visible' : ''}`} >
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            {/* Left Side - Ready to build section */}
            <div className="flex-1 space-y-6 text-left max-w-lg">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Ready to build<br />
                something<br />
                <span className="text-[#517E4F]">extraordinary</span>?
              </h1>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Currently accepting new projects and consulting engagements. Let's discuss your vision.
              </p>

              <div className="space-y-4">
                {/* Email Section */}
                <div className="space-y-1">
                  <h3 className="text-gray-500 text-xs font-medium uppercase tracking-wider">EMAIL ME</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-[#517E4F] rounded-md flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">fizashakilofficial@gmail.com</p>
                  </div>
                </div>

                {/* Location Section */}
                <div className="space-y-1">
                  <h3 className="text-gray-500 text-xs font-medium uppercase tracking-wider">Current Location</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-[#517E4F] rounded-md flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">Pakistan / Remote Worldwide</p>
                  </div>
                </div>

                {/* Work Hours Section */}
                <div className="space-y-1">
                  <h3 className="text-gray-500 text-xs font-medium uppercase tracking-wider">Work Hours</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-[#517E4F] rounded-md flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">Mon - Fri: 09:00 - 18:00 PKT</p>
                  </div>
                </div>

                {/* Connect Socially Section */}
                <div className="space-y-2">
                  <h3 className="text-gray-500 text-xs font-medium uppercase tracking-wider">Connect Socially</h3>
                  <div className="flex space-x-3">
                    <a href="https://linkedin.com/in/fiza-shakil" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#517E4F] transition-all duration-300 transform hover:scale-110">
                      <i className="fab fa-linkedin text-lg"></i>
                    </a>
                    <a href="https://github.com/FizaShakil" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#517E4F] transition-all duration-300 transform hover:scale-110">
                      <i className="fab fa-github text-lg"></i>
                    </a>
                    <a href="https://instagram.com/developer_fiza" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#517E4F] transition-all duration-300 transform hover:scale-110">
                      <i className="fab fa-instagram text-lg"></i>
                    </a>
                     <a href="https://facebook.com/FIZA.SHAKIL25" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#517E4F] transition-all duration-300 transform hover:scale-110">
                      <i className="fab fa-facebook text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex-1 bg-[#1a1a1a] rounded-2xl shadow-xl p-8 md:p-12 max-w-lg w-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="w-full bg-[#2a2a2a] border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#517E4F] focus:border-transparent"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="w-full bg-[#2a2a2a] border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#517E4F] focus:border-transparent"
                      placeholder="john@example.com"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    className="w-full bg-[#2a2a2a] border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#517E4F] focus:border-transparent resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-[#517E4F] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#6a9a68] transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                  {!state.submitting && <span>→</span>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

