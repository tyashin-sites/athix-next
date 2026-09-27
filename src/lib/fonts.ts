import localFont from 'next/font/local';

// Type stack (DESIGN-SPEC §2), SELF-HOSTED via next/font/local:
//   Display/headings — Sora (variable 500–600)
//   Body/UI          — Figtree (variable 400–600)
//   Data             — JetBrains Mono (variable 400–500)
// Files in src/fonts are the latin-subset variable woff2 builds from Google
// Fonts (OFL). Local files mean the CI build never depends on a network
// fetch to fonts.googleapis.com — next/font/google failed the first Actions
// run with `Cannot read properties of null (reading '1')` (the loader's
// fetch of the Google CSS). Same swap + self-hosting behaviour, zero risk.

export const headingFont = localFont({
  src: [{ path: '../fonts/sora-latin.woff2', weight: '500 600', style: 'normal' }],
  variable: '--font-heading',
  display: 'swap',
});

export const bodyFont = localFont({
  src: [{ path: '../fonts/figtree-latin.woff2', weight: '400 600', style: 'normal' }],
  variable: '--font-body',
  display: 'swap',
});

export const monoFont = localFont({
  src: [{ path: '../fonts/jetbrains-latin.woff2', weight: '400 500', style: 'normal' }],
  variable: '--font-mono',
  display: 'swap',
  preload: false,
});
