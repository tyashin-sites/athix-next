'use client';

import { siteConfig, TEL_URL } from '@/config/site';

/** User-facing fallback only — error REPORTING is platform-owned (addendum §3h). */
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="section">
      <div className="container-x max-w-2xl">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="tt-1">We hit a snag loading this page.</h1>
        <p className="lead mt-5">Try again, or call us at <a href={TEL_URL} className="underline underline-offset-4">{siteConfig.contact.phoneDisplay}</a> — a person always answers.</p>
        <button type="button" onClick={reset} className="btn btn-primary mt-8">Try again</button>
      </div>
    </section>
  );
}
