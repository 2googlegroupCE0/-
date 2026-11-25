import { useEffect, useMemo, useState, type MouseEvent } from 'react';
import { ArrowUpRight, Search } from 'lucide-react';
import type { Locale, SectionSlug } from '../types/editorial.ts';
import { UI_COPY } from '../data/i18n.ts';
import {
  CHINA_INDUSTRIES,
  CHINA_INDUSTRY_GROUPS,
  CHINA_LLM_PLATFORMS,
  getLocalizedAuthorById,
  getLocalizedSectionBySlug,
  getLocalizedSections,
  queryArticles,
  withLocalePrefix,
  type ArticleSortOrder,
} from '../data/articlesLocalized.ts';
import { EditorialImage } from '../components/EditorialImage.tsx';
import { LanguageSwitch } from '../components/LanguageSwitch.tsx';
import { PaginationBar } from '../components/PaginationBar.tsx';
import { useDocumentSeo } from '../hooks/useDocumentSeo.ts';
import { buildHomeJsonLd, buildSectionJsonLd } from '../utils/seoSchema.ts';

interface ArchivePageProps {
  locale: Locale;
  sectionSlug?: SectionSlug;
  initialQuery?: string;
  initialAuthorId?: string;
  initialIndustry?: string;
  initialPlatform?: string;
  onNavigate: (path: string) => void;
}

const PAGE_SIZE = 20;

export function ArchivePage({
  locale,
  sectionSlug,
  initialQuery = '',
  initialAuthorId = '',
  initialIndustry = '',
  initialPlatform = '',
  onNavigate,
}: ArchivePageProps) {
  const [query, setQuery] = useState(initialQuery);
  const [authorFilter, setAuthorFilter] = useState(initialAuthorId);
  const [industryGroupFilter, setIndustryGroupFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState(initialIndustry);
  const [platformFilter, setPlatformFilter] = useState(initialPlatform);
  const [sortBy, setSortBy] = useState<ArticleSortOrder>('id-asc');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setQuery(initialQuery);
    setAuthorFilter(initialAuthorId);
    setIndustryGroupFilter('');
    setIndustryFilter(initialIndustry);
    setPlatformFilter(initialPlatform);
    setPage(1);
  }, [initialQuery, initialAuthorId, initialIndustry, initialPlatform, sectionSlug]);

  const copy = UI_COPY[locale];
  const sections = useMemo(() => getLocalizedSections(locale), [locale]);
  const activeSection = sectionSlug
    ? getLocalizedSectionBySlug(sectionSlug, locale)
    : undefined;
  const showChinaFilters = !activeSection || activeSection.slug === 'china-llm-geo';

  const basePath = activeSection ? `/section/${activeSection.slug}` : '/archive';

  const result = useMemo(
    () =>
      queryArticles({
        locale,
        section: activeSection?.slug ?? 'all',
        industry: showChinaFilters && industryFilter ? industryFilter : undefined,
        industryGroup: showChinaFilters && industryGroupFilter ? industryGroupFilter : undefined,
        platform: showChinaFilters && platformFilter ? platformFilter : undefined,
        authorId: authorFilter || undefined,
        query,
        sort: sortBy,
        page,
        pageSize: PAGE_SIZE,
      }),
    [
      locale,
      activeSection,
      showChinaFilters,
      industryFilter,
      industryGroupFilter,
      platformFilter,
      authorFilter,
      query,
      sortBy,
      page,
    ],
  );

  const jsonLd = useMemo(() => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    if (activeSection) {
      return buildSectionJsonLd(activeSection, result.items, baseUrl, locale);
    }
    return buildHomeJsonLd(result.items.slice(0, 12), baseUrl, locale);
  }, [activeSection, result.items, locale]);

  useDocumentSeo({
    title: activeSection
      ? locale === 'zh'
        ? `${activeSection.name} – SEO 与 GEO 研究院`
        : `${activeSection.name} – SEO & GEO Research Institute`
      : locale === 'zh'
        ? 'SEO 与 GEO 文献资料库 – SEO 与 GEO 研究院'
        : 'Research Library – SEO & GEO Research Institute',
    description: activeSection ? activeSection.description : copy.archiveDesc,
    basePath,
    locale,
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

  const activeAuthor = authorFilter
    ? getLocalizedAuthorById(authorFilter, locale)
    : undefined;
  const activeIndustryObj = industryFilter
    ? CHINA_INDUSTRIES.find((i) => i.key === industryFilter)
    : undefined;
  const activePlatformObj = platformFilter
    ? CHINA_LLM_PLATFORMS.find((p) => p.key === platformFilter)
    : undefined;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#57534E]">
          <a
            href={withLocalePrefix('/', locale)}
            onClick={(e) => handleLink(e, withLocalePrefix('/', locale))}
            className="hover:text-[#1C1917] hover:underline"
          >
            {copy.navFrontPage}
          </a>
          <span aria-hidden="true">/</span>
          {activeSection ? (
            <>
              <a
                href={withLocalePrefix('/archive', locale)}
                onClick={(e) => handleLink(e, withLocalePrefix('/archive', locale))}
                className="hover:text-[#1C1917] hover:underline"
              >
                {copy.navArchive}
              </a>
              <span aria-hidden="true">/</span>
              <span className="font-medium text-[#1C1917]">{activeSection.name}</span>
            </>
          ) : (
            <span className="font-medium text-[#1C1917]">{copy.navArchive}</span>
          )}
        </nav>

        <LanguageSwitch locale={locale} basePath={basePath} onNavigate={onNavigate} />
      </div>

      {/* Section / Archive Masthead */}
      <header className="border-b border-[#D6D0C4] pb-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          <div className={activeSection ? 'lg:col-span-8' : 'lg:col-span-12'}>
            <p className="text-xs font-semibold tracking-wider text-[#9A3412] uppercase">
              {activeSection ? copy.sectionEyebrow : copy.archiveEyebrow}
            </p>
            <h1 className="editorial-balance mt-2 font-serif text-3xl font-semibold tracking-tight text-[#1C1917] sm:text-4xl">
              {activeSection ? activeSection.name : copy.archiveTitle}
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#44403C]">
              {activeSection ? activeSection.description : copy.archiveDesc}
            </p>
            {activeSection && (
              <p className="mt-2 text-xs text-[#57534E]">{activeSection.curatorialNote}</p>
            )}
            {showChinaFilters && (
              <div className="mt-4">
                <a
                  href={`${withLocalePrefix('/tools', locale)}${industryFilter ? `?industry=${industryFilter}` : ''}`}
                  onClick={(e) =>
                    handleLink(
                      e,
                      `${withLocalePrefix('/tools', locale)}${industryFilter ? `?industry=${industryFilter}` : ''}`,
                    )
                  }
                  className="inline-flex min-h-[36px] items-center gap-1.5 rounded-md border border-[#D6D0C4] bg-[#F5F1E9] px-3.5 py-1.5 text-xs font-medium text-[#1E3A8A] transition-colors hover:border-[#1E3A8A]"
                >
                  <span>
                    {locale === 'zh'
                      ? '前往「GEO 工具」一键生成 Schema 与排查广告违禁词 →'
                      : 'Open GEO Audit & Schema Generator Toolkit →'}
                  </span>
                </a>
              </div>
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
      <div className="mt-8 flex flex-col gap-4 border-b border-[#E2DDD3] pb-6">
        <div className="flex flex-wrap items-center gap-1 rounded-md border border-[#E2DDD3] bg-[#F5F1E9] p-1">
          <a
            href={withLocalePrefix('/archive', locale)}
            onClick={(e) => handleLink(e, withLocalePrefix('/archive', locale))}
            className={`inline-flex min-h-[36px] items-center rounded px-3 py-1.5 text-xs font-medium whitespace-nowrap ${
              !activeSection
                ? 'bg-[#FBF9F5] text-[#1C1917] shadow-xs'
                : 'text-[#57534E] hover:text-[#1C1917]'
            }`}
          >
            {copy.allCorpusChip}
          </a>
          {sections.map((sec) => {
            const href = withLocalePrefix(`/section/${sec.slug}`, locale);
            return (
              <a
                key={sec.slug}
                href={href}
                onClick={(e) => handleLink(e, href)}
                className={`inline-flex min-h-[36px] items-center rounded px-3 py-1.5 text-xs font-medium whitespace-nowrap ${
                  activeSection?.slug === sec.slug
                    ? 'bg-[#FBF9F5] text-[#1C1917] shadow-xs'
                    : 'text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                {sec.shortName}
              </a>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <label className="relative flex min-w-[220px] flex-1 items-center">
            <Search className="pointer-events-none absolute left-3 h-3.5 w-3.5 text-[#78716C]" />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder={copy.filterPlaceholder}
              aria-label={copy.filterPlaceholder}
              className="min-h-[40px] w-full rounded-md border border-[#D6D0C4] bg-[#FBF9F5] py-2 pr-3 pl-9 text-xs text-[#1C1917] placeholder:text-[#78716C] focus:border-[#1E3A8A] focus:outline-none"
            />
          </label>

          {showChinaFilters && (
            <>
              <select
                value={industryFilter}
                onChange={(e) => {
                  setIndustryFilter(e.target.value);
                  setPage(1);
                }}
                aria-label={copy.industryFilterLabel}
                className="min-h-[40px] max-w-full rounded-md border border-[#D6D0C4] bg-[#FBF9F5] px-3 py-2 text-xs font-medium text-[#1C1917] focus:border-[#1E3A8A] focus:outline-none sm:max-w-[240px]"
              >
                <option value="">{copy.allIndustriesOption}</option>
                {CHINA_INDUSTRY_GROUPS.map((grp) => (
                  <optgroup key={grp.zh} label={locale === 'zh' ? grp.zh : grp.en}>
                    {CHINA_INDUSTRIES.filter((ind) => ind.groupZh === grp.zh).map((ind) => (
                      <option key={ind.key} value={ind.key}>
                        {locale === 'zh' ? ind.zh : ind.en}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>

              <select
                value={platformFilter}
                onChange={(e) => {
                  setPlatformFilter(e.target.value);
                  setPage(1);
                }}
                aria-label={copy.platformFilterLabel}
                className="min-h-[40px] rounded-md border border-[#D6D0C4] bg-[#FBF9F5] px-3 py-2 text-xs font-medium text-[#1C1917] focus:border-[#1E3A8A] focus:outline-none"
              >
                <option value="">{copy.allPlatformsOption}</option>
                {CHINA_LLM_PLATFORMS.map((plat) => (
                  <option key={plat.key} value={plat.key}>
                    {locale === 'zh' ? plat.zh : plat.en}
                  </option>
                ))}
              </select>
            </>
          )}

          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value as ArticleSortOrder);
              setPage(1);
            }}
            aria-label="Sort archive"
            className="min-h-[40px] rounded-md border border-[#D6D0C4] bg-[#FBF9F5] px-3 py-2 text-xs font-medium text-[#1C1917] focus:border-[#1E3A8A] focus:outline-none"
          >
            <option value="id-asc">{copy.sortOrderId}</option>
            <option value="updated-desc">{copy.sortOrderUpdated}</option>
            <option value="readtime-asc">{copy.sortOrderReadTime}</option>
          </select>
        </div>

        {showChinaFilters && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1" role="group" aria-label={locale === 'zh' ? '按全行业大门类筛选' : 'Filter by national economy sector group'}>
            <button
              type="button"
              onClick={() => {
                setIndustryGroupFilter('');
                setIndustryFilter('');
                setPlatformFilter('');
                setPage(1);
              }}
              className={`min-h-[30px] rounded-sm border px-2.5 py-1 text-xs font-medium transition-colors ${
                !industryGroupFilter
                  ? 'border-[#1C1917] bg-[#1C1917] text-[#FBF9F5]'
                  : 'border-[#D6D0C4] bg-[#FBF9F5] text-[#44403C] hover:border-[#1C1917]'
              }`}
            >
              {locale === 'zh' ? '全部 20 大门类 (150 行业)' : 'All 20 Sectors (150 Verticals)'}
            </button>
            {CHINA_INDUSTRY_GROUPS.map((grp) => {
              const count = CHINA_INDUSTRIES.filter((ind) => ind.groupZh === grp.zh).length;
              const isActive = industryGroupFilter === grp.zh;
              return (
                <button
                  key={grp.zh}
                  type="button"
                  onClick={() => {
                    setIndustryGroupFilter(isActive ? '' : grp.zh);
                    setIndustryFilter('');
                    setPlatformFilter('');
                    setPage(1);
                  }}
                  className={`min-h-[30px] rounded-sm border px-2.5 py-1 text-xs font-medium transition-colors ${
                    isActive
                      ? 'border-[#1E3A8A] bg-[#1E3A8A] text-white'
                      : 'border-[#D6D0C4] bg-[#FBF9F5] text-[#44403C] hover:border-[#1E3A8A]'
                  }`}
                >
                  {locale === 'zh' ? `${grp.zh} (${count})` : `${grp.en} (${count})`}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[#57534E] tabular-nums">
        <div className="flex flex-wrap items-center gap-3">
          <span>{copy.displayingCount(result.totalMatched)}</span>
          {industryGroupFilter && (
            <span className="font-medium text-[#1E3A8A]">{industryGroupFilter}</span>
          )}
          {activeIndustryObj && (
            <span className="font-medium text-[#1E3A8A]">
              {locale === 'zh' ? activeIndustryObj.zh : activeIndustryObj.en}
            </span>
          )}
          {activePlatformObj && (
            <span className="font-medium text-[#9A3412]">
              {locale === 'zh' ? activePlatformObj.shortZh : activePlatformObj.shortEn}
            </span>
          )}
          {activeAuthor && (
            <span className="font-medium text-[#1E3A8A]">
              {copy.authorFilterPrefix}
              {activeAuthor.name}
            </span>
          )}
        </div>
        {(query || authorFilter || industryGroupFilter || industryFilter || platformFilter) && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setAuthorFilter('');
              setIndustryGroupFilter('');
              setIndustryFilter('');
              setPlatformFilter('');
              setPage(1);
            }}
            className="font-medium text-[#1E3A8A] hover:underline"
          >
            {copy.clearFilter}
          </button>
        )}
      </div>

      {/* Broadsheet Index Rows */}
      <div className="mt-4 divide-y divide-[#E2DDD3] border-y border-[#E2DDD3]">
        {result.items.length === 0 ? (
          <div className="py-16 text-center">
            <p className="font-serif text-xl text-[#1C1917]">
              {copy.noMatchedEssays(query)}
            </p>
            <p className="mt-2 text-sm text-[#57534E]">{copy.noMatchedHint}</p>
          </div>
        ) : (
          result.items.map((article) => {
            const section = getLocalizedSectionBySlug(article.section, locale);
            const author = getLocalizedAuthorById(article.authorId, locale);
            const articleHref = withLocalePrefix(`/articles/${article.slug}`, locale);
            const secHref = withLocalePrefix(`/section/${section.slug}`, locale);
            return (
              <article
                key={article.slug}
                className="group grid grid-cols-1 gap-3 py-6 md:grid-cols-12 md:items-start md:gap-6"
              >
                <div className="flex items-center gap-3 md:col-span-3">
                  <span className="font-mono text-xs tabular-nums text-[#78716C]">
                    {String(article.id).padStart(5, '0')}
                  </span>
                  <a
                    href={secHref}
                    onClick={(e) => handleLink(e, secHref)}
                    className="text-xs font-medium text-[#1E3A8A] hover:underline"
                  >
                    {section.name}
                  </a>
                </div>

                <div className="md:col-span-6">
                  <h2 className="font-serif text-xl font-semibold leading-snug text-[#1C1917]">
                    <a
                      href={articleHref}
                      onClick={(e) => handleLink(e, articleHref)}
                      className="transition-colors duration-150 group-hover:text-[#1E3A8A]"
                    >
                      {article.title}
                    </a>
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#44403C]">
                    {article.directAnswer}
                  </p>
                  <p className="mt-2.5 text-xs text-[#78716C]">
                    {copy.topicsLabel}
                    {article.keywords.join(' · ')}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 text-xs text-[#57534E] md:col-span-3 md:justify-end">
                  <div className="text-left md:text-right">
                    <p className="font-medium text-[#1C1917]">{author.name}</p>
                    <p className="mt-0.5 tabular-nums text-[#78716C]">
                      {copy.updatedLabel}{' '}
                      <time dateTime={article.updatedAt}>{article.updatedAt}</time>
                    </p>
                    <p className="mt-0.5 tabular-nums text-[#78716C]">
                      {copy.minRead(article.readTimeMinutes)} ·{' '}
                      {copy.wordsLabel(article.wordCount)}
                    </p>
                  </div>
                  <a
                    href={articleHref}
                    onClick={(e) => handleLink(e, articleHref)}
                    aria-label={`${copy.readEssay}: ${article.title}`}
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

      <PaginationBar
        locale={locale}
        page={result.page}
        pageSize={PAGE_SIZE}
        totalItems={result.totalMatched}
        totalPages={result.totalPages}
        onPageChange={(nextPage) => {
          setPage(nextPage);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </main>
  );
}
