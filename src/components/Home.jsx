import SEO from './SEO';
import HeroSection from './HeroSection';
import Services from './Services';
import ProjectsHome from './ProjectsHome';
import HowIThink from './HowIThink';
import Process from './Process';
import About from './About';
import Experience from './Experience';
import TrustSignals from './TrustSignals';
import FAQ from './FAQ';
import Skills from './Skills';

const Home = () => {
  return (
    <main>
      <SEO
        title="Fiza Shakil | Product-Minded Full-Stack Developer"
        description="I build digital products that solve real business problems — web apps, e-commerce platforms, business systems, and AI-powered products, from the problem first."
        canonical="https://fiza-shakil.dev"
        keywords="product-minded full-stack developer, full stack developer, React developer, Node.js developer, product-focused developer, e-commerce development, business systems, AI-powered products, web applications"
      />
      <HeroSection />
      <Services />
      <ProjectsHome />
      <HowIThink />
      <Process />
      <About />
      <Experience />
      <TrustSignals />
      <FAQ />
      <Skills />
    </main>
  );
};

export default Home;