import { useState } from 'react';
import { GiftCard } from '../components/GiftCard';
import { Flourish, Section, SectionHeading } from '../components/Section';
import { giftCategories, gifts } from '../data/gifts';
import { getReservedGiftIds } from '../lib/store';
import type { GiftCategory } from '../types';

export function GiftsPage() {
  const [activeCategory, setActiveCategory] = useState<GiftCategory>('All');
  const [reservedIds, setReservedIds] = useState<Set<string>>(() => getReservedGiftIds());

  const visibleGifts =
    activeCategory === 'All'
      ? gifts
      : gifts.filter((gift) => gift.categories.includes(activeCategory));

  function handleReserved(giftId: string) {
    setReservedIds((prev) => new Set(prev).add(giftId));
  }

  return (
    <Section width="wide">
      <SectionHeading
        eyebrow="Thank you"
        title="Gift Ideas"
        intro="Your presence is the greatest gift of all. If you'd like to give a little extra, we've put together a few ideas we'd genuinely use as we start this next chapter together."
      />
      <Flourish />

      <div
        className="mb-12 flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Filter gifts by category"
      >
        {giftCategories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
              activeCategory === category
                ? 'border-olive bg-olive text-linen'
                : 'border-border-cream bg-linen text-forest hover:border-sage'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {visibleGifts.map((gift) => (
          <GiftCard
            key={gift.id}
            gift={gift}
            reserved={reservedIds.has(gift.id)}
            onReserved={handleReserved}
          />
        ))}
      </div>

      {visibleGifts.length === 0 ? (
        <p className="rounded-lg border border-border-cream bg-linen p-10 text-center text-sm text-muted">
          Nothing in this category yet.
        </p>
      ) : null}
    </Section>
  );
}
