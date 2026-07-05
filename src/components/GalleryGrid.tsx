import type { AlbumPhoto } from '../types';
import { photoFocusClass } from '../lib/photoFocus';

type GalleryGridProps = {
  photos: AlbumPhoto[];
  emptyMessage?: string;
};

export function GalleryGrid({
  photos,
  emptyMessage = 'No photos here yet. Check back after the celebrations.'
}: GalleryGridProps) {
  if (photos.length === 0) {
    return (
      <p className="rounded-xl border border-border-cream bg-linen px-6 py-16 text-center text-sm text-muted">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {photos.map((photo) => (
        <figure
          key={photo.src + photo.alt}
          className="group relative overflow-hidden rounded-xl border border-border-cream bg-linen shadow-soft"
        >
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
              photo.aspect === 'portrait'
                ? `aspect-[3/4] ${photoFocusClass(photo.src)}`
                : photo.aspect === 'square'
                  ? `aspect-square ${photoFocusClass(photo.src)}`
                  : `aspect-[4/3] ${photoFocusClass(photo.src)}`
            }`}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-forest/0 opacity-0 transition-all duration-300 group-hover:bg-forest/35 group-hover:opacity-100">
            <span className="rounded-md border border-border-cream bg-cream/95 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-forest shadow-soft">
              View Photo
            </span>
          </div>
        </figure>
      ))}
    </div>
  );
}
