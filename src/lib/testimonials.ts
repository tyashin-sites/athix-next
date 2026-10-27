/**
 * Testimonials (Tyashin `testimonials` plugin, TESTIMONIALS_ADDENDUM).
 * Server-only: reads TYASHIN_API_KEY. Every testimonial on the site comes from
 * this API, written by the patient through a personal invite link and shown
 * word for word. Nothing here is ever hardcoded.
 */

const API_BASE = process.env.TYASHIN_API_URL || 'https://website-api.tyashin.com';

export interface Testimonial {
  id: string;
  body: string;
  displayName: string;
  context?: string;
  rating?: number;
  submittedAt: string;
  featured: boolean;
  verified: true;
  integrity: string;
}

export type InviteState =
  | {
      ok: true;
      state: 'active';
      recipientName?: string;
      businessName: string;
      consentText: string;
      consentVersion: string;
      allowRating: boolean;
      formIntro?: string;
    }
  | { ok: false; state: 'used' | 'expired' | 'revoked' | 'invalid' | 'unavailable'; businessName: string };

function headers(): Record<string, string> | null {
  const key = process.env.TYASHIN_API_KEY;
  if (!key) return null;
  return { 'X-API-Key': key, 'Content-Type': 'application/json' };
}

export async function getTestimonials(limit = 3): Promise<Testimonial[]> {
  const h = headers();
  if (!h) return [];
  try {
    const res = await fetch(`${API_BASE}/api/v1/public/testimonials?limit=${limit}`, {
      headers: h,
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return Array.isArray(json?.data) ? (json.data as Testimonial[]) : [];
  } catch {
    return [];
  }
}

export async function getInvite(token: string): Promise<InviteState | null> {
  const h = headers();
  if (!h) return null;
  try {
    const res = await fetch(`${API_BASE}/api/v1/public/testimonials/invite?t=${encodeURIComponent(token)}`, {
      headers: h,
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const json = await res.json();
    return (json?.data as InviteState) ?? null;
  } catch {
    return null;
  }
}

export async function postTestimonials<T>(path: 'submit' | 'withdraw', body: Record<string, unknown>): Promise<{ status: number; json: T | null }> {
  const h = headers();
  if (!h) return { status: 503, json: null };
  try {
    const res = await fetch(`${API_BASE}/api/v1/public/testimonials/${path}`, {
      method: 'POST',
      headers: h,
      body: JSON.stringify(body),
      cache: 'no-store',
    });
    return { status: res.status, json: (await res.json().catch(() => null)) as T | null };
  } catch {
    return { status: 503, json: null };
  }
}
