import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const FloatingMobileCTA = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const contactHref = isHome ? '#contact' : '/#contact';

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
      className="fixed bottom-0 inset-x-0 z-40 md:hidden p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] bg-gradient-to-t from-[#04090d] via-[#04090d]/95 to-transparent pointer-events-none"
    >
      <a
        href={contactHref}
        className="pointer-events-auto flex items-center justify-center gap-2 w-full bg-[#517E4F] hover:bg-[#6a9a68] active:bg-[#6a9a68] text-white font-semibold rounded-xl min-h-touch px-6 shadow-lg shadow-black/40 transition-colors duration-200"
        aria-label="Book a free consultation"
      >
        Book a Free Consultation
        <i className="fa-solid fa-arrow-right text-sm" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default FloatingMobileCTA;
