import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { siteConfig, WHATSAPP_URL, TEL_URL, CTA_LABEL } from '@/config/site';
import { MobileNav } from './MobileNav';
import { HeaderFX } from './motion/HeaderFX';

export function Header({ hasPosts }: { hasPosts: boolean }) {
  const nav = [...siteConfig.nav, ...(hasPosts ? [{ label: 'Blog', href: '/blog' }] : [])];
  return (
    <header className="site-header sticky top-0 z-50 text-white">
      <HeaderFX />
      <div className="header-bar container-x flex items-center justify-between gap-4">
        <Link href="/" className="header-logo flex items-center shrink-0" aria-label={`${siteConfig.name} — home`}>
          {/* The bar is always brand blue (#285B92), so the light lockup in both themes. */}
          <Image
            src="/brand/logo-light.webp"
            alt={siteConfig.name}
            width={1200}
            height={332}
            priority
            unoptimized
            className="h-9 w-auto"
          />
        </Link>

        <nav aria-label="Primary" className="hidden xl:flex items-center gap-6">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link whitespace-nowrap text-[15px] font-medium text-white/85 hover:text-white transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={TEL_URL}
            className="hidden md:inline-flex xl:hidden 2xl:inline-flex items-center gap-2 text-[15px] font-medium text-white/85 hover:text-white transition-colors"
            aria-label={`Call ${siteConfig.contact.phoneDisplay}`}
          >
            <Phone className="w-4 h-4 text-accent-soft" strokeWidth={2} aria-hidden />
            <span className="tt-mono text-[0.875rem]">{siteConfig.contact.phoneDisplay}</span>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary hidden sm:inline-flex">
            {CTA_LABEL}
          </a>
          <MobileNav nav={nav} />
        </div>
      </div>
    </header>
  );
}
