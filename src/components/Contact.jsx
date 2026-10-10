import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  ExternalLink,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    if (onShowToast) onShowToast(`${field} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    if (onShowToast) onShowToast("Thank you! Your message has been prepared.");

    // Create mailto fallback link
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      window.open(mailtoUrl, '_blank');
    }, 800);
  };

  return (
    <section className="section-container" id="contact">
      <div className="section-header">
        <span className="section-pill">Let's Connect</span>
        <h2 className="section-heading">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <p className="section-subtext">
          Whether you are looking for an ambitious intern, a junior developer, or discussing a tech collaboration, my inbox is always open.
        </p>
      </div>

      <div className="contact-layout-grid">
        {/* Left Column: Direct Info & Availability */}
        <div className="contact-info-column">
          <div className="contact-status-card">
            <div className="status-indicator-badge">
              <span className="pulsing-status-dot" />
              <span>Actively Seeking Opportunities</span>
            </div>
            <h3 className="status-title">Open to Software Engineering Roles & Internships</h3>
            <p className="status-desc">
              Currently available for full-time internships, trainee software engineer roles, 
              and frontend / Python development projects.
            </p>
            <div className="response-time-pill">
              <Clock size={15} />
              <span>Typical response time: Within 24 hours</span>
            </div>
          </div>

          <div className="contact-channels-list">
            {/* Email Card */}
            <div className="channel-item-card">
              <div className="channel-icon-wrap bg-indigo">
                <Mail size={20} />
              </div>
              <div className="channel-detail">
                <span className="channel-label">Email Address</span>
                <a href={`mailto:${personalInfo.email}`} className="channel-value-link">
                  {personalInfo.email}
                </a>
              </div>
              <button 
                onClick={() => handleCopy(personalInfo.email, 'Email')}
                className="channel-copy-btn"
                title="Copy email address"
              >
                {copiedField === 'Email' ? <Check size={16} className="text-green" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="channel-item-card">
              <div className="channel-icon-wrap bg-emerald">
                <Phone size={20} />
              </div>
              <div className="channel-detail">
                <span className="channel-label">Phone & WhatsApp</span>
                <a href={`tel:${personalInfo.phoneRaw}`} className="channel-value-link">
                  {personalInfo.phone}
                </a>
              </div>
              <button 
                onClick={() => handleCopy(personalInfo.phone, 'Phone')}
                className="channel-copy-btn"
                title="Copy phone number"
              >
                {copiedField === 'Phone' ? <Check size={16} className="text-green" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="channel-item-card">
              <div className="channel-icon-wrap bg-amber">
                <MapPin size={20} />
              </div>
              <div className="channel-detail">
                <span className="channel-label">Current Location</span>
                <span className="channel-value-static">
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="channel-item-card">
              <div className="channel-icon-wrap bg-purple">
                <GithubIcon size={20} />
              </div>
              <div className="channel-detail">
                <span className="channel-label">GitHub Profile</span>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="channel-value-link"
                >
                  github.com/divyadharshini6952-wq
                </a>
              </div>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                className="channel-copy-btn"
                title="Visit GitHub profile"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Message Form */}
        <div className="contact-form-column">
          <div className="form-card-container">
            <h3 className="form-heading">Send a Direct Message</h3>
            <p className="form-subtitle">Fill in the details below to initiate a conversation.</p>

            {submitted ? (
              <div className="form-success-banner">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={40} className="text-green" />
                </div>
                <h4>Message Ready to Send!</h4>
                <p>
                  Your message has been composed. If your email client did not automatically open, 
                  you can directly reach Divyadharshini at <strong>{personalInfo.email}</strong>.
                </p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form-element">
                <div className="form-row-2col">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">Your Name *</label>
                    <input 
                      type="text" 
                      id="contact-name"
                      required 
                      className="form-input" 
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Email Address *</label>
                    <input 
                      type="email" 
                      id="contact-email"
                      required 
                      className="form-input" 
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">Subject</label>
                  <input 
                    type="text" 
                    id="contact-subject"
                    className="form-input" 
                    placeholder="e.g. Internship Opportunity / Web Project Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Your Message *</label>
                  <textarea 
                    id="contact-message"
                    required 
                    rows={5} 
                    className="form-textarea" 
                    placeholder="Hi Divyadharshini, I reviewed your portfolio and would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-submit-full">
                  <Send size={18} />
                  <span>Send Message Now</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
