# ATHIX — Asset Debt (only real assets clear a row)

| # | Placeholder / gap | Where | Blocks | Owner | Status |
|---|---|---|---|---|---|
| 1 | CPO registration number | About page, footer, Person schema (`identifier`) — currently omitted, register LINK used instead | Nice-to-have (link is verifiable) | Client (Q3) | open |
| 2 | Hero athlete photo | `public/images/placeholder-hero.jpg` → `PLACEHOLDERS.heroAthlete` | Domain cutover (placeholder must not go live) | Client (Q15) | **cleared 28 Oct** — client photos (src/data/media.ts) |
| 3 | Hands-on treatment photo | `placeholder-hands-on.jpg` → `PLACEHOLDERS.handsOn` | Cutover | Client | **cleared 28 Oct** — client photos (src/data/media.ts) |
| 4 | Treatment-room photo | `placeholder-room.jpg` → `PLACEHOLDERS.treatmentRoom` (first-visit page) | Cutover | Client | **cleared 28 Oct** — client photos (src/data/media.ts) |
| 5 | Athletes-training photo | `placeholder-sports.jpg` → `PLACEHOLDERS.sports` (home + sports rehab) | Cutover | Client | **cleared 28 Oct** — client photos (src/data/media.ts) |
| 6 | Original founder photo file | `public/images/abhishek-thakur.jpg` is cropped from a phone screenshot (955×1193) — usable, but the original would be sharper | Quality | Client | **cleared 28 Oct** — client photos (src/data/media.ts) |
| 7 | Accessibility statement for the physical space | Contact + accessibility pages say "tell us when you book"; CPO register records the space as NOT accessible | Cutover wording | Client (Q8) | open |
| 8 | Non-member access / entrance route inside BATTS | Contact page copy | Cutover wording | Client (Q9) | open |
| 9 | Parking details | Omitted (not confirmed) | — | Client | partly — parking-lot photo on /contact (no rules/fees stated) |
| 10 | Cancellation / late policy | Omitted (not confirmed) | — | Client | open |
| 11 | Direct-billing insurer list | Site says "all major insurers where your plan allows" (client Q4) — a named list would be stronger | — | Client | open |
| 12 | Spinal-manipulation roster | Service page says "Joint Mobilization & Manipulation" (client wording, Q5: rostered) but the PUBLIC register shows only acupuncture — client to verify with the College | Compliance | Client | open |
| 13 | Blog featured images | 6 seeded posts have no `featuredImage`; cards render text-only | Nice-to-have | Studio | open |
| 14 | DNS move to Cloudflare (M365 MX/SPF/DMARC/autodiscover preserved) + apex/www hostnames | Domain cutover | Cutover | Client/Studio (Q13) | open |
| 15 | Chatbot enablement + review | Installed, DISABLED; business profile set; needs KB training review + brand colours + emergency/no-diagnosis instructions confirmed live | Post-launch | Studio | open |
| 16 | Google Business Profile | None exists; create + verify at cutover | Post-launch SEO | Client/Studio | open |
| 17 | SEO Co-Pilot | Cannot install before a verified custom domain (422) — install at cutover; in-page @graph carries schema until then | Cutover | Studio | open |
| 18 | Clinical copy sign-off | All condition/service/blog copy must be reviewed by the registrant (CPO accountability) before the real domain | Cutover | Client | open |

## 28 Oct 2026 — client change list

- Client photos from the "Website pictures" Drive folder are live via `src/data/media.ts` (cropped from phone screenshots, WebP). Placeholders deleted.
- Neuro1–Neuro10 are anatomy illustrations captured from third-party sources (Neuro2 shows the "Anatomy Trains" myofascial lines). Client asked for them; **licence not confirmed**. Replace with licensed or original diagrams if challenged.
- Therapy cards (cupping, dry needling, sports acupuncture, ultrasound, myofascial, NMES) are the client's own artwork, shown whole on service pages.
- Header colour #285B92 and second phone (905) 906-7791 added at the client's request (overrides the four-colour rule for the header only).
- Google review prompt links to the Business Profile review form. No gating or incentives (Google policy). CPO advertising rules on soliciting reviews to be confirmed by the registrant.
