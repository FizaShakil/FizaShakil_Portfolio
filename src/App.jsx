import React, {useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes, useLocation, Link} from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import CaseStudy from './components/CaseStudy'
import FashionistaCaseStudy from './components/FashionistaCaseStudy'
import GlanceCaseStudy from './components/GlanceCaseStudy'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingMobileCTA from './components/FloatingMobileCTA'
import { ArrowLeft } from './components/Reusable-Components/Arrow'

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
    <div className="min-h-screen">
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/case-study/2' element={<FashionistaCaseStudy/>} />
        <Route path='/case-study/6' element={<GlanceCaseStudy/>} />
        <Route path='/case-study/:id' element={<CaseStudy/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Contact/>
      <Footer/>
      <FloatingMobileCTA />
    </div>
  );
}

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

const NotFound = () => (
  <div className="min-h-screen-nav section section-bg-a flex flex-col items-center justify-center gap-6 text-center px-4">
    <p className="kicker-rule">404</p>
    <h1 className="text-heading font-medium text-ink text-balance">Page not found.</h1>
    <p className="text-body text-ink-muted max-w-prose">
      The page you're looking for doesn't exist or has moved. Let's get you back on track.
    </p>
    <Link to="/" className="btn-primary">
      <ArrowLeft className="w-4 h-4" />
      Back to Home
    </Link>
  </div>
);

export default App
