import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();

// The project's Tyashin slug subdomain — where the platform serves the
// platform-owned paths (brand-kit.css, sitemap.xml, robots.txt, RSS). In
// production via Tyashin dispatch these rewrites are no-ops (dispatch
// intercepts first); they only matter for direct *.workers.dev access.
const SLUG_HOST = 'https://abhishek-website-mukcwtfc.sites.tyashin.com';

const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https' as const, hostname: '**' }],
  },
  // Type errors fail the build on purpose.
  typescript: { ignoreBuildErrors: false },
  eslint: { ignoreDuringBuilds: true },
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
