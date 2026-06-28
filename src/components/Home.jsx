import SEO from './SEO';
import HeroSection from './HeroSection';
import TrustMetrics from './TrustMetrics';
import About from './About';
import Services from './Services';
import ProjectsHome from './ProjectsHome';
import WhyWorkWithMe from './WhyWorkWithMe';
import Process from './Process';
import WhoIWorkWith from './WhoIWorkWith';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Skills from './Skills';
import BusinessCapabilities from './BusinessCapabilities';

const Home = () => {
  return (
    <main>
      <SEO
        title="Fiza Shakil | Custom Web Development for Growing Businesses"
        description="I help startups and businesses launch products, improve customer experience, and automate workflows through custom web solutions. Book a free discovery call."
        canonical="https://fiza-shakil.dev"
        keywords="Web Development, Business Websites, Custom Web Applications, SaaS Development, Landing Pages, Business Automation, Website Developer, Digital Products, Startup Development, High-Converting Websites, Full Stack Solutions"
      />
      <HeroSection />
      <TrustMetrics />
      <About />
      <Services />
      <ProjectsHome />
      <WhyWorkWithMe />
      <Process />
      <WhoIWorkWith />
      <Testimonials />
      <FAQ />
      <BusinessCapabilities />
      <Skills />
    </main>
  );
};

export default Home;
