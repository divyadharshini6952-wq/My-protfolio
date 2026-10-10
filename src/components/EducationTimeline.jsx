import React, { useState } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  MapPin, 
  Sparkles,
  Layers
} from 'lucide-react';
import { educationData, trainingsData } from '../data/portfolioData';

export default function EducationTimeline() {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section className="section-container" id="education">
      <div className="section-header">
        <span className="section-pill">Academic Journey</span>
        <h2 className="section-heading">
          Education & <span className="text-gradient">Trainings</span>
        </h2>
        <p className="section-subtext">
          A continuous record of academic excellence, rigorous computer science foundations, and hands-on skill development.
        </p>
      </div>

      {/* View Switcher */}
      <div className="timeline-switcher-tabs">
        <button
          className={`timeline-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          <GraduationCap size={18} />
          <span>Academic Qualifications ({educationData.length})</span>
        </button>
        <button
          className={`timeline-tab-btn ${activeTab === 'trainings' ? 'active' : ''}`}
          onClick={() => setActiveTab('trainings')}
        >
          <BookOpen size={18} />
          <span>Technical Trainings & Workshops ({trainingsData.length})</span>
        </button>
      </div>

      {activeTab === 'education' ? (
        <div className="timeline-wrapper">
          <div className="timeline-line-accent" aria-hidden="true" />
          
          <div className="timeline-items-list">
            {educationData.map((edu, idx) => (
              <div className="timeline-card-item" key={edu.degree}>
                <div className="timeline-marker">
                  <div className="marker-dot">
                    <GraduationCap size={16} />
                  </div>
                </div>

                <div className="timeline-card-content">
                  <div className="timeline-card-top">
                    <div>
                      <span className="timeline-badge-pill">{edu.badge}</span>
                      <h3 className="timeline-title">{edu.degree}</h3>
                      <h4 className="timeline-institution">{edu.institution}</h4>
                    </div>

                    <div className="timeline-score-badge">
                      <span className="score-label">Score</span>
                      <span className="score-val">{edu.score}</span>
                    </div>
                  </div>

                  <div className="timeline-meta-row">
                    <span className="meta-badge">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                    <span className="meta-badge">
                      <Sparkles size={14} />
                      {edu.affiliation}
                    </span>
                    <span className="meta-badge">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                  </div>

                  <ul className="timeline-highlights">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="highlight-bullet">
                        <CheckCircle2 size={16} className="bullet-icon text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="trainings-grid">
          {trainingsData.map((train, idx) => (
            <div className="training-card" key={train.title}>
              <div className="training-card-header">
                <span className="training-domain-badge">{train.domain}</span>
                <Sparkles size={18} className="text-accent" />
              </div>
              <h3 className="training-title">{train.title}</h3>
              <p className="training-desc">{train.description}</p>
              
              <div className="training-skills-wrap">
                {train.skills.map((skill) => (
                  <span className="skill-tag-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
