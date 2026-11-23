import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin } from './Icons';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  MessageSquare,
  Clock,
  CheckCircle2
} from 'lucide-react';

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sentNotice, setSentNotice] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subjectEncoded = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`);
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${subjectEncoded}&body=${bodyEncoded}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 5000);
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative', background: '#fffdf5' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="nb-badge">
            <Sparkles size={16} /> CONTACT HUB
          </div>
          <h2 className="section-title">GET IN TOUCH</h2>
          <p className="section-subtitle">
            All direct communication channels, verified social profiles, and instant messaging options are centralized right here.
          </p>
        </div>

        {/* 4 Neo-Brutalist Contact Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Email Card */}
          <div className="nb-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#ffffff' }}>
            <div>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--nb-lime)',
                  border: '2px solid var(--nb-black)',
                  borderRadius: 'var(--radius-btn)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '3px 3px 0px var(--nb-black)',
                  marginBottom: '1rem'
                }}
              >
                <Mail size={22} />
              </div>

              <div style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
                DIRECT EMAIL
              </div>

              <a 
                href={personalInfo.emailLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  fontSize: '1rem',
                  fontWeight: 900,
                  color: 'var(--nb-black)',
                  marginBottom: '0.75rem',
                  wordBreak: 'break-all'
                }}
              >
                {personalInfo.email}
              </a>

              <p style={{ fontSize: '0.85rem', color: '#4b5563', fontWeight: 500 }}>
                Click to open directly in Gmail compose window.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem' }}>
              <a 
                href={personalInfo.emailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="nb-btn nb-btn-lime"
                style={{ flex: 1, padding: '0.55rem 0.85rem', fontSize: '0.8rem' }}
              >
                <Mail size={15} /> OPEN IN GMAIL
              </a>
              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="nb-btn nb-btn-white"
                style={{ padding: '0.55rem 0.85rem', fontSize: '0.8rem' }}
                title="Copy Email"
              >
                {copiedType === 'email' ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div className="nb-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#ffffff' }}>
            <div>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--nb-orange)',
                  border: '2px solid var(--nb-black)',
                  borderRadius: 'var(--radius-btn)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '3px 3px 0px var(--nb-black)',
                  marginBottom: '1rem'
                }}
              >
                <Phone size={22} />
              </div>

              <div style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
                PHONE NUMBER
              </div>

              <a 
                href={personalInfo.phoneLink}
                style={{
                  display: 'block',
                  fontSize: '1.35rem',
                  fontWeight: 900,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--nb-black)',
                  marginBottom: '0.75rem'
                }}
              >
                {personalInfo.phone}
              </a>

              <p style={{ fontSize: '0.85rem', color: '#4b5563', fontWeight: 500 }}>
                Instant dial connection on mobile devices & desktop.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem' }}>
              <a 
                href={personalInfo.phoneLink}
                className="nb-btn nb-btn-orange"
                style={{ flex: 1, padding: '0.55rem 0.85rem', fontSize: '0.8rem' }}
              >
                <Phone size={15} /> CALL NOW
              </a>
              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="nb-btn nb-btn-white"
                style={{ padding: '0.55rem 0.85rem', fontSize: '0.8rem' }}
                title="Copy Phone"
              >
                {copiedType === 'phone' ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="nb-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#ffffff' }}>
            <div>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--nb-yellow)',
                  border: '2px solid var(--nb-black)',
                  borderRadius: 'var(--radius-btn)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '3px 3px 0px var(--nb-black)',
                  marginBottom: '1rem'
                }}
              >
                <Github size={22} />
              </div>

              <div style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
                GITHUB CODEBASE
              </div>

              <div 
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 900,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--nb-black)',
                  marginBottom: '0.75rem'
                }}
              >
                @Always-chandu
              </div>

              <p style={{ fontSize: '0.85rem', color: '#4b5563', fontWeight: 500 }}>
                Explore open source repositories, projects, and commits.
              </p>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <a 
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="nb-btn nb-btn-yellow"
                style={{ width: '100%', padding: '0.55rem 0.85rem', fontSize: '0.8rem' }}
              >
                <Github size={15} /> GITHUB PROFILE <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="nb-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#ffffff' }}>
            <div>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--nb-black)',
                  color: 'var(--nb-yellow)',
                  border: '2px solid var(--nb-black)',
                  borderRadius: 'var(--radius-btn)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '3px 3px 0px var(--nb-black)',
                  marginBottom: '1rem'
                }}
              >
                <Linkedin size={22} />
              </div>

              <div style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
                LINKEDIN NETWORK
              </div>

              <div 
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 900,
                  color: 'var(--nb-black)',
                  marginBottom: '0.75rem'
                }}
              >
                Mudila Chendu
              </div>

              <p style={{ fontSize: '0.85rem', color: '#4b5563', fontWeight: 500 }}>
                Professional networking, career updates, and internships.
              </p>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="nb-btn nb-btn-dark"
                style={{ width: '100%', padding: '0.55rem 0.85rem', fontSize: '0.8rem' }}
              >
                <Linkedin size={15} /> CONNECT ON LINKEDIN <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Location & Quick Message Dispatcher Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'stretch'
          }}
          className="contact-split-grid"
        >
          {/* Location & Availability Card */}
          <div 
            className="nb-card" 
            style={{ 
              padding: 0,
              overflow: 'hidden',
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              background: '#ffffff'
            }}
          >
            <div 
              style={{
                background: 'var(--nb-yellow)',
                borderBottom: 'var(--nb-border)',
                padding: '0.85rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem'
              }}
            >
              <MapPin size={22} />
              <span style={{ fontWeight: 900, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                LOCATION & AVAILABILITY
              </span>
            </div>

            <div style={{ padding: '2rem' }}>
              <div 
                style={{
                  background: 'var(--nb-gray-bg)',
                  border: '2px solid var(--nb-black)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-btn)',
                  boxShadow: '3px 3px 0px var(--nb-black)',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ fontSize: '1.2rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  Kharada, Gajapati, Odisha
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
                  PIN: 761208, India
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontWeight: 600 }}>
                  <Clock size={18} />
                  <span>Response Time: Typically replies within 2-4 hours.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontWeight: 600 }}>
                  <CheckCircle2 size={18} />
                  <span>Open to Relocation & Remote Software/AI/ML roles.</span>
                </div>
              </div>
            </div>

            <div 
              style={{
                borderTop: 'var(--nb-border)',
                background: 'var(--nb-gray-bg)',
                padding: '1rem 1.5rem',
                fontSize: '0.825rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 800,
                color: 'var(--nb-dark)'
              }}
            >
              STATUS: READY FOR INTERNSHIPS & FULL-TIME OPPORTUNITIES
            </div>
          </div>

          {/* Interactive Message Form */}
          <div 
            className="nb-card" 
            style={{ 
              padding: 0,
              overflow: 'hidden',
              background: '#ffffff'
            }}
          >
            <div 
              style={{
                background: 'var(--nb-lime)',
                borderBottom: 'var(--nb-border)',
                padding: '0.85rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem'
              }}
            >
              <MessageSquare size={22} />
              <span style={{ fontWeight: 900, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                QUICK MESSAGE DISPATCHER
              </span>
            </div>

            <div style={{ padding: '2rem' }}>
              {sentNotice && (
                <div 
                  style={{
                    background: 'var(--nb-yellow)',
                    border: '2px solid var(--nb-black)',
                    color: 'var(--nb-black)',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-btn)',
                    marginBottom: '1.25rem',
                    fontSize: '0.875rem',
                    fontWeight: 800,
                    boxShadow: '3px 3px 0px var(--nb-black)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <CheckCircle2 size={18} /> Opening Gmail compose tab with your message prefilled...
                </div>
              )}

              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '2px solid var(--nb-black)',
                        borderRadius: 'var(--radius-btn)',
                        background: '#ffffff',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        outline: 'none',
                        boxShadow: '3px 3px 0px var(--nb-black)'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '2px solid var(--nb-black)',
                        borderRadius: 'var(--radius-btn)',
                        background: '#ffffff',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        outline: 'none',
                        boxShadow: '3px 3px 0px var(--nb-black)'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Job Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '2px solid var(--nb-black)',
                      borderRadius: 'var(--radius-btn)',
                      background: '#ffffff',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      outline: 'none',
                      boxShadow: '3px 3px 0px var(--nb-black)'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
                    MESSAGE
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '2px solid var(--nb-black)',
                      borderRadius: 'var(--radius-btn)',
                      background: '#ffffff',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      boxShadow: '3px 3px 0px var(--nb-black)'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="nb-btn nb-btn-lime"
                  style={{ padding: '0.85rem 1.5rem', marginTop: '0.5rem' }}
                >
                  <Send size={16} /> DISPATCH DIRECTLY TO GMAIL
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-split-grid {
            grid-template-columns: 0.95fr 1.05fr !important;
          }
        }
      `}</style>
    </section>
  );
}
