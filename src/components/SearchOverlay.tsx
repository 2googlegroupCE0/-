import { useEffect, useMemo, useRef, useState, type MouseEvent } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import { ALL_ARTICLES } from '../data/articles.ts';
import { AUTHORS_BY_ID } from '../data/authors.ts';
import { SECTIONS_BY_SLUG } from '../data/sections.ts';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export function SearchOverlay({ isOpen, onClose, onNavigate }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

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

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      return ALL_ARTICLES.slice(0, 8);
    }
    return ALL_ARTICLES.filter((article) => {
      const author = AUTHORS_BY_ID[article.authorId]?.name.toLowerCase() || '';
      const section = SECTIONS_BY_SLUG[article.section].name.toLowerCase();
      return (
        article.title.toLowerCase().includes(trimmed) ||
        article.subtitle.toLowerCase().includes(trimmed) ||
        article.directAnswer.toLowerCase().includes(trimmed) ||
        article.keywords.some((k) => k.toLowerCase().includes(trimmed)) ||
        author.includes(trimmed) ||
        section.includes(trimmed)
      );
    }).slice(0, 12);
  }, [query]);

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
      aria-label="Search editorial archive"
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
            placeholder="Search all 50 essays by topic, author, or keyword..."
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
          {results.length === 0 ? (
            <div className="px-6 py-10 text-center">
              <p className="text-sm font-medium text-[#1C1917]">No essays matched your query.</p>
              <p className="mt-1 text-xs text-[#57534E]">
                Try searching for Schema.org, geothermal, typography, HVDC, or E-E-A-T.
              </p>
            </div>
          ) : (
            results.map((article) => {
              const section = SECTIONS_BY_SLUG[article.section];
              const author = AUTHORS_BY_ID[article.authorId];
              return (
                <a
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  onClick={(e) => handleSelect(e, `/articles/${article.slug}`)}
                  className="group flex items-start justify-between gap-4 px-5 py-3.5 transition-colors duration-150 hover:bg-[#F5F1E9]"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#57534E]">
                      <span className="font-mono tabular-nums text-[#78716C]">
                        {String(article.id).padStart(2, '0')}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-medium text-[#1E3A8A]">{section.shortName}</span>
                      <span aria-hidden="true">·</span>
                      <span>{author?.name}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTimeMinutes} min</span>
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
            Showing <strong className="font-medium text-[#1C1917] tabular-nums">{results.length}</strong> of{' '}
            <span className="tabular-nums">50</span> indexed essays
          </span>
          <a
            href="/archive"
            onClick={(e) => handleSelect(e, '/archive')}
            className="font-medium text-[#1E3A8A] hover:underline whitespace-nowrap"
          >
            Browse Complete Archive
          </a>
        </div>
      </div>
    </div>
  );
}
