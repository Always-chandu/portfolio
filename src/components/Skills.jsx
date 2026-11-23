import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Code, 
  Layout, 
  Cpu, 
  BarChart3, 
  Database, 
  Terminal, 
  Sparkles, 
  Layers 
} from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('ALL');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return <Code size={20} />;
      case 'Layout': return <Layout size={20} />;
      case 'Cpu': return <Cpu size={20} />;
      case 'BarChart3': return <BarChart3 size={20} />;
      case 'Database': return <Database size={20} />;
      case 'Terminal': return <Terminal size={20} />;
      default: return <Layers size={20} />;
    }
  };

  const tabs = ['ALL', 'PROGRAMMING', 'WEB DEV', 'AI & ML', 'DATA & DB'];

  const filterCategory = (categoryName) => {
    if (activeTab === 'ALL') return true;
    if (activeTab === 'PROGRAMMING') return categoryName.includes('Programming') || categoryName.includes('Competencies');
    if (activeTab === 'WEB DEV') return categoryName.includes('Web');
    if (activeTab === 'AI & ML') return categoryName.includes('Machine Learning');
    if (activeTab === 'DATA & DB') return categoryName.includes('Data') || categoryName.includes('Database');
    return true;
  };

  const filteredSkills = skillsData.filter(item => filterCategory(item.category));

  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="nb-badge">
            <Sparkles size={16} /> TECHNICAL STACK
          </div>
          <h2 className="section-title">SKILLS & TECHNOLOGIES</h2>
          <p className="section-subtitle">
            Core competencies across programming languages, intelligent algorithms, web interfaces, and databases.
          </p>

          {/* Interactive Neo-Brutalist Filter Buttons */}
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.65rem',
              justifyContent: 'center',
              marginTop: '1.75rem'
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="nb-btn"
                style={{
                  background: activeTab === tab ? 'var(--nb-yellow)' : '#ffffff',
                  boxShadow: activeTab === tab ? '4px 4px 0px var(--nb-black)' : '2px 2px 0px var(--nb-black)',
                  transform: activeTab === tab ? 'translate(-2px, -2px)' : 'none',
                  fontSize: '0.825rem',
                  padding: '0.45rem 0.95rem'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {filteredSkills.map((category, idx) => {
            const headerColor = idx % 3 === 0 ? 'var(--nb-yellow)' : idx % 3 === 1 ? 'var(--nb-lime)' : 'var(--nb-orange)';

            return (
              <div 
                key={category.category} 
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
                  {/* Category Header Strip */}
                  <div 
                    style={{
                      background: headerColor,
                      borderBottom: 'var(--nb-border)',
                      padding: '0.85rem 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 900, textTransform: 'uppercase', fontSize: '1rem' }}>
                      {getCategoryIcon(category.icon)}
                      <span>{category.category}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '1.5rem' }}>
                    <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '1.25rem', fontWeight: 600 }}>
                      {category.description}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {category.skills.map((skill) => (
                        <div 
                          key={skill.name}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0.6rem 0.85rem',
                            background: skill.highlight ? '#fefce8' : '#f9fafb',
                            border: '2px solid var(--nb-black)',
                            borderRadius: '4px',
                            boxShadow: '2px 2px 0px var(--nb-black)'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span 
                              style={{ 
                                width: '8px', 
                                height: '8px', 
                                background: skill.highlight ? 'var(--nb-black)' : 'var(--nb-orange)',
                                border: '1px solid var(--nb-black)'
                              }} 
                            />
                            <span style={{ fontWeight: 800, fontSize: '0.925rem', color: 'var(--nb-black)' }}>
                              {skill.name}
                            </span>
                          </div>
                          <span 
                            style={{
                              fontSize: '0.725rem',
                              fontFamily: 'var(--font-mono)',
                              fontWeight: 800,
                              background: skill.highlight ? 'var(--nb-lime)' : '#ffffff',
                              border: '1px solid var(--nb-black)',
                              padding: '0.15rem 0.5rem',
                              boxShadow: '1px 1px 0px var(--nb-black)'
                            }}
                          >
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
