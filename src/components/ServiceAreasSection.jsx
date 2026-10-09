// src/components/ServiceAreasSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function ServiceAreasSection() {
  return (
    <section className="section-padding service-areas-home">
      <div className="container">
        <div className="card card-plum service-areas-card">
          <div className="service-areas-content">
            <span className="eyebrow" style={{ backgroundColor: 'rgba(217, 201, 229, 0.2)', color: 'var(--color-ivory)', borderColor: 'rgba(217, 201, 229, 0.3)' }}>
              Regional Coverage
            </span>
            <h2 style={{ color: 'var(--color-ivory)', marginTop: '0.5rem' }}>
              Doorstep Service Across Mumbai &amp; Thane
            </h2>
            <p style={{ color: 'var(--color-lilac)', margin: '1rem 0 1.75rem', maxWidth: '600px' }}>
              We dispatch technicians directly to your residential or commercial location throughout Mumbai and Thane. No need to transport heavy appliances.
            </p>
            <div className="localities-pill-grid">
              {businessInfo.localities.map((loc) => (
                <div key={loc} className="locality-pill">
                  <MapPin size={14} color="var(--color-orange)" />
                  <span>{loc}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <Link to="/service-areas" className="btn btn-primary">
                <span>View Full Service Area Details</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}