import React, { useState } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  GraduationCap, 
  Trophy, 
  Mail, 
  Phone, 
  MapPin,
  Sparkles
} from 'lucide-react';
import { personalInfo, educationData, projectsData, skillsData } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  const [viewMode, setViewMode] = useState('pdf'); // 'pdf' or 'structured'

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-container resume-modal-container" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-badge-pill">Curriculum Vitae</span>
            <h3 className="modal-title">Divyadharshini G — Official Resume</h3>
          </div>

          <div className="resume-modal-top-actions">
            <div className="view-toggle-pills">
              <button
                className={`toggle-tab-btn ${viewMode === 'pdf' ? 'active' : ''}`}
                onClick={() => setViewMode('pdf')}
              >
                PDF View
              </button>
              <button
                className={`toggle-tab-btn ${viewMode === 'structured' ? 'active' : ''}`}
                onClick={() => setViewMode('structured')}
              >
                Structured Text
              </button>
            </div>

            <a 
              href={personalInfo.resumeUrl} 
              download="Divyadharshini_G_Resume.pdf"
              className="btn btn-primary btn-sm"
              title="Download official PDF file"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="modal-body resume-modal-body">
          {viewMode === 'pdf' ? (
            <div className="pdf-frame-wrapper">
              <iframe 
                src={`${personalInfo.resumeUrl}#toolbar=1&navpanes=0`} 
                title="Divyadharshini G Resume" 
                className="resume-pdf-iframe"
              />
              <div className="pdf-fallback-footer">
                <p>Can't view PDF in your browser?</p>
                <div className="fallback-buttons">
                  <a 
                    href={personalInfo.resumeUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <ExternalLink size={14} />
                    <span>Open PDF in Tab</span>
                  </a>
                  <button 
                    onClick={() => setViewMode('structured')}
                    className="btn btn-outline btn-sm"
                  >
                    <span>Switch to Text Format</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="resume-structured-view">
              {/* Header Box */}
              <div className="resume-text-header">
                <h2>{personalInfo.name}</h2>
                <p className="resume-sub">Computer Science & Engineering | Anna University (KRCT)</p>
                <div className="resume-contact-line">
                  <span><Mail size={14} /> {personalInfo.email}</span>
                  <span><Phone size={14} /> {personalInfo.phone}</span>
                  <span><MapPin size={14} /> {personalInfo.location}</span>
                </div>
              </div>

              {/* Career Objective */}
              <div className="resume-text-block">
                <h3>Career Objective</h3>
                <p>{personalInfo.careerObjective}</p>
              </div>

              {/* Education Table */}
              <div className="resume-text-block">
                <h3>Educational Qualification</h3>
                <div className="table-responsive">
                  <table className="resume-table">
                    <thead>
                      <tr>
                        <th>Course</th>
                        <th>Institution</th>
                        <th>Board / University</th>
                        <th>Year</th>
                        <th>Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>B.E. (CSE)</strong></td>
                        <td>K. Ramakrishnan College of Technology</td>
                        <td>Anna University</td>
                        <td>2029</td>
                        <td><span className="badge-green">85% Upto 3rd Sem</span></td>
                      </tr>
                      <tr>
                        <td><strong>HSC</strong></td>
                        <td>Govt Model Girls Higher Sec School</td>
                        <td>State Board</td>
                        <td>2025</td>
                        <td>88.33%</td>
                      </tr>
                      <tr>
                        <td><strong>SSLC</strong></td>
                        <td>Govt Model Girls Higher Sec School</td>
                        <td>State Board</td>
                        <td>2023</td>
                        <td>93.80%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Projects */}
              <div className="resume-text-block">
                <h3>Projects</h3>
                <ul className="resume-list">
                  <li>
                    <strong>Student Collaboration Hub:</strong> Developed using HTML, CSS, JavaScript. Peer-to-peer collaboration, notes repository, and group coordination portal.
                  </li>
                  <li>
                    <strong>Expense Management System:</strong> Developed using Python. Budget tracking, category analytics, and daily expenditure logging.
                  </li>
                  <li>
                    <strong>Password Strength Checker:</strong> Developed using Python. Evaluates entropy, character set complexity, and brute-force vulnerability.
                  </li>
                </ul>
              </div>

              {/* Technical Skills */}
              <div className="resume-text-block">
                <h3>Technical Skills</h3>
                <p>
                  <strong>Programming Languages:</strong> Python, Java, C++, JavaScript (ES6+), SQL<br />
                  <strong>Frontend Development:</strong> React.js, HTML5, CSS3, Responsive UI<br />
                  <strong>Database & Systems:</strong> Relational Database Management (SQL), Git, GitHub
                </p>
              </div>

              {/* Training */}
              <div className="resume-text-block">
                <h3>Training & Workshops</h3>
                <ul className="resume-list">
                  <li>Undergone training on Web Development using HTML, CSS, and JavaScript.</li>
                  <li>Undergone training on Python Programming and Database Management.</li>
                  <li>Attended university workshops on Artificial Intelligence, Web Development, and Emerging Technologies.</li>
                </ul>
              </div>

              {/* Extra-Curriculars */}
              <div className="resume-text-block">
                <h3>Extra-Curricular & Leadership</h3>
                <ul className="resume-list">
                  <li><strong>Captain of the College Cricket Team:</strong> Team leadership, tournament strategy, and match management.</li>
                  <li><strong>Active Football Player:</strong> Collegiate sports participation.</li>
                  <li><strong>Active Volunteer in College NSS Unit:</strong> National Service Scheme community projects.</li>
                </ul>
              </div>

              {/* References & Declaration */}
              <div className="resume-text-block">
                <h3>Department Reference</h3>
                <p>
                  <strong>Prof. R. Rajavarman</strong><br />
                  The Head of the Department (CSE)<br />
                  K. Ramakrishnan College of Technology, Trichy
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
