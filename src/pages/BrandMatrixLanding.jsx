// src/pages/BrandMatrixLanding.jsx
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, MessageSquare, CheckCircle, Wrench, MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import SEOHead from '../components/SEOHead';
import BookingPanel from '../components/BookingPanel';
import BrandStrip from '../components/BrandStrip';

export default function BrandMatrixLanding() {
  const { targetKey } = useParams();

  // Pattern expected: brand-appliance-in-locality
  // Examples: "samsung-washing-machine-in-andheri", "voltas-ac-in-bandra"
  const parts = targetKey ? targetKey.split('-in-') : [];
  if (parts.length !== 2) {
    return <Navigate to="/services" replace />;
  }

  const [brandAppliance, rawLocality] = parts;
  const brandParts = brandAppliance.split('-');
  const rawBrand = brandParts[0];
  const rawAppliance = brandParts.slice(1).join(' ');

  // Match brand against verified brands
  const matchedBrand = businessInfo.brands.find(
    (b) => b.name.toLowerCase() === rawBrand.toLowerCase()
  );

  // Match locality against verified localities
  const matchedLocality = businessInfo.localities.find(
    (l) => l.toLowerCase().replace(/\s+/g, '-') === rawLocality.toLowerCase()
  );

  if (!matchedBrand || !matchedLocality) {
    return <Navigate to="/services" replace />;
  }

  // Format title strings
  const brandName = matchedBrand.name;
  const localityName = matchedLocality;
  const applianceFormatted = rawAppliance
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const fullHeading = `${brandName} ${applianceFormatted} Repair in ${localityName}`;
  const pageTitle = `${brandName} ${applianceFormatted} Repair in ${localityName}, Mumbai`;
  const metaDescription = `Reliable doorstep ${brandName} ${applianceFormatted} repair in ${localityName}, Mumbai & Thane. Genuine spare parts, certified diagnostics, and fast dispatch. Call ${businessInfo.phoneDisplay}.`;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: `${localityName}`, url: `/service-areas/${rawLocality}` },
    { name: `${brandName} ${applianceFormatted}`, url: `/repair/${targetKey}` },
  ];

  const localFaqs = [
    {
      q: `Do you provide doorstep repair for ${brandName} ${applianceFormatted} in ${localityName}?`,
      a: `Yes, we dispatch technicians directly to homes and commercial spaces across ${localityName} with diagnostic tools for ${brandName} appliances.`,
    },
    {
      q: `Are genuine replacement components used for ${brandName} units?`,
      a: `Yes, we install compatible, high-grade parts suited for ${brandName} specifications with transparent price quotes before beginning repairs.`,
    },
  ];

  return (
    <div className="brand-matrix-page">
      <SEOHead
        title={pageTitle}
        description={metaDescription}
        serviceName={`${brandName} ${applianceFormatted} Repair`}
        faqs={localFaqs}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero */}
      <section className="page-hero-section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="eyebrow eyebrow-orange">Specialized Local Diagnostics</span>
              <h1>{fullHeading}</h1>
              <p style={{ fontSize: '1.1rem', margin: '1rem 0 1.5rem', lineHeight: '1.6' }}>
                Experiencing technical faults, cooling errors, or electrical issues with your {brandName} {applianceFormatted} in {localityName}? Our local technicians arrive with specialized diagnostic tools for fast on-site repair.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: 'var(--color-plum)' }}>
                  <MapPin size={18} color="var(--color-orange)" />
                  <span>Doorstep Visit in {localityName}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: 'var(--color-plum)' }}>
                  <Clock size={18} color="var(--color-orange)" />
                  <span>Daily Dispatch: 8:00 AM – 10:00 PM</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: 'var(--color-plum)' }}>
                  <ShieldCheck size={18} color="var(--color-orange)" />
                  <span>On-Site Testing Before Handover</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href={businessInfo.phoneTel} className="btn btn-primary">
                  <Phone size={18} />
                  Call {businessInfo.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/919920435051?text=Hello%20Top%20Cool%20Service,%20I%20need%20repair%20for%20my%20${encodeURIComponent(brandName)}%20${encodeURIComponent(applianceFormatted)}%20in%20${encodeURIComponent(localityName)}.`}
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

      {/* Diagnostic Checklist */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ gap: '2.5rem' }}>
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <Wrench size={22} color="var(--color-orange)" />
                <h3 style={{ margin: 0 }}>Common {brandName} Issues We Fix in {localityName}</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={16} color="var(--color-orange)" />
                  <span>PCB motherboards and digital control panel error codes</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={16} color="var(--color-orange)" />
                  <span>Motor humming, spin failure, or compressor non-starting issues</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={16} color="var(--color-orange)" />
                  <span>Drain blockage, water leakage, and inlet pressure problems</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={16} color="var(--color-orange)" />
                  <span>Thermostat, sensor, and heating component recalibration</span>
                </li>
              </ul>
            </div>

            <div className="card card-plum">
              <h3 style={{ color: 'var(--color-ivory)', marginBottom: '0.75rem' }}>Service Disclaimer</h3>
              <p style={{ color: 'var(--color-lilac)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Top Cool Service provides independent diagnostic, servicing, and out-of-warranty repair services. We are not an official manufacturer warranty center for {brandName}. All trademarked brand names belong to their respective registered owners and are cited strictly to identify machine compatibility.
              </p>
              <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(217, 201, 229, 0.2)', paddingTop: '1rem' }}>
                <Link to="/service-areas" style={{ color: 'var(--color-ivory)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span>View All Mumbai &amp; Thane Coverage</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrandStrip />
    </div>
  );
}