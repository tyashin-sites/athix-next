import { siteConfig } from '@/config/site';

/**
 * FAQ — every answer is a confirmed fact (client brief 27 Sep 2026) or a
 * general Ontario rule. Items the client has not yet confirmed (parking
 * details, cancellation policy, non-member access) are deliberately absent.
 */

export interface FaqItem {
  q: string;
  a: string;
  /** Group used by the FAQ page and the insurance page. */
  group: 'booking' | 'insurance' | 'visit' | 'treatment';
}

export const FAQ: FaqItem[] = [
  {
    group: 'booking',
    q: 'How do I book an appointment?',
    a: `Message us on WhatsApp at ${siteConfig.contact.phoneDisplay} — every “Book an Appointment” button on this site opens a pre-filled message. You can also call the same number or email ${siteConfig.contact.email}. Appointments are by booking only; there are no walk-ins.`,
  },
  {
    group: 'booking',
    q: 'What are your hours?',
    a: `${siteConfig.hours.summary}`,
  },
  {
    group: 'booking',
    q: 'Do I need a doctor’s referral to see a physiotherapist?',
    a: 'No. In Ontario you can book directly with a registered physiotherapist without a referral. Some extended health insurance plans do ask for a physician’s referral before they reimburse physiotherapy — check your own plan’s wording if you intend to claim.',
  },
  {
    group: 'insurance',
    q: 'Is physiotherapy at Athix covered by OHIP?',
    a: 'No. Athix Physio & Sports Rehab is a private clinic and OHIP does not cover physiotherapy here. OHIP-funded physiotherapy is available only at designated clinics for specific groups (for example people aged 19 and under or 65 and over, or receiving ODSP or Ontario Works), with a physician referral.',
  },
  {
    group: 'insurance',
    q: 'Do you accept extended health insurance?',
    a: 'Yes. Most extended health benefit plans in Ontario include physiotherapy delivered by a registered physiotherapist, typically up to an annual maximum. Bring your plan details to your first visit.',
  },
  {
    group: 'insurance',
    q: 'Do you offer direct billing?',
    a: 'Yes — we direct bill to all major extended health insurers where your plan allows. If your plan does not permit direct billing, you will receive a detailed receipt to submit yourself.',
  },
  {
    group: 'insurance',
    q: 'How much does a session cost?',
    a: `Please contact us for current fees — message or call ${siteConfig.contact.phoneDisplay}, or email ${siteConfig.contact.email}. Physiotherapy provided by a registered physiotherapist is HST-exempt in Canada.`,
  },
  {
    group: 'visit',
    q: 'Where exactly is the clinic?',
    a: `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, ${siteConfig.address.addressRegion} ${siteConfig.address.postalCode} — ${siteConfig.address.locationNote}.`,
  },
  {
    group: 'visit',
    q: 'What should I wear and bring?',
    a: 'Wear comfortable clothing that lets the affected area be assessed and moved — shorts for hip, knee, or ankle problems; a vest or loose top for neck, shoulder, or back problems. Bring any imaging reports, surgical notes, and your insurance details.',
  },
  {
    group: 'visit',
    q: 'What happens at a first visit?',
    a: 'Your first visit is an assessment: a conversation about your symptoms, history, activity, and goals, followed by a movement and hands-on examination. You leave with an explanation of what is going on and a plan — treatment usually begins in the same visit when appropriate.',
  },
  {
    group: 'treatment',
    q: 'Is dry needling the same as acupuncture?',
    a: 'They use the same fine, sterile needles but differ in approach: dry needling targets muscle trigger points and tissue, while acupuncture follows traditional point locations. At Athix both are integrated into a physiotherapy plan when clinically appropriate, with your informed consent, by a physiotherapist authorized by the College of Physiotherapists of Ontario to perform acupuncture.',
  },
  {
    group: 'treatment',
    q: 'Who will I see?',
    a: `You will be assessed and treated by ${siteConfig.practitioner.displayName}, a registered physiotherapist (${siteConfig.practitioner.credentials}). Sessions are one-to-one.`,
  },
];
