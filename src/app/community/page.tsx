import Image from 'next/image';
import { pageMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import { COMMUNITY } from '@/data/media';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd } from '@/lib/knowledge-graph';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaBand } from '@/components/CtaBand';

export const metadata = pageMetadata({
  title: 'Community — Cricket, Events & Volunteering',
  description:
    'Athix Physio & Sports Rehab and Abhishek Thakur, PT in the community: Halton cricket match days, youth and club teams, and community events in Burlington and the surrounding area.',
  path: '/community',
  keywords: ['Burlington community', 'Halton cricket', 'sports physiotherapy Burlington community', 'Athix community events'],
});

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Community', path: '/community' }];

export default function CommunityPage() {
  return (
    <>
      <JsonLd nodes={[breadcrumbLd('/community', CRUMBS)]} />
      <section className="section pb-10">
        <div className="container-x">
          <Breadcrumbs items={CRUMBS} />
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow reveal">Community</p>
            <h1 className="tt-display reveal" style={{ animationDelay: '80ms' }}>Part of the community we treat.</h1>
            <p className="lead mt-6 reveal" style={{ animationDelay: '160ms' }}>
              Athix sits inside {siteConfig.address.facility}, and a lot of our work happens beyond the clinic door: cricket grounds, club teams, youth sport and community events across Burlington and Halton. Here is some of it.
            </p>
          </div>
        </div>
      </section>

      {COMMUNITY.map((group, gi) => (
        <section key={group.title} className={`section ${gi % 2 === 1 ? 'bg-surface' : 'pt-0'}`}>
          <div className="container-x">
            <div className="max-w-2xl" data-fx="rise">
              <div className="court-line mb-5" data-fx="draw" aria-hidden />
              <h2 className="tt-1">{group.title}</h2>
              <p className="mt-4 text-[1.0625rem] text-muted leading-relaxed">{group.body}</p>
            </div>
            <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-5" data-fx="stagger">
              {group.images.map((m, i) => (
                <figure key={m.src} className="mb-5 break-inside-avoid rounded-lg overflow-hidden bg-surface">
                  <Image
                    src={m.src}
                    alt={m.alt}
                    width={m.width}
                    height={m.height}
                    priority={gi === 0 && i === 0}
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="w-full h-auto"
                  />
                  {m.caption ? <figcaption className="px-4 py-3 text-sm text-muted">{m.caption}</figcaption> : null}
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand title="Playing, training or organising an event?" body="Whether you are a player getting back from injury or a club or community group in Burlington and Halton, start with a conversation." />
    </>
  );
}
