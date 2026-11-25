import { useEffect } from 'react';
import type { Locale } from '../types/editorial.ts';
import { withLocalePrefix } from '../data/articlesLocalized.ts';

interface DocumentSeoOptions {
  title: string;
  description: string;
  basePath: string;
  locale: Locale;
  imagePath?: string;
  ogType?: 'website' | 'article';
  jsonLd: Record<string, unknown>;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useDocumentSeo({
  title,
  description,
  basePath,
  locale,
  imagePath = '/src/assets/images/editorial_hero_architecture_1795444152682.jpg',
  ogType = 'website',
  jsonLd,
}: DocumentSeoOptions) {
  useEffect(() => {
    const origin = window.location.origin;
    const zhPath = withLocalePrefix(basePath, 'zh');
    const enPath = withLocalePrefix(basePath, 'en');
    const canonicalPath = locale === 'zh' ? zhPath : enPath;

    const canonicalUrl = `${origin}${canonicalPath}`;
    const zhUrl = `${origin}${zhPath}`;
    const enUrl = `${origin}${enPath}`;
    const absoluteImage = imagePath.startsWith('http') ? imagePath : `${origin}${imagePath}`;

    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en-US';
    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:type', ogType);
    upsertMeta('property', 'og:locale', locale === 'zh' ? 'zh_CN' : 'en_US');
    upsertMeta('property', 'og:locale:alternate', locale === 'zh' ? 'en_US' : 'zh_CN');
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', absoluteImage);
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', absoluteImage);

    upsertLink('canonical', canonicalUrl);
    upsertLink('alternate', zhUrl, 'zh-CN');
    upsertLink('alternate', enUrl, 'en');
    upsertLink('alternate', zhUrl, 'x-default');

    let script = document.getElementById('meridian-jsonld') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'meridian-jsonld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, [title, description, basePath, locale, imagePath, ogType, jsonLd]);
}
