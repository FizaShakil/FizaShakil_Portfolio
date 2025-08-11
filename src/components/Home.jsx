import React from 'react'
import About from './About'
import Skills from './Skills'
import HeroSection from './HeroSection'
import Services from './Services'
import ProjectsHome from './ProjectsHome'

const Home = () => {
  return (
    <div>
      <HeroSection id="home"/>
      <About/>
      <Skills/>
      <ProjectsHome/>
      <Services/>
    </div>
  )
}

export default Home