import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '../components/Button';
import { Flourish, Section, SectionHeading } from '../components/Section';
import { addGuestbookMessage, createId, getLocalGuestbookMessages } from '../lib/store';
import type { GuestbookMessage } from '../types';

const seedMessages: GuestbookMessage[] = [
  {
    id: 'seed-1',
    name: 'Mum & Dad',
    message: 'So proud of you both. Here comes the fun part!',
    marriageAdvice: 'Never stop laughing at each other\u2019s terrible jokes.',
    createdAt: '2025-06-01T10:00:00.000Z'
  },
  {
    id: 'seed-2',
    name: 'The Wilsons',
    message: 'Congratulations! We knew this day was coming from the very first barbecue.',
    favouriteMemory: 'That camping trip where the tent nearly ended up in the river.',
    createdAt: '2025-06-03T10:00:00.000Z'
  }
];

export function GuestbookPage() {
  const [messages, setMessages] = useState<GuestbookMessage[]>(() => [
    ...getLocalGuestbookMessages().reverse(),
    ...seedMessages
  ]);
  const [saving, setSaving] = useState(false);
  const [thanks, setThanks] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const entry: GuestbookMessage = {
      id: createId(),
      name: String(form.get('name') ?? '').trim(),
      message: String(form.get('message') ?? '').trim(),
      favouriteMemory: String(form.get('memory') ?? '').trim() || undefined,
      marriageAdvice: String(form.get('advice') ?? '').trim() || undefined,
      createdAt: new Date().toISOString()
    };
    setSaving(true);
    await addGuestbookMessage(entry);
    setSaving(false);
    setMessages((prev) => [entry, ...prev]);
    setThanks(true);
    event.currentTarget.reset();
  }

  return (
    <Section width="wide">
      <SectionHeading
        eyebrow="Leave a note"
        title="Guestbook"
        intro="Words of wisdom, favourite memories, or just a hello. Leave us a message to look back on for years to come."
      />
      <Flourish />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
        <form
          onSubmit={handleSubmit}
          className="h-fit space-y-5 rounded-lg border border-border-cream bg-linen p-6 sm:p-8"
        >
          <div>
            <label className="field-label" htmlFor="gb-name">
              Your name *
            </label>
            <input id="gb-name" name="name" type="text" required className="field-input" placeholder="e.g. Aunty Sue" />
          </div>
          <div>
            <label className="field-label" htmlFor="gb-message">
              Message *
            </label>
            <textarea
              id="gb-message"
              name="message"
              required
              rows={3}
              className="field-input resize-y"
              placeholder="A note for Issie & Ben…"
            />
          </div>
          <div>
            <label className="field-label" htmlFor="gb-memory">
              Favourite memory
            </label>
            <textarea
              id="gb-memory"
              name="memory"
              rows={2}
              className="field-input resize-y"
              placeholder="A moment with the two of them you'll never forget"
            />
          </div>
          <div>
            <label className="field-label" htmlFor="gb-advice">
              Marriage advice
            </label>
            <textarea
              id="gb-advice"
              name="advice"
              rows={2}
              className="field-input resize-y"
              placeholder="Wisdom for the road ahead"
            />
          </div>
          <Button type="submit" disabled={saving} className="w-full">
            {saving ? 'Sending…' : 'Sign the guestbook'} <Heart size={14} aria-hidden="true" />
          </Button>
          {thanks ? (
            <p className="text-center text-sm text-olive" role="status">
              Thank you. Your message has been added.
            </p>
          ) : null}
        </form>

        <div className="space-y-4">
          {messages.map((entry) => (
            <article key={entry.id} className="rounded-lg border border-border-cream bg-linen p-6">
              <p className="leading-relaxed text-forest">"{entry.message}"</p>
              {entry.favouriteMemory ? (
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  <span className="font-semibold text-earth">Favourite memory:</span>{' '}
                  {entry.favouriteMemory}
                </p>
              ) : null}
              {entry.marriageAdvice ? (
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  <span className="font-semibold text-earth">Advice:</span> {entry.marriageAdvice}
                </p>
              ) : null}
              <p className="mt-4 font-serif text-lg italic text-olive">{entry.name}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
