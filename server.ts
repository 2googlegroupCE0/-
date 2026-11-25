import express from 'express';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import {
  CHINA_INDUSTRIES,
  TOTAL_ARTICLE_COUNT,
  getArticleById,
  getArticleBySlug,
  getCorpusStats,
  getFeaturedArticles,
  getLocalizedAuthorById,
  getLocalizedAuthors,
  getLocalizedSectionBySlug,
  getLocalizedSections,
  getRelatedLocalizedArticles,
  queryArticles,
  resolveLegacySlugRedirect,
  stripLocalePrefix,
  withLocalePrefix,
} from './src/data/articlesLocalized.ts';
import type { Locale, SectionSlug } from './src/types/editorial.ts';
import { UI_COPY } from './src/data/i18n.ts';
import {
  buildArticleJsonLd,
  buildAuthorsJsonLd,
  buildHomeJsonLd,
  buildSectionJsonLd,
  buildStandardsJsonLd,
  buildToolsJsonLd,
} from './src/utils/seoSchema.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = Number(process.env.PORT || 3000);
const IS_PROD = process.env.NODE_ENV === 'production';

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeXml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function getBaseUrl(req: express.Request): string {
  if (process.env.APP_URL && process.env.APP_URL !== 'MY_APP_URL') {
    return process.env.APP_URL.replace(/\/+$/, '');
  }
  const proto = req.headers['x-forwarded-proto'] || req.protocol || 'http';
  const host = req.headers['x-forwarded-host'] || req.get('host') || `localhost:${PORT}`;
  return `${proto}://${host}`;
}

function wrapSsrShell(locale: Locale, mainHtml: string): string {
  const copy = UI_COPY[locale];
  const sections = getLocalizedSections(locale);
  const navLinks = [
    { label: copy.navFrontPage, path: withLocalePrefix('/', locale) },
    { label: copy.navArchive, path: withLocalePrefix('/archive', locale) },
    { label: copy.navTools, path: withLocalePrefix('/tools', locale) },
    { label: copy.navAuthors, path: withLocalePrefix('/authors', locale) },
    { label: copy.navStandards, path: withLocalePrefix('/standards', locale) },
  ];

  return `
<div class="flex min-h-screen flex-col bg-[#FBF9F5] text-[#1C1917]">
  <header class="border-b border-[#E2DDD3] bg-[#FBF9F5]">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
      <a href="${escapeHtml(withLocalePrefix('/', locale))}" class="font-serif text-xl font-semibold tracking-tight text-[#1C1917]">${escapeHtml(copy.brandName)}</a>
      <nav aria-label="Primary Navigation" class="hidden md:flex items-center gap-7 text-sm font-medium text-[#57534E]">
        ${navLinks.map((n) => `<a href="${escapeHtml(n.path)}">${escapeHtml(n.label)}</a>`).join('')}
      </nav>
    </div>
  </header>
  <div class="flex-1">
    ${mainHtml}
  </div>
  <footer class="border-t border-[#D6D0C4] bg-[#F5F1E9] text-[#1C1917]">
    <div class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <p class="font-serif text-lg font-semibold">${escapeHtml(copy.brandName)}</p>
      <p class="mt-2 text-sm text-[#57534E]">${escapeHtml(copy.footerDesc)}</p>
      <ul class="mt-4 flex flex-wrap gap-4 text-xs text-[#44403C]">
        ${sections.map((s) => `<li><a href="${escapeHtml(withLocalePrefix(`/section/${s.slug}`, locale))}">${escapeHtml(s.name)}</a></li>`).join('')}
      </ul>
      <p class="mt-4 text-xs text-[#78716C]">${escapeHtml(copy.footerCopyright)}</p>
    </div>
  </footer>
</div>`.trim();
}

interface RouteMeta {
  statusCode: 200 | 404;
  locale: Locale;
  basePath: string;
  title: string;
  description: string;
  canonicalPath: string;
  ogType: string;
  imagePath: string;
  jsonLd: Record<string, unknown>;
  ssrBodyHtml: string;
}

function resolveRouteMeta(reqPath: string, baseUrl: string): RouteMeta {
  const { locale, basePath } = stripLocalePrefix(reqPath);
  const copy = UI_COPY[locale];
  const authors = getLocalizedAuthors(locale);
  const sections = getLocalizedSections(locale);

  if (basePath.startsWith('/articles/')) {
    const slug = basePath.replace('/articles/', '');
    const article = getArticleBySlug(slug, locale);
    if (article) {
      const author = getLocalizedAuthorById(article.authorId, locale);
      const section = getLocalizedSectionBySlug(article.section, locale);
      const related = getRelatedLocalizedArticles(article, locale, 3);
      const canonicalPath = withLocalePrefix(`/articles/${article.slug}`, locale);
      const mainHtml = `
        <main class="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          <article>
            <header class="border-b border-[#D6D0C4] pb-6">
              <p class="text-xs text-[#57534E]">
                <a href="${escapeHtml(withLocalePrefix('/', locale))}">${escapeHtml(copy.navFrontPage)}</a>
                · <a href="${escapeHtml(withLocalePrefix(`/section/${section.slug}`, locale))}">${escapeHtml(section.name)}</a>
                · #${String(article.id).padStart(5, '0')} · <time datetime="${escapeHtml(article.publishedAt)}">${escapeHtml(article.publishedAt)}</time> · ${article.readTimeMinutes} min · ${escapeHtml(copy.wordsLabel(article.wordCount))}
              </p>
              <h1 class="mt-3 font-serif text-3xl font-semibold text-[#1C1917]">${escapeHtml(article.title)}</h1>
              <p class="mt-3 text-base text-[#44403C]">${escapeHtml(article.subtitle)}</p>
              <p class="mt-3 text-xs text-[#57534E]">${escapeHtml(copy.byLabel)}<a href="${escapeHtml(withLocalePrefix('/authors', locale))}#${escapeHtml(author.id)}">${escapeHtml(author.name)}</a> — ${escapeHtml(author.credentials)} · ${escapeHtml(copy.factCheckedBy(article.reviewerName))}</p>
            </header>
            <section class="mt-6 rounded-md border border-[#D6D0C4] bg-[#F5F1E9] p-5">
              <h2 class="text-xs font-semibold uppercase text-[#9A3412]">${escapeHtml(copy.execSummaryTitle)}</h2>
              <p class="mt-2 text-base text-[#1C1917]">${escapeHtml(article.directAnswer)}</p>
              <ul class="mt-3 space-y-1 text-sm text-[#292524]">
                ${article.keyTakeaways.map((k) => `<li>${escapeHtml(k)}</li>`).join('')}
              </ul>
            </section>
            <figure class="mt-6">
              <img src="${escapeHtml(article.image)}" alt="${escapeHtml(article.imageAlt)}" class="w-full rounded-sm border border-[#E2DDD3] object-cover" loading="eager" />
              <figcaption class="mt-2 font-serif text-xs italic text-[#57534E]">${escapeHtml(article.imageCaption)}</figcaption>
            </figure>
            <div class="mt-8 space-y-8">
              ${article.sections
                .map(
                  (sec) => `
                <section id="${escapeHtml(sec.id)}">
                  <h2 class="font-serif text-2xl font-semibold text-[#1C1917]">${escapeHtml(sec.heading)}</h2>
                  ${sec.paragraphs.map((p) => `<p class="mt-3 leading-relaxed text-[#292524]">${escapeHtml(p)}</p>`).join('')}
                  ${
                    sec.codeSnippet
                      ? `<pre class="mt-4 overflow-x-auto rounded border border-[#D6D0C4] bg-[#F5F1E9] p-4 font-mono text-xs"><code>${escapeHtml(sec.codeSnippet.code)}</code></pre>`
                      : ''
                  }
                  ${
                    sec.metrics && sec.metrics.length > 0
                      ? `<table class="mt-4 w-full border-collapse border border-[#D6D0C4] text-left text-sm"><thead><tr><th class="border border-[#D6D0C4] px-3 py-2">${escapeHtml(copy.indicatorCol)}</th><th class="border border-[#D6D0C4] px-3 py-2">${escapeHtml(copy.benchmarkCol)}</th><th class="border border-[#D6D0C4] px-3 py-2">${escapeHtml(copy.contextCol)}</th></tr></thead><tbody>${sec.metrics
                          .map(
                            (m) =>
                              `<tr><td class="border border-[#D6D0C4] px-3 py-2">${escapeHtml(m.label)}</td><td class="border border-[#D6D0C4] px-3 py-2">${escapeHtml(m.value)}</td><td class="border border-[#D6D0C4] px-3 py-2">${escapeHtml(m.context)}</td></tr>`,
                          )
                          .join('')}</tbody></table>`
                      : ''
                  }
                </section>`,
                )
                .join('')}
              <section id="faq">
                <h2 class="font-serif text-2xl font-semibold text-[#1C1917]">${escapeHtml(copy.faqTitle)}</h2>
                <dl class="mt-4 space-y-4">
                  ${article.faqs
                    .map(
                      (f) => `
                    <div>
                      <dt class="font-serif text-lg font-semibold text-[#1C1917]">${escapeHtml(f.question)}</dt>
                      <dd class="mt-1 text-sm text-[#44403C]">${escapeHtml(f.answer)}</dd>
                    </div>`,
                    )
                    .join('')}
                </dl>
              </section>
              <section id="citations">
                <h2 class="font-serif text-xl font-semibold text-[#1C1917]">${escapeHtml(copy.citationsTitle)}</h2>
                <ol class="mt-3 space-y-2 text-sm text-[#44403C]">
                  ${article.citations
                    .map(
                      (c) =>
                        `<li><a href="${escapeHtml(c.url)}" rel="noopener noreferrer">${escapeHtml(c.title)}</a> — ${escapeHtml(c.publisher)} (${escapeHtml(c.year)})</li>`,
                    )
                    .join('')}
                </ol>
              </section>
              <aside aria-label="${escapeHtml(copy.furtherReading)}" class="border-t border-[#D6D0C4] pt-6">
                <h2 class="font-serif text-xl font-semibold text-[#1C1917]">${escapeHtml(copy.furtherReading)}</h2>
                <ul class="mt-3 space-y-2 text-sm">
                  ${related
                    .map(
                      (r) =>
                        `<li><a href="${escapeHtml(withLocalePrefix(`/articles/${r.slug}`, locale))}" class="text-[#1E3A8A] hover:underline">#${String(r.id).padStart(5, '0')} ${escapeHtml(r.title)}</a></li>`,
                    )
                    .join('')}
                  <li><a href="${escapeHtml(withLocalePrefix('/tools', locale))}${article.industryKey ? `?industry=${escapeHtml(article.industryKey)}` : ''}" class="font-medium text-[#9A3412] hover:underline">${escapeHtml(locale === 'zh' ? '使用免费全行业 GEO 体检与 Schema 代码生成工具' : 'Launch Interactive Industry GEO Audit & Schema Generator')}</a></li>
                </ul>
              </aside>
            </div>
          </article>
        </main>`;
      return {
        statusCode: 200,
        locale,
        basePath: `/articles/${article.slug}`,
        title:
          locale === 'zh'
            ? `${article.title} – SEO 与 GEO 研究院`
            : `${article.title} – SEO & GEO Research Institute`,
        description: article.directAnswer.slice(0, 158),
        canonicalPath,
        ogType: 'article',
        imagePath: article.image,
        jsonLd: buildArticleJsonLd(article, baseUrl, locale),
        ssrBodyHtml: wrapSsrShell(locale, mainHtml),
      };
    }
  }

  if (basePath.startsWith('/section/')) {
    const slug = basePath.replace('/section/', '') as SectionSlug;
    const validSection = sections.find((s) => s.slug === slug);
    if (validSection) {
      const allInSection = queryArticles({
        locale,
        section: slug,
        page: 1,
        pageSize: TOTAL_ARTICLE_COUNT,
      });
      const canonicalPath = withLocalePrefix(`/section/${validSection.slug}`, locale);
      const mainHtml = `
        <main class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 class="font-serif text-3xl font-semibold text-[#1C1917]">${escapeHtml(validSection.name)}</h1>
          <p class="mt-3 text-base text-[#44403C]">${escapeHtml(validSection.description)}</p>
          <ul class="mt-6 divide-y divide-[#E2DDD3]">
            ${allInSection.items
              .map(
                (a) =>
                  `<li class="py-4"><a href="${escapeHtml(withLocalePrefix(`/articles/${a.slug}`, locale))}" class="font-serif text-lg font-semibold text-[#1C1917]">${escapeHtml(a.title)}</a><p class="mt-1 text-sm text-[#57534E]">${escapeHtml(a.directAnswer)}</p></li>`,
              )
              .join('')}
          </ul>
        </main>`;
      return {
        statusCode: 200,
        locale,
        basePath: `/section/${validSection.slug}`,
        title:
          locale === 'zh'
            ? `${validSection.name} – SEO 与 GEO 研究院`
            : `${validSection.name} – SEO & GEO Research Institute`,
        description: validSection.description,
        canonicalPath,
        ogType: 'website',
        imagePath: validSection.image,
        jsonLd: buildSectionJsonLd(validSection, allInSection.items, baseUrl, locale),
        ssrBodyHtml: wrapSsrShell(locale, mainHtml),
      };
    }
  }

  if (basePath === '/tools') {
    const canonicalPath = withLocalePrefix('/tools', locale);
    const mainHtml = `
      <main class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 class="font-serif text-3xl font-semibold text-[#1C1917]">${
          locale === 'zh'
            ? '中国全行业 GEO 体检与 Schema 代码生成器'
            : 'China Industry GEO Audit & Schema.org Generator'
        }</h1>
        <p class="mt-3 text-base text-[#44403C]">${
          locale === 'zh'
            ? '支持中国全行业 150 个细分领域在线扫描广告法高风险极限词、评估 6 项 GEO 准备度，并免费生成 Schema.org JSON-LD、透明价目 HTML 表格与 /llms.txt 清单。'
            : 'Interactive toolkit across 150 China verticals for compliance claim checking, readiness checklists, Schema.org JSON-LD, and HTML pricing tables.'
        }</p>
        <ul class="mt-6 grid grid-cols-2 gap-2 text-sm text-[#44403C] sm:grid-cols-4">
          ${CHINA_INDUSTRIES.slice(0, 12)
            .map(
              (ind, i) =>
                `<li><a href="${escapeHtml(withLocalePrefix(`/articles/guide-${String(i + 1).padStart(5, '0')}-${ind.key}-china-llm-geo`, locale))}">${escapeHtml(locale === 'zh' ? ind.zh : ind.en)}</a></li>`,
            )
            .join('')}
        </ul>
      </main>`;
    return {
      statusCode: 200,
      locale,
      basePath: '/tools',
      title:
        locale === 'zh'
          ? '全行业 GEO 体检与 Schema 代码生成器 – SEO 与 GEO 研究院'
          : 'GEO Audit & Schema Generator – SEO & GEO Research Institute',
      description:
        locale === 'zh'
          ? '实时排查广告法违禁词并一键生成 Schema.org JSON-LD、透明价目 HTML 表格与 /llms.txt。'
          : 'Live advertising claim audit and exportable Schema.org JSON-LD, HTML tables, and /llms.txt generator.',
      canonicalPath,
      ogType: 'website',
      imagePath: '/src/assets/images/section_design_craft_1795444152910.jpg',
      jsonLd: buildToolsJsonLd(baseUrl, locale),
      ssrBodyHtml: wrapSsrShell(locale, mainHtml),
    };
  }

  if (basePath === '/authors') {
    const canonicalPath = withLocalePrefix('/authors', locale);
    const mainHtml = `
      <main class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 class="font-serif text-3xl font-semibold text-[#1C1917]">${escapeHtml(copy.authorsTitle)}</h1>
        <p class="mt-3 text-base text-[#44403C]">${escapeHtml(copy.authorsDesc)}</p>
        <div class="mt-8 space-y-6">
          ${authors
            .map(
              (au) => `
            <section id="${escapeHtml(au.id)}" class="border-b border-[#E2DDD3] pb-6">
              <h2 class="font-serif text-xl font-semibold text-[#1C1917]">${escapeHtml(au.name)} — ${escapeHtml(au.role)}</h2>
              <p class="mt-1 text-xs text-[#57534E]">${escapeHtml(au.credentials)} · ${escapeHtml(au.affiliation)} · ${escapeHtml(au.location)}</p>
              <p class="mt-2 text-sm text-[#44403C]">${escapeHtml(au.bio)}</p>
            </section>`,
            )
            .join('')}
        </div>
      </main>`;
    return {
      statusCode: 200,
      locale,
      basePath: '/authors',
      title:
        locale === 'zh'
          ? '编辑与审校团队 – SEO 与 GEO 研究院'
          : 'Editorial Desks & Review – SEO & GEO Research Institute',
      description: copy.authorsDesc,
      canonicalPath,
      ogType: 'website',
      imagePath: '/src/assets/images/section_science_climate_1795444152521.jpg',
      jsonLd: buildAuthorsJsonLd(baseUrl, locale),
      ssrBodyHtml: wrapSsrShell(locale, mainHtml),
    };
  }

  if (basePath === '/standards') {
    const canonicalPath = withLocalePrefix('/standards', locale);
    const mainHtml = `
      <main class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 class="font-serif text-3xl font-semibold text-[#1C1917]">${escapeHtml(copy.standardsPageTitle)}</h1>
        <p class="mt-3 text-base text-[#44403C]">${escapeHtml(copy.standardsPageDesc)}</p>
      </main>`;
    return {
      statusCode: 200,
      locale,
      basePath: '/standards',
      title:
        locale === 'zh'
          ? '研究方法与编辑准则 – SEO 与 GEO 研究院'
          : 'Research Methodology & Editorial Standards – SEO & GEO Research Institute',
      description: copy.standardsPageDesc,
      canonicalPath,
      ogType: 'website',
      imagePath: '/src/assets/images/section_ai_systems_1795444152985.jpg',
      jsonLd: buildStandardsJsonLd(baseUrl, locale),
      ssrBodyHtml: wrapSsrShell(locale, mainHtml),
    };
  }

  if (basePath === '/archive') {
    const allGuides = queryArticles({ locale, page: 1, pageSize: TOTAL_ARTICLE_COUNT });
    const canonicalPath = withLocalePrefix('/archive', locale);
    const mainHtml = `
      <main class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 class="font-serif text-3xl font-semibold text-[#1C1917]">${escapeHtml(copy.archiveTitle)}</h1>
        <p class="mt-3 text-base text-[#44403C]">${escapeHtml(copy.archiveDesc)}</p>
        <ul class="mt-6 divide-y divide-[#E2DDD3]">
          ${allGuides.items
            .map(
              (a) =>
                `<li class="py-3"><a href="${escapeHtml(withLocalePrefix(`/articles/${a.slug}`, locale))}" class="font-serif text-base font-semibold text-[#1C1917]">#${String(a.id).padStart(5, '0')} ${escapeHtml(a.title)}</a><p class="mt-1 text-xs text-[#57534E]">${escapeHtml(a.directAnswer)}</p></li>`,
            )
            .join('')}
        </ul>
      </main>`;
    return {
      statusCode: 200,
      locale,
      basePath: '/archive',
      title:
        locale === 'zh'
          ? 'SEO 与 GEO 核心实战指南库 – SEO 与 GEO 研究院'
          : 'Pillar Guide Library – SEO & GEO Research Institute',
      description: copy.archiveDesc,
      canonicalPath,
      ogType: 'website',
      imagePath: '/src/assets/images/editorial_hero_architecture_1795444152682.jpg',
      jsonLd: buildHomeJsonLd(allGuides.items.slice(0, 12), baseUrl, locale),
      ssrBodyHtml: wrapSsrShell(locale, mainHtml),
    };
  }

  if (basePath === '/') {
    const featuredHome = getFeaturedArticles(locale, 12);
    const lead = featuredHome[0];
    const canonicalPath = withLocalePrefix('/', locale);
    const mainHtml = `
      <main class="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <section class="border-b border-[#D6D0C4] py-10">
          <p class="text-xs font-medium text-[#1E3A8A]">${escapeHtml(copy.leadBadge)}</p>
          <h1 class="mt-3 font-serif text-3xl font-semibold text-[#1C1917] sm:text-4xl">
            <a href="${escapeHtml(withLocalePrefix(`/articles/${lead.slug}`, locale))}">${escapeHtml(lead.title)}</a>
          </h1>
          <p class="mt-3 text-base text-[#44403C]">${escapeHtml(lead.subtitle)}</p>
          <p class="mt-4 text-sm text-[#292524]">${escapeHtml(lead.directAnswer)}</p>
        </section>
        <section class="py-10">
          <h2 class="font-serif text-2xl font-semibold text-[#1C1917]">${escapeHtml(copy.completeIndexTitle)}</h2>
          <p class="mt-2 text-sm text-[#57534E]">${escapeHtml(copy.completeIndexDesc)}</p>
          <ul class="mt-6 divide-y divide-[#E2DDD3]">
            ${featuredHome
              .map(
                (a) =>
                  `<li class="py-3"><a href="${escapeHtml(withLocalePrefix(`/articles/${a.slug}`, locale))}" class="font-serif text-lg font-semibold text-[#1C1917]">#${String(a.id).padStart(5, '0')} ${escapeHtml(a.title)}</a><p class="mt-1 text-sm text-[#57534E]">${escapeHtml(a.directAnswer)}</p></li>`,
              )
              .join('')}
          </ul>
        </section>
      </main>`;
    return {
      statusCode: 200,
      locale,
      basePath: '/',
      title:
        locale === 'zh'
          ? 'SEO 与 GEO 研究院 – 中国全行业 GEO 指南与技术 SEO 实务平台'
          : 'SEO & GEO Research Institute – China Industry GEO & Technical SEO Guides',
      description: copy.completeIndexDesc,
      canonicalPath,
      ogType: 'website',
      imagePath: lead.image,
      jsonLd: buildHomeJsonLd(featuredHome.slice(0, 8), baseUrl, locale),
      ssrBodyHtml: wrapSsrShell(locale, mainHtml),
    };
  }

  return {
    statusCode: 404,
    locale,
    basePath,
    title:
      locale === 'zh'
        ? '404 未找到页面 – SEO 与 GEO 研究院'
        : '404 Page Not Found – SEO & GEO Research Institute',
    description: copy.notFoundDesc,
    canonicalPath: reqPath,
    ogType: 'website',
    imagePath: '/src/assets/images/editorial_hero_architecture_1795444152682.jpg',
    jsonLd: buildHomeJsonLd(getFeaturedArticles(locale, 4), baseUrl, locale),
    ssrBodyHtml: wrapSsrShell(
      locale,
      `<main class="mx-auto max-w-3xl px-4 py-20 text-center">
        <p class="font-mono text-xs text-[#9A3412]">404 · PAGE NOT FOUND</p>
        <h1 class="mt-3 font-serif text-3xl font-semibold text-[#1C1917]">${escapeHtml(copy.notFoundTitle)}</h1>
        <p class="mt-3 text-sm text-[#57534E]">${escapeHtml(copy.notFoundDesc)}</p>
        <p class="mt-6"><a href="${escapeHtml(withLocalePrefix('/', locale))}" class="underline text-[#1E3A8A]">${escapeHtml(copy.navFrontPage)}</a></p>
      </main>`,
    ),
  };
}

function injectHtmlMetadata(html: string, meta: RouteMeta, baseUrl: string): string {
  const canonicalUrl = `${baseUrl}${meta.canonicalPath}`;
  const zhPath = withLocalePrefix(meta.basePath, 'zh');
  const enPath = withLocalePrefix(meta.basePath, 'en');
  const zhUrl = `${baseUrl}${zhPath}`;
  const enUrl = `${baseUrl}${enPath}`;
  const ogImageUrl = `${baseUrl}${meta.imagePath}`;
  const escapedTitle = escapeHtml(meta.title);
  const escapedDesc = escapeHtml(meta.description);
  const htmlLang = meta.locale === 'zh' ? 'zh-CN' : 'en-US';

  let updated = html
    .replace(/<html\s+lang="[^"]*">/, `<html lang="${htmlLang}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapedTitle}</title>`)
    .replace(
      /<meta\s+name="description"[\s\S]*?\/>/,
      `<meta name="description" content="${escapedDesc}" />`,
    );

  if (meta.statusCode === 404) {
    updated = updated
      .replace(
        /<meta\s+name="robots"[\s\S]*?\/>/,
        '<meta name="robots" content="noindex, nofollow" />',
      )
      .replace('<!--SSR_CANONICAL_SLOT-->', `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`);
  } else {
    updated = updated.replace(
      '<!--SSR_CANONICAL_SLOT-->',
      [
        `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
        `<link rel="alternate" hreflang="zh-CN" href="${escapeHtml(zhUrl)}" />`,
        `<link rel="alternate" hreflang="en" href="${escapeHtml(enUrl)}" />`,
        `<link rel="alternate" hreflang="x-default" href="${escapeHtml(zhUrl)}" />`,
        `<link rel="alternate" type="application/rss+xml" title="SEO 与 GEO 研究院 RSS (中文)" href="${escapeHtml(baseUrl)}/feed.xml" />`,
        `<link rel="alternate" type="application/rss+xml" title="SEO & GEO Research Institute RSS (EN)" href="${escapeHtml(baseUrl)}/en/feed.xml" />`,
        `<link rel="alternate" type="text/plain" title="LLMs Directory" href="${escapeHtml(baseUrl)}/llms.txt" />`,
        `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
      ].join('\n    '),
    );
  }

  updated = updated
    .replace(
      /<meta\s+property="og:type"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:type" content="${escapeHtml(meta.ogType)}" />`,
    )
    .replace(
      /<meta\s+property="og:locale"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:locale" content="${meta.locale === 'zh' ? 'zh_CN' : 'en_US'}" />`,
    )
    .replace(
      /<meta\s+property="og:locale:alternate"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:locale:alternate" content="${meta.locale === 'zh' ? 'en_US' : 'zh_CN'}" />`,
    )
    .replace(
      /<meta\s+property="og:title"[\s\S]*?\/>/,
      `<meta property="og:title" content="${escapedTitle}" />`,
    )
    .replace(
      /<meta\s+property="og:description"[\s\S]*?\/>/,
      `<meta property="og:description" content="${escapedDesc}" />`,
    )
    .replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:image" content="${escapeHtml(ogImageUrl)}" />`,
    )
    .replace(
      /<meta\s+name="twitter:title"[\s\S]*?\/>/,
      `<meta name="twitter:title" content="${escapedTitle}" />`,
    )
    .replace(
      /<meta\s+name="twitter:description"[\s\S]*?\/>/,
      `<meta name="twitter:description" content="${escapedDesc}" />`,
    )
    .replace(
      /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:image" content="${escapeHtml(ogImageUrl)}" />`,
    );

  const jsonLdScript = `<script id="meridian-jsonld" type="application/ld+json">${JSON.stringify(meta.jsonLd)}</script>`;
  updated = updated.replace(
    /<!--SSR_JSONLD_SLOT-->[\s\S]*?<\/script>/,
    `<!--SSR_JSONLD_SLOT-->\n    ${jsonLdScript}`,
  );
  // Emit semantic full-body HTML directly inside <div id="root">...</div> on the first HTTP byte
  updated = updated.replace('<!--SSR_BODY_SLOT-->', meta.ssrBodyHtml);

  return updated;
}

function buildLlmsTxt(baseUrl: string, locale: Locale): string {
  const sections = getLocalizedSections(locale);
  const allGuides = queryArticles({ locale, page: 1, pageSize: TOTAL_ARTICLE_COUNT }).items;
  const totalUrls = (TOTAL_ARTICLE_COUNT + 5 + sections.length) * 2;

  if (locale === 'en') {
    return [
      '# SEO & GEO Research Institute (English Edition)',
      '',
      `> Bilingual SEO & GEO practical resource covering ${TOTAL_ARTICLE_COUNT} curated pillar guides (150 China industry verticals spanning all 20 national economy sectors, 10 domestic Chinese LLM deep dives, and 15 Google Search & GEO technical benchmarks) plus a live compliance & Schema toolkit (${totalUrls} canonical bilingual URLs).`,
      '',
      '## Key Endpoints',
      `- [XML Sitemap Index (2 Shards, ${totalUrls} Bilingual URLs)](${baseUrl}/sitemap.xml)`,
      `- [Interactive GEO Audit & Schema Generator](${baseUrl}/en/tools)`,
      `- [Complete ${TOTAL_ARTICLE_COUNT}-Guide Full Text](${baseUrl}/en/llms-full.txt)`,
      `- [Chinese Default LLMs Directory](${baseUrl}/llms.txt)`,
      `- [English RSS 2.0 Feed](${baseUrl}/en/feed.xml)`,
      `- [Methodology & Editorial Standards](${baseUrl}/en/standards)`,
      '',
      '## Six Divisions',
      ...sections.map(
        (sec) => `- [${sec.name}](${baseUrl}/en/section/${sec.slug}): ${sec.description}`,
      ),
      '',
      `## Complete ${TOTAL_ARTICLE_COUNT}-Guide Directory`,
      ...allGuides.map((article) => {
        const author = getLocalizedAuthorById(article.authorId, 'en').name;
        return `- [#${String(article.id).padStart(5, '0')} ${article.title}](${baseUrl}/en/articles/${article.slug}) — *${author}, ${article.updatedAt}*: ${article.directAnswer}`;
      }),
    ].join('\n');
  }

  return [
    '# SEO 与 GEO 研究院（中文默认版）',
    '',
    `> 专注搜索引擎工程（SEO）与生成式引擎优化（GEO）的独立双语平台：精选发布 ${TOTAL_ARTICLE_COUNT} 篇核心专题指南（覆盖国民经济全部 20 大门类的 150 个中国细分行业、10 大国产大模型检索解析与 15 篇技术标准文档），并配套免费交互式合规自检与 Schema 配置工具（共 ${totalUrls} 个规范双语 URL）。`,
    '',
    '## 核心机器可读接口',
    `- [XML 站点地图总索引（2 组分片 / ${totalUrls} 个双语 URL）](${baseUrl}/sitemap.xml)`,
    `- [交互式全行业 GEO 体检与 Schema 代码生成工具](${baseUrl}/tools)`,
    `- [全站 ${TOTAL_ARTICLE_COUNT} 篇完整全文语料库](${baseUrl}/llms-full.txt)`,
    `- [英文版目录索引](${baseUrl}/en/llms.txt)`,
    `- [中文 RSS 2.0 订阅源](${baseUrl}/feed.xml)`,
    `- [研究方法与编辑准则](${baseUrl}/standards)`,
    '',
    '## 六大栏目分类',
    ...sections.map(
      (sec) => `- [${sec.name}](${baseUrl}/section/${sec.slug}): ${sec.description}`,
    ),
    '',
    `## 全部 ${TOTAL_ARTICLE_COUNT} 篇核心专题指南索引`,
    ...allGuides.map((article) => {
      const author = getLocalizedAuthorById(article.authorId, 'zh').name;
      return `- [#${String(article.id).padStart(5, '0')} ${article.title}](${baseUrl}/articles/${article.slug}) — *${author}, ${article.updatedAt}*: ${article.directAnswer}`;
    }),
  ].join('\n');
}

function buildLlmsFullAll(baseUrl: string, locale: Locale): string {
  const blocks: string[] = [
    locale === 'zh'
      ? `# SEO 与 GEO 研究院 · 全部 ${TOTAL_ARTICLE_COUNT} 篇核心专题指南完整文本\n`
      : `# SEO & GEO Research Institute · Complete ${TOTAL_ARTICLE_COUNT}-Guide Full Text\n`,
  ];

  for (let id = 1; id <= TOTAL_ARTICLE_COUNT; id++) {
    const article = getArticleById(id, locale);
    if (!article) continue;
    const author = getLocalizedAuthorById(article.authorId, locale);
    const section = getLocalizedSectionBySlug(article.section, locale);
    const url = `${baseUrl}${withLocalePrefix(`/articles/${article.slug}`, locale)}`;
    blocks.push(
      [
        `# #${String(article.id).padStart(5, '0')}. ${article.title}`,
        `URL: ${url}`,
        `${locale === 'zh' ? '栏目' : 'Division'}: ${section.name} | ${locale === 'zh' ? '编撰' : 'Desk'}: ${author.name} | ${locale === 'zh' ? '审校' : 'Reviewed By'}: ${article.reviewerName}`,
        `${locale === 'zh' ? '发布' : 'Published'}: ${article.publishedAt} | ${locale === 'zh' ? '修订' : 'Updated'}: ${article.updatedAt}`,
        '',
        `## ${locale === 'zh' ? '核心结论摘要' : 'Executive Summary'}`,
        article.directAnswer,
        '',
        `## ${locale === 'zh' ? '关键实操要点' : 'Key Implementation Points'}`,
        ...article.keyTakeaways.map((item) => `- ${item}`),
        '',
        ...article.sections.flatMap((sec) => [
          `## ${sec.heading}`,
          ...sec.paragraphs,
          ...(sec.metrics
            ? [
                '',
                '| Dimension | Standard | Implementation Notes |',
                '| --- | --- | --- |',
                ...sec.metrics.map((m) => `| ${m.label} | ${m.value} | ${m.context} |`),
              ]
            : []),
          '',
        ]),
        `## ${locale === 'zh' ? '常见问题解答' : 'Frequently Asked Questions'}`,
        ...article.faqs.flatMap((faq) => [`**Q: ${faq.question}**`, `A: ${faq.answer}`, '']),
        `## ${locale === 'zh' ? '参考标准引用' : 'Primary Citations'}`,
        ...article.citations.map((c) => `- ${c.title} (${c.publisher}, ${c.year}): ${c.url}`),
        '',
        '---',
        '',
      ].join('\n'),
    );
  }
  return blocks.join('\n');
}

function buildRssXml(baseUrl: string, locale: Locale): string {
  const articles = queryArticles({
    locale,
    sort: 'updated-desc',
    page: 1,
    pageSize: TOTAL_ARTICLE_COUNT,
  }).items;
  const feedUrl = `${baseUrl}${locale === 'en' ? '/en/feed.xml' : '/feed.xml'}`;
  const homeUrl = `${baseUrl}${withLocalePrefix('/', locale)}`;
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${locale === 'zh' ? 'SEO 与 GEO 研究院' : 'SEO &amp; GEO Research Institute'}</title>
    <link>${escapeXml(homeUrl)}</link>
    <description>${escapeXml(
      locale === 'zh'
        ? `专注搜索引擎优化（SEO）与生成式引擎优化（GEO）的双语实务平台，精选 ${TOTAL_ARTICLE_COUNT} 篇核心指南覆盖中国全行业 150 个细分领域。`
        : `Independent bilingual SEO & GEO publication covering ${TOTAL_ARTICLE_COUNT} pillar guides across 150 China verticals.`,
    )}</description>
    <language>${locale === 'zh' ? 'zh-cn' : 'en-us'}</language>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
${articles
  .map((a) => {
    const author = getLocalizedAuthorById(a.authorId, locale).name;
    const section = getLocalizedSectionBySlug(a.section, locale).name;
    const link = `${baseUrl}${withLocalePrefix(`/articles/${a.slug}`, locale)}`;
    return `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${new Date(`${a.publishedAt}T08:00:00Z`).toUTCString()}</pubDate>
      <category>${escapeXml(section)}</category>
      <author>${escapeXml(author)}</author>
      <description>${escapeXml(a.directAnswer)}</description>
    </item>`;
  })
  .join('\n')}
  </channel>
</rss>`;
}

function buildUrlSetXml(
  baseUrl: string,
  entries: Array<{
    basePath: string;
    lastmod: string;
    changefreq: string;
    priority: string;
    image?: string;
    imageTitleZh?: string;
    imageTitleEn?: string;
  }>,
): string {
  const urlBlocks = entries.flatMap((entry) => {
    const zhLoc = `${baseUrl}${withLocalePrefix(entry.basePath, 'zh')}`;
    const enLoc = `${baseUrl}${withLocalePrefix(entry.basePath, 'en')}`;
    const alternates = [
      `    <xhtml:link rel="alternate" hreflang="zh-CN" href="${escapeXml(zhLoc)}" />`,
      `    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(enLoc)}" />`,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(zhLoc)}" />`,
    ].join('\n');

    return (['zh', 'en'] as Locale[]).map((loc) => {
      const currentLoc = loc === 'zh' ? zhLoc : enLoc;
      const imgTitle = loc === 'zh' ? entry.imageTitleZh : entry.imageTitleEn;
      return `  <url>
    <loc>${escapeXml(currentLoc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
${alternates}${
        entry.image && imgTitle
          ? `\n    <image:image>\n      <image:loc>${escapeXml(entry.image)}</image:loc>\n      <image:title>${escapeXml(imgTitle)}</image:title>\n    </image:image>`
          : ''
      }
  </url>`;
    });
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlBlocks.join('\n')}
</urlset>`;
}

function maybeLegacyRedirectTarget(reqPath: string): string | null {
  const { locale, basePath } = stripLocalePrefix(reqPath);
  if (!basePath.startsWith('/articles/')) return null;
  const slug = basePath.replace('/articles/', '');
  const targetSlug = resolveLegacySlugRedirect(slug);
  if (!targetSlug) return null;
  return withLocalePrefix(`/articles/${targetSlug}`, locale);
}

async function startServer() {
  const app = express();
  const httpServer = http.createServer(app);
  app.set('trust proxy', true);

  app.use((_req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });

  // Legacy 301 Permanent Redirect Consolidation for prior /articles/study-XXXXX-... URLs
  app.use((req, res, next) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      next();
      return;
    }
    const redirectPath = maybeLegacyRedirectTarget(req.path);
    if (redirectPath) {
      res.redirect(301, redirectPath);
      return;
    }
    next();
  });

  // 0. Clean SVG Favicon (prevents 404 on browser & Google Favicon crawler)
  app.get('/favicon.svg', (_req, res) => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="#1C1917"/><text x="32" y="42" text-anchor="middle" font-family="Georgia,serif" font-size="30" font-weight="700" fill="#FBF9F5">G</text></svg>`;
    res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=604800');
    res.send(svg);
  });

  app.get('/favicon.ico', (_req, res) => {
    res.redirect(301, '/favicon.svg');
  });

  // 1. /robots.txt
  app.get('/robots.txt', (req, res) => {
    const baseUrl = getBaseUrl(req);
    const body = [
      'User-agent: *',
      'Allow: /',
      '',
      'User-agent: Googlebot',
      'Allow: /',
      '',
      'User-agent: Google-Extended',
      'Allow: /',
      '',
      'User-agent: Bingbot',
      'Allow: /',
      '',
      'User-agent: OAI-SearchBot',
      'Allow: /',
      '',
      `Sitemap: ${baseUrl}/sitemap.xml`,
      `# Bilingual LLM Directory (ZH Default): ${baseUrl}/llms.txt`,
      `# English LLM Directory: ${baseUrl}/en/llms.txt`,
    ].join('\n');
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(body);
  });

  // 2a. Clean 2-Shard Master Sitemap Index (/sitemap-core.xml + /sitemap-articles-1.xml)
  app.get('/sitemap.xml', (req, res) => {
    const baseUrl = getBaseUrl(req);
    const shards = [
      `${baseUrl}/sitemap-core.xml`,
      `${baseUrl}/sitemap-articles-1.xml`,
    ];
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${shards
  .map(
    (loc) => `  <sitemap>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>2026-11-24</lastmod>
  </sitemap>`,
  )
  .join('\n')}
</sitemapindex>`;
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(xml);
  });

  // 2b. Core Pages, Toolkit & Divisions Sitemap Shard
  app.get('/sitemap-core.xml', (req, res) => {
    const baseUrl = getBaseUrl(req);
    const sections = getLocalizedSections('zh');
    const entries = [
      { basePath: '/', lastmod: '2026-11-24', changefreq: 'daily', priority: '1.0' },
      { basePath: '/archive', lastmod: '2026-11-24', changefreq: 'daily', priority: '0.9' },
      { basePath: '/tools', lastmod: '2026-11-24', changefreq: 'weekly', priority: '0.95' },
      { basePath: '/authors', lastmod: '2026-11-24', changefreq: 'monthly', priority: '0.7' },
      { basePath: '/standards', lastmod: '2026-11-24', changefreq: 'weekly', priority: '0.8' },
      ...sections.map((sec) => ({
        basePath: `/section/${sec.slug}`,
        lastmod: '2026-11-24',
        changefreq: 'weekly',
        priority: '0.85',
      })),
    ];
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(buildUrlSetXml(baseUrl, entries));
  });

  // 2c. 175 Curated Pillar Guides Sitemap Shard (350 bilingual URLs)
  app.get('/sitemap-articles-1.xml', (req, res) => {
    const baseUrl = getBaseUrl(req);
    const zhList = queryArticles({ locale: 'zh', page: 1, pageSize: TOTAL_ARTICLE_COUNT }).items;
    const enList = queryArticles({ locale: 'en', page: 1, pageSize: TOTAL_ARTICLE_COUNT }).items;

    const entries = zhList.map((a, i) => ({
      basePath: `/articles/${a.slug}`,
      lastmod: a.updatedAt,
      changefreq: 'monthly',
      priority: a.featured ? '0.9' : '0.8',
      image: `${baseUrl}${a.image}`,
      imageTitleZh: a.title,
      imageTitleEn: enList[i]?.title ?? a.title,
    }));

    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(buildUrlSetXml(baseUrl, entries));
  });

  // 3. Clean Bilingual llms.txt & Full Text Corpus
  app.get('/llms.txt', (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(buildLlmsTxt(getBaseUrl(req), 'zh'));
  });

  app.get('/en/llms.txt', (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(buildLlmsTxt(getBaseUrl(req), 'en'));
  });

  app.get('/llms-full.txt', (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(buildLlmsFullAll(getBaseUrl(req), 'zh'));
  });

  app.get('/en/llms-full.txt', (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(buildLlmsFullAll(getBaseUrl(req), 'en'));
  });

  // 4. Bilingual RSS 2.0 feeds
  app.get('/feed.xml', (req, res) => {
    res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(buildRssXml(getBaseUrl(req), 'zh'));
  });

  app.get('/en/feed.xml', (req, res) => {
    res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(buildRssXml(getBaseUrl(req), 'en'));
  });

  // 5. Institute Summary & Article REST API
  app.get('/api/compliance-summary', (req, res) => {
    const baseUrl = getBaseUrl(req);
    const stats = getCorpusStats();
    res.json({
      publication: 'SEO 与 GEO 研究院 (SEO & GEO Research Institute)',
      defaultLocale: 'zh-CN',
      supportedLocales: ['zh-CN', 'en-US'],
      baseUrl,
      ...stats,
      endpoints: {
        robots: '/robots.txt',
        sitemapIndex: '/sitemap.xml',
        sitemapCore: '/sitemap-core.xml',
        sitemapArticlesShard1: '/sitemap-articles-1.xml',
        tools: '/tools',
        llms: '/llms.txt',
        llmsEn: '/en/llms.txt',
        llmsFull: '/llms-full.txt',
        rss: '/feed.xml',
      },
    });
  });

  app.get('/api/articles', (req, res) => {
    const locale: Locale = req.query.locale === 'en' ? 'en' : 'zh';
    const section = (req.query.section as 'all' | SectionSlug) || 'all';
    const industry = typeof req.query.industry === 'string' ? req.query.industry : undefined;
    const platform = typeof req.query.platform === 'string' ? req.query.platform : undefined;
    const authorId = typeof req.query.author === 'string' ? req.query.author : undefined;
    const query = typeof req.query.q === 'string' ? req.query.q : '';
    const sortParam = req.query.sort;
    const sort =
      sortParam === 'updated-desc' || sortParam === 'readtime-asc' ? sortParam : 'id-asc';
    const page = Number.parseInt(String(req.query.page || '1'), 10) || 1;
    const pageSize = Math.min(100, Math.max(1, Number.parseInt(String(req.query.limit || '20'), 10) || 20));
    res.json(queryArticles({ locale, section, industry, platform, authorId, query, sort, page, pageSize }));
  });

  app.get('/api/articles/:slug', (req, res) => {
    const locale: Locale = req.query.locale === 'en' ? 'en' : 'zh';
    const article = getArticleBySlug(req.params.slug, locale);
    if (!article) {
      res.status(404).json({ error: 'Article not found' });
      return;
    }
    res.json(article);
  });

  if (!IS_PROD) {
    const { createServer: createViteServer } = await import('vite');
    const hmrDisabled = process.env.DISABLE_HMR === 'true';
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: hmrDisabled ? false : { server: httpServer },
        ws: hmrDisabled ? false : { server: httpServer },
      },
      appType: 'custom',
    });

    if (hmrDisabled) {
      app.get('/@vite/client', async (_req, res, next) => {
        try {
          const transformed = await vite.transformRequest('/@vite/client');
          if (!transformed) {
            next();
            return;
          }
          const patchedCode = transformed.code
            .replace('await wsTransport.connect(handlers);', 'return;')
            .replace('wsTransport.send(data);', 'return;');
          res
            .status(200)
            .set({ 'Content-Type': 'application/javascript; charset=utf-8' })
            .end(patchedCode);
        } catch (err) {
          next(err);
        }
      });
    }

    app.use(vite.middlewares);

    app.get('*', async (req, res, next) => {
      try {
        const url = req.originalUrl;
        const baseUrl = getBaseUrl(req);
        const templatePath = path.resolve(__dirname, 'index.html');
        let template = fs.readFileSync(templatePath, 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        const meta = resolveRouteMeta(req.path, baseUrl);
        const finalHtml = injectHtmlMetadata(template, meta, baseUrl);
        res.status(meta.statusCode).set({ 'Content-Type': 'text/html; charset=utf-8' }).end(finalHtml);
      } catch (err) {
        vite.ssrFixStacktrace(err as Error);
        next(err);
      }
    });
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(
      '/assets',
      express.static(path.join(distDir, 'assets'), {
        maxAge: '1y',
        immutable: true,
      }),
    );
    app.use(
      '/src/assets',
      express.static(path.join(distDir, 'src/assets'), {
        maxAge: '1y',
        immutable: true,
      }),
    );
    app.use(express.static(distDir, { index: false }));

    const distHtmlTemplate = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
    app.get('*', (req, res) => {
      const baseUrl = getBaseUrl(req);
      const meta = resolveRouteMeta(req.path, baseUrl);
      const finalHtml = injectHtmlMetadata(distHtmlTemplate, meta, baseUrl);
      res.status(meta.statusCode).set({ 'Content-Type': 'text/html; charset=utf-8' }).end(finalHtml);
    });
  }

  httpServer.listen(PORT, '0.0.0.0', () => {
    console.log(
      `SEO & GEO Research Institute (${TOTAL_ARTICLE_COUNT} curated guides, ZH/EN) listening on http://0.0.0.0:${PORT}`,
    );
  });
}

startServer();
