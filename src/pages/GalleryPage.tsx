import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Camera } from 'lucide-react';
import { ButtonLink } from '../components/Button';
import { GalleryGrid } from '../components/GalleryGrid';
import { GoldDivider } from '../components/GoldDivider';
import { albums } from '../data/albums';
import { ASSETS } from '../data/assets';

/** Album filters shown in the reference — honeymoon stays out of the tab row for now. */
const galleryTabs = albums.filter((album) => album.id !== 'honeymoon');

export function GalleryPage() {
  const [searchParams] = useSearchParams();
  const albumFromUrl = searchParams.get('album');

  const [activeId, setActiveId] = useState(() => {
    if (albumFromUrl && galleryTabs.some((a) => a.id === albumFromUrl)) {
      return albumFromUrl;
    }
    return galleryTabs.find((a) => a.id === 'couple-memories')?.id ?? galleryTabs[0]?.id ?? '';
  });

  const activeAlbum = useMemo(
    () => galleryTabs.find((album) => album.id === activeId) ?? galleryTabs[0],
    [activeId]
  );

  const photos = activeAlbum?.photos ?? [];

  return (
    <div className="bg-cream">
      <section className="border-b border-border-cream">
        <div className="relative mx-auto max-w-3xl px-5 py-14 text-center sm:px-8 md:py-16">
          <img
            src={ASSETS.oliveLeft}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -left-2 top-6 hidden w-20 opacity-25 lg:block"
          />
          <img
            src={ASSETS.oliveRight}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 top-6 hidden w-20 opacity-25 lg:block"
          />

          <p className="eyebrow mb-3">Memories</p>
          <h1 className="font-serif text-5xl leading-tight text-forest sm:text-6xl">
            Photos &amp; Moments
          </h1>
          <GoldDivider className="my-6 max-w-[12rem]" />
          <p className="mx-auto max-w-lg text-sm leading-relaxed text-muted sm:text-base">
            A small collection of our favourite photos, and a place for you to share yours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 md:py-12">
        <div
          className="mb-10 flex flex-wrap justify-center gap-2.5"
          role="tablist"
          aria-label="Photo albums"
        >
          {galleryTabs.map((album) => {
            const isActive = album.id === activeId;
            return (
              <button
                key={album.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(album.id)}
                className={`rounded-md border px-4 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] transition-colors sm:px-5 ${
                  isActive
                    ? 'border-gold bg-gold text-forest'
                    : 'border-border-cream bg-linen text-forest hover:border-sage'
                }`}
              >
                {album.title}
              </button>
            );
          })}
        </div>

        <GalleryGrid
          photos={photos}
          emptyMessage={
            activeAlbum?.comingSoon
              ? 'Coming soon. We can’t wait to fill this album.'
              : 'No photos here yet. Check back after the celebrations.'
          }
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border-cream bg-linen px-6 py-10 text-center shadow-soft sm:px-10">
            <p className="font-serif text-2xl italic text-forest sm:text-3xl">
              Were you there too?
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
              Share your photos from the engagement party and beyond. We&apos;d love to see the night
              through your eyes.
            </p>
            <div className="mt-6">
              <ButtonLink to="/upload" variant="secondary">
                <Camera size={14} aria-hidden="true" /> Upload photos
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-xl border border-border-cream bg-linen px-6 py-10 text-center shadow-soft sm:px-10">
            <p className="font-serif text-2xl italic text-forest sm:text-3xl">
              Photo Scavenger Hunt
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
              Not sure what to capture? Try our party prompts, then upload your favourites.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <ButtonLink to="/photo-scavenger-hunt" variant="secondary">
                See the prompts
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
