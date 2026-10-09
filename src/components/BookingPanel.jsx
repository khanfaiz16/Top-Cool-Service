// src/components/BookingPanel.jsx
import React, { useState } from 'react';
import { Calendar, AlertCircle, CheckCircle2, Loader2, MessageSquare, PhoneCall } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function BookingPanel() {
  const formspreeId = import.meta.env.VITE_FORMSPREE_FORM_ID;
  const isFormspreeConfigured = Boolean(formspreeId && formspreeId !== 'YOUR_FORMSPREE_ID');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'AC Repair & Servicing',
    locality: 'Dahisar',
    problem: '',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      errs.phone = 'Mobile number is required.';
    } else if (!/^(?:\+91|91)?[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phone = 'Enter a valid 10-digit Indian mobile number.';
    }
    if (!formData.problem.trim()) {
      errs.problem = 'Briefly describe the issue your appliance has.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    // If Formspree ID is configured, send HTTP POST
    if (isFormspreeConfigured) {
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            Name: formData.name,
            Phone: formData.phone,
            Appliance: formData.service,
            Locality: formData.locality,
            PreferredSlot: formData.preferredTime,
            ProblemDescription: formData.problem,
            SubmittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          }),
        });

        if (response.ok) {
          setSubmitSuccess(true);
        } else {
          const resData = await response.json();
          setSubmitError(resData?.error || 'Unable to submit booking. Please contact us directly.');
        }
      } catch (err) {
        setSubmitError('Network error. Please check your internet or reach us via WhatsApp/Phone.');
      } finally {
        setSubmitting(false);
      }
    } else {
      // Safe fallback when ID is pending
      setTimeout(() => {
        setSubmitting(false);
        setSubmitSuccess(true);
      }, 600);
    }
  };

  const getWhatsAppBookingUrl = () => {
    const message = `Hello Top Cool Service, I would like to book a repair visit:%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Appliance:* ${encodeURIComponent(formData.service)}%0A*Locality:* ${encodeURIComponent(formData.locality)}%0A*Preferred Slot:* ${encodeURIComponent(formData.preferredTime)}%0A*Problem:* ${encodeURIComponent(formData.problem)}`;
    return `https://wa.me/919920435051?text=${message}`;
  };

  return (
    <div className="card booking-card" id="book-repair">
      <div className="booking-card-header">
        <span className="eyebrow eyebrow-orange">Schedule Doorstep Visit</span>
        <h3 style={{ marginTop: '0.25rem', marginBottom: '0.5rem' }}>Book Technician</h3>
        <p style={{ fontSize: '0.875rem' }}>
          On-site service in Mumbai &amp; Thane (8:00 AM – 10:00 PM).
        </p>
      </div>

      {submitSuccess ? (
        <div className="booking-success-box">
          <CheckCircle2 size={40} color="#1EBE5D" style={{ margin: '0 auto 0.75rem' }} />
          <h4>Booking Request Received</h4>
          <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 1.25rem', lineHeight: '1.5' }}>
            Thank you, <strong>{formData.name}</strong>. Our technician coordinator will review your request for{' '}
            <strong>{formData.service}</strong> in <strong>{formData.locality}</strong> and call your number{' '}
            (<strong>{formData.phone}</strong>) shortly.
          </p>

          {!isFormspreeConfigured && (
            <div className="booking-notice" style={{ marginBottom: '1rem' }}>
              <AlertCircle size={18} style={{ flexShrink: 0 }} />
              <span>
                <strong>Developer Note:</strong> Set your Formspree Form ID in <code>.env</code> to deliver submissions straight to <code>{businessInfo.email}</code>.
              </span>
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%' }}
            >
              <MessageSquare size={18} />
              Confirm Immediately on WhatsApp
            </a>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setSubmitSuccess(false);
                setFormData({
                  name: '',
                  phone: '',
                  service: 'AC Repair & Servicing',
                  locality: 'Dahisar',
                  problem: '',
                  preferredTime: 'Morning (8:00 AM - 12:00 PM)',
                });
              }}
            >
              Book Another Appliance
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {submitError && (
            <div className="booking-error-banner" style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#FFEBEE', border: '1px solid #FFCDD2', borderRadius: 'var(--radius-sm)', color: '#C62828', fontSize: '0.85rem' }}>
              {submitError}
            </div>
          )}

          {/* Customer Name */}
          <div className="form-group">
            <label className="form-label" htmlFor="booking-name">Your Full Name *</label>
            <input
              id="booking-name"
              name="name"
              type="text"
              className="form-input"
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={handleChange}
              disabled={submitting}
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          {/* Mobile Number */}
          <div className="form-group">
            <label className="form-label" htmlFor="booking-phone">Mobile Number *</label>
            <input
              id="booking-phone"
              name="phone"
              type="tel"
              className="form-input"
              placeholder="+91 98204 12345"
              value={formData.phone}
              onChange={handleChange}
              disabled={submitting}
            />
            {errors.phone && <span className="form-error">{errors.phone}</span>}
          </div>

          {/* Appliance & Locality */}
          <div className="form-row-2">
            <div className="form-group">
              <label className="form-label" htmlFor="booking-service">Appliance Category *</label>
              <select
                id="booking-service"
                name="service"
                className="form-select"
                value={formData.service}
                onChange={handleChange}
                disabled={submitting}
              >
                {businessInfo.services.map((svc) => (
                  <option key={svc.id} value={svc.title}>
                    {svc.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="booking-locality">Locality *</label>
              <select
                id="booking-locality"
                name="locality"
                className="form-select"
                value={formData.locality}
                onChange={handleChange}
                disabled={submitting}
              >
                {businessInfo.localities.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Preferred Time Window */}
          <div className="form-group">
            <label className="form-label" htmlFor="booking-time">Preferred Visit Time</label>
            <select
              id="booking-time"
              name="preferredTime"
              className="form-select"
              value={formData.preferredTime}
              onChange={handleChange}
              disabled={submitting}
            >
              <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
              <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
              <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
              <option value="Late Evening (8:00 PM - 10:00 PM)">Late Evening (8:00 PM - 10:00 PM)</option>
            </select>
          </div>

          {/* Problem Details */}
          <div className="form-group">
            <label className="form-label" htmlFor="booking-problem">Describe The Issue *</label>
            <textarea
              id="booking-problem"
              name="problem"
              rows={3}
              className="form-textarea"
              placeholder="e.g. AC compressor trips after 10 mins, or washing machine drum not rotating."
              value={formData.problem}
              onChange={handleChange}
              disabled={submitting}
            />
            {errors.problem && <span className="form-error">{errors.problem}</span>}
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '0.5rem' }}
            disabled={submitting}
          >
            {submitting ? (
              <>
                <Loader2 size={18} className="spin-animation" />
                <span>Submitting Request...</span>
              </>
            ) : (
              <>
                <Calendar size={18} />
                <span>Confirm Booking Request</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}