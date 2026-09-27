import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { siteConfig, WHATSAPP_URL, TEL_URL, MAILTO_URL, MAPS_LINK_URL, CTA_LABEL } from '@/config/site';
import { SERVICES } from '@/data/services';
import { CONDITIONS } from '@/data/conditions';
import { HoursTable } from '@/components/HoursTable';

export function Footer({ hasPosts }: { hasPosts: boolean }) {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark ink grain mt-24 text-white">
      <div className="container-x relative pt-16 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Image src="/brand/logo-light.webp" alt={siteConfig.name} width={1200} height={332} className="h-10 w-auto" unoptimized />
            <p className="mt-5 text-white/75 max-w-sm leading-relaxed">{siteConfig.tagline}</p>
            <ul className="mt-6 space-y-3 text-[15px]">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-accent-soft" aria-hidden />
                <a href={MAPS_LINK_URL} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                  {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} {siteConfig.address.postalCode}
                  <span className="block text-white/60">{siteConfig.address.locationNote}</span>
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 shrink-0 text-accent-soft" aria-hidden />
                <a href={TEL_URL} className="tt-mono text-[0.95rem] hover:underline underline-offset-4">{siteConfig.contact.phoneDisplay}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 shrink-0 text-accent-soft" aria-hidden />
                <a href={MAILTO_URL} className="hover:underline underline-offset-4">{siteConfig.contact.email}</a>
              </li>
            </ul>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-7">
              <MessageCircle className="w-5 h-5" aria-hidden /> {CTA_LABEL}
            </a>
          </div>

          <div className="lg:col-span-2">
            <h2 className="eyebrow">Services</h2>
            <ul className="space-y-2.5 text-[15px]">
              {SERVICES.map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`} className="text-white/80 hover:text-white hover:underline underline-offset-4">{s.name}</Link></li>
              ))}
              <li><Link href="/sports-rehabilitation" className="text-white/80 hover:text-white hover:underline underline-offset-4">Sports Rehabilitation</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="eyebrow">Conditions</h2>
            <ul className="space-y-2.5 text-[15px]">
              {CONDITIONS.map((c) => (
                <li key={c.slug}><Link href={`/conditions/${c.slug}`} className="text-white/80 hover:text-white hover:underline underline-offset-4">{c.name}</Link></li>
              ))}
            </ul>
            <h2 className="eyebrow mt-8">Clinic</h2>
            <ul className="space-y-2.5 text-[15px]">
              <li><Link href="/about" className="text-white/80 hover:text-white hover:underline underline-offset-4">About</Link></li>
              <li><Link href="/first-visit" className="text-white/80 hover:text-white hover:underline underline-offset-4">Your First Visit</Link></li>
              <li><Link href="/insurance-and-billing" className="text-white/80 hover:text-white hover:underline underline-offset-4">Insurance &amp; Billing</Link></li>
              <li><Link href="/faq" className="text-white/80 hover:text-white hover:underline underline-offset-4">FAQ</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white hover:underline underline-offset-4">Contact &amp; Location</Link></li>
              {hasPosts ? <li><a href="/blog" className="text-white/80 hover:text-white hover:underline underline-offset-4">Blog</a></li> : null}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h2 className="eyebrow">Hours</h2>
            <HoursTable dark />
            <p className="mt-3 text-sm text-white/60">{siteConfig.hours.policy}</p>
          </div>
        </div>

        <div className="court-line mt-14" data-fx="draw" aria-hidden />

        <div className="mt-6 flex flex-col gap-4 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.legalName}. {siteConfig.practitioner.displayName} is registered with the{' '}
            <a href={siteConfig.practitioner.registerUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">
              College of Physiotherapists of Ontario
            </a>.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
            <li><Link href="/accessibility" className="hover:text-white">Accessibility</Link></li>
          </ul>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/50">
            Powered by{' '}
            <a href="https://tyashin.com" target="_blank" rel="noopener" className="hover:underline">Tyashin</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
