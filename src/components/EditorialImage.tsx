import { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  aspectClass?: string;
  className?: string;
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  aspectClass = 'aspect-[4/3]',
  className = '',
  priority = false,
}: EditorialImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#EBE6DF] ${aspectClass} ${className}`}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-300 ease-out"
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#EBE6DF] to-[#DFD8CD] p-6 text-center text-[#57534E]"
          role="img"
          aria-label={alt}
        >
          <BookOpen className="h-7 w-7 text-[#78716C]" strokeWidth={1.5} />
          <p className="max-w-xs text-xs leading-relaxed text-[#57534E]">{alt}</p>
        </div>
      )}
    </div>
  );
}
