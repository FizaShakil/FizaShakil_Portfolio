import React, {useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import CaseStudy from './components/CaseStudy'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Router>
      <AppContent />
    </Router>
    </>
  )
}

function AppContent() {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/case-study/:id' element={<CaseStudy/>} />
      </Routes>
      <Contact/>
      <Footer/>
    </>
  );
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default App
