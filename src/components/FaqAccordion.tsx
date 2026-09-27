import type { FaqItem } from '@/data/faq';

/**
 * Native <details> accordion — works with no JS, keyboard-accessible, and
 * the answers are in the server HTML (indexable; matches the FAQPage graph).
 */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-border border-t border-b border-border" data-fx="stagger">
      {items.map((it) => (
        <details key={it.q} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-left font-heading font-medium text-[1.0625rem] [&::-webkit-details-marker]:hidden">
            <span>{it.q}</span>
            <span className="relative w-6 h-6 shrink-0 rounded-full border border-border" aria-hidden>
              <span className="absolute left-1/2 top-1/2 w-3 h-px -translate-x-1/2 -translate-y-1/2 bg-current" />
              <span className="absolute left-1/2 top-1/2 w-px h-3 -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-300 group-open:rotate-90" />
            </span>
          </summary>
          <p className="pb-5 pr-10 text-[15.5px] leading-relaxed text-muted">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
