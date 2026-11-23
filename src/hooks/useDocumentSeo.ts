import { useEffect } from 'react';

interface DocumentSeoOptions {
  title: string;
  description: string;
  canonicalPath: string;
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

export function useDocumentSeo({
  title,
  description,
  canonicalPath,
  imagePath = '/src/assets/images/editorial_hero_architecture_1795444152682.jpg',
  ogType = 'website',
  jsonLd,
}: DocumentSeoOptions) {
  useEffect(() => {
    const origin = window.location.origin;
    const normalizedPath = canonicalPath === '/' ? '' : canonicalPath;
    const canonicalUrl = `${origin}${normalizedPath}`;
    const absoluteImage = imagePath.startsWith('http') ? imagePath : `${origin}${imagePath}`;

    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:type', ogType);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', absoluteImage);
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', absoluteImage);

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    let script = document.getElementById('meridian-jsonld') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'meridian-jsonld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, [title, description, canonicalPath, imagePath, ogType, jsonLd]);
}
