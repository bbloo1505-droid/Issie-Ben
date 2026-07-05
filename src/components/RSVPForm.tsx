import { useState } from 'react';
import { Heart } from 'lucide-react';
import { createId, submitRsvp } from '../lib/store';
import { engagementParty } from '../data/siteContent';
import { Button } from './Button';
import { GoldDivider } from './GoldDivider';

export function RSVPForm() {
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [attending, setAttending] = useState<'yes' | 'no' | ''>('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setSaving(true);
    await submitRsvp({
      id: createId(),
      guestNames: String(form.get('guestNames') ?? '').trim(),
      email: String(form.get('email') ?? '').trim(),
      phone: String(form.get('phone') ?? '').trim() || undefined,
      attending: form.get('attending') === 'yes',
      guestCount: Number(form.get('guestCount') ?? 1),
      householdGuests: String(form.get('householdGuests') ?? '').trim() || undefined,
      dietaryRequirements: String(form.get('dietary') ?? '').trim() || undefined,
      songRequest: String(form.get('song') ?? '').trim() || undefined,
      message: String(form.get('message') ?? '').trim() || undefined,
      plusOneNote: String(form.get('plusOne') ?? '').trim() || undefined,
      childrenNote: String(form.get('children') ?? '').trim() || undefined,
      submittedAt: new Date().toISOString()
    });
    setSaving(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-border-cream bg-linen p-10 text-center shadow-soft">
        <GoldDivider className="max-w-[10rem]" />
        <h2 className="mt-4 text-3xl text-forest">Thank you</h2>
        <p className="mt-2 text-muted">Your RSVP has been received.</p>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted">
          We can't wait to celebrate with you. If anything changes, just submit the form again or
          send us a message.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-lg border border-border-cream bg-linen p-6 sm:p-9"
    >
      <div>
        <label className="field-label" htmlFor="guestNames">
          Your name(s) *
        </label>
        <input
          id="guestNames"
          name="guestNames"
          type="text"
          required
          className="field-input"
          placeholder="e.g. Jack & Emily Smith"
          autoComplete="name"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="field-input"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="phone">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="field-input"
            placeholder="04xx xxx xxx"
            autoComplete="tel"
          />
        </div>
      </div>

      <fieldset>
        <legend className="field-label">Will you be attending? *</legend>
        <div className="mt-1 flex flex-col gap-2 sm:flex-row sm:gap-6">
          <label className="flex cursor-pointer items-center gap-2.5 text-sm text-forest">
            <input
              type="radio"
              name="attending"
              value="yes"
              required
              checked={attending === 'yes'}
              onChange={() => setAttending('yes')}
              className="h-4 w-4 accent-olive"
            />
            Yes, can't wait!
          </label>
          <label className="flex cursor-pointer items-center gap-2.5 text-sm text-forest">
            <input
              type="radio"
              name="attending"
              value="no"
              checked={attending === 'no'}
              onChange={() => setAttending('no')}
              className="h-4 w-4 accent-olive"
            />
            Sorry, can't make it
          </label>
        </div>
      </fieldset>

      {attending !== 'no' ? (
        <>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="field-label" htmlFor="guestCount">
                Number of guests attending *
              </label>
              <select
                id="guestCount"
                name="guestCount"
                required
                defaultValue=""
                className="field-input"
              >
                <option value="" disabled>
                  Please select
                </option>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="field-label" htmlFor="householdGuests">
                Names of guests in your household
              </label>
              <input
                id="householdGuests"
                name="householdGuests"
                type="text"
                className="field-input"
                placeholder="e.g. Jack, Emily, Sophie"
              />
            </div>
          </div>

          <div>
            <label className="field-label" htmlFor="dietary">
              Dietary requirements
            </label>
            <input
              id="dietary"
              name="dietary"
              type="text"
              className="field-input"
              placeholder="e.g. vegetarian, gluten free, allergies"
            />
          </div>

          <div>
            <label className="field-label" htmlFor="song">
              Song request
            </label>
            <input
              id="song"
              name="song"
              type="text"
              className="field-input"
              placeholder="What song will get you on the dance floor?"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="field-label" htmlFor="plusOne">
                Plus-one note
              </label>
              <input
                id="plusOne"
                name="plusOne"
                type="text"
                className="field-input"
                placeholder="Bringing someone? Tell us who"
              />
            </div>
            <div>
              <label className="field-label" htmlFor="children">
                Children attending
              </label>
              <input
                id="children"
                name="children"
                type="text"
                className="field-input"
                placeholder="Names and ages, if applicable"
              />
            </div>
          </div>
        </>
      ) : null}

      <div>
        <label className="field-label" htmlFor="message">
          Message to Issie &amp; Ben
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="field-input resize-y"
          placeholder="Share your well wishes, advice, or a favourite memory…"
        />
      </div>

      <div className="flex flex-col items-center gap-3 pt-2">
        <Button type="submit" disabled={saving} className="w-full sm:w-auto sm:min-w-56">
          {saving ? 'Sending…' : 'Submit RSVP'} <Heart size={14} aria-hidden="true" />
        </Button>
        <p className="text-xs text-muted">Please RSVP by {engagementParty.rsvpDeadline}</p>
      </div>
    </form>
  );
}
