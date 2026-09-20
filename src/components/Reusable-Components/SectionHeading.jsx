import { useScrollReveal } from '../../hooks/useScrollReveal';

const SectionHeading = ({
  kicker,
  heading,
  intro,
  align = 'left',
  id,
  children,
}) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      id={id}
      className={`reveal-fade-up flex flex-col gap-4 sm:gap-5 max-w-[40rem] ${
        align === 'center' ? 'mx-auto' : ''
      } ${isVisible ? 'visible' : ''}`}
    >
      {kicker && (
        <p className={`kicker-rule ${align === 'center' ? 'justify-center' : ''}`}>{kicker}</p>
      )}
      <h2 className="text-heading font-medium tracking-tight text-balance">{heading}</h2>
      {intro && (
        <p className="text-body text-ink-muted leading-relaxed max-w-prose">{intro}</p>
      )}
      {children}
    </div>
  );
};

export default SectionHeading;