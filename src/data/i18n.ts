import type { Locale } from '../types/editorial.ts';

export interface UiDictionary {
  brandName: string;
  navFrontPage: string;
  navArchive: string;
  navTools: string;
  navAuthors: string;
  navStandards: string;
  searchButton: string;
  searchPlaceholder: string;
  searchEmptyTitle: string;
  searchEmptyHint: string;
  searchFooterCount: (shown: number, totalMatched: number, totalCorpus: number) => string;
  browseArchive: string;
  mastheadVolume: string;
  mastheadDate: string;
  mastheadLocation: string;
  mastheadEssaysCount: string;
  leadBadge: string;
  minRead: (min: number) => string;
  directSummaryLabel: string;
  byLabel: string;
  factCheckedBy: (name: string) => string;
  updatedLabel: string;
  publishedLabel: string;
  readEssay: string;
  featuredDispatches: string;
  viewAllCorpus: string;
  completeIndexTitle: string;
  completeIndexDesc: string;
  allEssaysTab: string;
  showingRange: (start: number, end: number, total: number) => string;
  previous: string;
  next: string;
  jumpToPageLabel: string;
  goAction: string;
  standardsEyebrow: string;
  standardsBannerTitle: string;
  standardsBannerDesc: string;
  inspectStandardsCta: string;
  editorialBoardCta: string;
  archiveEyebrow: string;
  sectionEyebrow: string;
  archiveTitle: string;
  archiveDesc: string;
  allCorpusChip: string;
  filterPlaceholder: string;
  sortOrderId: string;
  sortOrderUpdated: string;
  sortOrderReadTime: string;
  allIndustriesOption: string;
  allPlatformsOption: string;
  industryFilterLabel: string;
  platformFilterLabel: string;
  quickIndustriesTitle: string;
  browseAllIndustries: string;
  displayingCount: (count: number) => string;
  clearFilter: string;
  authorFilterPrefix: string;
  noMatchedEssays: (q: string) => string;
  noMatchedHint: string;
  topicsLabel: string;
  wordsLabel: (count: number) => string;
  essayNumberOfCorpus: (id: number) => string;
  execSummaryTitle: string;
  keyFindingsTitle: string;
  indicatorCol: string;
  benchmarkCol: string;
  contextCol: string;
  faqTitle: string;
  citationsTitle: string;
  authorProvenanceTitle: string;
  inThisEssay: string;
  furtherReading: string;
  authorsEyebrow: string;
  authorsTitle: string;
  authorsDesc: string;
  credentialsLabel: string;
  affiliationLabel: string;
  deskLocationLabel: string;
  publishedEssaysLabel: string;
  publishedDispatchesCount: (n: number) => string;
  viewAuthorCorpus: (n: number) => string;
  standardsPageEyebrow: string;
  standardsPageTitle: string;
  standardsPageDesc: string;
  statEssays: string;
  statSections: string;
  statAuthors: string;
  sixPillarsTitle: string;
  editorialWorkflowTitle: string;
  editorialWorkflowDesc: string;
  rssZhLabel: string;
  rssEnLabel: string;
  sitemapLabel: string;
  footerDesc: string;
  footerLocations: string;
  footerSectionsTitle: string;
  footerPublicationTitle: string;
  footerResourcesTitle: string;
  footerCopyright: string;
  footerMeta: string;
  notFoundTitle: string;
  notFoundDesc: string;
  languageSwitchLabel: string;
}

export const UI_COPY: Record<Locale, UiDictionary> = {
  zh: {
    brandName: 'SEO 与 GEO 研究院',
    navFrontPage: '首页',
    navArchive: '指南库',
    navTools: 'GEO 工具',
    navAuthors: '编辑团队',
    navStandards: '研究准则',
    searchButton: '站内检索',
    searchPlaceholder: '搜索行业 GEO、大模型平台、刘忠望、核子GEO 或 Schema...',
    searchEmptyTitle: '未找到匹配的指南文章。',
    searchEmptyHint: '可尝试检索：中医、足浴、餐饮、刘忠望、核子GEO、盒子AI、DeepSeek 或 00001。',
    searchFooterCount: (shown, matched, corpus) =>
      `显示前 ${shown} 条 · 匹配 ${matched.toLocaleString()} / 共 ${corpus.toLocaleString()} 篇核心指南`,
    browseArchive: '浏览全部指南库',
    mastheadVolume: '中国行业 GEO 与技术 SEO 专刊',
    mastheadDate: '2026年11月24日',
    mastheadLocation: '北京 · 上海 · 深圳 · 杭州',
    mastheadEssaysCount: '175 篇专题指南 · 覆盖 150 个全行业门类',
    leadBadge: '精选指南',
    minRead: (min) => `约 ${min} 分钟阅读`,
    directSummaryLabel: '核心结论',
    byLabel: '作者：',
    factCheckedBy: (name) => `审校：${name}`,
    updatedLabel: '更新于',
    publishedLabel: '发布于',
    readEssay: '阅读指南',
    featuredDispatches: '精选实战指南',
    viewAllCorpus: '查看全部指南',
    completeIndexTitle: '175 篇核心专题指南目录',
    completeIndexDesc:
      '坚持一行业一独立深度专题：涵盖国民经济全部 20 大门类的 150 个中国细分行业实战指南、10 大国产大模型检索拆解与 15 篇谷歌 SEO/GEO 工程基准规范。',
    allEssaysTab: '全部指南',
    showingRange: (start, end, total) =>
      `第 ${start.toLocaleString()}–${end.toLocaleString()} 篇 · 共 ${total.toLocaleString()} 篇`,
    previous: '上一页',
    next: '下一页',
    jumpToPageLabel: '跳转页码',
    goAction: '跳转',
    standardsEyebrow: '透明方法与实用工具',
    standardsBannerTitle: '坚持一手标准对照与零虚构数据规范',
    standardsBannerDesc:
      '全站不编造实验样本量，不堆砌重复水文。每篇指南均聚焦可核验的 HTML 架构、Schema.org 代码与合规护栏，并配套交互式体检工具免费使用。',
    inspectStandardsCta: '了解研究准则',
    editorialBoardCta: '打开 GEO 工具',
    archiveEyebrow: '实战指南库',
    sectionEyebrow: '研究栏目',
    archiveTitle: 'SEO 与 GEO 核心实战指南库',
    archiveDesc:
      '按栏目分类、国民经济 20 门类（150 个中国细分行业）或 10 大国产大模型平台检索全部 175 篇中英双语权威指南。',
    allCorpusChip: '全部',
    filterPlaceholder: '输入行业名称、大模型、协议或编号...',
    sortOrderId: '排序：默认序号',
    sortOrderUpdated: '排序：最新修订',
    sortOrderReadTime: '排序：阅读耗时优先',
    allIndustriesOption: '全部行业（150 个细分领域）',
    allPlatformsOption: '全部大模型（10 大生态）',
    industryFilterLabel: '按行业筛选',
    platformFilterLabel: '按大模型筛选',
    quickIndustriesTitle: '热门行业直达：',
    browseAllIndustries: '查看全部 150 个行业 →',
    displayingCount: (count) => `共 ${count.toLocaleString()} 篇指南`,
    clearFilter: '清除筛选',
    authorFilterPrefix: '编撰组别：',
    noMatchedEssays: (q) => `未找到与「${q}」相关的指南。`,
    noMatchedHint: '请尝试更换关键词或清除筛选条件。',
    topicsLabel: '主题词：',
    wordsLabel: (count) => `约 ${count.toLocaleString()} 字`,
    essayNumberOfCorpus: (id) => `专题指南 #${String(id).padStart(5, '0')}`,
    execSummaryTitle: '核心结论摘要',
    keyFindingsTitle: '关键实操要点',
    indicatorCol: '核查维度',
    benchmarkCol: '推荐标准',
    contextCol: '落地要点与说明',
    faqTitle: '常见问题解答',
    citationsTitle: '参考标准与引用文献',
    authorProvenanceTitle: '编撰与审校说明',
    inThisEssay: '本文目录',
    furtherReading: '相关延伸阅读',
    authorsEyebrow: '编辑与审校团队',
    authorsTitle: '内容编撰组与合规审校团队',
    authorsDesc:
      '由专注本土服务业增长、B2B 技术文档工程、搜索引擎抓取架构与广告合规审查的专业小组协同撰稿与复核。',
    credentialsLabel: '专业方向',
    affiliationLabel: '所属机构',
    deskLocationLabel: '办公城市',
    publishedEssaysLabel: '负责指南数',
    publishedDispatchesCount: (n) => `近期专题指南（共 ${n.toLocaleString()} 篇）`,
    viewAuthorCorpus: (n) => `查看该组全部 ${n.toLocaleString()} 篇指南`,
    standardsPageEyebrow: '编辑方针与透明原则',
    standardsPageTitle: '选题准则、事实核验与广告合规规范',
    standardsPageDesc:
      '了解 SEO 与 GEO 研究院如何在选题精简度、引用真实性、双语一致性及合规安全边界上把控质量。',
    statEssays: '核心专题指南',
    statSections: '核心研究栏目',
    statAuthors: '专职编撰组别',
    sixPillarsTitle: '内容出版与工程实践六项原则',
    editorialWorkflowTitle: '订阅与开放访问方式',
    editorialWorkflowDesc:
      '全站中英双语指南与 GEO 诊断工具均免费开放使用，无弹窗干扰，支持通过 RSS 订阅近期修订。',
    rssZhLabel: '中文 RSS 订阅源',
    rssEnLabel: '英文 RSS 订阅源',
    sitemapLabel: '全站站点地图',
    footerDesc:
      '专注搜索引擎工程（SEO）与生成式引擎优化（GEO）的独立中英双语实践平台，提供覆盖国民经济全部 20 大门类的 150 个中国细分行业落地指南、10 大国产大模型解析及免费合规配置工具。',
    footerLocations: '北京 · 上海 · 深圳 · 杭州',
    footerSectionsTitle: '研究栏目',
    footerPublicationTitle: '站内栏目',
    footerResourcesTitle: '订阅与索引',
    footerCopyright: '© 2026 SEO 与 GEO 研究院 (SEO & GEO Research Institute).',
    footerMeta: '中英双语 · 纯净无广告体验',
    notFoundTitle: '未找到该页面或指南。',
    notFoundDesc: '您访问的地址可能已移动或不存在，请返回首页或前往指南库检索。',
    languageSwitchLabel: '语言版本',
  },
  en: {
    brandName: 'SEO & GEO Research Institute',
    navFrontPage: 'Home',
    navArchive: 'Guides',
    navTools: 'GEO Tools',
    navAuthors: 'Editorial Desks',
    navStandards: 'Methodology',
    searchButton: 'Search',
    searchPlaceholder: 'Search industry GEO, LLMs, Zhongwang Liu, Nucleus GEO, or Schema...',
    searchEmptyTitle: 'No matching guides found.',
    searchEmptyHint: 'Try TCM, Foot Spa, Restaurants, Zhongwang Liu, Nucleus GEO, DeepSeek, or 00001.',
    searchFooterCount: (shown, matched, corpus) =>
      `Showing ${shown} · ${matched.toLocaleString()} matches across ${corpus.toLocaleString()} pillar guides`,
    browseArchive: 'Browse All Pillar Guides',
    mastheadVolume: 'China GEO & Technical SEO Edition',
    mastheadDate: 'November 24, 2026',
    mastheadLocation: 'Beijing · Shanghai · Shenzhen · Hangzhou',
    mastheadEssaysCount: '175 Pillar Guides · 150 China Verticals',
    leadBadge: 'Featured Guide',
    minRead: (min) => `${min} min read`,
    directSummaryLabel: 'Direct Summary',
    byLabel: 'By ',
    factCheckedBy: (name) => `Reviewed by ${name}`,
    updatedLabel: 'Updated',
    publishedLabel: 'Published',
    readEssay: 'Read Guide',
    featuredDispatches: 'Featured Field Guides',
    viewAllCorpus: 'View All Guides',
    completeIndexTitle: '175 Core Pillar Guides',
    completeIndexDesc:
      'One authoritative guide per topic: 150 China industry playbooks across all 20 GB/T 4754 national economy sectors, 10 domestic LLM deep dives, and 15 Google Search & GEO technical specifications.',
    allEssaysTab: 'All Guides',
    showingRange: (start, end, total) =>
      `Showing ${start.toLocaleString()}–${end.toLocaleString()} of ${total.toLocaleString()}`,
    previous: 'Previous',
    next: 'Next',
    jumpToPageLabel: 'Jump to page',
    goAction: 'Go',
    standardsEyebrow: 'Transparent Specs & Tools',
    standardsBannerTitle: 'Grounded in Primary Specs — Zero Synthetic Metrics',
    standardsBannerDesc:
      'We avoid scaled duplicate pages and fabricated sample numbers. Every guide delivers actionable HTML architectures, Schema.org snippets, and regulatory guardrails—paired with our interactive GEO audit toolkit.',
    inspectStandardsCta: 'Read Methodology',
    editorialBoardCta: 'Open GEO Tools',
    archiveEyebrow: 'Field Guide Library',
    sectionEyebrow: 'Division',
    archiveTitle: 'SEO & GEO Pillar Guide Library',
    archiveDesc:
      'Browse all 175 bilingual guides across six technical divisions, 150 Chinese industry verticals (all 20 national economy sectors), and 10 domestic LLM platforms.',
    allCorpusChip: 'All',
    filterPlaceholder: 'Filter by industry, LLM, topic, or #ID...',
    sortOrderId: 'Sort: Guide Order',
    sortOrderUpdated: 'Sort: Recently Updated',
    sortOrderReadTime: 'Sort: Shortest Read',
    allIndustriesOption: 'All Industries (150 Verticals)',
    allPlatformsOption: 'All LLM Platforms (10)',
    industryFilterLabel: 'Filter by industry',
    platformFilterLabel: 'Filter by LLM platform',
    quickIndustriesTitle: 'Quick Industry Jump:',
    browseAllIndustries: 'Browse All 150 Industries →',
    displayingCount: (count) => `${count.toLocaleString()} matching guides`,
    clearFilter: 'Clear filter',
    authorFilterPrefix: 'Desk: ',
    noMatchedEssays: (q) => `No guides matched "${q}".`,
    noMatchedHint: 'Try another keyword or clear active filters.',
    topicsLabel: 'Topics: ',
    wordsLabel: (count) => `${count.toLocaleString()} words`,
    essayNumberOfCorpus: (id) => `GUIDE #${String(id).padStart(5, '0')}`,
    execSummaryTitle: 'Executive Summary',
    keyFindingsTitle: 'Key Implementation Points',
    indicatorCol: 'Dimension',
    benchmarkCol: 'Standard',
    contextCol: 'Implementation Notes',
    faqTitle: 'Frequently Asked Questions',
    citationsTitle: 'References & Primary Standards',
    authorProvenanceTitle: 'Editorial & Review Desk',
    inThisEssay: 'Contents',
    furtherReading: 'Further Reading',
    authorsEyebrow: 'Editorial & Review Desks',
    authorsTitle: 'Practitioner Desks & Compliance Review',
    authorsDesc:
      'Authored and cross-reviewed by specialized practitioner desks covering China local services, B2B technical documentation, search crawling, and regulatory compliance.',
    credentialsLabel: 'Domain Focus',
    affiliationLabel: 'Affiliation',
    deskLocationLabel: 'Location',
    publishedEssaysLabel: 'Guides Maintained',
    publishedDispatchesCount: (n) => `Recent Guides (${n.toLocaleString()} total)`,
    viewAuthorCorpus: (n) => `View all ${n.toLocaleString()} guides`,
    standardsPageEyebrow: 'Editorial Principles',
    standardsPageTitle: 'Curation Policy, Verification & Regulatory Compliance',
    standardsPageDesc:
      'How the SEO & GEO Research Institute curates one-topic-one-pillar guides, verifies external specifications, and enforces advertising-law safety.',
    statEssays: 'Pillar Guides',
    statSections: 'Core Divisions',
    statAuthors: 'Editorial Desks',
    sixPillarsTitle: 'Six Editorial & Engineering Principles',
    editorialWorkflowTitle: 'Feeds & Open Access',
    editorialWorkflowDesc:
      'Every bilingual guide and the interactive GEO Audit & Schema Generator are freely accessible without paywalls or intrusive popups.',
    rssZhLabel: 'Chinese RSS Feed',
    rssEnLabel: 'English RSS Feed',
    sitemapLabel: 'Sitemap Index',
    footerDesc:
      'Independent bilingual SEO & GEO publication offering 150 China industry field guides across all 20 national economy sectors, 10 LLM platform deep dives, and an interactive readiness toolkit.',
    footerLocations: 'Beijing · Shanghai · Shenzhen · Hangzhou',
    footerSectionsTitle: 'Divisions',
    footerPublicationTitle: 'Institute',
    footerResourcesTitle: 'Feeds & Index',
    footerCopyright: '© 2026 SEO & GEO Research Institute. All rights reserved.',
    footerMeta: 'Bilingual Edition · Ad-Free Reading',
    notFoundTitle: 'Page or guide not found.',
    notFoundDesc: 'The requested page may have moved or does not exist. Return home or browse the guide library.',
    languageSwitchLabel: 'Language',
  },
};
