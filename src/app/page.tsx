import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Phone, ShieldCheck, Languages, MapPin, CalendarClock } from 'lucide-react';
import { siteConfig, WHATSAPP_URL, TEL_URL, CTA_LABEL } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import { SERVICES } from '@/data/services';
import { CONDITIONS } from '@/data/conditions';
import { FAQ } from '@/data/faq';
import { PLACEHOLDERS } from '@/data/placeholders';
import { JsonLd } from '@/components/JsonLd';
import { faqLd } from '@/lib/knowledge-graph';
import { HeroMotion } from '@/components/motion/HeroMotion';
import { ServiceCard } from '@/components/ServiceCard';
import { ConditionCard } from '@/components/ConditionCard';
import { ProcessLine } from '@/components/signature/ProcessLine';
import { FaqAccordion } from '@/components/FaqAccordion';
import { HoursTable } from '@/components/HoursTable';
import { MapEmbed } from '@/components/MapEmbed';
import { CtaBand } from '@/components/CtaBand';

export const metadata = pageMetadata({
  title: 'Physiotherapy & Sports Rehab in Burlington, ON',
  description:
    'Athix Physio & Sports Rehab — registered physiotherapist Abhishek Thakur, PT. Manual therapy, dry needling and acupuncture, and progressive rehabilitation inside BATTS Athletics, Burlington. Book on WhatsApp.',
  path: '/',
  keywords: ['physiotherapy Burlington', 'sports physiotherapy Burlington', 'physiotherapist Burlington Ontario', 'dry needling Burlington', 'sports rehab Halton'],
});

const PROCESS = [
  { index: '01 — Assess', title: 'Assess', body: 'We identify movement limitations, strength deficits, mobility restrictions, and functional factors relevant to your condition.' },
  { index: '02 — Treat', title: 'Treat', body: 'We use individualized hands-on and therapeutic techniques to address pain, mobility restrictions, and soft-tissue dysfunction.' },
  { index: '03 — Rebuild', title: 'Rebuild', body: 'We progressively restore strength, stability, mobility, coordination, and movement control.' },
  { index: '04 — Perform', title: 'Perform', body: 'We help you return to work, sport, training, and everyday activities with greater confidence and capacity.' },
];

const HOME_FAQ = FAQ.filter((f) => ['How do I book an appointment?', 'Do I need a doctor’s referral to see a physiotherapist?', 'Is physiotherapy at Athix covered by OHIP?', 'Do you offer direct billing?', 'Where exactly is the clinic?'].includes(f.q));

export default function HomePage() {
  const p = siteConfig.practitioner;
  return (
    <>
      <JsonLd nodes={[faqLd('/', HOME_FAQ)]} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" data-hero-stage>
        <HeroMotion />
        {/* The range arc — one hairline sweeping the hero, drawn on load. */}
        <svg className="pointer-events-none absolute inset-0 w-full h-full" viewBox="0 0 1440 720" preserveAspectRatio="none" aria-hidden>
          <path data-hero="arc" d="M -40 560 C 300 120, 900 80, 1500 420" fill="none" stroke="var(--brand-sky)" strokeWidth="1.5" opacity="0.55" vectorEffect="non-scaling-stroke" />
        </svg>
        <div className="container-x relative grid gap-10 lg:grid-cols-12 lg:gap-8 pt-14 pb-16 md:pt-20 md:pb-24">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="eyebrow" data-hero="eyebrow">Physiotherapy &amp; Sports Rehabilitation · Burlington, ON</p>
            <h1 className="tt-display" data-hero="title">{siteConfig.heroLine}</h1>
            <p className="lead mt-6" data-hero="lead">
              At ATHIX we combine advanced physiotherapy, manual therapy, neuro-fascial techniques, targeted needling, mobility training, and progressive rehabilitation to help you recover from injury, restore movement, and return to the activities you love.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3" data-hero="ctas">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary py-4 px-7 text-base">
                <MessageCircle className="w-5 h-5" aria-hidden /> {CTA_LABEL}
              </a>
              <Link href="/services" className="btn btn-ghost py-4 px-7 text-base">
                Explore services <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>
            <ul className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm" data-hero="lead">
              <li className="flex items-start gap-2.5"><ShieldCheck className="w-5 h-5 shrink-0 text-accent" aria-hidden /><span><strong className="font-semibold">Registered physiotherapist</strong><br /><span className="text-muted">College of Physiotherapists of Ontario</span></span></li>
              <li className="flex items-start gap-2.5"><CalendarClock className="w-5 h-5 shrink-0 text-accent" aria-hidden /><span><strong className="font-semibold">No referral needed</strong><br /><span className="text-muted">By appointment only</span></span></li>
              <li className="flex items-start gap-2.5"><MapPin className="w-5 h-5 shrink-0 text-accent" aria-hidden /><span><strong className="font-semibold">Inside BATTS Athletics</strong><br /><span className="text-muted">1233 Dillon Road</span></span></li>
            </ul>
          </div>
          <div className="lg:col-span-5 relative" data-hero="visual">
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-lg overflow-hidden shadow-[var(--shadow-hover)]">
              <Image
                src={PLACEHOLDERS.heroAthlete.src}
                alt={PLACEHOLDERS.heroAthlete.alt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[rgba(0,0,0,0.65)] to-transparent text-white">
                <p className="tt-mono text-accent-soft">Assess · Treat · Rebuild · Perform</p>
                <p className="font-heading font-medium mt-1">{siteConfig.tagline}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy ───────────────────────────────────────────────── */}
      <section className="section pt-0">
        <div className="container-x">
          <div className="court-line mb-12" data-fx="draw" aria-hidden />
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5" data-fx="rise">
              <p className="eyebrow">Our philosophy</p>
              <h2 className="tt-1">Your recovery is more than just the painful area.</h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-[1.0625rem] leading-relaxed text-muted" data-fx="rise">
              <p>Pain can be influenced by more than the structure that hurts. At ATHIX, we assess the way your joints, muscles, fascia, nervous system, mobility, strength, and movement patterns work together.</p>
              <p>We then build a treatment and rehabilitation strategy around your body, activity, and goals.</p>
              <p className="font-heading font-medium text-foreground text-lg">From pain → to movement → to performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6" data-fx="rise">
            <div>
              <p className="eyebrow">Our services</p>
              <h2 className="tt-1">Hands-on care. Movement science. Progressive rehabilitation.</h2>
            </div>
            <Link href="/services" className="btn btn-ghost self-start md:self-auto">View all services <ArrowRight className="w-4 h-4" aria-hidden /></Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-fx="stagger">
            {SERVICES.slice(0, 6).map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      {/* ── Process (signature scrub) ────────────────────────────────── */}
      <section className="section">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto" data-fx="rise">
            <p className="eyebrow eyebrow-center">Our approach</p>
            <h2 className="tt-1">Assess. Treat. Rebuild. Perform.</h2>
            <p className="lead mt-5 mx-auto">Rehabilitation should have a clear direction. Every plan moves through the same four stages — at your pace, toward your goals.</p>
          </div>
          <div className="mt-16 md:mt-20">
            <ProcessLine steps={PROCESS} />
          </div>
        </div>
      </section>

      {/* ── Sports rehab feature ─────────────────────────────────────── */}
      <section className="on-dark ink grain">
        <div className="container-x relative grid gap-10 lg:grid-cols-2 items-center py-20 md:py-28">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden" data-parallax="0.08">
            <Image src={PLACEHOLDERS.sports.src} alt={PLACEHOLDERS.sports.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div data-fx="rise">
            <p className="eyebrow">Sports rehabilitation</p>
            <h2 className="tt-1 text-white">From injury back to the game.</h2>
            <p className="mt-6 text-white/80 text-[1.0625rem] leading-relaxed">Whether you’re an elite athlete, recreational athlete, weekend warrior, or simply someone who loves staying active, rehabilitation should have a clear direction.</p>
            <p className="tt-mono text-accent-soft mt-6">Pain → Mobility → Strength → Control → Function → Performance</p>
            <p className="mt-6 text-white/70 text-[15px]">Sprains · Strains · Muscle injuries · Tendon injuries · Joint injuries · Overuse injuries · Running, badminton, tennis, soccer, gym &amp; fitness injuries</p>
            <Link href="/sports-rehabilitation" className="btn btn-primary mt-8">Sports rehabilitation <ArrowRight className="w-4 h-4" aria-hidden /></Link>
          </div>
        </div>
      </section>

      {/* ── Conditions ───────────────────────────────────────────────── */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6" data-fx="rise">
            <div>
              <p className="eyebrow">Conditions we treat</p>
              <h2 className="tt-1">Head to toe, region by region.</h2>
            </div>
            <Link href="/conditions" className="btn btn-ghost self-start md:self-auto">All conditions <ArrowRight className="w-4 h-4" aria-hidden /></Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-fx="stagger">
            {CONDITIONS.map((c) => <ConditionCard key={c.slug} region={c} />)}
          </div>
        </div>
      </section>

      {/* ── Meet the physiotherapist ─────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container-x grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5" data-fx="rise">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-[var(--shadow-rest)] max-w-md">
              <Image src={p.photo} alt={`${p.displayName}, registered physiotherapist, at Athix Physio & Sports Rehab`} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7" data-fx="rise">
            <p className="eyebrow">Meet your physiotherapist</p>
            <h2 className="tt-1">{p.displayName}</h2>
            <p className="tt-mono text-muted mt-3">{p.credentials}</p>
            <p className="mt-6 text-[1.0625rem] leading-relaxed text-muted">
              An experienced orthopaedic and sports physiotherapist with a Master of Physiotherapy in Orthopaedics &amp; Sports and a Diploma in Advanced Orthopaedic Manual Physical Therapy through APTEI. Abhishek focuses on understanding not only where a patient feels pain, but why the body is producing that dysfunction in the first place.
            </p>
            <ul className="mt-6 space-y-2.5 text-[15px]">
              <li className="flex gap-2.5"><ShieldCheck className="w-5 h-5 shrink-0 text-accent" aria-hidden /><span>Registered with the <a href={p.registerUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">College of Physiotherapists of Ontario</a> — authorized to perform acupuncture, including dry needling</span></li>
              <li className="flex gap-2.5"><Languages className="w-5 h-5 shrink-0 text-accent" aria-hidden /><span>Sessions in {p.languages.join(' or ')}</span></li>
            </ul>
            <Link href="/about" className="btn btn-ghost mt-8">About Abhishek <ArrowRight className="w-4 h-4" aria-hidden /></Link>
          </div>
        </div>
      </section>

      {/* ── Insurance strip ──────────────────────────────────────────── */}
      <section className="py-10 border-y border-border">
        <div className="container-x grid gap-6 md:grid-cols-3 text-[15px]" data-fx="stagger">
          <div><p className="font-heading font-medium">Extended health insurance</p><p className="text-muted mt-1">Most Ontario benefit plans include registered physiotherapy. Direct billing to all major insurers where your plan allows.</p></div>
          <div><p className="font-heading font-medium">No referral needed</p><p className="text-muted mt-1">Book directly. Some insurers ask for a physician’s referral to reimburse — check your plan.</p></div>
          <div><p className="font-heading font-medium">Private clinic</p><p className="text-muted mt-1">OHIP does not cover physiotherapy at Athix. <Link href="/insurance-and-billing" className="underline underline-offset-4">Insurance &amp; billing details</Link>.</p></div>
        </div>
      </section>

      {/* ── How booking works ────────────────────────────────────────── */}
      <section className="section">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto" data-fx="rise">
            <p className="eyebrow eyebrow-center">How booking works</p>
            <h2 className="tt-1">Three steps. One message.</h2>
          </div>
          <ol className="mt-12 grid gap-5 md:grid-cols-3" data-fx="stagger">
            {[
              { n: '01', t: 'Send a WhatsApp message', d: `Tap “${CTA_LABEL}” — it opens WhatsApp to ${siteConfig.contact.phoneDisplay} with a pre-filled message. Or call the same number.` },
              { n: '02', t: 'Choose a time', d: 'We reply with available appointment times. Wednesday afternoons and Saturday mornings are the fixed clinic days; Monday and Friday by arrangement.' },
              { n: '03', t: 'Come for your assessment', d: 'Bring comfortable clothing, any imaging or surgical reports, and your insurance details. Treatment usually starts in the first visit.' },
            ].map((s) => (
              <li key={s.n} className="card p-7">
                <span className="tt-mono text-accent">{s.n}</span>
                <h3 className="tt-3 mt-3">{s.t}</h3>
                <p className="mt-3 text-[15px] text-muted leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center" data-fx="rise">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary py-4 px-7 text-base"><MessageCircle className="w-5 h-5" aria-hidden /> {CTA_LABEL}</a>
            <a href={TEL_URL} className="btn btn-ghost py-4 px-7 text-base"><Phone className="w-5 h-5" aria-hidden /> {siteConfig.contact.phoneDisplay}</a>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="section pt-0">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4" data-fx="rise">
            <p className="eyebrow">Common questions</p>
            <h2 className="tt-1">Before you book</h2>
            <Link href="/faq" className="btn btn-ghost mt-6">All questions <ArrowRight className="w-4 h-4" aria-hidden /></Link>
          </div>
          <div className="lg:col-span-8"><FaqAccordion items={HOME_FAQ} /></div>
        </div>
      </section>

      {/* ── Location ─────────────────────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5" data-fx="rise">
            <p className="eyebrow">Find us</p>
            <h2 className="tt-1">Inside BATTS Athletics, Burlington.</h2>
            <p className="mt-5 text-muted leading-relaxed">{siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} {siteConfig.address.postalCode} — {siteConfig.address.locationNote}.</p>
            <div className="mt-8"><HoursTable /></div>
            <p className="mt-3 text-sm text-muted">{siteConfig.hours.policy}</p>
            <Link href="/contact" className="btn btn-ghost mt-6">Contact &amp; directions <ArrowRight className="w-4 h-4" aria-hidden /></Link>
          </div>
          <div className="lg:col-span-7" data-fx="rise"><MapEmbed /></div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
