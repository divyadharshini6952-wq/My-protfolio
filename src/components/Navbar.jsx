import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Download, 
  Eye, 
  Sparkles,
  Code2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ darkMode, setDarkMode, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProgress((winScroll / height) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Leadership", href: "#leadership" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Brand Logo */}
          <a href="#" className="navbar-brand">
            <div className="brand-avatar-badge">
              <span className="brand-letters">DG</span>
            </div>
            <div className="brand-text-group">
              <span className="brand-name">Divyadharshini</span>
              <span className="brand-sub">Portfolio</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action Buttons */}
          <div className="navbar-actions">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="theme-toggle-btn"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={19} className="sun-icon" /> : <Moon size={19} className="moon-icon" />}
            </button>

            {/* Resume Button */}
            <button 
              onClick={onOpenResume}
              className="resume-nav-btn"
              title="View or Download Resume"
            >
              <Eye size={16} />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mobile-nav-actions">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="mobile-resume-btn"
                >
                  <Eye size={17} />
                  <span>View Resume</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
