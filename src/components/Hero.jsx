import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Download, 
  ArrowUpRight, 
  Sparkles, 
  MapPin, 
  Code2, 
  Terminal, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Trophy 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume, onShowToast }) {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    if (onShowToast) onShowToast("Email address copied to clipboard!");
  };

  return (
    <section className="hero-section" id="hero">
      {/* Dynamic ambient backdrop glows */}
      <div className="hero-glow-sphere sphere-primary" aria-hidden="true" />
      <div className="hero-glow-sphere sphere-secondary" aria-hidden="true" />

      <div className="hero-container">
        {/* Left Column: Intro & Info */}
        <div className="hero-content">
          <div className="hero-badge-pill">
            <span className="pulsing-status-dot" />
            <span className="badge-text">{personalInfo.status}</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="hero-name-gradient">{personalInfo.name}</span>
          </h1>

          <div className="hero-typing-wrapper">
            <span className="hero-typing-prefix">I am a</span>{' '}
            <span className="hero-cycling-role" key={taglineIndex}>
              {personalInfo.taglines[taglineIndex]}
            </span>
          </div>

          <p className="hero-description">
            Computer Science Engineering student at{' '}
            <strong className="text-highlight">Anna University (KRCT)</strong> with an{' '}
            <strong className="text-highlight">85% academic record</strong>. Passionate about architecting modern web experiences, crafting robust Python solutions, and leading teams with athletic discipline and sportsmanship.
          </p>

          <div className="hero-meta-strip">
            <div className="meta-item">
              <MapPin size={16} className="meta-icon" />
              <span>Trichy, Tamil Nadu</span>
            </div>
            <div className="meta-item">
              <Trophy size={16} className="meta-icon gold" />
              <span>College Cricket Captain</span>
            </div>
            <div className="meta-item">
              <CheckCircle2 size={16} className="meta-icon green" />
              <span>Anna Univ (KRCT) CSE</span>
            </div>
          </div>

          {/* Action CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowUpRight size={18} />
            </a>

            <button 
              onClick={onOpenResume} 
              className="btn btn-secondary"
            >
              <Download size={18} />
              <span>Get Resume</span>
            </button>

            <a href="#contact" className="btn btn-outline">
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Social Links & Quick Contact */}
          <div className="hero-social-strip">
            <span className="social-label">Connect:</span>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon-link"
              title="GitHub Profile"
            >
              <GithubIcon size={19} />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="social-icon-link"
              title={`Email: ${personalInfo.email}`}
            >
              <Mail size={19} />
            </a>
            <a 
              href={`tel:${personalInfo.phoneRaw}`} 
              className="social-icon-link"
              title={`Call: ${personalInfo.phone}`}
            >
              <Phone size={19} />
            </a>
            <button 
              onClick={copyEmail} 
              className="quick-copy-badge"
              title="Copy Email Address"
            >
              <span>{personalInfo.email}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Profile Image with Futuristic Glow & Floating Badges */}
        <div className="hero-visual">
          <div className="hero-avatar-wrapper">
            {/* Animated Rotating Gradient Aura */}
            <div className="avatar-ambient-ring" aria-hidden="true" />
            
            {/* Real Extracted Portrait Photo */}
            <div className="avatar-frame">
              <img 
                src={personalInfo.profileImage} 
                alt={`${personalInfo.name} Portrait`} 
                className="avatar-photo"
                loading="eager"
              />
            </div>

            {/* Floating Tech Badges */}
            <div className="floating-badge badge-react">
              <Layers size={17} className="badge-icon-react" />
              <span>React.js</span>
            </div>

            <div className="floating-badge badge-python">
              <Terminal size={17} className="badge-icon-python" />
              <span>Python</span>
            </div>

            <div className="floating-badge badge-code">
              <Cpu size={17} className="badge-icon-code" />
              <span>Java & C++</span>
            </div>

            <div className="floating-badge badge-sql">
              <Code2 size={17} className="badge-icon-sql" />
              <span>Web & SQL</span>
            </div>

            {/* Mini Stat Card at Bottom of Avatar */}
            <div className="avatar-stat-card">
              <div className="stat-circle">
                <Sparkles size={16} />
              </div>
              <div className="stat-text">
                <span className="stat-val">85% Aggregate</span>
                <span className="stat-lbl">BE CSE | Anna Univ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
