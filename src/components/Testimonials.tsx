import { BadgeCheck } from 'lucide-react';
import { getTestimonials } from '@/lib/testimonials';

/**
 * Patient testimonials (Tyashin testimonials plugin). Each one was written by
 * the patient through a personal invite link, approved by the clinic, and is
 * shown exactly as written: no edits, no trimming, no invented details.
 * Renders nothing at all until there is at least one.
 */
export async function Testimonials({ limit = 3 }: { limit?: number }) {
  const items = await getTestimonials(limit);
  if (items.length === 0) return null;

  const fmt = new Intl.DateTimeFormat('en-CA', { month: 'long', year: 'numeric' });

  return (
    <section className="section" aria-labelledby="testimonials-heading">
      <div className="container-x">
        <div data-fx="rise">
          <p className="eyebrow">In their words</p>
          <h2 id="testimonials-heading" className="tt-1">What patients have shared.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3" data-fx="stagger">
          {items.map((t) => (
            <figure key={t.id} className="card p-7 flex flex-col">
              <blockquote className="text-[1.0625rem] leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                {t.body}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border text-[15px]">
                <p className="font-heading font-medium">{t.displayName}</p>
                {t.context && <p className="text-muted mt-0.5">{t.context}</p>}
                <p className="tt-mono text-muted mt-2">{fmt.format(new Date(t.submittedAt))}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 flex items-center gap-2 text-[13px] text-muted" title={`Integrity ${items.map((t) => t.integrity).join(' ')}`}>
          <BadgeCheck className="w-4 h-4 text-accent shrink-0" aria-hidden />
          Written by patients through a personal invite and published word for word, with their consent.
        </p>
      </div>
    </section>
  );
}
