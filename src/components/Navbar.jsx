import React, { useState } from 'react';
import profileImg from '../assets/profile.jpg';
import { 
  Menu, 
  X 
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#ffffff',
        borderBottom: 'var(--nb-border)',
        boxShadow: '0 4px 0px var(--nb-black)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        
        {/* Brand Logo Box */}
        <a 
          href="#" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem',
            textDecoration: 'none'
          }}
        >
          <img 
            src={profileImg}
            alt="Mudila Chendu"
            style={{
              width: '46px',
              height: '46px',
              borderRadius: 'var(--radius-btn)',
              border: 'var(--nb-border-sm)',
              boxShadow: '3px 3px 0px var(--nb-black)',
              objectFit: 'cover',
              objectPosition: 'center 15%',
              display: 'block'
            }}
          />
          <div>
            <div style={{ fontWeight: 900, fontSize: '1.15rem', color: 'var(--nb-black)', letterSpacing: '-0.02em' }}>
              MUDILA CHENDU
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--nb-dark)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
              AI & ML • SOFTWARE DEV
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav 
          style={{ 
            display: 'none', 
            alignItems: 'center', 
            gap: '0.85rem' 
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                color: 'var(--nb-black)',
                padding: '0.35rem 0.75rem',
                border: '2px solid transparent',
                borderRadius: 'var(--radius-btn)',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = '2px solid var(--nb-black)';
                e.currentTarget.style.backgroundColor = 'var(--nb-yellow)';
                e.currentTarget.style.boxShadow = '2px 2px 0px var(--nb-black)';
                e.currentTarget.style.transform = 'translate(-2px, -2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '2px solid transparent';
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'none';
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            background: 'var(--nb-yellow)',
            border: 'var(--nb-border-sm)',
            borderRadius: 'var(--radius-btn)',
            boxShadow: '3px 3px 0px var(--nb-black)',
            color: 'var(--nb-black)',
            cursor: 'pointer'
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          style={{
            background: '#ffffff',
            borderTop: 'var(--nb-border)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            boxShadow: '0 8px 0px var(--nb-black)'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '0.95rem',
                fontWeight: 800,
                color: 'var(--nb-black)',
                padding: '0.6rem 0.85rem',
                border: '2px solid var(--nb-black)',
                borderRadius: 'var(--radius-btn)',
                background: 'var(--nb-gray-bg)',
                boxShadow: '2px 2px 0px var(--nb-black)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      {/* Responsive Styles Injection */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
