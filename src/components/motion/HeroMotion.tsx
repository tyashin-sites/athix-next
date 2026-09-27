'use client';

/**
 * HeroMotion — the hero's orchestrated entrance. Rendered as an invisible
 * marker inside the hero; finds the stage via closest('[data-hero-stage]')
 * and choreographs data-hero="eyebrow|title|lead|ctas|visual|arc".
 *
 * LCP LAW: the h1, the lead paragraph and the hero photo can all be the LCP
 * element. An element that is ever opacity-0 stops counting as painted and
 * re-stamps LCP — so title, lead and visual animate TRANSFORM-ONLY. Opacity
 * intros are reserved for the eyebrow and CTAs (never LCP-sized). The range
 * arc is drawn via stroke-dashoffset (decorative, never LCP).
 */

import { useRef } from 'react';
import { gsap, useGSAP, reduced } from '@/components/motion/gsap';

export function HeroMotion() {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const stage = ref.current?.closest<HTMLElement>('[data-hero-stage]');
      if (!stage || reduced()) return;
      const q = (name: string) => stage.querySelector<HTMLElement>(`[data-hero="${name}"]`);
      const eyebrow = q('eyebrow');
      const title = q('title');
      const lead = q('lead');
      const ctas = q('ctas');
      const visual = q('visual');
      const arc = stage.querySelector<SVGPathElement>('[data-hero="arc"]');
      if (!title) return;

      const tl = gsap.timeline({ defaults: { ease: 'brand' } });
      if (eyebrow) tl.from(eyebrow, { opacity: 0, y: 14, duration: 0.6 }, 0);
      tl.from(title, { y: 26, duration: 1.0, clearProps: 'transform' }, 0.05);
      // The lead is a large text block — an LCP candidate on text-heavy
      // heroes (Lighthouse picked it, 3.3s). Transform-only, never hidden.
      if (lead) tl.from(lead, { y: 20, duration: 0.8, clearProps: 'transform' }, 0.35);
      if (ctas && ctas.children.length > 0)
        tl.from(ctas.children, { opacity: 0, y: 18, duration: 0.7, stagger: 0.08, clearProps: 'transform' }, 0.6);
      if (visual) tl.from(visual, { y: 28, scale: 0.97, duration: 1.1, clearProps: 'transform' }, 0.3);

      // The range arc: a single hairline drawn across the hero — the path of
      // a shuttle, a bowling arm, a joint sweeping through its range.
      if (arc) {
        const len = arc.getTotalLength();
        gsap.set(arc, { strokeDasharray: len, strokeDashoffset: len });
        tl.to(arc, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut' }, 0.2);
      }

      if (visual)
        gsap.to(visual, {
          y: -24,
          ease: 'none',
          scrollTrigger: { trigger: stage, start: 'top top', end: 'bottom top', scrub: 0.8 },
        });
    },
    { scope: ref as React.RefObject<HTMLElement> }
  );

  return <span ref={ref} hidden aria-hidden />;
}
