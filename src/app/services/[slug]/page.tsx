import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { WHATSAPP_URL, CTA_LABEL, siteConfig } from '@/config/site';
import { SERVICES, getService } from '@/data/services';
import { CONDITIONS } from '@/data/conditions';
import { SERVICE_MEDIA } from '@/data/media';
import { serviceStaticParams } from '@/lib/site-routes';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd } from '@/lib/knowledge-graph';
import { serviceLd } from '@/lib/schema';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServiceCard } from '@/components/ServiceCard';
import { CtaBand } from '@/components/CtaBand';

export const dynamicParams = false;
export function generateStaticParams() {
  return serviceStaticParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({ title: `${s.name} in Burlington`, description: s.metaDescription, path: `/services/${s.slug}` });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: s.name, path: `/services/${s.slug}` }];
  const related = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3);
  const regions = CONDITIONS.filter((c) => c.relatedServices.includes(s.slug));
  const media = SERVICE_MEDIA[s.slug];
  const gallery = [...(media?.cards ?? []), ...(media?.photos ?? []), ...(media?.diagrams ?? [])];
  const isDiagrams = (media?.diagrams?.length ?? 0) > 0;

  return (
    <>
      <JsonLd nodes={[breadcrumbLd(`/services/${s.slug}`, crumbs), serviceLd(s.slug)]} />
      <section className="section pb-10">
        <div className="container-x">
          <Breadcrumbs items={crumbs} />
          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow reveal">Service</p>
              <h1 className="tt-display reveal" style={{ animationDelay: '80ms' }}>{s.name}</h1>
              <p className="lead mt-6 reveal" style={{ animationDelay: '160ms' }}>{s.summary}</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8 reveal" style={{ animationDelay: '240ms' }}>
                <MessageCircle className="w-5 h-5" aria-hidden /> {CTA_LABEL}
              </a>
            </div>
            <aside className="lg:col-span-4 lg:col-start-9 card p-6 self-start reveal" style={{ animationDelay: '200ms' }}>
              <p className="eyebrow">Delivered by</p>
              <p className="font-heading font-medium text-lg">{siteConfig.practitioner.displayName}</p>
              <p className="tt-mono text-muted mt-1">{siteConfig.practitioner.credentials}</p>
              <p className="mt-4 text-sm text-muted">Registered with the College of Physiotherapists of Ontario. One-to-one sessions, by appointment.</p>
              <Link href="/about" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4">About Abhishek <ArrowRight className="w-3.5 h-3.5" aria-hidden /></Link>
            </aside>
          </div>
        </div>
      </section>

      {gallery.length > 0 ? (
        <section className="pb-14">
          <div className="container-x">
            {isDiagrams ? (
              <div className="max-w-2xl mb-8" data-fx="rise">
                <p className="eyebrow">How the body connects</p>
                <h2 className="tt-2">Fascia links muscles, joints and nerves into one system.</h2>
                <p className="mt-4 text-[15.5px] text-muted leading-relaxed">These anatomy references show why a restriction in one region can show up as pain somewhere else — and why treatment looks along the whole chain.</p>
              </div>
            ) : null}
            <div className={gallery.length === 1 ? 'max-w-xl' : 'columns-1 sm:columns-2 lg:columns-3 gap-5'} data-fx="stagger">
              {gallery.map((m) => (
                <figure key={m.src} className="mb-5 break-inside-avoid rounded-lg overflow-hidden border border-border bg-white">
                  <Image src={m.src} alt={m.alt} width={m.width} height={m.height} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" className="w-full h-auto" />
                  {m.caption ? <figcaption className="px-4 py-3 text-sm text-[color:var(--brand-navy)] border-t border-border bg-white">{m.caption}</figcaption> : null}
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="pb-8">
        <div className="container-x grid gap-10 md:grid-cols-3">
          <div data-fx="rise">
            <div className="court-line mb-5" data-fx="draw" aria-hidden />
            <h2 className="tt-3">What it is</h2>
            <div className="mt-4 space-y-3 text-[15.5px] leading-relaxed text-muted">{s.what.map((t) => <p key={t}>{t}</p>)}</div>
          </div>
          <div data-fx="rise">
            <div className="court-line mb-5" data-fx="draw" aria-hidden />
            <h2 className="tt-3">Who it helps</h2>
            <ul className="mt-4 space-y-2.5 text-[15.5px] leading-relaxed text-muted list-disc pl-5">{s.who.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
          <div data-fx="rise">
            <div className="court-line mb-5" data-fx="draw" aria-hidden />
            <h2 className="tt-3">What to expect</h2>
            <ul className="mt-4 space-y-2.5 text-[15.5px] leading-relaxed text-muted list-disc pl-5">{s.expect.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
      </section>

      {regions.length > 0 ? (
        <section className="section pt-12 pb-8">
          <div className="container-x">
            <h2 className="tt-2" data-fx="rise">Commonly part of the plan for</h2>
            <ul className="mt-6 flex flex-wrap gap-2.5" data-fx="stagger">
              {regions.map((r) => (
                <li key={r.slug}><Link href={`/conditions/${r.slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-accent hover:bg-surface transition-colors">{r.name} <ArrowRight className="w-3.5 h-3.5 text-accent" aria-hidden /></Link></li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="section pt-8">
        <div className="container-x">
          <h2 className="tt-2" data-fx="rise">Related services</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-fx="stagger">
            {related.map((r) => <ServiceCard key={r.slug} service={r} />)}
          </div>
          <Link href="/services" className="btn btn-ghost mt-8">All services <ArrowRight className="w-4 h-4" aria-hidden /></Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
