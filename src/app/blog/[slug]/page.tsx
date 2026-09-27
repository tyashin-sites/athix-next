import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { pageMetadata, SITE_URL } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import { getPost, getPosts, postDate, authorName } from '@/lib/blog';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd } from '@/lib/knowledge-graph';
import { ORG_ID, PERSON_ID } from '@/lib/schema';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaBand } from '@/components/CtaBand';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt || '',
    path: `/blog/${post.slug}`,
    image: post.seo?.ogImage || post.featuredImage,
    type: 'article',
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const { posts: latest } = await getPosts(1, 4);
  const related = latest.filter((p) => p.slug !== post.slug).slice(0, 3);
  const path = `/blog/${post.slug}`;
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: post.title, path }];
  const img = post.featuredImage || post.seo?.ogImage;
  const article = {
    '@type': 'BlogPosting',
    '@id': `${SITE_URL}${path}#article`,
    headline: post.title,
    description: post.seo?.metaDescription || post.excerpt || '',
    ...(img ? { image: img } : {}),
    datePublished: post.publishedAt || post.createdAt,
    dateModified: post.updatedAt || post.publishedAt || post.createdAt,
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: `${SITE_URL}${path}`,
    inLanguage: 'en-CA',
  };
  const isHtml = (post.contentFormat ?? 'html') === 'html';

  return (
    <>
      <JsonLd nodes={[breadcrumbLd(path, crumbs), article]} />
      <article>
        <header className="section pb-8">
          <div className="container-x">
            <Breadcrumbs items={[crumbs[0], crumbs[1], { name: 'Article', path }]} />
            <div className="mt-8 max-w-3xl">
              <p className="tt-mono text-muted reveal">{post.pinned ? <span className="text-accent mr-2">Featured</span> : null}{postDate(post)}</p>
              <h1 className="tt-1 mt-4 reveal" style={{ animationDelay: '80ms' }}>{post.title}</h1>
              {post.excerpt ? <p className="lead mt-5 reveal" style={{ animationDelay: '160ms' }}>{post.excerpt}</p> : null}
              <p className="mt-6 text-sm text-muted reveal" style={{ animationDelay: '200ms' }}>
                By {authorName(post) || siteConfig.practitioner.displayName} · Registered Physiotherapist, College of Physiotherapists of Ontario
              </p>
            </div>
          </div>
        </header>
        {img ? (
          <div className="container-x">
            <div className="relative aspect-[16/8] rounded-lg overflow-hidden max-w-4xl">
              <Image src={img} alt={post.title} fill priority sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
            </div>
          </div>
        ) : null}
        <div className="container-x py-12">
          {isHtml ? (
            <div className="prose-athix" dangerouslySetInnerHTML={{ __html: post.content || '' }} />
          ) : (
            <div className="prose-athix whitespace-pre-wrap">{post.content}</div>
          )}
          <div className="prose-athix mt-10 rounded-lg border border-border bg-surface p-6 text-[15px] text-muted">
            <p><strong>This article is general information, not medical advice.</strong> It does not replace an assessment. If you are unsure whether physiotherapy is appropriate for you, book an appointment or speak to your physician. In an emergency, call 911.</p>
          </div>
          <a href="/blog" className="btn btn-ghost mt-10"><ArrowLeft className="w-4 h-4" aria-hidden /> All articles</a>
        </div>
      </article>
      {related.length > 0 ? (
        <section className="section pt-0">
          <div className="container-x">
            <h2 className="tt-2" data-fx="rise">More from the blog</h2>
            <ul className="mt-6 grid gap-5 sm:grid-cols-3" data-fx="stagger">
              {related.map((p) => (
                <li key={p.slug}><a href={`/blog/${p.slug}`} className="card block p-6 h-full"><p className="tt-mono text-muted">{postDate(p)}</p><h3 className="tt-3 mt-2">{p.title}</h3></a></li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
      <CtaBand />
    </>
  );
}
