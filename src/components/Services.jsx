// import React from 'react';
// import Heading from './Reusable-Components/Heading';

// const services = [
//   { title: 'Web Development', description: 'Full-stack websites with modern UI & performance.' },
//   { title: 'Shopify Themes', description: 'Custom & responsive Shopify themes for eCommerce.' },
//   { title: 'UI/UX Design', description: 'Figma designs with usability and aesthetics.' },
//   { title: 'SEO Optimization', description: 'Improve search rankings and site visibility.' },
//   { title: 'Maintenance', description: 'Ongoing support, updates, and performance improvements.' },
// ];

// const ServicesSection = () => {
//   return (
//     <div className="py-16 px-6 text-white">
//       <div className=" mx-auto">
//         <Heading heading={"Services"}/>

//         {/* Grid for large screens */}
//         <div className="hidden md:grid grid-cols-3 w-[80%]">
//           {services.slice(0, 3).map((service, index) => (
//             <div
//               key={index}
//               className="w-[300px] border-l-8 border-[0.5px] border-green-600 shadow-md py-4 px-2 rounded-md hover:shadow-lg transition"
//             >
//               <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//               <p className="text-gray-500">{service.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Centered bottom two cards */}
//         <div className="hidden md:flex justify-center gap-8 mt-8">
//           {services.slice(3).map((service, index) => (
//             <div
//               key={index}
//               className="w-[calc(33%-1rem)] border-l-4 border-green-600 shadow-md py-4 px-2 rounded-md hover:shadow-lg transition"
//             >
//               <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
//               <p className="text-gray-500">{service.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Responsive stacked layout for mobile/tablet */}
//         <div className="md:hidden flex flex-col gap-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="border-l-4 border-green-600 shadow-md p-6 rounded-md hover:shadow-lg transition"
//             >
//               <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//               <p className="text-gray-600">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;
import React from 'react';
import Heading from './Reusable-Components/Heading';

const servicesData = [
  {
    title: "E-Commerce Full stack development",
    description: "From dynamic product catalogs to secure payment gateways and intuitive admin panels, I build complete e-commerce solutions that drive sales and enhance user experience.",
  },
  {
    title: "Frontend Development",
    description: "I create engaging, responsive, and high-performance user interfaces using modern frameworks like React.js, ensuring a seamless experience across all devices.",
  },
  {
    title: "API Development (Node JS and Express JS",
    description: "I develop robust, scalable, and secure APIs with Node.js, Express.js, and MongoDB to power your web and mobile applications.",
  },
  {
    title: "Management System",
    description: " I Develop tailored management systems for various niches including restaurants, e-commerce, and small businesses, optimizing operations and increasing efficiency.",
  },
  {
    title: "Full-Stack Website Development",
    description: "Delivering end-to-end web solutions, from database design and backend logic to captivating frontend interfaces, ensuring a cohesive and functional product.",
  },
];

const Services = () => {
  return (
    <div className="w-full px-4 md:px-20 pt-5 pb-16 text-center bg-[#040a0e] bg-opacity-[90%] text-white">
      <Heading heading={"Services"}/>

      {/* Top Row: 3 Cards */}
      <div className="flex flex-col items-center space-y-10 md:space-y-0 md:flex-row md:justify-center md:space-x-4 mb-12">
        {servicesData.slice(0, 3).map((service, index) => (
          <div
            key={index}
            className="w-full max-w-xs md:h-[40vh] text-left border-l-[6px] rounded-md border-[#517E4F] bg-[#191818] shadow-md px-4 py-3"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
            <p className="text-gray-400 text-sm lg:text-base">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Bottom Row: 2 Cards */}
      <div className="flex flex-col rounded-md items-center space-y-10 md:space-y-0 md:flex-row md:justify-center md:space-x-8">
        {servicesData.slice(3).map((service, index) => (
          <div
            key={index}
            className="w-full max-w-xs md:max-w-xl md:w-[475px] text-left border-l-[6px] rounded-md border-[#517E4F] bg-[#191818] shadow-md px-6 py-3"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm lg:text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
