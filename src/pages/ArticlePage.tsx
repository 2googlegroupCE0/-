import { useEffect, useMemo, useState, type MouseEvent } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import type { Article, Locale } from '../types/editorial.ts';
import { UI_COPY } from '../data/i18n.ts';
import {
  getAdjacentArticles,
  getLocalizedAuthorById,
  getLocalizedSectionBySlug,
  getRelatedLocalizedArticles,
  withLocalePrefix,
} from '../data/articlesLocalized.ts';
import { EditorialImage } from '../components/EditorialImage.tsx';
import { LanguageSwitch } from '../components/LanguageSwitch.tsx';
import { useDocumentSeo } from '../hooks/useDocumentSeo.ts';
import { buildArticleJsonLd } from '../utils/seoSchema.ts';

interface ArticlePageProps {
  article: Article;
  locale: Locale;
  onNavigate: (path: string) => void;
}

export function ArticlePage({ article, locale, onNavigate }: ArticlePageProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  const copy = UI_COPY[locale];
  const author = getLocalizedAuthorById(article.authorId, locale);
  const section = getLocalizedSectionBySlug(article.section, locale);
  const related = useMemo(
    () => getRelatedLocalizedArticles(article, locale, 3),
    [article, locale],
  );
  const { prev: prevArticle, next: nextArticle } = useMemo(
    () => getAdjacentArticles(article.id, locale),
    [article.id, locale],
  );

  const basePath = `/articles/${article.slug}`;

  const jsonLd = useMemo(
    () =>
      buildArticleJsonLd(
        article,
        typeof window !== 'undefined' ? window.location.origin : '',
        locale,
      ),
    [article, locale],
  );

  useDocumentSeo({
    title:
      locale === 'zh'
        ? `${article.title} – SEO 与 GEO 研究院`
        : `${article.title} – SEO & GEO Research Institute`,
    description: article.directAnswer.slice(0, 158),
    basePath,
    locale,
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

  const homeHref = withLocalePrefix('/', locale);
  const sectionHref = withLocalePrefix(`/section/${section.slug}`, locale);
  const authorHref = `${withLocalePrefix('/authors', locale)}#${author.id}`;

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed top-16 left-0 z-30 h-0.5 bg-[#1E3A8A] transition-[width] duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs text-[#57534E]"
          >
            <a
              href={homeHref}
              onClick={(e) => handleLink(e, homeHref)}
              className="hover:text-[#1C1917] hover:underline"
            >
              {copy.navFrontPage}
            </a>
            <span aria-hidden="true">/</span>
            <a
              href={sectionHref}
              onClick={(e) => handleLink(e, sectionHref)}
              className="text-[#1E3A8A] hover:underline"
            >
              {section.name}
            </a>
            <span aria-hidden="true">/</span>
            <span className="max-w-xs truncate font-mono text-[#1C1917] sm:max-w-md">
              #{String(article.id).padStart(5, '0')}
            </span>
          </nav>

          <LanguageSwitch locale={locale} basePath={basePath} onNavigate={onNavigate} />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Primary 70% Narrative Column */}
          <article className="lg:col-span-8">
            <header className="border-b border-[#D6D0C4] pb-8">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#57534E]">
                <span className="font-mono tabular-nums text-[#78716C]">
                  {copy.essayNumberOfCorpus(article.id)}
                </span>
                <span aria-hidden="true">·</span>
                <a
                  href={sectionHref}
                  onClick={(e) => handleLink(e, sectionHref)}
                  className="font-medium text-[#1E3A8A] hover:underline"
                >
                  {section.name}
                </a>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{copy.minRead(article.readTimeMinutes)}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{copy.wordsLabel(article.wordCount)}</span>
              </div>

              <h1 className="editorial-balance mt-4 font-serif text-3xl font-semibold leading-[1.18] tracking-tight text-[#1C1917] sm:text-4xl lg:text-[2.75rem]">
                {article.title}
              </h1>

              <p className="mt-4 text-lg leading-relaxed text-[#44403C]">
                {article.subtitle}
              </p>

              {/* E-E-A-T Byline & Reviewer Bar */}
              <div className="mt-6 flex flex-col gap-2 pt-2 text-xs text-[#57534E] sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="font-semibold text-[#1C1917]">{copy.byLabel}</span>
                  <a
                    href={authorHref}
                    onClick={(e) => handleLink(e, authorHref)}
                    className="font-semibold text-[#1C1917] hover:text-[#1E3A8A] hover:underline"
                  >
                    {author.name}
                  </a>
                  <span> — {author.credentials}</span>
                </div>
                <div className="tabular-nums text-[#78716C]">
                  {copy.publishedLabel}{' '}
                  <time dateTime={article.publishedAt}>{article.publishedAt}</time> ·{' '}
                  {copy.updatedLabel}{' '}
                  <time dateTime={article.updatedAt}>{article.updatedAt}</time>
                </div>
              </div>
              <p className="mt-1 text-xs text-[#78716C]">
                {copy.factCheckedBy(article.reviewerName)}
              </p>
            </header>

            {/* Answer-First GEO Executive Summary Box */}
            <section
              aria-label={copy.execSummaryTitle}
              className="mt-8 rounded-md border border-[#D6D0C4] bg-[#F5F1E9] p-6"
            >
              <h2 className="text-xs font-semibold tracking-wider text-[#9A3412] uppercase">
                {copy.execSummaryTitle}
              </h2>
              <p className="mt-2.5 text-base leading-relaxed text-[#1C1917]">
                {article.directAnswer}
              </p>

              <h3 className="mt-5 text-xs font-semibold tracking-wider text-[#57534E] uppercase">
                {copy.keyFindingsTitle}
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

            {/* Long-Form Essay Narrative Body */}
            <div className="mt-10 max-w-[68ch] space-y-10">
              {article.sections.map((sec, sIdx) => (
                <section key={sec.id} id={sec.id} className="scroll-mt-24">
                  <h2 className="editorial-balance font-serif text-2xl font-semibold leading-snug text-[#1C1917]">
                    {sec.heading}
                  </h2>
                  <div className="mt-4 space-y-5 text-[16px] leading-[1.82] text-[#292524]">
                    {sec.paragraphs.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className={
                          locale === 'en' && sIdx === 0 && pIdx === 0
                            ? 'editorial-dropcap'
                            : ''
                        }
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {sec.codeSnippet && (
                    <div className="mt-6 overflow-hidden rounded-md border border-[#D6D0C4] bg-[#F5F1E9]">
                      <div className="border-b border-[#D6D0C4] px-4 py-2 text-xs font-medium text-[#57534E]">
                        {sec.codeSnippet.label}
                      </div>
                      <pre className="overflow-x-auto bg-[#FBF9F5] p-4 font-mono text-xs leading-relaxed text-[#1C1917]">
                        <code>{sec.codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}

                  {sec.metrics && sec.metrics.length > 0 && (
                    <div className="mt-6 overflow-x-auto rounded-md border border-[#D6D0C4]">
                      <table className="w-full border-collapse text-left text-sm">
                        <thead>
                          <tr className="border-b border-[#D6D0C4] bg-[#F5F1E9] text-xs font-semibold text-[#57534E] uppercase">
                            <th className="px-4 py-3">{copy.indicatorCol}</th>
                            <th className="px-4 py-3">{copy.benchmarkCol}</th>
                            <th className="px-4 py-3">{copy.contextCol}</th>
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

              {/* Contextual Utility Toolkit Card */}
              <div className="my-8 rounded-md border border-[#D6D0C4] bg-[#F5F1E9] p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-[#9A3412] uppercase">
                      {locale === 'zh' ? '免费实操工具 · 一键生成与合规自检' : 'Interactive GEO Toolkit'}
                    </p>
                    <p className="mt-1 font-serif text-lg font-semibold text-[#1C1917]">
                      {locale === 'zh'
                        ? '生成本行业 Schema.org JSON-LD 与透明价目 HTML 模板'
                        : 'Generate Industry Schema.org JSON-LD & Price Table HTML'}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#44403C]">
                      {locale === 'zh'
                        ? '支持实时排查广告法高风险极限词，导出结构化代码、Markdown 文案模板及 /llms.txt 清单。'
                        : 'Scan draft claims for compliance risks and export production-ready Schema, HTML tables, and /llms.txt.'}
                    </p>
                  </div>
                  <a
                    href={`${withLocalePrefix('/tools', locale)}${article.industryKey ? `?industry=${article.industryKey}` : ''}`}
                    onClick={(e) =>
                      handleLink(
                        e,
                        `${withLocalePrefix('/tools', locale)}${article.industryKey ? `?industry=${article.industryKey}` : ''}`,
                      )
                    }
                    className="inline-flex min-h-[40px] shrink-0 items-center gap-2 rounded-md bg-[#1E3A8A] px-4 py-2 text-xs font-medium text-white whitespace-nowrap transition-colors hover:bg-[#172D6B]"
                  >
                    <span>{locale === 'zh' ? '打开 GEO 工具' : 'Launch Toolkit'}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Editorial Pull Quote */}
              <blockquote className="my-10 border-y border-[#D6D0C4] py-6 text-center">
                <p className="font-serif text-xl italic leading-relaxed text-[#1C1917] sm:text-2xl">
                  “{article.pullQuote}”
                </p>
              </blockquote>

              {/* Structured FAQ Section matching FAQPage JSON-LD 1:1 */}
              <section id="faq" aria-label={copy.faqTitle} className="scroll-mt-24 pt-2">
                <h2 className="font-serif text-2xl font-semibold text-[#1C1917]">
                  {copy.faqTitle}
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
              <section id="citations" aria-label={copy.citationsTitle} className="scroll-mt-24 pt-2">
                <h2 className="font-serif text-xl font-semibold text-[#1C1917]">
                  {copy.citationsTitle}
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
                aria-label={copy.authorProvenanceTitle}
                className="rounded-md border border-[#D6D0C4] bg-[#F5F1E9] p-6"
              >
                <p className="text-xs font-semibold tracking-wider text-[#57534E] uppercase">
                  {copy.authorProvenanceTitle}
                </p>
                <h3 className="mt-2 font-serif text-xl font-semibold text-[#1C1917]">
                  <a
                    href={authorHref}
                    onClick={(e) => handleLink(e, authorHref)}
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
                  {copy.topicsLabel}
                  {article.keywords.join(' · ')}
                </p>
              </section>
            </div>

            {/* Previous / Next Essay Traversal */}
            <nav
              aria-label="Adjacent Papers"
              className="mt-12 grid grid-cols-1 gap-4 border-t border-[#D6D0C4] pt-8 sm:grid-cols-2"
            >
              {prevArticle ? (
                <a
                  href={withLocalePrefix(`/articles/${prevArticle.slug}`, locale)}
                  onClick={(e) =>
                    handleLink(e, withLocalePrefix(`/articles/${prevArticle.slug}`, locale))
                  }
                  className="group rounded-md border border-[#E2DDD3] p-4 transition-colors hover:border-[#1C1917] hover:bg-[#F5F1E9]"
                >
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#57534E]">
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span className="font-mono">{String(prevArticle.id).padStart(5, '0')}</span>
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
                  href={withLocalePrefix(`/articles/${nextArticle.slug}`, locale)}
                  onClick={(e) =>
                    handleLink(e, withLocalePrefix(`/articles/${nextArticle.slug}`, locale))
                  }
                  className="group rounded-md border border-[#E2DDD3] p-4 text-left transition-colors hover:border-[#1C1917] hover:bg-[#F5F1E9] sm:text-right"
                >
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#57534E]">
                    <span className="font-mono">{String(nextArticle.id).padStart(5, '0')}</span>
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
              <div className="border-t border-[#1C1917] pt-4">
                <h2 className="text-xs font-semibold tracking-wider text-[#57534E] uppercase">
                  {copy.inThisEssay}
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
                      <span>{copy.faqTitle}</span>
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
                      <span>{copy.citationsTitle}</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="border-t border-[#D6D0C4] pt-5">
                <h2 className="text-xs font-semibold tracking-wider text-[#57534E] uppercase">
                  {copy.furtherReading}
                </h2>
                <div className="mt-4 divide-y divide-[#E2DDD3]">
                  {related.map((rel) => {
                    const relSec = getLocalizedSectionBySlug(rel.section, locale);
                    const relHref = withLocalePrefix(`/articles/${rel.slug}`, locale);
                    return (
                      <article key={rel.slug} className="py-3.5 first:pt-0">
                        <p className="text-xs text-[#1E3A8A]">{relSec.shortName}</p>
                        <h3 className="mt-1 font-serif text-base font-semibold leading-snug text-[#1C1917]">
                          <a
                            href={relHref}
                            onClick={(e) => handleLink(e, relHref)}
                            className="hover:text-[#1E3A8A] hover:underline"
                          >
                            {rel.title}
                          </a>
                        </h3>
                        <p className="mt-1 text-xs tabular-nums text-[#78716C]">
                          #{String(rel.id).padStart(5, '0')} · {copy.minRead(rel.readTimeMinutes)}
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
