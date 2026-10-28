import { MapPin, Phone, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { siteConfig, WHATSAPP_URL, TEL_URL, TEL2_URL, MAILTO_URL, MAPS_LINK_URL, CTA_LABEL } from '@/config/site';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd } from '@/lib/knowledge-graph';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { HoursTable } from '@/components/HoursTable';
import { MapEmbed } from '@/components/MapEmbed';
import Image from 'next/image';
import { CLINIC } from '@/data/media';
import { GoogleReviewPrompt } from '@/components/GoogleReviewPrompt';

export const metadata = pageMetadata({
  title: 'Contact & Location',
  description:
    'Athix Physio & Sports Rehab — 1233 Dillon Road, Burlington, ON L7M 1K6, inside BATTS ATHLETICS BURLINGTON next to the gym area. Book on WhatsApp at (905) 327-7791 or call (905) 906-7791. Wednesday 1–7 PM, Saturday 8:30 AM–1:30 PM, Monday and Friday by appointment.',
  path: '/contact',
});

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Contact & Location', path: '/contact' }];

export default function ContactPage() {
  const a = siteConfig.address;
  return (
    <>
      <JsonLd nodes={[breadcrumbLd('/contact', CRUMBS)]} />
      <section className="section pb-10">
        <div className="container-x">
          <Breadcrumbs items={CRUMBS} />
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow reveal">Contact &amp; location</p>
            <h1 className="tt-display reveal" style={{ animationDelay: '80ms' }}>Inside BATTS ATHLETICS BURLINGTON.</h1>
            <p className="lead mt-6 reveal" style={{ animationDelay: '160ms' }}>{siteConfig.hours.policy} The fastest way to book is a WhatsApp message — every button on this site opens one, pre-filled.</p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-8">
            <div className="card p-7" data-fx="rise">
              <h2 className="tt-3">Book or ask a question</h2>
              <div className="mt-5 flex flex-col gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary py-4 text-base"><MessageCircle className="w-5 h-5" aria-hidden /> {CTA_LABEL}</a>
                <a href={TEL_URL} className="btn btn-ghost py-4 text-base"><Phone className="w-5 h-5" aria-hidden /> Call {siteConfig.contact.phoneDisplay}</a>
                <a href={TEL2_URL} className="btn btn-ghost py-4 text-base"><Phone className="w-5 h-5" aria-hidden /> Call {siteConfig.contact.phone2Display}</a>
                <a href={MAILTO_URL} className="btn btn-ghost py-4 text-base"><Mail className="w-5 h-5" aria-hidden /> {siteConfig.contact.email}</a>
              </div>
            </div>
            <div data-fx="rise">
              <h2 className="tt-3 flex items-center gap-2"><MapPin className="w-5 h-5 text-accent" aria-hidden /> Address</h2>
              <address className="not-italic mt-3 text-[1.0625rem] leading-relaxed">
                {siteConfig.name}<br />
                {a.streetAddress}<br />
                {a.addressLocality}, {a.addressRegion} {a.postalCode}<br />
                <span className="text-muted">{a.locationNote}</span>
              </address>
              <a href={MAPS_LINK_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4">Open in Google Maps <ExternalLink className="w-3.5 h-3.5" aria-hidden /></a>
              <p className="mt-5 text-[15px] text-muted leading-relaxed">
                Once inside BATTS ATHLETICS BURLINGTON, the clinic is next to the gym area. Wear something you can move in and arrive a few minutes early for your first visit.
              </p>
            </div>
            <div data-fx="rise">
              <h2 className="tt-3">Hours</h2>
              <div className="mt-4"><HoursTable /></div>
              <p className="mt-3 text-sm text-muted">{siteConfig.hours.policy}</p>
            </div>
            <div data-fx="rise">
              <h2 className="tt-3">Accessibility</h2>
              <p className="mt-3 text-[15px] text-muted leading-relaxed">
                If you have mobility or access needs, please tell us when you book so we can advise on the most practical route into the clinic and plan your visit accordingly. Our <a href="/accessibility" className="underline underline-offset-4">accessibility statement</a> covers this website.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7" data-fx="rise"><MapEmbed /></div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <div className="max-w-2xl" data-fx="rise">
            <p className="eyebrow">Finding us</p>
            <h2 className="tt-2">Park out front, walk in, and the clinic is next to the gym.</h2>
          </div>
          <ul className="mt-8 grid gap-5 md:grid-cols-3" data-fx="stagger">
            {[CLINIC.parking, CLINIC.battsGym, CLINIC.room].map((m) => (
              <li key={m.src}>
                <figure className="rounded-lg overflow-hidden border border-border bg-surface h-full">
                  <div className="relative aspect-[4/3]">
                    <Image src={m.src} alt={m.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                  {m.caption ? <figcaption className="px-4 py-3 text-sm text-muted">{m.caption}</figcaption> : null}
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <GoogleReviewPrompt />
    </>
  );
}
