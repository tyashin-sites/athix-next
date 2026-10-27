import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();

// The project's Tyashin slug subdomain — where the platform serves the
// platform-owned paths (brand-kit.css, sitemap.xml, robots.txt, RSS). In
// production via Tyashin dispatch these rewrites are no-ops (dispatch
// intercepts first); they only matter for direct *.workers.dev access.
const SLUG_HOST = 'https://abhishek-website-mukcwtfc.sites.tyashin.com';

const nextConfig = {
  images: {
    remotePatterns: [
      // Allowlist, never '**': with a wildcard /_next/image fetched and re-served
      // ANY https image from this domain (open proxy; VAPT 2026-10-27).
      { protocol: 'https' as const, hostname: 'website-api.tyashin.com' },
      { protocol: 'https' as const, hostname: '*.tyashin.com' },
      { protocol: 'https' as const, hostname: '*.thridify.com' },
      { protocol: 'https' as const, hostname: '*.r2.dev' },
      { protocol: 'https' as const, hostname: 'cdn.shopify.com' },
      { protocol: 'https' as const, hostname: 'images.unsplash.com' },
      { protocol: 'https' as const, hostname: 'images.pexels.com' },
    ],
  },
  // Tyashin dispatch forwards requests with x-forwarded-host set to this
  // Worker's *.workers.dev host, so Next rejects every Server Action whose
  // Origin is the real domain ("Invalid Server Actions request"). Allow the
  // hosts visitors actually use (the /share-your-story testimonial form).
  experimental: {
    serverActions: {
      allowedOrigins: ['athixrehab.ca', 'www.athixrehab.ca', 'abhishek-website-mukcwtfc.sites.tyashin.com'],
    },
  },
  // Type errors fail the build on purpose.
  typescript: { ignoreBuildErrors: false },
  env: {
    NEXT_PUBLIC_SITE_DOMAIN: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'athixrehab.ca',
  },
  async rewrites() {
    return [
      { source: '/brand-kit.css', destination: `${SLUG_HOST}/brand-kit.css` },
      { source: '/tyashin-runtime.js', destination: `${SLUG_HOST}/tyashin-runtime.js` },
      { source: '/sitemap.xml', destination: `${SLUG_HOST}/sitemap.xml` },
      { source: '/blog/rss.xml', destination: `${SLUG_HOST}/blog/rss.xml` },
      { source: '/rss.xml', destination: `${SLUG_HOST}/rss.xml` },
      { source: '/feed', destination: `${SLUG_HOST}/feed` },
      { source: '/feed.xml', destination: `${SLUG_HOST}/feed.xml` },
    ];
  },
};

export default nextConfig;
