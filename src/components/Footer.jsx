import React from 'react';

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <img src="../public/logo.png" alt="Syntropylabworks" className="logo-image" />
            </div>
            <p>Where imagination meets innovation.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Company</h4>
              <a onClick={() => scrollToSection('what-we-do')}>What We Do</a>
              <a onClick={() => scrollToSection('how-we-work')}>How We Work</a>
              <a onClick={() => scrollToSection('trust-pillars')}>Trust Pillars</a>
            </div>
            <div className="footer-column">
              <h4>Connect</h4>
              <a onClick={() => scrollToSection('contact')}>Contact Us</a>
              <a href="mailto:hello@syntropylabworks.com">Email</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Syntropylabworks. Built on principles that last.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
