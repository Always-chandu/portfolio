import React from 'react';
import { educationData } from '../data/portfolioData';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Sparkles, 
  BookOpen, 
  CheckCircle2,
  Award
} from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section" style={{ position: 'relative', background: '#fffdf5' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="nb-badge">
            <Sparkles size={16} /> ACADEMIC BACKGROUND
          </div>
          <h2 className="section-title">EDUCATION & QUALIFICATIONS</h2>
          <p className="section-subtitle">
            Formal technical education specializing in Artificial Intelligence and Machine Learning at ITM University, Gwalior.
          </p>
        </div>

        {/* Education Neo-Brutalist Record Card */}
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="nb-card"
              style={{
                padding: 0,
                overflow: 'hidden',
                background: '#ffffff'
              }}
            >
              {/* Header Ribbon */}
              <div 
                style={{
                  background: 'var(--nb-lime)',
                  borderBottom: 'var(--nb-border)',
                  padding: '1.25rem 1.75rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div 
                    style={{
                      width: '46px',
                      height: '46px',
                      background: 'var(--nb-black)',
                      color: 'var(--nb-lime)',
                      border: '2px solid var(--nb-black)',
                      borderRadius: 'var(--radius-btn)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '3px 3px 0px var(--nb-black)'
                    }}
                  >
                    <GraduationCap size={26} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                      DEGREE RECORD // CSE AI & ML
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 900, textTransform: 'uppercase' }}>
                      {edu.degree}
                    </h3>
                  </div>
                </div>

                {/* Stamp-Style CGPA Badge */}
                <div 
                  style={{
                    background: 'var(--nb-yellow)',
                    border: 'var(--nb-border)',
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-btn)',
                    boxShadow: '4px 4px 0px var(--nb-black)',
                    textAlign: 'center',
                    transform: 'rotate(-2deg)'
                  }}
                >
                  <div style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                    CUMULATIVE CGPA
                  </div>
                  <div style={{ fontSize: '1.85rem', fontWeight: 900, fontFamily: 'var(--font-mono)', lineHeight: 1 }}>
                    {edu.cgpa}
                  </div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 800 }}>
                    SCALE 10.0
                  </div>
                </div>
              </div>

              {/* Institution Metadata Row */}
              <div 
                style={{
                  background: 'var(--nb-yellow-light)',
                  borderBottom: '2px solid var(--nb-black)',
                  padding: '1rem 1.75rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <BookOpen size={17} /> {edu.institution}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <MapPin size={17} /> Gwalior, Madhya Pradesh
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <Calendar size={17} /> Status: {edu.period}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '2rem' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--nb-black)', marginBottom: '1rem' }}>
                  {edu.branch}
                </div>

                <div style={{ fontSize: '0.85rem', fontWeight: 900, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
                  HIGHLIGHTS & CURRICULUM:
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                  {edu.highlights.map((item, hIdx) => (
                    <div 
                      key={hIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        padding: '0.85rem 1rem',
                        background: 'var(--nb-gray-bg)',
                        border: '2px solid var(--nb-black)',
                        borderRadius: '4px',
                        boxShadow: '2px 2px 0px var(--nb-black)',
                        fontSize: '0.925rem',
                        fontWeight: 600
                      }}
                    >
                      <CheckCircle2 size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.65rem' }}>
                  CORE TECHNICAL SUBJECTS:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {[
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Data Structures & Algorithms",
                    "Database Systems (SQL/NoSQL)",
                    "Object-Oriented Programming (Java)",
                    "Python for Data Science",
                    "Web Technologies & React"
                  ].map((sub) => (
                    <span key={sub} className="nb-tag" style={{ background: '#ffffff' }}>
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
