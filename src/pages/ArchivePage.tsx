import { useMemo, useState, type MouseEvent } from 'react';
import { ArrowUpRight, Search } from 'lucide-react';
import { ALL_ARTICLES } from '../data/articles.ts';
import { AUTHORS_BY_ID } from '../data/authors.ts';
import { SECTIONS, SECTIONS_BY_SLUG } from '../data/sections.ts';
import type { SectionSlug } from '../types/editorial.ts';
import { EditorialImage } from '../components/EditorialImage.tsx';
import { useDocumentSeo } from '../hooks/useDocumentSeo.ts';
import { buildHomeJsonLd, buildSectionJsonLd } from '../utils/seoSchema.ts';

interface ArchivePageProps {
  sectionSlug?: SectionSlug;
  initialQuery?: string;
  onNavigate: (path: string) => void;
}

type SortOrder = 'id-asc' | 'updated-desc' | 'readtime-asc';

export function ArchivePage({
  sectionSlug,
  initialQuery = '',
  onNavigate,
}: ArchivePageProps) {
  const [query, setQuery] = useState(initialQuery);
  const [sortBy, setSortBy] = useState<SortOrder>('id-asc');

  const activeSection = sectionSlug ? SECTIONS_BY_SLUG[sectionSlug] : undefined;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = activeSection
      ? ALL_ARTICLES.filter((a) => a.section === activeSection.slug)
      : ALL_ARTICLES;

    const searched = q
      ? base.filter((article) => {
          const author = AUTHORS_BY_ID[article.authorId]?.name.toLowerCase() || '';
          return (
            article.title.toLowerCase().includes(q) ||
            article.subtitle.toLowerCase().includes(q) ||
            article.directAnswer.toLowerCase().includes(q) ||
            article.keywords.some((k) => k.toLowerCase().includes(q)) ||
            author.includes(q)
          );
        })
      : base;

    return [...searched].sort((a, b) => {
      if (sortBy === 'updated-desc') {
        return b.updatedAt.localeCompare(a.updatedAt) || a.id - b.id;
      }
      if (sortBy === 'readtime-asc') {
        return a.readTimeMinutes - b.readTimeMinutes || a.id - b.id;
      }
      return a.id - b.id;
    });
  }, [activeSection, query, sortBy]);

  const jsonLd = useMemo(() => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    if (activeSection) {
      return buildSectionJsonLd(activeSection, filtered, baseUrl);
    }
    return buildHomeJsonLd(filtered.slice(0, 20), baseUrl);
  }, [activeSection, filtered]);

  useDocumentSeo({
    title: activeSection
      ? `${activeSection.name} Archive – The Meridian Review`
      : 'Complete 50-Article Archive – The Meridian Review',
    description: activeSection
      ? activeSection.description
      : 'Browse and search all 50 built-in essays across technology, global economy, design, climate science, and digital society.',
    canonicalPath: activeSection ? `/section/${activeSection.slug}` : '/archive',
    imagePath: activeSection
      ? activeSection.image
      : '/src/assets/images/editorial_hero_architecture_1795444152682.jpg',
    jsonLd,
  });

  const handleLink = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#57534E]">
        <a
          href="/"
          onClick={(e) => handleLink(e, '/')}
          className="hover:text-[#1C1917] hover:underline"
        >
          Front Page
        </a>
        <span aria-hidden="true">/</span>
        {activeSection ? (
          <>
            <a
              href="/archive"
              onClick={(e) => handleLink(e, '/archive')}
              className="hover:text-[#1C1917] hover:underline"
            >
              Archive
            </a>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-[#1C1917]">{activeSection.name}</span>
          </>
        ) : (
          <span className="font-medium text-[#1C1917]">Complete Archive (50 Essays)</span>
        )}
      </nav>

      {/* Section / Archive Masthead */}
      <header className="border-b border-[#D6D0C4] pb-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          <div className={activeSection ? 'lg:col-span-8' : 'lg:col-span-12'}>
            <p className="text-xs font-semibold tracking-wider text-[#9A3412] uppercase">
              {activeSection ? 'Editorial Section' : 'Master Index'}
            </p>
            <h1 className="editorial-balance mt-2 font-serif text-3xl font-semibold tracking-tight text-[#1C1917] sm:text-4xl">
              {activeSection ? activeSection.name : 'Complete 50-Article Archive'}
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#44403C]">
              {activeSection
                ? activeSection.description
                : 'Browse the entire inaugural volume of The Meridian Review. Every essay is indexed cleanly for human research, Google Search snippets, and Gemini retrieval.'}
            </p>
            {activeSection && (
              <p className="mt-2 text-xs text-[#57534E]">{activeSection.curatorialNote}</p>
            )}
          </div>

          {activeSection && (
            <div className="lg:col-span-4">
              <div className="overflow-hidden rounded-sm border border-[#E2DDD3]">
                <EditorialImage
                  src={activeSection.image}
                  alt={activeSection.imageAlt}
                  aspectClass="aspect-[4/3]"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Filter & Search Toolbar */}
      <div className="mt-8 flex flex-col gap-4 border-b border-[#E2DDD3] pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-1 rounded-md border border-[#E2DDD3] bg-[#F5F1E9] p-1">
          <a
            href="/archive"
            onClick={(e) => handleLink(e, '/archive')}
            className={`inline-flex min-h-[36px] items-center rounded px-3 py-1.5 text-xs font-medium whitespace-nowrap ${
              !activeSection
                ? 'bg-[#FBF9F5] text-[#1C1917] shadow-xs'
                : 'text-[#57534E] hover:text-[#1C1917]'
            }`}
          >
            All 50
          </a>
          {SECTIONS.map((sec) => (
            <a
              key={sec.slug}
              href={`/section/${sec.slug}`}
              onClick={(e) => handleLink(e, `/section/${sec.slug}`)}
              className={`inline-flex min-h-[36px] items-center rounded px-3 py-1.5 text-xs font-medium whitespace-nowrap ${
                activeSection?.slug === sec.slug
                  ? 'bg-[#FBF9F5] text-[#1C1917] shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              {sec.shortName}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="relative flex items-center">
            <Search className="pointer-events-none absolute left-3 h-3.5 w-3.5 text-[#78716C]" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter by title or topic..."
              aria-label="Filter articles"
              className="min-h-[40px] w-full rounded-md border border-[#D6D0C4] bg-[#FBF9F5] py-2 pr-3 pl-9 text-xs text-[#1C1917] placeholder:text-[#78716C] focus:border-[#1E3A8A] focus:outline-none sm:w-64"
            />
          </label>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOrder)}
            aria-label="Sort archive"
            className="min-h-[40px] rounded-md border border-[#D6D0C4] bg-[#FBF9F5] px-3 py-2 text-xs font-medium text-[#1C1917] focus:border-[#1E3A8A] focus:outline-none"
          >
            <option value="id-asc">Order: Issue 01–50</option>
            <option value="updated-desc">Sort: Latest Updated</option>
            <option value="readtime-asc">Sort: Shortest Read</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mt-4 flex items-center justify-between text-xs text-[#57534E] tabular-nums">
        <span>
          Displaying <strong className="font-semibold text-[#1C1917]">{filtered.length}</strong>{' '}
          {filtered.length === 1 ? 'essay' : 'essays'}
        </span>
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="font-medium text-[#1E3A8A] hover:underline"
          >
            Clear filter
          </button>
        )}
      </div>

      {/* Broadsheet Index Rows */}
      <div className="mt-4 divide-y divide-[#E2DDD3] border-y border-[#E2DDD3]">
        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <p className="font-serif text-xl text-[#1C1917]">No essays matched "{query}".</p>
            <p className="mt-2 text-sm text-[#57534E]">
              Clear your search filter or switch back to All 50 essays.
            </p>
          </div>
        ) : (
          filtered.map((article) => {
            const section = SECTIONS_BY_SLUG[article.section];
            const author = AUTHORS_BY_ID[article.authorId];
            return (
              <article
                key={article.slug}
                className="group grid grid-cols-1 gap-3 py-6 md:grid-cols-12 md:items-start md:gap-6"
              >
                <div className="flex items-center gap-3 md:col-span-3">
                  <span className="font-mono text-xs tabular-nums text-[#78716C]">
                    {String(article.id).padStart(2, '0')}
                  </span>
                  <a
                    href={`/section/${section.slug}`}
                    onClick={(e) => handleLink(e, `/section/${section.slug}`)}
                    className="text-xs font-medium text-[#1E3A8A] hover:underline"
                  >
                    {section.name}
                  </a>
                </div>

                <div className="md:col-span-6">
                  <h2 className="font-serif text-xl font-semibold leading-snug text-[#1C1917]">
                    <a
                      href={`/articles/${article.slug}`}
                      onClick={(e) => handleLink(e, `/articles/${article.slug}`)}
                      className="group-hover:text-[#1E3A8A] transition-colors duration-150"
                    >
                      {article.title}
                    </a>
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#44403C]">
                    {article.directAnswer}
                  </p>
                  <p className="mt-2.5 text-xs text-[#78716C]">
                    Topics: {article.keywords.join(' · ')}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 text-xs text-[#57534E] md:col-span-3 md:justify-end">
                  <div className="text-left md:text-right">
                    <p className="font-medium text-[#1C1917]">{author?.name}</p>
                    <p className="mt-0.5 tabular-nums text-[#78716C]">
                      Updated <time dateTime={article.updatedAt}>{article.updatedAt}</time>
                    </p>
                    <p className="mt-0.5 tabular-nums text-[#78716C]">
                      {article.readTimeMinutes} min · {article.wordCount.toLocaleString()} words
                    </p>
                  </div>
                  <a
                    href={`/articles/${article.slug}`}
                    onClick={(e) => handleLink(e, `/articles/${article.slug}`)}
                    aria-label={`Read ${article.title}`}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#D6D0C4] text-[#1C1917] transition-colors group-hover:border-[#1E3A8A] group-hover:text-[#1E3A8A]"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })
        )}
      </div>
    </main>
  );
}
