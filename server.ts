import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { ALL_ARTICLES, ARTICLES_BY_SLUG } from './src/data/articles.ts';
import { AUTHORS, AUTHORS_BY_ID } from './src/data/authors.ts';
import { SECTIONS, SECTIONS_BY_SLUG } from './src/data/sections.ts';
import type { SectionSlug } from './src/types/editorial.ts';
import {
  buildArticleJsonLd,
  buildAuthorsJsonLd,
  buildHomeJsonLd,
  buildSectionJsonLd,
  buildStandardsJsonLd,
} from './src/utils/seoSchema.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = Number(process.env.PORT || 3000);
const IS_PROD = process.env.NODE_ENV === 'production';

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeXml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function getBaseUrl(req: express.Request): string {
  if (process.env.APP_URL && process.env.APP_URL !== 'MY_APP_URL') {
    return process.env.APP_URL.replace(/\/+$/, '');
  }
  const proto = req.headers['x-forwarded-proto'] || req.protocol || 'http';
  const host = req.headers['x-forwarded-host'] || req.get('host') || `localhost:${PORT}`;
  return `${proto}://${host}`;
}

interface RouteMeta {
  title: string;
  description: string;
  canonicalPath: string;
  ogType: string;
  imagePath: string;
  jsonLd: Record<string, unknown>;
  ssrFallbackHtml: string;
}

function resolveRouteMeta(reqPath: string, baseUrl: string): RouteMeta {
  const cleanPath = reqPath.split('?')[0].replace(/\/+$/, '') || '/';

  if (cleanPath.startsWith('/articles/')) {
    const slug = cleanPath.replace('/articles/', '');
    const article = ARTICLES_BY_SLUG[slug];
    if (article) {
      const author = AUTHORS_BY_ID[article.authorId] ?? AUTHORS[0];
      const section = SECTIONS_BY_SLUG[article.section];
      return {
        title: `${article.title} – The Meridian Review`,
        description: article.directAnswer.slice(0, 158),
        canonicalPath: `/articles/${article.slug}`,
        ogType: 'article',
        imagePath: article.image,
        jsonLd: buildArticleJsonLd(article, baseUrl),
        ssrFallbackHtml: `
          <main style="max-width:780px;margin:2rem auto;padding:1rem;font-family:sans-serif;">
            <article>
              <header>
                <p>${escapeHtml(section.name)} · ${escapeHtml(article.publishedAt)} · ${article.readTimeMinutes} min read</p>
                <h1>${escapeHtml(article.title)}</h1>
                <p>${escapeHtml(article.subtitle)}</p>
                <p>By ${escapeHtml(author.name)} (${escapeHtml(author.credentials)}) · Reviewed by ${escapeHtml(article.reviewerName)}</p>
              </header>
              <section aria-label="Executive Summary">
                <h2>Direct Answer</h2>
                <p>${escapeHtml(article.directAnswer)}</p>
                <ul>${article.keyTakeaways.map((k) => `<li>${escapeHtml(k)}</li>`).join('')}</ul>
              </section>
              ${article.sections
                .map(
                  (sec) => `
                <section>
                  <h2>${escapeHtml(sec.heading)}</h2>
                  ${sec.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
                </section>`,
                )
                .join('')}
              <section aria-label="Frequently Asked Questions">
                <h2>Frequently Asked Questions</h2>
                ${article.faqs
                  .map(
                    (f) => `
                  <h3>${escapeHtml(f.question)}</h3>
                  <p>${escapeHtml(f.answer)}</p>`,
                  )
                  .join('')}
              </section>
            </article>
          </main>
        `,
      };
    }
  }

  if (cleanPath.startsWith('/section/')) {
    const slug = cleanPath.replace('/section/', '') as SectionSlug;
    const section = SECTIONS_BY_SLUG[slug];
    if (section) {
      const sectionArticles = ALL_ARTICLES.filter((a) => a.section === slug);
      return {
        title: `${section.name} Archive – The Meridian Review`,
        description: section.description,
        canonicalPath: `/section/${section.slug}`,
        ogType: 'website',
        imagePath: section.image,
        jsonLd: buildSectionJsonLd(section, sectionArticles, baseUrl),
        ssrFallbackHtml: `
          <main style="max-width:960px;margin:2rem auto;padding:1rem;font-family:sans-serif;">
            <h1>${escapeHtml(section.name)}</h1>
            <p>${escapeHtml(section.description)}</p>
            <ul>
              ${sectionArticles
                .map(
                  (a) =>
                    `<li><a href="/articles/${escapeHtml(a.slug)}">${escapeHtml(a.title)}</a> — ${escapeHtml(a.directAnswer)}</li>`,
                )
                .join('')}
            </ul>
          </main>
        `,
      };
    }
  }

  if (cleanPath === '/authors') {
    return {
      title: 'Editorial Board & Authors – The Meridian Review',
      description:
        'Meet the named journalists, researchers, and technical reviewers maintaining editorial accountability across The Meridian Review.',
      canonicalPath: '/authors',
      ogType: 'website',
      imagePath: '/src/assets/images/section_culture_society_1795444152185.jpg',
      jsonLd: buildAuthorsJsonLd(baseUrl),
      ssrFallbackHtml: `
        <main style="max-width:960px;margin:2rem auto;padding:1rem;font-family:sans-serif;">
          <h1>Editorial Board &amp; Authors</h1>
          ${AUTHORS.map(
            (au) => `
            <section>
              <h2>${escapeHtml(au.name)} — ${escapeHtml(au.role)}</h2>
              <p>${escapeHtml(au.credentials)} · ${escapeHtml(au.affiliation)}</p>
              <p>${escapeHtml(au.bio)}</p>
            </section>`,
          ).join('')}
        </main>
      `,
    };
  }

  if (cleanPath === '/standards') {
    return {
      title: 'Google Search & Gemini Compliance Standards – The Meridian Review',
      description:
        'Inspect live robots.txt, sitemap.xml, llms.txt, Schema.org JSON-LD graphs, and E-E-A-T standards built into The Meridian Review.',
      canonicalPath: '/standards',
      ogType: 'website',
      imagePath: '/src/assets/images/section_ai_systems_1795444152985.jpg',
      jsonLd: buildStandardsJsonLd(baseUrl),
      ssrFallbackHtml: `
        <main style="max-width:960px;margin:2rem auto;padding:1rem;font-family:sans-serif;">
          <h1>Google Search &amp; Gemini Compliance Standards</h1>
          <p>Live endpoints: <a href="/robots.txt">/robots.txt</a>, <a href="/sitemap.xml">/sitemap.xml</a>, <a href="/llms.txt">/llms.txt</a>, <a href="/llms-full.txt">/llms-full.txt</a>, <a href="/feed.xml">/feed.xml</a>.</p>
        </main>
      `,
    };
  }

  if (cleanPath === '/archive') {
    const featured = ALL_ARTICLES.slice(0, 12);
    return {
      title: 'Complete 50-Article Archive – The Meridian Review',
      description:
        'Browse and search all 50 built-in essays across technology, global economy, design, climate science, and digital society.',
      canonicalPath: '/archive',
      ogType: 'website',
      imagePath: '/src/assets/images/editorial_hero_architecture_1795444152682.jpg',
      jsonLd: buildHomeJsonLd(featured, baseUrl),
      ssrFallbackHtml: `
        <main style="max-width:960px;margin:2rem auto;padding:1rem;font-family:sans-serif;">
          <h1>Complete 50-Article Archive</h1>
          <ul>
            ${ALL_ARTICLES.map(
              (a) =>
                `<li><a href="/articles/${escapeHtml(a.slug)}">${escapeHtml(a.title)}</a></li>`,
            ).join('')}
          </ul>
        </main>
      `,
    };
  }

  const featuredHome = ALL_ARTICLES.filter((a) => a.featured);
  return {
    title: 'The Meridian Review – Independent Journalism, Research & Analysis',
    description:
      'Explore 50 peer-reviewed essays across technology, global economics, design, climate science, and digital society, engineered for Google Search and Gemini.',
    canonicalPath: '/',
    ogType: 'website',
    imagePath: '/src/assets/images/editorial_hero_architecture_1795444152682.jpg',
    jsonLd: buildHomeJsonLd(featuredHome, baseUrl),
    ssrFallbackHtml: `
      <main style="max-width:960px;margin:2rem auto;padding:1rem;font-family:sans-serif;">
        <h1>The Meridian Review</h1>
        <p>Independent broadsheet and research archive of 50 structured essays engineered for Google Search and Gemini.</p>
        <ul>
          ${ALL_ARTICLES.slice(0, 15)
            .map(
              (a) =>
                `<li><a href="/articles/${escapeHtml(a.slug)}">${escapeHtml(a.title)}</a></li>`,
            )
            .join('')}
        </ul>
      </main>
    `,
  };
}

function injectHtmlMetadata(html: string, meta: RouteMeta, baseUrl: string): string {
  const canonicalUrl = `${baseUrl}${meta.canonicalPath === '/' ? '' : meta.canonicalPath}`;
  const ogImageUrl = `${baseUrl}${meta.imagePath}`;
  const escapedTitle = escapeHtml(meta.title);
  const escapedDesc = escapeHtml(meta.description);

  let updated = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapedTitle}</title>`)
    .replace(
      /<meta\s+name="description"[\s\S]*?\/>/,
      `<meta name="description" content="${escapedDesc}" />`,
    )
    .replace(
      '<!--SSR_CANONICAL_SLOT-->',
      `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />\n    <link rel="alternate" type="application/rss+xml" title="The Meridian Review RSS Feed" href="${escapeHtml(baseUrl)}/feed.xml" />\n    <link rel="alternate" type="text/plain" title="The Meridian Review LLMs Index" href="${escapeHtml(baseUrl)}/llms.txt" />`,
    )
    .replace(
      /<meta\s+property="og:type"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:type" content="${escapeHtml(meta.ogType)}" />`,
    )
    .replace(
      /<meta\s+property="og:title"[\s\S]*?\/>/,
      `<meta property="og:title" content="${escapedTitle}" />`,
    )
    .replace(
      /<meta\s+property="og:description"[\s\S]*?\/>/,
      `<meta property="og:description" content="${escapedDesc}" />`,
    )
    .replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:image" content="${escapeHtml(ogImageUrl)}" />`,
    )
    .replace(
      /<meta\s+name="twitter:title"[\s\S]*?\/>/,
      `<meta name="twitter:title" content="${escapedTitle}" />`,
    )
    .replace(
      /<meta\s+name="twitter:description"[\s\S]*?\/>/,
      `<meta name="twitter:description" content="${escapedDesc}" />`,
    )
    .replace(
      /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:image" content="${escapeHtml(ogImageUrl)}" />`,
    );

  const jsonLdScript = `<script id="meridian-jsonld" type="application/ld+json">${JSON.stringify(meta.jsonLd)}</script>`;
  updated = updated.replace(
    /<!--SSR_JSONLD_SLOT-->[\s\S]*?<\/script>/,
    `<!--SSR_JSONLD_SLOT-->\n    ${jsonLdScript}`,
  );
  updated = updated.replace(
    '<!--SSR_BODY_SLOT-->',
    `<noscript>${meta.ssrFallbackHtml}</noscript>`,
  );

  return updated;
}

async function startServer() {
  const app = express();
  app.set('trust proxy', true);

  // Security & Caching headers baseline
  app.use((_req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });

  // 1. /robots.txt for Googlebot, Google-Extended (Gemini), and search crawlers
  app.get('/robots.txt', (req, res) => {
    const baseUrl = getBaseUrl(req);
    const body = [
      'User-agent: *',
      'Allow: /',
      '',
      'User-agent: Googlebot',
      'Allow: /',
      '',
      'User-agent: Google-Extended',
      'Allow: /',
      '',
      'User-agent: Bingbot',
      'Allow: /',
      '',
      'User-agent: OAI-SearchBot',
      'Allow: /',
      '',
      `Sitemap: ${baseUrl}/sitemap.xml`,
      `# Machine-readable LLM index: ${baseUrl}/llms.txt`,
    ].join('\n');
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(body);
  });

  // 2. /sitemap.xml with all static pages, 5 sections, and all 50 articles
  app.get('/sitemap.xml', (req, res) => {
    const baseUrl = getBaseUrl(req);
    const staticUrls = [
      { loc: `${baseUrl}/`, lastmod: '2026-11-23', changefreq: 'daily', priority: '1.0' },
      { loc: `${baseUrl}/archive`, lastmod: '2026-11-23', changefreq: 'daily', priority: '0.9' },
      { loc: `${baseUrl}/authors`, lastmod: '2026-11-22', changefreq: 'monthly', priority: '0.7' },
      { loc: `${baseUrl}/standards`, lastmod: '2026-11-23', changefreq: 'weekly', priority: '0.8' },
    ];

    const sectionUrls = SECTIONS.map((sec) => ({
      loc: `${baseUrl}/section/${sec.slug}`,
      lastmod: '2026-11-22',
      changefreq: 'weekly',
      priority: '0.85',
    }));

    const articleEntries = ALL_ARTICLES.map((a) => ({
      loc: `${baseUrl}/articles/${a.slug}`,
      lastmod: a.updatedAt,
      changefreq: 'monthly',
      priority: a.featured ? '0.9' : '0.8',
      image: `${baseUrl}${a.image}`,
      imageTitle: a.title,
    }));

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${[...staticUrls, ...sectionUrls]
  .map(
    (item) => `  <url>
    <loc>${escapeXml(item.loc)}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`,
  )
  .join('\n')}
${articleEntries
  .map(
    (item) => `  <url>
    <loc>${escapeXml(item.loc)}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
    <image:image>
      <image:loc>${escapeXml(item.image)}</image:loc>
      <image:title>${escapeXml(item.imageTitle)}</image:title>
    </image:image>
  </url>`,
  )
  .join('\n')}
</urlset>`;

    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(xml);
  });

  // 3. /llms.txt (llmstxt.org specification for Gemini & AI grounding)
  app.get('/llms.txt', (req, res) => {
    const baseUrl = getBaseUrl(req);
    const lines: string[] = [
      '# The Meridian Review',
      '',
      '> An independent Western broadsheet and research journal featuring 50 structured, peer-reviewed essays engineered for Google Search E-E-A-T, Schema.org knowledge graphs, and Gemini generative retrieval.',
      '',
      '## Machine-Readable Endpoints',
      `- [XML Sitemap](${baseUrl}/sitemap.xml): Canonical index of all 50 articles, sections, and editorial provenance pages.`,
      `- [Full LLM Corpus](${baseUrl}/llms-full.txt): Complete Markdown text, Answer-First summaries, FAQs, and primary citations for all 50 essays.`,
      `- [RSS 2.0 Feed](${baseUrl}/feed.xml): Syndication feed sorted by latest publication date.`,
      `- [SEO & GEO Standards](${baseUrl}/standards): Live compliance verification and Schema.org specification.`,
      `- [Editorial Board](${baseUrl}/authors): Credentials and affiliations for all 6 named authors and fact-check reviewers.`,
      '',
      '## Editorial Sections',
      ...SECTIONS.map(
        (sec) => `- [${sec.name}](${baseUrl}/section/${sec.slug}): ${sec.description}`,
      ),
      '',
      '## Complete 50-Article Directory',
      ...ALL_ARTICLES.map((article) => {
        const author = AUTHORS_BY_ID[article.authorId]?.name || 'Editorial Desk';
        return `- [${String(article.id).padStart(2, '0')}. ${article.title}](${baseUrl}/articles/${article.slug}) — *${author}, ${article.updatedAt}*: ${article.directAnswer}`;
      }),
    ];

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(lines.join('\n'));
  });

  // 4. /llms-full.txt (Complete 50-essay Markdown corpus)
  app.get('/llms-full.txt', (req, res) => {
    const baseUrl = getBaseUrl(req);
    const doc = ALL_ARTICLES.map((article) => {
      const author = AUTHORS_BY_ID[article.authorId] ?? AUTHORS[0];
      const section = SECTIONS_BY_SLUG[article.section];
      return [
        `# ${String(article.id).padStart(2, '0')}. ${article.title}`,
        `URL: ${baseUrl}/articles/${article.slug}`,
        `Section: ${section.name} | Author: ${author.name} (${author.credentials}) | Fact-Checked By: ${article.reviewerName}`,
        `Published: ${article.publishedAt} | Updated: ${article.updatedAt} | Read Time: ${article.readTimeMinutes} min`,
        '',
        `## Direct Answer`,
        article.directAnswer,
        '',
        `## Key Takeaways`,
        ...article.keyTakeaways.map((item) => `- ${item}`),
        '',
        ...article.sections.flatMap((sec) => [
          `## ${sec.heading}`,
          ...sec.paragraphs,
          ...(sec.metrics
            ? [
                '',
                '| Metric | Value | Context |',
                '| --- | --- | --- |',
                ...sec.metrics.map((m) => `| ${m.label} | ${m.value} | ${m.context} |`),
              ]
            : []),
          '',
        ]),
        `## Frequently Asked Questions`,
        ...article.faqs.flatMap((faq) => [`**Q: ${faq.question}**`, `A: ${faq.answer}`, '']),
        `## Primary Citations`,
        ...article.citations.map((c) => `- ${c.title} (${c.publisher}, ${c.year}): ${c.url}`),
        '',
        '---',
        '',
      ].join('\n');
    }).join('\n');

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(doc);
  });

  // 5. /feed.xml (RSS 2.0)
  app.get('/feed.xml', (req, res) => {
    const baseUrl = getBaseUrl(req);
    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The Meridian Review</title>
    <link>${escapeXml(baseUrl)}/</link>
    <description>Independent Western broadsheet and research journal featuring 50 structured essays engineered for Google Search and Gemini.</description>
    <language>en-us</language>
    <atom:link href="${escapeXml(baseUrl)}/feed.xml" rel="self" type="application/rss+xml" />
${ALL_ARTICLES.map((a) => {
  const author = AUTHORS_BY_ID[a.authorId]?.name || 'Editorial Desk';
  const section = SECTIONS_BY_SLUG[a.section].name;
  return `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${escapeXml(`${baseUrl}/articles/${a.slug}`)}</link>
      <guid isPermaLink="true">${escapeXml(`${baseUrl}/articles/${a.slug}`)}</guid>
      <pubDate>${new Date(`${a.publishedAt}T08:00:00Z`).toUTCString()}</pubDate>
      <category>${escapeXml(section)}</category>
      <author>${escapeXml(author)}</author>
      <description>${escapeXml(a.directAnswer)}</description>
    </item>`;
}).join('\n')}
  </channel>
</rss>`;
    res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(rss);
  });

  // 6. Health & Audit API
  app.get('/api/compliance-summary', (req, res) => {
    const baseUrl = getBaseUrl(req);
    const totalWords = ALL_ARTICLES.reduce((sum, a) => sum + a.wordCount, 0);
    const totalFaqs = ALL_ARTICLES.reduce((sum, a) => sum + a.faqs.length, 0);
    const totalCitations = ALL_ARTICLES.reduce((sum, a) => sum + a.citations.length, 0);
    res.json({
      publication: 'The Meridian Review',
      baseUrl,
      articleCount: ALL_ARTICLES.length,
      sectionCount: SECTIONS.length,
      authorCount: AUTHORS.length,
      totalWordCount: totalWords,
      totalFaqPairs: totalFaqs,
      totalPrimaryCitations: totalCitations,
      endpoints: {
        robots: '/robots.txt',
        sitemap: '/sitemap.xml',
        llms: '/llms.txt',
        llmsFull: '/llms-full.txt',
        rss: '/feed.xml',
      },
    });
  });

  if (!IS_PROD) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);

    app.get('*', async (req, res, next) => {
      try {
        const url = req.originalUrl;
        const baseUrl = getBaseUrl(req);
        const templatePath = path.resolve(__dirname, 'index.html');
        let template = fs.readFileSync(templatePath, 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        const meta = resolveRouteMeta(req.path, baseUrl);
        const finalHtml = injectHtmlMetadata(template, meta, baseUrl);
        res.status(200).set({ 'Content-Type': 'text/html; charset=utf-8' }).end(finalHtml);
      } catch (err) {
        vite.ssrFixStacktrace(err as Error);
        next(err);
      }
    });
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(
      '/assets',
      express.static(path.join(distDir, 'assets'), {
        maxAge: '1y',
        immutable: true,
      }),
    );
    app.use(
      '/src/assets',
      express.static(path.join(distDir, 'src/assets'), {
        maxAge: '1y',
        immutable: true,
      }),
    );
    app.use(express.static(distDir, { index: false }));

    const distHtmlTemplate = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
    app.get('*', (req, res) => {
      const baseUrl = getBaseUrl(req);
      const meta = resolveRouteMeta(req.path, baseUrl);
      const finalHtml = injectHtmlMetadata(distHtmlTemplate, meta, baseUrl);
      res.status(200).set({ 'Content-Type': 'text/html; charset=utf-8' }).end(finalHtml);
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`The Meridian Review server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
