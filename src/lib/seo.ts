import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

/**
 * ONE canonical host (addendum §3c). The apex is the canonical twin — the
 * previous athixrehab.ca site lived on the apex, and the platform's
 * `cleanAndAbsolutizeHead` rewrites the www twin onto this origin at the edge.
 * Every canonical, OG URL, JSON-LD @id and the sitemap derive from here.
 */
export const SITE_URL = (process.env.SITE_URL ?? `https://${siteConfig.domain}`).replace(/\/+$/, '');

export const SITE = {
  name: siteConfig.name,
  locale: 'en_CA',
  defaultOgImage: '/og/default.png',
} as const;

export function siteUrl(path = '/'): string {
  const p = path === '/' ? '' : `/${path.replace(/^\/+/, '')}`;
  return `${SITE_URL}${p}`;
}

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string[];
  extra?: Metadata;
};

/** The one helper every page's metadata routes through (addendum §3a). */
export function pageMetadata(opts: PageMeta): Metadata {
  const url = siteUrl(opts.path);
  const image = opts.image || SITE.defaultOgImage;
  return {
    title: opts.title,
    description: opts.description,
    ...(opts.keywords ? { keywords: opts.keywords } : {}),
    alternates: { canonical: opts.path },
    openGraph: {
      type: opts.type || 'website',
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      title: opts.title,
      description: opts.description,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
      images: [image],
    },
    ...(opts.extra ?? {}),
  };
}
