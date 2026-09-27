import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { getPosts, postDate, authorName, type BlogPost } from '@/lib/blog';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd } from '@/lib/knowledge-graph';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaBand } from '@/components/CtaBand';

export const metadata = pageMetadata({
  title: 'Blog — Physiotherapy & Sports Injury Guides',
  description:
    'Plain-language guides from a registered physiotherapist in Burlington: sports injuries, when to see a physiotherapist, OHIP and insurance, dry needling, and what to expect from rehabilitation.',
  path: '/blog',
});

// SSR every request (port skill §4a) — the blog is platform data.
export const dynamic = 'force-dynamic';

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }];

function Card({ post, priority = false }: { post: BlogPost; priority?: boolean }) {
  const img = post.featuredImage || post.seo?.ogImage;
  const cat = typeof post.category === 'string' ? post.category : post.category?.name;
  return (
    <a href={`/blog/${post.slug}`} className="card group flex flex-col overflow-hidden h-full">
      {img ? (
        <div className="relative aspect-[16/10] bg-surface">
          <Image src={img} alt={post.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" priority={priority} />
        </div>
      ) : null}
      <div className="p-6 flex flex-col flex-1">
        <p className="tt-mono text-muted flex items-center gap-2">
          {post.pinned ? <span className="text-accent">Featured</span> : null}
          {cat ? <span>{cat}</span> : null}
          <span>{postDate(post)}</span>
        </p>
        <h2 className="tt-3 mt-3 group-hover:underline underline-offset-4 decoration-accent">{post.title}</h2>
        {post.excerpt ? <p className="mt-3 text-[15px] text-muted leading-relaxed line-clamp-3">{post.excerpt}</p> : null}
        <p className="mt-auto pt-5 text-sm text-muted">{authorName(post) ? `By ${authorName(post)}` : ''}</p>
      </div>
    </a>
  );
}

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const sp = await searchParams;
  const page = Math.max(1, parseInt(sp.page || '1', 10) || 1);
  const { posts, totalPages } = await getPosts(page, 12);
  if (posts.length === 0 && page === 1) notFound();

  return (
    <>
      <JsonLd nodes={[breadcrumbLd('/blog', CRUMBS)]} />
      <section className="section pb-10">
        <div className="container-x">
          <Breadcrumbs items={CRUMBS} />
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow reveal">Blog</p>
            <h1 className="tt-display reveal" style={{ animationDelay: '80ms' }}>Guides from the treatment room.</h1>
            <p className="lead mt-6 reveal" style={{ animationDelay: '160ms' }}>Plain-language articles by a registered physiotherapist — written to help you understand your body, not to replace an assessment.</p>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-fx="stagger">
            {posts.map((p, i) => <Card key={p.slug} post={p} priority={i === 0} />)}
          </div>
          {totalPages > 1 ? (
            <nav aria-label="Pagination" className="mt-10 flex items-center justify-between text-sm">
              {page > 1 ? <a href={`/blog?page=${page - 1}`} className="btn btn-ghost"><ArrowLeft className="w-4 h-4" aria-hidden /> Newer</a> : <span />}
              <span className="tt-mono text-muted">Page {page} of {totalPages}</span>
              {page < totalPages ? <a href={`/blog?page=${page + 1}`} className="btn btn-ghost">Older <ArrowRight className="w-4 h-4" aria-hidden /></a> : <span />}
            </nav>
          ) : null}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
