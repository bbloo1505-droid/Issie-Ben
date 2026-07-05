import type { Album } from '../types';

type AlbumCardProps = {
  album: Album;
  onOpen?: (album: Album) => void;
};

export function AlbumCard({ album, onOpen }: AlbumCardProps) {
  const clickable = !album.comingSoon && onOpen;
  return (
    <article
      className={`shadow-soft group overflow-hidden rounded-lg border border-border-cream/70 bg-linen transition-all duration-300 ${
        clickable ? 'cursor-pointer hover:-translate-y-0.5 hover:shadow-soft-lg' : ''
      }`}
      onClick={clickable ? () => onOpen(album) : undefined}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') onOpen(album);
            }
          : undefined
      }
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        <img
          src={album.cover}
          alt={`${album.title} album cover`}
          loading="lazy"
          className={`h-full w-full object-cover object-[50%_35%] transition-transform duration-500 group-hover:scale-[1.04] ${
            album.comingSoon ? 'opacity-50 saturate-50' : ''
          }`}
        />
        {album.comingSoon ? (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full bg-forest/85 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-linen">
              Coming soon
            </span>
          </span>
        ) : null}
      </div>
      <div className="p-5">
        <h3 className="text-2xl text-forest">{album.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">{album.description}</p>
        {!album.comingSoon ? (
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            {album.photos.length} photo{album.photos.length === 1 ? '' : 's'}
          </p>
        ) : null}
      </div>
    </article>
  );
}
