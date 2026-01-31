import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import HowWeWork from './components/HowWeWork';
import TrustPillars from './components/TrustPillars';
import WhoWeServe from './components/WhoWeServe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'what-we-do', 'how-we-work', 'trust-pillars', 'who-we-serve', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="app">
      <Navigation 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} />
      <Services />
      <HowWeWork />
      <TrustPillars />
      <WhoWeServe />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;
