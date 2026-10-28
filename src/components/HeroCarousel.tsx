'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { Media } from '@/data/media';

const INTERVAL_MS = 5000;

/**
 * Auto-advancing crossfade for the home hero. Slide 1 is server-rendered
 * visible with `priority` (it is the LCP image); the rest fade in on top via
 * opacity only (LCP law: no layout-affecting animation above the fold).
 * Pauses on hover/focus and when the tab is hidden; reduced-motion users get
 * no autoplay, just the dots.
 */
export function HeroCarousel({ slides }: { slides: Media[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (paused || reduced || slides.length < 2) return;
    const id = window.setInterval(() => {
      if (document.visibilityState === 'visible') setActive((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, reduced, slides.length]);

  return (
    <div
      className="absolute inset-0"
      role="region"
      aria-roledescription="carousel"
      aria-label="Inside Athix Physio & Sports Rehab"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <div
          key={s.src}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-[var(--ease-brand)]"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${slides.length}`}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            loading={i === 0 ? undefined : 'lazy'}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      ))}
      {slides.length > 1 ? (
        <div className="absolute top-4 right-4 z-10 flex gap-2" role="tablist" aria-label="Choose a photo">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show photo ${i + 1}`}
              onClick={() => setActive(i)}
              className="h-2.5 rounded-full transition-[width,background-color] duration-300 bg-white/50 data-[on=true]:bg-white"
              data-on={i === active}
              style={{ width: i === active ? 24 : 10 }}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
