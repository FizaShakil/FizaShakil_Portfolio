import Heading from './Reusable-Components/Heading';
import SectionCTA from './Reusable-Components/SectionCTA';
import myImage from '../assets/myImage.jpg';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const [sectionRef, sectionVisible] = useScrollReveal();

  return (
    <section id="about" className="section-padding" aria-labelledby="about-heading">
      <div className="section-container">
        <Heading heading="Your Business Partner, Not Just a Developer" />
        <div
          ref={sectionRef}
          className={`flex flex-col md:flex-row items-center gap-8 md:gap-10 reveal-fade-up ${sectionVisible ? 'visible' : ''}`}
        >
          <div className="w-48 sm:w-56 md:w-72 shrink-0">
            <img
              src={myImage}
              alt="Fiza Shakil — digital product consultant helping businesses grow"
              className="w-full aspect-square object-cover rounded-2xl shadow-2xl border border-gray-800"
              loading="lazy"
              width={320}
              height={320}
            />
          </div>
          <div className="flex-1 space-y-4 text-gray-300 text-body max-w-prose md:max-w-none">
            <p>
              I'm <strong className="text-white font-medium">Fiza Shakil</strong> — I help startups and businesses
              turn ideas into fast, scalable digital products that attract customers, automate operations,
              and grow revenue.
            </p>
            <p>
              Whether you're launching your first product, replacing a slow outdated website, or building
              an internal system to save your team hours every week — I focus on understanding your business
              goals first, then building solutions that deliver measurable results.
            </p>
            <p className="hidden sm:block">
              My clients include SaaS founders, restaurant owners, creative professionals, and growing
              businesses who needed a partner they could trust — someone who communicates clearly, meets
              deadlines, and actually delivers on promises.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2">
              {[
                { label: 'Projects Delivered', value: '5+' },
                { label: 'Years Experience', value: '1+' },
                { label: 'Remote Worldwide', value: 'PKT' },
              ].map((stat) => (
                <div key={stat.label} className="card-base p-3 sm:p-4 text-center">
                  <p className="text-[#517E4F] font-bold text-lg sm:text-xl">{stat.value}</p>
                  <p className="text-gray-500 text-[10px] sm:text-xs mt-0.5 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <SectionCTA text="Let's Build Something Together" />
      </div>
    </section>
  );
};

export default About;
