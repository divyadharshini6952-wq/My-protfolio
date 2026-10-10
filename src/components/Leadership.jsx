import React from 'react';
import { 
  Trophy, 
  Flame, 
  Heart, 
  Code2, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  ArrowRight
} from 'lucide-react';
import { leadershipData } from '../data/portfolioData';

const leadershipIcons = {
  Trophy: <Trophy size={26} />,
  Flame: <Flame size={26} />,
  Heart: <Heart size={26} />,
  Code2: <Code2 size={26} />
};

export default function Leadership() {
  return (
    <section className="section-container" id="leadership">
      <div className="section-header">
        <span className="section-pill">Beyond The Code</span>
        <h2 className="section-heading">
          Leadership & <span className="text-gradient">Extracurriculars</span>
        </h2>
        <p className="section-subtext">
          Team leadership on the field, social responsibility in the community, and relentless drive in competitive environments.
        </p>
      </div>

      <div className="leadership-cards-grid">
        {leadershipData.map((item) => (
          <div className="leadership-card" key={item.role}>
            <div className="leadership-top-row">
              <div 
                className="leadership-icon-wrapper"
                style={{ backgroundColor: `${item.color}20`, color: item.color }}
              >
                {leadershipIcons[item.icon] || <Trophy size={26} />}
              </div>
              <span className="leadership-org-badge">{item.organization}</span>
            </div>

            <h3 className="leadership-card-title">{item.role}</h3>
            <p className="leadership-card-summary">{item.summary}</p>

            <div className="leadership-takeaway-box">
              <div className="takeaway-label">
                <Sparkles size={14} style={{ color: item.color }} />
                <span>Core Skill Demonstrated:</span>
              </div>
              <span className="takeaway-text">{item.keyTakeaway}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Leadership Philosophy Banner */}
      <div className="sports-quote-banner">
        <div className="quote-mark">“</div>
        <div className="quote-content">
          <p className="quote-text">
            Captaincy on the cricket pitch taught me that technical skill wins moments, but communication, trust, and staying cool under pressure win the tournament. I bring that exact same team-first mindset into every engineering project.
          </p>
          <span className="quote-author">— Divyadharshini G (Captain, KRCT Cricket Team)</span>
        </div>
      </div>
    </section>
  );
}
