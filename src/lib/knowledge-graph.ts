import { SITE_URL } from '@/lib/seo';
import { ORG_ID, WEBSITE_ID } from '@/lib/schema';

export { ORG_ID, WEBSITE_ID };

export type LdNode = Record<string, unknown>;

/**
 * Serialise nodes as ONE @graph (addendum §3b). Any stray @context is
 * stripped and declared once. A WebPage node is derived from the
 * BreadcrumbList's last crumb when the page did not supply one. `<`/`>` are
 * escaped so a value containing `</script>` can never break out of the tag.
 */
export function graphJson(nodes: LdNode[]): string {
  const graph: LdNode[] = nodes
    .filter(Boolean)
    .map((n) => {
      const { '@context': _ctx, ...rest } = n;
      return rest;
    });
  const crumbs = graph.find((n) => n['@type'] === 'BreadcrumbList') as
    | (LdNode & { itemListElement?: { name?: string; item?: string }[] })
    | undefined;
  const last = crumbs?.itemListElement?.at(-1);
  if (crumbs && last?.item && !graph.some((n) => n['@type'] === 'WebPage')) {
    const url = last.item;
    crumbs['@id'] ??= `${url}#breadcrumb`;
    graph.unshift({
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: last.name,
      inLanguage: 'en-CA',
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': ORG_ID },
      breadcrumb: { '@id': crumbs['@id'] },
    });
  }
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e');
}

export function breadcrumbLd(path: string, items: { name: string; path: string }[]): LdNode {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}${path}#breadcrumb`,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path === '/' ? '/' : it.path}`,
    })),
  };
}

export function faqLd(path: string, items: { q: string; a: string }[]): LdNode {
  return {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}${path}#faq`,
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}
