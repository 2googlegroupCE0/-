import type { Article, Author, SectionInfo } from '../types/editorial.ts';
import { AUTHORS, AUTHORS_BY_ID } from '../data/authors.ts';
import { SECTIONS_BY_SLUG } from '../data/sections.ts';

function resolveAbsoluteUrl(baseUrl: string, path: string): string {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}

export function buildOrganizationNode(baseUrl: string) {
  return {
    '@type': 'NewsMediaOrganization',
    '@id': resolveAbsoluteUrl(baseUrl, '/#organization'),
    name: 'The Meridian Review',
    url: resolveAbsoluteUrl(baseUrl, '/'),
    description:
      'Independent Western broadsheet and research journal covering technology, search architecture, global economics, design, climate science, and civic culture.',
    publishingPrinciples: resolveAbsoluteUrl(baseUrl, '/standards'),
    correctionsPolicy: resolveAbsoluteUrl(baseUrl, '/standards#editorial-policy'),
    masthead: resolveAbsoluteUrl(baseUrl, '/authors'),
    logo: {
      '@type': 'ImageObject',
      url: resolveAbsoluteUrl(
        baseUrl,
        '/src/assets/images/editorial_hero_architecture_1795444152682.jpg',
      ),
    },
  };
}

export function buildAuthorNode(author: Author, baseUrl: string) {
  return {
    '@type': 'Person',
    '@id': resolveAbsoluteUrl(baseUrl, `/authors#${author.id}`),
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    url: resolveAbsoluteUrl(baseUrl, `/authors#${author.id}`),
    affiliation: {
      '@type': 'Organization',
      name: author.affiliation,
    },
    knowsAbout: [author.beat, author.credentials],
  };
}

export function buildHomeJsonLd(featuredArticles: Article[], baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(baseUrl),
      {
        '@type': 'WebSite',
        '@id': resolveAbsoluteUrl(baseUrl, '/#website'),
        name: 'The Meridian Review',
        url: resolveAbsoluteUrl(baseUrl, '/'),
        inLanguage: 'en-US',
        publisher: { '@id': resolveAbsoluteUrl(baseUrl, '/#organization') },
        potentialAction: {
          '@type': 'SearchAction',
          target: resolveAbsoluteUrl(baseUrl, '/archive?q={search_term_string}'),
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'CollectionPage',
        '@id': resolveAbsoluteUrl(baseUrl, '/#webpage'),
        url: resolveAbsoluteUrl(baseUrl, '/'),
        name: 'The Meridian Review – Independent Journalism, Research & Analysis',
        description:
          'Explore 50 peer-reviewed essays across technology, global economics, design, climate science, and digital society.',
        isPartOf: { '@id': resolveAbsoluteUrl(baseUrl, '/#website') },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: featuredArticles.length,
          itemListElement: featuredArticles.map((article, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: resolveAbsoluteUrl(baseUrl, `/articles/${article.slug}`),
            name: article.title,
          })),
        },
      },
    ],
  };
}

export function buildSectionJsonLd(
  section: SectionInfo,
  articles: Article[],
  baseUrl: string,
) {
  const sectionUrl = resolveAbsoluteUrl(baseUrl, `/section/${section.slug}`);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(baseUrl),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Front Page',
            item: resolveAbsoluteUrl(baseUrl, '/'),
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
        name: `${section.name} – The Meridian Review`,
        description: section.description,
        isPartOf: { '@id': resolveAbsoluteUrl(baseUrl, '/#website') },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: articles.length,
          itemListElement: articles.map((article, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            url: resolveAbsoluteUrl(baseUrl, `/articles/${article.slug}`),
            name: article.title,
          })),
        },
      },
    ],
  };
}

export function buildArticleJsonLd(article: Article, baseUrl: string) {
  const articleUrl = resolveAbsoluteUrl(baseUrl, `/articles/${article.slug}`);
  const section = SECTIONS_BY_SLUG[article.section];
  const author = AUTHORS_BY_ID[article.authorId] ?? AUTHORS[0];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(baseUrl),
      buildAuthorNode(author, baseUrl),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Front Page',
            item: resolveAbsoluteUrl(baseUrl, '/'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: section.name,
            item: resolveAbsoluteUrl(baseUrl, `/section/${section.slug}`),
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
        '@type': 'NewsArticle',
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
        inLanguage: 'en-US',
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

export function buildAuthorsJsonLd(baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(baseUrl),
      {
        '@type': 'ProfilePage',
        '@id': resolveAbsoluteUrl(baseUrl, '/authors#webpage'),
        url: resolveAbsoluteUrl(baseUrl, '/authors'),
        name: 'Editorial Board & Authors – The Meridian Review',
        description:
          'Meet the named journalists, researchers, and technical reviewers behind The Meridian Review.',
        mainEntity: AUTHORS.map((author) => buildAuthorNode(author, baseUrl)),
      },
    ],
  };
}

export function buildStandardsJsonLd(baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(baseUrl),
      {
        '@type': 'WebPage',
        '@id': resolveAbsoluteUrl(baseUrl, '/standards#webpage'),
        url: resolveAbsoluteUrl(baseUrl, '/standards'),
        name: 'Google Search & Gemini Compliance Standards – The Meridian Review',
        description:
          'Technical inspection of Schema.org JSON-LD graphs, E-E-A-T provenance, XML sitemaps, robots.txt, and llms.txt generative retrieval compliance.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How is The Meridian Review structured for Google Search and Gemini?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Every essay pairs semantic HTML5 landmarks and server-injected meta tags with linked NewsArticle, Person, BreadcrumbList, and FAQPage JSON-LD, backed by live /sitemap.xml, /robots.txt, /feed.xml, and /llms.txt endpoints.',
            },
          },
          {
            '@type': 'Question',
            name: 'What does Answer-First GEO formatting mean?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Each essay opens immediately below the headline with a 45-to-65-word factual synthesis and verifiable key points so both human scanners and generative models extract accurate answers cleanly.',
            },
          },
        ],
      },
    ],
  };
}
