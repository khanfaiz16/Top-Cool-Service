// src/pages/About.jsx
import React from 'react';
import { Phone, MessageSquare, CheckCircle, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import SEOHead from '../components/SEOHead';
import BrandStrip from '../components/BrandStrip';

export default function About() {
  return (
    <div className="about-page">
      <SEOHead
        title="About Us | Trusted Appliance Repair in Dahisar, Mumbai & Thane"
        description="Learn about Top Cool Service. Based in Dahisar, serving Mumbai & Thane with dependable doorstep repairs for ACs, refrigerators, washers, and kitchen appliances."
      />

      <section className="page-hero-section">
        <div className="container text-center">
          <span className="eyebrow eyebrow-orange">About Top Cool Service</span>
          <h1>Honest Appliance Care Built on Local Trust</h1>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0.75rem auto 1.5rem' }}>
            Providing homeowners and businesses across Mumbai and Thane with reliable, straightforward appliance diagnostics and doorstep servicing.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="eyebrow">Our Approach</span>
              <h2>Direct Technician Service Without Call Center Confusion</h2>
              <p style={{ margin: '1rem 0' }}>
                Top Cool Service operates from our hub in Dahisar, dispatching experienced technicians across Western Suburbs, South Mumbai, Central Mumbai, and Thane.
              </p>
              <p style={{ margin: '1rem 0' }}>
                When major household machines break down — an AC during hot summer afternoons or a refrigerator full of perishables — you need prompt diagnostic attention and clear answers. We explain exactly what caused the problem and what parts are needed before performing repairs.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle size={18} color="var(--color-orange)" />
                  <span><strong>Direct Communication:</strong> Speak directly with technicians who understand appliance mechanics.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle size={18} color="var(--color-orange)" />
                  <span><strong>Doorstep Convenience:</strong> Complete on-site inspection without transporting heavy machines.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle size={18} color="var(--color-orange)" />
                  <span><strong>7-Day Operation:</strong> Available Monday through Sunday, 8:00 AM to 10:00 PM.</span>
                </div>
              </div>
            </div>

            <div className="card card-plum">
              <h3 style={{ color: 'var(--color-ivory)', marginBottom: '1.25rem' }}>Business Overview</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <MapPin size={20} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong style={{ color: 'var(--color-ivory)' }}>Base Location:</strong>
                    <p style={{ color: 'var(--color-lilac)', fontSize: '0.9rem', margin: 0 }}>
                      {businessInfo.location}
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <ShieldCheck size={20} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong style={{ color: 'var(--color-ivory)' }}>Service Coverage:</strong>
                    <p style={{ color: 'var(--color-lilac)', fontSize: '0.9rem', margin: 0 }}>
                      Mumbai &amp; Thane (Bandra, Andheri, Powai, Juhu, BKC, Dahisar, Mira Road, etc.)
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Clock size={20} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong style={{ color: 'var(--color-ivory)' }}>Working Schedule:</strong>
                    <p style={{ color: 'var(--color-lilac)', fontSize: '0.9rem', margin: 0 }}>
                      {businessInfo.hours}
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(217, 201, 229, 0.2)', paddingTop: '1.5rem' }}>
                <a href={businessInfo.phoneTel} className="btn btn-primary" style={{ width: '100%', marginBottom: '0.75rem' }}>
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
                  <MessageSquare size={18} />
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrandStrip />
    </div>
  );
}