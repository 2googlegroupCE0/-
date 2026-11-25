import { useMemo, type MouseEvent } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Locale } from '../types/editorial.ts';
import { UI_COPY } from '../data/i18n.ts';
import {
  getAuthorArticleCount,
  getLocalizedAuthors,
  getLocalizedSectionBySlug,
  queryArticles,
  withLocalePrefix,
} from '../data/articlesLocalized.ts';
import { LanguageSwitch } from '../components/LanguageSwitch.tsx';
import { useDocumentSeo } from '../hooks/useDocumentSeo.ts';
import { buildAuthorsJsonLd } from '../utils/seoSchema.ts';

interface AuthorsPageProps {
  locale: Locale;
  onNavigate: (path: string) => void;
}

export function AuthorsPage({ locale, onNavigate }: AuthorsPageProps) {
  const copy = UI_COPY[locale];
  const authors = useMemo(() => getLocalizedAuthors(locale), [locale]);

  const jsonLd = useMemo(
    () =>
      buildAuthorsJsonLd(
        typeof window !== 'undefined' ? window.location.origin : '',
        locale,
      ),
    [locale],
  );

  useDocumentSeo({
    title:
      locale === 'zh'
        ? '研究团队与审校委员会 – SEO 与 GEO 研究院'
        : 'Research Board & Editors – SEO & GEO Research Institute',
    description: copy.authorsDesc,
    basePath: '/authors',
    locale,
    imagePath: '/src/assets/images/section_science_climate_1795444152521.jpg',
    jsonLd,
  });

  const handleLink = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onNavigate(path);
  };

  const homeHref = withLocalePrefix('/', locale);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#57534E]">
          <a
            href={homeHref}
            onClick={(e) => handleLink(e, homeHref)}
            className="hover:text-[#1C1917] hover:underline"
          >
            {copy.navFrontPage}
          </a>
          <span aria-hidden="true">/</span>
          <span className="font-medium text-[#1C1917]">{copy.navAuthors}</span>
        </nav>

        <LanguageSwitch locale={locale} basePath="/authors" onNavigate={onNavigate} />
      </div>

      <header className="border-b border-[#D6D0C4] pb-8">
        <p className="text-xs font-semibold tracking-wider text-[#9A3412] uppercase">
          {copy.authorsEyebrow}
        </p>
        <h1 className="editorial-balance mt-2 font-serif text-3xl font-semibold tracking-tight text-[#1C1917] sm:text-4xl">
          {copy.authorsTitle}
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#44403C]">
          {copy.authorsDesc}
        </p>
      </header>

      <div className="mt-10 divide-y divide-[#D6D0C4]">
        {authors.map((author) => {
          const totalCount = getAuthorArticleCount(author.id);
          const samplePapers = queryArticles({
            locale,
            authorId: author.id,
            page: 1,
            pageSize: 6,
          }).items;
          const authorArchiveHref = `${withLocalePrefix('/archive', locale)}?author=${author.id}`;

          return (
            <section
              key={author.id}
              id={author.id}
              className="scroll-mt-24 py-10 first:pt-2"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <p className="text-xs font-medium text-[#1E3A8A]">{author.beat}</p>
                  <h2 className="mt-1 font-serif text-2xl font-semibold text-[#1C1917]">
                    {author.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-[#44403C]">
                    {author.role}
                  </p>

                  <dl className="mt-5 divide-y divide-[#E2DDD3] border-y border-[#E2DDD3] text-xs">
                    <div className="flex justify-between gap-4 py-2.5">
                      <dt className="text-[#57534E]">{copy.credentialsLabel}</dt>
                      <dd className="text-right font-medium text-[#1C1917]">
                        {author.credentials}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 py-2.5">
                      <dt className="text-[#57534E]">{copy.affiliationLabel}</dt>
                      <dd className="text-right font-medium text-[#1C1917]">
                        {author.affiliation}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 py-2.5">
                      <dt className="text-[#57534E]">{copy.deskLocationLabel}</dt>
                      <dd className="text-right font-medium text-[#1C1917]">
                        {author.location}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 py-2.5">
                      <dt className="text-[#57534E]">{copy.publishedEssaysLabel}</dt>
                      <dd className="text-right font-mono tabular-nums font-medium text-[#1C1917]">
                        {totalCount.toLocaleString()}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="lg:col-span-7">
                  <p className="text-base leading-relaxed text-[#292524]">
                    {author.bio}
                  </p>

                  <h3 className="mt-6 text-xs font-semibold tracking-wider text-[#57534E] uppercase">
                    {copy.publishedDispatchesCount(totalCount)}
                  </h3>
                  <ul className="mt-3 divide-y divide-[#E2DDD3] border-y border-[#E2DDD3]">
                    {samplePapers.map((article) => {
                      const sec = getLocalizedSectionBySlug(article.section, locale);
                      const articleHref = withLocalePrefix(`/articles/${article.slug}`, locale);
                      return (
                        <li key={article.slug}>
                          <a
                            href={articleHref}
                            onClick={(e) => handleLink(e, articleHref)}
                            className="group flex items-baseline justify-between gap-4 py-3 text-sm transition-colors hover:text-[#1E3A8A]"
                          >
                            <div className="min-w-0">
                              <span className="mr-2.5 font-mono text-xs tabular-nums text-[#78716C]">
                                {String(article.id).padStart(5, '0')}
                              </span>
                              <span className="font-serif font-medium text-[#1C1917] group-hover:text-[#1E3A8A]">
                                {article.title}
                              </span>
                              <span className="ml-2 text-xs text-[#78716C]">
                                ({sec.shortName})
                              </span>
                            </div>
                            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[#78716C] group-hover:text-[#1E3A8A]" />
                          </a>
                        </li>
                      );
                    })}
                  </ul>

                  <a
                    href={authorArchiveHref}
                    onClick={(e) => handleLink(e, authorArchiveHref)}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-[#1E3A8A] hover:underline"
                  >
                    <span>{copy.viewAuthorCorpus(totalCount)}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
