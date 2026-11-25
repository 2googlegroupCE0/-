import type { SectionInfo, SectionSlug } from '../types/editorial.ts';
import { SECTIONS } from './sections.ts';

const SECTION_ZH_COPY: Record<
  SectionSlug,
  { name: string; shortName: string; description: string; curatorialNote: string; imageAlt: string }
> = {
  'china-llm-geo': {
    name: '中国全行业与大模型 GEO 实战指南',
    shortName: '行业与大模型',
    description:
      '覆盖《国民经济行业分类》全部 20 大门类、为全国 150 个实体与政企细分行业逐一编写独立深度实战总指南，并专项拆解 DeepSeek、豆包、腾讯元宝、Kimi、通义千问与百度文心等 10 大国产模型的检索偏好与合规获客方案。',
    curatorialNote:
      '一业一篇高纯度指南，聚焦透明价目表模板、官方备案资质公示、地图口碑对齐及《广告法》防降权红线。',
    imageAlt: '午后自然光照亮现代化阅读与实体商业研究大厅。',
  },
  'technical-seo': {
    name: '技术 SEO 与检索架构',
    shortName: '技术 SEO',
    description:
      '聚焦抓取预算工程、边缘端 SSR 渲染、Core Web Vitals（LCP/INP/CLS）、规范化路由与多语言 hreflang 索引架构。',
    curatorialNote:
      '基于服务器真实抓取日志、Chromium 渲染性能追踪与 HTTP/3 缓存协议的实证研究。',
    imageAlt: '欧洲搜索检索研究实验室内的拉丝铝计算阵列与光学玻璃棱镜。',
  },
  'generative-geo': {
    name: 'GEO 生成式引擎优化',
    shortName: 'GEO 优化',
    description:
      '深研 Gemini 检索接地机制、AI Overviews 引用权重、Answer-First 段落工程、/llms.txt 标准与 RAG 语义分块精度。',
    curatorialNote:
      '通过可复现实验量化大语言模型的段落召回率、信源归因保真度与实体共现稳定性。',
    imageAlt: '阳光穿透古典石柱长廊照亮现代信息检索与生成式引擎研究桌面。',
  },
  'schema-semantics': {
    name: 'Schema 图谱与语义工程',
    shortName: 'Schema 图谱',
    description:
      '覆盖 @graph 关联 JSON-LD 建模、知识面板实体消歧、问答结构同步以及开放网络本体设计。',
    curatorialNote:
      '针对 Article、ScholarlyArticle、Person、Organization 与 FAQPage 实体图谱的形式化校验指南。',
    imageAlt: '石灰岩桌面上摆放的语义图谱规格样张、黄铜分规与精装研究专著。',
  },
  'eeat-evaluation': {
    name: 'E-E-A-T 信任与实证评估',
    shortName: 'E-E-A-T 评估',
    description:
      '解构搜索质量评估指南、YMYL 高合规领域审计、具名作者溯源账本与全站反低质冗余治理机制。',
    curatorialNote:
      '系统评估一手实证数据、独立同行审校署名与权威机构引用如何决定长期自然搜索权重。',
    imageAlt: '北欧玄武岩海岸线上的实证科研遥感观测站。',
  },
  'search-analytics': {
    name: '搜索生态与商业增长',
    shortName: '搜索增长',
    description:
      '探索 Search Console 数据建模、零点击时代归因体系、跨语种本地化增长策略与大型网站类目治理。',
    curatorialNote:
      '立足亿级展现日志与跨区 SERP 版面变迁的量化搜索需求捕获与增长分析报告。',
    imageAlt: '午后阳光洒入古典欧洲交易所大厅，象征全球搜索需求与信息资本流向。',
  },
};

export const SECTIONS_ZH: SectionInfo[] = SECTIONS.map((sec) => ({
  ...sec,
  ...SECTION_ZH_COPY[sec.slug],
}));
