import { pageMetadata } from '@/lib/seo';
import { CONDITIONS } from '@/data/conditions';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd } from '@/lib/knowledge-graph';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ConditionCard } from '@/components/ConditionCard';
import { CtaBand } from '@/components/CtaBand';

export const metadata = pageMetadata({
  title: 'Conditions We Treat',
  description:
    'Physiotherapy in Burlington for neck and back pain, shoulder and rotator cuff injuries, tennis elbow, hip and groin injuries, knee and ligament injuries, ankle sprains, Achilles and plantar fascia pain. Athix Physio & Sports Rehab.',
  path: '/conditions',
});

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Conditions', path: '/conditions' }];

export default function ConditionsPage() {
  return (
    <>
      <JsonLd nodes={[breadcrumbLd('/conditions', CRUMBS)]} />
      <section className="section pb-10">
        <div className="container-x">
          <Breadcrumbs items={CRUMBS} />
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow reveal">Conditions we treat</p>
            <h1 className="tt-display reveal" style={{ animationDelay: '80ms' }}>Head to toe, region by region.</h1>
            <p className="lead mt-6 reveal" style={{ animationDelay: '160ms' }}>
              Choose the region that hurts. Each page explains what we look at, which services commonly form part of the plan, and when to get it assessed. If your symptoms span more than one region, that is exactly the kind of picture a whole-body assessment is for.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-fx="stagger">
          {CONDITIONS.map((c) => <ConditionCard key={c.slug} region={c} />)}
        </div>
      </section>
      <CtaBand title="Not sure which region?" body="Send a message describing what hurts and what it stops you doing. We will tell you whether an assessment is the right next step." />
    </>
  );
}
