import type { SectionInfo, SectionSlug } from '../types/editorial.ts';

export const SECTIONS: SectionInfo[] = [
  {
    slug: 'technology-and-search',
    name: 'Technology & Search',
    shortName: 'Technology',
    description:
      'Semantic web architecture, Google Search E-E-A-T engineering, Core Web Vitals, and generative retrieval optimization.',
    curatorialNote:
      'Reporting on how structured knowledge graphs, clean markup, and human-verified provenance govern modern search visibility.',
    image: '/src/assets/images/section_ai_systems_1795444152985.jpg',
    imageAlt: 'Brushed aluminum computing monoliths and optical glass prisms in a sunlit European research laboratory.',
  },
  {
    slug: 'global-economy',
    name: 'Global Economy',
    shortName: 'Economy',
    description:
      'Industrial electrification, North Atlantic supply corridors, sovereign compute economics, and institutional capital markets.',
    curatorialNote:
      'Primary-source macroeconomics grounded in port throughput, capital expenditure filings, and central bank balance sheets.',
    image: '/src/assets/images/section_global_economy_1795444152846.jpg',
    imageAlt: 'Sunlit classical European financial exchange hall and travertine colonnade with afternoon shadows.',
  },
  {
    slug: 'design-and-craft',
    name: 'Design & Craft',
    shortName: 'Design',
    description:
      'Swiss grid systems, broadsheet typography, archival reading ergonomics, and civic architectural restraint.',
    curatorialNote:
      'Critical studies of proportional measure, optical contrast, and durable editorial interfaces built for concentrated reading.',
    image: '/src/assets/images/section_design_craft_1795444152910.jpg',
    imageAlt: 'Printed typographic grid specimen sheets, brass dividers, and linen-bound books on a limestone desk.',
  },
  {
    slug: 'science-and-climate',
    name: 'Science & Climate',
    shortName: 'Science',
    description:
      'Deep geothermal baseload, oceanic carbon telemetry, HVDC interconnectors, and physics-informed climate modeling.',
    curatorialNote:
      'Empirical dispatches from field observatories, grid operators, and peer-reviewed materials laboratories.',
    image: '/src/assets/images/section_science_climate_1795444152521.jpg',
    imageAlt: 'Nordic geothermal and marine research observatory along a misty basalt coastline at dawn.',
  },
  {
    slug: 'culture-and-society',
    name: 'Culture & Society',
    shortName: 'Culture',
    description:
      'Independent print quarterlies, civic libraries, verifiable fact-checking ledgers, and calm digital institutions.',
    curatorialNote:
      'Long-form essays examining how enduring civic spaces cultivate deep literacy and public trust.',
    image: '/src/assets/images/section_culture_society_1795444152185.jpg',
    imageAlt: 'Quiet sunlit European university reading room with tall oak bookshelves and arched windows.',
  },
];

export const SECTIONS_BY_SLUG: Record<SectionSlug, SectionInfo> = Object.fromEntries(
  SECTIONS.map((section) => [section.slug, section]),
) as Record<SectionSlug, SectionInfo>;
