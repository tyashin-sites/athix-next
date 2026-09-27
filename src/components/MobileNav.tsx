'use client';

/**
 * MobileNav — the navy curtain. Portalled to <body> (the blurred sticky
 * header would otherwise become the containing block of a fixed panel).
 * GSAP choreography under the brand ease; nothing runs under reduced motion.
 * A11y: aria-expanded/controls, role=dialog, Escape closes, focus managed,
 * body scroll locked while open.
 */

import Link from 'next/link';
import { createPortal } from 'react-dom';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Phone, MessageCircle } from 'lucide-react';
import { gsap, useGSAP, reduced } from '@/components/motion/gsap';
import { siteConfig, WHATSAPP_URL, TEL_URL, CTA_LABEL } from '@/config/site';

interface NavItem { label: string; href: string }

export function MobileNav({ nav }: { nav: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = useCallback(() => {
    if (!open || closing) return;
    if (tl.current && !reduced()) {
      setClosing(true);
      tl.current.timeScale(2.4).reverse().eventCallback('onReverseComplete', () => {
        setOpen(false);
        setClosing(false);
        triggerRef.current?.focus();
      });
    } else {
      setOpen(false);
      triggerRef.current?.focus();
    }
  }, [open, closing]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  useGSAP(
    () => {
      const panel = panelRef.current;
      if (!open || !panel) return;
      const links = panel.querySelectorAll<HTMLElement>('[data-nav-item]');
      const tail = panel.querySelectorAll<HTMLElement>('[data-nav-tail]');
      (links[0]?.querySelector('a') as HTMLElement | null)?.focus({ preventScroll: true });
      if (reduced()) return;
      const t = gsap.timeline({ defaults: { ease: 'brand' } });
      t.fromTo(panel, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.65 }, 0);
      t.from(links, { y: 32, opacity: 0, filter: 'blur(8px)', duration: 0.75, stagger: 0.06, clearProps: 'filter' }, 0.16);
      t.from(tail, { y: 18, opacity: 0, duration: 0.55, stagger: 0.08 }, 0.5);
      tl.current = t;
      return () => { tl.current = null; };
    },
    { dependencies: [open], scope: panelRef as React.RefObject<HTMLElement> }
  );

  const panel = open ? (
    <div
      ref={panelRef}
      id="mobile-nav-panel"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="on-dark ink grain fixed inset-0 z-[70] lg:hidden overflow-y-auto"
      style={{ clipPath: 'inset(0 0 0% 0)' }}
    >
      <div className="relative min-h-full flex flex-col px-5 pt-0 pb-8" style={{ paddingBottom: 'calc(2rem + env(safe-area-inset-bottom))' }}>
        <div className="h-[72px] flex items-center justify-between">
          <span className="font-heading text-lg font-medium tracking-tight text-white">Menu</span>
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/25 text-white"
          >
            <span className="relative block w-5 h-3" aria-hidden>
              <span className="absolute left-0 top-1/2 w-full h-px bg-white rotate-45" />
              <span className="absolute left-0 top-1/2 w-full h-px bg-white -rotate-45" />
            </span>
          </button>
        </div>

        <nav aria-label="Primary" className="mt-4">
          <ol className="divide-y divide-white/10 border-t border-white/10">
            {[{ label: 'Home', href: '/' }, ...nav].map((item, i) => (
              <li key={item.href} data-nav-item>
                <Link href={item.href} onClick={close} className="group flex items-baseline gap-5 py-4 hover:pl-1 transition-[padding] duration-300">
                  <span className="tt-mono text-accent-soft w-7 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="flex-1 font-heading text-[1.75rem] leading-none font-medium tracking-tight text-white">{item.label}</span>
                  <ArrowUpRight className="w-5 h-5 shrink-0 self-center text-accent-soft" strokeWidth={1.75} aria-hidden />
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-8 flex flex-col gap-3" data-nav-tail>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full py-4 text-base">
            <MessageCircle className="w-5 h-5" aria-hidden /> {CTA_LABEL}
          </a>
          <a href={TEL_URL} className="btn btn-ghost w-full py-4 text-base">
            <Phone className="w-5 h-5" aria-hidden /> Call {siteConfig.contact.phoneDisplay}
          </a>
        </div>
        <p className="mt-6 text-sm text-white/70" data-nav-tail>
          {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality} · {siteConfig.address.locationNote}
        </p>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label="Open menu"
        className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-border text-foreground"
      >
        <span className="relative block w-5 h-3" aria-hidden>
          <span className="absolute left-0 top-0 w-full h-px bg-current" />
          <span className="absolute left-0 top-1/2 w-3/4 h-px bg-current" />
          <span className="absolute left-0 bottom-0 w-full h-px bg-current" />
        </span>
      </button>
      {mounted && panel ? createPortal(panel, document.body) : null}
    </>
  );
}
