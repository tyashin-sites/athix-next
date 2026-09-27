'use client';

/**
 * HeaderFX — toggles .is-scrolled on the sticky header past 12px. The visual
 * change (logo scale + shadow/glass) lives in CSS; bar HEIGHT never changes
 * (CLS law). State-based, so it also runs for reduced-motion visitors.
 */

import { ScrollTrigger, useGSAP } from '@/components/motion/gsap';

export function HeaderFX() {
  useGSAP(() => {
    const header = document.querySelector<HTMLElement>('header.site-header');
    if (!header) return;
    ScrollTrigger.create({
      start: 12,
      end: 'max',
      onToggle: (self) => header.classList.toggle('is-scrolled', self.isActive),
    });
  });
  return null;
}
