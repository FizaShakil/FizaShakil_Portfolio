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
            className="text-white transform transition-all duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-lg md:hidden`}></i>
          </button>
          <p className="text-xl font-mono font-bold transform transition-all duration-300 hover:scale-105">
           {'<F/>'}
          </p>
        </div>

        {/* DESKTOP Header Icons */}
        <div className="hidden md:flex items-center gap-6 text-sm mr-5">
          <div className="flex flex-col justify-end items-center gap-2">
            <span className="transform transition-all duration-300 hover:text-[#517E4F]">
              <NavLink to="/">
                  Home
             </NavLink>
            </span>
          </div>
          <div className="flex flex-col justify-end items-center gap-2">
            <span className="transform transition-all duration-300 hover:text-[#517E4F]">
             <NavLink to="/projects">
                   Projects
             </NavLink>
            </span>
          </div>
          <div className="flex flex-col justify-end items-center gap-2 bg-[#517E4F] border-[1px] border-[#517E4F] hover:bg-[#04090d] rounded-md px-4 py-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <span>
            <a href="#contact">
                   Contact
             </a>
            </span>
          </div>
        </div>
      </div>

      {/* MOBILE + SIDEPANEL MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#151515] border-r-gray-700 border-r-[0.1px] z-50 p-5 overflow-y-auto transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-mono font-bold">
            {'<F/>'}
          </h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="transform transition-all duration-300 hover:scale-110"
          >
            <i className="fas fa-times text-white text-lg"></i>
          </button>
        </div>

        {/* SHARED VIEW: Menu Items */}
        <div className="space-y-2 text-sm">
          <ul className="space-y-2">
            <li className="transform transition-all duration-300 hover:scale-105 hover:text-[#517E4F]">
              <i className="fa-solid fa-house text-gray-400 text-base -mb-3 mr-2"></i>
              <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            </li>
            <li className="transform transition-all duration-300 hover:scale-105 hover:text-[#517E4F]">
              <i className="fa-solid fa-briefcase text-gray-400 text-base -mb-3 mr-2"></i>
              <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
            </li>
            <li className="transform transition-all duration-300 hover:scale-105 hover:text-[#517E4F]">
              <i className="fa-solid fa-book text-gray-400 text-base -mb-3 mr-2"></i>
              <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;