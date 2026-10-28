import { marked } from 'marked';
import type { BlogPost } from './blog';

/**
 * Post body → HTML for `.prose-athix`. The platform stores some posts as
 * Markdown (the six seeded in Sep 2026) and some as HTML (the fascia series).
 * Markdown used to render as raw text, so readers saw `**bold**`, `## headings`
 * and `[link](url)` syntax on the page. Server-only — never ships to the client.
 */

// Seeded Markdown posts close with their own copy of the disclaimer the page
// template already prints below every article. Drop the trailing rule + that
// paragraph so it appears once.
const TRAILING_DISCLAIMER = /\n+(?:-{3,}|\*{3,}|_{3,})\s*\n+\s*[*_]?This article is general information[\s\S]*$/i;
const TRAILING_DISCLAIMER_BARE = /\n+\s*[*_]?This article is general information[^\n]*\s*$/i;

marked.use({ gfm: true, breaks: false });

export function postHtml(post: BlogPost): string {
  const raw = post.content || '';
  if ((post.contentFormat ?? 'html') === 'html') return raw;
  const md = raw.replace(TRAILING_DISCLAIMER, '').replace(TRAILING_DISCLAIMER_BARE, '').trimEnd();
  return marked.parse(md, { async: false });
}
