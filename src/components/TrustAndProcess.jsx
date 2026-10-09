// src/components/TrustAndProcess.jsx
import React from 'react';
import { ShieldCheck, MapPin, Clock, Headphones, CheckCircle2 } from 'lucide-react';

export default function TrustAndProcess() {
  const steps = [
    {
      num: '01',
      title: 'Initial Request',
      desc: 'Call our direct helpline or enter your appliance details via our booking panel.',
    },
    {
      num: '02',
      title: 'Slot Scheduling',
      desc: 'We coordinate an inspection window convenient for your home schedule in Mumbai or Thane.',
    },
    {
      num: '03',
      title: 'On-Site Diagnostic',
      desc: 'Our technician inspects your machine, identifies the root cause, and explains the repair steps.',
    },
    {
      num: '04',
      title: 'Transparent Quotation',
      desc: 'We outline the service requirements and component costs before performing the work.',
    },
    {
      num: '05',
      title: 'Testing & Handover',
      desc: 'The appliance is thoroughly test-run to confirm proper function before completing service.',
    },
  ];

  return (
    <section className="section-padding trust-process-section">
      <div className="container">
        {/* Why Choose Us */}
        <div className="section-head text-center">
          <span className="eyebrow eyebrow-orange">Direct &amp; Honest Care</span>
          <h2>Why Choose Top Cool Service?</h2>
          <p className="section-subtitle">
            Reliable doorstep appliance repairs focused on clear communication, skilled diagnosis, and prompt neighborhood coverage.
          </p>
        </div>

        <div className="grid-3" style={{ marginBottom: '4.5rem' }}>
          <div className="card trust-card">
            <div className="trust-icon-box">
              <Clock size={24} color="var(--color-orange)" />
            </div>
            <h4>Flexible Daily Hours</h4>
            <p>
              Available 7 days a week from 8:00 AM to 10:00 PM to fit your working schedule and emergency cooling needs.
            </p>
          </div>

          <div className="card trust-card">
            <div className="trust-icon-box">
              <MapPin size={24} color="var(--color-orange)" />
            </div>
            <h4>Local Mumbai &amp; Thane Reach</h4>
            <p>
              Technicians stationed across Western, Central, South Mumbai, and Thane for rapid doorstep response.
            </p>
          </div>

          <div className="card trust-card">
            <div className="trust-icon-box">
              <ShieldCheck size={24} color="var(--color-orange)" />
            </div>
            <h4>Multi-Brand Knowledge</h4>
            <p>
              Experienced servicing split ACs, inverter refrigerators, front-load washers, and digital microwave ovens.
            </p>
          </div>
        </div>

        {/* 5-Step Repair Process */}
        <div className="process-wrapper">
          <div className="section-head text-center">
            <span className="eyebrow">Clear Workflow</span>
            <h2>Our 5-Step Repair Process</h2>
            <p className="section-subtitle">
              From the initial call to final testing, here is how we handle your appliance repair.
            </p>
          </div>

          <div className="process-grid">
            {steps.map((st) => (
              <div key={st.num} className="process-step-item">
                <span className="step-number">{st.num}</span>
                <h4 className="step-title">{st.title}</h4>
                <p className="step-desc">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}