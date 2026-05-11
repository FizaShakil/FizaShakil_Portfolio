import React from 'react'
import SEO from './SEO'
import About from './About'
import Skills from './Skills'
import HeroSection from './HeroSection'
import Services from './Services'
import ProjectsHome from './ProjectsHome'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
      <SEO 
        title="Fiza Shakil | Full Stack SaaS Developer"
        description="Passionate Full Stack Developer specializing in React.js, Node.js, MySQL, and modern web technologies. Building scalable SaaS applications and enterprise solutions with 3+ years of experience."
        canonical="https://fiza-shakil.dev"
        keywords="Fiza Shakil, Full Stack Developer, React Developer, Node.js, MySQL, MERN Stack, SaaS Developer, Web Development, JavaScript, TypeScript, Next.js, MongoDB, Express.js"
      />
      <HeroSection id="home"/>
      <About/>
      <Skills/>
      <ProjectsHome/>
      <Services showSEO={false} />
      <Testimonials/>
    </div>
  )
}

export default Home