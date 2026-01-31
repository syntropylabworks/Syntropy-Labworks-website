import React from 'react';
import { Shield, ArrowRight, ChevronDown } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="grid-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <Shield size={16} />
            <span>Closed Environment Engineering</span>
          </div>
          <h1 className="hero-title">
            Helping businesses, turning ideas into <span className="highlight">secure, scalable systems.</span>
          </h1>
          <p className="hero-subtitle">
            We operate as a closed engineering environment, partnering with businesses to build secure, scalable products.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
              Start Your Project <ArrowRight size={20} />
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('what-we-do')}>
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="scroll-indicator" onClick={() => scrollToSection('what-we-do')}>
        <ChevronDown />
      </div>
    </section>
  );
};

export default Hero;
