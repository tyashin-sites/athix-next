import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Waves, Hand, Syringe, Zap, Move, Dumbbell, Circle, Activity, ClipboardCheck, type LucideIcon } from 'lucide-react';
import type { Service } from '@/data/services';
import { SERVICE_MEDIA } from '@/data/media';

const ICONS: Record<Service['icon'], LucideIcon> = { Waves, Hand, Syringe, Zap, Move, Dumbbell, Circle, Activity, ClipboardCheck };

export function ServiceCard({ service }: { service: Service }) {
  const Icon = ICONS[service.icon];
  const cover = SERVICE_MEDIA[service.slug]?.cover;
  return (
    <Link href={`/services/${service.slug}`} className="card group flex flex-col overflow-hidden h-full">
      {cover ? (
        <div className="relative aspect-[16/10] bg-surface overflow-hidden">
          {/* object-top keeps the photo half of the branded therapy cards in frame */}
          <Image src={cover.src} alt="" fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
        </div>
      ) : null}
      <div className="flex flex-col flex-1 p-6 md:p-7">
        <span className="inline-flex w-11 h-11 items-center justify-center rounded-md bg-surface text-primary">
          <Icon className="w-5 h-5" strokeWidth={1.75} aria-hidden />
        </span>
        <h3 className="tt-3 mt-5 flex items-start justify-between gap-3">
          <span>{service.name}</span>
          <ArrowUpRight className="w-5 h-5 shrink-0 text-accent opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" strokeWidth={1.75} aria-hidden />
        </h3>
        <p className="mt-3 text-[15px] text-muted leading-relaxed">{service.summary}</p>
      </div>
    </Link>
  );
}
