import React, {useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useLocation } from 'react-router'
import Services from './components/Services'

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/projects' element={<Projects/>} />
      </Routes>
      <Contact/>
      <Footer/>
    </Router>
    </>
  )
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default App
