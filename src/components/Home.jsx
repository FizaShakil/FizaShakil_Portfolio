import React from 'react'
import About from './About'
import Skills from './Skills'
import HeroSection from './HeroSection'
import Services from './Services'
import ProjectsHome from './ProjectsHome'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
      <HeroSection id="home"/>
      <About/>
      <Skills/>
      <ProjectsHome/>
      <Services/>
      <Testimonials/>
    </div>
  )
}

export default Home