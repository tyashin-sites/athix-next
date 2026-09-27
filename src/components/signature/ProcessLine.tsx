'use client';

/**
 * ProcessLine — the site's one scrubbed scroll signature. The client's own
 * four-step method (ASSESS → TREAT → REBUILD → PERFORM) laid along a court
 * line that fills as you scroll; each step lights the moment the line
 * reaches it. Transform-only (scaleY) + class toggles. Reduced motion →
 * the line is full and every step lit from the first paint.
 */

import { useRef } from 'react';
import { gsap, useGSAP, reduced } from '@/components/motion/gsap';

export interface ProcessStep { index: string; title: string; body: string }

export function ProcessLine({ steps }: { steps: ProcessStep[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;
      const fill = root.querySelector<HTMLElement>('.process-fill');
      const items = Array.from(root.querySelectorAll<HTMLElement>('.process-step'));
      if (reduced()) {
        if (fill) fill.style.transform = 'none';
        items.forEach((el) => el.classList.add('is-lit'));
        return;
      }
      if (fill) {
        gsap.fromTo(
          fill,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: { trigger: root, start: 'top 70%', end: 'bottom 60%', scrub: 0.6 },
          }
        );
      }
      items.forEach((el) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top 62%',
            onEnter: () => el.classList.add('is-lit'),
            onLeaveBack: () => el.classList.remove('is-lit'),
          },
        });
      });
    },
    { scope: ref as React.RefObject<HTMLElement> }
  );

  return (
    <div ref={ref} className="relative">
      <div className="process-track" aria-hidden>
        <div className="process-fill" />
      </div>
      <ol className="space-y-10 md:space-y-16">
        {steps.map((s, i) => (
          <li key={s.index} className={`process-step relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-16 ${i % 2 ? 'md:[&>div]:col-start-2' : ''}`}>
            <span className="dot absolute left-[0.85rem] top-2 md:left-1/2 md:-ml-[0.4375rem]" aria-hidden />
            <div className={i % 2 ? 'md:pl-10' : 'md:pr-10 md:text-right'}>
              <span className="tt-mono">{s.index}</span>
              <h3 className="tt-2 mt-2">{s.title}</h3>
              <p className="mt-3 text-muted leading-relaxed max-w-md md:ml-auto">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
