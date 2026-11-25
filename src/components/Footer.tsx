import type { MouseEvent } from 'react';
import type { Locale } from '../types/editorial.ts';
import { UI_COPY } from '../data/i18n.ts';
import {
  getLocalizedSections,
  withLocalePrefix,
} from '../data/articlesLocalized.ts';
import { LanguageSwitch } from './LanguageSwitch.tsx';

interface FooterProps {
  locale: Locale;
  currentBasePath: string;
  onNavigate: (path: string) => void;
}

export function Footer({ locale, currentBasePath, onNavigate }: FooterProps) {
  const copy = UI_COPY[locale];
  const sections = getLocalizedSections(locale);

  const handleLink = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="border-t border-[#D6D0C4] bg-[#F5F1E9] text-[#1C1917]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a
              href={withLocalePrefix('/', locale)}
              onClick={(e) => handleLink(e, withLocalePrefix('/', locale))}
              className="font-serif text-2xl font-semibold tracking-tight text-[#1C1917]"
            >
              {copy.brandName}
            </a>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#57534E]">
              {copy.footerDesc}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="text-xs text-[#78716C]">{copy.footerLocations}</p>
              <LanguageSwitch
                locale={locale}
                basePath={currentBasePath}
                onNavigate={onNavigate}
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-xs font-semibold tracking-wider text-[#57534E] uppercase">
              {copy.footerSectionsTitle}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {sections.map((sec) => {
                const href = withLocalePrefix(`/section/${sec.slug}`, locale);
                return (
                  <li key={sec.slug}>
                    <a
                      href={href}
                      onClick={(e) => handleLink(e, href)}
                      className="text-[#44403C] transition-colors hover:text-[#1E3A8A] hover:underline"
                    >
                      {sec.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-xs font-semibold tracking-wider text-[#57534E] uppercase">
              {copy.footerPublicationTitle}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={withLocalePrefix('/archive', locale)}
                  onClick={(e) => handleLink(e, withLocalePrefix('/archive', locale))}
                  className="text-[#44403C] transition-colors hover:text-[#1E3A8A] hover:underline"
                >
                  {copy.navArchive}
                </a>
              </li>
              <li>
                <a
                  href={withLocalePrefix('/tools', locale)}
                  onClick={(e) => handleLink(e, withLocalePrefix('/tools', locale))}
                  className="text-[#44403C] transition-colors hover:text-[#1E3A8A] hover:underline"
                >
                  {copy.navTools}
                </a>
              </li>
              <li>
                <a
                  href={withLocalePrefix('/authors', locale)}
                  onClick={(e) => handleLink(e, withLocalePrefix('/authors', locale))}
                  className="text-[#44403C] transition-colors hover:text-[#1E3A8A] hover:underline"
                >
                  {copy.navAuthors}
                </a>
              </li>
              <li>
                <a
                  href={withLocalePrefix('/standards', locale)}
                  onClick={(e) => handleLink(e, withLocalePrefix('/standards', locale))}
                  className="text-[#44403C] transition-colors hover:text-[#1E3A8A] hover:underline"
                >
                  {copy.navStandards}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-xs font-semibold tracking-wider text-[#57534E] uppercase">
              {copy.footerResourcesTitle}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="/feed.xml" className="text-[#44403C] hover:text-[#1E3A8A] hover:underline">
                  {copy.rssZhLabel}
                </a>
              </li>
              <li>
                <a href="/en/feed.xml" className="text-[#44403C] hover:text-[#1E3A8A] hover:underline">
                  {copy.rssEnLabel}
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" className="text-[#44403C] hover:text-[#1E3A8A] hover:underline">
                  {copy.sitemapLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#E2DDD3] pt-6 text-xs text-[#78716C] sm:flex-row sm:items-center">
          <p>{copy.footerCopyright}</p>
          <p className="tabular-nums">{copy.footerMeta}</p>
        </div>
      </div>
    </footer>
  );
}
