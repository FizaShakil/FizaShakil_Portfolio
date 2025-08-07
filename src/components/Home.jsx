import React from 'react'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import HeroSection from './HeroSection'
import Services from './Services'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      <HeroSection id="home"/>
      <About/>
      <Skills/>
      <Projects/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default Home