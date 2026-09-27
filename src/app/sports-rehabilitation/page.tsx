import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { WHATSAPP_URL, CTA_LABEL } from '@/config/site';
import { PLACEHOLDERS } from '@/data/placeholders';
import { getService } from '@/data/services';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd } from '@/lib/knowledge-graph';
import { ORG_ID } from '@/lib/schema';
import { SITE_URL } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServiceCard } from '@/components/ServiceCard';
import { CtaBand } from '@/components/CtaBand';

export const metadata = pageMetadata({
  title: 'Sports Rehabilitation & Sports Physiotherapy in Burlington',
  description:
    'Sports rehabilitation in Burlington, ON — from injury back to the game. Sprains, strains, tendon and joint injuries, overuse injuries; racquet sports, cricket, running, soccer, gym. Athix Physio & Sports Rehab, inside BATTS Athletics.',
  path: '/sports-rehabilitation',
  keywords: ['sports physiotherapy Burlington', 'sports rehab Burlington', 'badminton injury physio', 'cricket injury physiotherapist', 'return to sport rehabilitation Halton'],
});

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Sports Rehabilitation', path: '/sports-rehabilitation' }];
const STAGES = ['Pain', 'Mobility', 'Strength', 'Control', 'Function', 'Performance'];
const INJURIES = ['Sprains', 'Strains', 'Muscle Injuries', 'Tendon Injuries', 'Joint Injuries', 'Overuse Injuries', 'Running Injuries', 'Badminton Injuries', 'Tennis Injuries', 'Soccer Injuries', 'Gym & Fitness Injuries'];

export default function SportsRehabPage() {
  const services = ['sports-acupuncture', 'strength-mobility-stretching', 'soft-tissue-myofascial-release', 'pre-and-post-surgical-rehabilitation'].map(getService).filter((s): s is NonNullable<typeof s> => Boolean(s));
  const serviceNode = {
    '@type': 'Service',
    '@id': `${SITE_URL}/sports-rehabilitation#service`,
    name: 'Sports Rehabilitation',
    serviceType: 'Sports physiotherapy and rehabilitation',
    description: 'Staged rehabilitation from injury back to sport: pain, mobility, strength, control, function, performance.',
    url: `${SITE_URL}/sports-rehabilitation`,
    provider: { '@id': ORG_ID },
  };
  return (
    <>
      <JsonLd nodes={[breadcrumbLd('/sports-rehabilitation', CRUMBS), serviceNode]} />
      <section className="section pb-10">
        <div className="container-x">
          <Breadcrumbs items={CRUMBS} />
          <div className="mt-8 grid gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow reveal">Sports rehabilitation</p>
              <h1 className="tt-display reveal" style={{ animationDelay: '80ms' }}>From injury back to the game.</h1>
              <p className="lead mt-6 reveal" style={{ animationDelay: '160ms' }}>
                Whether you’re an elite athlete, recreational athlete, weekend warrior, or simply someone who loves staying active, rehabilitation should have a clear direction.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8 reveal" style={{ animationDelay: '240ms' }}>
                <MessageCircle className="w-5 h-5" aria-hidden /> {CTA_LABEL}
              </a>
            </div>
            <div className="lg:col-span-5 reveal" style={{ animationDelay: '200ms' }}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-[var(--shadow-rest)]">
                <Image src={PLACEHOLDERS.sports.src} alt={PLACEHOLDERS.sports.alt} fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="on-dark ink grain">
        <div className="container-x relative py-16 md:py-20">
          <p className="eyebrow" data-fx="rise">We help you progress through</p>
          <ol className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-3" data-fx="stagger">
            {STAGES.map((s, i) => (
              <li key={s} className="flex items-center gap-3">
                <span className="font-heading font-medium text-white text-xl md:text-3xl tracking-tight">{s}</span>
                {i < STAGES.length - 1 ? <ArrowRight className="w-5 h-5 text-accent-soft" aria-hidden /> : null}
              </li>
            ))}
          </ol>
          <div className="court-line mt-10" data-fx="draw" aria-hidden />
          <p className="mt-8 text-white/70 max-w-2xl leading-relaxed" data-fx="rise">
            Our rehabilitation programs may address:
          </p>
          <ul className="mt-4 flex flex-wrap gap-2" data-fx="stagger">
            {INJURIES.map((x) => <li key={x} className="glass px-3.5 py-1.5 text-sm text-white">{x}</li>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5" data-fx="rise">
            <p className="eyebrow">Inside a racquet-sports club</p>
            <h2 className="tt-1">Built where the sport happens.</h2>
          </div>
          <div className="lg:col-span-7 space-y-4 text-[1.0625rem] leading-relaxed text-muted" data-fx="rise">
            <p>The clinic sits inside BATTS Athletics, next to the gym area — a facility built around badminton, squash, table tennis and tennis. That setting shapes how we work: assessment looks at the specific demands of your sport — the lunge and recovery of a racquet rally, the rotation of a bowling action, the deceleration of a cut — not only at the joint that hurts.</p>
            <p>Abhishek has worked in the sports environment, including cricket league matches, providing sports therapy and rehabilitation support to competitive athletes, including international-level players representing Canada. The goal is always the same: progressively restore strength, mobility, movement quality, load tolerance, confidence and sport-specific function so you can safely return to training and competition.</p>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <h2 className="tt-2" data-fx="rise">Services often used in sports rehabilitation</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" data-fx="stagger">
            {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
          <Link href="/services" className="btn btn-ghost mt-8">All services <ArrowRight className="w-4 h-4" aria-hidden /></Link>
        </div>
      </section>
      <CtaBand title="Ready to get back on court?" body="Start with an assessment. We will map where you are on the path from pain to performance and what the next stage looks like." />
    </>
  );
}
