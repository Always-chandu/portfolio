import React, { useState } from 'react';
import { projectsData, personalInfo } from '../data/portfolioData';
import { Github } from './Icons';
import { 
  FolderGit2, 
  ExternalLink, 
  Car, 
  Activity, 
  ShieldAlert, 
  Sparkles, 
  Info,
  X
} from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectIcon = (iconName) => {
    switch (iconName) {
      case 'Car': return <Car size={24} />;
      case 'Activity': return <Activity size={24} />;
      case 'ShieldAlert': return <ShieldAlert size={24} />;
      default: return <FolderGit2 size={24} />;
    }
  };

  return (
    <section id="projects" className="section" style={{ position: 'relative', background: '#ffffff', borderTop: 'var(--nb-border)', borderBottom: 'var(--nb-border)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="nb-badge">
            <Sparkles size={16} /> WORK ARCHIVE
          </div>
          <h2 className="section-title">FEATURED PROJECTS</h2>
          <p className="section-subtitle">
            Hands-on technical applications spanning intelligent traffic management, machine learning phishing defense, and rental software architecture.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem'
          }}
        >
          {projectsData.map((project, index) => {
            const headerColor = index === 0 ? 'var(--nb-lime)' : index === 1 ? 'var(--nb-yellow)' : 'var(--nb-orange)';

            return (
              <div 
                key={project.id}
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
                <div>
                  {/* Project Case File Header */}
                  <div 
                    style={{
                      background: headerColor,
                      borderBottom: 'var(--nb-border)',
                      padding: '1rem 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <div 
                        style={{
                          width: '38px',
                          height: '38px',
                          background: '#ffffff',
                          border: '2px solid var(--nb-black)',
                          borderRadius: 'var(--radius-btn)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '2px 2px 0px var(--nb-black)'
                        }}
                      >
                        {getProjectIcon(project.icon)}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                          PROJECT #{index + 1}
                        </div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 800 }}>
                          {project.category}
                        </div>
                      </div>
                    </div>

                    <span 
                      style={{
                        background: 'var(--nb-black)',
                        color: '#ffffff',
                        fontSize: '0.725rem',
                        fontWeight: 900,
                        fontFamily: 'var(--font-mono)',
                        padding: '0.2rem 0.55rem'
                      }}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 900, marginBottom: '0.75rem', lineHeight: 1.25 }}>
                      {project.title}
                    </h3>

                    <p style={{ fontSize: '0.925rem', color: '#374151', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                      {project.summary}
                    </p>

                    {/* Bullet Points Container */}
                    <div 
                      style={{
                        background: 'var(--nb-gray-bg)',
                        border: '2px solid var(--nb-black)',
                        borderRadius: 'var(--radius-btn)',
                        padding: '1rem',
                        marginBottom: '1.25rem',
                        boxShadow: '3px 3px 0px var(--nb-black)'
                      }}
                    >
                      <div style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                        KEY WORKFLOW & LEARNINGS:
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                        {project.points.map((pt, pIdx) => (
                          <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.85rem', color: '#1f2937' }}>
                            <span style={{ fontWeight: 900, color: 'var(--nb-black)' }}>▶</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                      {project.tech.map((t) => (
                        <span key={t} className="nb-tag" style={{ background: '#ffffff' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons with Direct GitHub Link */}
                <div 
                  style={{
                    borderTop: 'var(--nb-border)',
                    background: '#ffffff',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'center'
                  }}
                >
                  <a 
                    href={personalInfo.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="nb-btn nb-btn-lime"
                    style={{ flex: 1, fontSize: '0.825rem', padding: '0.55rem 0.85rem' }}
                  >
                    <Github size={16} /> GITHUB CODE <ExternalLink size={13} />
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="nb-btn nb-btn-yellow"
                    style={{ fontSize: '0.825rem', padding: '0.55rem 0.85rem' }}
                  >
                    <Info size={16} /> DETAILS
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Project Deep Dive */}
        {selectedProject && (
          <div 
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.75)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2000,
              padding: '1rem'
            }}
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="nb-card"
              style={{
                maxWidth: '620px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                background: '#ffffff',
                boxShadow: '10px 10px 0px var(--nb-black)',
                padding: 0
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div 
                style={{
                  background: 'var(--nb-yellow)',
                  borderBottom: 'var(--nb-border)',
                  padding: '1rem 1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                    {selectedProject.category}
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 900, textTransform: 'uppercase' }}>
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="nb-icon-btn"
                  style={{ background: '#ffffff', width: '36px', height: '36px' }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div style={{ padding: '1.75rem' }}>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#1f2937', marginBottom: '1.5rem', fontWeight: 500 }}>
                  {selectedProject.summary}
                </p>

                <div style={{ fontSize: '0.85rem', fontWeight: 900, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
                  DETAILED IMPLEMENTATION BREAKDOWN:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                  {selectedProject.points.map((pt, idx) => (
                    <div 
                      key={idx}
                      style={{
                        padding: '0.75rem 1rem',
                        background: 'var(--nb-gray-bg)',
                        border: '2px solid var(--nb-black)',
                        borderRadius: '4px',
                        boxShadow: '2px 2px 0px var(--nb-black)',
                        fontSize: '0.9rem',
                        fontWeight: 600
                      }}
                    >
                      {pt}
                    </div>
                  ))}
                </div>

                <div style={{ fontSize: '0.85rem', fontWeight: 900, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                  TECH STACK & TOOLS:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="nb-tag" style={{ background: 'var(--nb-lime)' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a 
                    href={personalInfo.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="nb-btn nb-btn-lime"
                    style={{ flex: 1 }}
                  >
                    <Github size={17} /> VISIT GITHUB REPOSITORY
                  </a>
                  <button 
                    onClick={() => setSelectedProject(null)} 
                    className="nb-btn nb-btn-white"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
