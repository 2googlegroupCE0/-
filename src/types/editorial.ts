export type Locale = 'zh' | 'en';

export type SectionSlug =
  | 'china-llm-geo'
  | 'technical-seo'
  | 'generative-geo'
  | 'schema-semantics'
  | 'eeat-evaluation'
  | 'search-analytics';

export const CHINA_INDUSTRY_PILLAR_COUNT = 150;
export const CHINA_PLATFORM_PILLAR_COUNT = 10;
export const FOUNDATION_PILLAR_COUNT = 15;
export const TOTAL_ARTICLE_COUNT =
  CHINA_INDUSTRY_PILLAR_COUNT + CHINA_PLATFORM_PILLAR_COUNT + FOUNDATION_PILLAR_COUNT;

export interface IndustryHeadlineSpec {
  titleZh: string;
  titleEn: string;
  subtitleZh: string;
  subtitleEn: string;
  directAnswerZh: string;
  directAnswerEn: string;
  headingsZh: [string, string, string, string];
  headingsEn: [string, string, string, string];
}

export interface PlatformHeadlineSpec {
  titleZh: string;
  titleEn: string;
  subtitleZh: string;
  subtitleEn: string;
  directAnswerZh: string;
  directAnswerEn: string;
  headingsZh: [string, string, string];
  headingsEn: [string, string];
}

export interface IndustryNarrativeCore {
  plainStoryZh: string;
  plainStoryEn: string;
  aiVsSearchZh: string;
  aiVsSearchEn: string;
  badCopyZh: string;
  goodCopyZh: string;
  badCopyEn: string;
  goodCopyEn: string;
  actionStepsZh: [string, string, string];
  actionStepsEn: [string, string, string];
  practitionerNoteZh: string;
  practitionerNoteEn: string;
  customMetrics: Array<{
    labelZh: string;
    valueZh: string;
    contextZh: string;
    labelEn: string;
    valueEn: string;
    contextEn: string;
  }>;
}

export type IndustryTupleSpec = [
  key: string,
  groupZh: string,
  groupEn: string,
  zh: string,
  en: string,
  schemaType: string,
  samplePromptZh: string,
  samplePromptEn: string,
  trustSourcesZh: string,
  shortBottleneckZh: string,
  shortSolutionZh: string,
  complianceRiskZh: string,
  priceMenuHintZh: string,
];

export interface ExtraChinaIndustryBundle {
  tuple: IndustryTupleSpec;
  headline: IndustryHeadlineSpec;
  narrative: IndustryNarrativeCore;
}

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
  codeSnippet?: {
    label: string;
    code: string;
  };
}

export interface ArticleSummary {
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
  keywords: string[];
  industryKey?: string;
  platformKey?: string;
}

export interface Article extends ArticleSummary {
  keyTakeaways: string[];
  sections: ArticleSectionBlock[];
  pullQuote: string;
  faqs: ArticleFaq[];
  citations: ArticleCitation[];
}

export interface ArticleLocalization {
  title: string;
  subtitle: string;
  reviewerName?: string;
  imageAlt: string;
  imageCaption: string;
  directAnswer: string;
  keyTakeaways: string[];
  sections: ArticleSectionBlock[];
  pullQuote: string;
  faqs: ArticleFaq[];
  keywords: string[];
}
