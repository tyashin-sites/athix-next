'use client';

import { Star, ExternalLink } from 'lucide-react';
import { GOOGLE_REVIEW_URL } from '@/config/site';

/**
 * "Review us on Google". Google serves its review form with frame-blocking
 * headers, so it cannot be embedded in an iframe — the supported pattern is the
 * Business Profile's own review link, which opens Google's write-a-review box
 * directly with the clinic pre-selected. On desktop we open it in a centred
 * popup so the visitor never leaves the site; on phones (and if popups are
 * blocked) it opens as a normal tab, where Google Maps takes over.
 *
 * Deliberately no star picker and no "happy patients only" routing: Google's
 * review policy forbids gating or incentivising reviews, and every visitor gets
 * the same link.
 */
export function GoogleReviewPrompt({ compact = false }: { compact?: boolean }) {
  function open(e: React.MouseEvent<HTMLAnchorElement>) {
    if (window.matchMedia('(max-width: 767px)').matches) return; // native tab / Maps app
    const w = 520;
    const h = 720;
    const left = window.screenX + Math.max(0, (window.outerWidth - w) / 2);
    const top = window.screenY + Math.max(0, (window.outerHeight - h) / 2);
    const popup = window.open(GOOGLE_REVIEW_URL, 'athix-google-review', `popup=yes,width=${w},height=${h},left=${left},top=${top}`);
    if (popup) {
      e.preventDefault();
      popup.focus();
    }
  }

  const button = (
    <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" onClick={open} className="btn btn-primary py-4 px-7 text-base">
      <Star className="w-5 h-5" aria-hidden /> Write a Google review <ExternalLink className="w-4 h-4 opacity-70" aria-hidden />
    </a>
  );

  if (compact) return button;

  return (
    <section className="section pt-0">
      <div className="container-x">
        <div className="card p-8 md:p-10 grid gap-6 md:grid-cols-12 md:items-center" data-fx="rise">
          <div className="md:col-span-8">
            <p className="eyebrow">Been in for a visit?</p>
            <h2 className="tt-2">Tell others about your experience on Google.</h2>
            <p className="mt-4 text-[15.5px] text-muted leading-relaxed max-w-2xl">
              Your review helps people in Burlington, Hamilton and across Halton find care that fits them. It takes about a minute: the button opens Google’s review box for Athix Physio &amp; Sports Rehab. You may be asked to sign in to your Google account.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">{button}</div>
        </div>
      </div>
    </section>
  );
}
