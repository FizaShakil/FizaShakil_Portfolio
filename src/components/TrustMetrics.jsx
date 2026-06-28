import trustMetrics from '../lists/trustMetricsList';
import { useStaggeredReveal } from '../hooks/useScrollReveal';

const TrustMetrics = () => {
  const [gridRef, gridVisible] = useStaggeredReveal(trustMetrics.length);

  return (
    <section className="bg-[#040a0e] border-y border-gray-800/50 py-8 sm:py-10 px-4" aria-label="Trust metrics">
      <div
        ref={gridRef}
        className="section-container grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center"
      >
        {trustMetrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`stagger-item stagger-delay-${index + 1} ${gridVisible ? 'visible' : ''}`}
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#517E4F]">{metric.value}</p>
            <p className="text-gray-400 text-caption mt-1 leading-tight px-1">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustMetrics;
