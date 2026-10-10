import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  Heart, 
  Code2 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-top-row">
          <div className="footer-brand-side">
            <div className="brand-avatar-badge">
              <span className="brand-letters">DG</span>
            </div>
            <div className="footer-brand-text">
              <h3 className="footer-name">{personalInfo.name}</h3>
              <p className="footer-role">Aspiring Software Engineer & Full-Stack Developer</p>
              <p className="footer-institution">B.E. Computer Science & Engg • Anna University (KRCT)</p>
            </div>
          </div>

          <div className="footer-links-side">
            <ul className="footer-nav-list">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#leadership">Leadership</a></li>
              <li><button onClick={onOpenResume} className="footer-link-btn">Resume</button></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer-social-row">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-link"
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="social-icon-link"
                title="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href={`tel:${personalInfo.phoneRaw}`} 
                className="social-icon-link"
                title="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider-line" />

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Built with React & Modern UI.
          </p>

          <button 
            onClick={scrollToTop} 
            className="back-to-top-btn"
            title="Scroll to Top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
