# Athix Physio & Sports Rehab — website

Tyashin-managed Next.js 15 site (OpenNext on Cloudflare Workers) for Athix Physio & Sports Rehab, Burlington, ON.

- Project: `6ab990aaf53db5cdd5d093f8` · Worker `site-athix-next` · slug host `abhishek-website-mukcwtfc.sites.tyashin.com` · production `athixrehab.ca`
- Facts live in `src/config/site.ts`; services/conditions/FAQ in `src/data/`; every placeholder in `docs/ASSET-DEBT.md`.
- Spec: `docs/DESIGN-SPEC.md` · plan: `docs/BUILD-PLAN.md`.

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck
npm run build:worker # OpenNext production build (stop dev first; rm -rf .next)
```

Deploys: push to `main` → GitHub Actions (canonical workflow installed by `/adopt`). Never hand-edit `.github/workflows/deploy.yml`.
