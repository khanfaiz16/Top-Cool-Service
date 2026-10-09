// src/pages/ServiceAreas.jsx
import React from 'react';
import { MapPin, Phone, MessageSquare, CheckCircle, Navigation } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import SEOHead from '../components/SEOHead';

export default function ServiceAreas() {
  const regionalGroups = [
    {
      region: 'Western Suburbs',
      localities: ['Bandra', 'Andheri', 'Santacruz', 'Juhu', 'Dahisar', 'Mira Road'],
      description: 'Daily doorstep visits for coastal and residential apartments across the Western Express corridor.',
    },
    {
      region: 'Central & Eastern Mumbai',
      localities: ['Powai', 'BKC', 'Kalina'],
      description: 'Prompt service coverage for residential complexes, tech parks, and commercial spaces.',
    },
    {
      region: 'South Mumbai',
      localities: ['Colaba', 'Marine Lines'],
      description: 'Dedicated technician routing for heritage residences, high-rises, and sea-facing apartments.',
    },
    {
      region: 'Thane District',
      localities: ['Thane'],
      description: 'Comprehensive cooling and appliance repair across Ghodbunder Road, Majiwada, and Thane City.',
    },
  ];

  return (
    <div className="service-areas-page">
      <SEOHead
        title="Appliance Repair Service Areas in Mumbai & Thane"
        description="Doorstep appliance repair covering Bandra, Andheri, Powai, Dahisar, Mira Road, Colaba, Marine Lines, Juhu, BKC, Kalina, and Thane."
      />

      <section className="page-hero-section">
        <div className="container text-center">
          <span className="eyebrow eyebrow-orange">Regional Coverage</span>
          <h1>Appliance Repair Across Mumbai &amp; Thane</h1>
          <p className="section-subtitle" style={{ maxWidth: '720px', margin: '0.75rem auto 1.5rem' }}>
            We bring expert diagnostics directly to your doorstep in all 12 key localities. No need to lug heavy appliances to a workshop.
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
              WhatsApp Your Locality
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ gap: '2rem' }}>
            {regionalGroups.map((group) => (
              <div key={group.region} className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Navigation size={20} color="var(--color-orange)" />
                  <h3 style={{ margin: 0 }}>{group.region}</h3>
                </div>
                <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>{group.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {group.localities.map((loc) => (
                    <span
                      key={loc}
                      style={{
                        padding: '0.4rem 0.85rem',
                        backgroundColor: 'var(--color-ivory)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: 'var(--color-plum)',
                        border: '1px solid var(--color-border)',
                      }}
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="card card-plum" style={{ marginTop: '3rem', padding: '2.5rem' }}>
            <h3 style={{ color: 'var(--color-ivory)', marginBottom: '1rem' }}>
              How Doorstep Service Works Across Localities
            </h3>
            <p style={{ color: 'var(--color-lilac)', maxWidth: '780px', marginBottom: '1.5rem' }}>
              Whether you are located in Dahisar near our workshop hub, in Bandra, or across Thane, our technicians arrive equipped with standard diagnostic tools, multi-meters, pressure gauges, and common replacement components.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={18} color="var(--color-orange)" />
                <span style={{ color: 'var(--color-ivory)', fontSize: '0.9rem' }}>No Heavy Lifting By Customer</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={18} color="var(--color-orange)" />
                <span style={{ color: 'var(--color-ivory)', fontSize: '0.9rem' }}>Convenient Time Slots</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={18} color="var(--color-orange)" />
                <span style={{ color: 'var(--color-ivory)', fontSize: '0.9rem' }}>Doorstep Safety &amp; Cleanliness</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}