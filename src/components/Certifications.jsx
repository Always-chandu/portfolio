import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { 
  Award, 
  Code2, 
  Binary, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';

export default function Certifications() {
  const getCertIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 size={24} />;
      case 'Binary': return <Binary size={24} />;
      case 'Award': return <Award size={24} />;
      default: return <Award size={24} />;
    }
  };

  return (
    <section id="certifications" className="section" style={{ position: 'relative', background: '#ffffff', borderTop: 'var(--nb-border)', borderBottom: 'var(--nb-border)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="nb-badge">
            <Sparkles size={16} /> VERIFIED CREDENTIALS
          </div>
          <h2 className="section-title">CERTIFICATIONS & ACHIEVEMENTS</h2>
          <p className="section-subtitle">
            Industry and academic credentials demonstrating algorithmic knowledge, web engineering, and competitive problem-solving.
          </p>
        </div>

        {/* 3-Column Clean Certifications Showcase */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {certificationsData.map((cert, index) => {
            const badgeColor = index === 0 ? 'var(--nb-lime)' : index === 1 ? 'var(--nb-yellow)' : 'var(--nb-orange)';

            return (
              <div 
                key={index}
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
                  {/* Card Header Strip */}
                  <div 
                    style={{
                      background: badgeColor,
                      borderBottom: 'var(--nb-border)',
                      padding: '1rem 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div 
                      style={{
                        width: '42px',
                        height: '42px',
                        background: '#ffffff',
                        border: '2px solid var(--nb-black)',
                        borderRadius: 'var(--radius-btn)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '2px 2px 0px var(--nb-black)'
                      }}
                    >
                      {getCertIcon(cert.icon)}
                    </div>
                    <span 
                      style={{
                        fontSize: '0.725rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 900,
                        padding: '0.2rem 0.55rem',
                        background: 'var(--nb-black)',
                        color: '#ffffff'
                      }}
                    >
                      VERIFIED
                    </span>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 900, color: '#4b5563', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
                      {cert.issuer}
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                      {cert.title}
                    </h3>

                    <p style={{ fontSize: '0.9rem', color: '#1f2937', margin: 0, fontWeight: 500, lineHeight: 1.6 }}>
                      {cert.focus}
                    </p>
                  </div>
                </div>

                {/* Footer Tag */}
                <div 
                  style={{
                    borderTop: '2px solid var(--nb-black)',
                    background: 'var(--nb-gray-bg)',
                    padding: '0.75rem 1.25rem',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <CheckCircle2 size={15} /> CREDENTIAL ACTIVE
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
