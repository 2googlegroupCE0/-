import type { MouseEvent } from 'react';
import type { Locale } from '../types/editorial.ts';
import { withLocalePrefix } from '../data/articlesLocalized.ts';

interface LanguageSwitchProps {
  locale: Locale;
  basePath: string;
  onNavigate: (path: string) => void;
}

export function LanguageSwitch({ locale, basePath, onNavigate }: LanguageSwitchProps) {
  const zhHref = withLocalePrefix(basePath, 'zh');
  const enHref = withLocalePrefix(basePath, 'en');

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, target: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onNavigate(target);
  };

  return (
    <div
      className="inline-flex items-center rounded border border-[#D6D0C4] bg-[#F5F1E9] p-0.5 text-xs"
      role="group"
      aria-label="Language edition"
    >
      <a
        href={zhHref}
        hrefLang="zh-CN"
        onClick={(e) => handleClick(e, zhHref)}
        className={`rounded-xs px-2.5 py-1 font-medium whitespace-nowrap transition-colors duration-150 ${
          locale === 'zh'
            ? 'bg-[#FBF9F5] text-[#1C1917] shadow-2xs'
            : 'text-[#57534E] hover:text-[#1C1917]'
        }`}
      >
        中文
      </a>
      <a
        href={enHref}
        hrefLang="en"
        onClick={(e) => handleClick(e, enHref)}
        className={`rounded-xs px-2.5 py-1 font-medium whitespace-nowrap transition-colors duration-150 ${
          locale === 'en'
            ? 'bg-[#FBF9F5] text-[#1C1917] shadow-2xs'
            : 'text-[#57534E] hover:text-[#1C1917]'
        }`}
      >
        EN
      </a>
    </div>
  );
}
