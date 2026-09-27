import { graphJson, type LdNode } from '@/lib/knowledge-graph';

/** The ONE JSON-LD script a page emits — all nodes in a single @graph. */
export function JsonLd({ nodes }: { nodes: (LdNode | null)[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: graphJson(nodes.filter((n): n is LdNode => Boolean(n))) }}
    />
  );
}
