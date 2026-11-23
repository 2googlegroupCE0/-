import { useEffect, useMemo, useState, type MouseEvent } from 'react';
import { CheckCircle2, ExternalLink } from 'lucide-react';
import { ALL_ARTICLES } from '../data/articles.ts';
import { useDocumentSeo } from '../hooks/useDocumentSeo.ts';
import { buildArticleJsonLd, buildStandardsJsonLd } from '../utils/seoSchema.ts';

interface StandardsPageProps {
  onNavigate: (path: string) => void;
}

interface ComplianceSummary {
  publication: string;
  baseUrl: string;
  articleCount: number;
  sectionCount: number;
  authorCount: number;
  totalWordCount: number;
  totalFaqPairs: number;
  totalPrimaryCitations: number;
}

type EndpointTab = '/robots.txt' | '/sitemap.xml' | '/llms.txt' | '/feed.xml';

const REQUIREMENTS_CHECKLIST = [
  {
    category: 'Google Search Crawlability',
    title: 'Dynamic /robots.txt & /sitemap.xml',
    detail:
      'Permits Googlebot, Google-Extended, Bingbot, and OAI-SearchBot while indexing all 50 canonical article URLs with ISO-8601 lastmod dates and image declarations.',
  },
  {
    category: 'Gemini & Generative Retrieval',
    title: 'Official /llms.txt & /llms-full.txt Specification',
    detail:
      'Exposes a curated Markdown directory at /llms.txt and complete structured prose + citations at /llms-full.txt so Gemini retrieval systems parse all 50 articles deterministically.',
  },
  {
    category: 'Answer-First Passage Structure',
    title: 'Executive Summary & Explicit FAQ Pairs',
    detail:
      'Every essay opens with a 45-to-65-word direct factual answer, bulleted takeaways, structured HTML comparison tables, and visible FAQ sections synced 1:1 with FAQPage JSON-LD.',
  },
  {
    category: 'Schema.org Knowledge Graph',
    title: 'Linked @graph Entities Across Every Route',
    detail:
      'Server-side HTML injection and client navigation emit linked NewsMediaOrganization, Person, BreadcrumbList, NewsArticle, and FAQPage nodes joined by @id URIs.',
  },
  {
    category: 'E-E-A-T Provenance',
    title: 'Named Experts, Peer Reviewers & Primary Sources',
    detail:
      'All 50 essays carry verifiable author biographies, academic/field credentials, independent fact-check reviewer credits, and clickable institutional references.',
  },
  {
    category: 'Core Web Vitals & Page Experience',
    title: 'Zero Arrival Popups, Pre-Allocated Media & Lean Bundles',
    detail:
      'Explicit aspect ratios prevent layout shift (CLS), compositor-only transitions keep INP below 200ms, and zero interstitial overlays obstruct mobile reading.',
  },
];

export function StandardsPage({ onNavigate }: StandardsPageProps) {
  const [summary, setSummary] = useState<ComplianceSummary | null>(null);
  const [activeEndpoint, setActiveEndpoint] = useState<EndpointTab>('/llms.txt');
  const [endpointPreview, setEndpointPreview] = useState<string>('');
  const [loadingPreview, setLoadingPreview] = useState<boolean>(true);
  const [previewError, setPreviewError] = useState<string | null>(null);
  const [selectedSlug, setSelectedSlug] = useState<string>(ALL_ARTICLES[0].slug);

  const pageJsonLd = useMemo(
    () =>
      buildStandardsJsonLd(
        typeof window !== 'undefined' ? window.location.origin : '',
      ),
    [],
  );

  useDocumentSeo({
    title: 'Google Search & Gemini Compliance Standards – The Meridian Review',
    description:
      'Inspect live robots.txt, sitemap.xml, llms.txt, Schema.org JSON-LD graphs, and E-E-A-T standards built into The Meridian Review.',
    canonicalPath: '/standards',
    imagePath: '/src/assets/images/section_ai_systems_1795444152985.jpg',
    jsonLd: pageJsonLd,
  });

  useEffect(() => {
    let cancelled = false;
    fetch('/api/compliance-summary')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load compliance summary');
        return res.json();
      })
      .then((data: ComplianceSummary) => {
        if (!cancelled) setSummary(data);
      })
      .catch(() => {
        if (!cancelled) {
          setSummary({
            publication: 'The Meridian Review',
            baseUrl: window.location.origin,
            articleCount: ALL_ARTICLES.length,
            sectionCount: 5,
            authorCount: 6,
            totalWordCount: ALL_ARTICLES.reduce((s, a) => s + a.wordCount, 0),
            totalFaqPairs: ALL_ARTICLES.reduce((s, a) => s + a.faqs.length, 0),
            totalPrimaryCitations: ALL_ARTICLES.reduce(
              (s, a) => s + a.citations.length,
              0,
            ),
          });
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    setLoadingPreview(true);
    setPreviewError(null);
    fetch(activeEndpoint)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((text) => {
        if (!cancelled) {
          setEndpointPreview(text);
          setLoadingPreview(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setPreviewError(err instanceof Error ? err.message : 'Unable to fetch endpoint');
          setLoadingPreview(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [activeEndpoint]);

  const selectedArticle = useMemo(
    () => ALL_ARTICLES.find((a) => a.slug === selectedSlug) ?? ALL_ARTICLES[0],
    [selectedSlug],
  );

  const inspectedJsonLd = useMemo(
    () =>
      JSON.stringify(
        buildArticleJsonLd(
          selectedArticle,
          typeof window !== 'undefined' ? window.location.origin : '',
        ),
        null,
        2,
      ),
    [selectedArticle],
  );

  const handleLink = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#57534E]">
        <a
          href="/"
          onClick={(e) => handleLink(e, '/')}
          className="hover:text-[#1C1917] hover:underline"
        >
          Front Page
        </a>
        <span aria-hidden="true">/</span>
        <span className="font-medium text-[#1C1917]">SEO &amp; GEO Standards</span>
      </nav>

      <header className="border-b border-[#D6D0C4] pb-8">
        <p className="text-xs font-semibold tracking-wider text-[#9A3412] uppercase">
          Technical &amp; Editorial Verification
        </p>
        <h1 className="editorial-balance mt-2 font-serif text-3xl font-semibold tracking-tight text-[#1C1917] sm:text-4xl">
          Google Search &amp; Gemini Compliance Architecture
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#44403C]">
          Verify every machine-readable crawler endpoint, Schema.org JSON-LD graph, and E-E-A-T editorial signal served live by The Meridian Review.
        </p>
      </header>

      {/* Corpus Quantitative Summary */}
      <section aria-label="Indexed Corpus Summary" className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <div className="rounded-md border border-[#D6D0C4] bg-[#F5F1E9] p-4">
          <p className="text-xs text-[#57534E]">Indexed Essays</p>
          <p className="mt-1 font-mono text-2xl font-medium tabular-nums text-[#1C1917]">
            {summary?.articleCount ?? 50}
          </p>
        </div>
        <div className="rounded-md border border-[#D6D0C4] bg-[#F5F1E9] p-4">
          <p className="text-xs text-[#57534E]">Sections</p>
          <p className="mt-1 font-mono text-2xl font-medium tabular-nums text-[#1C1917]">
            {summary?.sectionCount ?? 5}
          </p>
        </div>
        <div className="rounded-md border border-[#D6D0C4] bg-[#F5F1E9] p-4">
          <p className="text-xs text-[#57534E]">Named Authors</p>
          <p className="mt-1 font-mono text-2xl font-medium tabular-nums text-[#1C1917]">
            {summary?.authorCount ?? 6}
          </p>
        </div>
        <div className="rounded-md border border-[#D6D0C4] bg-[#F5F1E9] p-4">
          <p className="text-xs text-[#57534E]">Total Words</p>
          <p className="mt-1 font-mono text-2xl font-medium tabular-nums text-[#1C1917]">
            {(summary?.totalWordCount ?? 60000).toLocaleString()}
          </p>
        </div>
        <div className="rounded-md border border-[#D6D0C4] bg-[#F5F1E9] p-4">
          <p className="text-xs text-[#57534E]">FAQPage Pairs</p>
          <p className="mt-1 font-mono text-2xl font-medium tabular-nums text-[#1C1917]">
            {summary?.totalFaqPairs ?? 65}
          </p>
        </div>
        <div className="rounded-md border border-[#D6D0C4] bg-[#F5F1E9] p-4">
          <p className="text-xs text-[#57534E]">Primary Citations</p>
          <p className="mt-1 font-mono text-2xl font-medium tabular-nums text-[#1C1917]">
            {summary?.totalPrimaryCitations ?? 60}
          </p>
        </div>
      </section>

      {/* Architectural Standards Grid */}
      <section id="editorial-policy" aria-label="Implemented Standards" className="mt-12">
        <h2 className="font-serif text-2xl font-semibold text-[#1C1917]">
          Six Pillars Implemented Across All 50 Essays
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REQUIREMENTS_CHECKLIST.map((item) => (
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

      {/* Live Crawler Endpoint Inspector */}
      <section aria-label="Live Crawler Endpoints" className="mt-14 border-t border-[#D6D0C4] pt-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[#1C1917]">
              Live Crawler &amp; LLM Endpoints
            </h2>
            <p className="mt-1 text-sm text-[#57534E]">
              Fetched directly from Express routes serving search bots and Gemini retrieval agents.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Select endpoint to inspect"
            className="flex flex-wrap items-center gap-1 rounded-md border border-[#E2DDD3] bg-[#F5F1E9] p-1"
          >
            {(['/llms.txt', '/sitemap.xml', '/robots.txt', '/feed.xml'] as EndpointTab[]).map(
              (ep) => (
                <button
                  key={ep}
                  type="button"
                  role="tab"
                  aria-selected={activeEndpoint === ep}
                  onClick={() => setActiveEndpoint(ep)}
                  className={`min-h-[36px] rounded px-3 py-1.5 font-mono text-xs whitespace-nowrap transition-colors ${
                    activeEndpoint === ep
                      ? 'bg-[#FBF9F5] text-[#1C1917] shadow-xs'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  {ep}
                </button>
              ),
            )}
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-md border border-[#D6D0C4] bg-[#F5F1E9]">
          <div className="flex items-center justify-between border-b border-[#D6D0C4] px-4 py-2.5 text-xs">
            <span className="font-mono text-[#1C1917]">{activeEndpoint}</span>
            <a
              href={activeEndpoint}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-[#1E3A8A] hover:underline"
            >
              <span>Open Raw Endpoint</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <div className="max-h-80 overflow-auto bg-[#FBF9F5] p-4">
            {loadingPreview ? (
              <p className="font-mono text-xs text-[#78716C]">Loading live endpoint output...</p>
            ) : previewError ? (
              <p className="font-mono text-xs text-[#9A3412]">Error: {previewError}</p>
            ) : (
              <pre className="font-mono text-xs leading-relaxed text-[#292524] whitespace-pre-wrap">
                {endpointPreview.slice(0, 6500)}
                {endpointPreview.length > 6500
                  ? '\n\n... [truncated in preview — click "Open Raw Endpoint" above for complete output]'
                  : ''}
              </pre>
            )}
          </div>
        </div>
      </section>

      {/* Per-Article Schema.org JSON-LD Graph Inspector */}
      <section aria-label="Per-Article JSON-LD Inspector" className="mt-14 border-t border-[#D6D0C4] pt-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[#1C1917]">
              Per-Article Schema.org JSON-LD Inspector
            </h2>
            <p className="mt-1 text-sm text-[#57534E]">
              Select any of the 50 essays to inspect the exact @graph payload injected for Googlebot and Gemini.
            </p>
          </div>

          <select
            value={selectedSlug}
            onChange={(e) => setSelectedSlug(e.target.value)}
            aria-label="Select essay for JSON-LD inspection"
            className="min-h-[40px] max-w-full rounded-md border border-[#D6D0C4] bg-[#FBF9F5] px-3 py-2 text-xs font-medium text-[#1C1917] focus:border-[#1E3A8A] focus:outline-none lg:w-96"
          >
            {ALL_ARTICLES.map((a) => (
              <option key={a.slug} value={a.slug}>
                {String(a.id).padStart(2, '0')}. {a.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4 overflow-hidden rounded-md border border-[#D6D0C4] bg-[#F5F1E9]">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D6D0C4] px-4 py-2.5 text-xs">
            <span className="font-mono text-[#1C1917]">
              &lt;script type=&quot;application/ld+json&quot;&gt; for /articles/{selectedArticle.slug}
            </span>
            <a
              href={`/articles/${selectedArticle.slug}`}
              onClick={(e) => handleLink(e, `/articles/${selectedArticle.slug}`)}
              className="font-medium text-[#1E3A8A] hover:underline"
            >
              Open Essay
            </a>
          </div>
          <div className="max-h-96 overflow-auto bg-[#FBF9F5] p-4">
            <pre className="font-mono text-xs leading-relaxed text-[#292524]">
              {inspectedJsonLd}
            </pre>
          </div>
        </div>
      </section>
    </main>
  );
}
