import { cn } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  lead,
  center = false,
  as: Tag = 'h2',
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  center?: boolean;
  as?: 'h1' | 'h2';
  className?: string;
}) {
  return (
    <div className={cn(center && 'text-center mx-auto', className)} data-fx="rise">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Tag className={Tag === 'h1' ? 'tt-1' : 'tt-2'}>{title}</Tag>
      {lead ? <p className={cn('lead mt-5', center && 'mx-auto')}>{lead}</p> : null}
    </div>
  );
}
