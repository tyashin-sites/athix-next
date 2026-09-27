import { Sora, Figtree, JetBrains_Mono } from 'next/font/google';

// Type stack (DESIGN-SPEC §2):
//   Display/headings — Sora (500, 600): geometric, athletic, sits well beside
//                      the italic heavy wordmark without imitating it.
//   Body/UI          — Figtree (400, 500, 600): warm, highly legible at small
//                      sizes on phones — most patients arrive on mobile.
//   Data             — JetBrains Mono (400, 500): hours, registration, phone.
// All via next/font (self-hosted, swap) — never a CDN <link> (addendum §9).

export const headingFont = Sora({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-heading',
  display: 'swap',
});

export const bodyFont = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
  preload: false,
});
