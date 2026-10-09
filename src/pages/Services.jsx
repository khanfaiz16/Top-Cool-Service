// src/pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import SEOHead from '../components/SEOHead';
import BrandStrip from '../components/BrandStrip';

export default function Services() {
  return (
    <div className="services-page">
      <SEOHead
        title="Appliance Repair Services in Mumbai & Thane"
        description="Comprehensive repair and maintenance services for AC, refrigerator, washing machine, microwave, dryer, and dishwasher across Mumbai and Thane."
      />

      <section className="page-hero-section">
        <div className="container text-center">
          <span className="eyebrow eyebrow-orange">Professional Appliance Care</span>
          <h1>Our Repair &amp; Servicing Solutions</h1>
          <p className="section-subtitle" style={{ maxWidth: '720px', margin: '0.75rem auto 1.5rem' }}>
            Comprehensive doorstep inspection, maintenance, and repair services across Mumbai and Thane for all major domestic appliance categories.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={businessInfo.phoneTel} className="btn btn-primary">
              <Phone size={18} />
              Call {businessInfo.phoneDisplay}
            </a>
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageSquare size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ gap: '2rem' }}>
            {businessInfo.services.map((svc) => (
              <div key={svc.id} className="card service-overview-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span className="eyebrow eyebrow-orange">Category</span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: '600', color: 'var(--color-plum)' }}>
                    Doorstep Service
                  </span>
                </div>
                <h3 style={{ marginBottom: '0.75rem' }}>{svc.title}</h3>
                <p style={{ marginBottom: '1.25rem' }}>{svc.heroDescription}</p>
                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>
                    Serving Mumbai &amp; Thane
                  </span>
                  <Link to={svc.slug} className="btn btn-secondary btn-sm">
                    <span>Full Diagnostic Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandStrip />

      <section className="section-padding">
        <div className="container">
          <div className="card card-plum text-center" style={{ padding: '3rem 2rem' }}>
            <ShieldCheck size={40} color="var(--color-orange)" style={{ margin: '0 auto 1rem' }} />
            <h2 style={{ color: 'var(--color-ivory)' }}>Our Service Commitments</h2>
            <p style={{ maxWidth: '640px', margin: '0.75rem auto 2rem', color: 'var(--color-lilac)' }}>
              We believe in honest troubleshooting, clear cost explanations before any work begins, and leaving your home as clean as we found it.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
              <div style={{ padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-md)' }}>
                <CheckCircle2 size={20} color="var(--color-orange)" style={{ marginBottom: '0.5rem' }} />
                <h4 style={{ color: 'var(--color-ivory)', marginBottom: '0.25rem' }}>On-Site Testing</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-lilac)' }}>
                  We test your appliance in your presence to confirm full functional restoration.
                </p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-md)' }}>
                <CheckCircle2 size={20} color="var(--color-orange)" style={{ marginBottom: '0.5rem' }} />
                <h4 style={{ color: 'var(--color-ivory)', marginBottom: '0.25rem' }}>Transparent Quotes</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-lilac)' }}>
                  Detailed breakdown of labor and spare parts before repair commences.
                </p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-md)' }}>
                <CheckCircle2 size={20} color="var(--color-orange)" style={{ marginBottom: '0.5rem' }} />
                <h4 style={{ color: 'var(--color-ivory)', marginBottom: '0.25rem' }}>Direct Reach</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-lilac)' }}>
                  Speak directly with an experienced technician without call-center delays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}