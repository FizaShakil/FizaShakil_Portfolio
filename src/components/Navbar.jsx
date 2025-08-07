import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-gray-200 px-4 py-4 bg-[#04090d] sticky top-0 z-50 shadow-md pb-5">

      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <button
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-lg md:hidden`}></i>
          </button>
          <h2 className="text-xl font-bold">Fiza Shakil</h2>
        </div>

        {/* DESKTOP Header Icons */}
        <div className="hidden md:flex items-center gap-6 text-sm mr-5">
          <div className="flex flex-col justify-end items-center gap-2">
            <span>
              <NavLink to="/">
                  Home
             </NavLink>
            </span>
          </div>
          <div className="flex flex-col justify-end items-center gap-2">
            <span>
              <a href="#about">
                   About
             </a>
            </span>
          </div>
          <div className="flex flex-col justify-end items-center gap-2">
            <span>
              <a href="#skills">
                   Skills
             </a>
            </span>
          </div>
          <div className="flex flex-col justify-end items-center gap-2">
            <span>
              <a to="#projects">
                   Projects
             </a>
            </span>
          </div>
          <div className="flex flex-col justify-end items-center gap-2 bg-[#517E4F] border-[1px] border-[#517E4F] duration-300 hover:bg-[#04090d] rounded-md px-4 py-2">
            <span>
            <a to="#contact">
                   Contact
             </a>
            </span>
          </div>
        </div>
      </div>

    

      {/* MOBILE + SIDEPANEL MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#151515] border-r-gray-700 border-r-[0.1px] z-50 p-5 overflow-y-auto transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full '
        }`}
      >

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">
            <span className="text-white">C</span>rystal
          </h2>
          <button onClick={() => setIsOpen(false)}>
            <i className="fas fa-times text-white text-lg"></i>
          </button>
        </div>

        {/* MOBILE VIEW (all header icons) */}

        {/* SHARED VIEW: Menu Items */}
   <div
      className={`fixed top-0 left-0 h-full w-64 bg-[#151515] border-r-gray-700 border-r-[0.1px] z-50 p-5 overflow-y-auto transform transition-transform duration-300 ${
       isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
     >
  <div className="flex items-center justify-between mb-6">
    <button onClick={() => setIsOpen(false)}>
      <i className="fas fa-times text-white text-lg"></i>
    </button>
  </div>

  {/* SHARED VIEW: Menu Items */}
  <div className="space-y-2 text-sm">
    <ul className="space-y-2">
      <li>
        <i className="fa-solid fa-house text-gray-400 text-base -mb-3 mr-2"></i>
        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
      </li>
      <li>
        <i className="fa-solid fa-user text-gray-400 text-base -mb-3 mr-2"></i>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
      </li>
      <li>
        <i className="fa-solid fa-briefcase text-gray-400 text-base -mb-3 mr-2"></i>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
      </li>
      <li>
        <i className="fa-solid fa-address-card text-gray-400 text-base -mb-3 mr-2"></i>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
      </li>
      <li>
        <i className="fa-solid fa-book text-gray-400 text-base -mb-3 mr-2"></i>
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
      </li>
      <li>
        <i className="fa-solid fa-book text-gray-400 text-base -mb-3 mr-2"></i>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </li>
    </ul>
  </div>
</div>

      </div>
    </nav>
  );
};

export default Navbar;