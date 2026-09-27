# ATHIX — Build Plan (gated phases)

| Phase | Deliverables | Exit gate | Status |
|---|---|---|---|
| 0 Guardrails | Tyashin account + project, plugins (blog, chatbot OFF, contact-form, YOM), KV namespace, public repo, `siteConfig` with confirmed facts only, ASSET-DEBT | Facts traced to source; nothing invented | ✅ 27 Sep |
| 1 Design system | Tokens, type, surfaces, buttons, court-line device, motion module, a11y floor | tsc green; both schemes; reduced-motion | ✅ 27 Sep |
| 2 Core pages | Home, services ×9, conditions ×6, sports rehab, about, first visit, insurance, FAQ, contact, legal ×3, 404 | Every route has metadata + ≥1 inbound link; zero ghost links | ✅ 27 Sep |
| 3 SEO / LLM surface | seo.ts canonicals, @graph (Physiotherapy + Person + WebSite + Service + FAQ + Breadcrumb), sitemap-pages.xml, robots, llms.txt, native blog + 6 seeded posts | Coverage gate: `app/**/page.tsx` ⊆ getSiteRoutes() | ✅ 27 Sep |
| 4 Trust / compliance | CPO wording audit (no Dr., superlatives, guarantees, specialist), privacy (PHIPA/PIPEDA), terms, accessibility statement | Grep audit clean; client review of clinical copy | 🔄 client review pending |
| 5 Perf / hardening | OpenNext prod build, Lighthouse mobile ≥ 90, CLS 0, LCP element sane, KV cache bound | Lighthouse report in `/audits/phase5/` | ✅ 27 Sep — home 94/100/96/69, service page 94/100/96/69 (SEO 69 = deliberate preview noindex `is-crawlable`); CLS 0, TBT 0; LCP 3.0–3.1s simulated mobile (lead paragraph / header logo) — hero lead made transform-only after the first run stamped it at 3.3s |
| 6 Audit | design / brand / seo / qa lenses, each `VERDICT: GO` | All four GO | ⏳ |
| 7 Launch | Push → `/adopt` → build → slug preview → client sign-off → DNS (Cloudflare, keep M365 records) → apex + www hostnames → `ROBOTS_NOINDEX=false` rebuild → verify live head → GBP → SEO Co-Pilot install | `x-tyashin-dispatch: nextjs`, no noindex, sitemap index live | ⏳ blocked on DNS decision (Q13) |

Cutover checklist (Phase 7): flip `ROBOTS_NOINDEX` in `wrangler.jsonc` AND the build env → redeploy → `node -e "fetch('https://athixrehab.ca/').then(r=>r.text()).then(t=>console.log(t.match(/<meta[^>]*robots[^>]*>/gi)))"` → expect null. Register in `CUSTOMERS.md` + `safe-deploy.sh` `CUSTOMER_URLS`.
