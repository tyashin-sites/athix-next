'use client';

/**
 * MobileCtaBar — sticky bottom "Book an Appointment" (WhatsApp) on mobile,
 * visible after the visitor scrolls past the hero. Someone in pain, on a
 * phone, one-handed: the booking path stays within thumb reach always.
 */

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL, CTA_LABEL } from '@/config/site';

export function MobileCtaBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > Math.min(window.innerHeight * 0.6, 520));
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('has-cta-bar', show);
    return () => document.body.classList.remove('has-cta-bar');
  }, [show]);

  return (
    <div
      className={`mobile-cta-bar sm:hidden fixed bottom-0 inset-x-0 z-40 ${show ? 'translate-y-0' : 'translate-y-full'}`}
      aria-hidden={!show}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="bg-ink/95 backdrop-blur border-t border-white/15 px-4 py-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={show ? 0 : -1}
          className="btn btn-primary w-full py-3.5 text-base"
        >
          <MessageCircle className="w-5 h-5" aria-hidden /> {CTA_LABEL}
        </a>
      </div>
    </div>
  );
}
