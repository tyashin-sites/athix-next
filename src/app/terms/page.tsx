import { pageMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd } from '@/lib/knowledge-graph';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = pageMetadata({
  title: 'Terms of Use',
  description: 'Terms of use for the Athix Physio & Sports Rehab website: information only, not medical advice; booking; intellectual property; limitation of liability.',
  path: '/terms',
});

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Terms of Use', path: '/terms' }];

export default function TermsPage() {
  return (
    <>
      <JsonLd nodes={[breadcrumbLd('/terms', CRUMBS)]} />
      <section className="section">
        <div className="container-x">
          <Breadcrumbs items={CRUMBS} />
          <h1 className="tt-1 mt-8">Terms of Use</h1>
          <p className="tt-mono text-muted mt-3">Last updated: 27 September 2026</p>
          <div className="prose-athix mt-10 text-muted">
            <p>By using this website you agree to these terms. If you do not agree, please do not use the site.</p>

            <h2>Information, not medical advice</h2>
            <p>The content on this website — including service descriptions, condition pages, FAQs, and blog articles — is general information about physiotherapy. It is not medical advice, does not create a physiotherapist–patient relationship, and is not a substitute for an assessment by a regulated health professional. If you have a health concern, book an assessment or speak to your physician. <strong>In an emergency, call 911.</strong></p>

            <h2>Booking</h2>
            <p>Appointments are by booking only; requests sent through WhatsApp, phone, or email are not confirmed until we reply with a confirmed time. Please tell us as early as possible if you cannot attend so the time can be offered to someone else.</p>

            <h2>Regulated practice</h2>
            <p>Physiotherapy at Athix is provided by a physiotherapist registered with the College of Physiotherapists of Ontario, in accordance with the <em>Physiotherapy Act, 1991</em> and the <em>Regulated Health Professions Act, 1991</em>. Nothing on this site guarantees a particular outcome; every person and condition is different.</p>

            <h2>Intellectual property</h2>
            <p>The ATHIX name, logo, and the content of this site belong to {siteConfig.legalName} unless otherwise stated. You may view and print pages for personal, non-commercial use. Any other reproduction requires our written permission.</p>

            <h2>Third-party links and services</h2>
            <p>This site links to third-party services (for example WhatsApp and Google Maps) that have their own terms and privacy practices. We are not responsible for their content or conduct.</p>

            <h2>Limitation of liability</h2>
            <p>To the fullest extent permitted by law, {siteConfig.legalName} is not liable for any loss arising from your use of, or reliance on, this website or its content.</p>

            <h2>Governing law</h2>
            <p>These terms are governed by the laws of Ontario and the federal laws of Canada applicable in Ontario.</p>

            <h2>Contact</h2>
            <p>{siteConfig.name} · {siteConfig.contact.phoneDisplay} · <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
