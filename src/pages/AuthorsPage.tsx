import { useMemo, type MouseEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ALL_ARTICLES } from '../data/articles.ts';
import { AUTHORS } from '../data/authors.ts';
import { SECTIONS_BY_SLUG } from '../data/sections.ts';
import { useDocumentSeo } from '../hooks/useDocumentSeo.ts';
import { buildAuthorsJsonLd } from '../utils/seoSchema.ts';

interface AuthorsPageProps {
  onNavigate: (path: string) => void;
}

export function AuthorsPage({ onNavigate }: AuthorsPageProps) {
  const jsonLd = useMemo(
    () =>
      buildAuthorsJsonLd(
        typeof window !== 'undefined' ? window.location.origin : '',
      ),
    [],
  );

  useDocumentSeo({
    title: 'Editorial Board & Authors – The Meridian Review',
    description:
      'Meet the named journalists, researchers, and technical reviewers behind The Meridian Review’s 50-article archive.',
    canonicalPath: '/authors',
    imagePath: '/src/assets/images/section_culture_society_1795444152185.jpg',
    jsonLd,
  });

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
        <span className="font-medium text-[#1C1917]">Editorial Board</span>
      </nav>

      <header className="border-b border-[#D6D0C4] pb-8">
        <p className="text-xs font-semibold tracking-wider text-[#9A3412] uppercase">
          E-E-A-T Provenance &amp; Accountability
        </p>
        <h1 className="editorial-balance mt-2 font-serif text-3xl font-semibold tracking-tight text-[#1C1917] sm:text-4xl">
          Editorial Board &amp; Contributing Researchers
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#44403C]">
          Every essay in The Meridian Review carries a named author with verifiable subject-matter credentials alongside a separate peer reviewer responsible for primary-source fact checking.
        </p>
      </header>

      <div className="mt-10 divide-y divide-[#D6D0C4]">
        {AUTHORS.map((author) => {
          const authored = ALL_ARTICLES.filter((a) => a.authorId === author.id);
          return (
            <section
              key={author.id}
              id={author.id}
              className="scroll-mt-24 py-10 first:pt-2"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <p className="text-xs font-medium text-[#1E3A8A]">{author.beat}</p>
                  <h2 className="mt-1 font-serif text-2xl font-semibold text-[#1C1917]">
                    {author.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-[#44403C]">
                    {author.role}
                  </p>

                  <dl className="mt-5 divide-y divide-[#E2DDD3] border-y border-[#E2DDD3] text-xs">
                    <div className="flex justify-between gap-4 py-2.5">
                      <dt className="text-[#57534E]">Academic / Field Basis</dt>
                      <dd className="text-right font-medium text-[#1C1917]">
                        {author.credentials}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 py-2.5">
                      <dt className="text-[#57534E]">Affiliation</dt>
                      <dd className="text-right font-medium text-[#1C1917]">
                        {author.affiliation}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 py-2.5">
                      <dt className="text-[#57534E]">Desk Location</dt>
                      <dd className="text-right font-medium text-[#1C1917]">
                        {author.location}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 py-2.5">
                      <dt className="text-[#57534E]">Published Essays</dt>
                      <dd className="text-right font-mono tabular-nums font-medium text-[#1C1917]">
                        {authored.length} essays
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="lg:col-span-7">
                  <p className="text-base leading-relaxed text-[#292524]">
                    {author.bio}
                  </p>

                  <h3 className="mt-6 text-xs font-semibold tracking-wider text-[#57534E] uppercase">
                    Published Dispatches ({authored.length})
                  </h3>
                  <ul className="mt-3 divide-y divide-[#E2DDD3] border-y border-[#E2DDD3]">
                    {authored.map((article) => {
                      const sec = SECTIONS_BY_SLUG[article.section];
                      return (
                        <li key={article.slug}>
                          <a
                            href={`/articles/${article.slug}`}
                            onClick={(e) => handleLink(e, `/articles/${article.slug}`)}
                            className="group flex items-baseline justify-between gap-4 py-3 text-sm transition-colors hover:text-[#1E3A8A]"
                          >
                            <div className="min-w-0">
                              <span className="mr-2.5 font-mono text-xs tabular-nums text-[#78716C]">
                                {String(article.id).padStart(2, '0')}
                              </span>
                              <span className="font-serif font-medium text-[#1C1917] group-hover:text-[#1E3A8A]">
                                {article.title}
                              </span>
                              <span className="ml-2 text-xs text-[#78716C]">
                                ({sec.shortName})
                              </span>
                            </div>
                            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[#78716C] group-hover:text-[#1E3A8A]" />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
