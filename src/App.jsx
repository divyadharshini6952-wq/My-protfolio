import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import InteractiveDemoModal from './components/InteractiveDemoModal';
import EducationTimeline from './components/EducationTimeline';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';
import './App.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('dg_portfolio_theme');
    return saved !== null ? saved === 'dark' : true;
  });

  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [demoProject, setDemoProject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    localStorage.setItem('dg_portfolio_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
    } else {
      document.documentElement.classList.add('light-theme');
      document.documentElement.classList.remove('dark-theme');
    }
  }, [darkMode]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  return (
    <div className={`portfolio-app-root ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* Navigation Bar */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="portfolio-main">
        <Hero 
          onOpenResume={() => setResumeModalOpen(true)} 
          onShowToast={showToast} 
        />

        <StatsBar />

        <About 
          onOpenResume={() => setResumeModalOpen(true)} 
        />

        <Skills />

        <Projects 
          onSelectProject={(project) => setSelectedProject(project)}
          onLaunchDemo={(project) => setDemoProject(project)}
        />

        <EducationTimeline />

        <Leadership />

        <Contact 
          onShowToast={showToast} 
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenResume={() => setResumeModalOpen(true)} 
      />

      {/* Project Architectural Details Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)}
          onLaunchDemo={(proj) => setDemoProject(proj)}
        />
      )}

      {/* Interactive Working Demo Prototype Modal */}
      {demoProject && (
        <InteractiveDemoModal 
          project={demoProject} 
          onClose={() => setDemoProject(null)}
        />
      )}

      {/* Full Resume PDF & Structured View Modal */}
      {resumeModalOpen && (
        <ResumeModal 
          onClose={() => setResumeModalOpen(false)} 
        />
      )}

      {/* Dynamic Toast Alerts */}
      {toastMessage && (
        <Toast 
          message={toastMessage} 
          onClose={() => setToastMessage(null)} 
        />
      )}
    </div>
  );
}
