import { Link } from 'react-router-dom';
import { Camera, CalendarDays, Gift, Mail, MapPin, Sparkles } from 'lucide-react';
import { ButtonLink } from '../components/Button';
import { PasswordGate } from '../components/PasswordGate';
import { Section } from '../components/Section';
import { engagementParty, latestUpdate, site } from '../data/siteContent';

function PortalContent() {
  const shortcuts = [
    {
      to: '/gifts',
      icon: Gift,
      title: 'Gift list',
      description: 'Browse and reserve gift ideas.'
    },
    {
      to: '/upload',
      icon: Camera,
      title: 'Upload photos',
      description: 'Share your photos from the night.'
    },
    {
      to: '/engagement-party',
      icon: MapPin,
      title: 'Event details',
      description: 'Venue, parking, dress code and more.'
    }
  ];

  return (
    <Section width="wide">
      <div className="mb-10 text-center">
        <p className="eyebrow mb-3">Welcome back</p>
        <h1 className="text-5xl text-forest sm:text-6xl">Guest Portal</h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          Everything you need for the celebrations, all in one place.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* RSVP status — wired to guest-specific links later */}
        <article className="rounded-lg border border-border-cream bg-linen p-6 lg:col-span-2">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
            Your RSVP
          </p>
          <h2 className="mt-2 text-3xl text-forest">We haven't heard from you yet</h2>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
            Once guest links are live, your RSVP status will appear here. For now, use the RSVP
            form — it only takes a minute.
          </p>
          <div className="mt-5">
            <ButtonLink to="/rsvp">RSVP Now</ButtonLink>
          </div>
        </article>

        <article className="rounded-lg border border-gold/30 bg-gold/10 p-6">
          <p className="inline-flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-earth">
            <Sparkles size={13} aria-hidden="true" /> Latest update
          </p>
          <h2 className="mt-2 text-2xl text-forest">{latestUpdate.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">{latestUpdate.body}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.14em] text-earth">{latestUpdate.date}</p>
        </article>

        <article className="rounded-lg border border-border-cream bg-linen p-6 lg:col-span-2">
          <p className="inline-flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
            <CalendarDays size={13} aria-hidden="true" /> Event details
          </p>
          <h2 className="mt-2 text-3xl text-forest">{engagementParty.name}</h2>
          <dl className="mt-4 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-forest">Date &amp; time</dt>
              <dd className="text-muted">
                {engagementParty.date}, {engagementParty.time}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-forest">Venue</dt>
              <dd className="text-muted">
                {engagementParty.venueName}, {engagementParty.address}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-forest">Dress code</dt>
              <dd className="text-muted">
                {engagementParty.dressCode} — {engagementParty.dressCodeNote}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-forest">RSVP by</dt>
              <dd className="text-muted">{engagementParty.rsvpDeadline}</dd>
            </div>
          </dl>
        </article>

        <div className="space-y-4">
          {shortcuts.map((shortcut) => {
            const Icon = shortcut.icon;
            return (
              <Link
                key={shortcut.to}
                to={shortcut.to}
                className="flex items-start gap-4 rounded-lg border border-border-cream bg-linen p-5 transition-colors hover:border-sage"
              >
                <Icon size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  <span className="block font-serif text-xl text-forest">{shortcut.title}</span>
                  <span className="mt-0.5 block text-sm text-muted">{shortcut.description}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-muted">
        Questions?{' '}
        <a className="inline-flex items-center gap-1.5 font-medium text-olive underline-offset-4 hover:underline" href={`mailto:${site.contactEmail}`}>
          <Mail size={13} aria-hidden="true" /> {site.contactEmail}
        </a>
      </p>
    </Section>
  );
}

export function PortalPage() {
  return (
    <PasswordGate
      password={site.guestPortalPassword}
      storageKey="bi_portal_unlocked"
      title="Guest Portal"
      hint="Hint: it's yellow, and it follows the sun."
    >
      <PortalContent />
    </PasswordGate>
  );
}
