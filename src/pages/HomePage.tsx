import { useMemo, useState, type MouseEvent } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Locale, SectionSlug } from '../types/editorial.ts';
import { UI_COPY } from '../data/i18n.ts';
import {
  CHINA_INDUSTRIES,
  buildSlugForId,
  getFeaturedArticles,
  getLocalizedAuthorById,
  getLocalizedSectionBySlug,
  getLocalizedSections,
  queryArticles,
  withLocalePrefix,
} from '../data/articlesLocalized.ts';
import { EditorialImage } from '../components/EditorialImage.tsx';
import { LanguageSwitch } from '../components/LanguageSwitch.tsx';
import { PaginationBar } from '../components/PaginationBar.tsx';
import { useDocumentSeo } from '../hooks/useDocumentSeo.ts';
import { buildHomeJsonLd } from '../utils/seoSchema.ts';

interface HomePageProps {
  locale: Locale;
  onNavigate: (path: string) => void;
}

const ITEMS_PER_PAGE = 10;

export function HomePage({ locale, onNavigate }: HomePageProps) {
  const [activeSection, setActiveSection] = useState<'all' | SectionSlug>('all');
  const [page, setPage] = useState(1);

  const copy = UI_COPY[locale];
  const sections = useMemo(() => getLocalizedSections(locale), [locale]);
  const featuredList = useMemo(() => getFeaturedArticles(locale, 4), [locale]);

  const leadArticle = featuredList[0];
  const secondaryFeatures = featuredList.slice(1, 4);

  const pageResult = useMemo(
    () =>
      queryArticles({
        locale,
        section: activeSection,
        page,
        pageSize: ITEMS_PER_PAGE,
      }),
    [locale, activeSection, page],
  );

  const homeJsonLd = useMemo(
    () =>
      buildHomeJsonLd(
        featuredList,
        typeof window !== 'undefined' ? window.location.origin : '',
        locale,
      ),
    [featuredList, locale],
  );

  useDocumentSeo({
    title:
      locale === 'zh'
        ? 'SEO 与 GEO 研究院 – 搜索引擎与生成式引擎优化实证论文库'
        : 'SEO & GEO Research Institute – Search & Generative Engine Studies',
    description:
      locale === 'zh'
        ? 'SEO 与 GEO 研究院专注于搜索引擎工程（SEO）与生成式引擎优化（GEO），提供涵盖技术架构、结构化数据、内容质量与搜索增长的系统化研究。'
        : 'The SEO & GEO Research Institute publishes bilingual empirical studies across Technical SEO, Generative Engine Optimization, Structured Semantics, and Search Analytics.',
    basePath: '/',
    locale,
    imagePath: leadArticle.image,
    ogType: 'website',
    jsonLd: homeJsonLd,
  });

  const handleLink = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onNavigate(path);
  };

  const leadAuthor = getLocalizedAuthorById(leadArticle.authorId, locale);
  const leadSection = getLocalizedSectionBySlug(leadArticle.section, locale);
  const leadHref = withLocalePrefix(`/articles/${leadArticle.slug}`, locale);
  const leadSectionHref = withLocalePrefix(`/section/${leadSection.slug}`, locale);
  const leadAuthorHref = `${withLocalePrefix('/authors', locale)}#${leadAuthor.id}`;

  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
      {/* Operational Broadsheet Masthead Strip with Bilingual Switch */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1C1917] py-3 text-xs text-[#57534E]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-medium text-[#1C1917]">{copy.mastheadVolume}</span>
          <span aria-hidden="true">·</span>
          <time dateTime="2026-11-24">{copy.mastheadDate}</time>
          <span aria-hidden="true">·</span>
          <span>{copy.mastheadLocation}</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 tabular-nums">
          <span className="hidden sm:inline">{copy.mastheadEssaysCount}</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <LanguageSwitch locale={locale} basePath="/" onNavigate={onNavigate} />
        </div>
      </div>

      {/* Tier 1: Dominant Lead Story Asymmetric Hero */}
      <section aria-label={copy.leadBadge} className="border-b border-[#D6D0C4] py-10 lg:py-14">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#57534E]">
                <a
                  href={leadSectionHref}
                  onClick={(e) => handleLink(e, leadSectionHref)}
                  className="text-[#1E3A8A] hover:underline"
                >
                  {leadSection.name}
                </a>
                <span aria-hidden="true">·</span>
                <span>{copy.leadBadge}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{copy.minRead(leadArticle.readTimeMinutes)}</span>
              </div>

              <h1 className="editorial-balance mt-4 font-serif text-3xl font-semibold leading-[1.18] tracking-tight text-[#1C1917] sm:text-4xl lg:text-[2.75rem]">
                <a
                  href={leadHref}
                  onClick={(e) => handleLink(e, leadHref)}
                  className="transition-colors duration-150 hover:text-[#1E3A8A]"
                >
                  {leadArticle.title}
                </a>
              </h1>

              <p className="mt-5 text-base leading-relaxed text-[#44403C] sm:text-lg">
                {leadArticle.subtitle}
              </p>

              <div className="mt-6 border-y border-[#E2DDD3] py-4">
                <p className="text-xs font-semibold tracking-wider text-[#57534E] uppercase">
                  {copy.directSummaryLabel}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#292524]">
                  {leadArticle.directAnswer}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs text-[#57534E]">
                <p className="font-medium text-[#1C1917]">
                  {copy.byLabel}
                  <a
                    href={leadAuthorHref}
                    onClick={(e) => handleLink(e, leadAuthorHref)}
                    className="hover:text-[#1E3A8A] hover:underline"
                  >
                    {leadAuthor.name}
                  </a>
                </p>
                <p className="mt-0.5 text-[#78716C]">
                  {copy.factCheckedBy(leadArticle.reviewerName)} · {copy.updatedLabel}{' '}
                  <time dateTime={leadArticle.updatedAt}>{leadArticle.updatedAt}</time>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={leadHref}
                  onClick={(e) => handleLink(e, leadHref)}
                  className="inline-flex min-h-[40px] items-center gap-2 rounded-md bg-[#1C1917] px-5 py-2.5 text-xs font-medium text-[#FBF9F5] whitespace-nowrap transition-colors duration-150 hover:bg-[#1E3A8A]"
                >
                  <span>{copy.readEssay}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={withLocalePrefix('/tools', locale)}
                  onClick={(e) => handleLink(e, withLocalePrefix('/tools', locale))}
                  className="inline-flex min-h-[40px] items-center rounded-md border border-[#D6D0C4] bg-[#F5F1E9] px-4 py-2.5 text-xs font-medium text-[#1C1917] whitespace-nowrap transition-colors duration-150 hover:border-[#1C1917]"
                >
                  {copy.editorialBoardCta}
                </a>
              </div>
            </div>
          </div>

          <figure className="flex flex-col justify-between lg:col-span-6">
            <a
              href={leadHref}
              onClick={(e) => handleLink(e, leadHref)}
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
      <section aria-label={copy.featuredDispatches} className="border-b border-[#D6D0C4] py-12">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-[#1C1917]">
            {copy.featuredDispatches}
          </h2>
          <a
            href={withLocalePrefix('/archive', locale)}
            onClick={(e) => handleLink(e, withLocalePrefix('/archive', locale))}
            className="text-xs font-medium text-[#1E3A8A] hover:underline whitespace-nowrap"
          >
            {copy.viewAllCorpus}
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {secondaryFeatures.map((article) => {
            const section = getLocalizedSectionBySlug(article.section, locale);
            const author = getLocalizedAuthorById(article.authorId, locale);
            const articleHref = withLocalePrefix(`/articles/${article.slug}`, locale);
            const secHref = withLocalePrefix(`/section/${section.slug}`, locale);
            return (
              <article key={article.slug} className="group flex flex-col">
                <a
                  href={articleHref}
                  onClick={(e) => handleLink(e, articleHref)}
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
                    href={secHref}
                    onClick={(e) => handleLink(e, secHref)}
                    className="font-medium text-[#1E3A8A] hover:underline"
                  >
                    {section.name}
                  </a>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{copy.minRead(article.readTimeMinutes)}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={article.updatedAt}>{article.updatedAt}</time>
                </div>

                <h3 className="editorial-balance mt-2 font-serif text-xl font-semibold leading-snug text-[#1C1917]">
                  <a
                    href={articleHref}
                    onClick={(e) => handleLink(e, articleHref)}
                    className="transition-colors duration-150 group-hover:text-[#1E3A8A]"
                  >
                    {article.title}
                  </a>
                </h3>

                <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-[#57534E]">
                  {article.subtitle}
                </p>

                <p className="mt-4 text-xs font-medium text-[#44403C]">
                  {copy.byLabel}
                  {author.name}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Tier 3: Curated 175-Guide Index with Division Tabs & Pagination */}
      <section aria-label={copy.completeIndexTitle} className="border-b border-[#D6D0C4] py-12">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-[#1C1917]">
              {copy.completeIndexTitle}
            </h2>
            <p className="mt-1.5 max-w-2xl text-sm text-[#57534E]">
              {copy.completeIndexDesc}
            </p>
          </div>

          <div
            role="tablist"
            aria-label={copy.completeIndexTitle}
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
              {copy.allEssaysTab}
            </button>
            {sections.map((sec) => (
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

        {/* Direct internal links to flagship China industry pillar guides across sectors */}
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#E2DDD3] pt-4 text-xs">
          <span className="font-medium text-[#57534E]">{copy.quickIndustriesTitle}</span>
          {[
            'tcm-clinic',
            'foot-spa',
            'catering-dining',
            'mining-equipment',
            'robotics-automation',
            'custom-software-dev',
            'ai-knowledge-deploy',
            'ip-trademark-patent',
            'health-checkup-center',
            'industry-association',
          ].map((key) => {
            const idx = CHINA_INDUSTRIES.findIndex((i) => i.key === key);
            if (idx === -1) return null;
            const ind = CHINA_INDUSTRIES[idx];
            const href = withLocalePrefix(`/articles/${buildSlugForId(idx + 1)}`, locale);
            return (
              <a
                key={ind.key}
                href={href}
                onClick={(e) => handleLink(e, href)}
                className="text-[#44403C] transition-colors hover:text-[#1E3A8A] hover:underline whitespace-nowrap"
              >
                {locale === 'zh' ? ind.zh : ind.en}
              </a>
            );
          })}
          <a
            href={withLocalePrefix('/section/china-llm-geo', locale)}
            onClick={(e) => handleLink(e, withLocalePrefix('/section/china-llm-geo', locale))}
            className="font-medium text-[#1E3A8A] hover:underline whitespace-nowrap"
          >
            {copy.browseAllIndustries}
          </a>
        </div>

        <div className="mt-6 divide-y divide-[#E2DDD3] border-y border-[#E2DDD3]">
          {pageResult.items.map((article) => {
            const section = getLocalizedSectionBySlug(article.section, locale);
            const author = getLocalizedAuthorById(article.authorId, locale);
            const articleHref = withLocalePrefix(`/articles/${article.slug}`, locale);
            const secHref = withLocalePrefix(`/section/${section.slug}`, locale);
            return (
              <article
                key={article.slug}
                className="group grid grid-cols-1 gap-3 py-5 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <div className="flex items-center gap-3 md:col-span-3">
                  <span className="font-mono text-xs tabular-nums text-[#78716C]">
                    {String(article.id).padStart(5, '0')}
                  </span>
                  <a
                    href={secHref}
                    onClick={(e) => handleLink(e, secHref)}
                    className="text-xs font-medium text-[#1E3A8A] hover:underline whitespace-nowrap"
                  >
                    {section.name}
                  </a>
                </div>

                <div className="md:col-span-6">
                  <h3 className="font-serif text-lg font-semibold leading-snug text-[#1C1917]">
                    <a
                      href={articleHref}
                      onClick={(e) => handleLink(e, articleHref)}
                      className="transition-colors duration-150 group-hover:text-[#1E3A8A]"
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
                    <p className="font-medium text-[#292524]">{author.name}</p>
                    <p className="tabular-nums text-[#78716C]">
                      {article.updatedAt} · {copy.minRead(article.readTimeMinutes)}
                    </p>
                  </div>
                  <a
                    href={articleHref}
                    onClick={(e) => handleLink(e, articleHref)}
                    aria-label={`${copy.readEssay}: ${article.title}`}
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#E2DDD3] text-[#44403C] transition-colors group-hover:border-[#1E3A8A] group-hover:text-[#1E3A8A]"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <PaginationBar
          locale={locale}
          page={pageResult.page}
          pageSize={ITEMS_PER_PAGE}
          totalItems={pageResult.totalMatched}
          totalPages={pageResult.totalPages}
          onPageChange={setPage}
        />
      </section>

      {/* Section Architecture & SEO/GEO Standards Strip */}
      <section aria-label={copy.standardsEyebrow} className="pt-12">
        <div className="grid grid-cols-1 gap-8 rounded-md border border-[#D6D0C4] bg-[#F5F1E9] p-6 sm:p-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-wider text-[#9A3412] uppercase">
              {copy.standardsEyebrow}
            </p>
            <h2 className="editorial-balance mt-2 font-serif text-2xl font-semibold text-[#1C1917] sm:text-3xl">
              {copy.standardsBannerTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#44403C]">
              {copy.standardsBannerDesc}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <a
              href={withLocalePrefix('/standards', locale)}
              onClick={(e) => handleLink(e, withLocalePrefix('/standards', locale))}
              className="inline-flex min-h-[40px] items-center gap-2 rounded-md bg-[#1E3A8A] px-5 py-2.5 text-xs font-medium text-white whitespace-nowrap transition-colors hover:bg-[#172D6B]"
            >
              <span>{copy.inspectStandardsCta}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={withLocalePrefix('/tools', locale)}
              onClick={(e) => handleLink(e, withLocalePrefix('/tools', locale))}
              className="inline-flex min-h-[40px] items-center rounded-md border border-[#D6D0C4] bg-[#FBF9F5] px-5 py-2.5 text-xs font-medium text-[#1C1917] whitespace-nowrap transition-colors hover:border-[#1C1917]"
            >
              {copy.editorialBoardCta}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
