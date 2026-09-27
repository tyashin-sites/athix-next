import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { siteConfig, WHATSAPP_URL, MAILTO_URL, CTA_LABEL } from '@/config/site';
import { FAQ } from '@/data/faq';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd, faqLd } from '@/lib/knowledge-graph';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqAccordion } from '@/components/FaqAccordion';
import { CtaBand } from '@/components/CtaBand';

export const metadata = pageMetadata({
  title: 'Insurance & Billing',
  description:
    'Insurance and billing at Athix Physio & Sports Rehab, Burlington: extended health benefits, direct billing to all major insurers where your plan allows, no referral needed, OHIP position, and fees on request.',
  path: '/insurance-and-billing',
});

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Insurance & Billing', path: '/insurance-and-billing' }];
const ITEMS = FAQ.filter((f) => f.group === 'insurance' || f.q === 'Do I need a doctor’s referral to see a physiotherapist?');

export default function InsurancePage() {
  return (
    <>
      <JsonLd nodes={[breadcrumbLd('/insurance-and-billing', CRUMBS), faqLd('/insurance-and-billing', ITEMS)]} />
      <section className="section pb-10">
        <div className="container-x">
          <Breadcrumbs items={CRUMBS} />
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow reveal">Insurance &amp; billing</p>
            <h1 className="tt-display reveal" style={{ animationDelay: '80ms' }}>Straightforward, before you book.</h1>
            <p className="lead mt-6 reveal" style={{ animationDelay: '160ms' }}>Athix is a private physiotherapy clinic. Here is exactly how paying for care works in Ontario, and what we do to make it simple.</p>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-x grid gap-5 md:grid-cols-2 lg:grid-cols-4" data-fx="stagger">
          {[
            { t: 'Extended health benefits', d: 'Most Ontario group and individual benefit plans cover physiotherapy delivered by a registered physiotherapist, typically up to an annual maximum. Check your plan for the amount and any referral requirement.' },
            { t: 'Direct billing', d: 'We direct bill to all major extended health insurers where your plan allows. Where a plan does not permit it, you receive a detailed receipt to submit yourself.' },
            { t: 'No referral needed', d: 'You can book directly. Some insurers require a physician’s referral before reimbursing — that is a plan rule, not a clinic rule.' },
            { t: 'OHIP', d: 'OHIP does not cover physiotherapy at Athix. OHIP-funded physiotherapy is available only at designated clinics for specific eligible groups, with a physician referral.' },
          ].map((c) => (
            <div key={c.t} className="card p-7">
              <h2 className="tt-3">{c.t}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4" data-fx="rise">
            <div className="court-line mb-5" data-fx="draw" aria-hidden />
            <h2 className="tt-2">Fees</h2>
            <p className="mt-4 text-muted leading-relaxed">Please contact us for current fees. Physiotherapy provided by a registered physiotherapist is HST-exempt in Canada, so the fee you are quoted is the fee you pay.</p>
            <div className="mt-6 flex flex-col gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><MessageCircle className="w-5 h-5" aria-hidden /> Ask about fees</a>
              <a href={MAILTO_URL} className="btn btn-ghost">{siteConfig.contact.email}</a>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="tt-2 mb-6" data-fx="rise">Questions about coverage</h2>
            <FaqAccordion items={ITEMS} />
            <p className="mt-6 text-sm text-muted">Insurance details change; when in doubt, ask your insurer before your visit. <Link href="/faq" className="underline underline-offset-4 inline-flex items-center gap-1">More questions <ArrowRight className="w-3.5 h-3.5" aria-hidden /></Link></p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
