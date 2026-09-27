import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { ConditionRegion } from '@/data/conditions';

export function ConditionCard({ region }: { region: ConditionRegion }) {
  return (
    <Link href={`/conditions/${region.slug}`} className="card group flex flex-col p-6 md:p-7 h-full">
      <h3 className="tt-3 flex items-start justify-between gap-3">
        <span>{region.name}</span>
        <ArrowUpRight className="w-5 h-5 shrink-0 text-accent opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" strokeWidth={1.75} aria-hidden />
      </h3>
      <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5 text-[14px] text-muted">
        {region.conditions.map((c) => (
          <li key={c} className="after:content-['•'] after:ml-2 after:opacity-40 last:after:content-none">{c}</li>
        ))}
      </ul>
    </Link>
  );
}
