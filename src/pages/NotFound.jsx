// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="section-padding text-center" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <span className="eyebrow eyebrow-orange">Error 404</span>
        <h1 style={{ margin: '0.5rem 0 1rem' }}>Page Not Found</h1>
        <p style={{ maxWidth: '520px', margin: '0 auto 2rem' }}>
          The page you are looking for does not exist or may have been moved. Return to our homepage to explore our appliance repair services across Mumbai and Thane.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={18} />
            <span>Back to Homepage</span>
          </Link>
          <Link to="/services" className="btn btn-secondary">
            <ArrowLeft size={18} />
            <span>View All Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}