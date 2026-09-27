import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { SERVICES } from '@/data/services';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd } from '@/lib/knowledge-graph';
import { serviceLd } from '@/lib/schema';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServiceCard } from '@/components/ServiceCard';
import { CtaBand } from '@/components/CtaBand';

export const metadata = pageMetadata({
  title: 'Physiotherapy Services in Burlington',
  description:
    'Neuro-fascial release, soft tissue and myofascial release, dry needling and acupuncture, joint mobilization, strength and mobility programs, cupping, therapeutic modalities and pre/post-surgical rehab — Athix Physio & Sports Rehab, Burlington.',
  path: '/services',
});

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }];

export default function ServicesPage() {
  return (
    <>
      <JsonLd nodes={[breadcrumbLd('/services', CRUMBS), ...SERVICES.map((s) => serviceLd(s.slug))]} />
      <section className="section pb-10">
        <div className="container-x">
          <Breadcrumbs items={CRUMBS} />
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow reveal">Our services</p>
            <h1 className="tt-display reveal" style={{ animationDelay: '80ms' }}>Hands-on care. Movement science. Progressive rehabilitation.</h1>
            <p className="lead mt-6 reveal" style={{ animationDelay: '160ms' }}>
              Every service below is delivered one-to-one by a registered physiotherapist and integrated into a single plan built around your body, activity, and goals — never used in isolation.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-fx="stagger">
            {SERVICES.map((s) => <ServiceCard key={s.slug} service={s} />)}
            <Link href="/sports-rehabilitation" className="card group flex flex-col p-6 md:p-7 h-full on-dark ink">
              <p className="eyebrow">Flagship</p>
              <h3 className="tt-3 text-white flex items-start justify-between gap-3"><span>Sports Rehabilitation</span><ArrowRight className="w-5 h-5 shrink-0 text-accent-soft" aria-hidden /></h3>
              <p className="mt-3 text-[15px] text-white/75 leading-relaxed">From injury back to the game — a staged path from pain to performance for racquet, cricket, running, soccer, and gym athletes.</p>
            </Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
