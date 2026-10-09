// src/components/FloatingWhatsApp.jsx
import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function FloatingWhatsApp() {
  const [minimized, setMinimized] = useState(false);

  return (
    <aside className="floating-whatsapp-wrapper" aria-label="Live Chat Support">
      {!minimized ? (
        <div className="floating-whatsapp-pill">
          <a
            href={businessInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp-link"
          >
            <div className="floating-whatsapp-avatar">
              <MessageSquare size={18} color="#FFFFFF" />
              <span className="online-beacon" aria-hidden="true" />
            </div>
            <div className="floating-whatsapp-text">
              <span className="floating-title">Chat with Technician</span>
              <span className="floating-subtitle">Online • Fast Response</span>
            </div>
          </a>
          <button
            type="button"
            className="floating-close-btn"
            onClick={() => setMinimized(true)}
            aria-label="Dismiss chat bubble"
          >
            <X size={14} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="floating-whatsapp-bubble-only"
          onClick={() => setMinimized(false)}
          aria-label="Open WhatsApp Chat"
        >
          <MessageSquare size={24} color="#FFFFFF" />
          <span className="online-beacon" aria-hidden="true" />
        </button>
      )}
    </aside>
  );
}