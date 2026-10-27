'use server';

import { postTestimonials } from '@/lib/testimonials';

export type SubmitState =
  | { status: 'idle' }
  | { status: 'error'; message: string; field?: string; values: Record<string, string> }
  | { status: 'gone'; message: string }
  | { status: 'done'; withdrawUrl: string };

export async function submitTestimonial(_prev: SubmitState, form: FormData): Promise<SubmitState> {
  const values: Record<string, string> = {};
  for (const k of ['token', 'body', 'authorName', 'namePreference', 'context', 'rating']) {
    values[k] = String(form.get(k) ?? '');
  }
  // Honeypot: a person never fills the hidden field.
  if (String(form.get('website') ?? '').trim()) return { status: 'done', withdrawUrl: '' };

  const { status, json } = await postTestimonials<{
    data?: { withdrawUrl?: string };
    error?: { message?: string; field?: string };
  }>('submit', {
    token: values.token,
    body: values.body,
    authorName: values.authorName,
    namePreference: values.namePreference,
    context: values.context || undefined,
    rating: values.rating || undefined,
    consent: form.get('consent') === 'on',
  });

  if (status === 201 && json?.data?.withdrawUrl) return { status: 'done', withdrawUrl: json.data.withdrawUrl };
  if (status === 410) return { status: 'gone', message: json?.error?.message || 'This link can no longer be used.' };
  return {
    status: 'error',
    message: json?.error?.message || 'Something went wrong. Please try again in a minute.',
    field: json?.error?.field,
    values,
  };
}

export async function withdrawTestimonial(_prev: { done: boolean; ok: boolean }, form: FormData) {
  const { json } = await postTestimonials<{ data?: { withdrawn?: boolean } }>('withdraw', {
    token: String(form.get('token') ?? ''),
  });
  return { done: true, ok: Boolean(json?.data?.withdrawn) };
}
