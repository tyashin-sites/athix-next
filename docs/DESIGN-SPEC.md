# ATHIX — Design Spec (single source of truth; deviations are bugs)

**Thesis.** A boutique sports-medicine practice inside a racquet club, told through one clinician. *Range of motion* is the visual idea: chalk court-lines as the structural device, arcs as the motion signature. Premium, clinical-clean, calm, confident.

**Anti-goals.** No stock-gym kinetic energy (hard diagonals, aggressive cuts). No testimonial walls or star widgets (CPO). No "Dr.", no superlatives, no guarantees, no "specialist" (except as a College designation — none held). No invented facts. No copying Thridify's choreography.

## 1. Colour (client-supplied — nothing else)
| Token | Value | Use |
|---|---|---|
| `--brand-navy` | `#0C4367` | Primary; ink sections; headings on light |
| `--brand-sky` | `#01AEEF` | Accent; primary CTA fill; hairlines; focus ring |
| `--brand-black` | `#000000` | Text (mixed 86% with navy); CTA text on sky |
| `--brand-white` | `#FFFFFF` | Page ground; text on navy |
Every other value is a `color-mix()` of these four. **FORBIDDEN:** any foreign hue (no red — the services doc's "ATHIX red" has no colour code and the client confirmed navy/sky only), gray shadows, gradients that leave the palette.

Contrast floors: navy on white 10.9:1 · black on sky 8.4:1 (CTA) · sky-soft on navy ≥ 4.5:1 (eyebrows on dark) · sky on white is decorative only (never small text).

## 2. Type
Sora 500/600 (display), Figtree 400/500/600 (body), JetBrains Mono 400/500 (hours, credentials, numerals). All via `next/font`, `display:swap`. Display tiers weight 600 max, negative tracking at size; hierarchy by size and air. Line-height ≥ 1.04 at display sizes.

**Text budgets.** Hero h1 ≤ 8 words · lead ≤ 45 words · card summary ≤ 28 words · CTA label exactly "Book an Appointment".

## 3. Layout / spacing
One container (76rem). Section padding `clamp(4.5rem, 9vw, 8rem)`. Radius 0.5 / 0.75 / 1.125rem, pills for buttons. Mobile-first: every page verified at 375px; sticky WhatsApp bar on mobile; header phone visible ≥ md.

## 4. Surfaces & light
Cards: navy-cast layered shadows, masked sky→navy hairline ring on hover, cursor spotlight. Ink sections: navy ground + sky aurora + grain. Glass chips on ink. Court-line hairline (`.court-line`) as the section divider — drawn on scroll.

## 5. Motion (one language)
Ease `cubic-bezier(0.22,1,0.36,1)` shared by CSS and GSAP `'brand'`. Tiers: micro 150 · ui 300 · reveal 600 · hero 900ms.
Signature moments (exactly three): **(1)** hero range-arc draw + transform-only hero settle; **(2)** ProcessLine scrub — the client's Assess→Treat→Rebuild→Perform on a court-line that fills with scroll; **(3)** court-line draws on section entry. Plus pointer physics (spotlight, ≤5px magnetic CTA) on fine pointers.
Laws: LCP elements transform-only, never hidden · header height constant · `prefers-reduced-motion` kills every entrance/scrub/lean · contrast holds in every state · touch never sees cursor physics.

## 6. Imagery
Real: founder photo (brand folder). Placeholders: branded navy/sky tiles with the word PLACEHOLDER — never stock, never AI faces — each tracked in ASSET-DEBT.

## 7. Per-page intent (one intent per URL)
`/` book · `/services` choose a service · `/services/[slug]` understand + book · `/conditions` find your region · `/conditions/[slug]` understand + book · `/sports-rehabilitation` the wedge · `/about` trust the clinician · `/first-visit` remove booking anxiety · `/insurance-and-billing` remove payment anxiety · `/faq` answers · `/contact` find + book · `/blog` authority · legal ×3 compliance.

## 8. UX laws
One primary CTA (WhatsApp) — header, hero, every service/condition page, sticky mobile bar, CTA band. Desktop shows click-to-call. No ghost links, no orphan pages. WCAG 2.1 AA: focus ring, skip link, semantic landmarks, alt text, reduced motion, 400% zoom reflow.

## 9. Performance budget (a design constraint)
Lighthouse mobile ≥ 90 perf, CLS 0, LCP < 2.5s on the prod build. No render-blocking fonts, no third-party scripts in the layout (plugins are edge-injected), maps click-to-load. If an idea breaks the budget, the idea loses.

## 10. Compliance (CPO Advertising & Marketing Standard, in force 1 May 2025)
Truthful, accurate, verifiable. Credentials in College order: name, PT, then credentials. Services listed only from the client's document. Conditions only from the client's document. "When clinically appropriate" retained. No outcome promises anywhere, including blog posts. Every clinical page by-lined to the registrant; he reviews before domain cutover.
