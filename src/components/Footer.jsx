const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-6 sm:py-8 px-4 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] md:pb-8" role="contentinfo">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-caption text-gray-500 text-center sm:text-left">
        <p>© {year} Fiza Shakil. All rights reserved.</p>
        <p className="max-w-xs sm:max-w-none">Helping businesses grow through custom digital products.</p>
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/fiza-shakil" target="_blank" rel="noopener noreferrer" className="touch-target hover:text-[#517E4F] transition-colors rounded-lg" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/FizaShakil" target="_blank" rel="noopener noreferrer" className="touch-target hover:text-[#517E4F] transition-colors rounded-lg" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="#contact" className="touch-target hover:text-[#517E4F] transition-colors px-2 rounded-lg">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
