'use client';

/**
 * PointerFX — cursor-aware micro-physics. ONE delegated pointermove powers:
 *  1. card spotlight — --mx/--my written (rAF-coalesced) onto hovered .card /
 *     .spot surfaces; CSS paints a sky-cast radial light that follows the
 *     pointer.
 *  2. magnetic primary CTA — .btn-primary leans ≤5px toward the pointer and
 *     settles back elastically. Transform only.
 * Fine pointers only. Reduced motion keeps the spotlight (lighting), drops the lean.
 */

import { useEffect } from 'react';
import { gsap, reduced } from '@/components/motion/gsap';

const MAGNET_MAX = 5;
const SPOT_SELECTOR = '.card, .spot';

export function PointerFX() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let raf = 0;
    let spotCard: HTMLElement | null = null;
    let spotX = 0;
    let spotY = 0;
    let magnetEl: HTMLElement | null = null;
    let magnetX: ((v: number) => void) | null = null;
    let magnetY: ((v: number) => void) | null = null;
    const allowMagnet = !reduced();

    const releaseMagnet = () => {
      if (!magnetEl) return;
      gsap.to(magnetEl, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.55)', overwrite: 'auto', clearProps: 'transform' });
      magnetEl = null;
      magnetX = null;
      magnetY = null;
    };

    const flushSpot = () => {
      raf = 0;
      if (!spotCard) return;
      spotCard.style.setProperty('--mx', `${spotX}px`);
      spotCard.style.setProperty('--my', `${spotY}px`);
    };

    const onMove = (e: PointerEvent) => {
      const target = e.target as Element | null;
      const card = target?.closest<HTMLElement>(SPOT_SELECTOR) ?? null;
      if (card !== spotCard) {
        spotCard?.classList.remove('is-spotlit');
        card?.classList.add('is-spotlit');
        spotCard = card;
      }
      if (card) {
        const r = card.getBoundingClientRect();
        spotX = e.clientX - r.left;
        spotY = e.clientY - r.top;
        if (!raf) raf = requestAnimationFrame(flushSpot);
      }
      if (!allowMagnet) return;
      const btn = target?.closest<HTMLElement>('.btn-primary') ?? null;
      if (btn !== magnetEl) {
        releaseMagnet();
        if (btn) {
          magnetEl = btn;
          magnetX = gsap.quickTo(btn, 'x', { duration: 0.3, ease: 'power3.out' });
          magnetY = gsap.quickTo(btn, 'y', { duration: 0.3, ease: 'power3.out' });
        }
      }
      if (magnetEl && magnetX && magnetY) {
        const r = magnetEl.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
        const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
        magnetX(gsap.utils.clamp(-MAGNET_MAX, MAGNET_MAX, dx * MAGNET_MAX));
        magnetY(gsap.utils.clamp(-MAGNET_MAX, MAGNET_MAX, dy * MAGNET_MAX));
      }
    };

    const onOut = (e: PointerEvent) => {
      const to = e.relatedTarget as Element | null;
      if (spotCard && !to?.closest(SPOT_SELECTOR)) {
        spotCard.classList.remove('is-spotlit');
        spotCard = null;
      }
      if (magnetEl && !to?.closest('.btn-primary')) releaseMagnet();
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerout', onOut, { passive: true });
    return () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerout', onOut);
      if (raf) cancelAnimationFrame(raf);
      releaseMagnet();
    };
  }, []);

  return null;
}
