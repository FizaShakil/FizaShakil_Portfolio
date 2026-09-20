import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight } from './Reusable-Components/Arrow';

const FloatingMobileCTA = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const contactHref = '#contact';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const contactEl = document.getElementById('contact');
      const contactTop = contactEl?.getBoundingClientRect().top ?? Infinity;
      const threshold = isHome ? 320 : 200;
      const show = scrollY > threshold && contactTop > window.innerHeight * 0.5;
      setVisible(show);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 md:hidden p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] bg-gradient-to-t from-base via-base/95 to-transparent pointer-events-none"
    >
      <a
        href={contactHref}
        className="pointer-events-auto flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-light active:bg-accent-light text-base font-medium min-h-touch px-6 shadow-lg shadow-black/40 transition-colors duration-200"
        aria-label="Start a project"
      >
        Start a Project
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default FloatingMobileCTA;