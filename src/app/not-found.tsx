import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig, WHATSAPP_URL, CTA_LABEL } from '@/config/site';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-x max-w-3xl">
        <p className="eyebrow">404</p>
        <h1 className="tt-display">This page has left the court.</h1>
        <p className="lead mt-6">The address may be out of date, or the page has moved. Here is where most people are heading.</p>
        <div className="court-line mt-10" aria-hidden />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {[...siteConfig.nav, { label: 'Home', href: '/' }, { label: 'FAQ', href: '/faq' }].map((n) => (
            <li key={n.href}><Link href={n.href} className="card flex items-center justify-between p-5 font-heading font-medium">{n.label} <ArrowRight className="w-4 h-4 text-accent" aria-hidden /></Link></li>
          ))}
        </ul>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-10"><MessageCircle className="w-5 h-5" aria-hidden /> {CTA_LABEL}</a>
      </div>
    </section>
  );
}
