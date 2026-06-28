import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, useLocation } from 'react-router-dom';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

const navLinks = [
  { label: 'Services', href: '#services', isHash: true, icon: 'fa-solid fa-layer-group' },
  { label: 'Case Studies', href: '#case-studies', isHash: true, icon: 'fa-solid fa-chart-line' },
  { label: 'Process', href: '#process', isHash: true, icon: 'fa-solid fa-list-check' },
  { label: 'Projects', to: '/projects', isHash: false, icon: 'fa-solid fa-folder-open' },
  { label: 'Contact', href: '#contact', isHash: true, icon: 'fa-solid fa-envelope' },
];

const Logo = ({ className = '' }) => (
  <span className={`font-mono font-bold tracking-tight ${className}`}>
    <span className="text-[#517E4F]">{'<'}</span>
    <span className="text-white">F</span>
    <span className="text-[#517E4F]">{'/>'}</span>
  </span>
);

const desktopNavItemClass =
  'py-2 text-sm font-medium transition-colors duration-200 no-underline';

const getDesktopNavClass = (isActive) =>
  `${desktopNavItemClass} ${
    isActive
      ? 'text-[#6a9a68] hover:text-[#517E4F]'
      : 'text-gray-200 hover:text-[#517E4F]'
  } focus-visible:text-[#517E4F]`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  useBodyScrollLock(isOpen);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  const scrollToSection = (id) => {
    closeMenu();
    if (location.pathname !== '/') {
      window.location.href = `/${id}`;
      return;
    }
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, closeMenu]);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  const mobileLinkClass =
    'flex items-center gap-4 w-full py-4 px-4 rounded-xl text-gray-100 hover:bg-white/[0.07] hover:text-white active:bg-white/[0.1] transition-colors text-base font-medium';

  const mobileMenu = (
    <>
      {/* Backdrop */}
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[200] md:hidden"
          onClick={closeMenu}
          aria-label="Close menu overlay"
        />
      )}

      {/* Full-height sidebar — portaled to body so fixed + h-dvh work correctly */}
      <div
        id="mobile-menu"
        className={`fixed top-0 left-0 bottom-0 h-dvh w-[min(20rem,90vw)] bg-[#0a0a0a] border-r border-gray-800/80 shadow-2xl z-[210] flex flex-col transform transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-gray-800 bg-[#04090d] shrink-0">
          <NavLink to="/" onClick={closeMenu} className="py-1" aria-label="Home">
            <Logo className="text-xl" />
          </NavLink>
          <button
            type="button"
            onClick={closeMenu}
            className="flex items-center justify-center min-h-[2.75rem] min-w-[2.75rem] rounded-xl border border-gray-700 bg-[#151515] text-gray-300 hover:text-white hover:border-gray-600 transition-colors"
            aria-label="Close menu"
          >
            <i className="fas fa-xmark text-lg" aria-hidden="true"></i>
          </button>
        </div>

        {/* Nav links — fills remaining height */}
        <nav className="flex-1 overflow-y-auto overscroll-contain px-3 py-5" aria-label="Mobile menu links">
          <p className="px-4 pb-3 text-[11px] font-semibold uppercase tracking-widest text-gray-500">
            Menu
          </p>
          <ul className="space-y-1.5">
            <li>
              <NavLink to="/" onClick={closeMenu} className={mobileLinkClass}>
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#517E4F]/20 border border-[#517E4F]/25 shrink-0">
                  <i className="fa-solid fa-house text-[#517E4F] text-lg" aria-hidden="true"></i>
                </span>
                Home
              </NavLink>
            </li>
            {navLinks.map((link) =>
              link.isHash ? (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className={`${mobileLinkClass} bg-transparent border-none cursor-pointer text-left`}
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#517E4F]/20 border border-[#517E4F]/25 shrink-0">
                      <i className={`${link.icon} text-[#517E4F] text-lg`} aria-hidden="true"></i>
                    </span>
                    {link.label}
                  </button>
                </li>
              ) : (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `${mobileLinkClass}${isActive ? ' text-[#6a9a68]' : ''}`
                    }
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#517E4F]/20 border border-[#517E4F]/25 shrink-0">
                      <i className={`${link.icon} text-[#517E4F] text-lg`} aria-hidden="true"></i>
                    </span>
                    {link.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Footer tagline only — no CTA button */}
        <div className="shrink-0 px-5 py-4 border-t border-gray-800 bg-[#04090d] pb-[calc(1rem+env(safe-area-inset-bottom,0px))]">
          <p className="text-gray-500 text-xs text-center leading-relaxed">
            Digital products that grow your business
          </p>
        </div>
      </div>
    </>
  );

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[100] bg-[#04090d]/97 backdrop-blur-md border-b border-gray-800/60 shadow-lg shadow-black/20">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6" aria-label="Main navigation">
          <div className="flex items-center justify-between gap-3 min-h-[3.5rem]">
            <NavLink
              to="/"
              className="flex items-center shrink-0 py-2 pr-2 rounded-lg hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-[#517E4F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#04090d]"
              aria-label="Fiza Shakil — Home"
              onClick={closeMenu}
            >
              <Logo className="text-xl sm:text-2xl" />
            </NavLink>

            <div className="hidden md:flex items-center gap-5 lg:gap-6 ml-auto">
              {navLinks.slice(0, -1).map((link) =>
                link.isHash ? (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className={`${getDesktopNavClass(false)} bg-transparent border-none cursor-pointer`}
                  >
                    {link.label}
                  </button>
                ) : (
                  <NavLink
                    key={link.label}
                    to={link.to}
                    className={({ isActive }) => getDesktopNavClass(isActive)}
                  >
                    {link.label}
                  </NavLink>
                )
              )}
              <a
                href="#contact"
                className="bg-[#517E4F] hover:bg-[#6a9a68] text-white rounded-lg px-4 lg:px-5 py-2.5 font-semibold transition-colors duration-200 btn-premium whitespace-nowrap text-sm"
              >
                Book a Consultation
              </a>
            </div>

            <div className="flex items-center gap-2.5 md:hidden ml-auto shrink-0">
              <a
                href="#contact"
                className="flex items-center justify-center min-h-[2.75rem] min-w-[2.75rem] rounded-xl border border-[#517E4F]/50 bg-[#517E4F]/15 text-[#517E4F] hover:bg-[#517E4F]/25 transition-colors"
                aria-label="Book a free consultation"
              >
                <i className="fa-solid fa-calendar-check text-lg" aria-hidden="true"></i>
              </a>
              <button
                type="button"
                className="flex items-center justify-center min-h-[2.75rem] min-w-[2.75rem] rounded-xl border border-gray-700 bg-[#151515] text-gray-200 hover:border-[#517E4F]/50 hover:text-white transition-colors"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <i
                  className={`fas ${isOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer — keeps page content below the fixed navbar */}
      <div className="h-nav shrink-0" aria-hidden="true" />

      {createPortal(mobileMenu, document.body)}
    </>
  );
};

export default Navbar;
