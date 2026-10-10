import React from 'react';
import { 
  User, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  Trophy, 
  Heart, 
  CheckCircle2, 
  FileText,
  Sparkles,
  Calendar
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About({ onOpenResume }) {
  const quickFacts = [
    { label: "Degree", value: "B.E. Computer Science & Engg", icon: <GraduationCap size={18} /> },
    { label: "Institution", value: "K. Ramakrishnan College of Tech", icon: <CheckCircle2 size={18} /> },
    { label: "Affiliation", value: "Anna University (Autonomous)", icon: <Sparkles size={18} /> },
    { label: "Location", value: "Trichy, Tamil Nadu, India", icon: <MapPin size={18} /> },
    { label: "Email", value: "divyadharshini6952@gmail.com", icon: <Mail size={18} /> },
    { label: "Phone", value: "+91 8778490394", icon: <Phone size={18} /> },
    { label: "Cricket Role", value: "College Team Captain", icon: <Trophy size={18} /> },
    { label: "Community", value: "NSS Volunteer (Govt of India)", icon: <Heart size={18} /> }
  ];

  return (
    <section className="section-container" id="about">
      <div className="section-header">
        <span className="section-pill">About Me</span>
        <h2 className="section-heading">
          Engineering Passion Meets <span className="text-gradient">Dynamic Leadership</span>
        </h2>
        <p className="section-subtext">
          A dedicated Computer Science undergraduate blending technical problem-solving with athletic leadership and social responsibility.
        </p>
      </div>

      <div className="about-grid">
        {/* Left Column: Portrait Card with Highlights */}
        <div className="about-card-portrait">
          <div className="portrait-image-container">
            <img 
              src={personalInfo.profileImage} 
              alt={personalInfo.name} 
              className="about-portrait-img"
            />
            <div className="portrait-overlay-badge">
              <span className="badge-name">{personalInfo.name}</span>
              <span className="badge-tag">BE CSE Undergrad • Anna Univ</span>
            </div>
          </div>

          <div className="about-pillars">
            <div className="pillar-item">
              <div className="pillar-icon bg-indigo">
                <GraduationCap size={20} />
              </div>
              <div className="pillar-info">
                <h4>85% Academic Distinction</h4>
                <p>Consistently high scholastic performance across core computer science curricula.</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon bg-amber">
                <Trophy size={20} />
              </div>
              <div className="pillar-info">
                <h4>Cricket Team Captain</h4>
                <p>Leading college sports team, championing team chemistry and tactical coordination.</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon bg-rose">
                <Heart size={20} />
              </div>
              <div className="pillar-info">
                <h4>NSS Social Volunteer</h4>
                <p>Actively serving the community through social awareness and healthcare initiatives.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Quick Details */}
        <div className="about-content-card">
          <div className="career-objective-box">
            <h3 className="box-title">
              <Sparkles size={18} className="text-accent" />
              <span>Career Objective</span>
            </h3>
            <p className="career-objective-text">
              "{personalInfo.careerObjective}"
            </p>
          </div>

          <div className="about-story">
            <h3 className="story-title">Background & Drive</h3>
            <p className="story-paragraph">
              I am an aspiring software engineer currently pursuing my Bachelor's degree in 
              Computer Science and Engineering at <strong>K. Ramakrishnan College of Technology (Anna University)</strong>. 
              My journey is fueled by curiosity for how clean code transforms real-world challenges into seamless software experiences.
            </p>
            <p className="story-paragraph">
              From building collaborative student platforms using <strong>JavaScript & React</strong> to designing 
              system utilities and security analyzers in <strong>Python</strong>, I love building purposeful technology. 
              Beyond the terminal, my experience as the <strong>Captain of the college cricket team</strong> has taught 
              me to stay composed under pressure, communicate clearly, and inspire teams toward shared victories.
            </p>
          </div>

          <div className="quick-facts-grid">
            {quickFacts.map((fact) => (
              <div className="fact-item" key={fact.label}>
                <div className="fact-icon-bubble">{fact.icon}</div>
                <div className="fact-text">
                  <span className="fact-label">{fact.label}</span>
                  <span className="fact-value">{fact.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="about-actions">
            <button onClick={onOpenResume} className="btn btn-primary">
              <FileText size={18} />
              <span>Inspect Complete Resume</span>
            </button>
            <a href="#contact" className="btn btn-outline">
              <Mail size={18} />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
