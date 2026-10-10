import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Play, 
  Info, 
  ArrowUpRight, 
  Layers, 
  ShieldCheck, 
  DollarSign, 
  Users, 
  Sparkles 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onSelectProject, onLaunchDemo }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section className="section-container" id="projects">
      <div className="section-header">
        <span className="section-pill">Featured Work</span>
        <h2 className="section-heading">
          Projects & <span className="text-gradient">Creations</span>
        </h2>
        <p className="section-subtext">
          Practical software solutions covering full-stack web applications, Python automation tools, and cybersecurity utilities.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="projects-filter-bar">
        <button
          className={`filter-pill-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Projects ({projectsData.length})
        </button>
        <button
          className={`filter-pill-btn ${filter === 'web' ? 'active' : ''}`}
          onClick={() => setFilter('web')}
        >
          Web Applications
        </button>
        <button
          className={`filter-pill-btn ${filter === 'python' ? 'active' : ''}`}
          onClick={() => setFilter('python')}
        >
          Python & Systems
        </button>
        <button
          className={`filter-pill-btn ${filter === 'security' ? 'active' : ''}`}
          onClick={() => setFilter('security')}
        >
          Cybersecurity & Utilities
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-card-header">
              <div className="project-category-badge">
                <Sparkles size={14} />
                <span>{project.highlight}</span>
              </div>
              <span className="project-metric-tag">{project.metrics}</span>
            </div>

            <div className="project-card-body">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.shortDesc}</p>

              {/* Tech Stack Tags */}
              <div className="project-tech-stack">
                {project.techStack.map((tech) => (
                  <span className="tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Card Footer Actions */}
            <div className="project-card-footer">
              {project.hasInteractiveDemo && (
                <button
                  onClick={() => onLaunchDemo(project)}
                  className="btn btn-primary btn-sm"
                  title="Try live prototype simulator in browser"
                >
                  <Play size={14} />
                  <span>Try Live Demo</span>
                </button>
              )}

              <button
                onClick={() => onSelectProject(project)}
                className="btn btn-secondary btn-sm"
                title="View architectural details and features"
              >
                <Info size={14} />
                <span>Details</span>
              </button>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-sm icon-only-btn"
                title="View on GitHub"
              >
                <GithubIcon size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Callout */}
      <div className="projects-callout-card">
        <div className="callout-content">
          <h4>Interested in collaborative projects or review?</h4>
          <p>
            All projects are engineered with clean code standards, modular structure, and performance considerations. 
            Feel free to inspect repositories or test interactive demos.
          </p>
        </div>
        <div className="callout-action">
          <a href="#contact" className="btn btn-primary">
            <span>Discuss a Project</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
