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
    <article className="flex flex-col overflow-hidden rounded-lg border border-border-cream bg-linen transition-shadow duration-200 hover:shadow-md hover:shadow-sage/30">
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        <img
          src={gift.image}
          alt={gift.title}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03] ${
            reserved ? 'opacity-60 saturate-50' : ''
          }`}
        />
        {reserved ? (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-forest/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-linen">
            <Check size={12} aria-hidden="true" /> Reserved
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-2xl text-forest">{gift.title}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{gift.description}</p>
        <p className="mt-3 text-sm font-semibold text-earth">{gift.priceLabel}</p>

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
          <div className="mt-4 flex gap-2">
            {gift.link !== '#' ? (
              <a
                href={gift.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-olive px-4 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-olive transition-colors hover:bg-olive hover:text-linen"
              >
                View item <ExternalLink size={12} aria-hidden="true" />
              </a>
            ) : null}
            <Button
              type="button"
              disabled={reserved}
              onClick={() => setShowForm(true)}
              className="flex-1 !px-4 !py-2.5"
            >
              {reserved ? 'Reserved' : gift.actionLabel}
            </Button>
          </div>
        )}
      </div>
    </article>
  );
}
