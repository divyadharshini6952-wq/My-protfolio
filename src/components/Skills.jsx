import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Layers, 
  Sparkles, 
  Database, 
  Trophy, 
  Heart, 
  Flame, 
  Laptop,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { skillsData } from '../data/portfolioData';

// Icon map helper
const iconMap = {
  Terminal: <Terminal size={22} />,
  Cpu: <Cpu size={22} />,
  Code2: <Code2 size={22} />,
  Flame: <Flame size={22} />,
  Layers: <Layers size={22} />,
  Laptop: <Laptop size={22} />,
  Sparkles: <Sparkles size={22} />,
  Database: <Database size={22} />,
  Github: <GithubIcon size={22} />,
  Trophy: <Trophy size={22} />,
  Heart: <Heart size={22} />
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all"
    ? skillsData.skills
    : skillsData.skills.filter(s => s.category === activeCategory);

  return (
    <section className="section-container" id="skills">
      <div className="section-header">
        <span className="section-pill">Technical & Leadership Stack</span>
        <h2 className="section-heading">
          Skills & <span className="text-gradient">Competencies</span>
        </h2>
        <p className="section-subtext">
          A blend of core software development, modern frontend frameworks, relational database management, and proven team leadership.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="skills-filter-container">
        {skillsData.categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`filter-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
          >
            {cat.name}
            <span className="pill-count">
              {cat.id === "all" 
                ? skillsData.skills.length 
                : skillsData.skills.filter(s => s.category === cat.id).length}
            </span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-card-top">
              <div className="skill-icon-box">
                {iconMap[skill.icon] || <Code2 size={22} />}
              </div>
              <div className="skill-title-group">
                <h3 className="skill-title">{skill.name}</h3>
                <span className="skill-level-number">{skill.level}% Proficiency</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="skill-progress-track">
              <div 
                className="skill-progress-fill" 
                style={{ width: `${skill.level}%` }}
                aria-label={`${skill.name} ${skill.level}%`}
              />
            </div>

            <p className="skill-description">{skill.description}</p>

            <div className="skill-tags-group">
              {skill.tags.map((tag) => (
                <span className="skill-tag-pill" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Extra Highlight Banner */}
      <div className="skills-summary-banner">
        <div className="banner-icon-side">
          <CheckCircle2 size={32} className="text-accent" />
        </div>
        <div className="banner-text-side">
          <h4>Continuous Learner & Fast Adapter</h4>
          <p>
            Trained in Web Development (HTML/CSS/JS), Python Programming, and Database Architecture. 
            Actively participating in tech symposiums, workshops on emerging AI trends, and hackathons at Anna University.
          </p>
        </div>
      </div>
    </section>
  );
}
