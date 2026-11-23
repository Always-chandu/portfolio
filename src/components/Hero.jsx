import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  MapPin, 
  ArrowRight,
  Mail,
  Sparkles
} from 'lucide-react';

export default function Hero() {
  return (
    <section 
      style={{
        position: 'relative',
        paddingTop: '3.5rem',
        paddingBottom: '4rem',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        
        {/* Focus Tag */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div 
            className="nb-sticker"
            style={{
              background: 'var(--nb-yellow)',
              transform: 'rotate(-1deg)'
            }}
          >
            ⚡ B.TECH CSE (ARTIFICIAL INTELLIGENCE & MACHINE LEARNING)
          </div>
        </div>

        {/* Main Hero Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Bold Headline & Bio */}
          <div>
            <h1 
              style={{
                fontSize: 'clamp(2.75rem, 5.5vw, 4.4rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
                marginBottom: '1rem',
                color: 'var(--nb-black)',
                textTransform: 'uppercase'
              }}
            >
              MUDILA <br />
              <span 
                style={{
                  background: 'var(--nb-lime)',
                  padding: '0 0.4rem',
                  border: 'var(--nb-border-sm)',
                  boxShadow: '4px 4px 0px var(--nb-black)',
                  display: 'inline-block',
                  transform: 'rotate(-1deg)'
                }}
              >
                CHENDU
              </span>
            </h1>

            {/* University & Location pill */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.925rem',
                fontWeight: 800,
                fontFamily: 'var(--font-mono)',
                background: '#ffffff',
                border: '2px solid var(--nb-black)',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-btn)',
                boxShadow: '3px 3px 0px var(--nb-black)',
                marginBottom: '2rem'
              }}
            >
              <MapPin size={16} /> {personalInfo.location}
            </div>

            {/* Clean Navigational CTAs */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                alignItems: 'center'
              }}
            >
              <a href="#projects" className="nb-btn nb-btn-lime">
                VIEW PROJECTS <ArrowRight size={18} />
              </a>
              <a href="#contact" className="nb-btn nb-btn-yellow">
                CONTACT ME <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Neo-Brutalist Code Spec Card */}
          <div 
            className="nb-card"
            style={{
              padding: 0,
              overflow: 'hidden',
              background: '#ffffff'
            }}
          >
            {/* Window Header */}
            <div 
              style={{
                background: 'var(--nb-yellow)',
                borderBottom: 'var(--nb-border)',
                padding: '0.75rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '13px', height: '13px', borderRadius: '50%', background: 'var(--nb-black)' }} />
                <div style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#ffffff', border: '2px solid var(--nb-black)' }} />
                <div style={{ width: '13px', height: '13px', borderRadius: '50%', background: 'var(--nb-lime)', border: '2px solid var(--nb-black)' }} />
                <span style={{ marginLeft: '0.5rem', fontWeight: 900, fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  DEVELOPER_SPEC.json
                </span>
              </div>
              <div 
                style={{
                  background: 'var(--nb-black)',
                  color: 'var(--nb-lime)',
                  padding: '0.15rem 0.55rem',
                  fontSize: '0.725rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)'
                }}
              >
                READY
              </div>
            </div>

            {/* Code Body */}
            <div style={{ padding: '1.5rem', background: '#0a0a0a', color: '#f3f4f6' }}>
              <pre 
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  lineHeight: 1.65,
                  margin: 0,
                  overflowX: 'auto'
                }}
              >
                <code>
                  <span style={{ color: 'var(--nb-yellow)' }}>const</span> <span style={{ color: 'var(--nb-lime)' }}>profile</span> = {'{'}{'\n'}
                  {'  '}candidate: <span style={{ color: '#bef264' }}>"{personalInfo.name}"</span>,{'\n'}
                  {'  '}degree: <span style={{ color: '#bef264' }}>"B.Tech CSE (AI & ML)"</span>,{'\n'}
                  {'  '}institution: <span style={{ color: '#bef264' }}>"{personalInfo.institution}"</span>,{'\n'}
                  {'  '}cgpa: <span style={{ color: 'var(--nb-yellow)', fontWeight: 800 }}>{personalInfo.cgpa}</span>,{'\n'}
                  {'  '}languages: [<span style={{ color: '#bef264' }}>"Java"</span>, <span style={{ color: '#bef264' }}>"Python"</span>],{'\n'}
                  {'  '}frontend: [<span style={{ color: '#bef264' }}>"React"</span>, <span style={{ color: '#bef264' }}>"Web Technologies"</span>],{'\n'}
                  {'  '}machineLearning: [<span style={{ color: '#bef264' }}>"ML Fundamentals"</span>, <span style={{ color: '#bef264' }}>"Classification"</span>],{'\n'}
                  {'  '}analyticsAndDB: [<span style={{ color: '#bef264' }}>"Data Analysis"</span>, <span style={{ color: '#bef264' }}>"SQL / NoSQL"</span>],{'\n'}
                  {'  '}openForRoles: <span style={{ color: 'var(--nb-lime)' }}>true</span>{'\n'}
                  {'}'};
                </code>
              </pre>
            </div>

            {/* Quick Metrics Bar */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                borderTop: 'var(--nb-border)',
                background: '#ffffff',
                textAlign: 'center'
              }}
            >
              <div style={{ padding: '0.85rem', borderRight: 'var(--nb-border)', background: 'var(--nb-lime-light)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, fontFamily: 'var(--font-mono)' }}>
                  7.09
                </div>
                <div style={{ fontSize: '0.725rem', fontWeight: 800, textTransform: 'uppercase' }}>
                  B.Tech CGPA
                </div>
              </div>

              <div style={{ padding: '0.85rem', borderRight: 'var(--nb-border)', background: 'var(--nb-yellow-light)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, fontFamily: 'var(--font-mono)' }}>
                  3
                </div>
                <div style={{ fontSize: '0.725rem', fontWeight: 800, textTransform: 'uppercase' }}>
                  Projects Built
                </div>
              </div>

              <div style={{ padding: '0.85rem', background: 'var(--nb-orange-light)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, fontFamily: 'var(--font-mono)' }}>
                  SIH
                </div>
                <div style={{ fontSize: '0.725rem', fontWeight: 800, textTransform: 'uppercase' }}>
                  Internal Qualifier
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
