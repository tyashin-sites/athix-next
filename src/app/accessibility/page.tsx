import { pageMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd } from '@/lib/knowledge-graph';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = pageMetadata({
  title: 'Accessibility Statement',
  description: 'Accessibility statement for the Athix Physio & Sports Rehab website — built to WCAG 2.1 AA in the spirit of the AODA — and how to tell us about access needs at the clinic.',
  path: '/accessibility',
});

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Accessibility', path: '/accessibility' }];

export default function AccessibilityPage() {
  return (
    <>
      <JsonLd nodes={[breadcrumbLd('/accessibility', CRUMBS)]} />
      <section className="section">
        <div className="container-x">
          <Breadcrumbs items={CRUMBS} />
          <h1 className="tt-1 mt-8">Accessibility Statement</h1>
          <p className="tt-mono text-muted mt-3">Last updated: 27 September 2026</p>
          <div className="prose-athix mt-10 text-muted">
            <p>{siteConfig.name} wants everyone to be able to use this website and to get care at the clinic. This statement describes what we have done and how to tell us when something is not working for you.</p>

            <h2>This website</h2>
            <p>The site is designed and built to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA, consistent with the <em>Accessibility for Ontarians with Disabilities Act</em> (AODA). In practice that means:</p>
            <ul>
              <li>Every page can be navigated by keyboard, with a visible focus indicator and a “Skip to content” link.</li>
              <li>Text and interactive elements meet colour-contrast minimums, in both light and dark mode.</li>
              <li>Headings, landmarks, lists, and tables are marked up semantically for screen readers; images carry descriptive alternative text.</li>
              <li>Motion and animation respect your operating system’s “reduce motion” setting; nothing essential depends on animation.</li>
              <li>Content reflows on small screens and at up to 400% zoom; text can be resized without loss of function.</li>
              <li>Booking never requires a specific device or app: WhatsApp, a phone call, and email all work.</li>
            </ul>

            <h2>At the clinic</h2>
            <p>The clinic is located inside {siteConfig.address.facility}. If you have mobility, sensory, or communication needs, please tell us when you book so we can advise on the most practical route into the clinic and plan your visit around them. Sessions are available in {siteConfig.practitioner.languages.join(' and ')}.</p>

            <h2>Tell us</h2>
            <p>If you encounter a barrier on this website or at the clinic, contact us at <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> or {siteConfig.contact.phoneDisplay}. We take feedback seriously and will respond as quickly as we can.</p>
          </div>
        </div>
      </section>
    </>
  );
}
