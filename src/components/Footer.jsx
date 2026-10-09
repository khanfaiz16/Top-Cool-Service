// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, Wrench } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="brand-logo footer-logo">
              <div className="brand-icon-box">
                <Wrench size={20} color="var(--color-orange)" />
              </div>
              <div className="brand-text-group">
                <span className="brand-title" style={{ color: 'var(--color-ivory)' }}>{businessInfo.name}</span>
                <span className="brand-subtitle" style={{ color: 'var(--color-lilac)' }}>Appliance Repair</span>
              </div>
            </div>
            <p className="footer-desc">
              Professional on-site repair and servicing for air conditioners, refrigerators, washing machines, microwaves, dryers, and dishwashers across Mumbai and Thane.
            </p>
            <div className="footer-contact-items">
              <a href={businessInfo.phoneTel} className="footer-contact-link">
                <Phone size={16} color="var(--color-orange)" />
                <span>{businessInfo.phoneDisplay}</span>
              </a>
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
              >
                <MessageSquare size={16} color="#25D366" />
                <span>WhatsApp: {businessInfo.phoneDisplay}</span>
              </a>
              <a href={`mailto:${businessInfo.email}`} className="footer-contact-link">
                <Mail size={16} color="var(--color-orange)" />
                <span>{businessInfo.email}</span>
              </a>
              <div className="footer-contact-link">
                <MapPin size={16} color="var(--color-orange)" />
                <span>{businessInfo.location} (Serving Mumbai &amp; Thane)</span>
              </div>
              <div className="footer-contact-link">
                <Clock size={16} color="var(--color-orange)" />
                <span>{businessInfo.hours}</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-nav-list">
              {businessInfo.services.map((svc) => (
                <li key={svc.id}>
                  <Link to={svc.slug} className="footer-nav-link">
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav-list">
              <li><Link to="/" className="footer-nav-link">Home</Link></li>
              <li><Link to="/services" className="footer-nav-link">All Services</Link></li>
              <li><Link to="/service-areas" className="footer-nav-link">Service Areas (Mumbai &amp; Thane)</Link></li>
              <li><Link to="/about" className="footer-nav-link">About Us</Link></li>
              <li><Link to="/faq" className="footer-nav-link">Frequently Asked Questions</Link></li>
              <li><Link to="/contact" className="footer-nav-link">Contact &amp; Bookings</Link></li>
            </ul>
          </div>

          {/* Localities Preview */}
          <div className="footer-col">
            <h4 className="footer-heading">Service Localities</h4>
            <div className="footer-localities-list">
              {businessInfo.localities.map((loc) => (
                <span key={loc} className="footer-locality-tag">{loc}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="footer-bottom">
          <p className="footer-disclaimer">
            Disclaimer: Top Cool Service is an independent appliance repair service provider. All brand names, model names, and manufacturer trademarks (e.g., Samsung, LG, Whirlpool, Bosch, etc.) belong to their respective registered owners and are cited solely to indicate service compatibility.
          </p>
          <div className="footer-copy-row">
            <span>&copy; {currentYear} {businessInfo.name}. All rights reserved.</span>
            <span>Operating in Mumbai &amp; Thane, Maharashtra.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}