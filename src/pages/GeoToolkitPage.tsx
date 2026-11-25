import { useEffect, useMemo, useState, type MouseEvent } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  Download,
  RotateCcw,
  ShieldCheck,
} from 'lucide-react';
import type { Locale } from '../types/editorial.ts';
import { UI_COPY } from '../data/i18n.ts';
import {
  CHINA_INDUSTRIES,
  CHINA_INDUSTRY_GROUPS,
  buildSlugForId,
  withLocalePrefix,
} from '../data/articlesLocalized.ts';
import { LanguageSwitch } from '../components/LanguageSwitch.tsx';
import { useDocumentSeo } from '../hooks/useDocumentSeo.ts';
import { buildToolsJsonLd } from '../utils/seoSchema.ts';

interface GeoToolkitPageProps {
  locale: Locale;
  initialIndustry?: string;
  onNavigate: (path: string) => void;
}

type OutputTab = 'jsonld' | 'html' | 'markdown' | 'llms';

interface RestrictedTermRule {
  term: string;
  reasonZh: string;
  suggestionZh: string;
  reasonEn: string;
  suggestionEn: string;
}

const RESTRICTED_TERMS: RestrictedTermRule[] = [
  {
    term: '根治',
    reasonZh: '涉及医疗疗效绝对化断言，易触发广告法及大模型安全护栏拦截',
    suggestionZh: '建议改为“调理改善”“缓解常见不适”或仅陈述正规诊疗项目范围',
    reasonEn: 'Absolute cure claims trigger regulatory bans and LLM safety filters',
    suggestionEn: 'Use measured wording such as "symptom management" or "consult licensed practitioners"',
  },
  {
    term: '包治',
    reasonZh: '绝对化效果承诺属于禁止宣传表述',
    suggestionZh: '请替换为“按个体体质/实际情况分阶段评估方案”',
    reasonEn: 'Guaranteed treatment promises violate advertising compliance rules',
    suggestionEn: 'Replace with individualized assessment scope statements',
  },
  {
    term: '治愈率',
    reasonZh: '非公开临床文献出处严禁自拟治愈比例数据',
    suggestionZh: '删除具体百分比，改为说明适应症人群与禁忌说明',
    reasonEn: 'Unverified clinical cure percentages risk YMYL suppression',
    suggestionEn: 'Remove unverified percentages and list eligibility criteria instead',
  },
  {
    term: '百分百',
    reasonZh: '极端绝对化用语不符合客观事实描述标准',
    suggestionZh: '建议删去，用清晰的服务流程与售后/复诊规则替代',
    reasonEn: 'Absolute guarantee phrasing undermines factual trust',
    suggestionEn: 'Replace with transparent service scope and follow-up policies',
  },
  {
    term: '100%',
    reasonZh: '若用于功效或结果承诺（如“100%有效/满意”）存在合规风险',
    suggestionZh: '仅可用于“100%明码标价/无强制隐形推销”等客观承诺，否则请删改',
    reasonEn: 'Acceptable only for factual fee transparency, risky for outcome promises',
    suggestionEn: 'Restrict 100% claims to verifiable pricing transparency only',
  },
  {
    term: '第一',
    reasonZh: '“行业第一/全城第一”缺乏权威依据时属广告法极限词',
    suggestionZh: '建议改为具体成立年份、服务案例数或主营专长描述',
    reasonEn: 'Unsubstantiated "#1" claims violate comparative advertising standards',
    suggestionEn: 'State founding year, verifiable credentials, or concrete specialties',
  },
  {
    term: '唯一',
    reasonZh: '排他性极限词易引起误导争议与投诉风险',
    suggestionZh: '改为主打工艺、设备型号或特定技术路线描述',
    reasonEn: 'Exclusive superlatives trigger compliance scrutiny',
    suggestionEn: 'Describe specific processes, equipment models, or qualifications',
  },
  {
    term: '绝对',
    reasonZh: '绝对化表述在大模型评测中通常被降权',
    suggestionZh: '采用明确的前提条件与边界说明替代“绝对”',
    reasonEn: 'Absolute claims reduce perceived editorial reliability',
    suggestionEn: 'State explicit prerequisites and boundary conditions instead',
  },
  {
    term: '最便宜',
    reasonZh: '低价极限宣传若与实际结算不符极易招致差评与风控',
    suggestionZh: '改为公开具体的起步价目与包含明细',
    reasonEn: 'Superlative price claims trigger disputes if fees vary',
    suggestionEn: 'Publish exact starting rates and included items in HTML tables',
  },
  {
    term: '全网最低',
    reasonZh: '属于典型违规价格绝对化用语',
    suggestionZh: '替换为“透明阶梯报价，无临时加价”等客观描述',
    reasonEn: 'Unverifiable lowest-price promises are non-compliant',
    suggestionEn: 'State "itemized fixed quote with zero hidden surcharges"',
  },
  {
    term: '包过',
    reasonZh: '教育/签证/考试培训等领域严禁“包过/保录”承诺',
    suggestionZh: '改为描述教学大纲、模拟训练频次及真实退费条款',
    reasonEn: 'Guaranteed pass outcomes are prohibited across education and licensing',
    suggestionEn: 'Detail curriculum structure, mock tests, and refund terms',
  },
  {
    term: '保本',
    reasonZh: '金融、财税与投资领域严禁承诺保本保收益',
    suggestionZh: '必须补充风险揭示及实际服务交付清单',
    reasonEn: 'Principal-guaranteed claims are prohibited in financial services',
    suggestionEn: 'Provide transparent fee disclosures and statutory risk notices',
  },
  {
    term: '稳赚',
    reasonZh: '属于明确禁止的金融与商业误导宣传词汇',
    suggestionZh: '删除收益承诺，改写合规服务范围与风控流程',
    reasonEn: 'Guaranteed-profit language triggers immediate safety filtering',
    suggestionEn: 'Describe advisory workflows and fee models objectively',
  },
  {
    term: '保赢',
    reasonZh: '法律服务领域严禁对案件裁判结果作出保证性承诺',
    suggestionZh: '改为陈述过往承办同类型案件程序节点与收费标准',
    reasonEn: 'Guaranteed litigation outcomes violate legal ethics rules',
    suggestionEn: 'Detail case workflow milestones, credentials, and fee schedules',
  },
  {
    term: '零风险',
    reasonZh: '医疗、装修、金融等任何行业均无法做到“零风险”',
    suggestionZh: '如实列出前置风险点及对应的标准保障条款',
    reasonEn: 'No commercial, medical, or legal service carries zero risk',
    suggestionEn: 'Disclose real prerequisites alongside written warranty terms',
  },
  {
    term: '永久有效',
    reasonZh: '除非有书面法律依据，否则期限绝对化宣传易引发消费纠纷',
    suggestionZh: '明确写明具体质保年限或有效期截止条件',
    reasonEn: 'Lifetime guarantees without clear legal scope cause disputes',
    suggestionEn: 'Specify exact warranty periods and service conditions',
  },
  {
    term: '神效',
    reasonZh: '主观夸大词严重损害内容专业度',
    suggestionZh: '改为平实的功能原理、适用对象与实际体验说明',
    reasonEn: 'Sensational miracle claims weaken trust in AI retrieval',
    suggestionEn: 'Use calm, factual descriptions of scope and expected duration',
  },
  {
    term: '独家秘方',
    reasonZh: '消费与医药服务领域建议慎用“秘方”宣传',
    suggestionZh: '改为陈述备案工艺、主要成分说明或公开检验标准',
    reasonEn: 'Unverified secret-formula phrasing lowers institutional credibility',
    suggestionEn: 'Cite verified standards, ingredients, or practitioner experience',
  },
];

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildDefaultFormForIndustry(industryKey: string, locale: Locale) {
  const idx = Math.max(
    0,
    CHINA_INDUSTRIES.findIndex((item) => item.key === industryKey),
  );
  const ind = CHINA_INDUSTRIES[idx];
  if (locale === 'zh') {
    return {
      entityName: `示例 · ${ind.zh}机构（请替换为真实营业执照主体名）`,
      cityDistrict: '上海市静安区（请替换为门店/公司所在省市区与地标）',
      websiteUrl: 'https://example.cn',
      licenseId: '统一社会信用代码 / 行业执业备案号（示例：91310106XXXXXXXXXX）',
      hours: '周一至周日 09:30 - 21:30',
      servicesText: `${ind.priceMenuHintZh}\n全程不隐瞒附加费用 | 支持预约前确认具体时长与适用范围`,
      specialties: `专注${ind.groupZh}领域真实服务交付，遵守${ind.trustSourcesZh}公开规范。不适用人群或需提前预约情形将在到店/签约前如实告知。`,
    };
  }
  return {
    entityName: `Example ${ind.en} Provider (Replace with Registered Legal Name)`,
    cityDistrict: 'Jing’an District, Shanghai (Replace with City & Service Area)',
    websiteUrl: 'https://example.com',
    licenseId: 'Unified Social Credit Code / Sector License ID',
    hours: 'Mon–Sun 09:30 - 21:30',
    servicesText: `${ind.priceMenuHintEn}\nTransparent itemized billing | Scope & prerequisites confirmed before booking`,
    specialties: `Dedicated ${ind.groupEn} specialist aligned with ${ind.trustSourcesEn}. Eligibility boundaries and warranties are disclosed plainly prior to service.`,
  };
}

export function GeoToolkitPage({
  locale,
  initialIndustry = '',
  onNavigate,
}: GeoToolkitPageProps) {
  const validInitialIndustry = CHINA_INDUSTRIES.some((i) => i.key === initialIndustry)
    ? initialIndustry
    : CHINA_INDUSTRIES[0].key;

  const [industryKey, setIndustryKey] = useState(validInitialIndustry);
  const [formState, setFormState] = useState(() =>
    buildDefaultFormForIndustry(validInitialIndustry, locale),
  );
  const [activeTab, setActiveTab] = useState<OutputTab>('jsonld');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [checklistState, setChecklistState] = useState<Record<string, boolean>>({
    ssrHtml: true,
    transparentPrices: true,
    licenseSync: false,
    noHiddenFees: true,
    safetyCompliance: true,
    mapSync: false,
  });

  useEffect(() => {
    if (initialIndustry && CHINA_INDUSTRIES.some((i) => i.key === initialIndustry)) {
      setIndustryKey(initialIndustry);
      setFormState(buildDefaultFormForIndustry(initialIndustry, locale));
    }
  }, [initialIndustry, locale]);

  const copy = UI_COPY[locale];
  const industryIdx = Math.max(
    0,
    CHINA_INDUSTRIES.findIndex((i) => i.key === industryKey),
  );
  const selectedIndustry = CHINA_INDUSTRIES[industryIdx];
  const pillarGuideId = industryIdx + 1;
  const pillarGuideSlug = buildSlugForId(pillarGuideId);
  const pillarGuideHref = withLocalePrefix(`/articles/${pillarGuideSlug}`, locale);

  const jsonLd = useMemo(
    () =>
      buildToolsJsonLd(
        typeof window !== 'undefined' ? window.location.origin : '',
        locale,
      ),
    [locale],
  );

  useDocumentSeo({
    title:
      locale === 'zh'
        ? '中国全行业 GEO 体检与 Schema 配置生成器 – SEO 与 GEO 研究院'
        : 'China Industry GEO Audit & Schema Generator – SEO & GEO Research Institute',
    description:
      locale === 'zh'
        ? '输入贵机构名称、城市与收费明细，实时排查广告法极限词并免费生成 Schema.org JSON-LD、透明价目 HTML 表格与 /llms.txt 清单。'
        : 'Real-time compliance scanner, 6-point GEO readiness checklist, Schema.org JSON-LD, and transparent HTML price table generator for 150 China verticals.',
    basePath: '/tools',
    locale,
    imagePath: '/src/assets/images/section_schema_semantics_1795444153030.jpg',
    jsonLd,
  });

  const handleIndustryChange = (nextKey: string) => {
    setIndustryKey(nextKey);
    setFormState(buildDefaultFormForIndustry(nextKey, locale));
  };

  const serviceRows = useMemo(() => {
    return formState.servicesText
      .split(/\n+/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const parts = line.split(/[|｜]/).map((s) => s.trim());
        return {
          item: parts[0] || line,
          priceOrDetail: parts[1] || (locale === 'zh' ? '详见服务说明' : 'See details'),
          note: parts[2] || (locale === 'zh' ? '公开透明报价' : 'Transparent quote'),
        };
      });
  }, [formState.servicesText, locale]);

  const detectedViolations = useMemo(() => {
    const combinedText = `${formState.entityName} ${formState.servicesText} ${formState.specialties}`;
    const lowerCombined = combinedText.toLowerCase();
    return RESTRICTED_TERMS.filter((rule) =>
      lowerCombined.includes(rule.term.toLowerCase()),
    );
  }, [formState.entityName, formState.servicesText, formState.specialties]);

  const checklistItems = useMemo(
    () =>
      locale === 'zh'
        ? [
            { id: 'ssrHtml', label: '核心介绍与价格以纯 HTML 文字与表格呈现（非图片海报）' },
            { id: 'transparentPrices', label: '列明起步价/套餐包含项、耗时与适用条件' },
            { id: 'licenseSync', label: '网站明确展示营业执照/行业备案号与真实办公地址' },
            { id: 'noHiddenFees', label: '明确说明是否有附加费、不适用人群与售后规则' },
            { id: 'safetyCompliance', label: '已完成广告法极限词自查，无绝对化承诺' },
            { id: 'mapSync', label: `高德/百度地图及「${selectedIndustry.trustSourcesZh}」名称一致` },
          ]
        : [
            { id: 'ssrHtml', label: 'Core overview and prices published in crawlable HTML tables (not image posters)' },
            { id: 'transparentPrices', label: 'Starting rates, inclusions, duration, and prerequisites disclosed plainly' },
            { id: 'licenseSync', label: 'Verified license/registration ID and street address displayed openly' },
            { id: 'noHiddenFees', label: 'Surcharges, contraindications, and warranty/refund policies stated clearly' },
            { id: 'safetyCompliance', label: 'Scanned against absolute advertising claims and superlatives' },
            { id: 'mapSync', label: `Name and hours synchronized with ${selectedIndustry.trustSourcesEn}` },
          ],
    [locale, selectedIndustry],
  );

  const completedChecks = useMemo(
    () =>
      checklistItems.filter((item) => {
        if (item.id === 'safetyCompliance' && detectedViolations.length > 0) return false;
        return checklistState[item.id];
      }).length,
    [checklistItems, checklistState, detectedViolations.length],
  );

  const generatedCode = useMemo(() => {
    const cleanUrl = formState.websiteUrl.trim() || 'https://example.cn';

    if (activeTab === 'jsonld') {
      const jsonObj = {
        '@context': 'https://schema.org',
        '@type': selectedIndustry.schemaType,
        name: formState.entityName,
        url: cleanUrl,
        inLanguage: locale === 'zh' ? 'zh-CN' : 'en-US',
        areaServed: formState.cityDistrict,
        openingHours: formState.hours,
        identifier: formState.licenseId,
        description: formState.specialties,
        knowsAbout: [
          locale === 'zh' ? selectedIndustry.zh : selectedIndustry.en,
          locale === 'zh' ? selectedIndustry.groupZh : selectedIndustry.groupEn,
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: locale === 'zh' ? '公开透明服务与价目清单' : 'Transparent Service Catalog',
          itemListElement: serviceRows.map((row, idx) => ({
            '@type': 'Offer',
            position: idx + 1,
            name: row.item,
            description: `${row.priceOrDetail} · ${row.note}`,
          })),
        },
      };
      return `<script type="application/ld+json">\n${JSON.stringify(jsonObj, null, 2)}\n</script>`;
    }

    if (activeTab === 'html') {
      const tableRows = serviceRows
        .map(
          (row) =>
            `      <tr>\n        <td>${escapeHtml(row.item)}</td>\n        <td>${escapeHtml(row.priceOrDetail)}</td>\n        <td>${escapeHtml(row.note)}</td>\n      </tr>`,
        )
        .join('\n');

      if (locale === 'zh') {
        return `<section aria-label="机构信息与公开价目表">
  <h2>${escapeHtml(formState.entityName)} — 服务说明与透明价目</h2>
  <p><strong>服务区域：</strong>${escapeHtml(formState.cityDistrict)} | <strong>营业时间：</strong>${escapeHtml(formState.hours)}</p>
  <p><strong>资质备案：</strong>${escapeHtml(formState.licenseId)}</p>
  <p>${escapeHtml(formState.specialties)}</p>

  <table>
    <thead>
      <tr>
        <th>服务项目</th>
        <th>公开费用与时长</th>
        <th>包含与前提说明</th>
      </tr>
    </thead>
    <tbody>
${tableRows}
    </tbody>
  </table>

  <h3>常见消费与合作问答</h3>
  <dl>
    <dt>是否公开收费标准，是否存在临时隐形加价？</dt>
    <dd>所有基础项目均按上表明确列示价格执行，如需额外升级或定制，会在服务/施工/签约前书面确认费用。</dd>
    <dt>适合哪些人群，哪些情况不建议盲目预约？</dt>
    <dd>${escapeHtml(formState.specialties)}</dd>
  </dl>
</section>`;
      }

      return `<section aria-label="Entity Overview & Transparent Pricing">
  <h2>${escapeHtml(formState.entityName)} — Service Scope &amp; Pricing</h2>
  <p><strong>Service Area:</strong> ${escapeHtml(formState.cityDistrict)} | <strong>Hours:</strong> ${escapeHtml(formState.hours)}</p>
  <p><strong>Registration / License:</strong> ${escapeHtml(formState.licenseId)}</p>
  <p>${escapeHtml(formState.specialties)}</p>

  <table>
    <thead>
      <tr>
        <th>Service / Specification</th>
        <th>Transparent Rate / Duration</th>
        <th>Notes &amp; Prerequisites</th>
      </tr>
    </thead>
    <tbody>
${tableRows}
    </tbody>
  </table>
</section>`;
    }

    if (activeTab === 'markdown') {
      if (locale === 'zh') {
        return `# ${formState.entityName}（${selectedIndustry.zh} · 公开事实与服务说明）

- **所在城市与服务区域**：${formState.cityDistrict}
- **营业/服务时间**：${formState.hours}
- **合规资质与备案号**：${formState.licenseId}
- **官网/官方入口**：${cleanUrl}

## 一、主营特色与服务边界声明
${formState.specialties}

## 二、公开透明服务项目与收费参考
| 服务项目 | 参考价格与时长 | 备注与适用条件 |
| --- | --- | --- |
${serviceRows.map((r) => `| ${r.item} | ${r.priceOrDetail} | ${r.note} |`).join('\n')}

## 三、客户常见核查问题（FAQ）
**Q：你们适合哪类客群，预约或签约前需要了解什么？**
A：请以具体现场评估与书面报价单为准。本页内容同步公开价目与服务边界，欢迎在各搜索引擎及 AI 助手检索核实。`;
      }
      return `# ${formState.entityName} (${selectedIndustry.en} Overview)

- **Location & Area Served**: ${formState.cityDistrict}
- **Operating Hours**: ${formState.hours}
- **License / Filing ID**: ${formState.licenseId}
- **Website**: ${cleanUrl}

## 1. Core Specialties & Scope Boundaries
${formState.specialties}

## 2. Transparent Service & Fee Schedule
| Service | Standard Rate / Duration | Notes |
| --- | --- | --- |
${serviceRows.map((r) => `| ${r.item} | ${r.priceOrDetail} | ${r.note} |`).join('\n')}`;
    }

    // llms.txt tab
    if (locale === 'zh') {
      return `# ${formState.entityName}
> 行业分类：${selectedIndustry.zh}（${selectedIndustry.groupZh}） | 所在区域：${formState.cityDistrict}
> 营业时间：${formState.hours} | 备案资质：${formState.licenseId}

## 核心事实摘要
${formState.specialties}

## 公开服务清单
${serviceRows.map((r) => `- ${r.item}：${r.priceOrDetail}（${r.note}）`).join('\n')}

## 官方入口
- [官方主页](${cleanUrl})`;
    }

    return `# ${formState.entityName}
> Sector: ${selectedIndustry.en} (${selectedIndustry.groupEn}) | Area: ${formState.cityDistrict}
> Hours: ${formState.hours} | License: ${formState.licenseId}

## Verified Overview
${formState.specialties}

## Public Service Catalog
${serviceRows.map((r) => `- ${r.item}: ${r.priceOrDetail} (${r.note})`).join('\n')}

## Official Link
- [Homepage](${cleanUrl})`;
  }, [activeTab, formState, locale, selectedIndustry, serviceRows]);

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1800);
    } catch {
      setCopiedKey(null);
    }
  };

  const handleDownloadOutput = () => {
    const ext = activeTab === 'jsonld' ? 'html' : activeTab === 'html' ? 'html' : activeTab === 'markdown' ? 'md' : 'txt';
    const blob = new Blob([generatedCode], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${selectedIndustry.key}-geo-${activeTab}.${ext}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadAuditBrief = () => {
    const checklistLines = checklistItems
      .map((item) => {
        const passed = item.id === 'safetyCompliance' && detectedViolations.length > 0 ? false : checklistState[item.id];
        return `[${passed ? 'OK' : 'TODO'}] ${item.label}`;
      })
      .join('\n');
    const violationLines =
      detectedViolations.length > 0
        ? detectedViolations.map((v) => `- "${v.term}": ${locale === 'zh' ? v.suggestionZh : v.suggestionEn}`).join('\n')
        : locale === 'zh'
          ? '未检出常见广告法违禁极限词。'
          : 'No restricted superlative terms detected.';

    const brief = [
      `${locale === 'zh' ? '行业 GEO 合规体检简报' : 'Industry GEO Readiness Brief'}`,
      `====================================`,
      `${locale === 'zh' ? '行业门类' : 'Industry'}: ${locale === 'zh' ? selectedIndustry.zh : selectedIndustry.en}`,
      `${locale === 'zh' ? '机构名称' : 'Entity'}: ${formState.entityName}`,
      `${locale === 'zh' ? '区域' : 'Area'}: ${formState.cityDistrict}`,
      `${locale === 'zh' ? '合规备案' : 'License'}: ${formState.licenseId}`,
      `${locale === 'zh' ? '准备度自评' : 'Readiness'}: ${completedChecks} / ${checklistItems.length}`,
      '',
      `${locale === 'zh' ? '1. 极限词与合规排查结果' : '1. Advertising Claim Scan'}`,
      violationLines,
      '',
      `${locale === 'zh' ? '2. 工程落地清单' : '2. Engineering Checklist'}`,
      checklistLines,
      '',
      `${locale === 'zh' ? '3. 配套行业完整指南' : '3. Full Sector Guide'}`,
      `${window.location.origin}${pillarGuideHref}`,
    ].join('\n');

    const blob = new Blob([brief], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${selectedIndustry.key}-geo-audit-brief.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleLink = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#57534E]">
          <a
            href={withLocalePrefix('/', locale)}
            onClick={(e) => handleLink(e, withLocalePrefix('/', locale))}
            className="hover:text-[#1C1917] hover:underline"
          >
            {copy.navFrontPage}
          </a>
          <span aria-hidden="true">/</span>
          <span className="font-medium text-[#1C1917]">{copy.navTools}</span>
        </nav>

        <LanguageSwitch locale={locale} basePath="/tools" onNavigate={onNavigate} />
      </div>

      {/* Masthead */}
      <header className="border-b border-[#D6D0C4] pb-8">
        <p className="text-xs font-semibold tracking-wider text-[#9A3412] uppercase">
          {locale === 'zh' ? '免费行业实操工具 · 本地浏览器即时生成' : 'Interactive Toolkit · Instant Client-Side Generation'}
        </p>
        <h1 className="editorial-balance mt-2 font-serif text-3xl font-semibold tracking-tight text-[#1C1917] sm:text-4xl">
          {locale === 'zh'
            ? '全行业 GEO 体检与 Schema 代码生成器'
            : 'China Industry GEO Audit & Schema.org Generator'}
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#44403C]">
          {locale === 'zh'
            ? '选择您所在的中国细分行业（支持覆盖国民经济全部 20 大门类的 150 个细分行业），填写基础营业信息与收费明细，即时排查广告法风险用词，并导出可直接部署在网站或公众号上的结构化代码与 /llms.txt 清单。'
            : 'Select any of the 150 China industry verticals spanning all 20 national economy sectors, enter your verified credentials and itemized rates, run a real-time advertising claim check, and export Schema.org JSON-LD, HTML tables, and /llms.txt snippets.'}
        </p>
      </header>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left: Input Form & Readiness Audit */}
        <section aria-label="Entity Configuration" className="space-y-6 lg:col-span-5">
          <div className="rounded-md border border-[#D6D0C4] bg-[#F5F1E9] p-5 sm:p-6">
            <div className="flex items-center justify-between gap-2 border-b border-[#D6D0C4] pb-3">
              <h2 className="font-serif text-xl font-semibold text-[#1C1917]">
                {locale === 'zh' ? '第一步：选择行业与填写实名资料' : '1. Select Industry & Credentials'}
              </h2>
              <button
                type="button"
                onClick={() => setFormState(buildDefaultFormForIndustry(industryKey, locale))}
                className="inline-flex min-h-[32px] items-center gap-1 text-xs font-medium text-[#57534E] hover:text-[#1C1917]"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>{locale === 'zh' ? '重置示例' : 'Reset'}</span>
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#44403C]">
                  {locale === 'zh' ? '所在细分行业（150 大门类全行业）' : 'Industry Vertical (150 Categories)'}
                </label>
                <select
                  value={industryKey}
                  onChange={(e) => handleIndustryChange(e.target.value)}
                  className="mt-1.5 min-h-[40px] w-full rounded-md border border-[#D6D0C4] bg-[#FBF9F5] px-3 py-2 text-xs font-medium text-[#1C1917] focus:border-[#1E3A8A] focus:outline-none"
                >
                  {CHINA_INDUSTRY_GROUPS.map((grp) => (
                    <optgroup key={grp.zh} label={locale === 'zh' ? grp.zh : grp.en}>
                      {CHINA_INDUSTRIES.filter((ind) => ind.groupZh === grp.zh).map((ind) => (
                        <option key={ind.key} value={ind.key}>
                          {locale === 'zh' ? ind.zh : ind.en}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                <p className="mt-1.5 text-xs text-[#57534E]">
                  {locale === 'zh' ? '对应 Schema 实体类型：' : 'Recommended Schema Type: '}
                  <span className="font-mono text-[#1E3A8A]">{selectedIndustry.schemaType}</span>
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#44403C]">
                  {locale === 'zh' ? '机构或门店全称' : 'Registered Entity / Brand Name'}
                </label>
                <input
                  type="text"
                  value={formState.entityName}
                  onChange={(e) => setFormState((prev) => ({ ...prev, entityName: e.target.value }))}
                  className="mt-1.5 min-h-[40px] w-full rounded-md border border-[#D6D0C4] bg-[#FBF9F5] px-3 py-2 text-xs text-[#1C1917] focus:border-[#1E3A8A] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-[#44403C]">
                    {locale === 'zh' ? '城市与服务商圈' : 'City & Service Area'}
                  </label>
                  <input
                    type="text"
                    value={formState.cityDistrict}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, cityDistrict: e.target.value }))
                    }
                    className="mt-1.5 min-h-[40px] w-full rounded-md border border-[#D6D0C4] bg-[#FBF9F5] px-3 py-2 text-xs text-[#1C1917] focus:border-[#1E3A8A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#44403C]">
                    {locale === 'zh' ? '营业或接诊时间' : 'Operating Hours'}
                  </label>
                  <input
                    type="text"
                    value={formState.hours}
                    onChange={(e) => setFormState((prev) => ({ ...prev, hours: e.target.value }))}
                    className="mt-1.5 min-h-[40px] w-full rounded-md border border-[#D6D0C4] bg-[#FBF9F5] px-3 py-2 text-xs text-[#1C1917] focus:border-[#1E3A8A] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-[#44403C]">
                    {locale === 'zh' ? '官网域名或官方主页' : 'Website URL'}
                  </label>
                  <input
                    type="url"
                    value={formState.websiteUrl}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, websiteUrl: e.target.value }))
                    }
                    className="mt-1.5 min-h-[40px] w-full rounded-md border border-[#D6D0C4] bg-[#FBF9F5] px-3 py-2 text-xs text-[#1C1917] focus:border-[#1E3A8A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#44403C]">
                    {locale === 'zh' ? '营业执照或执业备案号' : 'License / Filing ID'}
                  </label>
                  <input
                    type="text"
                    value={formState.licenseId}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, licenseId: e.target.value }))
                    }
                    className="mt-1.5 min-h-[40px] w-full rounded-md border border-[#D6D0C4] bg-[#FBF9F5] px-3 py-2 text-xs text-[#1C1917] focus:border-[#1E3A8A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#44403C]">
                  {locale === 'zh'
                    ? '公开服务与价格行（每行一条，支持用 | 分隔：项目 | 价格 | 说明）'
                    : 'Transparent Service Lines (one per line, optionally separated by | )'}
                </label>
                <textarea
                  rows={3}
                  value={formState.servicesText}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, servicesText: e.target.value }))
                  }
                  className="mt-1.5 w-full rounded-md border border-[#D6D0C4] bg-[#FBF9F5] px-3 py-2 text-xs leading-relaxed text-[#1C1917] focus:border-[#1E3A8A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#44403C]">
                  {locale === 'zh' ? '主营特色、适用范围与边界说明' : 'Core Specialties & Boundary Notice'}
                </label>
                <textarea
                  rows={3}
                  value={formState.specialties}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, specialties: e.target.value }))
                  }
                  className="mt-1.5 w-full rounded-md border border-[#D6D0C4] bg-[#FBF9F5] px-3 py-2 text-xs leading-relaxed text-[#1C1917] focus:border-[#1E3A8A] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* 6-Point GEO Readiness Checklist */}
          <div className="rounded-md border border-[#D6D0C4] bg-[#FBF9F5] p-5 sm:p-6">
            <div className="flex items-baseline justify-between gap-2 border-b border-[#E2DDD3] pb-3">
              <h2 className="font-serif text-lg font-semibold text-[#1C1917]">
                {locale === 'zh' ? 'GEO 上线前 6 项核查清单' : '6-Point GEO Readiness Audit'}
              </h2>
              <span className="font-mono text-sm font-semibold tabular-nums text-[#1E3A8A]">
                {completedChecks} / {checklistItems.length}
              </span>
            </div>

            <div className="mt-4 space-y-2.5">
              {checklistItems.map((item) => {
                const blockedByCompliance =
                  item.id === 'safetyCompliance' && detectedViolations.length > 0;
                const checked = blockedByCompliance ? false : Boolean(checklistState[item.id]);
                return (
                  <label
                    key={item.id}
                    className="flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-[#292524]"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      disabled={blockedByCompliance}
                      onChange={(e) =>
                        setChecklistState((prev) => ({ ...prev, [item.id]: e.target.checked }))
                      }
                      className="mt-0.5 h-4 w-4 rounded border-[#D6D0C4] accent-[#1E3A8A]"
                    />
                    <span className={blockedByCompliance ? 'text-[#9A3412]' : ''}>{item.label}</span>
                  </label>
                );
              })}
            </div>

            <div className="mt-5 flex flex-wrap gap-3 border-t border-[#E2DDD3] pt-4">
              <button
                type="button"
                onClick={handleDownloadAuditBrief}
                className="inline-flex min-h-[40px] items-center gap-2 rounded-md bg-[#1C1917] px-4 py-2 text-xs font-medium text-[#FBF9F5] transition-colors hover:bg-[#1E3A8A]"
              >
                <Download className="h-3.5 w-3.5" />
                <span>
                  {locale === 'zh' ? '导出诊断简报 (.txt)' : 'Export Audit Brief (.txt)'}
                </span>
              </button>

              <a
                href={pillarGuideHref}
                onClick={(e) => handleLink(e, pillarGuideHref)}
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-md border border-[#D6D0C4] bg-[#F5F1E9] px-4 py-2 text-xs font-medium text-[#1C1917] hover:border-[#1C1917]"
              >
                <span>
                  {locale === 'zh'
                    ? `阅读《${selectedIndustry.zh}完整指南》`
                    : `Read ${selectedIndustry.en} Playbook`}
                </span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Right: Compliance Scanner + Code Generator */}
        <section aria-label="Generated Output & Compliance Audit" className="space-y-6 lg:col-span-7">
          {/* Live Compliance Guardrail Card */}
          <div
            className={`rounded-md border p-5 sm:p-6 ${
              detectedViolations.length > 0
                ? 'border-[#9A3412]/50 bg-[#FEF7F3]'
                : 'border-[#D6D0C4] bg-[#F5F1E9]'
            }`}
          >
            <div className="flex items-start gap-3">
              {detectedViolations.length > 0 ? (
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#9A3412]" />
              ) : (
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#1E3A8A]" />
              )}
              <div className="min-w-0 flex-1">
                <h2 className="font-serif text-lg font-semibold text-[#1C1917]">
                  {detectedViolations.length > 0
                    ? locale === 'zh'
                      ? `合规定向自检：检出 ${detectedViolations.length} 处高风险绝对化用语`
                      : `Compliance Alert: ${detectedViolations.length} High-Risk Claim(s) Detected`
                    : locale === 'zh'
                      ? '合规定向自检通过：未检出常见广告法绝对化极限词'
                      : 'Compliance Scan Clean: No Restricted Superlatives Detected'}
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-[#44403C]">
                  {locale === 'zh'
                    ? `当前行业关键提醒：${selectedIndustry.complianceRiskZh}（外部可信溯源建议对齐：${selectedIndustry.trustSourcesZh}）`
                    : `Sector Risk Notice: ${selectedIndustry.complianceRiskEn} (Align profiles across ${selectedIndustry.trustSourcesEn})`}
                </p>

                {detectedViolations.length > 0 && (
                  <ul className="mt-4 divide-y divide-[#E2DDD3] border-t border-[#E2DDD3] text-xs">
                    {detectedViolations.map((v) => (
                      <li key={v.term} className="py-2.5">
                        <p className="font-semibold text-[#9A3412]">
                          {locale === 'zh' ? `风险词：「${v.term}」` : `Term: "${v.term}"`} —{' '}
                          <span className="font-normal text-[#292524]">
                            {locale === 'zh' ? v.reasonZh : v.reasonEn}
                          </span>
                        </p>
                        <p className="mt-1 text-[#57534E]">
                          {locale === 'zh' ? '修改建议：' : 'Suggestion: '}
                          {locale === 'zh' ? v.suggestionZh : v.suggestionEn}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Code & Copy Tabs */}
          <div className="overflow-hidden rounded-md border border-[#D6D0C4] bg-[#FBF9F5]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D6D0C4] bg-[#F5F1E9] px-4 py-3">
              <div role="tablist" className="flex flex-wrap items-center gap-1">
                {[
                  { id: 'jsonld' as const, labelZh: 'Schema.org JSON-LD', labelEn: 'Schema.org JSON-LD' },
                  { id: 'html' as const, labelZh: '透明价目与问答 HTML', labelEn: 'HTML Price & FAQ Block' },
                  { id: 'markdown' as const, labelZh: 'Markdown 长文模板', labelEn: 'Markdown Template' },
                  { id: 'llms' as const, labelZh: '/llms.txt 清单片段', labelEn: '/llms.txt Snippet' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`min-h-[36px] rounded px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                      activeTab === tab.id
                        ? 'bg-[#FBF9F5] text-[#1C1917] shadow-xs'
                        : 'text-[#57534E] hover:text-[#1C1917]'
                    }`}
                  >
                    {locale === 'zh' ? tab.labelZh : tab.labelEn}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleCopy(generatedCode, activeTab)}
                  className="inline-flex min-h-[36px] items-center gap-1.5 rounded-md border border-[#D6D0C4] bg-[#FBF9F5] px-3 py-1.5 text-xs font-medium text-[#1C1917] hover:border-[#1C1917]"
                >
                  {copiedKey === activeTab ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#1E3A8A]" />
                      <span>{locale === 'zh' ? '已复制' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>{locale === 'zh' ? '一键复制' : 'Copy'}</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleDownloadOutput}
                  className="inline-flex min-h-[36px] items-center gap-1.5 rounded-md bg-[#1E3A8A] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#172D6B]"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>{locale === 'zh' ? '下载代码' : 'Download'}</span>
                </button>
              </div>
            </div>

            <pre className="max-h-[460px] overflow-auto bg-[#FBF9F5] p-5 font-mono text-xs leading-relaxed text-[#1C1917]">
              <code>{generatedCode}</code>
            </pre>

            <div className="border-t border-[#E2DDD3] bg-[#F5F1E9] px-5 py-4 text-xs text-[#44403C]">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1E3A8A]" />
                <div>
                  <p className="font-medium text-[#1C1917]">
                    {locale === 'zh' ? '部署指引：' : 'Deployment Notes: '}
                    {activeTab === 'jsonld' &&
                      (locale === 'zh'
                        ? '请将上述 JSON-LD 嵌入网站首页或服务详情页的 <head> 标签内，并与页面可见文字保持完全一致。'
                        : 'Paste this JSON-LD inside <head> on your homepage or flagship service page, matching visible copy 1:1.')}
                    {activeTab === 'html' &&
                      (locale === 'zh'
                        ? '请作为网页首屏下方可见 HTML 正文直接输出，确保搜索引擎与 AI 抓取器无需点击弹窗即可读取价目表。'
                        : 'Render directly inside semantic HTML on the page rather than hiding prices inside images or modal popups.')}
                    {activeTab === 'markdown' &&
                      (locale === 'zh'
                        ? '可直接用于官网新闻专栏、微信公众号、知乎机构号或百家号科普正文发布，保持统一口径。'
                        : 'Publish consistently across your blog, official accounts, and industry knowledge portals.')}
                    {activeTab === 'llms' &&
                      (locale === 'zh'
                        ? '将生成内容保存为网站根目录下的 /llms.txt 纯文本文件，便于联网大模型迅速定位核心事实。'
                        : 'Host at /llms.txt on your root domain so browsing LLMs discover authoritative facts cleanly.')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
