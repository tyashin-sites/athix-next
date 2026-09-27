import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { WHATSAPP_URL, CTA_LABEL } from '@/config/site';
import { CONDITIONS, getCondition } from '@/data/conditions';
import { getService } from '@/data/services';
import { conditionStaticParams } from '@/lib/site-routes';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd } from '@/lib/knowledge-graph';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServiceCard } from '@/components/ServiceCard';
import { ConditionCard } from '@/components/ConditionCard';
import { CtaBand } from '@/components/CtaBand';

export const dynamicParams = false;
export function generateStaticParams() {
  return conditionStaticParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCondition(slug);
  if (!c) return {};
  return pageMetadata({ title: `${c.name} Physiotherapy in Burlington`, description: c.metaDescription, path: `/conditions/${c.slug}` });
}

export default async function ConditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCondition(slug);
  if (!c) notFound();
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Conditions', path: '/conditions' }, { name: c.name, path: `/conditions/${c.slug}` }];
  const services = c.relatedServices.map(getService).filter((s): s is NonNullable<typeof s> => Boolean(s));
  const siblings = CONDITIONS.filter((x) => x.slug !== c.slug).slice(0, 3);

  return (
    <>
      <JsonLd nodes={[breadcrumbLd(`/conditions/${c.slug}`, crumbs)]} />
      <section className="section pb-10">
        <div className="container-x">
          <Breadcrumbs items={crumbs} />
          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow reveal">Conditions · {c.name}</p>
              <h1 className="tt-display reveal" style={{ animationDelay: '80ms' }}>{c.name}</h1>
              <div className="mt-6 space-y-4 lead reveal" style={{ animationDelay: '160ms' }}>{c.intro.map((t) => <p key={t}>{t}</p>)}</div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8 reveal" style={{ animationDelay: '240ms' }}>
                <MessageCircle className="w-5 h-5" aria-hidden /> {CTA_LABEL}
              </a>
            </div>
            <aside className="lg:col-span-4 lg:col-start-9 card p-6 self-start reveal" style={{ animationDelay: '200ms' }}>
              <p className="eyebrow">We treat</p>
              <ul className="space-y-2 text-[15px]">
                {c.conditions.map((x) => <li key={x} className="flex gap-2.5"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden />{x}</li>)}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5" data-fx="rise">
            <div className="court-line mb-5" data-fx="draw" aria-hidden />
            <h2 className="tt-2">What the assessment looks at</h2>
          </div>
          <ul className="lg:col-span-7 space-y-3.5 text-[1.0625rem] leading-relaxed text-muted" data-fx="stagger">
            {c.whatWeLookAt.map((t) => <li key={t} className="flex gap-3"><span className="tt-mono text-accent mt-1.5">—</span><span>{t}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="section pt-12 pb-8">
        <div className="container-x">
          <h2 className="tt-2" data-fx="rise">Services that commonly form part of the plan</h2>
          <p className="mt-3 text-muted max-w-2xl" data-fx="rise">Which of these apply — and in what order — is decided at your assessment, not in advance.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" data-fx="stagger">
            {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      <section className="section pt-8">
        <div className="container-x">
          <h2 className="tt-2" data-fx="rise">Other regions</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-fx="stagger">
            {siblings.map((r) => <ConditionCard key={r.slug} region={r} />)}
          </div>
          <Link href="/conditions" className="btn btn-ghost mt-8">All conditions <ArrowRight className="w-4 h-4" aria-hidden /></Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
