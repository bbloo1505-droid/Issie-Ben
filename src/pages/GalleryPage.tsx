import { useState } from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import { AlbumCard } from '../components/AlbumCard';
import { ButtonLink } from '../components/Button';
import { GalleryGrid } from '../components/GalleryGrid';
import { Flourish, Section, SectionHeading } from '../components/Section';
import { albums } from '../data/albums';
import type { Album } from '../types';

export function GalleryPage() {
  const [openAlbum, setOpenAlbum] = useState<Album | null>(null);

  if (openAlbum) {
    return (
      <Section width="wide">
        <button
          type="button"
          onClick={() => setOpenAlbum(null)}
          className="mb-8 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-olive underline-offset-4 hover:underline"
        >
          <ArrowLeft size={14} aria-hidden="true" /> All albums
        </button>
        <SectionHeading title={openAlbum.title} intro={openAlbum.description} align="left" />
        <GalleryGrid photos={openAlbum.photos} />
      </Section>
    );
  }

  return (
    <Section width="wide">
      <SectionHeading
        eyebrow="Relive the moments"
        title="Photos"
        intro="Curated albums from our story so far — with more to come after each celebration."
      />
      <Flourish />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} onOpen={setOpenAlbum} />
        ))}
      </div>
      <div className="mt-12 rounded-lg border border-border-cream bg-linen p-8 text-center">
        <p className="font-serif text-2xl italic text-forest">Were you there too?</p>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted">
          Share your photos from the engagement party and beyond — we'd love to see the night
          through your eyes.
        </p>
        <div className="mt-5">
          <ButtonLink to="/upload" variant="secondary">
            <Camera size={14} aria-hidden="true" /> Upload photos
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
