import { SITE_URL } from '@/lib/seo';

/**
 * /robots.txt — crawl-access policy only. Preview indexing is controlled by
 * the X-Robots-Tag header in middleware + the ROBOTS_NOINDEX build var. On
 * the slug subdomain the platform may intercept this path with its own.
 */
export const dynamic = 'force-static';

const AI_CRAWLERS = ['OAI-SearchBot', 'ChatGPT-User', 'GPTBot', 'ClaudeBot', 'Claude-Web', 'Google-Extended', 'PerplexityBot', 'Applebot-Extended'];

export function GET() {
  const ai = AI_CRAWLERS.map((ua) => `User-agent: ${ua}\nAllow: /`).join('\n\n');
  const body = `# robots.txt — Athix Physio & Sports Rehab\nUser-agent: *\nAllow: /\nDisallow: /api/\n\n${ai}\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=3600' } });
}
