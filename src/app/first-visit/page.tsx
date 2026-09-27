import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { siteConfig, WHATSAPP_URL, CTA_LABEL } from '@/config/site';
import { PLACEHOLDERS } from '@/data/placeholders';
import { FAQ } from '@/data/faq';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd, faqLd } from '@/lib/knowledge-graph';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqAccordion } from '@/components/FaqAccordion';
import { CtaBand } from '@/components/CtaBand';

export const metadata = pageMetadata({
  title: 'Your First Visit — What to Expect',
  description:
    'What happens at your first physiotherapy visit at Athix Physio & Sports Rehab in Burlington: the assessment, what to wear and bring, how long it takes, and what you leave with.',
  path: '/first-visit',
});

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Your First Visit', path: '/first-visit' }];
const ITEMS = FAQ.filter((f) => f.group === 'visit' || f.q === 'Do I need a doctor’s referral to see a physiotherapist?');

const STEPS = [
  { t: 'We talk', d: 'Your symptoms, how they started, what makes them better or worse, your activity and training, your history, and — most importantly — what you want to get back to.' },
  { t: 'We look at how you move', d: 'A movement assessment of the affected region and the areas that load it: joints, muscles, fascia, nerves, strength, control, and the patterns you use in daily life and sport.' },
  { t: 'We explain what we found', d: 'In plain language: what is likely driving the problem, what the plan is, and how many visits a reasonable first block might involve. You should leave understanding your own body better.' },
  { t: 'Treatment usually starts the same day', d: 'When appropriate, hands-on treatment begins in the first visit, and you leave with a short home plan so progress continues between sessions.' },
];

export default function FirstVisitPage() {
  return (
    <>
      <JsonLd nodes={[breadcrumbLd('/first-visit', CRUMBS), faqLd('/first-visit', ITEMS)]} />
      <section className="section pb-10">
        <div className="container-x">
          <Breadcrumbs items={CRUMBS} />
          <div className="mt-8 grid gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow reveal">Your first visit</p>
              <h1 className="tt-display reveal" style={{ animationDelay: '80ms' }}>What to expect.</h1>
              <p className="lead mt-6 reveal" style={{ animationDelay: '160ms' }}>Your first appointment is an assessment. It is unhurried, one-to-one, and ends with an explanation and a plan — not just a treatment.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8 reveal" style={{ animationDelay: '240ms' }}><MessageCircle className="w-5 h-5" aria-hidden /> {CTA_LABEL}</a>
            </div>
            <div className="lg:col-span-5 reveal" style={{ animationDelay: '200ms' }}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-[var(--shadow-rest)]">
                <Image src={PLACEHOLDERS.treatmentRoom.src} alt={PLACEHOLDERS.treatmentRoom.alt} fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-x">
          <ol className="grid gap-5 md:grid-cols-2" data-fx="stagger">
            {STEPS.map((s, i) => (
              <li key={s.t} className="card p-7">
                <span className="tt-mono text-accent">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="tt-3 mt-3">{s.t}</h2>
                <p className="mt-3 text-[15.5px] leading-relaxed text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4" data-fx="rise">
            <p className="eyebrow">Practical</p>
            <h2 className="tt-1">Before you come</h2>
            <p className="mt-4 text-muted">{siteConfig.hours.policy}</p>
            <Link href="/insurance-and-billing" className="btn btn-ghost mt-6">Insurance &amp; billing <ArrowRight className="w-4 h-4" aria-hidden /></Link>
          </div>
          <div className="lg:col-span-8"><FaqAccordion items={ITEMS} /></div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
