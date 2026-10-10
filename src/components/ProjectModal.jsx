import React from 'react';
import { 
  X, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight,
  Play
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose, onLaunchDemo }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-container project-detail-modal" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-badge-pill">{project.highlight}</span>
            <h3 className="modal-title">{project.title}</h3>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="project-detail-desc-box">
            <h4 className="detail-subtitle">Project Overview & Architecture</h4>
            <p className="detail-long-desc">{project.fullDesc}</p>
          </div>

          <div className="project-detail-section">
            <h4 className="detail-subtitle">Key Features & Engineering Highlights</h4>
            <ul className="detail-features-list">
              {project.features.map((feat, index) => (
                <li key={index} className="detail-feature-item">
                  <CheckCircle2 size={18} className="feat-check-icon text-accent" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="project-detail-section">
            <h4 className="detail-subtitle">Technologies Employed</h4>
            <div className="modal-tech-pills">
              {project.techStack.map((tech) => (
                <span className="tech-badge-pill" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="modal-actions-footer">
            {project.hasInteractiveDemo && (
              <button 
                onClick={() => {
                  onClose();
                  onLaunchDemo(project);
                }} 
                className="btn btn-primary"
              >
                <Play size={16} />
                <span>Launch Interactive Demo</span>
              </button>
            )}

            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-secondary"
            >
              <GithubIcon size={16} />
              <span>Explore GitHub Repository</span>
              <ArrowUpRight size={15} />
            </a>

            <button onClick={onClose} className="btn btn-outline">
              <span>Close Window</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
