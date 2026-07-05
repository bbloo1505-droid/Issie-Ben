import { Link } from 'react-router-dom';
import { CalendarDays, Gift, MapPin, Shirt } from 'lucide-react';
import { ButtonLink } from '../components/Button';
import { GoldDivider } from '../components/GoldDivider';
import { engagementParty, site, story } from '../data/siteContent';
import { ASSETS } from '../data/assets';

function Hero() {
  return (
    <section className="hero-under-arch relative overflow-hidden" aria-label="Welcome">
      <div className="absolute inset-0">
        <img
          src={ASSETS.hero}
          alt="Ben and Issie embracing on a forest balcony"
          className="hero-photo absolute inset-0 h-full w-full"
        />
        <div className="hero-overlay-dark absolute inset-0" aria-hidden="true" />
      </div>

      <div className="relative z-[2] mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-14 pt-[calc(var(--header-total)+2.5rem)] sm:px-8 md:min-h-[100vh] md:justify-center md:pb-20 md:pt-[calc(var(--header-total)+3rem)]">
        <div className="max-w-lg">
          <p className="mb-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-linen/85">
            You&apos;re invited
          </p>
          <h1 className="font-serif text-[clamp(3.25rem,9vw,5.75rem)] font-medium leading-[0.95] tracking-tight text-linen">
            Ben <span className="text-gold">&amp;</span> Issie
          </h1>
          <GoldDivider className="my-5 ml-0 max-w-[11rem]" />
          <p className="font-serif text-2xl italic text-linen/95 sm:text-[1.75rem]">
            {engagementParty.name}
          </p>
          <p className="mt-2 font-serif text-xl text-gold sm:text-2xl">{engagementParty.date}</p>
          <p className="mt-1 text-sm text-linen/75">
            {engagementParty.time}
            <span className="mx-2 text-linen/40">·</span>
            {engagementParty.venueName}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <ButtonLink
              to="/rsvp"
              className="min-w-[10rem] bg-gold px-10 py-3.5 text-forest shadow-soft-lg hover:bg-[#b88a1f]"
            >
              RSVP Now
            </ButtonLink>
            <ButtonLink
              to="/engagement-party"
              variant="secondary"
              className="border-linen/40 bg-transparent text-linen hover:border-linen hover:bg-linen/10"
            >
              View Details
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCards() {
  return (
    <section aria-label="Highlights" className="relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-16">
        <div className="grid gap-6 md:grid-cols-2 md:gap-7">
          {/* Engagement Party */}
          <article className="relative flex flex-col overflow-hidden rounded-xl border border-border-cream bg-linen p-7 shadow-soft sm:p-8">
            <h2 className="font-serif text-2xl tracking-wide text-forest sm:text-[1.65rem]">
              {engagementParty.name}
            </h2>
            <GoldDivider className="my-4 ml-0 max-w-[9rem]" />
            <ul className="flex flex-1 flex-col gap-5 text-sm leading-relaxed text-forest/85">
              <li className="flex gap-3">
                <CalendarDays size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="font-medium text-forest">{engagementParty.date}</p>
                  <p className="mt-0.5 text-muted">{engagementParty.time}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="font-medium text-forest">{engagementParty.venueName}</p>
                  <p className="mt-0.5 text-muted">Wayville, South Australia</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Shirt size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="font-medium text-forest">{engagementParty.dressCode}</p>
                  <p className="mt-0.5 text-muted">{engagementParty.dressCodeNote}</p>
                </div>
              </li>
            </ul>
            <Link
              to="/engagement-party"
              className="mt-7 inline-flex text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:text-earth"
            >
              View All Details →
            </Link>
            <img
              src={ASSETS.oliveRight}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -right-3 w-20 opacity-30"
            />
          </article>

          {/* Gifts */}
          <article className="relative flex flex-col overflow-hidden rounded-xl border border-border-cream bg-linen p-7 shadow-soft sm:p-8">
            <h2 className="font-serif text-2xl tracking-wide text-forest sm:text-[1.65rem]">
              Gifts &amp; Good Wishes
            </h2>
            <GoldDivider className="my-4 ml-0 max-w-[9rem]" />
            <div className="flex flex-1 flex-col">
              <Gift size={22} className="mb-4 text-gold" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-forest/85">
                {engagementParty.giftNote}
              </p>
            </div>
            <Link
              to="/gifts"
              className="mt-7 inline-flex text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:text-earth"
            >
              Gift Ideas →
            </Link>
            <img
              src={ASSETS.sunflowerCluster}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 -right-6 w-28 opacity-55 sm:w-32"
            />
          </article>
        </div>
      </div>
    </section>
  );
}

const favouriteCards = [
  {
    ...story.sections[0],
    image: ASSETS.casualMain,
    imagePos: 'object-center'
  },
  {
    ...story.sections[1],
    image: ASSETS.formalMain,
    imagePos: 'object-top'
  },
  {
    ...story.sections[2],
    image: ASSETS.hero,
    imagePos: 'object-[42%_35%]'
  }
];

function FavouritesSection() {
  return (
    <section aria-label="A few of our favourites" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 pb-14 sm:px-8 md:pb-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="font-serif text-4xl text-forest sm:text-5xl">{story.heading}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{story.intro}</p>
          <GoldDivider className="mt-6 max-w-[12rem]" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {favouriteCards.map((card) => (
            <article
              key={card.title}
              className="shadow-soft flex flex-col overflow-hidden rounded-2xl border border-border-cream bg-linen"
            >
              <figure className="overflow-hidden">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  loading="lazy"
                  className={`aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03] ${card.imagePos}`}
                />
              </figure>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-serif text-2xl text-forest">{card.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
                  {card.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/our-story"
            className="inline-flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-forest transition-colors hover:text-olive"
          >
            Read Our Full Story →
          </Link>
        </div>
      </div>
    </section>
  );
}

function QuoteBand() {
  return (
    <section className="relative overflow-hidden border-t border-border-cream bg-linen">
      <img
        src={ASSETS.oliveLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 -left-4 w-28 opacity-35 sm:w-36"
      />
      <img
        src={ASSETS.oliveRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 -right-4 w-28 opacity-35 sm:w-36"
      />
      <div className="relative mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 md:py-20">
        <blockquote className="font-serif text-3xl italic leading-snug text-forest sm:text-4xl md:text-[2.75rem]">
          <span className="text-gold" aria-hidden="true">
            &ldquo;
          </span>
          Can&apos;t wait to celebrate with you.
          <span className="text-gold" aria-hidden="true">
            &rdquo;
          </span>
        </blockquote>
        <cite className="mt-6 block text-[0.7rem] font-medium uppercase tracking-[0.24em] not-italic text-olive">
          With love, {site.coupleName}
        </cite>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <InfoCards />
      <FavouritesSection />
      <QuoteBand />
    </>
  );
}
