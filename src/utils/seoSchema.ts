import type { Article, ArticleSummary, Author, Locale, SectionInfo } from '../types/editorial.ts';
import {
  getLocalizedAuthorById,
  getLocalizedAuthors,
  getLocalizedSectionBySlug,
  withLocalePrefix,
} from '../data/articlesLocalized.ts';

function resolveAbsoluteUrl(baseUrl: string, path: string): string {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}

export function buildOrganizationNode(baseUrl: string, locale: Locale = 'zh') {
  return {
    '@type': ['ResearchOrganization', 'NewsMediaOrganization'],
    '@id': resolveAbsoluteUrl(baseUrl, '/#organization'),
    name:
      locale === 'zh'
        ? 'SEO 与 GEO 研究院'
        : 'SEO & GEO Research Institute',
    alternateName:
      locale === 'zh'
        ? 'SEO & GEO Research Institute'
        : 'SEO 与 GEO 研究院',
    url: resolveAbsoluteUrl(baseUrl, withLocalePrefix('/', locale)),
    description:
      locale === 'zh'
        ? '专注搜索引擎优化（SEO）与生成式引擎优化（GEO）的独立中英双语研究机构，出版技术与实证文献。'
        : 'Independent bilingual research institute dedicated to Search Engineering (SEO) and Generative Engine Optimization (GEO).',
    publishingPrinciples: resolveAbsoluteUrl(baseUrl, withLocalePrefix('/standards', locale)),
    correctionsPolicy: resolveAbsoluteUrl(
      baseUrl,
      `${withLocalePrefix('/standards', locale)}#editorial-policy`,
    ),
    masthead: resolveAbsoluteUrl(baseUrl, withLocalePrefix('/authors', locale)),
    logo: {
      '@type': 'ImageObject',
      url: resolveAbsoluteUrl(
        baseUrl,
        '/src/assets/images/editorial_hero_architecture_1795444152682.jpg',
      ),
    },
  };
}

export function buildAuthorNode(author: Author, baseUrl: string, locale: Locale = 'zh') {
  const authorsPath = withLocalePrefix('/authors', locale);
  return {
    '@type': 'Person',
    '@id': resolveAbsoluteUrl(baseUrl, `/authors#${author.id}`),
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    url: resolveAbsoluteUrl(baseUrl, `${authorsPath}#${author.id}`),
    affiliation: {
      '@type': 'Organization',
      name: author.affiliation,
    },
    knowsAbout: [author.beat, author.credentials, 'Google Search SEO', 'Gemini GEO'],
  };
}

export function buildHomeJsonLd(
  featuredArticles: ArticleSummary[],
  baseUrl: string,
  locale: Locale = 'zh',
) {
  const homePath = withLocalePrefix('/', locale);
  const archivePath = withLocalePrefix('/archive', locale);
  const langTag = locale === 'zh' ? 'zh-CN' : 'en-US';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(baseUrl, locale),
      {
        '@type': 'WebSite',
        '@id': resolveAbsoluteUrl(baseUrl, '/#website'),
        name: locale === 'zh' ? 'SEO 与 GEO 研究院' : 'SEO & GEO Research Institute',
        url: resolveAbsoluteUrl(baseUrl, homePath),
        inLanguage: ['zh-CN', 'en-US'],
        publisher: { '@id': resolveAbsoluteUrl(baseUrl, '/#organization') },
        potentialAction: {
          '@type': 'SearchAction',
          target: resolveAbsoluteUrl(baseUrl, `${archivePath}?q={search_term_string}`),
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'CollectionPage',
        '@id': resolveAbsoluteUrl(baseUrl, `${homePath}#webpage`),
        url: resolveAbsoluteUrl(baseUrl, homePath),
        inLanguage: langTag,
        name:
          locale === 'zh'
            ? 'SEO 与 GEO 研究院 – 搜索引擎与生成式引擎优化实证论文库'
            : 'SEO & GEO Research Institute – Search & Generative Engine Studies',
        description:
          locale === 'zh'
            ? 'SEO 与 GEO 研究院专注于搜索引擎工程（SEO）与生成式引擎优化（GEO），提供涵盖技术架构、结构化数据、内容质量与搜索增长的系统化研究。'
            : 'The SEO & GEO Research Institute publishes bilingual empirical studies across Technical SEO, Generative Engine Optimization, Structured Semantics, and Search Analytics.',
        isPartOf: { '@id': resolveAbsoluteUrl(baseUrl, '/#website') },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: featuredArticles.length,
          itemListElement: featuredArticles.map((article, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: resolveAbsoluteUrl(
              baseUrl,
              withLocalePrefix(`/articles/${article.slug}`, locale),
            ),
            name: article.title,
          })),
        },
      },
    ],
  };
}

export function buildSectionJsonLd(
  section: SectionInfo,
  articles: ArticleSummary[],
  baseUrl: string,
  locale: Locale = 'zh',
) {
  const sectionUrl = resolveAbsoluteUrl(
    baseUrl,
    withLocalePrefix(`/section/${section.slug}`, locale),
  );
  const homeUrl = resolveAbsoluteUrl(baseUrl, withLocalePrefix('/', locale));
  const langTag = locale === 'zh' ? 'zh-CN' : 'en-US';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(baseUrl, locale),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: locale === 'zh' ? '首页' : 'Home',
            item: homeUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: section.name,
            item: sectionUrl,
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        '@id': `${sectionUrl}#webpage`,
        url: sectionUrl,
        inLanguage: langTag,
        name:
          locale === 'zh'
            ? `${section.name} – SEO 与 GEO 研究院`
            : `${section.name} – SEO & GEO Research Institute`,
        description: section.description,
        isPartOf: { '@id': resolveAbsoluteUrl(baseUrl, '/#website') },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: articles.length,
          itemListElement: articles.slice(0, 20).map((article, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            url: resolveAbsoluteUrl(
              baseUrl,
              withLocalePrefix(`/articles/${article.slug}`, locale),
            ),
            name: article.title,
          })),
        },
      },
    ],
  };
}

export function buildArticleJsonLd(
  article: Article,
  baseUrl: string,
  locale: Locale = 'zh',
) {
  const articleUrl = resolveAbsoluteUrl(
    baseUrl,
    withLocalePrefix(`/articles/${article.slug}`, locale),
  );
  const homeUrl = resolveAbsoluteUrl(baseUrl, withLocalePrefix('/', locale));
  const section = getLocalizedSectionBySlug(article.section, locale);
  const author = getLocalizedAuthorById(article.authorId, locale);
  const langTag = locale === 'zh' ? 'zh-CN' : 'en-US';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(baseUrl, locale),
      buildAuthorNode(author, baseUrl, locale),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: locale === 'zh' ? '首页' : 'Home',
            item: homeUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: section.name,
            item: resolveAbsoluteUrl(
              baseUrl,
              withLocalePrefix(`/section/${section.slug}`, locale),
            ),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title,
            item: articleUrl,
          },
        ],
      },
      {
        '@type': ['Article', 'TechArticle'],
        '@id': `${articleUrl}#article`,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': articleUrl,
        },
        headline: article.title,
        alternativeHeadline: article.subtitle,
        description: article.directAnswer,
        articleSection: section.name,
        keywords: article.keywords.join(', '),
        wordCount: article.wordCount,
        inLanguage: langTag,
        isAccessibleForFree: true,
        datePublished: `${article.publishedAt}T08:00:00Z`,
        dateModified: `${article.updatedAt}T08:00:00Z`,
        image: [resolveAbsoluteUrl(baseUrl, article.image)],
        author: {
          '@id': resolveAbsoluteUrl(baseUrl, `/authors#${author.id}`),
        },
        reviewedBy: {
          '@type': 'Person',
          name: article.reviewerName,
        },
        publisher: {
          '@id': resolveAbsoluteUrl(baseUrl, '/#organization'),
        },
        citation: article.citations.map((c) => c.url),
      },
      ...(article.faqs.length > 0
        ? [
            {
              '@type': 'FAQPage',
              '@id': `${articleUrl}#faq`,
              inLanguage: langTag,
              mainEntity: article.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };
}

export function buildAuthorsJsonLd(baseUrl: string, locale: Locale = 'zh') {
  const authors = getLocalizedAuthors(locale);
  const pageUrl = resolveAbsoluteUrl(baseUrl, withLocalePrefix('/authors', locale));
  const langTag = locale === 'zh' ? 'zh-CN' : 'en-US';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(baseUrl, locale),
      {
        '@type': 'ProfilePage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        inLanguage: langTag,
        name:
          locale === 'zh'
            ? '研究团队与审校委员会 – SEO 与 GEO 研究院'
            : 'Research Board & Editors – SEO & GEO Research Institute',
        description:
          locale === 'zh'
            ? '由具备信息检索、语义工程、Web 性能与国际搜索增长一线经验的研究员负责专题撰写与交叉核查。'
            : 'Meet the researchers and editors authoring and reviewing studies at the SEO & GEO Research Institute.',
        mainEntity: authors.map((author) => buildAuthorNode(author, baseUrl, locale)),
      },
    ],
  };
}

export function buildStandardsJsonLd(baseUrl: string, locale: Locale = 'zh') {
  const pageUrl = resolveAbsoluteUrl(baseUrl, withLocalePrefix('/standards', locale));
  const langTag = locale === 'zh' ? 'zh-CN' : 'en-US';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(baseUrl, locale),
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        inLanguage: langTag,
        name:
          locale === 'zh'
            ? '研究方法与编辑准则 – SEO 与 GEO 研究院'
            : 'Research Methodology & Editorial Standards – SEO & GEO Research Institute',
        description:
          locale === 'zh'
            ? '了解 SEO 与 GEO 研究院在选题设计、指标口径、双语一致性及引用核查方面坚持的编辑原则。'
            : 'Learn how the SEO & GEO Research Institute scopes technical studies, verifies references, and maintains bilingual editorial consistency.',
      },
      {
        '@type': 'FAQPage',
        inLanguage: langTag,
        mainEntity: [
          {
            '@type': 'Question',
            name:
              locale === 'zh'
                ? 'SEO 与 GEO 研究院的研究报告采用什么审校流程？'
                : 'How are studies reviewed at the SEO & GEO Research Institute?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                locale === 'zh'
                  ? '每篇研究报告均由领域研究员撰写，并由另一位专业审校人员复核实验口径、引用来源以及中英文表达一致性。'
                  : 'Every paper is written by a domain specialist and cross-checked by a peer reviewer for metric clarity, reference accuracy, and bilingual parity.',
            },
          },
          {
            '@type': 'Question',
            name:
              locale === 'zh'
                ? '为什么每篇文章开篇都会提供核心结论摘要与数据对照表？'
                : 'Why does every study open with an executive summary and benchmark table?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                locale === 'zh'
                  ? '结论前置结构有助于从业者在进入完整技术细节前快速了解核心结论与参考基准，同时提升可读性与检索准确度。'
                  : 'Front-loading concise findings and benchmark tables helps practitioners evaluate outcomes rapidly while improving readability.',
            },
          },
        ],
      },
    ],
  };
}

export function buildToolsJsonLd(baseUrl: string, locale: Locale = 'zh') {
  const pageUrl = resolveAbsoluteUrl(baseUrl, withLocalePrefix('/tools', locale));
  const langTag = locale === 'zh' ? 'zh-CN' : 'en-US';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(baseUrl, locale),
      {
        '@type': 'WebApplication',
        '@id': `${pageUrl}#webapp`,
        url: pageUrl,
        inLanguage: langTag,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'All',
        isAccessibleForFree: true,
        name:
          locale === 'zh'
            ? '中国全行业 GEO 诊断体检与 Schema 生成工具'
            : 'China Industry GEO Audit & Schema.org Generator',
        description:
          locale === 'zh'
            ? '支持中国全行业 150 个细分领域（覆盖国民经济 20 大门类）实时扫描广告法极限词、评估 GEO 准备度，并一键生成 Schema.org JSON-LD 与透明价目 HTML 模板。'
            : 'Interactive toolkit across 150 China verticals (all 20 national economy sectors) for compliance claim checking, GEO readiness scoring, Schema.org JSON-LD, and transparent HTML price tables.',
      },
    ],
  };
}
