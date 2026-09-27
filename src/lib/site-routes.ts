import { SERVICE_SLUGS } from '@/data/services';
import { CONDITION_SLUGS } from '@/data/conditions';

/**
 * SINGLE SOURCE OF TRUTH for the indexable URL tree (addendum §3g).
 * `/sitemap-pages.xml` renders this list; every `[slug]` route's
 * `generateStaticParams` consumes it — so the built pages and the sitemap
 * can never drift. Blog POSTS are platform-owned data and live in the
 * platform's content sitemap; the `/blog` index IS included.
 */

export type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export interface SiteRoute {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
}

const STATIC_ROUTES: SiteRoute[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/conditions', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/sports-rehabilitation', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/first-visit', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/insurance-and-billing', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/accessibility', priority: 0.2, changeFrequency: 'yearly' },
];

export function getSiteRoutes(): SiteRoute[] {
  return [
    ...STATIC_ROUTES,
    ...SERVICE_SLUGS.map((slug) => ({ path: `/services/${slug}`, priority: 0.8, changeFrequency: 'monthly' as const })),
    ...CONDITION_SLUGS.map((slug) => ({ path: `/conditions/${slug}`, priority: 0.8, changeFrequency: 'monthly' as const })),
  ];
}

export function serviceStaticParams() {
  return getSiteRoutes()
    .filter((r) => r.path.startsWith('/services/'))
    .map((r) => ({ slug: r.path.replace('/services/', '') }));
}

export function conditionStaticParams() {
  return getSiteRoutes()
    .filter((r) => r.path.startsWith('/conditions/'))
    .map((r) => ({ slug: r.path.replace('/conditions/', '') }));
}
