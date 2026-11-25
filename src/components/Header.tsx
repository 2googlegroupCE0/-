import { useState, type MouseEvent } from 'react';
import { Menu, Search, X } from 'lucide-react';
import type { Locale } from '../types/editorial.ts';
import { UI_COPY } from '../data/i18n.ts';
import { withLocalePrefix } from '../data/articlesLocalized.ts';

interface HeaderProps {
  locale: Locale;
  currentBasePath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export function Header({
  locale,
  currentBasePath,
  onNavigate,
  onOpenSearch,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const copy = UI_COPY[locale];

  const navItems = [
    { label: copy.navFrontPage, basePath: '/' },
    { label: copy.navArchive, basePath: '/archive' },
    { label: copy.navTools, basePath: '/tools' },
    { label: copy.navAuthors, basePath: '/authors' },
    { label: copy.navStandards, basePath: '/standards' },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, target: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(target);
  };

  const homeHref = withLocalePrefix('/', locale);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E2DDD3] bg-[#FBF9F5]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href={homeHref}
          onClick={(e) => handleLinkClick(e, homeHref)}
          className="font-serif text-xl font-semibold tracking-tight text-[#1C1917] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E3A8A]"
        >
          {copy.brandName}
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#57534E]"
        >
          {navItems.map((item) => {
            const href = withLocalePrefix(item.basePath, locale);
            const isActive =
              item.basePath === '/'
                ? currentBasePath === '/'
                : currentBasePath.startsWith(item.basePath);
            return (
              <a
                key={item.basePath}
                href={href}
                onClick={(e) => handleLinkClick(e, href)}
                className={`whitespace-nowrap shrink-0 py-1 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E3A8A] ${
                  isActive
                    ? 'border-b border-[#1C1917] text-[#1C1917]'
                    : 'hover:text-[#1C1917]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenSearch}
            className="inline-flex min-h-[40px] items-center gap-2 rounded-md border border-[#D6D0C4] bg-[#F5F1E9] px-4 py-2 text-xs font-medium text-[#1C1917] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#1C1917] hover:bg-[#EBE6DF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A]"
            aria-label={copy.searchPlaceholder}
          >
            <Search className="h-3.5 w-3.5 text-[#57534E]" strokeWidth={1.75} />
            <span>{copy.searchButton}</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#D6D0C4] text-[#1C1917] md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A]"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="border-t border-[#E2DDD3] bg-[#FBF9F5] px-4 py-3 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const href = withLocalePrefix(item.basePath, locale);
              const isActive =
                item.basePath === '/'
                  ? currentBasePath === '/'
                  : currentBasePath.startsWith(item.basePath);
              return (
                <a
                  key={item.basePath}
                  href={href}
                  onClick={(e) => handleLinkClick(e, href)}
                  className={`flex min-h-[44px] items-center px-2 text-sm font-medium whitespace-nowrap ${
                    isActive ? 'text-[#1E3A8A]' : 'text-[#44403C]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
