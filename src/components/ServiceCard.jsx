// src/components/ServiceCard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench } from 'lucide-react';

export default function ServiceCard({ service }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="card service-card">
      <div className="service-card-media">
        {!imgError ? (
          <img
            src={service.image}
            alt={`${service.title} in Mumbai & Thane`}
            className="service-card-img"
            loading="lazy"
            width="400"
            height="230"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="service-image-placeholder">
            <Wrench size={32} color="var(--color-plum)" style={{ opacity: 0.5 }} />
            <span className="service-image-label">{service.title}</span>
          </div>
        )}
        <div className="service-card-overlay" />
      </div>

      <div className="service-card-body">
        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-desc">{service.shortDescription}</p>
        <div className="service-card-action">
          <Link to={service.slug} className="service-link" aria-label={`View details for ${service.title}`}>
            <span>View Service Details</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}