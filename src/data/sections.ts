import type { SectionInfo, SectionSlug } from '../types/editorial.ts';

export const SECTIONS: SectionInfo[] = [
  {
    slug: 'china-llm-geo',
    name: 'China LLM & Industry Playbooks',
    shortName: 'China Industry GEO',
    description:
      'One authoritative field guide for each of China’s 150 verticals spanning all 20 GB/T 4754 national economy sectors, plus 10 deep-dive guides covering DeepSeek, Doubao, Tencent Yuanbao, Kimi, Qwen, and ERNIE.',
    curatorialNote:
      'Focused on transparent price tables, verified business licenses, multi-platform NAP parity, and Advertising Law compliance.',
    image: '/src/assets/images/section_culture_society_1795444152185.jpg',
    imageAlt: 'Modern architectural reading hall illuminated by warm daylight representing Chinese industry research.',
  },
  {
    slug: 'technical-seo',
    name: 'Technical SEO & Retrieval',
    shortName: 'Technical SEO',
    description:
      'Crawl budget engineering, Edge SSR, Core Web Vitals (LCP/INP/CLS), canonicalization, and multilingual hreflang architecture.',
    curatorialNote:
      'Empirical studies grounded in server crawl logs, Chromium trace telemetry, and HTTP/3 caching protocols.',
    image: '/src/assets/images/section_ai_systems_1795444152985.jpg',
    imageAlt: 'Server monoliths and optical prisms inside a European search retrieval research facility.',
  },
  {
    slug: 'generative-geo',
    name: 'Generative Engine Optimization',
    shortName: 'GEO Research',
    description:
      'Gemini grounding mechanics, AI Overviews citation salience, Answer-First prose engineering, /llms.txt standards, and RAG passage chunking.',
    curatorialNote:
      'Reproducible experiments measuring LLM retrieval precision, grounded attribution fidelity, and semantic passage density.',
    image: '/src/assets/images/editorial_hero_architecture_1795444152682.jpg',
    imageAlt: 'Sunlight streaming across classical stone columns and modern digital research desks.',
  },
  {
    slug: 'schema-semantics',
    name: 'Schema Graphs & Semantics',
    shortName: 'Schema Graphs',
    description:
      'Linked JSON-LD @graph modeling, Knowledge Panel entity reconciliation, FAQ parity, and open-web ontology design.',
    curatorialNote:
      'Formal structural validation covering Article, ScholarlyArticle, Person, Organization, Product, and FAQPage schemas.',
    image: '/src/assets/images/section_design_craft_1795444152910.jpg',
    imageAlt: 'Structured typographic specification grids, brass dividers, and bound semantic ontology volumes.',
  },
  {
    slug: 'eeat-evaluation',
    name: 'E-E-A-T & Quality Trust',
    shortName: 'E-E-A-T Trust',
    description:
      'Search Quality Rater Guidelines, YMYL verification protocols, author provenance ledgers, and anti-spam content integrity.',
    curatorialNote:
      'Research auditing how verifiable first-hand evidence, peer review, and institutional citations govern organic authority.',
    image: '/src/assets/images/section_science_climate_1795444152521.jpg',
    imageAlt: 'Nordic telemetry observatory monitoring verified empirical field measurements along a basalt coast.',
  },
  {
    slug: 'search-analytics',
    name: 'Search Ecosystem & Growth',
    shortName: 'Search Analytics',
    description:
      'Search Console telemetry modeling, zero-click attribution, cross-market localization, and enterprise taxonomy governance.',
    curatorialNote:
      'Quantitative analysis of SERP surface shifts, entity-level demand capture, and multi-market organic growth.',
    image: '/src/assets/images/section_global_economy_1795444152846.jpg',
    imageAlt: 'Classical European exchange hall representing global search demand and market intelligence.',
  },
];

export const SECTIONS_BY_SLUG: Record<SectionSlug, SectionInfo> = Object.fromEntries(
  SECTIONS.map((section) => [section.slug, section]),
) as Record<SectionSlug, SectionInfo>;
