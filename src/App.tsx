import { useCallback, useEffect, useState } from 'react';
import {
  getArticleBySlug,
  getLocalizedSections,
  resolveLegacySlugRedirect,
  stripLocalePrefix,
  withLocalePrefix,
} from './data/articlesLocalized.ts';
import { UI_COPY } from './data/i18n.ts';
import type { SectionSlug } from './types/editorial.ts';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { SearchOverlay } from './components/SearchOverlay.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { ArchivePage } from './pages/ArchivePage.tsx';
import { ArticlePage } from './pages/ArticlePage.tsx';
import { AuthorsPage } from './pages/AuthorsPage.tsx';
import { GeoToolkitPage } from './pages/GeoToolkitPage.tsx';
import { StandardsPage } from './pages/StandardsPage.tsx';

export default function App() {
  const [locationPath, setLocationPath] = useState<string>(() =>
    typeof window !== 'undefined'
      ? window.location.pathname + window.location.search
      : '/',
  );
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onPopState = () => {
      setLocationPath(window.location.pathname + window.location.search);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const navigate = useCallback((target: string) => {
    const [pathAndQuery, hash] = target.split('#');
    const cleanTarget = pathAndQuery || '/';
    window.history.pushState({}, '', target);
    setLocationPath(cleanTarget);

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 40);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);

  const [pathnameOnly, searchQuery] = locationPath.split('?');
  const { locale, basePath } = stripLocalePrefix(pathnameOnly || '/');
  const queryParams = new URLSearchParams(searchQuery || '');
  const initialQuery = queryParams.get('q') || '';
  const initialAuthorId = queryParams.get('author') || '';
  const initialIndustry = queryParams.get('industry') || '';
  const initialPlatform = queryParams.get('platform') || '';
  const copy = UI_COPY[locale];

  const renderRoute = () => {
    if (basePath === '/') {
      return <HomePage locale={locale} onNavigate={navigate} />;
    }

    if (basePath === '/archive') {
      return (
        <ArchivePage
          locale={locale}
          initialQuery={initialQuery}
          initialAuthorId={initialAuthorId}
          initialIndustry={initialIndustry}
          initialPlatform={initialPlatform}
          onNavigate={navigate}
        />
      );
    }

    if (basePath.startsWith('/section/')) {
      const slug = basePath.replace('/section/', '') as SectionSlug;
      const valid = getLocalizedSections(locale).some((s) => s.slug === slug);
      if (valid) {
        return (
          <ArchivePage
            locale={locale}
            sectionSlug={slug}
            initialQuery={initialQuery}
            initialAuthorId={initialAuthorId}
            initialIndustry={initialIndustry}
            initialPlatform={initialPlatform}
            onNavigate={navigate}
          />
        );
      }
    }

    if (basePath.startsWith('/articles/')) {
      const slug = basePath.replace('/articles/', '');
      const directArticle = getArticleBySlug(slug, locale);
      if (directArticle) {
        return (
          <ArticlePage
            article={directArticle}
            locale={locale}
            onNavigate={navigate}
          />
        );
      }
      const redirectedSlug = resolveLegacySlugRedirect(slug);
      if (redirectedSlug) {
        const consolidated = getArticleBySlug(redirectedSlug, locale);
        if (consolidated) {
          return (
            <ArticlePage
              article={consolidated}
              locale={locale}
              onNavigate={navigate}
            />
          );
        }
      }
    }

    if (basePath === '/tools') {
      return (
        <GeoToolkitPage
          locale={locale}
          initialIndustry={initialIndustry}
          onNavigate={navigate}
        />
      );
    }

    if (basePath === '/authors') {
      return <AuthorsPage locale={locale} onNavigate={navigate} />;
    }

    if (basePath === '/standards') {
      return <StandardsPage locale={locale} onNavigate={navigate} />;
    }

    return (
      <main className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <p className="font-mono text-xs text-[#9A3412]">404 · PAGE NOT FOUND</p>
        <h1 className="mt-3 font-serif text-3xl font-semibold text-[#1C1917]">
          {copy.notFoundTitle}
        </h1>
        <p className="mt-3 text-sm text-[#57534E]">{copy.notFoundDesc}</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href={withLocalePrefix('/', locale)}
            onClick={(e) => {
              e.preventDefault();
              navigate(withLocalePrefix('/', locale));
            }}
            className="rounded-md bg-[#1C1917] px-5 py-2.5 text-xs font-medium text-[#FBF9F5] hover:bg-[#1E3A8A]"
          >
            {copy.navFrontPage}
          </a>
          <a
            href={withLocalePrefix('/archive', locale)}
            onClick={(e) => {
              e.preventDefault();
              navigate(withLocalePrefix('/archive', locale));
            }}
            className="rounded-md border border-[#D6D0C4] px-5 py-2.5 text-xs font-medium text-[#1C1917] hover:border-[#1C1917]"
          >
            {copy.navArchive}
          </a>
        </div>
      </main>
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FBF9F5] text-[#1C1917]">
      <Header
        locale={locale}
        currentBasePath={basePath}
        onNavigate={navigate}
        onOpenSearch={() => setSearchOpen(true)}
      />
      <div className="flex-1">{renderRoute()}</div>
      <Footer
        locale={locale}
        currentBasePath={basePath}
        onNavigate={navigate}
      />
      <SearchOverlay
        locale={locale}
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={navigate}
      />
    </div>
  );
}
