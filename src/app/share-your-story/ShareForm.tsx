'use client';

import { useActionState } from 'react';
import { submitTestimonial, withdrawTestimonial, type SubmitState } from './actions';

const NAME_OPTIONS = [
  { value: 'first-initial', label: 'First name and last initial (for example, Priya S.)' },
  { value: 'full', label: 'My full name' },
  { value: 'initials', label: 'Initials only (P. S.)' },
  { value: 'anonymous', label: 'No name (shown as “Verified customer”)' },
] as const;

const field = 'w-full rounded-md border border-border bg-bg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-[var(--brand-sky)]';

export function ShareForm(props: {
  token: string;
  recipientName?: string;
  consentText: string;
  allowRating: boolean;
}) {
  const [state, action, pending] = useActionState<SubmitState, FormData>(submitTestimonial, { status: 'idle' });

  if (state.status === 'done') {
    return (
      <div className="card p-8" role="status">
        <h2 className="tt-2">Thank you.</h2>
        <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted">
          Abhishek will read it before it goes on the website, and it will appear exactly as you wrote it.
        </p>
        {state.withdrawUrl && (
          <>
            <p className="mt-6 text-[15px]">Changed your mind later? This private link removes your testimonial at any time. Keep it somewhere safe:</p>
            <p className="mt-2 break-all tt-mono"><a href={state.withdrawUrl} className="underline underline-offset-4">{state.withdrawUrl}</a></p>
          </>
        )}
      </div>
    );
  }
  if (state.status === 'gone') {
    return (
      <div className="card p-8" role="alert">
        <h2 className="tt-2">{state.message}</h2>
        <p className="mt-4 text-muted">If you would still like to share your experience, message the clinic for a new link.</p>
      </div>
    );
  }

  const v = state.status === 'error' ? state.values : ({} as Record<string, string>);
  const pref = v.namePreference || 'first-initial';

  return (
    <form action={action} className="card p-7 md:p-9 space-y-7">
      <input type="hidden" name="token" value={props.token} />
      {state.status === 'error' && (
        <p role="alert" className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-[15px] text-red-800">{state.message}</p>
      )}
      <div>
        <label htmlFor="body" className="block font-heading font-medium">Your testimonial</label>
        <textarea id="body" name="body" rows={7} maxLength={1500} minLength={20} required defaultValue={v.body} className={`${field} mt-2`} />
        <p className="mt-2 text-[13px] text-muted">It is shown exactly as you write it. Please leave out anything you would not want public, such as details of your health.</p>
      </div>

      {props.allowRating && (
        <fieldset>
          <legend className="font-heading font-medium">Rating (optional)</legend>
          <div className="mt-2 flex gap-5">
            {[5, 4, 3, 2, 1].map((n) => (
              <label key={n} className="flex items-center gap-1.5 text-[15px]">
                <input type="radio" name="rating" value={n} defaultChecked={v.rating === String(n)} /> {n}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <div>
        <label htmlFor="authorName" className="block font-heading font-medium">Your name</label>
        <input id="authorName" name="authorName" maxLength={80} autoComplete="name" required defaultValue={v.authorName ?? props.recipientName ?? ''} className={`${field} mt-2`} />
      </div>

      <fieldset>
        <legend className="font-heading font-medium">How should your name appear?</legend>
        <div className="mt-2 space-y-2">
          {NAME_OPTIONS.map((o) => (
            <label key={o.value} className="flex items-start gap-2.5 text-[15px]">
              <input type="radio" name="namePreference" value={o.value} defaultChecked={pref === o.value} className="mt-1" /> {o.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="context" className="block font-heading font-medium">A line about you (optional)</label>
        <input id="context" name="context" maxLength={80} placeholder="For example: club tennis player" defaultValue={v.context} className={`${field} mt-2`} />
      </div>

      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label>Website <input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <label className="flex items-start gap-3 text-[14px] leading-relaxed">
        <input type="checkbox" name="consent" required className="mt-1" />
        <span>{props.consentText}</span>
      </label>

      <button type="submit" className="btn btn-primary" disabled={pending}>
        {pending ? 'Sending…' : 'Send testimonial'}
      </button>
    </form>
  );
}

export function WithdrawForm({ token }: { token: string }) {
  const [state, action, pending] = useActionState(withdrawTestimonial, { done: false, ok: false });
  if (state.done) {
    return (
      <div className="card p-8" role="status">
        <h2 className="tt-2">{state.ok ? 'Your testimonial has been removed.' : 'Nothing to remove.'}</h2>
        <p className="mt-4 text-muted">
          {state.ok ? 'It is no longer stored and will not appear on the website.' : 'It was already removed, or the link is not valid.'}
        </p>
      </div>
    );
  }
  return (
    <form action={action} className="card p-8">
      <input type="hidden" name="token" value={token} />
      <h2 className="tt-2">Remove your testimonial?</h2>
      <p className="mt-4 text-muted">This deletes what you wrote. It comes off the website straight away and cannot be undone.</p>
      <button type="submit" className="btn btn-primary mt-6" disabled={pending}>{pending ? 'Removing…' : 'Yes, remove it'}</button>
    </form>
  );
}
