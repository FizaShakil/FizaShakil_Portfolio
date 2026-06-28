import { useScrollReveal } from '../../hooks/useScrollReveal';

const Heading = ({ heading, subtitle }) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div ref={ref} className={`reveal-fade-up text-center mb-8 sm:mb-10 ${isVisible ? 'visible' : ''}`}>
      <h2 className="text-heading text-gray-200 font-bold text-balance px-1">
        {heading}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-body mt-3 max-w-prose mx-auto text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;
