// src/components/SEOHead.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { businessInfo } from '../data/businessInfo';

export default function SEOHead({
  title,
  description,
  serviceName,
}) {
  const { pathname } = useLocation();
  const canonicalUrl = `${businessInfo.websiteUrl}${pathname === '/' ? '' : pathname}`;

  useEffect(() => {
    // 1. Update Document Title
    const fullTitle = title.includes(businessInfo.name)
      ? title
      : `${title} | ${businessInfo.name}`;
    document.title = fullTitle;

    // 2. Helper to set or create meta tags
    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);

    // 3. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Inject LocalBusiness + Service JSON-LD Structured Data
    const schemaId = 'schema-top-cool-service';
    let scriptTag = document.getElementById(schemaId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      name: businessInfo.name,
      url: businessInfo.websiteUrl,
      telephone: businessInfo.phoneRaw,
      email: businessInfo.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dahisar, Mumbai',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
      areaServed: businessInfo.localities.map((loc) => ({
        '@type': 'City',
        name: `${loc}, Mumbai/Thane`,
      })),
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '08:00',
          closes: '22:00',
        },
      ],
      priceRange: '₹₹',
    };

    if (serviceName) {
      structuredData.makesOffer = {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: serviceName,
          provider: {
            '@type': 'LocalBusiness',
            name: businessInfo.name,
          },
        },
      };
    }

    scriptTag.text = JSON.stringify(structuredData);
  }, [title, description, canonicalUrl, serviceName]);

  return null;
}