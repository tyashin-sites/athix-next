import Image from 'next/image';
import { ShieldCheck, Languages, GraduationCap, ExternalLink, MessageCircle } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { siteConfig, WHATSAPP_URL, CTA_LABEL } from '@/config/site';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd } from '@/lib/knowledge-graph';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaBand } from '@/components/CtaBand';

export const metadata = pageMetadata({
  title: 'Meet Your Physiotherapist — Abhishek Thakur, PT',
  description:
    'Abhishek Thakur, PT — MPT (Ortho & Sports), Dip. AMPT. Registered physiotherapist in Burlington with a movement-focused, neuro-fascial and manual therapy approach to orthopaedic and sports rehabilitation.',
  path: '/about',
});

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }];

export default function AboutPage() {
  const p = siteConfig.practitioner;
  return (
    <>
      <JsonLd nodes={[breadcrumbLd('/about', CRUMBS)]} />
      <section className="section pb-10">
        <div className="container-x">
          <Breadcrumbs items={CRUMBS} />
          <div className="mt-8 grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5 reveal">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-[var(--shadow-hover)]">
                <Image src={p.photo} alt={`${p.displayName}, registered physiotherapist, at Athix Physio & Sports Rehab in Burlington`} fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="eyebrow reveal">Meet your physiotherapist</p>
              <h1 className="tt-display reveal" style={{ animationDelay: '80ms' }}>{p.displayName}</h1>
              <p className="tt-mono text-muted mt-3 reveal" style={{ animationDelay: '120ms' }}>{p.credentials}</p>
              <p className="lead mt-6 reveal" style={{ animationDelay: '160ms' }}>
                Advanced physiotherapy · Movement-focused · Sports rehabilitation · Neurofascial &amp; manual therapy
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 text-[15px] reveal" style={{ animationDelay: '220ms' }}>
                <li className="flex gap-3"><ShieldCheck className="w-5 h-5 shrink-0 text-accent" aria-hidden /><span><strong className="font-semibold">Registered physiotherapist</strong><br /><a href={p.registerUrl} target="_blank" rel="noopener noreferrer" className="text-muted underline underline-offset-4 inline-flex items-center gap-1">College of Physiotherapists of Ontario public register <ExternalLink className="w-3.5 h-3.5" aria-hidden /></a></span></li>
                <li className="flex gap-3"><GraduationCap className="w-5 h-5 shrink-0 text-accent" aria-hidden /><span><strong className="font-semibold">MPT (Orthopaedics &amp; Sports), 2006</strong><br /><span className="text-muted">Dip. AMPT through APTEI</span></span></li>
                <li className="flex gap-3"><ShieldCheck className="w-5 h-5 shrink-0 text-accent" aria-hidden /><span><strong className="font-semibold">Acupuncture authorized</strong><br /><span className="text-muted">Including dry needling — a controlled act in Ontario</span></span></li>
                <li className="flex gap-3"><Languages className="w-5 h-5 shrink-0 text-accent" aria-hidden /><span><strong className="font-semibold">{p.languages.join(' · ')}</strong><br /><span className="text-muted">Sessions in either language</span></span></li>
              </ul>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8 reveal" style={{ animationDelay: '280ms' }}>
                <MessageCircle className="w-5 h-5" aria-hidden /> {CTA_LABEL}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bio — the client's own words (brand folder, "Athix Founder Bio.docx"),
          with "Movement Specialist" reworded to "movement-focused" per the
          CPO Titles standard (client-approved). */}
      <section className="section pt-8">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4" data-fx="rise">
            <div className="court-line mb-5" data-fx="draw" aria-hidden />
            <h2 className="tt-2">Approach</h2>
          </div>
          <div className="lg:col-span-8 prose-athix text-muted" data-fx="rise">
            <p>Abhishek Thakur is an experienced orthopaedic and sports physiotherapist with a Master of Physiotherapy in Orthopaedics &amp; Sports, completed in 2006, and a Diploma in Advanced Orthopaedic Manual Physical Therapy (Dip. AMPT) through APTEI.</p>
            <p>With a clinical approach that integrates conventional physiotherapy with modern movement science, neurofascial concepts, advanced manual therapy and sports rehabilitation, Abhishek focuses on understanding not only where a patient feels pain, but why the body is producing that dysfunction in the first place.</p>
            <p>His treatment approach combines joint mobilization, soft-tissue and fascial techniques, neural mobilization, neurodynamic techniques, medical acupuncture and dry needling, movement retraining, corrective exercise and progressive strengthening. Particular attention is given to the relationship between the nervous system, fascia, joints, muscles, posture, breathing and the body’s kinetic chains to identify movement restrictions and restore efficient movement.</p>

            <h3>Movement-based &amp; neurofascial approach</h3>
            <p>Abhishek has a special interest in human movement and kinetic-chain dysfunction, assessing how different regions of the body interact rather than treating an isolated painful area alone. His approach may incorporate neurofascial and neuromuscular strategies to improve mobility, coordination, motor control, stability and functional performance.</p>
            <p>Treatment is individualized according to each person’s condition, lifestyle, activity level and goals — from everyday pain and injury recovery to athletic performance and return-to-sport rehabilitation.</p>

            <h3>Sports &amp; performance rehabilitation</h3>
            <p>Abhishek has also worked in the sports environment, including cricket league matches, providing sports therapy and rehabilitation support to competitive athletes. His experience includes working with athletes and international-level players, including individuals representing Canada, with a focus on injury management, recovery, movement optimization and performance readiness.</p>
            <p>His sports rehabilitation philosophy goes beyond simply getting an athlete out of pain. The goal is to progressively restore strength, mobility, movement quality, load tolerance, confidence and sport-specific function so the athlete can safely return to training and competition.</p>

            <h3>Modern physiotherapy with a personalized approach</h3>
            <p>Every patient is different. Abhishek takes the time to understand the individual’s symptoms, movement patterns, physical demands, lifestyle and personal goals before developing a treatment strategy.</p>
            <p>His philosophy combines the best of evidence-informed conventional physiotherapy with advanced hands-on and movement-based techniques, creating a personalized approach that addresses both the immediate problem and the factors that may contribute to its recurrence.</p>
            <p>He is particularly passionate about patient education and empowerment, helping people understand their bodies, manage pain, improve movement and build long-term physical resilience rather than relying solely on passive treatment.</p>
            <p>Whether recovering from an injury, managing persistent musculoskeletal pain, returning to sport or looking to improve movement and physical performance, Abhishek’s goal is to help patients move better, perform better and stay active for the long term.</p>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <div className="card p-8 md:p-10 grid gap-8 md:grid-cols-3" data-fx="rise">
            <div><p className="eyebrow">The clinic</p><p className="font-heading font-medium text-lg">{siteConfig.name}</p><p className="mt-2 text-muted text-[15px]">{siteConfig.tagline}</p></div>
            <div><p className="eyebrow">Where</p><p className="text-[15px]">{siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} {siteConfig.address.postalCode}</p><p className="mt-1 text-muted text-[15px]">{siteConfig.address.locationNote}</p></div>
            <div><p className="eyebrow">How</p><p className="text-[15px]">One-to-one sessions, {siteConfig.hours.policy.toLowerCase()}</p><p className="mt-1 text-muted text-[15px]">Extended health insurance accepted; no referral needed.</p></div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
