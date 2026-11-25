import { useEffect, useMemo, useRef, useState, type MouseEvent } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import type { Locale } from '../types/editorial.ts';
import { UI_COPY } from '../data/i18n.ts';
import {
  getLocalizedAuthorById,
  getLocalizedSectionBySlug,
  queryArticles,
  withLocalePrefix,
} from '../data/articlesLocalized.ts';

interface SearchOverlayProps {
  locale: Locale;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export function SearchOverlay({
  locale,
  isOpen,
  onClose,
  onNavigate,
}: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const copy = UI_COPY[locale];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 20);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const searchResult = useMemo(
    () =>
      queryArticles({
        locale,
        query,
        page: 1,
        pageSize: query.trim() ? 12 : 8,
      }),
    [locale, query],
  );

  if (!isOpen) return null;

  const handleSelect = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onClose();
    onNavigate(path);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-[#1C1917]/50 px-4 pt-16 sm:pt-24 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label={copy.searchPlaceholder}
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-lg border border-[#D6D0C4] bg-[#FBF9F5] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-[#E2DDD3] px-4 py-3">
          <Search className="h-4 w-4 shrink-0 text-[#57534E]" strokeWidth={1.75} />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={copy.searchPlaceholder}
            className="w-full bg-transparent text-sm text-[#1C1917] placeholder:text-[#78716C] focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-[#57534E] hover:bg-[#EBE6DF] hover:text-[#1C1917] focus-visible:outline-2 focus-visible:outline-[#1E3A8A]"
            aria-label="Close search"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[65vh] overflow-y-auto divide-y divide-[#EBE6DF]">
          {searchResult.items.length === 0 ? (
            <div className="px-6 py-10 text-center">
              <p className="text-sm font-medium text-[#1C1917]">{copy.searchEmptyTitle}</p>
              <p className="mt-1 text-xs text-[#57534E]">{copy.searchEmptyHint}</p>
            </div>
          ) : (
            searchResult.items.map((article) => {
              const section = getLocalizedSectionBySlug(article.section, locale);
              const author = getLocalizedAuthorById(article.authorId, locale);
              const href = withLocalePrefix(`/articles/${article.slug}`, locale);
              return (
                <a
                  key={article.slug}
                  href={href}
                  onClick={(e) => handleSelect(e, href)}
                  className="group flex items-start justify-between gap-4 px-5 py-3.5 transition-colors duration-150 hover:bg-[#F5F1E9]"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#57534E]">
                      <span className="font-mono tabular-nums text-[#78716C]">
                        {String(article.id).padStart(5, '0')}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-medium text-[#1E3A8A]">{section.shortName}</span>
                      <span aria-hidden="true">·</span>
                      <span>{author.name}</span>
                      <span aria-hidden="true">·</span>
                      <span>{copy.minRead(article.readTimeMinutes)}</span>
                    </div>
                    <p className="mt-1 font-serif text-base font-semibold text-[#1C1917] group-hover:text-[#1E3A8A]">
                      {article.title}
                    </p>
                    <p className="mt-0.5 line-clamp-1 text-xs text-[#57534E]">
                      {article.directAnswer}
                    </p>
                  </div>
                  <ArrowRight className="mt-2 h-4 w-4 shrink-0 text-[#78716C] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-[#1E3A8A]" />
                </a>
              );
            })
          )}
        </div>

        <div className="flex items-center justify-between border-t border-[#E2DDD3] bg-[#F5F1E9] px-5 py-2.5 text-xs text-[#57534E]">
          <span>
            {copy.searchFooterCount(
              searchResult.items.length,
              searchResult.totalMatched,
              searchResult.totalCorpus,
            )}
          </span>
          <a
            href={withLocalePrefix('/archive', locale)}
            onClick={(e) => handleSelect(e, withLocalePrefix('/archive', locale))}
            className="font-medium text-[#1E3A8A] hover:underline whitespace-nowrap"
          >
            {copy.browseArchive}
          </a>
        </div>
      </div>
    </div>
  );
}
