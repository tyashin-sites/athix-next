import { pageMetadata } from '@/lib/seo';
import { FAQ } from '@/data/faq';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd, faqLd } from '@/lib/knowledge-graph';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqAccordion } from '@/components/FaqAccordion';
import { CtaBand } from '@/components/CtaBand';

export const metadata = pageMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Answers about booking, hours, referrals, OHIP, extended health insurance, direct billing, fees, what to wear, and what happens at a first physiotherapy visit at Athix Physio & Sports Rehab, Burlington.',
  path: '/faq',
});

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }];
const GROUPS: { key: (typeof FAQ)[number]['group']; title: string }[] = [
  { key: 'booking', title: 'Booking & hours' },
  { key: 'insurance', title: 'Insurance & fees' },
  { key: 'visit', title: 'Your visit' },
  { key: 'treatment', title: 'Treatment' },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd nodes={[breadcrumbLd('/faq', CRUMBS), faqLd('/faq', FAQ)]} />
      <section className="section pb-10">
        <div className="container-x">
          <Breadcrumbs items={CRUMBS} />
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow reveal">FAQ</p>
            <h1 className="tt-display reveal" style={{ animationDelay: '80ms' }}>Questions, answered plainly.</h1>
          </div>
        </div>
      </section>
      <section className="pb-8">
        <div className="container-x space-y-14">
          {GROUPS.map((g) => (
            <div key={g.key} className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-4" data-fx="rise">
                <div className="court-line mb-5" data-fx="draw" aria-hidden />
                <h2 className="tt-2">{g.title}</h2>
              </div>
              <div className="lg:col-span-8"><FaqAccordion items={FAQ.filter((f) => f.group === g.key)} /></div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand title="Still have a question?" body="Send it on WhatsApp — a real person answers, and if an assessment is the right next step we will tell you." />
    </>
  );
}
