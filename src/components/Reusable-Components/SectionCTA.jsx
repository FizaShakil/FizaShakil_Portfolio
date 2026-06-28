const SectionCTA = ({ text = 'Book a Free Consultation', href = '#contact' }) => (
  <div className="text-center mt-8 sm:mt-12 px-2">
    <a
      href={href}
      className="btn-primary btn-premium inline-flex items-center justify-center gap-2 max-w-full"
      aria-label={text}
    >
      <span className="truncate">{text}</span>
      <i className="fa-solid fa-arrow-right text-sm shrink-0" aria-hidden="true"></i>
    </a>
  </div>
);

export default SectionCTA;
