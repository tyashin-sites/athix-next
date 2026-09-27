import { pageMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd } from '@/lib/knowledge-graph';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'How Athix Physio & Sports Rehab collects, uses, protects and retains personal and personal health information, in line with PHIPA and PIPEDA.',
  path: '/privacy',
});

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy' }];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd nodes={[breadcrumbLd('/privacy', CRUMBS)]} />
      <section className="section">
        <div className="container-x">
          <Breadcrumbs items={CRUMBS} />
          <h1 className="tt-1 mt-8">Privacy Policy</h1>
          <p className="tt-mono text-muted mt-3">Last updated: 27 September 2026</p>
          <div className="prose-athix mt-10 text-muted">
            <p>{siteConfig.name} (“Athix”, “we”, “us”) is a physiotherapy clinic in Burlington, Ontario. As a health information custodian under Ontario’s <em>Personal Health Information Protection Act, 2004</em> (PHIPA), and in accordance with the federal <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA) where it applies, we are committed to protecting the privacy of your personal information and personal health information.</p>

            <h2>What we collect</h2>
            <ul>
              <li><strong>Contact and booking information</strong> — your name, phone number, email address, and the content of messages you send us (including via WhatsApp, phone, email, or a form on this website).</li>
              <li><strong>Personal health information</strong> — collected during assessment and treatment: health history, symptoms, assessment findings, treatment notes, imaging or reports you provide, and insurance details needed for billing.</li>
              <li><strong>Website information</strong> — standard technical data such as browser type, device, and pages visited, and any analytics data described below.</li>
            </ul>

            <h2>Why we collect it</h2>
            <ul>
              <li>To assess, treat, and communicate with you about your care.</li>
              <li>To schedule appointments and send reminders you have asked for.</li>
              <li>To bill you or your extended health insurer, including direct billing where your plan allows.</li>
              <li>To meet the record-keeping obligations of the College of Physiotherapists of Ontario.</li>
              <li>To operate and improve this website.</li>
            </ul>

            <h2>Consent</h2>
            <p>We collect, use, and disclose your personal health information with your knowledge and consent, except where the law permits or requires otherwise. You may withdraw consent for future collection, use, or disclosure at any time, subject to legal and professional requirements; we will explain any consequences of doing so.</p>

            <h2>Messaging (WhatsApp, email, text)</h2>
            <p>Booking through WhatsApp, email, or text is convenient but these channels are operated by third parties and are not designed for sensitive health information. Please keep messages to scheduling and general questions; detailed health information is best shared in person at your appointment.</p>

            <h2>Disclosure</h2>
            <p>We do not sell your information. We disclose personal health information only as needed for your care and with your consent (for example, to your physician, surgeon, or insurer for direct billing), or where required by law. Service providers who help us operate — such as the website platform and hosting provider — are bound to protect any information they process on our behalf.</p>

            <h2>Safeguards and retention</h2>
            <p>We use physical, administrative, and technical safeguards appropriate to the sensitivity of the information. Clinical records are retained for the period required by the College of Physiotherapists of Ontario and applicable law, then securely destroyed.</p>

            <h2>Your rights</h2>
            <p>You may request access to, or correction of, your personal health information. Contact us at <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>. If you have a concern about our handling of your information that we cannot resolve, you may contact the Information and Privacy Commissioner of Ontario.</p>

            <h2>Cookies and analytics</h2>
            <p>This website uses only strictly necessary cookies unless you are told otherwise and given the choice. Where analytics or consent tools are enabled, they are described here and controlled through the site’s consent settings.</p>

            <h2>Contact</h2>
            <p>{siteConfig.name}, {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} {siteConfig.address.postalCode} · {siteConfig.contact.phoneDisplay} · <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
