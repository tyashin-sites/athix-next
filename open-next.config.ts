import { defineCloudflareConfig } from '@opennextjs/cloudflare';
import kvIncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache';

// KV-backed incremental cache (port skill §6.1) — without it every SSR page
// (the force-dynamic blog routes) recomputes per request. The binding name
// MUST be NEXT_INC_CACHE_KV (OpenNext hardcodes it) — see wrangler.jsonc.
export default defineCloudflareConfig({
  incrementalCache: kvIncrementalCache,
});
