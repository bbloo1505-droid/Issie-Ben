import { useState } from 'react';
import { Check, ExternalLink } from 'lucide-react';
import type { Gift } from '../types';
import { createId, reserveGift } from '../lib/store';
import { Button } from './Button';

type GiftCardProps = {
  gift: Gift;
  reserved: boolean;
  onReserved: (giftId: string) => void;
};

export function GiftCard({ gift, reserved, onReserved }: GiftCardProps) {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [saving, setSaving] = useState(false);

  async function handleReserve(event: React.FormEvent) {
    event.preventDefault();
    setSaving(true);
    await reserveGift({
      id: createId(),
      giftId: gift.id,
      giftTitle: gift.title,
      reservedByName: name.trim(),
      reservedByEmail: email.trim() || undefined,
      reservedAt: new Date().toISOString()
    });
    setSaving(false);
    setShowForm(false);
    onReserved(gift.id);
  }

  return (
    <article className="shadow-soft flex flex-col overflow-hidden rounded-lg border border-border-cream/70 bg-linen transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft-lg">
      <div className="relative aspect-square overflow-hidden bg-cream sm:aspect-[4/3]">
        <img
          src={gift.image}
          alt={gift.title}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-500 hover:scale-[1.04] ${
            reserved ? 'opacity-60 saturate-50' : ''
          }`}
        />
        {reserved ? (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-forest/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-linen">
            <Check size={12} aria-hidden="true" /> Reserved
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-2xl text-forest">{gift.title}</h3>
          <p className="shrink-0 text-sm font-semibold text-earth">{gift.priceLabel}</p>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{gift.description}</p>

        {showForm && !reserved ? (
          <form onSubmit={handleReserve} className="mt-4 space-y-3">
            <div>
              <label className="field-label" htmlFor={`${gift.id}-name`}>
                Your name *
              </label>
              <input
                id={`${gift.id}-name`}
                className="field-input"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="So we know who to thank"
              />
            </div>
            <div>
              <label className="field-label" htmlFor={`${gift.id}-email`}>
                Email (optional)
              </label>
              <input
                id={`${gift.id}-email`}
                className="field-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>
            <div className="flex gap-2">
              <Button type="submit" disabled={saving} className="flex-1 !px-4 !py-2.5">
                {saving ? 'Saving…' : 'Confirm'}
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="!px-4 !py-2.5"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <div className="mt-5 flex items-center gap-4 border-t border-border-cream pt-4">
            <Button
              type="button"
              disabled={reserved}
              onClick={() => setShowForm(true)}
              className="flex-1 !px-5 !py-3"
            >
              {reserved ? 'Reserved' : gift.actionLabel}
            </Button>
            {gift.link !== '#' ? (
              <a
                href={gift.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-olive underline-offset-4 transition-colors hover:text-forest hover:underline"
              >
                View <ExternalLink size={12} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        )}
      </div>
    </article>
  );
}
