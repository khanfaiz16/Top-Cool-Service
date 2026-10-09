// src/components/TestimonialsSection.jsx
import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function TestimonialsSection() {
  return (
    <section className="section-padding testimonials-section">
      <div className="container">
        <div className="section-head text-center">
          <span className="eyebrow eyebrow-orange">Customer Feedback</span>
          <h2>Verified Customer Reviews</h2>
          <p className="section-subtitle">
            We value genuine client satisfaction and authentic customer feedback across our Mumbai &amp; Thane service routes.
          </p>
        </div>

        {/* Transparent verification placeholder: Honest, uninvented customer review block */}
        <div className="card review-notice-card text-center">
          <MessageSquare size={36} color="var(--color-plum)" style={{ margin: '0 auto 1rem', opacity: 0.7 }} />
          <h3>Real Reviews From Real Customers</h3>
          <p style={{ maxWidth: '620px', margin: '0.75rem auto 1.5rem' }}>
            We only display authentic, verified feedback from Mumbai and Thane homeowners we have served. Have we recently repaired an appliance in your home? We would love to hear your feedback.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Share Your Feedback
            </a>
            <a href={businessInfo.phoneTel} className="btn btn-secondary">
              <Phone size={16} />
              Call Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}