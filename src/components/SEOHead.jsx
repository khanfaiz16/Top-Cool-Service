// src/components/SEOHead.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { businessInfo } from '../data/businessInfo';

export default function SEOHead({
  title,
  description,
  serviceName,
  faqs = [],
  breadcrumbs = [],
}) {
  const { pathname } = useLocation();
  const canonicalUrl = `${businessInfo.websiteUrl}${pathname === '/' ? '' : pathname}`;

  useEffect(() => {
    // 1. Update Document Title
    const fullTitle = title.includes(businessInfo.name)
      ? title
      : `${title} | ${businessInfo.name}`;
    document.title = fullTitle;

    // 2. Set Meta Tags
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

    // 4. LocalBusiness Schema
    const schemaId = 'schema-top-cool-service';
    let scriptTag = document.getElementById(schemaId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const graph = [
      {
        '@type': 'HomeAndConstructionBusiness',
        '@id': `${businessInfo.websiteUrl}/#business`,
        name: businessInfo.name,
        url: businessInfo.websiteUrl,
        telephone: businessInfo.phoneRaw,
        email: businessInfo.email,
        priceRange: '₹₹',
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
              'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
            ],
            opens: '08:00',
            closes: '22:00',
          },
        ],
      },
    ];

    // 5. Add BreadcrumbList Schema (if provided)
    if (breadcrumbs.length > 0) {
      graph.push({
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: crumb.url.startsWith('http') ? crumb.url : `${businessInfo.websiteUrl}${crumb.url}`,
        })),
      });
    }

    // 6. Add FAQPage Schema (if faqs provided)
    if (faqs.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
          },
        })),
      });
    }

    if (serviceName) {
      graph[0].makesOffer = {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: serviceName,
          provider: {
            '@id': `${businessInfo.websiteUrl}/#business`,
          },
        },
      };
    }

    scriptTag.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graph,
    });
  }, [title, description, canonicalUrl, serviceName, faqs, breadcrumbs]);

  return null;
}