// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X, Wrench } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Brand Logo Concept */}
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <div className="brand-icon-box">
            <Wrench size={20} color="var(--color-orange)" />
          </div>
          <div className="brand-text-group">
            <span className="brand-title">{businessInfo.name}</span>
            <span className="brand-subtitle">Appliance Repair</span>
          </div>
        </Link>

        {/* Desktop Navigation Links with Active States */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Services
          </NavLink>
          <NavLink
            to="/service-areas"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Service Areas
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            About
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            FAQ
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Contact
          </NavLink>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <a href={businessInfo.phoneTel} className="header-phone-link">
            <Phone size={16} />
            <span>{businessInfo.phoneDisplay}</span>
          </a>
          <Link to="/contact" className="btn btn-primary btn-sm">
            Book Repair
          </Link>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav" aria-label="Mobile Navigation">
            <NavLink to="/" end className="mobile-nav-link" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/services" className="mobile-nav-link" onClick={closeMenu}>All Services</NavLink>
            <div className="mobile-sublinks">
              {businessInfo.services.map((s) => (
                <NavLink key={s.id} to={s.slug} className="mobile-sublink" onClick={closeMenu}>
                  {s.title}
                </NavLink>
              ))}
            </div>
            <NavLink to="/service-areas" className="mobile-nav-link" onClick={closeMenu}>Service Areas</NavLink>
            <NavLink to="/about" className="mobile-nav-link" onClick={closeMenu}>About Us</NavLink>
            <NavLink to="/faq" className="mobile-nav-link" onClick={closeMenu}>FAQ</NavLink>
            <NavLink to="/contact" className="mobile-nav-link" onClick={closeMenu}>Contact &amp; Support</NavLink>
          </nav>
          <div className="mobile-drawer-footer">
            <a href={businessInfo.phoneTel} className="btn btn-plum" style={{ width: '100%', marginBottom: '0.75rem' }}>
              <Phone size={18} />
              Call {businessInfo.phoneDisplay}
            </a>
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%' }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}