import { useState, type FormEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Locale } from '../types/editorial.ts';
import { UI_COPY } from '../data/i18n.ts';

interface PaginationBarProps {
  locale: Locale;
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  onPageChange: (nextPage: number) => void;
}

function getPageWindow(current: number, total: number): Array<number | 'ellipsis'> {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const pages: Array<number | 'ellipsis'> = [1];
  const left = Math.max(2, current - 1);
  const right = Math.min(total - 1, current + 1);

  if (left > 2) pages.push('ellipsis');
  for (let p = left; p <= right; p++) {
    pages.push(p);
  }
  if (right < total - 1) pages.push('ellipsis');
  pages.push(total);
  return pages;
}

export function PaginationBar({
  locale,
  page,
  pageSize,
  totalItems,
  totalPages,
  onPageChange,
}: PaginationBarProps) {
  const copy = UI_COPY[locale];
  const [jumpInput, setJumpInput] = useState('');

  if (totalItems === 0) return null;

  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalItems);
  const windowItems = getPageWindow(page, totalPages);

  const handleJump = (e: FormEvent) => {
    e.preventDefault();
    const parsed = Number.parseInt(jumpInput.trim(), 10);
    if (!Number.isNaN(parsed)) {
      const clamped = Math.max(1, Math.min(totalPages, parsed));
      onPageChange(clamped);
      setJumpInput('');
    }
  };

  return (
    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-xs text-[#57534E] tabular-nums">
        {copy.showingRange(start, end, totalItems)}
      </p>

      <div className="flex flex-wrap items-center gap-1.5">
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => onPageChange(Math.max(1, page - 1))}
          className="inline-flex min-h-[36px] items-center gap-1 rounded border border-[#D6D0C4] px-3 py-1.5 text-xs font-medium text-[#1C1917] disabled:opacity-40 hover:bg-[#F5F1E9]"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          <span>{copy.previous}</span>
        </button>

        {windowItems.map((item, idx) =>
          item === 'ellipsis' ? (
            <span
              key={`ellipsis-${idx}`}
              className="px-2 font-mono text-xs text-[#78716C]"
              aria-hidden="true"
            >
              …
            </span>
          ) : (
            <button
              key={item}
              type="button"
              onClick={() => onPageChange(item)}
              aria-current={item === page ? 'page' : undefined}
              className={`min-h-[36px] min-w-[36px] rounded border px-2.5 py-1.5 font-mono text-xs tabular-nums transition-colors ${
                item === page
                  ? 'border-[#1C1917] bg-[#1C1917] text-[#FBF9F5]'
                  : 'border-[#D6D0C4] text-[#44403C] hover:bg-[#F5F1E9]'
              }`}
            >
              {item.toLocaleString()}
            </button>
          ),
        )}

        <button
          type="button"
          disabled={page >= totalPages}
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          className="inline-flex min-h-[36px] items-center gap-1 rounded border border-[#D6D0C4] px-3 py-1.5 text-xs font-medium text-[#1C1917] disabled:opacity-40 hover:bg-[#F5F1E9]"
        >
          <span>{copy.next}</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </button>

        {totalPages > 7 && (
          <form onSubmit={handleJump} className="ml-1 flex items-center gap-1">
            <input
              type="number"
              min={1}
              max={totalPages}
              value={jumpInput}
              onChange={(e) => setJumpInput(e.target.value)}
              placeholder={`1-${totalPages}`}
              aria-label={copy.jumpToPageLabel}
              className="h-9 w-20 rounded border border-[#D6D0C4] bg-[#FBF9F5] px-2 font-mono text-xs text-[#1C1917] placeholder:text-[#78716C] focus:border-[#1E3A8A] focus:outline-none"
            />
            <button
              type="submit"
              className="h-9 rounded border border-[#D6D0C4] bg-[#F5F1E9] px-2.5 text-xs font-medium text-[#1C1917] hover:border-[#1C1917]"
            >
              {copy.goAction}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
