// src/pages/Home.jsx
import React from 'react';
import { Phone, MessageSquare, CheckCircle, Shield, Award } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import SEOHead from '../components/SEOHead';
import BookingPanel from '../components/BookingPanel';
import BrandStrip from '../components/BrandStrip';
import ServiceCard from '../components/ServiceCard';
import TrustAndProcess from '../components/TrustAndProcess';
import ServiceAreasSection from '../components/ServiceAreasSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function Home() {
  return (
    <div className="homepage">
      {/* Dynamic SEO Tags */}
      <SEOHead
        title="Appliance Repair in Mumbai & Thane | AC, Fridge & Washing Machine"
        description="Fast, reliable doorstep appliance repair across Mumbai and Thane. Expert technicians for AC, refrigerator, washing machine, microwave, dryer, and dishwasher."
      />

      {/* 1. HERO SECTION WITH ANIMATED AMBIENT MESH */}
      <section className="hero-section">
        <div className="hero-ambient-orb hero-orb-1" aria-hidden="true" />
        <div className="hero-ambient-orb hero-orb-2" aria-hidden="true" />

        <div className="container hero-container">
          <div className="hero-copy">
            <span className="eyebrow eyebrow-orange">Doorstep Repair In Mumbai &amp; Thane</span>
            <h1 className="hero-headline">
              Expert Appliance Repairs Done Right In Your Home.
            </h1>
            <p className="hero-subtext">
              Prompt, reliable service for your AC, refrigerator, washing machine, microwave, dryer, and dishwasher. Fast diagnostics and transparent pricing by experienced technicians.
            </p>

            <div className="hero-cta-group">
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
                WhatsApp Us
              </a>
            </div>

            <div className="hero-trust-badges">
              <div className="trust-badge">
                <CheckCircle size={18} color="var(--color-orange)" />
                <span>Doorstep Service</span>
              </div>
              <div className="trust-badge">
                <Shield size={18} color="var(--color-orange)" />
                <span>Genuine Spares</span>
              </div>
              <div className="trust-badge">
                <Award size={18} color="var(--color-orange)" />
                <span>8 AM – 10 PM Everyday</span>
              </div>
            </div>
          </div>

          <div className="hero-booking-wrapper">
            <BookingPanel />
          </div>
        </div>
      </section>

      {/* 2. MANUFACTURER BRAND STRIP */}
      <BrandStrip />

      {/* 3. SIX CORE APPLIANCE SERVICES */}
      <section className="section-padding services-section" id="services">
        <div className="container">
          <div className="section-head text-center">
            <span className="eyebrow eyebrow-orange">What We Fix</span>
            <h2>Our Appliance Repair Services</h2>
            <p className="section-subtitle">
              Comprehensive repair, routine maintenance, and component diagnostics for all your major household appliances.
            </p>
          </div>

          <div className="grid-3">
            {businessInfo.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. REASONS TO CHOOSE US & 5-STEP REPAIR PROCESS */}
      <TrustAndProcess />

      {/* 5. SERVICE AREAS IN MUMBAI & THANE */}
      <ServiceAreasSection />

      {/* 6. VERIFIED CUSTOMER REVIEWS */}
      <TestimonialsSection />

      {/* 7. BOTTOM CALL TO ACTION STRIP */}
      <section className="cta-strip-section">
        <div className="container">
          <div className="card card-plum cta-strip-card text-center">
            <h2>Need Urgent Appliance Repair Today?</h2>
            <p style={{ maxWidth: '640px', margin: '0.75rem auto 1.75rem', color: 'var(--color-lilac)' }}>
              Call our Dahisar hub directly or message us on WhatsApp for service in Bandra, Andheri, Powai, Thane, and surrounding areas.
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
        </div>
      </section>
    </div>
  );
}