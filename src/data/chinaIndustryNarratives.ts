import type { IndustryHeadlineSpec } from '../types/editorial.ts';
import {
  CHINA_INDUSTRY_NARRATIVES_PART1,
  type IndustryNarrativeSpec,
} from './chinaIndustryNarrativesPart1.ts';
import { CHINA_INDUSTRY_NARRATIVES_PART2 } from './chinaIndustryNarrativesPart2.ts';
import { CHINA_INDUSTRY_HEADLINES_1_TO_25 } from './chinaIndustryHeadlines1To25.ts';
import { CHINA_INDUSTRY_HEADLINES_26_TO_50 } from './chinaIndustryHeadlines26To50.ts';
import { EXTRA_INDUSTRIES_A1 } from './chinaIndustriesExtraA1.ts';
import { EXTRA_INDUSTRIES_A2 } from './chinaIndustriesExtraA2.ts';
import { EXTRA_INDUSTRIES_B1 } from './chinaIndustriesExtraB1.ts';
import { EXTRA_INDUSTRIES_B2 } from './chinaIndustriesExtraB2.ts';
import { EXTRA_INDUSTRIES_C1 } from './chinaIndustriesExtraC1.ts';
import { EXTRA_INDUSTRIES_C2 } from './chinaIndustriesExtraC2.ts';
import { EXTRA_INDUSTRIES_D1 } from './chinaIndustriesExtraD1.ts';
import { EXTRA_INDUSTRIES_D2 } from './chinaIndustriesExtraD2.ts';

export type { IndustryNarrativeSpec };

const EXTRA_BUNDLES = [
  ...EXTRA_INDUSTRIES_A1,
  ...EXTRA_INDUSTRIES_A2,
  ...EXTRA_INDUSTRIES_B1,
  ...EXTRA_INDUSTRIES_B2,
  ...EXTRA_INDUSTRIES_C1,
  ...EXTRA_INDUSTRIES_C2,
  ...EXTRA_INDUSTRIES_D1,
  ...EXTRA_INDUSTRIES_D2,
];

const EXTRA_NARRATIVES: Record<string, IndustryNarrativeSpec> = Object.fromEntries(
  EXTRA_BUNDLES.map((item) => [item.tuple[0], item.narrative]),
);

const EXTRA_HEADLINES: Record<string, IndustryHeadlineSpec> = Object.fromEntries(
  EXTRA_BUNDLES.map((item) => [item.tuple[0], item.headline]),
);

export const CHINA_INDUSTRY_NARRATIVES: Record<string, IndustryNarrativeSpec> = {
  ...CHINA_INDUSTRY_NARRATIVES_PART1,
  ...CHINA_INDUSTRY_NARRATIVES_PART2,
  ...EXTRA_NARRATIVES,
};

export const CHINA_INDUSTRY_HEADLINES: Record<string, IndustryHeadlineSpec> = {
  ...CHINA_INDUSTRY_HEADLINES_1_TO_25,
  ...CHINA_INDUSTRY_HEADLINES_26_TO_50,
  ...EXTRA_HEADLINES,
};

export function getIndustryNarrative(key: string): IndustryNarrativeSpec {
  const found = CHINA_INDUSTRY_NARRATIVES[key];
  if (found) return found;
  throw new Error(`Missing bespoke narrative spec for China industry: ${key}`);
}

export function getIndustryHeadline(key: string): IndustryHeadlineSpec {
  const found = CHINA_INDUSTRY_HEADLINES[key];
  if (found) return found;
  throw new Error(`Missing bespoke headline spec for China industry: ${key}`);
}
