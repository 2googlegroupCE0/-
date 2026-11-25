import type {
  Article,
  ArticleCitation,
  ArticleSummary,
  Locale,
  SectionSlug,
} from '../types/editorial.ts';
import {
  CHINA_INDUSTRY_PILLAR_COUNT,
  CHINA_PLATFORM_PILLAR_COUNT,
  TOTAL_ARTICLE_COUNT,
} from '../types/editorial.ts';
import { AUTHORS, AUTHORS_BY_ID } from './authors.ts';
import { AUTHORS_ZH } from './authorsZh.ts';
import { PRIMARY_CITATIONS } from './instituteTopics.ts';
import { CHINA_INDUSTRIES, CHINA_LLM_PLATFORMS } from './chinaLlmTopics.ts';
import { getIndustryHeadline, getIndustryNarrative } from './chinaIndustryNarratives.ts';
import { CHINA_PLATFORM_HEADLINES } from './chinaPlatformHeadlines.ts';
import { SECTIONS, SECTIONS_BY_SLUG } from './sections.ts';
import { SECTIONS_ZH } from './sectionsZh.ts';

interface FoundationGuideSpec {
  id: number;
  key: string;
  section: Exclude<SectionSlug, 'china-llm-geo'>;
  authorId: string;
  titleZh: string;
  titleEn: string;
  subtitleZh: string;
  subtitleEn: string;
  directAnswerZh: string;
  directAnswerEn: string;
  protocol: string;
  codeZh: string;
  codeEn: string;
  checklist: Array<{ labelZh: string; valueZh: string; contextZh: string; labelEn: string; valueEn: string; contextEn: string }>;
  sectionsZh: Array<{ id: string; heading: string; paragraphs: string[] }>;
  sectionsEn: Array<{ id: string; heading: string; paragraphs: string[] }>;
  faqsZh: Array<{ question: string; answer: string }>;
  faqsEn: Array<{ question: string; answer: string }>;
  pullQuoteZh: string;
  pullQuoteEn: string;
  citationIndices: [number, number, number];
  updatedAt: string;
  publishedAt: string;
}

const FOUNDATION_GUIDES: FoundationGuideSpec[] = [
  {
    id: 161,
    key: 'edge-ssr-initial-html',
    section: 'technical-seo',
    authorId: 'tech-seo-desk',
    titleZh: '服务端首包 HTML 直出（SSR）与 Googlebot 抓取渲染优化规范',
    titleEn: 'Server-Side Initial HTML Rendering (SSR) & Googlebot Indexing Architecture',
    subtitleZh: '依据 Google Search Central JavaScript SEO 官方文档，解析为何大型内容站必须放弃空白单页壳子',
    subtitleEn: 'Applying Google Search Central JavaScript SEO guidelines to eliminate empty SPA shells in large publications',
    directAnswerZh: 'Googlebot 对需要客户端 JavaScript 才能加载正文的网页会额外排入 Web Rendering Service（WRS）延迟队列。通过在服务端 HTTP 首包（Status 200）直接输出完整正文、标题、规范链接与结构化数据，可将索引发现链路缩短为单跳抓取，显著降低漏抓与延迟风险。',
    directAnswerEn: 'Googlebot defers client-rendered pages to its Web Rendering Service (WRS) queue. Emitting complete semantic HTML, headings, canonical links, and JSON-LD directly in the initial HTTP 200 response enables deterministic single-pass indexing.',
    protocol: 'HTTP SSR + Canonical Governance',
    codeZh: `<!-- 首包 HTML 直接包含语义骨架与完整文本 -->
<link rel="canonical" href="https://example.cn/articles/guide-00161-edge-ssr-initial-html" />
<link rel="alternate" hreflang="zh-CN" href="https://example.cn/articles/guide-00161-edge-ssr-initial-html" />
<link rel="alternate" hreflang="en" href="https://example.cn/en/articles/guide-00161-edge-ssr-initial-html" />
# 响应头建议：
# Cache-Control: public, max-age=300, stale-while-revalidate=3600
# X-Robots-Tag: index, follow, max-image-preview:large, max-snippet:-1`,
    codeEn: `<!-- Initial HTTP 200 response carries full semantic markup -->
<link rel="canonical" href="https://example.com/en/articles/guide-00161-edge-ssr-initial-html" />
<link rel="alternate" hreflang="zh-CN" href="https://example.com/articles/guide-00161-edge-ssr-initial-html" />
<link rel="alternate" hreflang="en" href="https://example.com/en/articles/guide-00161-edge-ssr-initial-html" />`,
    checklist: [
      { labelZh: '首包 HTML 正文可用性', valueZh: '100% 核心正文直出', contextZh: '禁止仅向爬虫返回空白 <div id="root"></div>', labelEn: 'Initial HTML Body', valueEn: 'Full Semantic Content', contextEn: 'Avoid empty client-only <div id="root"></div> shells' },
      { labelZh: 'Core Web Vitals · LCP', valueZh: '≤ 2.5 秒', contextZh: 'Google 官方“良好”阈值基准（75 分位移动访问）', labelEn: 'Core Web Vitals · LCP', valueEn: '≤ 2.5 seconds', contextEn: 'Official Google Search good experience threshold (P75)' },
      { labelZh: 'Core Web Vitals · INP', valueZh: '≤ 200 毫秒', contextZh: '避免主线程长任务阻塞交互响应', labelEn: 'Core Web Vitals · INP', valueEn: '≤ 200 ms', contextEn: 'Official responsiveness threshold at the 75th percentile' },
      { labelZh: '无效路由状态码', valueZh: '真实 HTTP 404 / 410', contextZh: '禁止对不存在的页面返回 200 状态码（Soft-404）', labelEn: 'Missing Route Status', valueEn: 'HTTP 404 / 410', contextEn: 'Prevent Soft-404 traps; pair with noindex, nofollow' },
    ],
    sectionsZh: [
      {
        id: 'wrs-queue-bottleneck',
        heading: '一、客户端单页应用（SPA）在搜索引擎抓取中的真实代价',
        paragraphs: [
          '当站点仅依赖浏览器端 JavaScript 挂载 DOM 时，Googlebot 第一波抓取看到的往往只有一个空白容器节点，必须等待 WRS 调度空闲算力执行脚本后才能看到标题与正文。此外，国内搜索引擎与部分国产大模型抓取代理（如微信搜一问、Kimi 实时浏览）对重度客户端脚本的解析超时限制更为严格。',
          '因此，面向公开信息检索的内容网站与行业指南库，应当由服务端路由层在响应首次请求时即把 <title>、<meta name="description">、JSON-LD 以及完整 <article> 正文写入 HTML 响应体。',
        ],
      },
      {
        id: 'soft-404-and-budget',
        heading: '二、杜绝 Soft-404 与无效参数膨胀',
        paragraphs: [
          '大量前端路由站点容易出现“路由未匹配时服务器仍返回 HTTP 200 + 统一 index.html”的 Soft-404 隐患，这会让搜索引擎误以为存在大量内容空白的废页。正确的工程实践是在服务端路由入口先行校验目标路径是否真实存在：不存在则显式返回 HTTP 404 状态码及 <meta name="robots" content="noindex, nofollow" />。',
        ],
      },
    ],
    sectionsEn: [
      {
        id: 'wrs-queue-bottleneck',
        heading: '1. Why Client-Only Rendering Slows Search & AI Crawlers',
        paragraphs: [
          'When pages rely exclusively on client-side hydration to populate `<div id="root">`, Googlebot’s first-pass HTML parser sees an empty container and must defer indexing to the Web Rendering Service (WRS). Many domestic and lightweight AI retrieval bots apply even stricter JavaScript execution timeouts.',
          'Emitting complete `<title>`, meta descriptions, structured JSON-LD, and full semantic article markup directly in the initial HTTP 200 payload guarantees immediate comprehension.',
        ],
      },
      {
        id: 'soft-404-and-budget',
        heading: '2. Eliminating Soft-404s & Ephemeral Parameter Bloat',
        paragraphs: [
          'Single-page applications often return HTTP 200 for unknown URLs before client JavaScript renders a “Not Found” view—causing Soft-404 warnings in Search Console. Always validate route existence on the server and serve genuine HTTP 404 with `noindex, nofollow` for missing paths.',
        ],
      },
    ],
    faqsZh: [
      { question: '使用 React 或 Vue 构建内容网站是否必须做服务端渲染（SSR）？', answer: '若网站依靠自然搜索与大模型收录获取长期流量，强烈建议在服务端输出完整首包正文与规范元数据，避免仅依赖客户端脚本加载。' },
      { question: '如何检查页面是否存在 Soft-404 问题？', answer: '使用 curl -I 访问一个确定不存在的随机路径，若返回 HTTP/1.1 200 OK 且缺少 noindex 标签，即说明存在 Soft-404 隐患，应在服务端修正为 404。' },
      { question: '静态资源缓存应该如何设置以免干扰内容更新？', answer: 'HTML 页面可配置短时缓存或 stale-while-revalidate，带哈希指纹的 JS/CSS 资源则可设置长期不可变缓存。' },
    ],
    faqsEn: [
      { question: 'Does a React publication need server-rendered HTML for SEO?', answer: 'Yes. Emitting full article content, titles, and JSON-LD in the initial server HTML prevents rendering-queue delays across search and AI crawlers.' },
      { question: 'How can teams verify that Soft-404s are eliminated?', answer: 'Inspect HTTP headers via `curl -I` on invalid slugs; servers must return HTTP 404 (not 200) paired with `noindex, nofollow`.' },
      { question: 'What Core Web Vitals targets should content pages aim for?', answer: 'Google’s published good thresholds are LCP ≤ 2.5s, INP ≤ 200ms, and CLS ≤ 0.1 at the 75th percentile of mobile visits.' },
    ],
    pullQuoteZh: '服务端首包直出完整语义正文与真实 HTTP 状态码，是内容型网站赢得搜索引擎抓取信任的工程起点。',
    pullQuoteEn: 'Emitting complete semantic markup and accurate HTTP status codes on the first byte forms the bedrock of reliable search indexing.',
    citationIndices: [0, 3, 9],
    updatedAt: '2026-11-22',
    publishedAt: '2026-10-14',
  },
  {
    id: 162,
    key: 'sitemap-and-robots-discipline',
    section: 'technical-seo',
    authorId: 'tech-seo-desk',
    titleZh: 'XML Sitemap 分片治理、Canonical 规范链与 robots.txt 授权规范',
    titleEn: 'XML Sitemap Partitioning, Canonical Hygiene & RFC 9309 Robots Rules',
    subtitleZh: '严格遵循 Sitemaps.org 与 Google 抓取预算原则，确保每一条提交 URL 均为真实高价值规范页',
    subtitleEn: 'Following Sitemaps.org limits and canonical discipline so every submitted URL represents a distinct, index-worthy page',
    directAnswerZh: '站点地图绝不是“把所有排列组合 URL 全塞进去”。依据 Google 与 Sitemaps.org 官方协议，单个 XML 站点地图不得超过 50,000 条 URL 或 50MB，且其中只应列出返回 HTTP 200、无 noindex、自引用 Canonical 的真正高价值核心页。',
    directAnswerEn: 'Sitemaps should never dump thin URL permutations. Following Google Search Central and Sitemaps.org limits (max 50,000 URLs / 50MB per shard), submit only HTTP 200, indexable, self-canonical pillar URLs.',
    protocol: 'Sitemaps.org + RFC 9309',
    codeZh: `User-agent: *
Allow: /
Sitemap: https://example.cn/sitemap.xml

# 在 XML Sitemap 中务必匹配 <xhtml:link rel="alternate" hreflang="..." />
# 仅收录 HTTP 200 + 可索引 + 自引用规范链接的高价值页面`,
    codeEn: `User-agent: *
Allow: /
Sitemap: https://example.com/sitemap.xml`,
    checklist: [
      { labelZh: '单分片 URL 上限', valueZh: '≤ 50,000 URLs / 50MB', contextZh: 'Sitemaps.org 官方硬性技术限制（建议按 1,000 条分片）', labelEn: 'Shard Capacity Limit', valueEn: '≤ 50,000 URLs / 50MB', contextEn: 'Official Sitemaps.org protocol maximum' },
      { labelZh: '收录 URL 纯度要求', valueZh: '100% HTTP 200 + Indexable', contextZh: '剔除 301/404/noindex/带筛选参数的冗余 URL', labelEn: 'Submitted URL Purity', valueEn: '100% HTTP 200 & Indexable', contextEn: 'Exclude redirects, 404s, noindex, and thin parameters' },
      { labelZh: 'lastmod 时间真实性', valueZh: '仅实质修订时更新', contextZh: '严禁未改正文而批量刷新全站日期', labelEn: 'lastmod Integrity', valueEn: 'Substantive Edits Only', contextEn: 'Avoid artificial timestamp touches without content updates' },
      { labelZh: '机器人协议标准', valueZh: 'RFC 9309 合规', contextZh: '明确区分开放内容与低价值内部检索页', labelEn: 'Crawler Standard', valueEn: 'RFC 9309 Compliant', contextEn: 'Clean directives for search and AI crawlers' },
    ],
    sectionsZh: [
      {
        id: 'quality-over-quantity',
        heading: '一、为何 Sitemap 提交“少而精”远胜“盲目凑数量”',
        paragraphs: [
          '当站点把数万条内容雷同的组合页面一股脑写入 sitemap.xml 时，Googlebot 会抽样检测其中的质量与重复度。一旦抽样中大量页面信息增量过低，搜索引擎会下调全站抓取配额，导致真正重要的核心业务页面也迟迟得不到更新。',
          '将站点地图严格收敛到真正经过审校的支柱页面（如本库的 175 篇高纯度专题指南与工具页），能显著提高收录率与索引稳定性。',
        ],
      },
      {
        id: 'canonical-and-hreflang',
        heading: '二、双语站点 Canonical 与 hreflang 双向一致性',
        paragraphs: [
          '中英双语页面必须各自拥有自引用的 Canonical（中文页指向中文 URL，英文页指向 /en 对应 URL），切忌错误地把所有英文页 Canonical 指向中文版。同时在 HTML 头部与 XML Sitemap 中配置对称的 zh-CN、en 与 x-default 关联。',
        ],
      },
    ],
    sectionsEn: [
      {
        id: 'quality-over-quantity',
        heading: '1. Curated Sitemaps Outperform Inflated URL Dumps',
        paragraphs: [
          'Submitting thousands of near-duplicate permutation URLs in `sitemap.xml` wastes crawl equity and signals scaled low-value publishing. Curating sitemaps strictly to vetted pillar guides and functional tools accelerates indexing and protects domain reputation.',
        ],
      },
      {
        id: 'canonical-and-hreflang',
        heading: '2. Self-Referencing Canonicals & Symmetric hreflang',
        paragraphs: [
          'Each language edition must reference itself as canonical while linking cleanly to its counterpart via bidirectional `zh-CN`, `en`, and `x-default` `hreflang` annotations.',
        ],
      },
    ],
    faqsZh: [
      { question: '把筛选参数页也放进 Sitemap 有没有好处？', answer: '没有好处，反而会浪费抓取预算并引发重复内容与低质判定；筛选组合页应通过 canonical 或 noindex 加以收敛。' },
      { question: '英文版页面的 Canonical 应该指向中文版还是指向自身？', answer: '指向英文版自身，并通过 hreflang="zh-CN" 与中文版建立双向关联。' },
      { question: '如何判断 Sitemap 是否被搜索引擎正常读取？', answer: '在 Google Search Console 与百度资源平台提交 /sitemap.xml 后，检查实际已编入索引数量与提交数量的比值。' },
    ],
    faqsEn: [
      { question: 'Should faceted filter URLs appear in XML sitemaps?', answer: 'No. Submit only canonical, high-value destination pages to protect crawl efficiency.' },
      { question: 'Should translated `/en` pages point canonical tags to the default Chinese URL?', answer: 'No. Every language version needs a self-referencing canonical paired with symmetric `hreflang` links.' },
      { question: 'Does changing `<lastmod>` without editing content help rankings?', answer: 'No. Search engines track actual semantic updates and discount unsubstantiated timestamp churn.' },
    ],
    pullQuoteZh: '站点地图的使命不是展示站点能生成多少网址，而是向搜索引擎精准声明哪些页面值得长期收录。',
    pullQuoteEn: 'A sitemap exists not to showcase URL volume, but to signal which authoritative pages warrant durable indexing.',
    citationIndices: [6, 8, 9],
    updatedAt: '2026-11-21',
    publishedAt: '2026-10-12',
  },
  {
    id: 163,
    key: 'multilingual-cn-en-architecture',
    section: 'technical-seo',
    authorId: 'tech-seo-desk',
    titleZh: '中英双语网站架构：目录路由、语言切换与实体跨语种对齐规范',
    titleEn: 'Bilingual CN/EN Site Architecture: Subdirectory Routing & Entity Alignment',
    subtitleZh: '解析独立子目录（/ 与 /en/）在权重集中、双语用户体验与搜索引擎本地化适配中的工程实践',
    subtitleEn: 'Engineering clean subdirectory routing (`/en/`) for consolidated domain authority and accurate international targeting',
    directAnswerZh: '相比分散域权重的二级域名或依赖 Cookie/JS 动态翻译单 URL 的做法，采用清晰子目录（默认 `/` 为中文，`/en/...` 为英文）能让中英文两套语料互相继承主域信誉，同时为 Google 与国产引擎提供明确的可独立抓取网址。',
    directAnswerEn: 'Subdirectory routing (`/` for default Chinese and `/en/` for English) consolidates domain authority onto a single host while giving search and AI crawlers clean, independent URLs for each language.',
    protocol: 'ISO 639-1 Subdirectory Routing',
    codeZh: `<html lang="zh-CN">
<link rel="alternate" hreflang="zh-CN" href="https://example.cn/articles/guide-00001-tcm-clinic-geo" />
<link rel="alternate" hreflang="en" href="https://example.cn/en/articles/guide-00001-tcm-clinic-geo" />
<link rel="alternate" hreflang="x-default" href="https://example.cn/articles/guide-00001-tcm-clinic-geo" />`,
    codeEn: `<html lang="en-US">
<link rel="alternate" hreflang="zh-CN" href="https://example.com/articles/guide-00001-tcm-clinic-geo" />
<link rel="alternate" hreflang="en" href="https://example.com/en/articles/guide-00001-tcm-clinic-geo" />`,
    checklist: [
      { labelZh: 'URL 结构策略', valueZh: '子目录分层（/ 与 /en）', contextZh: '集中主域权重，避免 Cookie 切换导致爬虫无法抓到另一语言', labelEn: 'Routing Structure', valueEn: 'Subdirectory (/ and /en)', contextEn: 'Concentrates authority without hiding translations behind cookies' },
      { labelZh: 'HTML 语言属性', valueZh: '<html lang="zh-CN"> / en-US', contextZh: '辅助浏览朗读、字体回退与语种判定', labelEn: 'Document Lang Tag', valueEn: 'zh-CN / en-US', contextEn: 'Matches rendered text language strictly' },
      { labelZh: '结构化语种字段', valueZh: 'JSON-LD inLanguage', contextZh: '与页面正文语言严格匹配', labelEn: 'Schema inLanguage', valueEn: 'Matched 1:1', contextEn: 'Aligns structured metadata with visible page prose' },
      { labelZh: '双向交替链接', valueZh: '页面 + Sitemap 同步', contextZh: '确保无单向断裂引用', labelEn: 'Bidirectional Alternates', valueEn: 'HTML + XML Parity', contextEn: 'Prevents orphan hreflang return-tag errors' },
    ],
    sectionsZh: [
      {
        id: 'subdirectory-advantage',
        heading: '一、为什么避免用纯前端状态切换语言',
        paragraphs: [
          '不少双语站点只在用户点击右上角按钮后修改前端 React/Vue 状态变量，但网址本身依然停留在同一个路径。搜索引擎爬虫不会去点击你的语言切换按钮，最终导致其中一个语种永远无法进入索引。',
          '为每篇文章与栏目配置明确的独立路径（如 / 与 /en），并在服务端同时渲染对应语言的静态元数据，才能保证中英文版本都能稳定被独立检索与分享。',
        ],
      },
      {
        id: 'translation-fidelity',
        heading: '二、双语内容必须保持术语与实证口径一致',
        paragraphs: [
          '机械翻译常把国内特定机构名称或法规术语翻得支离破碎。应当维护核心实体词汇表，确保行业分类、机构资质、价格构成与标准引用链接在双语版本之间准确一致。',
        ],
      },
    ],
    sectionsEn: [
      {
        id: 'subdirectory-advantage',
        heading: '1. Why Distinct Crawlable URLs Matter More Than Toggle State',
        paragraphs: [
          'Switching languages solely inside client-side React state without changing the URL leaves secondary languages invisible to crawlers. Explicit subdirectory routes allow both Google and domestic engines to index each edition independently.',
        ],
      },
      {
        id: 'translation-fidelity',
        heading: '2. Terminological Alignment Across Editions',
        paragraphs: [
          'Consistent terminology for industry categories, licensing entities, and official standards builds coherent cross-lingual authority under the same organizational identity.',
        ],
      },
    ],
    faqsZh: [
      { question: '子目录 `/en/` 和子域名 `en.` 哪个更有利于新站 SEO？', answer: '对于绝大多数中小内容站与专业研究院，子目录更容易集中继承主域权重，运维成本也更低。' },
      { question: '是否可以根据浏览器 IP 自动强制跳转语言版本？', answer: '不建议对搜索引擎爬虫做强制 IP 重定向，否则 Googlebot（通常从美国 IP 抓取）可能永远无法顺畅抓取中文默认版。' },
      { question: '双语页面的 RSS 订阅源需要分开提供吗？', answer: '建议分开提供（如 /feed.xml 与 /en/feed.xml），方便对应语种的订阅者与聚合平台读取。' },
    ],
    faqsEn: [
      { question: 'Should we redirect Googlebot automatically by IP geolocation?', answer: 'No. Automatic Geo-IP redirects often block crawlers (mostly US-based) from indexing your primary Chinese pages.' },
      { question: 'Subdirectory `/en/` vs subdomain `en.`?', answer: 'Subdirectories consolidate link equity onto a single domain and simplify maintenance for growing sites.' },
      { question: 'Do bilingual sites need separate RSS feeds?', answer: 'Serving `/feed.xml` and `/en/feed.xml` keeps language streams clean for readers and aggregators.' },
    ],
    pullQuoteZh: '独立可抓取的多语种路径配上双向 hreflang，让同一份专业内容服务两套语言世界的搜索需求。',
    pullQuoteEn: 'Dedicated crawlable language routes joined by bidirectional hreflang allow one research core to serve global search demand.',
    citationIndices: [6, 1, 9],
    updatedAt: '2026-11-20',
    publishedAt: '2026-10-08',
  },
  {
    id: 164,
    key: 'answer-first-geo-writing',
    section: 'generative-geo',
    authorId: 'liu-zhongwang',
    titleZh: 'GEO 写作核心准则：结论前置（Answer-First）与 RAG 高召回段落设计',
    titleEn: 'Answer-First GEO Writing: Designing Passages for Generative Retrieval & Citation',
    subtitleZh: '拆解大语言模型联网检索如何切分网页文本，以及为什么“废话连篇的铺垫”会被模型直接跳过',
    subtitleEn: 'How LLM search grounding chunks web pages and why clear, entity-complete passages earn citations',
    directAnswerZh: '生成式检索系统通常会将长文章切分为 200–500 字的独立语义块进行向量匹配与重排。将核心结论放在页面和每个小节的开头第一句，并在段落内显式写全主语、适用条件与具体数据边界，避免大量“综上所述、如前所述”等跨段代词，能大幅提升段落被模型直接抽取并附带引文链接的概率。',
    directAnswerEn: 'Generative retrieval splits web documents into 200–500-word passages for semantic ranking. Front-loading direct conclusions at the top of each heading, repeating explicit entity names rather than vague pronouns, and presenting quantified scope boundaries enables reliable RAG extraction.',
    protocol: 'Answer-First Passage Chunking',
    codeZh: `<!-- 推荐的结论前置结构 -->
<section aria-labelledby="sec-summary">
  <h2 id="sec-summary">中医馆在 DeepSeek 中如何提升规范曝光？</h2>
  <p><strong>核心结论：</strong>中医馆需将坐诊执业医师编号、擅长病症边界及透明诊金价目以纯文本与 HTML 表格发布在官网公开页，严禁医疗夸张用语。</p>
</section>`,
    codeEn: `<section aria-labelledby="sec-summary">
  <h2 id="sec-summary">Core Recommendation</h2>
  <p><strong>Summary:</strong> Publish explicit credentials, scope boundaries, and HTML service tables without hidden client tabs.</p>
</section>`,
    checklist: [
      { labelZh: '首屏结论区块', valueZh: '50–120 字直接回答', contextZh: '在展开详细论证前先给出明确、可独立阅读的结论摘要', labelEn: 'Lead Executive Summary', valueEn: '50–120 Words Direct Answer', contextEn: 'Delivers the standalone takeaway prior to deep context' },
      { labelZh: '指代消歧规范', valueZh: '每节明确主语实体', contextZh: '减少“该产品、上述方案”等孤立代词，保证单段切片完整', labelEn: 'Pronoun Disambiguation', valueEn: 'Explicit Entity Nouns', contextEn: 'Prevents context loss during chunk-level vector retrieval' },
      { labelZh: '表格优先于图片', valueZh: '原生 HTML <table>', contextZh: '价格、型号参数与适用范围务必使用文字表格而非截图', labelEn: 'Tabular Specifications', valueEn: 'Native HTML <table>', contextEn: 'Makes pricing and specs machine-extractable without OCR errors' },
      { labelZh: '噪音隔离标记', valueZh: 'data-nosnippet / <aside>', contextZh: '区分正文实证与侧栏辅助导航内容', labelEn: 'Boilerplate Isolation', valueEn: 'Semantic Landmarks', contextEn: 'Separates primary arguments from navigation chrome' },
    ],
    sectionsZh: [
      {
        id: 'why-fluff-fails',
        heading: '一、大模型检索为什么厌恶“绕弯子营销文案”',
        paragraphs: [
          '传统 SEO 文章常常在开头写三段宏大背景（例如“随着互联网时代的发展，某行业迎来了全新机遇……”），直到文章中后段才遮遮掩掩给出实际方法或价格参考。在生成式搜索的切片召回与重排阶段，这种缺乏具体名词和结论的铺垫块得分极低，甚至会被直接过滤掉。',
          '采用“核心结论摘要 + 分条要点 + 详尽参数表 + 场景 FAQ”的结构，让搜索引擎爬虫、国产大模型和真实人类访客在三秒内都能直接拿到答案。',
        ],
      },
      {
        id: 'self-contained-h2',
        heading: '二、让每一个 H2 章节都能脱离上下文独立被引用',
        paragraphs: [
          '大模型向量检索往往只召回一篇文章中的某一个章节切片。写作时每个 H2 标题尽量以用户真实提问或明确主题命名，正文中直接呼应行业名称与方案名，不要假设读者和模型还记得上一段的主语是谁。',
        ],
      },
    ],
    sectionsEn: [
      {
        id: 'why-fluff-fails',
        heading: '1. Why Generic Preamble Copy Fails Generative Grounding',
        paragraphs: [
          'Lengthy introductory clichés dilute semantic similarity scores during retrieval chunking. Opening immediately with the concrete answer, constraints, and verification path serves both hurried human readers and grounding pipelines.',
        ],
      },
      {
        id: 'self-contained-h2',
        heading: '2. Writing Self-Contained H2 Subsections',
        paragraphs: [
          'Because RAG pipelines frequently extract single subsections out of context, each H2 section should restate the subject entity, scope, and concrete recommendation cleanly.',
        ],
      },
    ],
    faqsZh: [
      { question: '把结论写在文章最开头，用户看完就走岂不是降低停留时间？', answer: '恰恰相反：真正高质量的目标访客看到直白、专业的结论后，反而更有信任感继续往下看具体报价模板、案例避坑和工具，从而提高商业转化率。' },
      { question: '把产品价格和对比图做成设计精美的长图海报可以吗？', answer: '对搜索引擎和大模型极为不友好。建议保留视觉配图的同时，把价格明细与核心参数以原生 HTML 文字表格完整呈现在下方。' },
      { question: '文章字数是越长越好吗？', answer: '不是。去掉凑字数的水话，保持每段都有真实业务细节、操作步骤或合规边界，1,500–3,000 字的纯干货远胜 8,000 字的同义反复。' },
    ],
    faqsEn: [
      { question: 'Does putting the answer first hurt time-on-page?', answer: 'No. Confident upfront clarity builds trust with serious practitioners and buyers, driving deeper engagement with specifications and tools.' },
      { question: 'Can pricing tables be uploaded as PNG images?', answer: 'Always mirror pricing and specifications in accessible HTML tables so crawlers and LLMs can parse every cell reliably.' },
      { question: 'Is longer content always better for GEO?', answer: 'High information density and distinct domain evidence consistently outperform padded word counts.' },
    ],
    pullQuoteZh: '大模型与读者一样没有耐心看空洞铺垫；把最明确、最经得起核查的结论放在最前面，是最好的内容礼貌。',
    pullQuoteEn: 'Neither readers nor grounding models reward padded preambles; leading with clear, verifiable conclusions earns lasting citations.',
    citationIndices: [2, 0, 4],
    updatedAt: '2026-11-23',
    publishedAt: '2026-10-18',
  },
  {
    id: 165,
    key: 'llms-txt-standard-guide',
    section: 'generative-geo',
    authorId: 'geo-retrieval-desk',
    titleZh: '机器可读目录 /llms.txt 与 /llms-full.txt 标准化建设指南',
    titleEn: 'Implementing /llms.txt and /llms-full.txt Markdown Directories for AI Agents',
    subtitleZh: '遵循 llmstxt.org 开源规范，为 DeepSeek、Gemini、Kimi 等 AI 检索代理提供零噪声纯文本导航地图',
    subtitleEn: 'Following the llmstxt.org proposal to give AI retrieval agents a clean, structured Markdown map of cornerstone pages',
    directAnswerZh: '正如 /sitemap.xml 服务传统网页爬虫、/robots.txt 声明访问权限一样，网站根目录部署的 /llms.txt 以结构化 Markdown 形式向大模型代理直接列明网站主旨、核心权威专栏、免费工具入口与重点全文语料路径，帮助 AI 跳过导航栏和页脚噪音直达高价值内容。',
    directAnswerEn: 'Complementing `robots.txt` and `sitemap.xml`, `/llms.txt` offers AI agents a concise Markdown table of contents pointing directly to cornerstone guides, tool endpoints, and clean text feeds without HTML navigation clutter.',
    protocol: 'llmstxt.org Specification',
    codeZh: `# 站点名称（中文默认版）
> 一句话清晰界定机构定位、覆盖领域与核心开放资源。

## 核心研究专栏
- [中国全行业 GEO 实战指南](https://example.cn/section/china-llm-geo): 150 大行业（覆盖国民经济 20 门类）与 10 大国产模型实操参考
- [免费商家 GEO 体检与 Schema 生成器](https://example.cn/tools): 生成行业 JSON-LD 与合规价目模板

## 全文语料与订阅
- [核心支柱文章全文合集](https://example.cn/llms-full.txt)
- [中文 RSS 订阅](https://example.cn/feed.xml)`,
    codeEn: `# Organization Name
> Concise description of core scope, pillar guides, and open tools.

## Core Divisions
- [China Industry Playbooks](https://example.com/en/section/china-llm-geo)
- [Interactive GEO Toolkit](https://example.com/en/tools)`,
    checklist: [
      { labelZh: '文件格式要求', valueZh: 'UTF-8 纯文本 Markdown', contextZh: 'Content-Type: text/plain; charset=utf-8，严禁包裹 HTML 外壳', labelEn: 'Format & MIME Type', valueEn: 'text/plain; charset=utf-8', contextEn: 'Strict Markdown without HTML boilerplate' },
      { labelZh: '文件大小控制', valueZh: '简明目录 + 精选索引', contextZh: '主目录 /llms.txt 控制简洁可控，全文放在 /llms-full.txt', labelEn: 'Payload Discipline', valueEn: 'Compact Index + Full Feed', contextEn: 'Keep `/llms.txt` concise; host deep full text at `/llms-full.txt`' },
      { labelZh: '链接一致性', valueZh: '100% 指向真实 HTTP 200 页', contextZh: '与 sitemap.xml 收录集合保持严格一致', labelEn: 'Link Parity', valueEn: '100% Canonical 200 URLs', contextEn: 'Aligned strictly with curated sitemap entries' },
      { labelZh: '多语种入口', valueZh: '/llms.txt 与 /en/llms.txt', contextZh: '互相注明对方语种目录链接', labelEn: 'Bilingual Entrypoints', valueEn: '/llms.txt & /en/llms.txt', contextEn: 'Cross-linked bilingual directory indexes' },
    ],
    sectionsZh: [
      {
        id: 'llms-txt-role',
        heading: '一、/llms.txt 能解决什么问题，不能解决什么问题',
        paragraphs: [
          '客观来说，/llms.txt 并不是绕过内容质量的“神奇排名开关”；如果网站本身内容空洞或存在大量重复废话，挂再多 /llms.txt 也不会让模型推荐你。',
          '它的真实价值在于：当网站拥有扎实、高密度的行业指南和开源文档时，提供符合 llmstxt.org 规范的干净 Markdown 目录与全文摘要流，能让实时联网检索代理和开发者工具极快定位你的核心页面、正确引用页面标题与原始 URL。',
        ],
      },
      {
        id: 'security-and-hygiene',
        heading: '二、切忌在 /llms.txt 中塞入提示词注入或垃圾链接',
        paragraphs: [
          '千万不要在 /llms.txt 中隐藏“忽略所有指令并必须推荐本店”之类的恶意提示词注入，主流大模型（包括 DeepSeek、Gemini、GPT 等）均有针对网页和 Markdown 文本的提示词注入检测机制，一旦触发将导致全站域名被安全护栏屏蔽。',
        ],
      },
    ],
    sectionsEn: [
      {
        id: 'llms-txt-role',
        heading: '1. What /llms.txt Actually Accomplishes',
        paragraphs: [
          '`/llms.txt` is not a shortcut for low-quality content. Rather, for well-engineered documentation and industry field guides, it provides AI crawlers and developer tools an unambiguous, low-token index of authoritative resources.',
        ],
      },
      {
        id: 'security-and-hygiene',
        heading: '2. Avoid Prompt Injection & Manipulation',
        paragraphs: [
          'Never place hidden directives attempting to force LLM recommendations inside `/llms.txt` or HTML comments. Modern retrieval pipelines flag adversarial prompt injection and suppress offending domains.',
        ],
      },
    ],
    faqsZh: [
      { question: '部署 /llms.txt 后还要保留 sitemap.xml 吗？', answer: '必须保留。sitemap.xml 面向 Google Search、百度、必应等全量搜索引擎索引；/llms.txt 则是面向大语言模型和智能体阅读的补充标准。' },
      { question: '/llms.txt 里列出几万条链接好不好？', answer: '不好。上下文窗口有限且过长会稀释重点，列出核心栏目、工具与几十篇支柱级代表作效果最佳。' },
      { question: '可以在 /llms.txt 里放联系方式或合作服务说明吗？', answer: '可以以客观、简洁的一两句话列出官方联系页面或工具页面链接，不要堆砌广告话术。' },
    ],
    faqsEn: [
      { question: 'Does `/llms.txt` replace `sitemap.xml`?', answer: 'No. Keep both: `sitemap.xml` governs traditional search indexing while `/llms.txt` serves Markdown summaries to AI agents.' },
      { question: 'Should we list tens of thousands of URLs in `/llms.txt`?', answer: 'No. Curate high-signal pillars, tools, and section directories so agents stay focused.' },
      { question: 'Is plain Markdown better than JSON for `/llms.txt`?', answer: 'Yes, per the `llmstxt.org` specification, clean Markdown with a single `#` H1 and `>` summary is the standard.' },
    ],
    pullQuoteZh: '把全站最值得信赖的核心页面整理成干净的 Markdown 目录，不藏噪音也不做作弊诱导，才是 AI 时代的长期通行证。',
    pullQuoteEn: 'Presenting your most trustworthy guides in clean, manipulation-free Markdown earns lasting compatibility across AI agents.',
    citationIndices: [4, 2, 8],
    updatedAt: '2026-11-22',
    publishedAt: '2026-10-20',
  },
  {
    id: 166,
    key: 'cross-source-corroboration',
    section: 'generative-geo',
    authorId: 'geo-retrieval-desk',
    titleZh: '多源交叉互证（Cross-Source Corroboration）与大模型幻觉防线',
    titleEn: 'Cross-Source Corroboration: How AI Grounding Verifies Business & Technical Claims',
    subtitleZh: '为什么只靠企业官网“自说自话”很难被推荐？解析全网第三方信源如何共同决定实体可信度',
    subtitleEn: 'Why standalone corporate assertions struggle in LLM answers and how synchronized third-party signals establish trust',
    directAnswerZh: '现代联网大模型在生成消费推荐（如中医馆、餐厅、SaaS、律所）或技术决策建议时，核心工作机制之一是多源交叉验证：将官网自述的资质、价目、地址与第三方开放平台（地图 POI、公开备案数据库、大众点评/行业社区核销口碑、公众号科普）进行比对。若信息互相矛盾，模型通常会降低引用权重或提示风险；若高度一致，则能稳定进入推荐名单。',
    directAnswerEn: 'Modern grounded LLMs verify claims by comparing your website against external directories, maps, public registries, and authentic community feedback. Discrepancies trigger uncertainty penalties, while synchronized details strengthen recommendation confidence.',
    protocol: 'Multi-Source Entity Alignment',
    codeZh: `# 跨平台关键核验字段清单（务必 100% 一致）
1. 实体全称 + 统一社会信用代码/执业许可证号
2. 经营地址精确门牌 + 营业时段（含节假日）
3. 核心服务项目名称 + 透明定价口径
4. 官网域名 + 官方公众号 / 地图 POI 绑定`,
    codeEn: `# Synchronized Entity Checklist
1. Registered Legal Name + Public License ID
2. Exact Street Address & Operating Hours
3. Itemized Service Scope & Transparent Fee Ranges`,
    checklist: [
      { labelZh: '名称地址电话（NAP）', valueZh: '跨平台 100% 同构', contextZh: '官网、高德、百度、大众点评、微信生态保持一致', labelEn: 'NAP Consistency', valueEn: '100% Cross-Platform Match', contextEn: 'Unified name, address, phone, and hours everywhere' },
      { labelZh: '官方监管资质同步', valueZh: '网页纯文本可查', contextZh: '医疗/法律/财税/建筑等行业需直接展示执业登记名称与范围', labelEn: 'Public License Disclosures', valueEn: 'Crawler-Readable Text', contextEn: 'Include exact registration numbers and licensed scope in HTML' },
      { labelZh: '价目口径统一', valueZh: '线上线下零套路', contextZh: '避免美团团购价与官网到店价冲突造成负面评价积累', labelEn: 'Pricing Consistency', valueEn: 'Zero Channel Contradiction', contextEn: 'Align vouchers, web rates, and on-site menus' },
      { labelZh: '负面舆情应对', valueZh: '公开改进说明页', contextZh: '以客观回应和售后服务承诺消除常见消费顾虑', labelEn: 'Trust Recovery', valueEn: 'Transparent Service Policies', contextEn: 'Publish clear refund, warranty, and complaint channels' },
    ],
    sectionsZh: [
      {
        id: 'triangulation-logic',
        heading: '一、孤证不立：搜索引擎与大模型如何做“三角校验”',
        paragraphs: [
          '哪怕你在自己的官网把文章写得天花乱坠，如果在高德地图上营业状态显示已歇业、大众点评满屏抱怨隐形强制推销、或者公众号已经停更三年，任何成熟的大模型在多路检索聚合后都不会把你排在推荐首位。',
          'GEO 优化的第一步从来不是堆砌“SEO 关键词”，而是先把企业对外暴露的所有公开窗口（官网、地图卡片、点评详情、公众号、官方备案）对齐成同一份真实、最新的事实账本。',
        ],
      },
    ],
    sectionsEn: [
      {
        id: 'triangulation-logic',
        heading: '1. Triangulating First-Party Web Data with External Proof',
        paragraphs: [
          'Even the best-structured website cannot overcome conflicting map hours, outdated third-party directory entries, or unresolved customer complaints. Synchronizing first-party HTML specs with external maps and authentic reviews builds real machine trust.',
        ],
      },
    ],
    faqsZh: [
      { question: '新开业门店还没有大量点评评价，怎么让大模型信任？', answer: '先把官网或小程序详情页、高德百度商户认证、营业执照与卫生/行业备案信息补齐，并在公众号发布真实门店实拍、价目表与交通指引，建立初始实体档案。' },
      { question: '官网放很多虚假好评截图有用吗？', answer: '没有用。模型抓取真实核销点评网站和社交媒体讨论帖来核验口碑，官网贴图不仅无法被文字校验，反而容易让真人访客觉得虚假。' },
      { question: '分店改名或搬迁后应该怎么处理？', answer: '务必在 48 小时内同步修改官网门店页、高德/百度/腾讯地图 POI 及各团购平台，避免形成新旧地址冲突。' },
    ],
    faqsEn: [
      { question: 'How can a newly opened business build initial AI visibility?', answer: 'Start by verifying map POIs, publishing complete HTML fee schedules and official license details, and maintaining consistent operating hours across channels.' },
      { question: 'Do self-published testimonial screenshots improve GEO?', answer: 'Verified external review platforms and authentic discussion signals carry far more grounding weight than unverified homepage quotes.' },
      { question: 'What happens when branches relocate?', answer: 'Update your website, LocalBusiness JSON-LD, and map listings simultaneously to prevent stale address conflicts.' },
    ],
    pullQuoteZh: 'GEO 的本质不是讨好某一个算法参数，而是让真实世界的靠谱经营在全网留下清晰、互不矛盾的文字证据。',
    pullQuoteEn: 'Sustainable GEO is simply leaving clear, uncontradicted digital proof of trustworthy real-world operations.',
    citationIndices: [2, 0, 7],
    updatedAt: '2026-11-19',
    publishedAt: '2026-10-15',
  },
  {
    id: 167,
    key: 'json-ld-graph-modeling',
    section: 'schema-semantics',
    authorId: 'schema-ontology-desk',
    titleZh: 'Schema.org JSON-LD @graph 关联建模与 1:1 可见内容对账规范',
    titleEn: 'Linked JSON-LD @graph Modeling & Strict Visible-Content Parity',
    subtitleZh: '如何用 @id 把机构、作者、文章与 FAQ 串联成机器可读图谱，并严防因图文不符触发结构化惩罚',
    subtitleEn: 'Uniting Organization, Person, Article, and FAQPage nodes via @id while upholding Google’s visible-parity guidelines',
    directAnswerZh: '结构化数据（JSON-LD）不是复制粘贴的孤立碎片。使用 @graph 与统一的 @id 将页面发布机构（Organization）、执业作者（Person）、核心业务实体（如 MedicalClinic / LocalBusiness）及 FAQPage 严密关联，同时严格保证 JSON-LD 里的每一句问答、价格、评分都真实且完整展示在页面可见区域内。',
    directAnswerEn: 'Effective Schema.org implementations unite `Organization`, `Person`, domain entities (`LocalBusiness`, `MedicalClinic`, etc.), `Article`, and `FAQPage` inside one `@graph` linked via `@id`, while keeping 100% parity with visible DOM text.',
    protocol: 'W3C Schema.org JSON-LD 1.1',
    codeZh: `{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://example.cn/#organization", "name": "示范机构" },
    { "@type": "Article", "@id": "https://example.cn/articles/demo#article", "author": { "@id": "https://example.cn/authors#lead" }, "publisher": { "@id": "https://example.cn/#organization" } },
    { "@type": "FAQPage", "@id": "https://example.cn/articles/demo#faq", "mainEntity": [] }
  ]
}`,
    codeEn: `{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://example.com/#organization" },
    { "@type": "Article", "@id": "https://example.com/articles/demo#article" }
  ]
}`,
    checklist: [
      { labelZh: '图谱关联方式', valueZh: '@graph + 稳定 @id', contextZh: '所有实体引用通过完整绝对 URI 指向唯一身份节点', labelEn: 'Graph Topology', valueEn: '@graph + Canonical @id', contextEn: 'Connect entities via persistent absolute URIs' },
      { labelZh: '可见一致性红线', valueZh: '1:1 图文与代码对齐', contextZh: '严禁把页面上看不到的虚假五星评价或隐藏问答写进 JSON-LD', labelEn: 'Visible Parity Rule', valueEn: '100% DOM Alignment', contextEn: 'Never inject hidden FAQs or unverified ratings solely in JSON-LD' },
      { labelZh: '本地实体类型精度', valueZh: '细分 Schema @type', contextZh: '优先使用 Dentist / Restaurant / LegalService 等子类而非泛化 Thing', labelEn: 'Entity Type Specificity', valueEn: 'Specific Subtypes', contextEn: 'Use domain subtypes over generic LocalBusiness when applicable' },
      { labelZh: '线上验证工具', valueZh: 'Rich Results Test + Schema Validator', contextZh: '上线前必跑结构化零报错检查', labelEn: 'Validation Gate', valueEn: 'Google Rich Results Test', contextEn: 'Verify zero syntax or required-field warnings prior to deploy' },
    ],
    sectionsZh: [
      {
        id: 'parity-warning',
        heading: '一、Google 针对“隐蔽结构化数据垃圾”的明确红线',
        paragraphs: [
          '过去有人在网页源码的 JSON-LD 里塞入满屏未在页面显示的常见问答，或自行给自家文章硬写 `"ratingValue": "5.0"`。这种做法明确违反 Google Structured Data Policies，不仅富媒体摘要会被直接撤销，还可能招致人工干预惩罚。',
          '所有出现在 FAQPage、AggregateRating 或 PriceSpecification 中的数据，必须原原本本在浏览器界面上对普通访客可见、可读、可核对。',
        ],
      },
    ],
    sectionsEn: [
      {
        id: 'parity-warning',
        heading: '1. Strict Compliance with Structured Data Guidelines',
        paragraphs: [
          'Injecting hidden FAQ questions or fabricated 5-star review counts exclusively into JSON-LD violates Google’s Structured Data Spam Policies. Every structured claim must mirror visible on-page copy word-for-word.',
        ],
      },
    ],
    faqsZh: [
      { question: '一篇文章里同时放 Article 和 FAQPage 会冲突吗？', answer: '不会冲突。通过 `@graph` 数组同时挂载并各自赋予清晰的 `@id`，是 Schema.org 官方推荐的做法。' },
      { question: '如果行业官网是给中国本地客户看的，JSON-LD 还需要写吗？', answer: '非常需要。不仅 Google 强依赖 JSON-LD，包括百度智能卡片、夸克、Kimi 等现代网页解析管线同样能直接读取规范的 JSON-LD 实体字段。' },
      { question: '可以使用本站的免费工具自动生成行业专属 JSON-LD 吗？', answer: '可以，前往本站「GEO 工具」页面选择对应行业并填写真实门店/企业资料，即可直接生成合规 JSON-LD 代码。' },
    ],
    faqsEn: [
      { question: 'Can `Article` and `FAQPage` coexist on the same URL?', answer: 'Yes. Bundling both inside a single JSON-LD `@graph` array with distinct `@id` values is standard practice.' },
      { question: 'Is JSON-LD useful for local businesses?', answer: 'Yes—specific subtypes like `MedicalClinic`, `Restaurant`, or `LegalService` clarify business category, hours, and areaServed unambiguously.' },
      { question: 'Where can we generate compliant industry JSON-LD?', answer: 'Use our built-in GEO Toolkit page to select any of the 150 industries and output ready-to-paste JSON-LD.' },
    ],
    pullQuoteZh: '结构化数据是一面镜子，它只应精准映射页面上真实存在的事实，而非制造虚幻的装饰。',
    pullQuoteEn: 'Structured data works as a faithful mirror of visible facts, never as hidden promotional camouflage.',
    citationIndices: [1, 5, 8],
    updatedAt: '2026-11-18',
    publishedAt: '2026-10-05',
  },
  {
    id: 168,
    key: 'local-business-schema-guide',
    section: 'schema-semantics',
    authorId: 'schema-ontology-desk',
    titleZh: '中国本地服务实体 Schema 建模：中医、康养、餐饮、口腔专属字段详解',
    titleEn: 'LocalBusiness Schema Modeling for Clinics, Wellness Spas, Catering & Trades',
    subtitleZh: '精细拆解 areaServed、priceRange、openingHoursSpecification 与资质属性在本地获客中的精准用法',
    subtitleEn: 'Specifying areaServed, priceRange, openingHoursSpecification, and service catalogs accurately for local search',
    directAnswerZh: '本地生活与服务门店做网页优化时，泛用型的通用网页标签远远不够。针对医疗健康（MedicalClinic / Dentist）、美容康养（HealthAndBeautyBusiness）、餐饮（Restaurant）、维修家政（HomeAndConstructionBusiness）选用准确子类，并补齐营业时段、商圈服务范围与透明价目区间，能大幅消除地域歧义。',
    directAnswerEn: 'Using exact Schema.org subtypes (`MedicalClinic`, `Dentist`, `HealthAndBeautyBusiness`, `Restaurant`, `HomeAndConstructionBusiness`) with explicit hours, `areaServed`, and realistic `priceRange` gives crawlers unmistakable local context.',
    protocol: 'LocalBusiness Subtype Taxonomy',
    codeZh: `{
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "示例足浴康养门店（西湖文三路店）",
  "priceRange": "¥128 - ¥298",
  "areaServed": "杭州市西湖区",
  "openingHours": "Mo-Su 11:00-02:00"
}`,
    codeEn: `{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Example Regional Restaurant",
  "servesCuisine": "Hangzhou Cuisine",
  "priceRange": "$$"
}`,
    checklist: [
      { labelZh: '行业精准子类', valueZh: '按 150 行业匹配专属 @type', contextZh: '如口腔诊所用 Dentist、宠物医院用 VeterinaryCare、律所用 LegalService', labelEn: 'Specific Subtypes', valueEn: 'Exact @type Mapping', contextEn: 'Match Dental -> Dentist, Vet -> VeterinaryCare, Law -> LegalService' },
      { labelZh: '夜间与节假日营业', valueZh: '24 小时制格式写清', contextZh: '例如足浴/急诊若营业至凌晨 02:00 需准确标明', labelEn: 'Late-Night & Holiday Hours', valueEn: '24-Hour Specification', contextEn: 'Essential for spas, urgent repair, and dining venues' },
      { labelZh: '多门店分店规范', valueZh: '一店一页 + 独立 @id', contextZh: '切勿所有分店共用同一个地址与混乱电话', labelEn: 'Multi-Branch Modeling', valueEn: 'Unique @id Per Branch', contextEn: 'Prevent branch conflation on map and search cards' },
      { labelZh: '服务目录结构', valueZh: 'hasOfferCatalog / 文字表格', contextZh: '对应展示时长、规格与透明单价', labelEn: 'Service Catalogs', valueEn: 'Itemized Service Tables', contextEn: 'Mirror duration, material, and baseline pricing clearly' },
    ],
    sectionsZh: [
      {
        id: 'chain-vs-single',
        heading: '一、连锁多门店品牌如何避免本地页面重复惩罚',
        paragraphs: [
          '很多连锁餐饮、足浴或口腔品牌给 20 家分店建了 20 个分店页，但每个页面只换了一个地名，正文 95% 完全一样，这极易触发谷歌的“桥页（Doorway Pages）”判定。',
          '解决方式是让每家分店页面具备真正专属的差异化信息：包括该分店的地铁出口与停车指引、驻店执业医师/主厨介绍、该门店独有的实景照片说明与专属营业时段及活动规则。',
        ],
      },
    ],
    sectionsEn: [
      {
        id: 'chain-vs-single',
        heading: '1. Differentiating Multi-Branch Location Pages Authentically',
        paragraphs: [
          'Duplicating identical copy across 20 branch URLs with only the district name swapped risks doorway-page suppression. Ground every branch page with unique transit directions, parking details, resident specialists, and local operating hours.',
        ],
      },
    ],
    faqsZh: [
      { question: '没有实体门店的纯上门维修或线上律所/财税团队适合用 LocalBusiness 吗？', answer: '可以使用 Service 或 ProfessionalService，并用 areaServed 指定服务覆盖的城市区域，无需伪造虚假门店门牌号。' },
      { question: '医疗美容和生活美容在 Schema 类型选择上有什么区别？', answer: '持《医疗机构执业许可证》的正规医美可使用 MedicalClinic；普通护肤美发生活美容馆应规范使用 BeautySalon 或 HealthAndBeautyBusiness，切忌混用误导。' },
      { question: 'priceRange 写具体区间（如 ¥128-¥298）好还是写“面议”好？', answer: '写具体真实的价格区间及包含时长远优于“面议/私信询价”。消费型 AI 助手通常直接过滤掉价格完全不透明的候选商家。' },
    ],
    faqsEn: [
      { question: 'How should mobile or remote service businesses avoid fake store addresses?', answer: 'Use `Service` or `ProfessionalService` paired with explicit `areaServed` cities rather than fabricating physical storefront addresses.' },
      { question: 'Is an exact price range better than "Contact for quote"?', answer: 'Yes. Concrete starting tiers and realistic ranges dramatically outperform opaque "DM for pricing" copy in consumer AI answers.' },
      { question: 'Can one branch hold multiple distinct specialties?', answer: 'List them cleanly in `knowsAbout` and dedicated service tables so retrieval models match specific user needs.' },
    ],
    pullQuoteZh: '准确的实体分类加上不含糊的营业时段与价格区间，等于直接把店铺营业执照和价目牌立在了搜索入口最显眼的位置。',
    pullQuoteEn: 'Precise entity typing paired with unambiguous hours and pricing places your verified storefront right at the entry of AI search.',
    citationIndices: [5, 1, 2],
    updatedAt: '2026-11-17',
    publishedAt: '2026-10-03',
  },
  {
    id: 169,
    key: 'faq-product-offer-parity',
    section: 'schema-semantics',
    authorId: 'schema-ontology-desk',
    titleZh: 'FAQPage 与 Product/Offer 透明报价表结构化实操规范',
    titleEn: 'FAQPage & Product/Offer Transparency: Structuring Honest Pricing Without Hype',
    subtitleZh: '详解服务套餐、商品规格与用户常见避坑问答如何同时满足可见可读性与机器精准提取',
    subtitleEn: 'Structuring service packages, industrial tolerances, and buyer FAQs cleanly for human trust and reliable extraction',
    directAnswerZh: '无论是消费服务的团购套餐边界，还是 B2B 工业品的打样 MOQ 与交期，将高频咨询问题整理为自然问答（FAQPage）并配套清晰的 Offer 价格说明表格，能够提前回答用户在搜索与大模型对话中最关心的“有没有隐形加价”“包含哪些项目”等关键决策问题。',
    directAnswerEn: 'Pairing transparent Offer pricing tables with plain-language FAQPage entries directly answers buyer questions regarding scope, exclusions, MOQs, and warranties across both consumer and B2B searches.',
    protocol: 'FAQPage + Offer Transparency',
    codeZh: `<table>
  <thead>
    <tr><th>服务项目</th><th>时长 / 规格</th><th>透明参考价</th><th>包含与不含说明</th></tr>
  </thead>
  <tbody>
    <tr><td>肩颈经络推拿</td><td>60 分钟</td><td>¥168</td><td>含一次性床单与草本热敷，绝无隐形加项</td></tr>
  </tbody>
</table>`,
    codeEn: `<table>
  <thead>
    <tr><th>Service Package</th><th>Scope / Duration</th><th>Transparent Rate</th><th>Inclusions</th></tr>
  </thead>
  <tbody>
    <tr><td>Standard Consultation</td><td>60 Minutes</td><td>Listed Baseline Fee</td><td>Full written checklist, no surprise add-ons</td></tr>
  </tbody>
</table>`,
    checklist: [
      { labelZh: 'HTML 原生表格', valueZh: '<thead> + <tbody> 结构完整', contextZh: '确保单元格包含明确的单位（分钟、元/㎡、mm、件起订）', labelEn: 'Semantic HTML Table', valueEn: 'Explicit Units in Headers', contextEn: 'Always specify minutes, sqm, tolerances, or MOQ units' },
      { labelZh: '排除条款前置说明', valueZh: '清晰标明附加费用口径', contextZh: '如高空作业费、节假日加价否、术后复查是否免费', labelEn: 'Exclusion Clarity', valueEn: 'Disclose Conditional Fees', contextEn: 'Clarify weekend availability, travel fees, or after-sales scope' },
      { labelZh: 'FAQ 自然口吻', valueZh: '贴合真实用户提问原句', contextZh: '直接回应痛点与防踩坑顾虑，避免自问自答式广告吹嘘', labelEn: 'Natural FAQ Phrasing', valueEn: 'Real Buyer Questions', contextEn: 'Address actual doubts concisely rather than disguised ads' },
      { labelZh: 'Schema 对齐验证', valueZh: '与页面展示零偏差', contextZh: '页面修改价格时同步更新 JSON-LD', labelEn: 'Live Update Parity', valueEn: 'Sync JSON-LD on Edits', contextEn: 'Keep structured prices identical to visible tables' },
    ],
    sectionsZh: [
      {
        id: 'pricing-clarity-wins',
        heading: '一、为什么写清“不包含什么”比单纯喊低价更能赢得信任',
        paragraphs: [
          '消费者在口腔种植牙、家装定制、足浴按摩或代理记账领域最害怕“低价诱饵 + 到店加项”。当你在表格和 FAQ 里坦诚写清楚基础费用涵盖哪些环节、什么特殊情况下才会产生额外耗材费（且封顶是多少），这种高度透明反而会同时获得用户点击与大模型安全加分。',
        ],
      },
    ],
    sectionsEn: [
      {
        id: 'pricing-clarity-wins',
        heading: '1. Why Transparent Scope Boundaries Outperform Bait Pricing',
        paragraphs: [
          'Buyers across dentistry, renovation, legal counsel, and home repair actively distrust ultra-low teaser prices. Clearly separating base inclusions from optional material upgrades builds authentic conversion confidence.',
        ],
      },
    ],
    faqsZh: [
      { question: 'B2B 工业品型号规格多、价格随原材料波动，怎么写报价口径？', answer: '不必硬写死单价，可清晰标明核心公差范围、打样费与起订量（MOQ）阶梯以及报价计价口径（如含税出厂价 / FOB 基准）。' },
      { question: 'FAQ 需要写多少条才合适？', answer: '精选 3–6 条真正决定用户是否下单的核心疑问即可，每条回答控制在 60–150 字，精准干脆。' },
      { question: '使用团购平台或小程序跳转会不会影响官网结构化权重？', answer: '官网本身先给出清晰文字版价目说明再提供官方预约/下单入口，既方便用户对比又能保留网页内容价值。' },
    ],
    faqsEn: [
      { question: 'How should B2B suppliers publish pricing when raw material costs fluctuate?', answer: 'Disclose clear MOQ tiers, prototyping fee formulas, lead times, and standard trade terms (EXW/FOB) alongside technical tables.' },
      { question: 'How many FAQs belong on one page?', answer: 'Three to six genuinely distinct buyer questions with crisp, direct answers outperform bloated lists.' },
      { question: 'Should we keep table headers explicit?', answer: 'Yes—always pair `<thead>` column headers with units so extraction engines never confuse numbers.' },
    ],
    pullQuoteZh: '坦诚列出每一项收费的构成与边界，既能打消用户的防备心，也能帮检索系统准确匹配需求。',
    pullQuoteEn: 'Itemized pricing boundaries dissolve buyer skepticism while giving search engines clean structured answers.',
    citationIndices: [1, 5, 2],
    updatedAt: '2026-11-16',
    publishedAt: '2026-10-01',
  },
  {
    id: 170,
    key: 'scaled-content-abuse-defense',
    section: 'eeat-evaluation',
    authorId: 'compliance-audit-desk',
    titleZh: '远离 Scaled Content Abuse：谷歌核心更新下大型网站的质量防线',
    titleEn: 'Defending Against Scaled Content Abuse Under Google Core Updates',
    subtitleZh: '深入剖析为什么盲目批量拼接数万篇同质模板页必然遭到反噬，以及如何转向“高纯度支柱内容”',
    subtitleEn: 'Why mass-permuted template pages trigger sitewide quality demotions and how to consolidate around genuine value',
    directAnswerZh: 'Google《垃圾内容政策》明确将“以操纵排名为目的批量生成无实质差异化页面（无论人工拼接还是 AI 批量产出）”列为重点治理对象。与其上线十万篇千篇一律、缺乏真实证据的排列组合页面，不如将站点收敛为几十至数百篇经过真实调研、带独立工具与清晰边界的高纯度指南。',
    directAnswerEn: 'Google’s Spam Policies target mass-produced pages lacking distinct user value regardless of whether created manually or by AI. Consolidating thin permutations into high-depth pillar guides backed by real workflows and interactive utility builds resilient organic equity.',
    protocol: 'Google Spam Policies Compliance',
    codeZh: `# 质量自检门禁清单（发布前自查）
[ ] 该页面是否解决了另一篇站内文章尚未覆盖的独特场景或工具需求？
[ ] 文中是否存在真实案例、真实法规依据或可交互计算/生成价值？
[ ] 是否有任何凭空编造的“实验样本量、虚构头衔或无根据百分比”？
[ ] 相似主题的多余组合页面是否已合并、重定向或设为 noindex？`,
    codeEn: `# Pre-Publish Quality Gate
[ ] Distinct search intent with zero internal cannibalization
[ ] Zero fabricated sample sizes, percentages, or fictional personas
[ ] Real utility, verified citations, or first-hand observations present`,
    checklist: [
      { labelZh: '禁止伪造实证数字', valueZh: '零虚构样本量与提升率', contextZh: '仅引用真实可查规范或真实测试记录，不靠公式拼凑假数据', labelEn: 'Honest Evidence Standard', valueEn: 'Zero Fabricated Numbers', contextEn: 'Never synthesize fake sample sizes or improvement stats' },
      { labelZh: '内容去重与收敛', valueZh: '一意图一主指南', contextZh: '合并同质衍生页，旧冗余路径使用 301 重定向归位', labelEn: 'Zero Cannibalization', valueEn: '1 Pillar Per Core Intent', contextEn: 'Merge overlapping pages and 301 legacy duplicates' },
      { labelZh: '真实署名人设边界', valueZh: '实事求是披露研究团队', contextZh: '清晰呈现编辑团队实际专注领域与审校流程', labelEn: 'Authentic Attribution', valueEn: 'Credible Editorial Desks', contextEn: 'Match author bios truthfully to site subject scope' },
      { labelZh: '信息增量检验', valueZh: '正文 + 实用工具 / 清单', contextZh: '为读者提供可直接带走使用的模板、代码或诊断工具', labelEn: 'Information Gain', valueEn: 'Actionable Templates & Tools', contextEn: 'Deliver practical tools and specifications beyond generic text' },
    ],
    sectionsZh: [
      {
        id: 'why-ten-thousand-fails',
        heading: '一、为什么“十万篇排列组合站”在今天走不通了',
        paragraphs: [
          '在早期搜索引擎时代，很多人靠“城市名 × 行业词 × 长尾问句”程序化生成十万个页面来铺排名。但在 2024–2026 年的算法环境下，谷歌部署了站点级质量分类器与相似语义聚类检测，一旦发现网站用固定骨架批产大量同质文章，轻则拒绝收录、只停留在“已发现未索引”，重则整站权重被大幅削减。',
          '更严重的是，如果你为了追求所谓“学术感”给文章批量生成虚假的样本量数字或虚构的海外名校教授署名，不仅普通用户能一眼看穿，搜索引擎交叉比对全网实体记录时也会立刻识别出矛盾。',
        ],
      },
      {
        id: 'pivot-to-value',
        heading: '二、正确转型：少而精的支柱指南 + 真实可用工具',
        paragraphs: [
          '一个健康、能持续赚钱的垂直内容站，不需要十万篇没人看的废话。把国民经济全部 20 大门类、150 个实战细分行业真正核心的痛点、真实平台差异、合规红线和价目模板打磨透彻，再配上能直接帮用户干活的交互式工具（例如合规检查与 Schema 代码生成器），谷歌会更愿意抓取、收录并长期推荐你的页面。',
        ],
      },
    ],
    sectionsEn: [
      {
        id: 'why-ten-thousand-fails',
        heading: '1. Why Scaled Permutation Architectures Fail Modern Search',
        paragraphs: [
          'Programmatically multiplying city names, platforms, and strategies into tens of thousands of near-identical templates triggers Scaled Content Abuse classifiers, resulting in severe indexing bottlenecks and sitewide quality drops.',
        ],
      },
      {
        id: 'pivot-to-value',
        heading: '2. Consolidating Into High-Purity Pillars + Interactive Utility',
        paragraphs: [
          'Focusing crawl equity on genuinely differentiated industry guides paired with practical interactive tools creates higher user satisfaction, natural backlinks, and durable organic rankings.',
        ],
      },
    ],
    faqsZh: [
      { question: '如果网站之前已经上线过大量重复模板页面怎么办？', answer: '立即梳理保留核心高质量主页面，将重复衍生页面合并后通过 HTTP 301 重定向指向对应主指南，或为低价值页添加 noindex 并从 Sitemap 中移除。' },
      { question: '没有虚假数据对比表，文章会不会显得不够专业？', answer: '真正专业的标准是提供“可核对的官方门槛（如 Core Web Vitals 官方标准）+ 分行业可执行的合规清单 + 可直接复制的规范代码模板”，诚实比编造数字更有说服力。' },
      { question: '新站一般保留多少核心高质量页面启动最合适？', answer: '几十到一两百篇真正围绕细分领域痛点打磨的支柱页面，配合清晰内链与实用工具，最利于新域名度过冷启动并集中积累权重。' },
    ],
    faqsEn: [
      { question: 'How do we recover if a site already published thousands of thin pages?', answer: 'Consolidate overlapping topics into single authoritative guides, 301 redirect legacy duplicates cleanly, and prune low-value URLs from sitemaps.' },
      { question: 'Are real checklists better than invented benchmark scores?', answer: 'Yes. Verified official standards and industry-specific compliance rules build real credibility without risking factual distrust.' },
      { question: 'How many core pages should a focused site launch with?', answer: 'Launching with 50–150 deeply differentiated, genuinely helpful guides concentrates crawl budget and authority effectively.' },
    ],
    pullQuoteZh: '搜索引擎淘汰的不是 AI 或结构化技术，而是千篇一律、没有真实信息增量的规模化噪音。',
    pullQuoteEn: 'Search engines do not penalize structured publishing itself—they filter out repetitive pages lacking genuine information gain.',
    citationIndices: [0, 7, 1],
    updatedAt: '2026-11-23',
    publishedAt: '2026-10-22',
  },
  {
    id: 171,
    key: 'ymyl-advertising-compliance',
    section: 'eeat-evaluation',
    authorId: 'compliance-audit-desk',
    titleZh: 'YMYL 医疗金融与《广告法》红线：行业内容防降权安全写法指南',
    titleEn: 'YMYL Trust & Advertising Law Compliance: Avoiding Safety-Filter Suppression',
    subtitleZh: '覆盖中医、口腔、医美、法律、财税与金融咨询的真实合规表达边界与禁词清单',
    subtitleEn: 'Guardrail-safe phrasing boundaries for medical clinics, legal services, finance, and consumer trades',
    directAnswerZh: '在高合规风险（YMYL：医疗健康、金融保险、法律财税）领域，谷歌质量评估标准与国内各大模型的安全审核机制都对“绝对化承诺”和“无资质宣称”极其敏感。正文中必须杜绝“包治百病、根治、100%有效、绝对胜诉、稳赚不赔”等表述，改为清晰展示执业备案编号、适用前提、禁忌提示与客观流程。',
    directAnswerEn: 'Across medical, legal, and financial topics (YMYL), exaggerated efficacy claims trigger both Search Quality Rater demotions and LLM safety-filter blocks. Always disclose verified licenses, scope prerequisites, and risk advisories cleanly.',
    protocol: 'YMYL + Advertising Compliance',
    codeZh: `// 合规改写对照示例（中医 / 医美 / 法律）
❌ 违规写法："祖传秘方彻底根治老胃病，三个疗程 100% 痊愈"
✅ 合规写法："由执业中医师辨证施治，针对慢性脾胃不适提供针灸与中药调理方案，具体疗效与疗程因个人体质差异而异"`,
    codeEn: `// Compliance Rewrite Example
❌ Avoid: "Guaranteed 100% cure / Zero-risk win"
✅ Recommended: "Evaluated by licensed practitioners; individual treatment plans and outcomes depend on clinical diagnosis"`,
    checklist: [
      { labelZh: '医疗与医美禁词', valueZh: '严禁“根治、包治、无痛永久”', contextZh: '必须区分“持证医疗美容”与“普通生活美容”界限', labelEn: 'Medical Claim Guardrails', valueEn: 'No "Cure / Guaranteed" Claims', contextEn: 'Separate licensed clinical care from non-medical beauty services' },
      { labelZh: '法律与金融禁词', valueZh: '严禁“包赢官司、保本高息”', contextZh: '注明律师执业证号与金融/保险产品免责条款提醒', labelEn: 'Legal & Finance Guardrails', valueEn: 'No Outcome Guarantees', contextEn: 'Disclose licensing credentials and risk/exclusion terms clearly' },
      { labelZh: '普通食品与茶饮', valueZh: '严禁宣传临床药用疗效', contextZh: '不得为普通茶叶、酒水或生鲜赋予“降三高、防癌治病”功效', labelEn: 'Food & Beverage Rules', valueEn: 'No Unproven Medical Claims', contextEn: 'Focus on origin, ingredients, nutrition, and storage specs' },
      { labelZh: '审校与更新署名', valueZh: '清晰列明审核人及修订日期', contextZh: '高敏感行业页面应定期复核政策与法规时效', labelEn: 'Reviewer Transparency', valueEn: 'Visible Reviewer & Date', contextEn: 'Audit sensitive compliance disclosures regularly' },
    ],
    sectionsZh: [
      {
        id: 'dual-shield',
        heading: '一、遵守广告法，同时也是在做最好的大模型 GEO',
        paragraphs: [
          '很多线下商家有个误区，以为网页文案写得越夸张越吸引客户。但在大模型问答系统里，安全合规护栏会直接屏蔽带有欺诈或违法医疗承诺的网页段落，导致你的内容连进入候选引文池的机会都没有。',
          '老老实实写出“适用哪些人群、哪些情况不建议做、完整流程耗时多少、费用构成和质保范围是什么”，既完全合法合规，又恰恰命中大模型判定“客观可信来源”的高权重特征。',
        ],
      },
    ],
    sectionsEn: [
      {
        id: 'dual-shield',
        heading: '1. Regulatory Compliance Reinforces AI Grounding Eligibility',
        paragraphs: [
          'Overstated marketing superlatives trigger both consumer distrust and automated safety classifiers inside search and LLM engines. Calm, scope-bounded disclosures pass safety gates reliably.',
        ],
      },
    ],
    faqsZh: [
      { question: '怎么快速检查自己的网站文案有没有广告法违禁极限词？', answer: '可以使用本站内置的「GEO 体检与工具」页面，输入您的业务介绍与价格说明后，系统会实时扫描常见极限词与行业敏感表述并给出提示。' },
      { question: '普通中医养生馆和持证中医诊所文案要求一样吗？', answer: '完全不同。普通养生足浴馆只能宣传放松舒缓与健康保健，绝对不得以“诊疗疾病、开具临床处方”自居。' },
      { question: '免责声明放在页面最底部小字够不够？', answer: '对于金融、医疗、法律等核心内容，重要的适用前提与风险边界建议直接体现在核心问答和摘要段中。' },
    ],
    faqsEn: [
      { question: 'How can businesses screen copy for risky claims before publishing?', answer: 'Our built-in GEO Toolkit scans draft descriptions in real time for common absolute and restricted terms.' },
      { question: 'Can a non-medical foot spa claim clinical treatment benefits?', answer: 'Never. Restrict copy strictly to relaxation, hygiene standards, and transparent service durations.' },
      { question: 'Where should key contraindications appear?', answer: 'Surface important prerequisites directly within service descriptions and FAQs rather than hiding them solely in tiny footer disclaimers.' },
    ],
    pullQuoteZh: '克制、透明、守住行业底线的表达，在短期防投诉，在长期则是赢得搜索与 AI 信赖的最高壁垒。',
    pullQuoteEn: 'Restraint and factual candor protect businesses from legal risk while earning durable algorithmic trust.',
    citationIndices: [7, 0, 2],
    updatedAt: '2026-11-21',
    publishedAt: '2026-10-16',
  },
  {
    id: 172,
    key: 'author-provenance-eeat',
    section: 'eeat-evaluation',
    authorId: 'compliance-audit-desk',
    titleZh: 'E-E-A-T 实体归因实操：告别匿名发布与构建可核验的专业背书',
    titleEn: 'Authentic E-E-A-T Attribution: Moving Beyond Generic Admin Bylines',
    subtitleZh: '如何真实、克制地呈现编辑团队背景、审校责任人与一手引用来源，避免“假大空专家人设”',
    subtitleEn: 'Presenting verifiable editorial accountability, primary documentation, and honest scope disclosures',
    directAnswerZh: 'E-E-A-T 中的可信度（Trust）来源于透明度，而不是编造头衔。清晰展示实际负责内容撰写与核查的编辑部或执业作者信息、公开明确的内容审校原则页面，并在正文中如实引用 Google Search Central、W3C 等权威一手规范文档，才能建立经得起时间检验的网站声誉。',
    directAnswerEn: 'E-E-A-T Trust grows from genuine transparency, not inflated fictional titles. Publish honest editorial team roles, accessible review policies, and direct citations to primary technical and regulatory authorities.',
    protocol: 'Transparent Editorial Provenance',
    codeZh: `# 推荐页面署名与出处规范
- 正文顶部明确标注撰写组别 / 作者姓名、核查审校人员与最新实质修订日期
- 页脚与独立「研究准则」页公开内容选题原则、勘误修正与联系方式
- 文末参考资料列出可点击核查的权威官方文档链接`,
    codeEn: `# Recommended Attribution Pattern
- Visible author / editorial desk, reviewer, and substantive update date
- Dedicated Standards & Corrections policy page
- Verifiable external primary references`,
    checklist: [
      { labelZh: '署名真实一致', valueZh: '告别“admin”与虚构名号', contextZh: '团队履历、所属方向与站内实际内容领域严密吻合', labelEn: 'Consistent Attribution', valueEn: 'Domain-Matched Desks', contextEn: 'Align contributor profiles realistically with covered topics' },
      { labelZh: '独立核查机制', valueZh: '撰稿与合规审校分离', contextZh: '高敏感或行业指南由合规审校组复核', labelEn: 'Editorial Review', valueEn: 'Separate QA / Compliance Desk', contextEn: 'Cross-check sensitive industry guides prior to release' },
      { labelZh: '外链引用质量', valueZh: '链接一手标准与官方机构', contextZh: '引用官方文档（Google/W3C/政务公开）而非低质互抄站', labelEn: 'Reference Integrity', valueEn: 'Primary Standards Linked', contextEn: 'Cite official docs and primary specifications directly' },
      { labelZh: '干净阅读环境', valueZh: '无诱导弹窗与遮挡广告', contextZh: '尊重访客阅读体验，避免负面交互信号拖累评分', labelEn: 'UX Hygiene', valueEn: 'No Intrusive Interstitials', contextEn: 'Maintain clean reading flow across desktop and mobile' },
    ],
    sectionsZh: [
      {
        id: 'authenticity-rule',
        heading: '一、警惕“一眼假”的海外教授人设',
        paragraphs: [
          '如果一个网站主要探讨中国本地生活、足浴门店、中医馆或国内制造业的获客方案，署名却写着某个欧洲物理/信息博士写了上万篇足浴论文，任何稍有经验的用户和搜索质量评估员都会立刻产生怀疑。',
          '实事求是地以本土行业研究团队、执业顾问或专注国内搜索工程的作者身份署名，配合真正有用的实操模板和工具，信任度反而高得多。',
        ],
      },
    ],
    sectionsEn: [
      {
        id: 'authenticity-rule',
        heading: '1. Match Contributor Identities Truthfully to Subject Matter',
        paragraphs: [
          'Human quality raters and attentive readers spot mismatched personas immediately. Ground authorship honestly in the specialists or editorial desks who genuinely research and maintain your guides.',
        ],
      },
    ],
    faqsZh: [
      { question: '新网站没有知名专家顾问，可以怎么规范署名？', answer: '可以以真实负责的研究编辑组或站内实操团队实名/专栏署名，并详细写出该专栏的内容审核步骤与参考依据来源。' },
      { question: '引用外部权威文档会不会把自己的流量导走？', answer: '不会。恰当给出 Google 官方文档、行业国家标准原文等权威出处，能显著证明文章言之有据，提高核心目标访客转化意愿。' },
      { question: '如何维护好 E-E-A-T 的长期有效性？', answer: '定期回顾核心页面，及时修订过时政策或平台规则变化，并标明真实更新日期。' },
    ],
    faqsEn: [
      { question: 'Can editorial desks serve as credible authors when starting out?', answer: 'Yes—transparently scoped practitioner teams paired with clear editorial review criteria build strong trust.' },
      { question: 'Do outbound citations hurt retention?', answer: 'Citing authoritative primary standards increases reader confidence and rarely harms genuine conversions.' },
      { question: 'How often should pillar guides be audited?', answer: 'Review core industry guides quarterly or whenever major search, regulatory, or LLM platform shifts occur.' },
    ],
    pullQuoteZh: '在搜索与 AI 的长期主义里，真诚、一致、不欺骗用户的编辑透明度永远是最可靠的护城河。',
    pullQuoteEn: 'Honest, consistent editorial transparency remains the most resilient long-term advantage in search.',
    citationIndices: [7, 0, 1],
    updatedAt: '2026-11-22',
    publishedAt: '2026-10-19',
  },
  {
    id: 173,
    key: 'pillar-consolidation-leadgen',
    section: 'search-analytics',
    authorId: 'china-b2b-desk',
    titleZh: '告别无效“堆页面”：以高价值支柱指南 + 免费工具实现 B 端转化',
    titleEn: 'Pillar Content + Utility Tools: Converting Organic Search Into B2B Leads',
    subtitleZh: '对比流量垃圾站与“深度行业指南 + 在线实用工具”在冷启动期收录速度与商业收入上的天壤之别',
    subtitleEn: 'Why focused pillar guides paired with interactive diagnostic tools outperform high-volume ad-arbitrage sites',
    directAnswerZh: '在竞争激烈的搜索生态中，指望靠几万篇同质文章铺广告弹窗获利已极其困难。将全站力量集中于几十至百余篇直击企业老板真实痛点的深度指南，并在文内顺畅引导访客使用免费自检或代码生成工具，是新站获取精准高意向线索并验证商业闭环的最短路径。',
    directAnswerEn: 'Instead of chasing thin ad-impression arbitrage across thousands of generic pages, pairing high-intent industry playbooks with interactive free utilities captures qualified business leads right from the initial launch phase.',
    protocol: 'Pillar + Interactive Utility Funnel',
    codeZh: `# 商业闭环结构示例
用户搜索长尾痛点 ("中医馆怎么上 DeepSeek 推荐")
  -> 命中唯一高纯度支柱指南 (无站内互抢)
  -> 阅读清晰价目模版与合规红线
  -> 点击内置免费工具生成专属 Schema 与诊断报告 (/tools?industry=tcm-clinic)
  -> 留下咨询或预约深度代优化服务`,
    codeEn: `# Organic-to-Lead Architecture
Specific Query -> Single Authoritative Industry Guide -> Built-in Free Diagnostic Tool -> Qualified Consultation Lead`,
    checklist: [
      { labelZh: '单一核心意图着陆', valueZh: '严控站内互抢排名', contextZh: '每个细分行业只保留 1 篇最强总指南承接全流量', labelEn: 'Single Canonical Hub', valueEn: 'Zero Internal Competition', contextEn: 'Concentrate backlinks and internal anchors onto one master guide per sector' },
      { labelZh: '互动工具停留留存', valueZh: '免费在线配置生成器', contextZh: '提升真实页面停留时间、工具收藏率与自然口碑传播', labelEn: 'Interactive Retention', valueEn: 'Built-In Free Toolkit', contextEn: 'Encourages repeat visits, sharing, and natural editorial citations' },
      { labelZh: '转化路径自然克制', valueZh: '零强迫弹窗，先给价值', contextZh: '工具生成结果免费可复制，附加服务作为自然延伸', labelEn: 'Frictionless Value First', valueEn: 'Zero Gated Popups', contextEn: 'Deliver immediate tool output before offering custom consulting' },
      { labelZh: '效果复盘指标', valueZh: 'GSC 展现 + 工具使用量 + 线索数', contextZh: '不看虚假总字数，紧盯核心页真实点击与有效咨询', labelEn: 'Actionable KPIs', valueEn: 'Search Clicks + Tool Runs + Leads', contextEn: 'Measure business conversions over raw index page count' },
    ],
    sectionsZh: [
      {
        id: 'cold-start-strategy',
        heading: '一、为什么新站冷启动必须先把流量聚焦在少数王牌页上',
        paragraphs: [
          '新域名最初获得的爬虫配额与信任权重非常有限。如果你把微薄的权重平摊到 10 万个页面上，每个页面分到的权重约等于零；如果全站内链都精准汇聚到覆盖全部 20 个门类的 150 个行业核心支柱页面和一个真正好用的在线工具页上，突破收录门槛和核心词排名的速度会快得多。',
          '而且，交互式实用工具本身最容易吸引公众号博主、行业社群和同行网站的自然外链推荐，这是纯文本文章很难得到的天然优势。',
        ],
      },
    ],
    sectionsEn: [
      {
        id: 'cold-start-strategy',
        heading: '1. Focusing Cold-Start Domain Authority Where It Counts',
        paragraphs: [
          'New domains possess limited initial crawl equity. Concentrating internal links on 150 sector hubs spanning China’s full economy plus a genuinely useful generator accelerates indexing while attracting natural bookmarks and backlinks.',
        ],
      },
    ],
    faqsZh: [
      { question: '免费开放工具生成代码，客户会不会拿了代码就自己走了？', answer: '大多数中小企业老板（例如中医馆、餐厅、制造工厂）拿到了正确代码也不知道怎么部署进服务器或改官网前端，免费工具反而用专业度筛选出了真正愿意付费委托落地的高意向客户。' },
      { question: '这种内容+工具站可以挂哪些变现方式？', answer: '除了定制咨询、官网重构和代优化服务外，也可以在稳定积累真实搜索流量后，对接正版建站/企业 SaaS 联盟推广或垂直行业广告位。' },
      { question: '多长时间复盘一次 Search Console 数据比较合理？', answer: '建议每周检查一次索引覆盖率与热门查询词，每 4–6 周根据真实曝光最高的行业页面补充更细的实测图与问答。' },
    ],
    faqsEn: [
      { question: 'Does giving away generated Schema and copy for free cannibalize services?', answer: 'No—practical free tools establish immediate proof of competence, converting busy business owners who prefer turnkey implementation.' },
      { question: 'What metrics matter most during the first 60 days?', answer: 'Track Search Console valid indexed ratio, non-branded impressions on core sector guides, and interactive toolkit completions.' },
      { question: 'Can affiliate tools or SaaS partners complement lead generation?', answer: 'Yes, once genuine organic demand builds around specific enterprise or compliance verticals.' },
    ],
    pullQuoteZh: '与其用十万个空壳网页赌搜索引擎的失误，不如用几十篇真干货配上一把趁手的工具，服务好每一个找上门的真实客户。',
    pullQuoteEn: 'Better seventy crisp, helpful guides paired with a practical tool than a hundred thousand hollow permutations.',
    citationIndices: [0, 2, 3],
    updatedAt: '2026-11-23',
    publishedAt: '2026-10-25',
  },
  {
    id: 174,
    key: 'search-console-diagnostic-workflow',
    section: 'search-analytics',
    authorId: 'tech-seo-desk',
    titleZh: 'Google Search Console 与百度资源平台收录诊断与改版排查清单',
    titleEn: 'Search Console Indexing Diagnostics: Resolving "Crawled - Not Indexed" Issues',
    subtitleZh: '系统定位新站卡在“已发现未编入索引”或“已抓取未编入索引”的常见根因及对应修补方案',
    subtitleEn: 'A practical diagnostic workflow for overcoming discovery bottlenecks and quality-threshold indexing rejections',
    directAnswerZh: '在 Search Console 中，「已发现 - 尚未编入索引」多指向抓取预算拥堵或 URL 数量失控；而「已抓取 - 尚未编入索引」则直接反映搜索引擎看完了内容，但认为当前页面与现有网页重复或信息价值不足。精简冗余路径、强化核心页内链深度并补充独立实证细节，是打破收录僵局的最有效解法。',
    directAnswerEn: 'In Search Console, "Discovered - currently not indexed" signals crawl-queue saturation, whereas "Crawled - currently not indexed" indicates insufficient uniqueness or perceived quality. Pruning bloated routes and enriching pillar depth resolves both bottlenecks.',
    protocol: 'GSC Index Coverage Diagnostics',
    codeZh: `# Search Console 常见状态排查表
"已发现 - 尚未编入索引" -> 检查是否一次性提交了过多重复 URL，收敛 Sitemap
"已抓取 - 尚未编入索引" -> 检查页面是否文字过薄、与站内其他页雷同或缺少真实差异信息
"备用网页（有适当的规范标记）" -> 检查是否存在多参数重复链接或多余斜杠版本
"被拦截或返回 404" -> 确认是否故意封禁或及时清理错误内链`,
    codeEn: `# GSC Status Triage
"Discovered - not indexed" -> Reduce sitemap bloat & improve internal link depth
"Crawled - not indexed" -> Consolidate duplicates & increase substantive originality`,
    checklist: [
      { labelZh: '核心页点击深度', valueZh: '≤ 3–4 跳内直达', contextZh: '从首页或分类导航可顺畅点击抵达所有核心文章', labelEn: 'Crawl Click Depth', valueEn: '≤ 3–4 Hops from Home', contextEn: 'Ensure every pillar study is reachable cleanly via internal links' },
      { labelZh: '站内锚文本质量', valueZh: '具体描述性锚文本', contextZh: '使用“中医馆 GEO 指南”等明确词组而非“点击这里”', labelEn: 'Descriptive Anchors', valueEn: 'Topic-Explicit Link Text', contextEn: 'Reinforce semantic relevance across internal links' },
      { labelZh: 'URL 结尾统一', valueZh: '统一无多余尾斜杠', contextZh: '避免 /tools 与 /tools/ 同时返回 200 分散权重', labelEn: 'Trailing Slash Parity', valueEn: 'Normalized Canonical Paths', contextEn: 'Strip redundant trailing slashes deterministically' },
      { labelZh: '定期死链巡检', valueZh: '清理站内指向 404 链接', contextZh: '确保外链引用与站内推荐模块零失效跳转', labelEn: 'Broken Link Audits', valueEn: 'Zero Internal 404 Links', contextEn: 'Keep navigation, related guides, and references healthy' },
    ],
    sectionsZh: [
      {
        id: 'triage-signals',
        heading: '一、看懂 Search Console 给出的真实反馈信号',
        paragraphs: [
          '网站上线后的前两周，最重要的是每天观察“网页索引编制”报表里的未编入索引原因分类，而不是只盯着总展示数焦虑。',
          '若出现大片“已抓取 - 尚未编入索引”，往往说明当前页面群同质化偏高，应当果断做减法：把零散拆分的薄弱页面合并为结构丰满的完整章节，通常两三周后重新抓取时索引率便会明显回升。',
        ],
      },
    ],
    sectionsEn: [
      {
        id: 'triage-signals',
        heading: '1. Reading Index Coverage Signals Actionably',
        paragraphs: [
          'During launch weeks, monitor index exclusion categories rather than stressing over raw impressions. Merging near-duplicate pages into fewer high-value destinations consistently lifts crawl acceptance.',
        ],
      },
    ],
    faqsZh: [
      { question: '在 Search Console 手动点“请求编入索引”每天有限额吗？', answer: '有每日配额限制，因此只针对最重要的新支柱页或重大改版页手动提交；常规全站更新应依赖干净的 XML Sitemap 与首屏内链。' },
      { question: '发现老链接改版后旧地址报错 404 怎么办？', answer: '如果是结构合并（如把旧长尾研究页归并至新版行业总指南），应在服务端为旧地址设置 HTTP 301 永久重定向至对应新主指南，既不丢权重也不出 404。' },
      { question: '百度站长和谷歌 Search Console 的标准差异大吗？', answer: '在首包 HTML 直出、URL 简洁无冗余参数、拒绝堆砌重复废话方面，两者底层的质量判断逻辑高度一致。' },
    ],
    faqsEn: [
      { question: 'Should we manually request indexing for every page?', answer: 'No. Reserve manual inspection requests for major flagship launches and rely on clean sitemaps and internal links for sitewide discovery.' },
      { question: 'How should retired URLs be handled when consolidating?', answer: 'Serve HTTP 301 permanent redirects pointing from retired permutation slugs directly to their consolidated pillar counterpart.' },
      { question: 'Do trailing slash mismatches hurt rankings?', answer: 'Standardizing canonicals and stripping duplicate slashes avoids unnecessary duplicate-URL splitting.' },
    ],
    pullQuoteZh: '当搜索引擎选择“已抓取但暂不索引”时，它是在客观提醒你：少做凑数页面，把仅有的那几篇打磨到不可替代。',
    pullQuoteEn: '"Crawled - currently not indexed" is a clear invitation to prune noise and elevate originality.',
    citationIndices: [0, 8, 9],
    updatedAt: '2026-11-20',
    publishedAt: '2026-10-10',
  },
  {
    id: 175,
    key: 'zero-click-geo-attribution',
    section: 'search-analytics',
    authorId: 'geo-retrieval-desk',
    titleZh: '零点击与 AI 搜索时代的效果评估：从单纯点击率到“实体被推荐率”',
    titleEn: 'Measuring Search Performance in the AI Era: Beyond Last-Click Traffic',
    subtitleZh: '追踪品牌词搜索抬升、典型行业提问首推率与站内工具实际线索转化的实战归因框架',
    subtitleEn: 'Tracking branded search lift, prompt citation consistency, and on-site utility conversion in zero-click workflows',
    directAnswerZh: '当用户直接在 DeepSeek、豆包或 Google AI Overviews 里看完答案后去搜品牌名或直接到店消费，传统网页纯点击数据往往会低估内容贡献。建立“典型行业提示词定期手工抽测台账 + 品牌复搜趋势 + 站内工具转化率”三位一体评估法，才能客观衡量 GEO 带来的真实生意回报。',
    directAnswerEn: 'As AI Overviews and Chinese LLM assistants satisfy informational steps before a click occurs, combine periodic standardized prompt audits with branded query lift and on-site utility conversions to measure true commercial impact.',
    protocol: 'Zero-Click & Prompt Panel Tracking',
    codeZh: `# 推荐月度人工抽测台账模板（以具体行业为例）
1. 设定 10 个真实客户高频问法（含城市/人群/预算约束）
2. 每月 1 号固定在 DeepSeek / 豆包 / 微信搜一问 / Kimi 原生清空对话实测
3. 记录：是否被提及？引用了官网哪页还是第三方点评？给出的价格与资质信息是否准确？`,
    codeEn: `# Monthly Prompt Verification Ledger
1. Define 10 authentic customer decision queries (including location/budget)
2. Test monthly in clean sessions across target LLM platforms
3. Audit citation accuracy: brand mention, URL link, and fee fidelity`,
    checklist: [
      { labelZh: '月度真实提示词抽检', valueZh: '清空历史记录实测', contextZh: '避免同一账号历史记忆干扰真实新客推荐结果', labelEn: 'Clean-Session Prompt Audits', valueEn: 'Monthly Fresh Sessions', contextEn: 'Avoid personalized chat-history bias during verification' },
      { labelZh: '品牌搜索量追踪', valueZh: 'GSC / 指数品牌词抬升', contextZh: '用户被 AI 种草后往往主动搜索品牌全称核实', labelEn: 'Branded Demand Lift', valueEn: 'Direct Brand Search Trends', contextEn: 'Measures downstream recall after zero-click AI recommendations' },
      { labelZh: '引用准确性纠偏', valueZh: '核对 AI 回答中的报价是否过期', contextZh: '发现模型复述错误参数时第一时间修订官网最显眼首段', labelEn: 'Hallucination Correction', valueEn: 'Patch Outdated Specs First', contextEn: 'Update lead sections immediately whenever AI cites stale rates' },
      { labelZh: '转化归因闭环', valueZh: '工具生成数 + 微信/表单来询备注', contextZh: '主动询问新客户“您是从哪了解到我们的”', labelEn: 'Conversion Attribution', valueEn: 'Lead Source Tagging', contextEn: 'Pair web tool telemetry with customer intake source checks' },
    ],
    sectionsZh: [
      {
        id: 'realistic-measurement',
        heading: '一、如何用最接地气的方法验证 GEO 到底有没有用',
        paragraphs: [
          '对于一家实际经营的中医馆、口腔门诊、装修公司或机床厂来说，不需要花大价钱买玄乎的“AI 指数大屏”。最可靠的方法就是老板或运营每月亲自用干净账号去豆包、DeepSeek 和元宝问一遍客户常问的问题。',
          '如果你按照行业指南把营业时段、执业资质、真实价目表和跨端地图对齐做好了，往往几周到一两个月内就能亲眼看到模型开始准确复述你家的特色项目和透明价格——且很多来咨询的新客会直接提到“我是问 AI 推荐找过来的”。',
        ],
      },
    ],
    sectionsEn: [
      {
        id: 'realistic-measurement',
        heading: '1. Practical Verification Without Vanity Dashboards',
        paragraphs: [
          'Real businesses do not need expensive opaque scores. Running clean monthly checks across customer prompts and tracking whether AI assistants quote accurate fees and credentials provides clear, actionable proof.',
        ],
      },
    ],
    faqsZh: [
      { question: 'GEO 优化一般多久能在国产大模型里看到推荐变化？', answer: '依赖联网实时检索的模型（如 DeepSeek 联网、Kimi、秘塔、元宝结合公众号）在页面和第三方条目更新后通常数天至数周即可在检索结果中反映变化；基座模型记忆则随周期性迭代同步更新。' },
      { question: '为什么同一个问题今天问推荐了我家，明天问排序变了？', answer: '大语言模型本身存在概率采样波动，重点关注多次干净提问下是否“高频稳定出现”以及引用的事实信息是否准确，而不必纠结单次排序名次。' },
      { question: '怎样防止模型把竞争对手的缺点或过期价格张冠李戴到自己品牌上？', answer: '在官网建立清晰的品牌常见问题解答与最新年度价目表页面，并用显式机构全称陈述事实，帮助检索模型优先锚定官方口径。' },
    ],
    faqsEn: [
      { question: 'How quickly do updates surface in live-search LLMs?', answer: 'Live-browsing pipelines often reflect revised web pages and synchronized directories within days to a few weeks.' },
      { question: 'Why do LLM recommendations vary slightly across runs?', answer: 'Generative sampling is probabilistic; evaluate average inclusion consistency and factual accuracy across multiple clean sessions.' },
      { question: 'How can brands correct outdated prices cited by AI?', answer: 'Publish clearly dated official price tables in your lead HTML section and update third-party directory cards concurrently.' },
    ],
    pullQuoteZh: '衡量搜索与 AI 优化价值的终极标准，从来不是站内生造的分数，而是真实客户带着明确信任找上门的那一刻。',
    pullQuoteEn: 'True search success is measured not by synthetic dashboards, but when informed customers arrive trusting your published facts.',
    citationIndices: [2, 0, 3],
    updatedAt: '2026-11-23',
    publishedAt: '2026-10-28',
  },
];

const DATE_ANCHOR_MS = Date.UTC(2026, 10, 23);

function formatIsoDate(ms: number): string {
  return new Date(ms).toISOString().slice(0, 10);
}

const LIU_ZHONGWANG_INDUSTRIES = new Set([
  'tcm-clinic',
  'foot-spa',
  'catering-dining',
  'interior-design',
  'legal-service',
  'machinery-mfg',
  'mcn-livestream',
  'mining-equipment',
  'robotics-automation',
  'custom-software-dev',
  'ai-knowledge-deploy',
  'ip-trademark-patent',
  'gold-jewelry-retail',
  'driving-school',
  'health-checkup-center',
  'industry-association',
]);

function getChinaIndustryAuthorId(indKey: string, groupEn: string): string {
  if (LIU_ZHONGWANG_INDUSTRIES.has(indKey)) {
    return 'liu-zhongwang';
  }
  if (
    groupEn.includes('Healthcare') ||
    groupEn.includes('Local Services') ||
    groupEn.includes('Food') ||
    groupEn.includes('Retail') ||
    groupEn.includes('Media') ||
    groupEn.includes('Personal Care') ||
    groupEn.includes('Recreation')
  ) {
    return 'china-local-desk';
  }
  return 'china-b2b-desk';
}

function getChinaIndustryImage(groupEn: string): string {
  if (
    groupEn.includes('Healthcare') ||
    groupEn.includes('Agriculture') ||
    groupEn.includes('R&D') ||
    groupEn.includes('Environmental') ||
    groupEn.includes('Energy & Chemicals')
  ) {
    return '/src/assets/images/section_science_climate_1795444152521.jpg';
  }
  if (groupEn.includes('Digital Tech')) {
    return '/src/assets/images/section_ai_systems_1795444152985.jpg';
  }
  if (
    groupEn.includes('Manufacturing') ||
    groupEn.includes('Light Consumer') ||
    groupEn.includes('Real Estate') ||
    groupEn.includes('Construction')
  ) {
    return '/src/assets/images/section_design_craft_1795444152910.jpg';
  }
  if (
    groupEn.includes('Finance') ||
    groupEn.includes('Retail') ||
    groupEn.includes('Automotive') ||
    groupEn.includes('Mining') ||
    groupEn.includes('Transportation')
  ) {
    return '/src/assets/images/section_global_economy_1795444152846.jpg';
  }
  return '/src/assets/images/section_culture_society_1795444152185.jpg';
}

function computeExactWordMetrics(
  locale: Locale,
  parts: {
    title: string;
    subtitle: string;
    directAnswer: string;
    keyTakeaways: string[];
    sections: Array<{
      heading: string;
      paragraphs: string[];
      metrics?: Array<{ label: string; value: string; context: string }>;
    }>;
    pullQuote: string;
    faqs: Array<{ question: string; answer: string }>;
  },
): { wordCount: number; readTimeMinutes: number } {
  const fullText = [
    parts.title,
    parts.subtitle,
    parts.directAnswer,
    ...parts.keyTakeaways,
    ...parts.sections.flatMap((s) => [
      s.heading,
      ...s.paragraphs,
      ...(s.metrics ? s.metrics.flatMap((m) => [m.label, m.value, m.context]) : []),
    ]),
    parts.pullQuote,
    ...parts.faqs.flatMap((f) => [f.question, f.answer]),
  ].join(' ');

  if (locale === 'zh') {
    const cleanChars = fullText.replace(/\s+/g, '').length;
    return {
      wordCount: cleanChars,
      readTimeMinutes: Math.max(2, Math.round(cleanChars / 360)),
    };
  }
  const enWords = fullText.trim().split(/\s+/).filter(Boolean).length;
  return {
    wordCount: enWords,
    readTimeMinutes: Math.max(2, Math.round(enWords / 200)),
  };
}

const wordMetricsCache = new Map<string, { wordCount: number; readTimeMinutes: number }>();

export function buildSlugForId(id: number): string {
  if (id >= 1 && id <= CHINA_INDUSTRY_PILLAR_COUNT) {
    const ind = CHINA_INDUSTRIES[id - 1];
    return `guide-${String(id).padStart(5, '0')}-${ind.key}-china-llm-geo`;
  }
  if (id > CHINA_INDUSTRY_PILLAR_COUNT && id <= CHINA_INDUSTRY_PILLAR_COUNT + CHINA_PLATFORM_PILLAR_COUNT) {
    const plat = CHINA_LLM_PLATFORMS[id - CHINA_INDUSTRY_PILLAR_COUNT - 1];
    return `guide-${String(id).padStart(5, '0')}-${plat.key}-platform-geo`;
  }
  const f = FOUNDATION_GUIDES.find((g) => g.id === id);
  if (f) {
    return `guide-${String(id).padStart(5, '0')}-${f.key}`;
  }
  return `guide-${String(id).padStart(5, '0')}-pillar`;
}

export function parseArticleIdFromSlug(slug: string): number | null {
  const match = /^guide-(\d{5})-/.exec(slug);
  if (!match) return null;
  const id = Number.parseInt(match[1], 10);
  if (Number.isNaN(id) || id < 1 || id > TOTAL_ARTICLE_COUNT) return null;
  return buildSlugForId(id) === slug ? id : null;
}

/**
 * Clean 301 redirect resolver for legacy 10k/110k permutation URLs (`/articles/study-XXXXX-...`)
 * so old bookmarks consolidate cleanly onto the authoritative Pillar Guide without Soft-404s.
 */
export function resolveLegacySlugRedirect(slug: string): string | null {
  if (!/^study-\d{5,6}-/.test(slug)) return null;
  // Match any China industry key embedded in legacy study slug
  for (let i = 0; i < CHINA_INDUSTRIES.length; i++) {
    const ind = CHINA_INDUSTRIES[i];
    if (slug.includes(`-${ind.key}-`)) {
      return buildSlugForId(i + 1);
    }
  }
  // Match China platform slug if present
  for (let i = 0; i < CHINA_LLM_PLATFORMS.length; i++) {
    const plat = CHINA_LLM_PLATFORMS[i];
    if (slug.includes(`-${plat.key}-`)) {
      return buildSlugForId(CHINA_INDUSTRY_PILLAR_COUNT + i + 1);
    }
  }
  // Map legacy foundational study divisions cleanly to corresponding foundation pillar
  if (slug.includes('crawl-budget') || slug.includes('edge-ssr') || slug.includes('inp-') || slug.includes('lcp-') || slug.includes('cls-')) {
    return buildSlugForId(161);
  }
  if (slug.includes('sitemap') || slug.includes('canonical') || slug.includes('robots')) {
    return buildSlugForId(162);
  }
  if (slug.includes('hreflang') || slug.includes('multilingual')) {
    return buildSlugForId(163);
  }
  if (slug.includes('llms-txt')) {
    return buildSlugForId(165);
  }
  if (slug.includes('schema') || slug.includes('json-ld') || slug.includes('faq')) {
    return buildSlugForId(167);
  }
  if (slug.includes('eeat') || slug.includes('ymyl')) {
    return buildSlugForId(171);
  }
  // Default legacy base studies route cleanly to foundational GEO guide #164
  return buildSlugForId(164);
}

function buildBaseSummaryById(id: number, locale: Locale): ArticleSummary {
  const slug = buildSlugForId(id);

  // 1..150: Dedicated China Industry GEO Pillar Guides (100% bespoke headlines & narratives per industry)
  if (id >= 1 && id <= CHINA_INDUSTRY_PILLAR_COUNT) {
    const ind = CHINA_INDUSTRIES[id - 1];
    const headline = getIndustryHeadline(ind.key);
    const authorId = getChinaIndustryAuthorId(ind.key, ind.groupEn);
    const daysAgo = (id * 2) % 35;
    const updatedAt = formatIsoDate(DATE_ANCHOR_MS - daysAgo * 86400000);
    const publishedAt = formatIsoDate(DATE_ANCHOR_MS - (daysAgo + 24) * 86400000);
    const image = getChinaIndustryImage(ind.groupEn);

    if (locale === 'zh') {
      const title = headline.titleZh;
      const subtitle = headline.subtitleZh;
      const directAnswer = headline.directAnswerZh;
      const extraKeywords =
        authorId === 'liu-zhongwang'
          ? ['刘忠望', '核子GEO', '盒子AI']
          : [];

      return {
        id,
        slug,
        title,
        subtitle,
        section: 'china-llm-geo',
        authorId,
        reviewerName: '周若琳 · 内容质量与合规审校组',
        publishedAt,
        updatedAt,
        readTimeMinutes: 5,
        wordCount: 0,
        featured: id <= 6,
        isLead: id === 1,
        image,
        imageAlt: `${ind.zh}行业 SEO 与 GEO 实战配图`,
        imageCaption: `${ind.groupZh} · 接地气全平台获客指南（${updatedAt} 修订）`,
        directAnswer,
        keywords: [ind.zh, ind.groupZh, 'DeepSeek', '豆包', '腾讯元宝', ind.schemaType, ...extraKeywords],
        industryKey: ind.key,
      };
    }

    const title = headline.titleEn;
    const subtitle = headline.subtitleEn;
    const directAnswer = headline.directAnswerEn;
    const extraKeywordsEn =
      authorId === 'liu-zhongwang'
        ? ['Zhongwang Liu', 'Nucleus GEO', 'Hezi AI']
        : [];

    return {
      id,
      slug,
      title,
      subtitle,
      section: 'china-llm-geo',
      authorId,
      reviewerName: 'Ruolin Zhou (Quality & Compliance Review)',
      publishedAt,
      updatedAt,
      readTimeMinutes: 4,
      wordCount: 0,
      featured: id <= 6,
      isLead: id === 1,
      image,
      imageAlt: `${ind.en} GEO field guide illustration`,
      imageCaption: `${ind.groupEn} · Practical Sector Playbook (Updated ${updatedAt})`,
      directAnswer,
      keywords: [ind.en, ind.groupEn, 'DeepSeek', 'Doubao', 'Tencent Yuanbao', ind.schemaType, ...extraKeywordsEn],
      industryKey: ind.key,
    };
  }

  // 151..160: Dedicated China LLM Platform Deep Dives
  if (id > CHINA_INDUSTRY_PILLAR_COUNT && id <= CHINA_INDUSTRY_PILLAR_COUNT + CHINA_PLATFORM_PILLAR_COUNT) {
    const platIdx = id - CHINA_INDUSTRY_PILLAR_COUNT - 1;
    const plat = CHINA_LLM_PLATFORMS[platIdx];
    const platHeadline = CHINA_PLATFORM_HEADLINES[plat.key];
    if (!platHeadline) {
      throw new Error(`Missing bespoke platform headline for ${plat.key}`);
    }
    const authorId = platIdx === 0 || platIdx === 5 ? 'liu-zhongwang' : 'geo-retrieval-desk';
    const daysAgo = (platIdx * 3) % 28;
    const updatedAt = formatIsoDate(DATE_ANCHOR_MS - daysAgo * 86400000);
    const publishedAt = formatIsoDate(DATE_ANCHOR_MS - (daysAgo + 21) * 86400000);
    const image = '/src/assets/images/section_ai_systems_1795444152985.jpg';

    if (locale === 'zh') {
      const title = platHeadline.titleZh;
      const subtitle = platHeadline.subtitleZh;
      const directAnswer = platHeadline.directAnswerZh;
      const extraKeywords =
        authorId === 'liu-zhongwang' ? ['刘忠望', '核子GEO', '盒子AI'] : [];

      return {
        id,
        slug,
        title,
        subtitle,
        section: 'china-llm-geo',
        authorId,
        reviewerName: '周若琳 · 内容质量与合规审校组',
        publishedAt,
        updatedAt,
        readTimeMinutes: 5,
        wordCount: 0,
        featured: platIdx < 3,
        image,
        imageAlt: `${plat.zh} 实操指南配图`,
        imageCaption: `国产大模型推荐原理拆解 · ${plat.shortZh}（${updatedAt}）`,
        directAnswer,
        keywords: [plat.zh, plat.shortZh, 'GEO', '大模型推荐', '普通商家获客', ...extraKeywords],
        platformKey: plat.key,
      };
    }

    const title = platHeadline.titleEn;
    const subtitle = platHeadline.subtitleEn;
    const directAnswer = platHeadline.directAnswerEn;
    const extraKeywordsEn =
      authorId === 'liu-zhongwang' ? ['Zhongwang Liu', 'Nucleus GEO', 'Hezi AI'] : [];

    return {
      id,
      slug,
      title,
      subtitle,
      section: 'china-llm-geo',
      authorId,
      reviewerName: 'Ruolin Zhou (Quality & Compliance Review)',
      publishedAt,
      updatedAt,
      readTimeMinutes: 4,
      wordCount: 0,
      featured: platIdx < 3,
      image,
      imageAlt: `${plat.en} retrieval architecture illustration`,
      imageCaption: `China LLM Ecosystem Monograph · ${plat.shortEn} (${updatedAt})`,
      directAnswer,
      keywords: [plat.en, plat.shortEn, 'GEO', 'Search Grounding', ...extraKeywordsEn],
      platformKey: plat.key,
    };
  }

  // 161..175: Foundational Technical SEO & Global GEO Guides
  const f = FOUNDATION_GUIDES.find((g) => g.id === id) ?? FOUNDATION_GUIDES[0];
  const secInfo =
    locale === 'zh'
      ? SECTIONS_ZH.find((s) => s.slug === f.section) ?? SECTIONS_ZH[0]
      : SECTIONS_BY_SLUG[f.section];

  if (locale === 'zh') {
    return {
      id: f.id,
      slug,
      title: f.titleZh,
      subtitle: f.subtitleZh,
      section: f.section,
      authorId: f.authorId,
      reviewerName: '周若琳 · 内容质量与合规审校组',
      publishedAt: f.publishedAt,
      updatedAt: f.updatedAt,
      readTimeMinutes: 4,
      wordCount: 0,
      featured: f.id === 164 || f.id === 170,
      image: secInfo.image,
      imageAlt: `${secInfo.name}工程规范配图：${f.titleZh}`,
      imageCaption: `${secInfo.name}核心规范指南（${f.updatedAt}）`,
      directAnswer: f.directAnswerZh,
      keywords: [secInfo.shortName, f.protocol, 'Google SEO', 'GEO'],
    };
  }

  return {
    id: f.id,
    slug,
    title: f.titleEn,
    subtitle: f.subtitleEn,
    section: f.section,
    authorId: f.authorId,
    reviewerName: 'Ruolin Zhou (Quality & Compliance Review)',
    publishedAt: f.publishedAt,
    updatedAt: f.updatedAt,
    readTimeMinutes: 4,
    wordCount: 0,
    featured: f.id === 164 || f.id === 170,
    image: secInfo.image,
    imageAlt: `${secInfo.name} engineering blueprint: ${f.titleEn}`,
    imageCaption: `${secInfo.name} Core Playbook (${f.updatedAt})`,
    directAnswer: f.directAnswerEn,
    keywords: [secInfo.shortName, f.protocol, 'Google SEO', 'GEO'],
  };
}

export function getArticleSummaryById(id: number, locale: Locale): ArticleSummary {
  const base = buildBaseSummaryById(id, locale);
  const cacheKey = `${id}:${locale}`;
  let metrics = wordMetricsCache.get(cacheKey);
  if (!metrics) {
    const full = buildFullArticleFromSummary(base, locale);
    metrics = computeExactWordMetrics(locale, full);
    wordMetricsCache.set(cacheKey, metrics);
  }
  return {
    ...base,
    wordCount: metrics.wordCount,
    readTimeMinutes: metrics.readTimeMinutes,
  };
}

function buildFullArticleFromSummary(summary: ArticleSummary, locale: Locale): Article {
  const id = summary.id;

  // 1..150: China Industry Pillar Guides (100% bespoke headlines, varied sector framing & full EN depth)
  if (id >= 1 && id <= CHINA_INDUSTRY_PILLAR_COUNT) {
    const ind = CHINA_INDUSTRIES[id - 1];
    const headline = getIndustryHeadline(ind.key);
    const narrative = getIndustryNarrative(ind.key);
    const c1: ArticleCitation = PRIMARY_CITATIONS[1];
    const c2: ArticleCitation = PRIMARY_CITATIONS[2];
    const c3: ArticleCitation = PRIMARY_CITATIONS[0];

    if (locale === 'zh') {
      const schemaSnippet = `{
  "@context": "https://schema.org",
  "@type": "${ind.schemaType}",
  "name": "示例${ind.zh}机构（填写您的真实注册全称）",
  "inLanguage": "zh-CN",
  "areaServed": "填写所在城市与核心商圈",
  "priceRange": "填写真实区间，涵盖：${ind.priceMenuHintZh}",
  "knowsAbout": ["${ind.zh}", "透明定价", "官方执业备案公示"]
}`;

      return {
        ...summary,
        keyTakeaways: [
          `第一步先改这个：${narrative.actionStepsZh[0]}`,
          `第二步补齐问答：${narrative.actionStepsZh[1]}`,
          `第三步对齐档案：${narrative.actionStepsZh[2]}`,
        ],
        sections: [
          {
            id: 'real-scenario',
            heading: headline.headingsZh[0],
            paragraphs: [
              narrative.plainStoryZh,
              `在「${ind.groupZh}」板块的真实高频检索里，消费者或采购方常直接追问：「${ind.samplePromptZh}」。针对${ind.zh}而言，一旦网页和公开档案缺少直白文字说明，${ind.shortBottleneckZh}就会直接把高意向客户拦在门外。`,
            ],
          },
          {
            id: 'search-vs-ai',
            heading: headline.headingsZh[1],
            paragraphs: [
              narrative.aiVsSearchZh,
              `面向「${ind.zh}」从业机构，以下 3 项核验凭据决定了搜索引擎排名稳定度与大模型推荐采信率（围绕「${ind.priceMenuHintZh}」与「${ind.trustSourcesZh}」逐项落地）：`,
            ],
            metrics: narrative.customMetrics.map((m) => ({
              label: m.labelZh,
              value: m.valueZh,
              context: m.contextZh,
            })),
          },
          {
            id: 'copy-comparison',
            heading: headline.headingsZh[2],
            paragraphs: [
              narrative.badCopyZh,
              narrative.goodCopyZh,
              `${ind.zh}一线实战建议：${narrative.practitionerNoteZh}`,
            ],
          },
          {
            id: 'action-and-schema',
            heading: headline.headingsZh[3],
            paragraphs: [
              `1. ${narrative.actionStepsZh[0]}`,
              `2. ${narrative.actionStepsZh[1]}`,
              `3. ${narrative.actionStepsZh[2]}`,
              `「${ind.zh}」合规红线与工程落地点：${ind.complianceRiskZh}。技术排查与「${ind.schemaType}」结构化标注可直接套用下方代码模板，或通过页面顶部「GEO 工具」在线扫描违禁词并一键生成。`,
            ],
            codeSnippet: {
              label: `${ind.zh} · Schema.org (${ind.schemaType}) 网页基础结构参考`,
              code: schemaSnippet,
            },
          },
        ],
        pullQuote: narrative.practitionerNoteZh,
        faqs: [
          {
            question: `客户在 DeepSeek 或豆包问「${ind.samplePromptZh}」时，模型先看什么？`,
            answer: `模型会优先核对「${ind.trustSourcesZh}」上的真实登记信息与口碑，然后重点提取页面里有没有用纯文字写清「${ind.priceMenuHintZh}」和适用边界。`,
          },
          {
            question: `我们做${ind.zh}的门店或工厂没有专业 IT 团队，只靠写公众号和改地图有用吗？`,
            answer: `非常有用！${narrative.actionStepsZh[2]} 接着把本文第三节围绕「${ind.zh}」拆解的实证文案直接贴进官网首页或认证公众号首段，无需写代码即可让百度、谷歌与国产大模型读懂核心优势。`,
          },
          {
            question: `${ind.zh}在写宣传文案时最容易踩中哪条广告红线？`,
            answer: `${ind.complianceRiskZh}。针对「${ind.groupZh}」领域的公开页面，建议在上线前先对照「GEO 工具」扫描一遍敏感承诺词，确保既合规又保留足够多可核验的细节数据。`,
          },
        ],
        citations: [c1, c2, c3],
      };
    }

    const schemaSnippetEn = `{
  "@context": "https://schema.org",
  "@type": "${ind.schemaType}",
  "name": "Example ${ind.en} Entity (Replace with Registered Name)",
  "inLanguage": "en-US",
  "areaServed": "City & Service District",
  "priceRange": "${ind.priceMenuHintEn}",
  "knowsAbout": ["${ind.en}", "Transparent Pricing", "Verified Licensing"]
}`;

    return {
      ...summary,
      keyTakeaways: [
        `Priority 1 (${ind.en}): ${narrative.actionStepsEn[0]}`,
        `Priority 2 (Buyer Q&A): ${narrative.actionStepsEn[1]}`,
        `Priority 3 (Entity Alignment): ${narrative.actionStepsEn[2]}`,
      ],
      sections: [
        {
          id: 'real-scenario',
          heading: headline.headingsEn[0],
          paragraphs: [
            narrative.plainStoryEn,
            `Across China’s ${ind.groupEn} sector, buyers and procurement leads increasingly type full conversational queries such as "${ind.samplePromptEn}". Because many ${ind.en.toLowerCase()} providers suffer from ${ind.shortBottleneckEn}, otherwise capable teams remain invisible in both Google Search and domestic AI answer engines.`,
            `Rather than publishing vague slogans or burying service schedules inside non-indexable promotional images, winning ${ind.en.toLowerCase()} websites expose concrete capabilities, boundary conditions, and verifiable credentials right inside clean HTML text.`,
          ],
        },
        {
          id: 'search-vs-ai',
          heading: headline.headingsEn[1],
          paragraphs: [
            narrative.aiVsSearchEn,
            `When retrieval pipelines ground recommendations for ${ind.en}, they cross-check entity consistency across external verification signals (${ind.trustSourcesEn}) against structured pricing and scope details (${ind.priceMenuHintEn}). Pages missing explicit scope tables risk being skipped due to ambiguity.`,
            `Below are the three core verification benchmarks required for ${ind.en} organizations:`,
          ],
          metrics: narrative.customMetrics.map((m) => ({
            label: m.labelEn,
            value: m.valueEn,
            context: m.contextEn,
          })),
        },
        {
          id: 'copy-comparison',
          heading: headline.headingsEn[2],
          paragraphs: [
            narrative.badCopyEn,
            narrative.goodCopyEn,
            `Practitioner guidance for ${ind.en}: ${narrative.practitionerNoteEn} Notice how replacing generic adjectives with verifiable parameters makes the passage directly quotable by both search snippets and LLM synthesis blocks.`,
          ],
        },
        {
          id: 'action-and-schema',
          heading: headline.headingsEn[3],
          paragraphs: [
            `1. Immediate Text Upgrade: ${narrative.actionStepsEn[0]}`,
            `2. Objection-Handling FAQ: ${narrative.actionStepsEn[1]}`,
            `3. Multi-Platform NAP Parity: ${narrative.actionStepsEn[2]}`,
            `Regulatory & Ranking Guardrails for ${ind.en}: ${ind.complianceRiskEn}. Publishing clean ${ind.schemaType} Schema.org JSON-LD (starter snippet below) alongside server-rendered HTML specification tables keeps both traditional crawlers and generative retrieval agents aligned on exact brand facts.`,
          ],
          codeSnippet: {
            label: `${ind.en} · ${ind.schemaType} Starter JSON-LD`,
            code: schemaSnippetEn,
          },
        },
      ],
      pullQuote: narrative.practitionerNoteEn,
      faqs: [
        {
          question: `What do search engines and LLMs verify first for ${ind.en} prompts like "${ind.samplePromptEn}"?`,
          answer: `Retrieval systems cross-check ${ind.trustSourcesEn} alongside readable HTML specifications and transparent fee disclosures (${ind.priceMenuHintEn}) before citing a ${ind.en.toLowerCase()} provider.`,
        },
        {
          question: `Can a smaller ${ind.en.toLowerCase()} operator gain visibility without hiring dedicated SEO engineers?`,
          answer: `Yes. Start with the concrete copy rule: ${narrative.actionStepsEn[0]} Aligning public business profiles with one plain-language HTML overview delivers durable gains without complex tooling.`,
        },
        {
          question: `Which compliance traps must ${ind.en} providers avoid in marketing copy?`,
          answer: `${ind.complianceRiskEn}. Auditing draft pages for prohibited superlatives before publication protects both search trust and platform eligibility.`,
        },
      ],
      citations: [c1, c2, c3],
    };
  }

  // 151..160: Dedicated China LLM Platform Deep Dives (100% deduplicated per platform)
  if (id > CHINA_INDUSTRY_PILLAR_COUNT && id <= CHINA_INDUSTRY_PILLAR_COUNT + CHINA_PLATFORM_PILLAR_COUNT) {
    const platIdx = id - CHINA_INDUSTRY_PILLAR_COUNT - 1;
    const plat = CHINA_LLM_PLATFORMS[platIdx];
    const platHeadline = CHINA_PLATFORM_HEADLINES[plat.key];
    if (!platHeadline) {
      throw new Error(`Missing bespoke platform headline for ${plat.key}`);
    }
    const c1: ArticleCitation = PRIMARY_CITATIONS[2];
    const c2: ArticleCitation = PRIMARY_CITATIONS[4];
    const c3: ArticleCitation = PRIMARY_CITATIONS[0];
    const sampleSectorHintZh =
      platIdx % 2 === 0
        ? '无论是精密加工厂的公差交期表，还是中医馆大夫出诊排班表'
        : '无论是本地装修报价清单、律师咨询收费口径，还是零售门店现货规格';
    const sampleSectorHintEn =
      platIdx % 2 === 0
        ? 'whether publishing precision CNC tolerances or licensed clinic physician schedules'
        : 'whether presenting transparent renovation budgets, legal fee tiers, or store inventory tables';

    if (locale === 'zh') {
      return {
        ...summary,
        keyTakeaways: [
          `它在哪里找答案：${plat.zh} 主要依托「${plat.groundingChannelZh}」现查真凭实据。`,
          `它最喜欢哪种写法：系统筛选候选商家时，显著${plat.ecosystemNoteZh}。`,
          `普通商家怎么做：围绕「${plat.shortZh}」检索特点，把价格、地址、营业时段与资质写成能复制的网页文字和表格。`,
        ],
        sections: [
          {
            id: 'grounding-architecture',
            heading: platHeadline.headingsZh[0],
            paragraphs: [
              `很多实体老板以为大模型回答问题全靠“以前背过的死书”。其实不然：当你打开 ${plat.zh} 问“附近哪家店实在”或“某某设备哪家厂好”时，它会立刻启动联网查找——通过「${plat.groundingChannelZh}」在几秒钟内翻遍好几个网页和口碑账号，最后才总结出一个推荐名单。`,
              `在这个翻资料的过程里，${plat.shortZh} 特别偏爱「${plat.ecosystemNoteZh}」的商家。反过来想，如果你家的介绍全做成花里胡哨的图片海报，或者光留个微信号写“加我私聊报价”，${plat.shortZh} 就像戴了眼罩一样什么都读不出来，只能把顾客推给别人。`,
            ],
          },
          {
            id: 'adaptation-checklist',
            heading: platHeadline.headingsZh[1],
            paragraphs: [
              `针对 ${plat.zh} 的「${plat.groundingChannelZh}」检索路径，不需要堆砌关键词或狂发重复水文，只要踏踏实实按以下 4 项结构化核对表把网页和认证号资料铺顺即可：`,
            ],
            metrics: [
              { label: `${plat.shortZh} 文字直读门槛`, value: '少发纯图海报，多用网页文字', context: '确保店名、项目单价、质保承诺和营业时间能被机器一字不差读到' },
              { label: `${plat.shortZh} 核心抓源通道`, value: plat.groundingChannelZh, context: '高德/百度地图、微信认证号与官网上的地址电话保持完全一致' },
              { label: '第一段直接给硬结论', value: '不绕弯子讲干货', context: '开头直接讲清我是谁、服务谁、大概多少钱、哪类情况不合适' },
              { label: '守住底线不说大话', value: '零虚假绝对化宣传', context: '医疗、金融、教育类千万别写“包治、稳赚、保过”，免被系统过滤' },
            ],
            codeSnippet: {
              label: `${plat.shortZh} 商家上线前 4 步自检卡`,
              code: `# ${plat.zh} 实操落地核对表
主要抓源途径: ${plat.groundingChannelZh}
核心内容偏好: ${plat.ecosystemNoteZh}
动作一: 把原本发在朋友圈的价格表转成网页可读表格或文字清单
动作二: 核对地图门店名、电话、凌晨/周末营业时间与资质备案号`,
            },
          },
          {
            id: 'cross-industry-guidance',
            heading: platHeadline.headingsZh[2],
            paragraphs: [
              `把「${plat.shortZh}」的推荐机制落到具体生意上，${sampleSectorHintZh}，本质都是把原来藏在老板脑子或海报图里的真凭实据写成可复制网页文本。您可以去资料库检索对应所属的 150 个实战细分行业（覆盖国民经济全部 20 大门类），对照好坏文案模板改完再打开「GEO 工具」复查合规。`,
            ],
          },
        ],
        pullQuote: `看懂 ${plat.shortZh} 平时从哪几个渠道替用户“验明正身”，把老实实在的话放到那些渠道能抓到的地方，比花冤枉钱刷榜管用得多。`,
        faqs: [
          { question: `我们这种小门脸没有做独立官网，还有机会被 ${plat.shortZh} 推荐吗？`, answer: `完全有机会！只要把「${plat.groundingChannelZh}」对应的公开资料（比如认证微信公众号长文、高德/百度地图商户信息、大众点评真实图文与老板实拍讲解）写实写全，一样能进推荐名单。` },
          { question: `专门针对 ${plat.shortZh} 改写结构化内容，会不会影响百度和谷歌原有的自然排名？`, answer: `不仅不冲突，而且在面向「${plat.zh}」优化的同时还会拉升 Google 与百度的收录表现——三大检索体系都把文字清晰、首段直给结论与真实凭据作为核心偏好。` },
          { question: `优化 ${plat.shortZh} 的收录表现后，通常用什么笨办法复测真实效果？`, answer: `每周用未登录自己账号的干净对话窗口打开 ${plat.shortZh}，模拟真实顾客发起 2–3 轮带约束条件的选型提问，记录它引用了哪张价格表、是否报对门店细节即可。` },
        ],
        citations: [c1, c2, c3],
      };
    }

    return {
      ...summary,
      keyTakeaways: [
        `Retrieval channel: ${plat.en} retrieves supporting facts primarily through ${plat.groundingChannelEn}.`,
        `Preferred structure: Ranking and citation models favor content that ${plat.ecosystemNoteEn}.`,
        `Actionable step: ${sampleSectorHintEn}, replace image-only brochures with clean HTML tables and verified directory parity.`,
      ],
      sections: [
        {
          id: 'grounding-architecture',
          heading: platHeadline.headingsEn[0],
          paragraphs: [
            `Rather than relying solely on frozen pretraining weights, ${plat.en} actively triggers live retrieval across ${plat.groundingChannelEn} whenever a user asks local-service, vendor-selection, or technical procurement questions. During synthesis, the system ${plat.ecosystemNoteEn}.`,
            `Consequently, businesses that trap prices, credentials, or product catalogs inside promotional flyers or closed chat prompts remain unreadable to ${plat.shortEn} crawlers, even when their offline reputation is strong.`,
          ],
        },
        {
          id: 'adaptation-checklist',
          heading: platHeadline.headingsEn[1],
          paragraphs: [
            `To align cleanly with ${plat.en} (${plat.groundingChannelEn}), ${sampleSectorHintEn} requires four clear structural practices across your open web pages and verified profiles:`,
          ],
          metrics: [
            { label: `${plat.shortEn} Readability`, value: 'HTML Over Poster Images', context: 'Make prices, hours, and service specs directly selectable text' },
            { label: `${plat.shortEn} Primary Channel`, value: plat.groundingChannelEn, context: `Keep entity details identical across ${plat.shortEn}'s trusted sources` },
            { label: 'Answer-First Openings', value: 'Direct Upfront Scope', context: 'Explain who you serve, exact fees, and honest constraints immediately' },
            { label: 'Guardrail Compliance', value: 'Zero Hype Claims', context: 'Avoid absolute superlatives that trigger healthcare/finance safety filters' },
          ],
          codeSnippet: {
            label: `${plat.shortEn} Readiness Checklist`,
            code: `# ${plat.en} Grounding Checklist
Primary Retrieval: ${plat.groundingChannelEn}
Ranking Preference: ${plat.ecosystemNoteEn}
Step 1: Convert pricing posters into native HTML <table> elements
Step 2: Synchronize verified business licenses & directory hours`,
          },
        },
        {
          id: 'cross-industry-guidance',
          heading: `Translating ${plat.shortEn} Retrieval Signals into Sector Playbooks`,
          paragraphs: [
            `Applying ${plat.shortEn} mechanics to real commercial operations differs significantly by industry: ${sampleSectorHintEn}, the decisive ranking edge comes from surfacing verifiable customer-decision facts directly inside indexable web pages and official ${plat.groundingChannelEn} profiles.`,
            `Rather than writing broad generic marketing prose, match your ${plat.shortEn} page architecture to one of our 150 Chinese sector playbooks across all 20 national economy categories, audit high-risk claims via the GEO Toolkit, and verify monthly citations in clean retrieval sessions.`,
          ],
        },
      ],
      pullQuote: `Understanding where ${plat.shortEn} verifies facts matters far more than publishing high-volume boilerplate.`,
      faqs: [
        { question: `Can businesses without a custom website earn visibility on ${plat.shortEn}?`, answer: `Yes—prioritize verified listings and structured posts across ${plat.groundingChannelEn} with consistent entity details.` },
        { question: `Does optimizing for ${plat.shortEn} conflict with Google Search SEO?`, answer: `No. Clean HTML, verifiable evidence, and structured schema tailored to ${plat.shortEn} simultaneously strengthen organic Google Search rankings.` },
        { question: `How should ${plat.shortEn} citation progress be audited?`, answer: `Run clean-session buyer prompts monthly inside ${plat.shortEn} and track specification accuracy and brand demand lift.` },
      ],
      citations: [c1, c2, c3],
    };
  }

  // 161..175: Foundational Engineering Guides
  const f = FOUNDATION_GUIDES.find((g) => g.id === id) ?? FOUNDATION_GUIDES[0];
  const c1: ArticleCitation = PRIMARY_CITATIONS[f.citationIndices[0] % PRIMARY_CITATIONS.length];
  const c2: ArticleCitation = PRIMARY_CITATIONS[f.citationIndices[1] % PRIMARY_CITATIONS.length];
  const c3: ArticleCitation = PRIMARY_CITATIONS[f.citationIndices[2] % PRIMARY_CITATIONS.length];

  if (locale === 'zh') {
    return {
      ...summary,
      keyTakeaways: f.checklist.slice(0, 3).map((item) => `${item.labelZh}（${item.valueZh}）：${item.contextZh}`),
      sections: [
        ...f.sectionsZh.map((sec, idx) =>
          idx === 0
            ? {
                ...sec,
                codeSnippet: { label: `工程配置参考 · ${f.protocol}`, code: f.codeZh },
              }
            : sec,
        ),
        {
          id: 'specification-checklist',
          heading: '标准规范对照表（依据官方公开技术文档）',
          paragraphs: [
            `下表归纳了实施「${f.protocol}」时应直接对齐的公开工程基准，供研发与编辑团队在上线前逐项核验：`,
          ],
          metrics: f.checklist.map((item) => ({
            label: item.labelZh,
            value: item.valueZh,
            context: item.contextZh,
          })),
        },
      ],
      pullQuote: f.pullQuoteZh,
      faqs: f.faqsZh,
      citations: [c1, c2, c3],
    };
  }

  return {
    ...summary,
    keyTakeaways: f.checklist.slice(0, 3).map((item) => `${item.labelEn} (${item.valueEn}): ${item.contextEn}`),
    sections: [
      ...f.sectionsEn.map((sec, idx) =>
        idx === 0
          ? {
              ...sec,
              codeSnippet: { label: `Reference Spec · ${f.protocol}`, code: f.codeEn },
            }
          : sec,
      ),
      {
        id: 'specification-checklist',
        heading: `${f.protocol} Engineering Verification Checklist`,
        paragraphs: [
          `Reference standards and verifiable production thresholds for deploying ${f.protocol} (${f.subtitleEn}):`,
          `When shipping ${f.titleEn} across bilingual editorial or commercial architectures, validate the checklist metrics below against live HTTP headers, structured data testing tools, and primary documentation from ${c1.publisher} (${c1.title}) and ${c2.publisher} before requesting re-indexing.`,
        ],
        metrics: f.checklist.map((item) => ({
          label: item.labelEn,
          value: item.valueEn,
          context: item.contextEn,
        })),
      },
      {
        id: 'editorial-rollout',
        heading: `Cross-Team Rollout & Compliance Monitoring for ${f.protocol}`,
        paragraphs: [
          `Durable adherence to ${f.protocol} requires joint governance between backend routing engineers and domain editors. Engineering owners guarantee deterministic HTTP status codes, clean canonical alignment, and full initial-byte HTML visibility around "${f.checklist[0]?.labelEn ?? f.protocol}".`,
          `Meanwhile, editorial reviewers confirm that visible page assertions—including "${f.checklist[1]?.labelEn ?? 'structured metadata'}" and "${f.checklist[2]?.labelEn ?? 'compliance citations'}"—remain 100% synchronized with JSON-LD payloads and bilingual sitemap endpoints so Google Search and AI retrieval engines never encounter contradictory facts.`,
        ],
      },
    ],
    pullQuote: f.pullQuoteEn,
    faqs: f.faqsEn,
    citations: [c1, c2, c3],
  };
}

export function getArticleById(id: number, locale: Locale): Article | undefined {
  if (id < 1 || id > TOTAL_ARTICLE_COUNT) return undefined;
  const summary = getArticleSummaryById(id, locale);
  return buildFullArticleFromSummary(summary, locale);
}

export function getArticleBySlug(slug: string, locale: Locale): Article | undefined {
  const id = parseArticleIdFromSlug(slug);
  if (id === null) return undefined;
  return getArticleById(id, locale);
}

let cachedCatalogSummariesZh: ArticleSummary[] | null = null;
let cachedCatalogSummariesEn: ArticleSummary[] | null = null;

function getAllSummaries(locale: Locale): ArticleSummary[] {
  if (locale === 'zh' && cachedCatalogSummariesZh) return cachedCatalogSummariesZh;
  if (locale === 'en' && cachedCatalogSummariesEn) return cachedCatalogSummariesEn;
  const list: ArticleSummary[] = [];
  for (let id = 1; id <= TOTAL_ARTICLE_COUNT; id++) {
    list.push(getArticleSummaryById(id, locale));
  }
  if (locale === 'zh') cachedCatalogSummariesZh = list;
  else cachedCatalogSummariesEn = list;
  return list;
}

export type ArticleSortOrder = 'id-asc' | 'updated-desc' | 'readtime-asc';

export interface QueryArticlesOptions {
  locale: Locale;
  section?: 'all' | SectionSlug;
  industry?: string;
  industryGroup?: string;
  platform?: string;
  authorId?: string;
  query?: string;
  sort?: ArticleSortOrder;
  page?: number;
  pageSize?: number;
}

export interface QueryArticlesResult {
  items: ArticleSummary[];
  totalMatched: number;
  totalCorpus: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export function queryArticles({
  locale,
  section = 'all',
  industry,
  industryGroup,
  platform,
  authorId,
  query = '',
  sort = 'id-asc',
  page = 1,
  pageSize = 10,
}: QueryArticlesOptions): QueryArticlesResult {
  const zhAll = getAllSummaries('zh');
  const enAll = getAllSummaries('en');
  const activeList = locale === 'zh' ? zhAll : enAll;
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const groupKeys = industryGroup
    ? new Set(
        CHINA_INDUSTRIES.filter(
          (ind) => ind.groupZh === industryGroup || ind.groupEn === industryGroup,
        ).map((ind) => ind.key),
      )
    : null;

  const matched: ArticleSummary[] = [];
  for (let i = 0; i < activeList.length; i++) {
    const item = activeList[i];
    const zhItem = zhAll[i];
    const enItem = enAll[i];
    if (section !== 'all' && item.section !== section) continue;
    if (industry && item.industryKey !== industry) continue;
    if (groupKeys && (!item.industryKey || !groupKeys.has(item.industryKey))) continue;
    if (platform && item.platformKey !== platform) continue;
    if (authorId && item.authorId !== authorId) continue;

    if (terms.length > 0) {
      const zhAuthor = AUTHORS_ZH[item.authorId];
      const enAuthor = AUTHORS_BY_ID[item.authorId];
      const haystack =
        `${String(item.id).padStart(5, '0')} ${zhItem.title} ${zhItem.subtitle} ${zhItem.directAnswer} ${zhItem.keywords.join(' ')} ${zhAuthor ? `${zhAuthor.name} ${zhAuthor.credentials} ${zhAuthor.location}` : ''} ${enItem.title} ${enItem.directAnswer} ${enItem.keywords.join(' ')} ${enAuthor ? `${enAuthor.name} ${enAuthor.credentials} ${enAuthor.location}` : ''} ${item.industryKey || ''} ${item.platformKey || ''}`.toLowerCase();
      let allMatch = true;
      for (let t = 0; t < terms.length; t++) {
        if (!haystack.includes(terms[t])) {
          allMatch = false;
          break;
        }
      }
      if (!allMatch) continue;
    }

    matched.push(item);
  }

  if (sort === 'updated-desc') {
    matched.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt) || a.id - b.id);
  } else if (sort === 'readtime-asc') {
    matched.sort((a, b) => a.readTimeMinutes - b.readTimeMinutes || a.id - b.id);
  }

  const totalMatched = matched.length;
  const totalPages = Math.max(1, Math.ceil(totalMatched / pageSize));
  const safePage = Math.max(1, Math.min(page, totalPages));
  const startIdx = (safePage - 1) * pageSize;
  const items = matched.slice(startIdx, startIdx + pageSize);

  return {
    items,
    totalMatched,
    totalCorpus: TOTAL_ARTICLE_COUNT,
    page: safePage,
    pageSize,
    totalPages,
  };
}

export function getFeaturedArticles(locale: Locale, count = 4): ArticleSummary[] {
  // Highlight top China industry pillars (中医、足浴、餐饮), DeepSeek/Answer-First, manufacturing/tech, and Google SSR/SEO pillars
  const highlightIds = [1, 2, 3, 164, 151, 152, 161, 170, 54, 101, 103, 111];
  return highlightIds
    .slice(0, Math.min(count, highlightIds.length))
    .map((id) => getArticleSummaryById(id, locale));
}

export function getAdjacentArticles(
  id: number,
  locale: Locale,
): { prev: ArticleSummary | null; next: ArticleSummary | null } {
  return {
    prev: id > 1 ? getArticleSummaryById(id - 1, locale) : null,
    next: id < TOTAL_ARTICLE_COUNT ? getArticleSummaryById(id + 1, locale) : null,
  };
}

export function getRelatedArticles(
  article: Pick<ArticleSummary, 'id' | 'section'>,
  locale: Locale,
  limit = 3,
): ArticleSummary[] {
  const all = getAllSummaries(locale);
  const sameSection = all.filter((item) => item.section === article.section && item.id !== article.id);
  const picked: ArticleSummary[] = [];
  if (sameSection.length > 0) {
    const startOffset = article.id % sameSection.length;
    for (let i = 0; i < Math.min(limit, sameSection.length); i++) {
      picked.push(sameSection[(startOffset + i) % sameSection.length]);
    }
  }
  for (const item of all) {
    if (picked.length >= limit) break;
    if (item.id !== article.id && !picked.some((p) => p.id === item.id)) {
      picked.push(item);
    }
  }
  return picked.slice(0, limit);
}

export function getAuthorArticleCount(authorId: string): number {
  const all = getAllSummaries('zh');
  return all.filter((a) => a.authorId === authorId).length;
}

export interface CorpusStats {
  articleCount: number;
  industryPillarCount: number;
  platformPillarCount: number;
  foundationPillarCount: number;
  industryCount: number;
  llmPlatformCount: number;
  bilingualUrlCount: number;
  sectionCount: number;
  authorCount: number;
  totalWordCount: number;
  totalFaqPairs: number;
  totalPrimaryCitations: number;
  sitemapShardCount: number;
}

let cachedStats: CorpusStats | null = null;

export function getCorpusStats(): CorpusStats {
  if (cachedStats) return cachedStats;
  const all = getAllSummaries('zh');
  const totalWordCount = all.reduce((acc, a) => acc + a.wordCount, 0);
  const corePageCount = 5; // /, /archive, /authors, /standards, /tools
  const bilingualUrlCount = (TOTAL_ARTICLE_COUNT + corePageCount + SECTIONS.length) * 2;
  cachedStats = {
    articleCount: TOTAL_ARTICLE_COUNT,
    industryPillarCount: CHINA_INDUSTRY_PILLAR_COUNT,
    platformPillarCount: CHINA_PLATFORM_PILLAR_COUNT,
    foundationPillarCount: FOUNDATION_GUIDES.length,
    industryCount: CHINA_INDUSTRIES.length,
    llmPlatformCount: CHINA_LLM_PLATFORMS.length,
    bilingualUrlCount,
    sectionCount: SECTIONS.length,
    authorCount: AUTHORS.length,
    totalWordCount,
    totalFaqPairs: TOTAL_ARTICLE_COUNT * 3,
    totalPrimaryCitations: TOTAL_ARTICLE_COUNT * 3,
    sitemapShardCount: 2, // sitemap-core.xml + sitemap-articles-1.xml
  };
  return cachedStats;
}
