// src/pages/FAQ.jsx
import React, { useState } from 'react';
import { ChevronDown, Phone, MessageSquare } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import SEOHead from '../components/SEOHead';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How quickly can a technician visit my home in Mumbai or Thane?',
      a: 'We coordinate technician routing based on your locality. In most cases across our active localities (such as Dahisar, Andheri, Bandra, Powai, or Thane), we can arrange a same-day inspection visit when you contact us early during our operating hours (8:00 AM to 10:00 PM).',
    },
    {
      q: 'Do I need to carry my appliance to a workshop?',
      a: 'No. All our repairs and diagnostics for ACs, refrigerators, washing machines, microwaves, dryers, and dishwashers are conducted directly at your home or commercial premises.',
    },
    {
      q: 'How are repair charges and spare part costs determined?',
      a: 'After a hands-on diagnostic check, our technician explains the exact fault, the necessary procedure, and the total cost before beginning work. There are no hidden fees.',
    },
    {
      q: 'Which appliance brands do you service?',
      a: 'We service leading brands including Samsung, LG, Whirlpool, Bosch, IFB, Haier, Godrej, Voltas, Daikin, Panasonic, Siemens, Hitachi, and Electrolux.',
    },
    {
      q: 'Is Top Cool Service an authorized service center for these brands?',
      a: 'No. Top Cool Service is an independent maintenance and repair service provider. We are not an authorized warranty center for any single brand, allowing us to offer flexible, unbiased multi-brand repair across Mumbai and Thane.',
    },
    {
      q: 'What should I do before the technician arrives?',
      a: 'Please ensure safe and clear access to the machine. For refrigerators, clearing the immediate surrounding area helps; for ACs, ensure the indoor unit and switchboard can be reached safely.',
    },
  ];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' },
  ];

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="faq-page">
      <SEOHead
        title="Appliance Repair FAQ | Charges, Timing & Service Areas"
        description="Answers to common questions about appliance repair costs, doorstep visit timing, and brand compatibility across Mumbai and Thane."
        faqs={faqs}
        breadcrumbs={breadcrumbs}
      />

      <section className="page-hero-section">
        <div className="container text-center">
          <span className="eyebrow eyebrow-orange">Help &amp; Clarity</span>
          <h1>Frequently Asked Questions</h1>
          <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0.75rem auto 1.5rem' }}>
            Find clear answers regarding our doorstep inspection procedures, service areas, brand compatibility, and scheduling.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="faq-accordion-group">
            {faqs.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="faq-item card" style={{ padding: '0', marginBottom: '1rem', overflow: 'hidden' }}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span className="faq-question-text">{item.q}</span>
                    <ChevronDown
                      size={20}
                      color="var(--color-plum)"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform var(--transition-fast)',
                        flexShrink: 0,
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div id={`faq-answer-${idx}`} className="faq-answer-box">
                      <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="card text-center" style={{ marginTop: '3rem', padding: '2rem' }}>
            <h3>Have a Question Not Answered Here?</h3>
            <p style={{ margin: '0.5rem auto 1.25rem', maxWidth: '500px' }}>
              Speak directly with our team. We are happy to clarify your repair requirements.
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
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}