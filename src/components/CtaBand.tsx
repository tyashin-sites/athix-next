import { MessageCircle, Phone } from 'lucide-react';
import { siteConfig, WHATSAPP_URL, TEL_URL, CTA_LABEL } from '@/config/site';

/** The closing band on every page — one action, restated once. */
export function CtaBand({
  title = 'Ready to move forward?',
  body = 'Whether you are recovering from an injury, dealing with persistent pain, returning to sport, or working toward better performance — start with an assessment.',
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="section on-dark ink grain">
      <div className="container-x relative text-center">
        <div className="court-line mx-auto max-w-xs mb-10" data-fx="draw" aria-hidden />
        <p className="eyebrow eyebrow-center" data-fx="rise">Start your recovery</p>
        <h2 className="tt-1 text-white max-w-3xl mx-auto" data-fx="rise">{title}</h2>
        <p className="lead mx-auto mt-6 text-white/75" data-fx="rise">{body}</p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center" data-fx="stagger">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary py-4 px-7 text-base">
            <MessageCircle className="w-5 h-5" aria-hidden /> {CTA_LABEL}
          </a>
          <a href={TEL_URL} className="btn btn-ghost py-4 px-7 text-base">
            <Phone className="w-5 h-5" aria-hidden /> {siteConfig.contact.phoneDisplay}
          </a>
        </div>
        <p className="mt-6 text-sm text-white/60">{siteConfig.hours.policy} Every booking opens a pre-filled WhatsApp message.</p>
      </div>
    </section>
  );
}
