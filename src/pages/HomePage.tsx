import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ButtonLink } from '../components/Button';
import { Section, SectionHeading, Flourish } from '../components/Section';
import { engagementParty, site, story } from '../data/siteContent';

function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden" aria-label="Welcome">
      <div className="absolute inset-0">
        <img
          src={site.heroImage}
          alt="Ben and Issie together on a forest balcony"
          className="hero-photo absolute inset-0 h-full w-full"
        />
        <div className="hero-overlay-left absolute inset-0" aria-hidden="true" />
        <div className="hero-overlay-edge absolute inset-0" aria-hidden="true" />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl items-end px-5 pb-14 pt-32 sm:px-8 sm:pb-20 md:pb-24">
        <div className="max-w-lg md:max-w-xl">
          <p className="eyebrow mb-5">You're invited</p>
          <h1 className="font-serif text-[clamp(3.25rem,8vw,5.75rem)] leading-[0.98] tracking-tight text-forest">
            Ben <span className="italic text-gold">&amp;</span> Issie
          </h1>
          <span
            className="mt-7 block h-px w-16 bg-gold/70"
            aria-hidden="true"
          />
          <p className="mt-6 font-serif text-[1.65rem] leading-snug italic text-olive sm:text-[1.85rem]">
            {site.tagline}
          </p>
          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-forest/90">
            {site.intro}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <ButtonLink
              to="/rsvp"
              className="min-w-[10.5rem] bg-forest px-8 py-3.5 shadow-md shadow-forest/20 hover:bg-olive"
            >
              RSVP Now <ChevronRight size={15} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              to="/engagement-party"
              variant="secondary"
              className="border-forest/35 bg-linen/40 px-6 py-3 text-forest backdrop-blur-[2px] hover:border-forest hover:bg-linen/70"
            >
              View Details
            </ButtonLink>
            <ButtonLink
              to="/upload"
              variant="ghost"
              className="px-2 py-3 text-forest/80 hover:text-forest"
            >
              Upload Photos
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventSummaryStrip() {
  const items = [
    { label: 'Engagement Party', value: 'Join us to celebrate' },
    { label: 'Date & time', value: `${engagementParty.date}, ${engagementParty.time}` },
    { label: 'Venue', value: `${engagementParty.venueName}, ${engagementParty.address}` },
    { label: 'Dress code', value: `${engagementParty.dressCode} — ${engagementParty.dressCodeNote}` }
  ];
  return (
    <section aria-label="Event summary" className="border-y border-border-cream bg-linen">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold">
              {item.label}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-forest">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function StoryPreview() {
  const preview = story.sections.slice(0, 3);
  return (
    <Section width="wide">
      <SectionHeading
        eyebrow="Our story"
        title={story.heading}
        intro={story.intro}
      />
      <Flourish />
      <div className="grid gap-6 md:grid-cols-3">
        {preview.map((section) => (
          <Link
            key={section.title}
            to="/our-story"
            className="group overflow-hidden rounded-lg border border-border-cream bg-linen transition-shadow duration-200 hover:shadow-md hover:shadow-sage/30"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={section.image}
                alt={section.imageAlt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5">
              <h3 className="text-2xl text-forest">{section.title}</h3>
              <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">
                {section.body}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/our-story"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-olive underline-offset-4 hover:underline"
        >
          Read our full story <ChevronRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}

function QuoteBand() {
  return (
    <section className="relative overflow-hidden bg-sage/25">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
        <blockquote className="font-serif text-3xl italic leading-snug text-forest sm:text-4xl">
          "The best things in life are better together."
        </blockquote>
        <cite className="mt-4 block text-[0.7rem] font-semibold uppercase tracking-[0.22em] not-italic text-olive">
          — Ben &amp; Issie
        </cite>
      </div>
      <img
        src="/brand/olive-branch.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 bottom-0 w-44 opacity-20"
      />
    </section>
  );
}

function RsvpCallout() {
  return (
    <Section>
      <div className="rounded-lg border border-border-cream bg-linen p-10 text-center sm:p-14">
        <p className="eyebrow mb-3">Kindly respond</p>
        <h2 className="text-4xl text-forest sm:text-5xl">Will you join us?</h2>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">
          Please RSVP by {engagementParty.rsvpDeadline} so we can plan for a great night.
        </p>
        <div className="mt-8">
          <ButtonLink to="/rsvp" className="min-w-52 bg-forest hover:bg-olive">
            RSVP Now
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <EventSummaryStrip />
      <StoryPreview />
      <QuoteBand />
      <RsvpCallout />
    </>
  );
}
