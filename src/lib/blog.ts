/**
 * Native blog data (port skill §4a). Cross-origin to website-api.tyashin.com
 * (never the same-origin `/_tyashin/blog/*` — a Worker fetching its own host
 * re-enters dispatch and 500s). Server-only: reads TYASHIN_API_KEY, imported
 * only by Server Components — never ships to the client bundle.
 */

const API_BASE = process.env.TYASHIN_API_URL || 'https://website-api.tyashin.com';

export interface BlogPost {
  _id?: string;
  slug: string;
  title: string;
  excerpt?: string;
  content?: string;
  contentFormat?: 'html' | 'markdown';
  featuredImage?: string;
  category?: { name?: string; slug?: string } | string;
  tags?: string[];
  publishedAt?: string;
  updatedAt?: string;
  createdAt?: string;
  author?: { name?: string; avatar?: string } | string;
  readingTime?: number;
  pinned?: boolean;
  seo?: { metaTitle?: string; metaDescription?: string; ogImage?: string; canonicalUrl?: string };
}

function headers(): HeadersInit | null {
  const key = process.env.TYASHIN_API_KEY;
  if (!key) return null;
  return { 'X-API-Key': key, 'Content-Type': 'application/json' };
}

export async function getPosts(page = 1, limit = 12): Promise<{ posts: BlogPost[]; total: number; totalPages: number }> {
  const h = headers();
  if (!h) return { posts: [], total: 0, totalPages: 0 };
  try {
    const res = await fetch(`${API_BASE}/api/v1/public/blog/posts?page=${page}&limit=${limit}`, {
      headers: h,
      cache: 'no-store',
    });
    if (!res.ok) return { posts: [], total: 0, totalPages: 0 };
    const json = await res.json();
    const posts: BlogPost[] = Array.isArray(json?.data?.posts) ? json.data.posts : Array.isArray(json?.data) ? json.data : [];
    const meta = json?.meta || {};
    return { posts, total: meta.total ?? posts.length, totalPages: meta.totalPages ?? 1 };
  } catch {
    return { posts: [], total: 0, totalPages: 0 };
  }
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const h = headers();
  if (!h) return null;
  try {
    const res = await fetch(`${API_BASE}/api/v1/public/blog/posts/${encodeURIComponent(slug)}`, {
      headers: h,
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const json = await res.json();
    const post = json?.data?.post ?? json?.data ?? null;
    return post && post.slug ? (post as BlogPost) : null;
  } catch {
    return null;
  }
}

/** Gate for the nav link — short revalidate so pages stay static-friendly. */
export async function getBlogHasPosts(): Promise<boolean> {
  const h = headers();
  if (!h) return false;
  try {
    const res = await fetch(`${API_BASE}/api/v1/public/blog/posts?page=1&limit=1`, {
      headers: h,
      next: { revalidate: 300 },
    });
    if (!res.ok) return false;
    const json = await res.json();
    const total = json?.meta?.total ?? (Array.isArray(json?.data?.posts) ? json.data.posts.length : 0);
    return total > 0;
  } catch {
    return false;
  }
}

export function postDate(p: BlogPost): string {
  const d = p.publishedAt || p.createdAt;
  if (!d) return '';
  try {
    return new Date(d).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return '';
  }
}

export function authorName(p: BlogPost): string {
  const a = p.author;
  if (!a) return '';
  return typeof a === 'string' ? a : a.name || '';
}
