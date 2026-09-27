import { organizationLd, personLd, websiteLd } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';

/** Sitewide entity graph on EVERY page: Physiotherapy business + Person + WebSite. */
export function EntitySchema() {
  return <JsonLd nodes={[organizationLd(), personLd(), websiteLd()]} />;
}
