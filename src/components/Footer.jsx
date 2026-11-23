import React from 'react';
import profileImg from '../assets/profile.jpg';
import { 
  ArrowUp, 
  MapPin,
  ArrowRight
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        background: '#ffffff',
        borderTop: 'var(--nb-border)',
        padding: '2.5rem 0 2rem',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Main Footer Row */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '2rem',
            borderBottom: 'var(--nb-border)'
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
              <img 
                src={profileImg}
                alt="Mudila Chendu"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-btn)',
                  border: 'var(--nb-border-sm)',
                  boxShadow: '3px 3px 0px var(--nb-black)',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  display: 'block'
                }}
              />
              <div>
                <div style={{ fontWeight: 900, fontSize: '1.2rem', color: 'var(--nb-black)' }}>
                  MUDILA CHENDU
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--nb-black)', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>
                  CSE (AI & ML) STUDENT
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
              <MapPin size={16} /> Kharada, Gajapati, Odisha – 761208, India
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 900, color: 'var(--nb-black)', marginBottom: '0.85rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
              PORTFOLIO SECTIONS
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {[
                { name: 'About', href: '#about' },
                { name: 'Technical Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Education', href: '#education' },
                { name: 'Certifications', href: '#certifications' },
                { name: 'Contact Section', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--nb-black)' }}
                    onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                    onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                  >
                    ▶ {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Clean Callout: Directs exclusively to the Contact Section */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 900, color: 'var(--nb-black)', marginBottom: '0.85rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                GET IN TOUCH
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: 1.6, fontWeight: 500, marginBottom: '1rem' }}>
                All contact options (Direct Gmail, Phone, GitHub, LinkedIn, and message dispatcher) are centralized in the Contact section.
              </p>
            </div>
            
            <a 
              href="#contact" 
              className="nb-btn nb-btn-yellow"
              style={{ alignSelf: 'flex-start', fontSize: '0.8rem', padding: '0.5rem 1rem' }}
            >
              GO TO CONTACT HUB <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div 
          style={{
            paddingTop: '1.25rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.825rem',
            fontWeight: 800,
            fontFamily: 'var(--font-mono)'
          }}
        >
          <div>
            © {new Date().getFullYear()} MUDILA CHENDU • NEO-BRUTALIST PORTFOLIO
          </div>

          <button
            onClick={scrollToTop}
            className="nb-btn nb-btn-white"
            style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem' }}
          >
            TOP <ArrowUp size={15} />
          </button>
        </div>

      </div>
    </footer>
  );
}
