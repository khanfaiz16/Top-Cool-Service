// src/pages/ServiceDetail.jsx
import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { Phone, MessageSquare, CheckCircle, Wrench, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { servicesDetailedData } from '../data/servicesContent';
import SEOHead from '../components/SEOHead';
import BookingPanel from '../components/BookingPanel';

export default function ServiceDetail() {
  const { pathname } = useLocation();
  const serviceKey = pathname.replace('/', '');
  const data = servicesDetailedData[serviceKey];

  if (!data) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="service-detail-page">
      {/* Dynamic SEO Tag per individual service */}
      <SEOHead
        title={`${data.title} in Mumbai & Thane`}
        description={data.description}
        serviceName={data.title}
      />

      {/* Service Hero */}
      <section className="page-hero-section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="eyebrow eyebrow-orange">{data.heroTag}</span>
              <h1>{data.headline}</h1>
              <p style={{ fontSize: '1.1rem', margin: '1rem 0 1.75rem', lineHeight: '1.6' }}>
                {data.description}
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href={businessInfo.phoneTel} className="btn btn-primary">
                  <Phone size={18} />
                  Call {businessInfo.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/919920435051?text=Hello%20Top%20Cool%20Service,%20I%20need%20assistance%20with%20my%20${encodeURIComponent(data.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageSquare size={18} />
                  WhatsApp Technician
                </a>
              </div>
            </div>

            <div>
              <BookingPanel />
            </div>
          </div>
        </div>
      </section>

      {/* Main Diagnostic Content */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ gap: '2.5rem' }}>
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <AlertTriangle size={24} color="var(--color-orange)" />
                <h3 style={{ margin: 0 }}>Common Symptoms We Resolve</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {data.issuesSolved.map((issue, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem' }}>
                    <CheckCircle size={18} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <Wrench size={24} color="var(--color-plum)" />
                <h3 style={{ margin: 0 }}>Our Doorstep Inspection Checklist</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {data.serviceIncludes.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem' }}>
                    <ShieldCheck size={18} color="var(--color-plum)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Compatible Brands Strip */}
          <div className="card card-plum" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <h4 style={{ color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>
              Brands Serviced in Mumbai &amp; Thane
            </h4>
            <p style={{ color: 'var(--color-lilac)', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
              We repair {data.title} units from all major manufacturers:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center' }}>
              {data.brandsSupported.map((b) => (
                <span
                  key={b}
                  style={{
                    padding: '0.35rem 0.85rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.85rem',
                    color: 'var(--color-ivory)',
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-lilac)', marginTop: '1rem', opacity: 0.8 }}>
              * Top Cool Service is an independent repair provider. Brand names are used strictly for compatibility identification.
            </p>
          </div>

          <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Explore Other Appliance Services</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              {businessInfo.services
                .filter((s) => s.slug !== pathname)
                .map((s) => (
                  <Link key={s.id} to={s.slug} className="btn btn-secondary btn-sm">
                    <span>{s.title}</span>
                    <ArrowRight size={14} />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}