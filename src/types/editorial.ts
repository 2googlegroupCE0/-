export type SectionSlug =
  | 'technology-and-search'
  | 'global-economy'
  | 'design-and-craft'
  | 'science-and-climate'
  | 'culture-and-society';

export interface SectionInfo {
  slug: SectionSlug;
  name: string;
  shortName: string;
  description: string;
  curatorialNote: string;
  image: string;
  imageAlt: string;
}

export interface Author {
  id: string;
  name: string;
  role: string;
  credentials: string;
  location: string;
  beat: string;
  bio: string;
  experienceYears: number;
  affiliation: string;
}

export interface ArticleFaq {
  question: string;
  answer: string;
}

export interface ArticleCitation {
  title: string;
  publisher: string;
  year: string;
  url: string;
}

export interface ArticleMetricRow {
  label: string;
  value: string;
  context: string;
}

export interface ArticleSectionBlock {
  id: string;
  heading: string;
  paragraphs: string[];
  metrics?: ArticleMetricRow[];
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  section: SectionSlug;
  authorId: string;
  reviewerName: string;
  publishedAt: string;
  updatedAt: string;
  readTimeMinutes: number;
  wordCount: number;
  featured: boolean;
  isLead?: boolean;
  image: string;
  imageAlt: string;
  imageCaption: string;
  directAnswer: string;
  keyTakeaways: string[];
  sections: ArticleSectionBlock[];
  pullQuote: string;
  faqs: ArticleFaq[];
  citations: ArticleCitation[];
  keywords: string[];
}
