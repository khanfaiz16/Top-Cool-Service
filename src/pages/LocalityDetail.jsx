// src/pages/LocalityDetail.jsx
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, Clock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { localitiesData } from '../data/localitiesData';
import SEOHead from '../components/SEOHead';
import BookingPanel from '../components/BookingPanel';
import BrandStrip from '../components/BrandStrip';

export default function LocalityDetail() {
  const { localitySlug } = useParams();
  const loc = localitiesData[localitySlug];

  if (!loc) {
    return <Navigate to="/service-areas" replace />;
  }

  return (
    <div className="locality-detail-page">
      <SEOHead
        title={`Appliance Repair in ${loc.name}, Mumbai | Top Cool Service`}
        description={`Fast doorstep appliance repair in ${loc.name}. AC, refrigerator, washing machine & microwave repair with ${loc.avgResponseTime} response. Call ${businessInfo.phoneDisplay}.`}
      />

      {/* Hero */}
      <section className="page-hero-section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="eyebrow eyebrow-orange">Local Doorstep Service</span>
              <h1>Appliance Repair in {loc.name}</h1>
              <p style={{ fontSize: '1.1rem', margin: '1rem 0 1.5rem', lineHeight: '1.6' }}>
                {loc.summary}
              </p>

              <div className="locality-quick-specs" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-plum)', fontWeight: '600' }}>
                  <Clock size={18} color="var(--color-orange)" />
                  <span>Typical Arrival: {loc.avgResponseTime}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-plum)', fontWeight: '600' }}>
                  <MapPin size={18} color="var(--color-orange)" />
                  <span>Region: {loc.region}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href={businessInfo.phoneTel} className="btn btn-primary">
                  <Phone size={18} />
                  Call {businessInfo.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/919920435051?text=Hello%20Top%20Cool%20Service,%20I%20need%20appliance%20repair%20service%20in%20${encodeURIComponent(loc.name)}.`}
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

      {/* Local Coverage & Landmarks */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ gap: '2.5rem' }}>
            <div className="card">
              <h3 style={{ marginBottom: '1rem' }}>Neighborhoods &amp; Landmarks Serviced in {loc.name}</h3>
              <p style={{ fontSize: '0.925rem', marginBottom: '1.25rem' }}>
                Our mobile service technicians carry diagnostic equipment and common replacement components directly to residential societies and complexes near:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {loc.landmarks.map((landmark) => (
                  <span
                    key={landmark}
                    style={{
                      padding: '0.4rem 0.85rem',
                      backgroundColor: 'var(--color-ivory)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-plum)',
                    }}
                  >
                    {landmark}
                  </span>
                ))}
              </div>
            </div>

            <div className="card card-plum">
              <h3 style={{ color: 'var(--color-ivory)', marginBottom: '1rem' }}>Available Services in {loc.name}</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {businessInfo.services.map((svc) => (
                  <li key={svc.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={16} color="var(--color-orange)" />
                      <span style={{ color: 'var(--color-ivory)', fontSize: '0.925rem' }}>{svc.title}</span>
                    </div>
                    <Link to={svc.slug} style={{ color: 'var(--color-lilac)', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                      <span>Details</span>
                      <ArrowRight size={12} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Locality Switcher */}
          <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <h4 style={{ marginBottom: '1rem' }}>Other Mumbai &amp; Thane Service Locations</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
              {Object.keys(localitiesData)
                .filter((key) => key !== localitySlug)
                .map((key) => (
                  <Link
                    key={key}
                    to={`/service-areas/${key}`}
                    className="footer-locality-tag"
                    style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', color: 'var(--color-plum)', padding: '0.4rem 0.85rem' }}
                  >
                    {localitiesData[key].name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <BrandStrip />
    </div>
  );
}