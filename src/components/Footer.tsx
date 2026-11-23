import type { MouseEvent } from 'react';
import { SECTIONS } from '../data/sections.ts';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
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
              href="/"
              onClick={(e) => handleLink(e, '/')}
              className="font-serif text-2xl font-semibold tracking-tight text-[#1C1917]"
            >
              The Meridian Review
            </a>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#57534E]">
              An independent Western broadsheet and research publication built around verifiable primary sources, calm reading ergonomics, and open-web semantic standards.
            </p>
            <p className="mt-4 text-xs text-[#78716C]">
              Zurich · London · Stockholm · Editorial Desk
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-xs font-semibold tracking-wider text-[#57534E] uppercase">
              Editorial Sections
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SECTIONS.map((sec) => (
                <li key={sec.slug}>
                  <a
                    href={`/section/${sec.slug}`}
                    onClick={(e) => handleLink(e, `/section/${sec.slug}`)}
                    className="text-[#44403C] transition-colors hover:text-[#1E3A8A] hover:underline"
                  >
                    {sec.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-xs font-semibold tracking-wider text-[#57534E] uppercase">
              Publication
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="/archive"
                  onClick={(e) => handleLink(e, '/archive')}
                  className="text-[#44403C] transition-colors hover:text-[#1E3A8A] hover:underline"
                >
                  50-Article Archive
                </a>
              </li>
              <li>
                <a
                  href="/authors"
                  onClick={(e) => handleLink(e, '/authors')}
                  className="text-[#44403C] transition-colors hover:text-[#1E3A8A] hover:underline"
                >
                  Editorial Board
                </a>
              </li>
              <li>
                <a
                  href="/standards"
                  onClick={(e) => handleLink(e, '/standards')}
                  className="text-[#44403C] transition-colors hover:text-[#1E3A8A] hover:underline"
                >
                  SEO &amp; GEO Standards
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-xs font-semibold tracking-wider text-[#57534E] uppercase">
              Crawler Indexes
            </h2>
            <ul className="mt-4 space-y-2.5 font-mono text-xs">
              <li>
                <a href="/sitemap.xml" className="text-[#44403C] hover:text-[#1E3A8A] hover:underline">
                  /sitemap.xml
                </a>
              </li>
              <li>
                <a href="/robots.txt" className="text-[#44403C] hover:text-[#1E3A8A] hover:underline">
                  /robots.txt
                </a>
              </li>
              <li>
                <a href="/llms.txt" className="text-[#44403C] hover:text-[#1E3A8A] hover:underline">
                  /llms.txt
                </a>
              </li>
              <li>
                <a href="/llms-full.txt" className="text-[#44403C] hover:text-[#1E3A8A] hover:underline">
                  /llms-full.txt
                </a>
              </li>
              <li>
                <a href="/feed.xml" className="text-[#44403C] hover:text-[#1E3A8A] hover:underline">
                  /feed.xml
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#E2DDD3] pt-6 text-xs text-[#78716C] sm:flex-row sm:items-center">
          <p>© 2026 The Meridian Review. All 50 essays accessible openly for human study and search indexing.</p>
          <p className="tabular-nums">Vol. IV · 50 Indexed Essays · Zero Ad Trackers</p>
        </div>
      </div>
    </footer>
  );
}
