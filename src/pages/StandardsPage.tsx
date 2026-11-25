import { useMemo, type MouseEvent } from 'react';
import { CheckCircle2, ExternalLink } from 'lucide-react';
import type { Locale } from '../types/editorial.ts';
import { UI_COPY } from '../data/i18n.ts';
import {
  getCorpusStats,
  withLocalePrefix,
} from '../data/articlesLocalized.ts';
import { LanguageSwitch } from '../components/LanguageSwitch.tsx';
import { useDocumentSeo } from '../hooks/useDocumentSeo.ts';
import { buildStandardsJsonLd } from '../utils/seoSchema.ts';

interface StandardsPageProps {
  locale: Locale;
  onNavigate: (path: string) => void;
}

const PRINCIPLES_LIST: Record<
  Locale,
  Array<{ category: string; title: string; detail: string }>
> = {
  zh: [
    {
      category: '一行业一深度专题',
      title: '严控数量膨胀，拒绝批量套话分身页',
      detail:
        '全站严格固化为 175 篇高纯度核心指南（150 个行业 + 10 大国产大模型 + 15 篇技术工程规范），每个行业或大模型仅保留唯一权威入口页，将不同城市或参数场景收拢于同一专题下，彻底杜绝内容同类相残。',
    },
    {
      category: '零虚构数据准则',
      title: '不编造样本规模与伪造百分比实验',
      detail:
        '禁止虚构如“n=1000 测试提升 41.5%”等不可核验的数字，所有工程基准均直接对齐 Google 官方核心网页指标、W3C Schema.org 与 RFC 公开规范。',
    },
    {
      category: '中国大模型生态与合规',
      title: '贴合国产检索链路并严格排查广告法红线',
      detail:
        '针对覆盖全部 20 个国民经济门类的 150 个中国细分行业（从农林采矿、硬科技制造到中医康养与社会服务），明确标注广告法极限词禁区与高可信外部信源对齐规范，同时提供免费合规检测工具。',
    },
    {
      category: '服务端首包直出',
      title: '完整语义 HTML 与真实状态码返回',
      detail:
        '每一篇指南与工具页均通过服务端 HTTP 200 首包直接输出完整结构化正文、标题与目录导航，无效路径严格返回 404 与 noindex，彻底杜绝 Soft-404。',
    },
    {
      category: '双语平行出版',
      title: '中英文独立规范路径与 Hreflang 互指',
      detail:
        '默认中文版与英文版（/en/*）均配置严格自指 Canonical 与对称 Hreflang 标签，保证多语言搜索收录精准不混淆。',
    },
    {
      category: '纯净无干扰阅读',
      title: '专注文字排版与可直接落地的实操代码',
      detail:
        '页面无诱导弹窗、无悬浮广告遮挡，注重字号行距与对比度，配套可一键复制的 Schema.org JSON-LD 与透明价目 HTML 模板。',
    },
  ],
  en: [
    {
      category: 'One Topic, One Pillar',
      title: 'Zero Permutation Bloat or Keyword Cannibalization',
      detail:
        'The repository is intentionally curated to 175 comprehensive guides (150 verticals, 10 domestic LLM ecosystems, and 15 technical engineering specs)—one authoritative playbook per topic, eliminating thin template variations.',
    },
    {
      category: 'Zero Synthetic Stats',
      title: 'Primary Technical Specifications Over Fabricated Numbers',
      detail:
        'We do not invent unverifiable lab sample sizes or lift percentages. Every engineering target cites official Google Search Central, Core Web Vitals, W3C, or IETF specs.',
    },
    {
      category: 'China Ecosystem & Safety',
      title: 'Domestic Grounding Alignment & Advertising Guardrails',
      detail:
        'Each of the 150 industry playbooks spanning all 20 national economy sectors highlights authoritative credential registries and advertising boundaries alongside a live compliance scanner.',
    },
    {
      category: 'First-Byte Semantic SSR',
      title: 'Complete Server HTML & Honest HTTP Status Codes',
      detail:
        'Pages emit full semantic markup directly inside the HTTP 200 response while missing routes strictly return HTTP 404 with noindex, nofollow.',
    },
    {
      category: 'Bilingual Parity',
      title: 'Canonical & Bidirectional Hreflang Alignment',
      detail:
        'Parallel Chinese and English editions maintain matched terminology, JSON-LD graphs, and clean XML sitemap coverage.',
    },
    {
      category: 'Practical Utility',
      title: 'Ad-Free Typography & Exportable Implementation Tools',
      detail:
        'Clean typography without intrusive popups, paired directly with copy-ready Schema.org JSON-LD, HTML price tables, and /llms.txt generators.',
    },
  ],
};

export function StandardsPage({ locale, onNavigate }: StandardsPageProps) {
  const copy = UI_COPY[locale];
  const stats = useMemo(() => getCorpusStats(), []);

  const pageJsonLd = useMemo(
    () =>
      buildStandardsJsonLd(
        typeof window !== 'undefined' ? window.location.origin : '',
        locale,
      ),
    [locale],
  );

  useDocumentSeo({
    title:
      locale === 'zh'
        ? '研究方法与编辑准则 – SEO 与 GEO 研究院'
        : 'Research Methodology & Editorial Standards – SEO & GEO Research Institute',
    description: copy.standardsPageDesc,
    basePath: '/standards',
    locale,
    imagePath: '/src/assets/images/section_ai_systems_1795444152985.jpg',
    jsonLd: pageJsonLd,
  });

  const handleLink = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onNavigate(path);
  };

  const homeHref = withLocalePrefix('/', locale);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#57534E]">
          <a
            href={homeHref}
            onClick={(e) => handleLink(e, homeHref)}
            className="hover:text-[#1C1917] hover:underline"
          >
            {copy.navFrontPage}
          </a>
          <span aria-hidden="true">/</span>
          <span className="font-medium text-[#1C1917]">{copy.navStandards}</span>
        </nav>

        <LanguageSwitch locale={locale} basePath="/standards" onNavigate={onNavigate} />
      </div>

      <header className="border-b border-[#D6D0C4] pb-8">
        <p className="text-xs font-semibold tracking-wider text-[#9A3412] uppercase">
          {copy.standardsPageEyebrow}
        </p>
        <h1 className="editorial-balance mt-2 font-serif text-3xl font-semibold tracking-tight text-[#1C1917] sm:text-4xl">
          {copy.standardsPageTitle}
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#44403C]">
          {copy.standardsPageDesc}
        </p>
      </header>

      {/* Institute Overview Stats */}
      <section aria-label="Institute Overview" className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-md border border-[#D6D0C4] bg-[#F5F1E9] p-5">
          <p className="text-xs text-[#57534E]">{copy.statEssays}</p>
          <p className="mt-1 font-mono text-2xl font-medium tabular-nums text-[#1C1917]">
            {stats.articleCount.toLocaleString()}
          </p>
        </div>
        <div className="rounded-md border border-[#D6D0C4] bg-[#F5F1E9] p-5">
          <p className="text-xs text-[#57534E]">
            {locale === 'zh' ? '覆盖中国细分行业' : 'Covered China Verticals'}
          </p>
          <p className="mt-1 font-mono text-2xl font-medium tabular-nums text-[#1C1917]">
            {stats.industryCount}
          </p>
        </div>
        <div className="rounded-md border border-[#D6D0C4] bg-[#F5F1E9] p-5">
          <p className="text-xs text-[#57534E]">
            {locale === 'zh' ? '拆解国产大模型生态' : 'China LLM Ecosystems'}
          </p>
          <p className="mt-1 font-mono text-2xl font-medium tabular-nums text-[#1C1917]">
            {stats.llmPlatformCount}
          </p>
        </div>
        <div className="rounded-md border border-[#D6D0C4] bg-[#F5F1E9] p-5">
          <p className="text-xs text-[#57534E]">{copy.statAuthors}</p>
          <p className="mt-1 font-mono text-2xl font-medium tabular-nums text-[#1C1917]">
            {stats.authorCount}
          </p>
        </div>
      </section>

      {/* Editorial & Methodology Principles */}
      <section id="editorial-policy" aria-label={copy.sixPillarsTitle} className="mt-12">
        <h2 className="font-serif text-2xl font-semibold text-[#1C1917]">
          {copy.sixPillarsTitle}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES_LIST[locale].map((item) => (
            <div
              key={item.title}
              className="rounded-md border border-[#D6D0C4] bg-[#FBF9F5] p-5"
            >
              <div className="flex items-center gap-2 text-xs font-medium text-[#1E3A8A]">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                <span>{item.category}</span>
              </div>
              <h3 className="mt-2 font-serif text-lg font-semibold text-[#1C1917]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#44403C]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Access & RSS Feeds */}
      <section aria-label={copy.editorialWorkflowTitle} className="mt-14 border-t border-[#D6D0C4] pt-10">
        <div className="rounded-md border border-[#D6D0C4] bg-[#F5F1E9] p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-semibold text-[#1C1917]">
            {copy.editorialWorkflowTitle}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#44403C]">
            {copy.editorialWorkflowDesc}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/feed.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-md border border-[#D6D0C4] bg-[#FBF9F5] px-4 py-2 text-xs font-medium text-[#1C1917] hover:border-[#1C1917]"
            >
              <span>{copy.rssZhLabel}</span>
              <ExternalLink className="h-3 w-3 text-[#57534E]" />
            </a>
            <a
              href="/en/feed.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-md border border-[#D6D0C4] bg-[#FBF9F5] px-4 py-2 text-xs font-medium text-[#1C1917] hover:border-[#1C1917]"
            >
              <span>{copy.rssEnLabel}</span>
              <ExternalLink className="h-3 w-3 text-[#57534E]" />
            </a>
            <a
              href={withLocalePrefix('/archive', locale)}
              onClick={(e) => handleLink(e, withLocalePrefix('/archive', locale))}
              className="inline-flex min-h-[40px] items-center rounded-md bg-[#1C1917] px-5 py-2 text-xs font-medium text-[#FBF9F5] hover:bg-[#1E3A8A]"
            >
              {copy.browseArchive}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
