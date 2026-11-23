import { useMemo, useState, type MouseEvent } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ALL_ARTICLES } from '../data/articles.ts';
import { AUTHORS_BY_ID } from '../data/authors.ts';
import { SECTIONS, SECTIONS_BY_SLUG } from '../data/sections.ts';
import type { SectionSlug } from '../types/editorial.ts';
import { EditorialImage } from '../components/EditorialImage.tsx';
import { useDocumentSeo } from '../hooks/useDocumentSeo.ts';
import { buildHomeJsonLd } from '../utils/seoSchema.ts';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

const ITEMS_PER_PAGE = 10;

export function HomePage({ onNavigate }: HomePageProps) {
  const [activeSection, setActiveSection] = useState<'all' | SectionSlug>('all');
  const [page, setPage] = useState(1);

  const leadArticle = useMemo(
    () => ALL_ARTICLES.find((a) => a.isLead) ?? ALL_ARTICLES[0],
    [],
  );

  const secondaryFeatures = useMemo(
    () =>
      ALL_ARTICLES.filter((a) => a.featured && a.slug !== leadArticle.slug).slice(0, 3),
    [leadArticle.slug],
  );

  const filteredArchive = useMemo(() => {
    if (activeSection === 'all') return ALL_ARTICLES;
    return ALL_ARTICLES.filter((a) => a.section === activeSection);
  }, [activeSection]);

  const totalPages = Math.max(1, Math.ceil(filteredArchive.length / ITEMS_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const visibleArchive = filteredArchive.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE,
  );

  const homeJsonLd = useMemo(
    () =>
      buildHomeJsonLd(
        [leadArticle, ...secondaryFeatures],
        typeof window !== 'undefined' ? window.location.origin : '',
      ),
    [leadArticle, secondaryFeatures],
  );

  useDocumentSeo({
    title: 'The Meridian Review – Independent Journalism, Research & Analysis',
    description:
      'Explore 50 peer-reviewed essays across technology, global economics, design, climate science, and digital society, engineered for Google Search and Gemini.',
    canonicalPath: '/',
    imagePath: leadArticle.image,
    ogType: 'website',
    jsonLd: homeJsonLd,
  });

  const handleLink = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onNavigate(path);
  };

  const leadAuthor = AUTHORS_BY_ID[leadArticle.authorId];
  const leadSection = SECTIONS_BY_SLUG[leadArticle.section];

  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
      {/* Operational Broadsheet Masthead Strip (inside main, never inside header) */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1C1917] py-3 text-xs text-[#57534E]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-medium text-[#1C1917]">Vol. IV · Issue 47</span>
          <span aria-hidden="true">·</span>
          <time dateTime="2026-11-23">November 23, 2026</time>
          <span aria-hidden="true">·</span>
          <span>Zurich &amp; London Desk</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 tabular-nums">
          <span>50 Peer-Reviewed Essays</span>
          <span aria-hidden="true">·</span>
          <span>Schema.org &amp; llms.txt Verified</span>
        </div>
      </div>

      {/* Tier 1: Dominant Lead Story Asymmetric Hero */}
      <section aria-label="Lead Story" className="border-b border-[#D6D0C4] py-10 lg:py-14">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#57534E]">
                <a
                  href={`/section/${leadSection.slug}`}
                  onClick={(e) => handleLink(e, `/section/${leadSection.slug}`)}
                  className="text-[#1E3A8A] hover:underline"
                >
                  {leadSection.name}
                </a>
                <span aria-hidden="true">·</span>
                <span>Lead Essay</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{leadArticle.readTimeMinutes} min read</span>
              </div>

              <h1 className="editorial-balance mt-4 font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-[#1C1917] sm:text-5xl">
                <a
                  href={`/articles/${leadArticle.slug}`}
                  onClick={(e) => handleLink(e, `/articles/${leadArticle.slug}`)}
                  className="hover:text-[#1E3A8A] transition-colors duration-150"
                >
                  {leadArticle.title}
                </a>
              </h1>

              <p className="mt-5 text-base leading-relaxed text-[#44403C] sm:text-lg">
                {leadArticle.subtitle}
              </p>

              <div className="mt-6 border-y border-[#E2DDD3] py-4">
                <p className="text-xs font-semibold tracking-wider text-[#57534E] uppercase">
                  Direct Summary
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#292524]">
                  {leadArticle.directAnswer}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs text-[#57534E]">
                <p className="font-medium text-[#1C1917]">
                  By{' '}
                  <a
                    href={`/authors#${leadAuthor?.id}`}
                    onClick={(e) => handleLink(e, `/authors#${leadAuthor?.id}`)}
                    className="hover:text-[#1E3A8A] hover:underline"
                  >
                    {leadAuthor?.name}
                  </a>
                </p>
                <p className="mt-0.5 text-[#78716C]">
                  Fact-checked by {leadArticle.reviewerName} · Updated{' '}
                  <time dateTime={leadArticle.updatedAt}>{leadArticle.updatedAt}</time>
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={`/articles/${leadArticle.slug}`}
                  onClick={(e) => handleLink(e, `/articles/${leadArticle.slug}`)}
                  className="inline-flex min-h-[40px] items-center gap-2 rounded-md bg-[#1C1917] px-5 py-2.5 text-xs font-medium text-[#FBF9F5] whitespace-nowrap transition-colors duration-150 hover:bg-[#1E3A8A]"
                >
                  <span>Read Essay</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          <figure className="flex flex-col justify-between lg:col-span-6">
            <a
              href={`/articles/${leadArticle.slug}`}
              onClick={(e) => handleLink(e, `/articles/${leadArticle.slug}`)}
              className="block h-full overflow-hidden rounded-sm border border-[#E2DDD3]"
            >
              <EditorialImage
                src={leadArticle.image}
                alt={leadArticle.imageAlt}
                aspectClass="aspect-[16/10] lg:h-full lg:aspect-auto"
                priority
              />
            </a>
            <figcaption className="mt-2.5 font-serif text-xs italic text-[#57534E]">
              {leadArticle.imageCaption}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Tier 2: Secondary Featured Essays */}
      <section aria-label="Featured Reports" className="border-b border-[#D6D0C4] py-12">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-[#1C1917]">
            Featured Dispatches
          </h2>
          <a
            href="/archive"
            onClick={(e) => handleLink(e, '/archive')}
            className="text-xs font-medium text-[#1E3A8A] hover:underline whitespace-nowrap"
          >
            View All 50 Essays
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {secondaryFeatures.map((article) => {
            const section = SECTIONS_BY_SLUG[article.section];
            const author = AUTHORS_BY_ID[article.authorId];
            return (
              <article key={article.slug} className="group flex flex-col">
                <a
                  href={`/articles/${article.slug}`}
                  onClick={(e) => handleLink(e, `/articles/${article.slug}`)}
                  className="block overflow-hidden rounded-sm border border-[#E2DDD3]"
                >
                  <EditorialImage
                    src={article.image}
                    alt={article.imageAlt}
                    aspectClass="aspect-[4/3]"
                  />
                </a>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-[#57534E]">
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
                  <time dateTime={article.updatedAt}>{article.updatedAt}</time>
                </div>

                <h3 className="editorial-balance mt-2 font-serif text-xl font-semibold leading-snug text-[#1C1917]">
                  <a
                    href={`/articles/${article.slug}`}
                    onClick={(e) => handleLink(e, `/articles/${article.slug}`)}
                    className="group-hover:text-[#1E3A8A] transition-colors duration-150"
                  >
                    {article.title}
                  </a>
                </h3>

                <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-[#57534E]">
                  {article.subtitle}
                </p>

                <p className="mt-4 text-xs font-medium text-[#44403C]">
                  By {author?.name}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Tier 3: Complete 50-Article Broadsheet Index with Section Filters */}
      <section aria-label="50-Article Editorial Index" className="border-b border-[#D6D0C4] py-12">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-[#1C1917]">
              Complete Editorial Index
            </h2>
            <p className="mt-1.5 max-w-2xl text-sm text-[#57534E]">
              Every built-in essay includes an answer-first executive summary, Schema.org graph markup, structured data tables, and primary institutional citations.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter archive by editorial section"
            className="flex flex-wrap items-center gap-1 rounded-md border border-[#E2DDD3] bg-[#F5F1E9] p-1"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeSection === 'all'}
              onClick={() => {
                setActiveSection('all');
                setPage(1);
              }}
              className={`min-h-[36px] rounded px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                activeSection === 'all'
                  ? 'bg-[#FBF9F5] text-[#1C1917] shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              All Essays (50)
            </button>
            {SECTIONS.map((sec) => (
              <button
                key={sec.slug}
                type="button"
                role="tab"
                aria-selected={activeSection === sec.slug}
                onClick={() => {
                  setActiveSection(sec.slug);
                  setPage(1);
                }}
                className={`min-h-[36px] rounded px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  activeSection === sec.slug
                    ? 'bg-[#FBF9F5] text-[#1C1917] shadow-xs'
                    : 'text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                {sec.shortName}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 divide-y divide-[#E2DDD3] border-y border-[#E2DDD3]">
          {visibleArchive.map((article) => {
            const section = SECTIONS_BY_SLUG[article.section];
            const author = AUTHORS_BY_ID[article.authorId];
            return (
              <article
                key={article.slug}
                className="group grid grid-cols-1 gap-3 py-5 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <div className="flex items-center gap-3 md:col-span-3">
                  <span className="font-mono text-xs tabular-nums text-[#78716C]">
                    {String(article.id).padStart(2, '0')}
                  </span>
                  <a
                    href={`/section/${section.slug}`}
                    onClick={(e) => handleLink(e, `/section/${section.slug}`)}
                    className="text-xs font-medium text-[#1E3A8A] hover:underline whitespace-nowrap"
                  >
                    {section.name}
                  </a>
                </div>

                <div className="md:col-span-6">
                  <h3 className="font-serif text-lg font-semibold leading-snug text-[#1C1917]">
                    <a
                      href={`/articles/${article.slug}`}
                      onClick={(e) => handleLink(e, `/articles/${article.slug}`)}
                      className="group-hover:text-[#1E3A8A] transition-colors duration-150"
                    >
                      {article.title}
                    </a>
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-[#57534E]">
                    {article.directAnswer}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 text-xs text-[#57534E] md:col-span-3 md:justify-end">
                  <div className="text-left md:text-right">
                    <p className="font-medium text-[#292524]">{author?.name}</p>
                    <p className="tabular-nums text-[#78716C]">
                      {article.updatedAt} · {article.readTimeMinutes} min
                    </p>
                  </div>
                  <a
                    href={`/articles/${article.slug}`}
                    onClick={(e) => handleLink(e, `/articles/${article.slug}`)}
                    aria-label={`Read ${article.title}`}
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#E2DDD3] text-[#44403C] transition-colors group-hover:border-[#1E3A8A] group-hover:text-[#1E3A8A]"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Clean Pagination */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-[#57534E] tabular-nums">
            Showing {(safePage - 1) * ITEMS_PER_PAGE + 1}–
            {Math.min(safePage * ITEMS_PER_PAGE, filteredArchive.length)} of{' '}
            {filteredArchive.length} essays
          </p>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              disabled={safePage <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="inline-flex min-h-[36px] items-center gap-1 rounded border border-[#D6D0C4] px-3 py-1.5 text-xs font-medium text-[#1C1917] disabled:opacity-40 hover:bg-[#F5F1E9]"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <span>Previous</span>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                type="button"
                onClick={() => setPage(pageNum)}
                className={`min-h-[36px] min-w-[36px] rounded border px-2.5 py-1.5 font-mono text-xs tabular-nums transition-colors ${
                  pageNum === safePage
                    ? 'border-[#1C1917] bg-[#1C1917] text-[#FBF9F5]'
                    : 'border-[#D6D0C4] text-[#44403C] hover:bg-[#F5F1E9]'
                }`}
              >
                {pageNum}
              </button>
            ))}

            <button
              type="button"
              disabled={safePage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="inline-flex min-h-[36px] items-center gap-1 rounded border border-[#D6D0C4] px-3 py-1.5 text-xs font-medium text-[#1C1917] disabled:opacity-40 hover:bg-[#F5F1E9]"
            >
              <span>Next</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Section Architecture & SEO/GEO Standards Strip */}
      <section aria-label="Search and Gemini Architecture" className="pt-12">
        <div className="grid grid-cols-1 gap-8 rounded-md border border-[#D6D0C4] bg-[#F5F1E9] p-6 sm:p-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-wider text-[#9A3412] uppercase">
              Editorial &amp; Technical Standards
            </p>
            <h2 className="editorial-balance mt-2 font-serif text-2xl font-semibold text-[#1C1917] sm:text-3xl">
              Engineered for Google Search E-E-A-T and Gemini Grounding
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#44403C]">
              Every route serves server-injected canonical metadata, linked NewsArticle and FAQPage JSON-LD graphs, verified author credentials, XML image sitemaps, and clean Markdown directories at /llms.txt.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <a
              href="/standards"
              onClick={(e) => handleLink(e, '/standards')}
              className="inline-flex min-h-[40px] items-center gap-2 rounded-md bg-[#1E3A8A] px-5 py-2.5 text-xs font-medium text-white whitespace-nowrap transition-colors hover:bg-[#172D6B]"
            >
              <span>Inspect Live SEO &amp; GEO</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="/authors"
              onClick={(e) => handleLink(e, '/authors')}
              className="inline-flex min-h-[40px] items-center rounded-md border border-[#D6D0C4] bg-[#FBF9F5] px-5 py-2.5 text-xs font-medium text-[#1C1917] whitespace-nowrap transition-colors hover:border-[#1C1917]"
            >
              Editorial Board
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
