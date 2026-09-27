/**
 * siteConfig — EVERY brand string and hard fact lives here (tyashin-website
 * §2 / addendum). Nothing below is invented: each value traces to the client
 * brief (27 Sep 2026), the brand folder, or the College of Physiotherapists
 * of Ontario public register. Anything not yet supplied is deliberately
 * absent (see docs/ASSET-DEBT.md) — never guessed.
 */

export const siteConfig = {
  name: 'Athix Physio & Sports Rehab',
  shortName: 'ATHIX',
  legalName: 'Athix Physio & Sports Rehab',
  /** Brand line from the logo lockup. */
  tagline: 'Restoring Motion. Redefining Limits.',
  /** Hero line from the client's services document. */
  heroLine: 'Move better. Recover stronger. Perform your best.',
  description:
    'Athix Physio & Sports Rehab is a physiotherapy and sports rehabilitation clinic in Burlington, Ontario, led by registered physiotherapist Abhishek Thakur, PT — advanced manual therapy, dry needling and acupuncture, and progressive rehabilitation inside BATTS Athletics on Dillon Road.',
  domain: 'athixrehab.ca',

  contact: {
    /** Click-to-call + WhatsApp — the one public number (client, Q1). */
    phoneE164: '+19053277791',
    phoneDisplay: '(905) 327-7791',
    whatsappNumber: '19053277791',
    whatsappMessage: 'I want to book an appointment',
    email: 'info@athixrehab.ca',
  },

  address: {
    streetAddress: '1233 Dillon Road',
    /** From the visiting card: "Next to Gym Area, Batts Badminton & Fitness Studio". */
    locationNote: 'Inside BATTS Athletics, next to the gym area',
    facility: 'BATTS Athletics Burlington',
    addressLocality: 'Burlington',
    addressRegion: 'ON',
    postalCode: 'L7M 1K6',
    addressCountry: 'CA',
    /** Geocoded from the street address (OpenStreetMap Nominatim). */
    geo: { latitude: 43.3688408, longitude: -79.8005773 },
  },

  /** Hours exactly as supplied in the brief. By appointment only, no walk-ins. */
  hours: {
    policy: 'By appointment only. No walk-ins.',
    rows: [
      { day: 'Monday', label: 'By appointment', note: 'Subject to availability', open: null, close: null },
      { day: 'Tuesday', label: 'Closed', open: null, close: null },
      { day: 'Wednesday', label: '1:00 PM – 7:00 PM', open: '13:00', close: '19:00' },
      { day: 'Thursday', label: 'Closed', open: null, close: null },
      { day: 'Friday', label: 'By appointment', note: 'Subject to availability', open: null, close: null },
      { day: 'Saturday', label: '8:30 AM – 1:30 PM', open: '08:30', close: '13:30' },
      { day: 'Sunday', label: 'Closed', open: null, close: null },
    ] as const,
    /** Chatbot / schema one-liner — same facts, prose form. */
    summary:
      'Wednesday 1:00 PM–7:00 PM; Saturday 8:30 AM–1:30 PM; Monday and Friday by appointment, subject to availability; Tuesday, Thursday and Sunday closed. By appointment only — no walk-ins.',
  },

  /** Areas served (SEO targeting per the brief — descriptive, not a claim of locations). */
  serviceAreas: ['Burlington', 'Oakville', 'Milton', 'Waterdown', 'Hamilton'],

  practitioner: {
    name: 'Abhishek Thakur',
    /** College-required order: name, protected title, then credentials. */
    title: 'PT',
    credentials: 'MPT (Ortho & Sports), Dip. AMPT',
    displayName: 'Abhishek Thakur, PT',
    role: 'Registered Physiotherapist',
    /** Public-register entry — the verifiable trust link. */
    registerUrl:
      'https://portal.collegept.org/public-register/display-member-contact/?id=5e1b785c-9102-e811-8136-480fcfeae051',
    languages: ['English', 'Hindi'],
    photo: '/images/abhishek-thakur.jpg',
  },

  /** No brand social profiles exist yet (brief: "None yet"). */
  socials: [] as string[],

  nav: [
    { label: 'Services', href: '/services' },
    { label: 'Conditions', href: '/conditions' },
    { label: 'Sports Rehab', href: '/sports-rehabilitation' },
    { label: 'About', href: '/about' },
    { label: 'Insurance', href: '/insurance-and-billing' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

export const WHATSAPP_URL = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.contact.whatsappMessage
)}`;

export const TEL_URL = `tel:${siteConfig.contact.phoneE164}`;
export const MAILTO_URL = `mailto:${siteConfig.contact.email}`;

export const CTA_LABEL = 'Book an Appointment';

export const FULL_ADDRESS = `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, ${siteConfig.address.addressRegion} ${siteConfig.address.postalCode}`;

export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  `${FULL_ADDRESS}, Canada`
)}&output=embed`;

export const MAPS_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${siteConfig.address.facility}, ${FULL_ADDRESS}`
)}`;
