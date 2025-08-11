// import React, { useState } from 'react';
// import Heading from './Reusable-Components/Heading';


// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     concern: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can integrate with Formspree, FormSubmit, etc.
//     alert('Form submitted!');
//   };

//   return (
//     <div>
//     <section className="text-white pb-16 pt-6 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto" id='contact'>
//         <div>
//           <Heading heading="Get in Touch" />
//         </div>

//         <div className="flex flex-col lg:flex-row gap-12 mt-4">
//           {/* Contact Form */}
//           <div className="flex-1 text-gray-900 rounded-2xl shadow-xl p-8 md:p-12 transform transition-all duration-300 hover:shadow-2xl">
//             <h2 className="text-3xl font-bold mb-4 text-gray-400">Send a Message</h2>
//             <p className="text-gray-300 mb-8">
//               Fill out the form below and I'll get back to you as soon as possible.
//             </p>

//             <form onSubmit={handleSubmit} className="space-y-6 text-gray-300">
//               <div>
//                 <label className="block text-sm font-semibold mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full border-[1px] border-gray-200 bg-[#04090d] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#517E4F] transition-all duration-300 hover:border-[#517E4F] transform hover:scale-[1.02]"
//                   placeholder="Enter your full name"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full border-[1px] bg-[#04090d] border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#517E4F] transition-all duration-300 hover:border-[#517E4F] transform hover:scale-[1.02]"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold mb-2">
//                   Your Message
//                 </label>
//                 <textarea
//                   name="concern"
//                   value={formData.concern}
//                   onChange={handleInputChange}
//                   rows="4"
//                   className="w-full border-[1px] bg-[#04090d] border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#517E4F] transition-all duration-300 hover:border-[#517E4F] transform hover:scale-[1.02] resize-none"
//                   placeholder="Write your message..."
//                   required
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-[#517E4F] text-white py-3 px-6 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#517E4F]/30"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Contact Info */}
//           <div className="flex-1 space-y-6 text-gray-200 lg:mt-5">
//             <div className="p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:shadow-2xl">
//               <h2 className="text-3xl font-bold text-gray-400 mb-6">Contact Info</h2>

//               <div className="mb-6">
//                 <h4 className="font-semibold text-lg">Email:</h4>
//                 <p className="text-gray-300 mt-1">fizashakil888@gmail.com</p>
//               </div>

//               <div>
//                 <h4 className="font-semibold text-lg mb-2">Socials:</h4>
//                 <div className="flex space-x-4 text-2xl">
//                   <a href="https://github.com/FizaShakil" target="_blank" rel="noopener noreferrer" className="hover:text-[#517E4F] transform transition-all duration-300 hover:scale-125 hover:rotate-12">
//                     <i className="fab fa-github"></i>
//                   </a>
//                   <a href="https://linkedin.com/in/fiza-shakil" target="_blank" rel="noopener noreferrer" className="hover:text-[#517E4F] transform transition-all duration-300 hover:scale-125 hover:rotate-12">
//                     <i className="fab fa-linkedin"></i>
//                   </a>
//                   <a href="https://facebook.com/FIZA.SHAKIL25" target="_blank" rel="noopener noreferrer" className="hover:text-[#517E4F] transform transition-all duration-300 hover:scale-125 hover:rotate-12">
//                     <i className="fab fa-facebook"></i>
//                   </a>
//                   <a href="https://instagram.com/developer_fiza" target="_blank" rel="noopener noreferrer" className="hover:text-[#517E4F] transform transition-all duration-300 hover:scale-125 hover:rotate-12">
//                     <i className="fab fa-instagram"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//       <p className='text-white text-sm py-5 w-full text-center  bg-[#000000]'>Developed by Fiza Shakil - All rights reserved</p>
//     </div>
//   );
// };

// export default Contact;

import React from 'react';
import Heading from './Reusable-Components/Heading';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mkgzkewb"); // Your Formspree form ID

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
      <section className="text-white pb-16 pt-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto" id="contact">
          <div>
            <Heading heading="Get in Touch" />
          </div>

          <div className="flex flex-col lg:flex-row gap-12 mt-4">
            {/* Contact Form */}
            <div className="flex-1 text-gray-900 rounded-2xl shadow-xl p-8 md:p-12 transform transition-all duration-300 hover:shadow-2xl">
              <h2 className="text-3xl font-bold mb-4 text-gray-400">Send a Message</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 text-gray-300">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="w-full border border-gray-200 bg-[#04090d] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#517E4F] hover:border-[#517E4F] transform hover:scale-[1.02]"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full border border-gray-200 bg-[#04090d] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#517E4F] hover:border-[#517E4F] transform hover:scale-[1.02]"
                    placeholder="Enter your email"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full border border-gray-200 bg-[#04090d] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#517E4F] hover:border-[#517E4F] transform hover:scale-[1.02] resize-none"
                    placeholder="Write your message..."
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
                  className="w-full bg-[#517E4F] text-white py-3 px-6 rounded-lg font-semibold text-lg hover:opacity-90 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#517E4F]/30"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex-1 space-y-6 text-gray-200 lg:mt-5">
              <div className="p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-gray-400 mb-6">Contact Info</h2>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg">Email:</h4>
                  <p className="text-gray-300 mt-1">fizashakil888@gmail.com</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Socials:</h4>
                  <div className="flex space-x-4 text-2xl">
                    <a href="https://github.com/FizaShakil" target="_blank" rel="noopener noreferrer" className="hover:text-[#517E4F] transform hover:scale-125 hover:rotate-12">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/fiza-shakil" target="_blank" rel="noopener noreferrer" className="hover:text-[#517E4F] transform hover:scale-125 hover:rotate-12">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://facebook.com/FIZA.SHAKIL25" target="_blank" rel="noopener noreferrer" className="hover:text-[#517E4F] transform hover:scale-125 hover:rotate-12">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://instagram.com/developer_fiza" target="_blank" rel="noopener noreferrer" className="hover:text-[#517E4F] transform hover:scale-125 hover:rotate-12">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

