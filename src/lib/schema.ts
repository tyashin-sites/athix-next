import { siteConfig, TEL_URL, FULL_ADDRESS, WHATSAPP_URL } from '@/config/site';
import { SITE_URL } from '@/lib/seo';
import { SERVICES } from '@/data/services';
import { CONDITIONS } from '@/data/conditions';

/**
 * Sitewide entity nodes (addendum §3b). A clinic is a physical-place
 * business → `Physiotherapy` (a MedicalBusiness subtype) with address, geo,
 * hours, telephone. SEO Co-Pilot cannot be installed before a verified custom
 * domain, so this in-page graph is the site's PRIMARY schema; the edge injects
 * idempotently by @type once the plugin is live, so nothing duplicates.
 *
 * No aggregateRating / review nodes: no reviews exist (and the client has
 * ruled out testimonials-as-endorsements). No `priceRange`: fees are on
 * request. Nothing here is invented.
 */

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const PERSON_ID = `${SITE_URL}/about#physiotherapist`;
const LOGO_URL = `${SITE_URL}/brand/logo-mark-512.png`;
const IMAGE_URL = `${SITE_URL}/og/default.png`;

const DAY_URI: Record<string, string> = {
  Monday: 'https://schema.org/Monday',
  Tuesday: 'https://schema.org/Tuesday',
  Wednesday: 'https://schema.org/Wednesday',
  Thursday: 'https://schema.org/Thursday',
  Friday: 'https://schema.org/Friday',
  Saturday: 'https://schema.org/Saturday',
  Sunday: 'https://schema.org/Sunday',
};

/** Only the fixed hours are machine-readable; "by appointment" days are prose. */
export function openingHoursSpecification() {
  return siteConfig.hours.rows
    .filter((r) => r.open && r.close)
    .map((r) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: DAY_URI[r.day],
      opens: r.open,
      closes: r.close,
    }));
}

export function organizationLd() {
  const a = siteConfig.address;
  return {
    '@type': ['Physiotherapy', 'MedicalBusiness', 'LocalBusiness'],
    '@id': ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: SITE_URL,
    logo: LOGO_URL,
    image: IMAGE_URL,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    telephone: siteConfig.contact.phoneE164,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: a.streetAddress,
      addressLocality: a.addressLocality,
      addressRegion: a.addressRegion,
      postalCode: a.postalCode,
      addressCountry: a.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: a.geo.latitude,
      longitude: a.geo.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${FULL_ADDRESS}, Canada`)}`,
    containedInPlace: { '@type': 'SportsActivityLocation', name: a.facility },
    openingHoursSpecification: openingHoursSpecification(),
    areaServed: siteConfig.serviceAreas.map((name) => ({ '@type': 'City', name })),
    availableLanguage: siteConfig.practitioner.languages,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'appointments',
        telephone: siteConfig.contact.phoneE164,
        email: siteConfig.contact.email,
        url: WHATSAPP_URL,
        availableLanguage: siteConfig.practitioner.languages,
      },
    ],
    employee: { '@id': PERSON_ID },
    founder: { '@id': PERSON_ID },
    medicalSpecialty: 'https://schema.org/Physiotherapy',
    knowsAbout: [
      'Physiotherapy',
      'Sports rehabilitation',
      'Manual therapy',
      'Dry needling',
      'Medical acupuncture',
      'Neuro-fascial release',
      'Pre and post-surgical rehabilitation',
      ...CONDITIONS.flatMap((c) => c.conditions),
    ],
    ...(siteConfig.socials.length ? { sameAs: siteConfig.socials } : {}),
  };
}

export function personLd() {
  const p = siteConfig.practitioner;
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: p.name,
    honorificSuffix: p.title,
    jobTitle: p.role,
    description: `${p.displayName} — ${p.credentials}. Registered with the College of Physiotherapists of Ontario.`,
    image: `${SITE_URL}${p.photo}`,
    url: `${SITE_URL}/about`,
    worksFor: { '@id': ORG_ID },
    knowsLanguage: p.languages,
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', name: 'Master of Physiotherapy (Orthopaedics & Sports)', credentialCategory: 'degree' },
      { '@type': 'EducationalOccupationalCredential', name: 'Diploma in Advanced Orthopaedic Manual Physical Therapy (Dip. AMPT)', credentialCategory: 'diploma' },
    ],
    memberOf: { '@type': 'Organization', name: 'College of Physiotherapists of Ontario', url: 'https://collegept.org' },
    sameAs: [p.registerUrl],
  };
}

export function websiteLd() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: siteConfig.name,
    url: SITE_URL,
    description: siteConfig.description,
    inLanguage: 'en-CA',
    publisher: { '@id': ORG_ID },
  };
}

/** One Service node per offered service (linked to the provider). */
export function serviceLd(slug: string) {
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return null;
  return {
    '@type': 'Service',
    '@id': `${SITE_URL}/services/${s.slug}#service`,
    name: s.name,
    serviceType: s.name,
    description: s.summary,
    url: `${SITE_URL}/services/${s.slug}`,
    provider: { '@id': ORG_ID },
    areaServed: siteConfig.serviceAreas.map((name) => ({ '@type': 'City', name })),
  };
}

export { TEL_URL };
