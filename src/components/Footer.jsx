import { FaLinkedinIn, FaGithub } from 'react-icons/fa6';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="section-bg-a border-t border-line py-8 sm:py-10 px-4 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] md:pb-10" role="contentinfo">
      <div className="section-inner flex flex-col sm:flex-row items-center justify-between gap-4 text-caption text-ink-faint text-center sm:text-left">
        <p>© {year} Fiza Shakil. All rights reserved.</p>
        <p className="max-w-xs sm:max-w-none">
          Product-minded full-stack developer — building software that solves real business problems.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://linkedin.com/in/fiza-shakil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-9 h-9 border border-line text-ink-muted hover:text-accent-soft hover:border-accent transition-colors"
          >
            <FaLinkedinIn className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://github.com/FizaShakil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-9 h-9 border border-line text-ink-muted hover:text-accent-soft hover:border-accent transition-colors"
          >
            <FaGithub className="w-3.5 h-3.5" />
          </a>
          <a href="#contact" className="hover:text-accent-soft transition-colors px-2">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;