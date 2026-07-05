import type { AlbumPhoto } from '../types';

export function GalleryGrid({ photos }: { photos: AlbumPhoto[] }) {
  if (photos.length === 0) {
    return (
      <p className="rounded-lg border border-border-cream bg-linen p-10 text-center text-sm text-muted">
        No photos here yet — check back after the celebrations.
      </p>
    );
  }

  return (
    <div className="columns-2 gap-4 md:columns-3 [&>figure]:mb-4">
      {photos.map((photo) => (
        <figure
          key={photo.src + photo.alt}
          className="overflow-hidden rounded-lg border border-border-cream bg-linen break-inside-avoid"
        >
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className="w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
          />
        </figure>
      ))}
    </div>
  );
}
