import { useEffect, useMemo, useState, type MouseEvent } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { ALL_ARTICLES, getRelatedArticles } from '../data/articles.ts';
import { AUTHORS, AUTHORS_BY_ID } from '../data/authors.ts';
import { SECTIONS_BY_SLUG } from '../data/sections.ts';
import type { Article } from '../types/editorial.ts';
import { EditorialImage } from '../components/EditorialImage.tsx';
import { useDocumentSeo } from '../hooks/useDocumentSeo.ts';
import { buildArticleJsonLd } from '../utils/seoSchema.ts';

interface ArticlePageProps {
  article: Article;
  onNavigate: (path: string) => void;
}

export function ArticlePage({ article, onNavigate }: ArticlePageProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  const author = AUTHORS_BY_ID[article.authorId] ?? AUTHORS[0];
  const section = SECTIONS_BY_SLUG[article.section];
  const related = useMemo(() => getRelatedArticles(article, 3), [article]);

  const currentIdx = ALL_ARTICLES.findIndex((a) => a.slug === article.slug);
  const prevArticle = currentIdx > 0 ? ALL_ARTICLES[currentIdx - 1] : null;
  const nextArticle =
    currentIdx >= 0 && currentIdx < ALL_ARTICLES.length - 1
      ? ALL_ARTICLES[currentIdx + 1]
      : null;

  const jsonLd = useMemo(
    () =>
      buildArticleJsonLd(
        article,
        typeof window !== 'undefined' ? window.location.origin : '',
      ),
    [article],
  );

  useDocumentSeo({
    title: `${article.title} – The Meridian Review`,
    description: article.directAnswer.slice(0, 158),
    canonicalPath: `/articles/${article.slug}`,
    imagePath: article.image,
    ogType: 'article',
    jsonLd,
  });

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      setScrollProgress(Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [article.slug]);

  const handleLink = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <>
      {/* Thin hairline reading progress bar */}
      <div
        aria-hidden="true"
        className="fixed top-16 left-0 z-30 h-0.5 bg-[#1E3A8A] transition-[width] duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        {/* Semantic Breadcrumb matching BreadcrumbList JSON-LD */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[#57534E]"
        >
          <a
            href="/"
            onClick={(e) => handleLink(e, '/')}
            className="hover:text-[#1C1917] hover:underline"
          >
            Front Page
          </a>
          <span aria-hidden="true">/</span>
          <a
            href={`/section/${section.slug}`}
            onClick={(e) => handleLink(e, `/section/${section.slug}`)}
            className="text-[#1E3A8A] hover:underline"
          >
            {section.name}
          </a>
          <span aria-hidden="true">/</span>
          <span className="truncate max-w-xs sm:max-w-md text-[#1C1917]">
            Essay {String(article.id).padStart(2, '0')}
          </span>
        </nav>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Primary 70% Narrative Column */}
          <article className="lg:col-span-8">
            <header className="border-b border-[#D6D0C4] pb-8">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#57534E]">
                <span className="font-mono tabular-nums text-[#78716C]">
                  ESSAY {String(article.id).padStart(2, '0')} OF 50
                </span>
                <span aria-hidden="true">·</span>
                <a
                  href={`/section/${section.slug}`}
                  onClick={(e) => handleLink(e, `/section/${section.slug}`)}
                  className="font-medium text-[#1E3A8A] hover:underline"
                >
                  {section.name}
                </a>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{article.readTimeMinutes} min read</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{article.wordCount.toLocaleString()} words</span>
              </div>

              <h1 className="editorial-balance mt-4 font-serif text-3xl font-semibold leading-[1.15] tracking-tight text-[#1C1917] sm:text-4xl lg:text-5xl">
                {article.title}
              </h1>

              <p className="mt-4 text-lg leading-relaxed text-[#44403C]">
                {article.subtitle}
              </p>

              {/* E-E-A-T Byline & Reviewer Bar */}
              <div className="mt-6 flex flex-col gap-2 pt-2 text-xs text-[#57534E] sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="font-semibold text-[#1C1917]">By </span>
                  <a
                    href={`/authors#${author.id}`}
                    onClick={(e) => handleLink(e, `/authors#${author.id}`)}
                    className="font-semibold text-[#1C1917] hover:text-[#1E3A8A] hover:underline"
                  >
                    {author.name}
                  </a>
                  <span> — {author.credentials}</span>
                </div>
                <div className="tabular-nums text-[#78716C]">
                  Published <time dateTime={article.publishedAt}>{article.publishedAt}</time> ·
                  Updated <time dateTime={article.updatedAt}>{article.updatedAt}</time>
                </div>
              </div>
              <p className="mt-1 text-xs text-[#78716C]">
                Fact-checked &amp; peer-reviewed by {article.reviewerName}
              </p>
            </header>

            {/* Answer-First GEO Executive Summary Box (all-around hairline border, NO thick left accent bar) */}
            <section
              aria-label="Executive Summary and Key Findings"
              className="mt-8 rounded-md border border-[#D6D0C4] bg-[#F5F1E9] p-6"
            >
              <h2 className="text-xs font-semibold tracking-wider text-[#9A3412] uppercase">
                Executive Summary — Direct Answer
              </h2>
              <p className="mt-2.5 text-base leading-relaxed text-[#1C1917]">
                {article.directAnswer}
              </p>

              <h3 className="mt-5 text-xs font-semibold tracking-wider text-[#57534E] uppercase">
                Key Findings
              </h3>
              <ul className="mt-2.5 space-y-2 text-sm leading-relaxed text-[#292524]">
                {article.keyTakeaways.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1E3A8A]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Primary Figure */}
            <figure className="mt-8">
              <div className="overflow-hidden rounded-sm border border-[#E2DDD3]">
                <EditorialImage
                  src={article.image}
                  alt={article.imageAlt}
                  aspectClass="aspect-[16/10]"
                  priority
                />
              </div>
              <figcaption className="mt-2.5 font-serif text-xs italic text-[#57534E]">
                {article.imageCaption}
              </figcaption>
            </figure>

            {/* Long-Form Essay Narrative Body (68ch max measure) */}
            <div className="mt-10 max-w-[68ch] space-y-10">
              {article.sections.map((sec, sIdx) => (
                <section key={sec.id} id={sec.id} className="scroll-mt-24">
                  <h2 className="editorial-balance font-serif text-2xl font-semibold leading-snug text-[#1C1917]">
                    {sec.heading}
                  </h2>
                  <div className="mt-4 space-y-5 text-[16px] leading-[1.78] text-[#292524]">
                    {sec.paragraphs.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className={sIdx === 0 && pIdx === 0 ? 'editorial-dropcap' : ''}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {sec.metrics && sec.metrics.length > 0 && (
                    <div className="mt-6 overflow-x-auto rounded-md border border-[#D6D0C4]">
                      <table className="w-full border-collapse text-left text-sm">
                        <thead>
                          <tr className="border-b border-[#D6D0C4] bg-[#F5F1E9] text-xs font-semibold text-[#57534E] uppercase">
                            <th className="px-4 py-3">Indicator</th>
                            <th className="px-4 py-3">Benchmark</th>
                            <th className="px-4 py-3">Context</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E2DDD3] bg-[#FBF9F5]">
                          {sec.metrics.map((row) => (
                            <tr key={row.label}>
                              <td className="px-4 py-3 font-medium text-[#1C1917]">
                                {row.label}
                              </td>
                              <td className="px-4 py-3 font-mono font-medium tabular-nums text-[#1E3A8A] whitespace-nowrap">
                                {row.value}
                              </td>
                              <td className="px-4 py-3 text-[#44403C]">
                                {row.context}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              ))}

              {/* Editorial Pull Quote — Hairline top & bottom borders, NO thick left accent */}
              <blockquote className="my-10 border-y border-[#D6D0C4] py-6 text-center">
                <p className="font-serif text-2xl italic leading-relaxed text-[#1C1917]">
                  “{article.pullQuote}”
                </p>
              </blockquote>

              {/* Structured FAQ Section matching FAQPage JSON-LD 1:1 */}
              <section id="faq" aria-label="Frequently Asked Questions" className="scroll-mt-24 pt-2">
                <h2 className="font-serif text-2xl font-semibold text-[#1C1917]">
                  Frequently Asked Questions
                </h2>
                <dl className="mt-5 divide-y divide-[#E2DDD3] border-y border-[#E2DDD3]">
                  {article.faqs.map((faq) => (
                    <div key={faq.question} className="py-5">
                      <dt className="font-serif text-lg font-semibold text-[#1C1917]">
                        {faq.question}
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-[#44403C]">
                        {faq.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>

              {/* Primary Institutional Citations */}
              <section id="citations" aria-label="Primary Sources" className="scroll-mt-24 pt-2">
                <h2 className="font-serif text-xl font-semibold text-[#1C1917]">
                  Primary Sources &amp; References
                </h2>
                <ol className="mt-4 space-y-2.5 text-sm text-[#44403C]">
                  {article.citations.map((cite, idx) => (
                    <li key={cite.title} className="flex items-baseline gap-2.5">
                      <span className="font-mono text-xs tabular-nums text-[#78716C]">
                        [{idx + 1}]
                      </span>
                      <div>
                        <a
                          href={cite.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-medium text-[#1E3A8A] hover:underline"
                        >
                          <span>{cite.title}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                        <span className="text-[#57534E]">
                          {' '}
                          — {cite.publisher} ({cite.year})
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Author E-E-A-T Attribution Box */}
              <section
                aria-label="About the Author"
                className="rounded-md border border-[#D6D0C4] bg-[#F5F1E9] p-6"
              >
                <p className="text-xs font-semibold tracking-wider text-[#57534E] uppercase">
                  Author Provenance
                </p>
                <h3 className="mt-2 font-serif text-xl font-semibold text-[#1C1917]">
                  <a
                    href={`/authors#${author.id}`}
                    onClick={(e) => handleLink(e, `/authors#${author.id}`)}
                    className="hover:text-[#1E3A8A] hover:underline"
                  >
                    {author.name}
                  </a>
                </h3>
                <p className="mt-1 text-xs font-medium text-[#1E3A8A]">
                  {author.role} · {author.credentials}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#44403C]">
                  {author.bio}
                </p>
                <p className="mt-3 text-xs text-[#78716C]">
                  Topics: {article.keywords.join(' · ')}
                </p>
              </section>
            </div>

            {/* Previous / Next Essay Traversal */}
            <nav
              aria-label="Adjacent Essays"
              className="mt-12 grid grid-cols-1 gap-4 border-t border-[#D6D0C4] pt-8 sm:grid-cols-2"
            >
              {prevArticle ? (
                <a
                  href={`/articles/${prevArticle.slug}`}
                  onClick={(e) => handleLink(e, `/articles/${prevArticle.slug}`)}
                  className="group rounded-md border border-[#E2DDD3] p-4 transition-colors hover:border-[#1C1917] hover:bg-[#F5F1E9]"
                >
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#57534E]">
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Essay {String(prevArticle.id).padStart(2, '0')}</span>
                  </span>
                  <p className="mt-1 font-serif text-base font-semibold text-[#1C1917] group-hover:text-[#1E3A8A]">
                    {prevArticle.title}
                  </p>
                </a>
              ) : (
                <div />
              )}

              {nextArticle && (
                <a
                  href={`/articles/${nextArticle.slug}`}
                  onClick={(e) => handleLink(e, `/articles/${nextArticle.slug}`)}
                  className="group rounded-md border border-[#E2DDD3] p-4 text-left transition-colors hover:border-[#1C1917] hover:bg-[#F5F1E9] sm:text-right"
                >
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#57534E]">
                    <span>Essay {String(nextArticle.id).padStart(2, '0')}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                  <p className="mt-1 font-serif text-base font-semibold text-[#1C1917] group-hover:text-[#1E3A8A]">
                    {nextArticle.title}
                  </p>
                </a>
              )}
            </nav>
          </article>

          {/* 30% Margin Rail Aside */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Contents */}
              <div className="border-t border-[#1C1917] pt-4">
                <h2 className="text-xs font-semibold tracking-wider text-[#57534E] uppercase">
                  In This Essay
                </h2>
                <ul className="mt-3 space-y-2.5 text-sm">
                  {article.sections.map((sec, idx) => (
                    <li key={sec.id}>
                      <a
                        href={`#${sec.id}`}
                        className="flex items-baseline gap-2 text-[#44403C] hover:text-[#1E3A8A] hover:underline"
                      >
                        <span className="font-mono text-xs tabular-nums text-[#78716C]">
                          0{idx + 1}.
                        </span>
                        <span>{sec.heading}</span>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#faq"
                      className="flex items-baseline gap-2 text-[#44403C] hover:text-[#1E3A8A] hover:underline"
                    >
                      <span className="font-mono text-xs tabular-nums text-[#78716C]">
                        0{article.sections.length + 1}.
                      </span>
                      <span>Frequently Asked Questions</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#citations"
                      className="flex items-baseline gap-2 text-[#44403C] hover:text-[#1E3A8A] hover:underline"
                    >
                      <span className="font-mono text-xs tabular-nums text-[#78716C]">
                        0{article.sections.length + 2}.
                      </span>
                      <span>Primary Sources</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Active Schema & GEO Signals for this Essay */}
              <div className="rounded-md border border-[#D6D0C4] bg-[#F5F1E9] p-5">
                <h2 className="text-xs font-semibold tracking-wider text-[#57534E] uppercase">
                  Search &amp; Gemini Schema
                </h2>
                <dl className="mt-3 space-y-2.5 text-xs">
                  <div className="flex justify-between gap-2 border-b border-[#E2DDD3] pb-2">
                    <dt className="text-[#57534E]">Graph Entities</dt>
                    <dd className="font-mono text-right text-[#1C1917]">
                      NewsArticle · FAQPage
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2 border-b border-[#E2DDD3] pb-2">
                    <dt className="text-[#57534E]">Canonical Path</dt>
                    <dd className="truncate font-mono text-[#1E3A8A]">
                      /articles/{article.slug}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2 border-b border-[#E2DDD3] pb-2">
                    <dt className="text-[#57534E]">FAQ Pairs</dt>
                    <dd className="font-mono tabular-nums text-[#1C1917]">
                      {article.faqs.length} verified
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-[#57534E]">Citations</dt>
                    <dd className="font-mono tabular-nums text-[#1C1917]">
                      {article.citations.length} primary links
                    </dd>
                  </div>
                </dl>
                <a
                  href="/standards"
                  onClick={(e) => handleLink(e, '/standards')}
                  className="mt-4 inline-block text-xs font-medium text-[#1E3A8A] hover:underline"
                >
                  Inspect JSON-LD in Compliance Center
                </a>
              </div>

              {/* Related Essays */}
              <div className="border-t border-[#D6D0C4] pt-5">
                <h2 className="text-xs font-semibold tracking-wider text-[#57534E] uppercase">
                  Further Reading
                </h2>
                <div className="mt-4 divide-y divide-[#E2DDD3]">
                  {related.map((rel) => {
                    const relSec = SECTIONS_BY_SLUG[rel.section];
                    return (
                      <article key={rel.slug} className="py-3.5 first:pt-0">
                        <p className="text-xs text-[#1E3A8A]">{relSec.shortName}</p>
                        <h3 className="mt-1 font-serif text-base font-semibold leading-snug text-[#1C1917]">
                          <a
                            href={`/articles/${rel.slug}`}
                            onClick={(e) => handleLink(e, `/articles/${rel.slug}`)}
                            className="hover:text-[#1E3A8A] hover:underline"
                          >
                            {rel.title}
                          </a>
                        </h3>
                        <p className="mt-1 text-xs tabular-nums text-[#78716C]">
                          {rel.readTimeMinutes} min read · {rel.updatedAt}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
