import { siteConfig, FULL_ADDRESS, WHATSAPP_URL } from '@/config/site';
import { SITE_URL } from '@/lib/seo';
import { SERVICES } from '@/data/services';
import { CONDITIONS } from '@/data/conditions';

/** /llms.txt — a plain, factual summary for AI answer engines. Facts only. */
export const dynamic = 'force-static';

export function GET() {
  const p = siteConfig.practitioner;
  const lines = [
    `# ${siteConfig.name}`,
    '',
    `> ${siteConfig.description}`,
    '',
    `- Practitioner: ${p.displayName} — ${p.credentials}. Registered with the College of Physiotherapists of Ontario; authorized to perform acupuncture including dry needling. Languages: ${p.languages.join(', ')}.`,
    `- Address: ${FULL_ADDRESS} (${siteConfig.address.locationNote}).`,
    `- Phone / WhatsApp: ${siteConfig.contact.phoneDisplay}. Email: ${siteConfig.contact.email}.`,
    `- Booking: ${WHATSAPP_URL} — ${siteConfig.hours.policy}`,
    `- Hours: ${siteConfig.hours.summary}`,
    '- Payment: private clinic; extended health insurance accepted with direct billing to all major insurers where the plan allows; no physician referral required; OHIP does not cover physiotherapy at this clinic; fees on request; physiotherapy is HST-exempt.',
    `- Areas served: ${siteConfig.serviceAreas.join(', ')}.`,
    '',
    '## Services',
    ...SERVICES.map((s) => `- [${s.name}](${SITE_URL}/services/${s.slug}): ${s.summary}`),
    `- [Sports Rehabilitation](${SITE_URL}/sports-rehabilitation): staged rehabilitation from injury back to sport.`,
    '',
    '## Conditions treated',
    ...CONDITIONS.map((c) => `- [${c.name}](${SITE_URL}/conditions/${c.slug}): ${c.conditions.join(', ')}`),
    '',
    '## Pages',
    `- [About](${SITE_URL}/about)`,
    `- [Your first visit](${SITE_URL}/first-visit)`,
    `- [Insurance & billing](${SITE_URL}/insurance-and-billing)`,
    `- [FAQ](${SITE_URL}/faq)`,
    `- [Contact & location](${SITE_URL}/contact)`,
    `- [Blog](${SITE_URL}/blog)`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=3600' } });
}
