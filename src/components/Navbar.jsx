import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, useLocation } from 'react-router-dom';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { ArrowRight } from './Reusable-Components/Arrow';

const navLinks = [
  { label: 'Work', href: '#work', isHash: true },
  { label: 'How I Think', href: '#how-i-think', isHash: true },
  { label: 'About', href: '#about', isHash: true },
  { label: 'Contact', href: '#contact', isHash: true },
];

const Wordmark = ({ className = '' }) => (
  <span className={`inline-flex items-baseline gap-0.5 font-medium tracking-tight ${className}`}>
    <span className="text-ink">Fiza Shakil</span>
    <span className="w-1.5 h-1.5 bg-accent self-center mb-1" aria-hidden="true" />
  </span>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useBodyScrollLock(isOpen);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (href) => {
    closeMenu();
    if (location.pathname !== '/') {
      window.location.href = `/${href}`;
      return;
    }
    const el = document.querySelector(href);
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

  const desktopItem = (link) =>
    link.isHash ? (
      <button
        key={link.label}
        type="button"
        onClick={() => scrollToSection(link.href)}
        className="relative py-1 text-body text-ink-muted hover:text-ink transition-colors duration-200 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
      >
        {link.label}
      </button>
    ) : (
      <NavLink
        key={link.label}
        to={link.to}
        className={({ isActive }) =>
          `relative py-1 text-body transition-colors duration-200 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${
            isActive ? 'text-ink after:w-full' : 'text-ink-muted hover:text-ink'
          }`
        }
      >
        {link.label}
      </NavLink>
    );

  const mobileMenu = (
    <>
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black/70 z-[200] md:hidden"
          onClick={closeMenu}
          aria-label="Close menu overlay"
        />
      )}

      <div
        id="mobile-menu"
        className={`fixed top-0 left-0 bottom-0 h-dvh w-[min(20rem,90vw)] bg-base border-r border-line z-[210] flex flex-col transform transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-line shrink-0">
          <NavLink to="/" onClick={closeMenu} className="py-1" aria-label="Home">
            <Wordmark className="text-xl" />
          </NavLink>
          <button
            type="button"
            onClick={closeMenu}
            className="flex items-center justify-center min-h-[2.75rem] min-w-[2.75rem] border border-line text-ink-muted hover:text-ink transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="square" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-6" aria-label="Mobile menu links">
          <ul className="space-y-1">
            {[{ label: 'Home', href: null }, ...navLinks].map((link, i) => (
              <li key={link.label}>
                <button
                  type="button"
                  onClick={() => {
                    if (!link.href) {
                      closeMenu();
                      if (location.pathname !== '/') window.location.href = '/';
                      else window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      scrollToSection(link.href);
                    }
                  }}
                  className="group flex items-center justify-between w-full px-2 py-4 text-left text-ink border-b border-line transition-colors hover:text-accent-soft"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-kicker text-ink-faint">0{i + 1}</span>
                    <span className="text-body font-medium">{link.label}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="shrink-0 px-5 py-5 border-t border-line pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))]">
          <a
            href="#contact"
            onClick={closeMenu}
            className="btn-primary w-full"
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${
          scrolled
            ? 'bg-base/90 backdrop-blur-md border-b border-line py-0'
            : 'bg-transparent border-b border-transparent py-1'
        }`}
      >
        <nav className="max-w-section mx-auto px-5 sm:px-8 lg:px-12" aria-label="Main navigation">
          <div className={`flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? 'min-h-[3.25rem]' : 'min-h-[4rem]'}`}>
            <NavLink
              to="/"
              className="flex items-center shrink-0 rounded-sm hover:opacity-80 transition-opacity"
              aria-label="Fiza Shakil — Home"
              onClick={closeMenu}
            >
              <Wordmark className="text-lg sm:text-xl" />
            </NavLink>

            <div className="hidden md:flex items-center gap-7 lg:gap-9 ml-auto">
              {navLinks.map(desktopItem)}
              <a href="#contact" className="btn-secondary text-sm px-5 min-h-[2.5rem]">
                Start a Project
              </a>
            </div>

            <div className="flex items-center md:hidden shrink-0">
              <button
                type="button"
                className="flex items-center justify-center min-h-[2.75rem] min-w-[2.75rem] border border-line text-ink transition-colors"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  {isOpen ? (
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="square" />
                  ) : (
                    <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="square" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className="h-nav shrink-0" aria-hidden="true" />

      {createPortal(mobileMenu, document.body)}
    </>
  );
};

export default Navbar;