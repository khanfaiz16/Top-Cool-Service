// src/components/BrandStrip.jsx
import React from 'react';
import { businessInfo } from '../data/businessInfo';

export default function BrandStrip() {
  return (
    <section className="brand-strip-section" aria-label="Appliance Brands Serviced">
      <div className="container">
        <div className="brand-strip-header">
          <span className="eyebrow eyebrow-orange">Multi-Brand Compatibility</span>
          <p className="brand-strip-caption">
            Expert Diagnostics &amp; Doorstep Care For All Major Household Manufacturers
          </p>
        </div>

        <div className="brand-strip-grid">
          {businessInfo.brands.map((brand) => (
            <div key={brand.name} className="brand-badge-item" title={`${brand.name} repair service`}>
              <span
                className="brand-logo-mark"
                style={{
                  fontWeight: brand.fontStyle,
                  letterSpacing: brand.letterSpacing,
                }}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        <p className="brand-strip-disclaimer">
          * Top Cool Service is an independent repair and maintenance provider across Mumbai &amp; Thane. All registered trademarks, logos, and manufacturer names belong to their respective owners and are referenced solely to describe repair compatibility.
        </p>
      </div>
    </section>
  );
}