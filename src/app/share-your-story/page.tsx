import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getInvite } from '@/lib/testimonials';
import { ShareForm, WithdrawForm } from './ShareForm';

/**
 * /share-your-story — where a patient lands from a testimonial invite link the
 * clinic copied in the Tyashin admin (TESTIMONIALS_ADDENDUM §4). Personal link
 * pages: per request, never indexed, never in the sitemap or nav.
 */
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Share your experience',
  robots: { index: false, follow: false },
  referrer: 'no-referrer',
};

type Props = { searchParams: Promise<{ t?: string; w?: string }> };

export default async function ShareYourStoryPage({ searchParams }: Props) {
  const { t, w } = await searchParams;

  if (w) {
    return (
      <Shell eyebrow="Your testimonial" title="Remove what you shared.">
        <WithdrawForm token={w} />
      </Shell>
    );
  }
  if (!t) notFound();

  const invite = await getInvite(t);
  if (!invite || !invite.ok) {
    const msg =
      invite?.state === 'used'
        ? 'This link has already been used to send a testimonial.'
        : invite?.state === 'expired'
          ? 'This link has expired.'
          : 'This link is not valid.';
    return (
      <Shell eyebrow="Share your experience" title={msg}>
        <div className="card p-8">
          <p className="text-muted">If you would still like to share your experience, message the clinic for a new link.</p>
        </div>
      </Shell>
    );
  }

  const intro =
    invite.formIntro ||
    'In your own words, what was your care at Athix like? A few honest sentences are perfect.';

  return (
    <Shell eyebrow="Share your experience" title={invite.recipientName ? `Thank you, ${invite.recipientName}.` : 'Thank you for coming in.'} lead={intro}>
      <ShareForm token={t} recipientName={invite.recipientName} consentText={invite.consentText} allowRating={invite.allowRating} />
    </Shell>
  );
}

function Shell({ eyebrow, title, lead, children }: { eyebrow: string; title: string; lead?: string; children: React.ReactNode }) {
  return (
    <section className="section">
      <div className="container-x max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="tt-1">{title}</h1>
        {lead && <p className="lead mt-5">{lead}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
