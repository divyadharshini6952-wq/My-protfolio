import React from 'react';
import { Award, BookOpen, Code2, Trophy } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const statIcons = [
  <Award className="stat-card-icon" size={24} />,
  <Code2 className="stat-card-icon" size={24} />,
  <BookOpen className="stat-card-icon" size={24} />,
  <Trophy className="stat-card-icon" size={24} />
];

export default function StatsBar() {
  return (
    <section className="stats-bar-section">
      <div className="stats-bar-container">
        {personalInfo.stats.map((item, index) => (
          <div className="stat-box-card" key={item.label}>
            <div className="stat-icon-wrapper">
              {statIcons[index % statIcons.length]}
            </div>
            <div className="stat-content-wrapper">
              <span className="stat-number-text">{item.value}</span>
              <span className="stat-label-title">{item.label}</span>
              <span className="stat-detail-sub">{item.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
