import React from 'react';
import { personalInfo, areasOfInterest } from '../data/portfolioData';
import { 
  Sparkles, 
  Brain, 
  Layers, 
  TrendingUp, 
  Globe 
} from 'lucide-react';

export default function About() {
  const getInterestIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return <Brain size={22} />;
      case 'Layers': return <Layers size={22} />;
      case 'TrendingUp': return <TrendingUp size={22} />;
      case 'Globe': return <Globe size={22} />;
      default: return <Sparkles size={22} />;
    }
  };

  return (
    <section id="about" className="section" style={{ position: 'relative', background: '#fbfbf8', borderTop: 'var(--nb-border)', borderBottom: 'var(--nb-border)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="nb-badge">
            <Sparkles size={16} /> ABOUT CHENDU
          </div>
          <h2 className="section-title">BACKGROUND & INTERESTS</h2>
          <p className="section-subtitle">
            Bridging foundational machine learning concepts with practical, user-centric software development.
          </p>
        </div>

        {/* Two-Column Clean Layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            alignItems: 'stretch'
          }}
          className="about-split-grid"
        >
          {/* Left Column: Rephrased Professional Summary & Approach Card */}
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
            {/* Top Color Strip */}
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
              <Brain size={22} />
              <span style={{ fontWeight: 900, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                PROFESSIONAL SUMMARY
              </span>
            </div>

            <div style={{ padding: '2rem' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#111827', marginBottom: '1.5rem', fontWeight: 500 }}>
                {personalInfo.summary}
              </p>

              <div 
                style={{
                  background: 'var(--nb-yellow-light)',
                  border: '2px solid var(--nb-black)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-btn)',
                  boxShadow: '3px 3px 0px var(--nb-black)'
                }}
              >
                <div style={{ fontWeight: 900, fontSize: '0.875rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                  PROBLEM-SOLVING PHILOSOPHY
                </div>
                <p style={{ fontSize: '0.925rem', color: '#1f2937', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  {personalInfo.approach}
                </p>
              </div>
            </div>

            {/* Bottom Card Strip */}
            <div 
              style={{
                borderTop: 'var(--nb-border)',
                background: 'var(--nb-gray-bg)',
                padding: '1rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 800
              }}
            >
              <span>LOCATION: ODISHA, INDIA</span>
              <span style={{ color: 'var(--nb-dark)' }}>STATUS: READY TO CONTRIBUTE</span>
            </div>
          </div>

          {/* Right Column: 4 Core Areas of Interest */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--nb-yellow)',
                border: '2px solid var(--nb-black)',
                padding: '0.45rem 1rem',
                boxShadow: '3px 3px 0px var(--nb-black)',
                fontWeight: 900,
                textTransform: 'uppercase',
                fontFamily: 'var(--font-mono)',
                alignSelf: 'flex-start'
              }}
            >
              CORE AREAS OF INTEREST
            </div>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem'
              }}
            >
              {areasOfInterest.map((interest, idx) => {
                const cardBg = idx === 0 ? 'var(--nb-lime-light)' : idx === 1 ? 'var(--nb-yellow-light)' : idx === 2 ? 'var(--nb-orange-light)' : '#fefce8';

                return (
                  <div 
                    key={idx}
                    className="nb-card"
                    style={{
                      padding: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      background: cardBg
                    }}
                  >
                    <div>
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
                          boxShadow: '2px 2px 0px var(--nb-black)',
                          marginBottom: '0.75rem'
                        }}
                      >
                        {getInterestIcon(interest.icon)}
                      </div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '0.35rem', lineHeight: 1.25 }}>
                        {interest.title}
                      </h4>
                      <p style={{ fontSize: '0.825rem', color: '#1f2937', lineHeight: 1.5, margin: 0, fontWeight: 500 }}>
                        {interest.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-split-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
