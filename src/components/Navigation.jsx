import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ isMenuOpen, setIsMenuOpen, scrolled, activeSection, scrollToSection }) => {
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <img src="logo.png" alt="Syntropylabworks" className="logo-image" />
          </div>
          
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {['home', 'what-we-do', 'how-we-work', 'trust-pillars', 'who-we-serve', 'contact'].map(item => (
              <li key={item}>
                <a 
                  onClick={() => scrollToSection(item)}
                  className={activeSection === item ? 'active' : ''}
                >
                  {item.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
