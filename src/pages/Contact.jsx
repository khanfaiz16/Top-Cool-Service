// src/pages/Contact.jsx
import React from 'react';
import { Phone, MessageSquare, Mail, MapPin, Clock } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import SEOHead from '../components/SEOHead';
import BookingPanel from '../components/BookingPanel';

export default function Contact() {
  return (
    <div className="contact-page">
      <SEOHead
        title="Contact Top Cool Service | Book Appliance Repair in Mumbai & Thane"
        description="Book on-site appliance repair across Mumbai and Thane. Call +91 99204 35051 or send a direct WhatsApp message. Monday to Sunday 8 AM to 10 PM."
      />

      <section className="page-hero-section">
        <div className="container text-center">
          <span className="eyebrow eyebrow-orange">Get in Touch</span>
          <h1>Contact Top Cool Service</h1>
          <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0.75rem auto 1.5rem' }}>
            Book a repair slot, inquire about spare parts, or request immediate emergency cooling assistance across Mumbai and Thane.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start', gap: '3rem' }}>
            <div>
              <span className="eyebrow">Direct Helpline</span>
              <h2>Speak With Us Today</h2>
              <p style={{ margin: '1rem 0 2rem' }}>
                We operate seven days a week. For immediate response during morning or evening hours, call or WhatsApp our primary line.
              </p>

              <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <a href={businessInfo.phoneTel} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="brand-icon-box" style={{ width: '44px', height: '44px' }}>
                    <Phone size={20} color="var(--color-orange)" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--color-ink-muted)', display: 'block' }}>Call Helpline</span>
                    <strong style={{ fontSize: '1.1rem', color: 'var(--color-plum)' }}>{businessInfo.phoneDisplay}</strong>
                  </div>
                </a>

                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                  <div className="brand-icon-box" style={{ width: '44px', height: '44px', backgroundColor: '#25D366' }}>
                    <MessageSquare size={20} color="#FFFFFF" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--color-ink-muted)', display: 'block' }}>WhatsApp Chat</span>
                    <strong style={{ fontSize: '1.1rem', color: 'var(--color-plum)' }}>{businessInfo.phoneDisplay}</strong>
                  </div>
                </a>

                <a href={`mailto:${businessInfo.email}`} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="brand-icon-box" style={{ width: '44px', height: '44px' }}>
                    <Mail size={20} color="var(--color-orange)" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--color-ink-muted)', display: 'block' }}>Email Support</span>
                    <strong style={{ fontSize: '1rem', color: 'var(--color-plum)' }}>{businessInfo.email}</strong>
                  </div>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="brand-icon-box" style={{ width: '44px', height: '44px' }}>
                    <MapPin size={20} color="var(--color-orange)" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--color-ink-muted)', display: 'block' }}>Operating Hub</span>
                    <span style={{ fontSize: '0.95rem', color: 'var(--color-ink)' }}>{businessInfo.location}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="brand-icon-box" style={{ width: '44px', height: '44px' }}>
                    <Clock size={20} color="var(--color-orange)" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--color-ink-muted)', display: 'block' }}>Business Hours</span>
                    <span style={{ fontSize: '0.95rem', color: 'var(--color-ink)' }}>{businessInfo.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <BookingPanel />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}