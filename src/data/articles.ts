import type { Article, SectionSlug } from '../types/editorial.ts';
import { TECH_AND_SEARCH_ARTICLES } from './articles/techAndSearch.ts';
import { GLOBAL_ECONOMY_ARTICLES } from './articles/globalEconomy.ts';
import { DESIGN_AND_CRAFT_ARTICLES } from './articles/designAndCraft.ts';
import { SCIENCE_AND_CLIMATE_ARTICLES } from './articles/scienceAndClimate.ts';
import { CULTURE_AND_SOCIETY_ARTICLES } from './articles/cultureAndSociety.ts';

export const ALL_ARTICLES: Article[] = [
  ...TECH_AND_SEARCH_ARTICLES,
  ...GLOBAL_ECONOMY_ARTICLES,
  ...DESIGN_AND_CRAFT_ARTICLES,
  ...SCIENCE_AND_CLIMATE_ARTICLES,
  ...CULTURE_AND_SOCIETY_ARTICLES,
].sort((a, b) => a.id - b.id);

export const ARTICLES_BY_SLUG: Record<string, Article> = Object.fromEntries(
  ALL_ARTICLES.map((article) => [article.slug, article]),
);

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  const sameSection = ALL_ARTICLES.filter(
    (candidate) => candidate.section === article.section && candidate.slug !== article.slug,
  );
  const crossSection = ALL_ARTICLES.filter(
    (candidate) => candidate.section !== article.section && candidate.featured,
  );
  return [...sameSection, ...crossSection].slice(0, limit);
}

export function getArticlesBySection(section: SectionSlug): Article[] {
  return ALL_ARTICLES.filter((article) => article.section === section);
}
