import type {
  Article,
  ArticleSummary,
  Author,
  Locale,
  SectionInfo,
  SectionSlug,
} from '../types/editorial.ts';
import {
  CHINA_INDUSTRY_PILLAR_COUNT,
  CHINA_PLATFORM_PILLAR_COUNT,
  FOUNDATION_PILLAR_COUNT,
  TOTAL_ARTICLE_COUNT,
} from '../types/editorial.ts';
import { AUTHORS } from './authors.ts';
import { AUTHORS_ZH } from './authorsZh.ts';
import { SECTIONS } from './sections.ts';
import { SECTIONS_ZH } from './sectionsZh.ts';
import {
  CHINA_INDUSTRIES,
  CHINA_INDUSTRY_GROUPS,
  CHINA_LLM_PLATFORMS,
} from './chinaLlmTopics.ts';
import {
  buildSlugForId,
  getAdjacentArticles,
  getArticleById,
  getArticleBySlug,
  getArticleSummaryById,
  getAuthorArticleCount,
  getCorpusStats,
  getFeaturedArticles,
  getRelatedArticles,
  queryArticles,
  resolveLegacySlugRedirect,
  type ArticleSortOrder,
  type CorpusStats,
  type QueryArticlesOptions,
  type QueryArticlesResult,
} from './articlesEngine.ts';

export {
  buildSlugForId,
  CHINA_INDUSTRY_PILLAR_COUNT,
  CHINA_PLATFORM_PILLAR_COUNT,
  FOUNDATION_PILLAR_COUNT,
  TOTAL_ARTICLE_COUNT,
  CHINA_INDUSTRIES,
  CHINA_INDUSTRY_GROUPS,
  CHINA_LLM_PLATFORMS,
  getAdjacentArticles,
  getArticleById,
  getArticleBySlug,
  getArticleSummaryById,
  getAuthorArticleCount,
  getCorpusStats,
  getFeaturedArticles,
  queryArticles,
  resolveLegacySlugRedirect,
};
export type {
  ArticleSortOrder,
  ArticleSummary,
  CorpusStats,
  QueryArticlesOptions,
  QueryArticlesResult,
};

export function getRelatedLocalizedArticles(
  article: Pick<ArticleSummary, 'id' | 'section'>,
  locale: Locale,
  limit = 3,
): ArticleSummary[] {
  return getRelatedArticles(article, locale, limit);
}

export function getLocalizedAuthors(locale: Locale): Author[] {
  if (locale === 'en') return AUTHORS;
  return AUTHORS.map((author) => AUTHORS_ZH[author.id] ?? author);
}

export function getLocalizedAuthorById(id: string, locale: Locale): Author {
  const list = getLocalizedAuthors(locale);
  return list.find((a) => a.id === id) ?? list[0];
}

export function getLocalizedSections(locale: Locale): SectionInfo[] {
  return locale === 'en' ? SECTIONS : SECTIONS_ZH;
}

export function getLocalizedSectionBySlug(
  slug: SectionSlug,
  locale: Locale,
): SectionInfo {
  const list = getLocalizedSections(locale);
  return list.find((s) => s.slug === slug) ?? list[0];
}

export function stripLocalePrefix(pathname: string): {
  locale: Locale;
  basePath: string;
} {
  const clean = pathname.split('?')[0].replace(/\/+$/, '') || '/';
  if (clean === '/en') {
    return { locale: 'en', basePath: '/' };
  }
  if (clean.startsWith('/en/')) {
    return { locale: 'en', basePath: clean.slice(3) || '/' };
  }
  return { locale: 'zh', basePath: clean };
}

export function withLocalePrefix(basePath: string, locale: Locale): string {
  const clean = basePath === '/' ? '' : basePath.startsWith('/') ? basePath : `/${basePath}`;
  if (locale === 'en') {
    return clean ? `/en${clean}` : '/en';
  }
  return clean || '/';
}
