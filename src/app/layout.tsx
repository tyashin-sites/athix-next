import type { Metadata, Viewport } from 'next';
import { bodyFont, headingFont, monoFont } from '@/lib/fonts';
import { siteConfig } from '@/config/site';
import { SITE, siteUrl } from '@/lib/seo';
import { getBlogHasPosts } from '@/lib/blog';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileCtaBar } from '@/components/MobileCtaBar';
import { EntitySchema } from '@/components/EntitySchema';
import { ScrollFX } from '@/components/motion/ScrollFX';
import { PointerFX } from '@/components/motion/PointerFX';
import './globals.css';

const NOINDEX = process.env.ROBOTS_NOINDEX === 'true';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl('/')),
  title: {
    default: `${SITE.name} — Physiotherapy in Burlington, ON`,
    template: `%s | ${SITE.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    locale: SITE.locale,
    url: siteUrl('/'),
    title: SITE.name,
    images: [{ url: SITE.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: [
      { url: '/brand/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/brand/favicon-64.png', sizes: '64x64', type: 'image/png' },
      { url: '/brand/logo-mark-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/brand/apple-touch-icon.png',
  },
  // Preview canary (port skill §6.13) — flipped to "false" + rebuilt at cutover.
  robots: NOINDEX
    ? { index: false, follow: false, googleBot: { index: false, follow: false } }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#051A29' },
  ],
};

// First-frame ground (addendum §11): html/body take the page background
// before the CSS bundle arrives. Light + dark literals mirror globals.css.
const FIRST_FRAME_CSS = `
html, body { background-color: #FFFFFF; }
@media (prefers-color-scheme: dark) { html:root:not([data-theme="light"]), html:root:not([data-theme="light"]) body { background-color: #051A29; } }
html:root[data-theme="dark"], html:root[data-theme="dark"] body { background-color: #051A29; }
`;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const hasPosts = await getBlogHasPosts();
  return (
    <html lang="en-CA" className={`${bodyFont.variable} ${headingFont.variable} ${monoFont.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: FIRST_FRAME_CSS }} />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="scroll-progress" aria-hidden />
        <EntitySchema />
        <Header hasPosts={hasPosts} />
        <main id="main-content" tabIndex={-1} className="min-h-screen overflow-x-clip">
          {children}
        </main>
        <Footer hasPosts={hasPosts} />
        <MobileCtaBar />
        <ScrollFX />
        <PointerFX />
      </body>
    </html>
  );
}
