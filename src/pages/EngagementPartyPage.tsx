import { CalendarPlus, Gift, MapPin } from 'lucide-react';
import { Button, ButtonLink } from '../components/Button';
import { EventInfoCard } from '../components/EventInfoCard';
import { GoldDivider } from '../components/GoldDivider';
import { PageHero } from '../components/PageHero';
import { Section } from '../components/Section';
import { downloadCalendarInvite } from '../lib/calendar';
import { engagementParty, eventDetailItems } from '../data/siteContent';
import { ASSETS } from '../data/assets';

export function EngagementPartyPage() {
  return (
    <>
      <PageHero
        eyebrow="You're invited to our"
        title="Engagement Party"
        intro="Let's celebrate this next chapter together with good food, drinks and even better company."
        image={ASSETS.forestMain}
        imageAlt="Ben and Issie looking out over the forest"
        imagePosition="object-[50%_40%]"
      >
        <ButtonLink to="/rsvp">RSVP</ButtonLink>
        <Button variant="secondary" type="button" onClick={downloadCalendarInvite}>
          <CalendarPlus size={14} aria-hidden="true" /> Add to Calendar
        </Button>
      </PageHero>

      <Section width="wide">
        <div className="grid gap-4 sm:grid-cols-2">
          {eventDetailItems.map((detail) => (
            <EventInfoCard key={detail.label} detail={detail} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/rsvp">RSVP</ButtonLink>
          <Button variant="secondary" type="button" onClick={downloadCalendarInvite}>
            <CalendarPlus size={14} aria-hidden="true" /> Add to Calendar
          </Button>
          <ButtonLink to={engagementParty.mapLink} external variant="secondary">
            <MapPin size={14} aria-hidden="true" /> View Map
          </ButtonLink>
          <ButtonLink to={engagementParty.venueWebsite} external variant="secondary">
            View Venue
          </ButtonLink>
          <ButtonLink to="/gifts" variant="secondary">
            <Gift size={14} aria-hidden="true" /> Gift Ideas
          </ButtonLink>
        </div>
      </Section>

      <section className="relative overflow-hidden border-t border-border-cream bg-linen">
        <img
          src={ASSETS.oliveLeft}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 -left-4 w-28 opacity-25"
        />
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1fr_1.2fr]">
          <figure className="shadow-soft mx-auto w-full max-w-sm overflow-hidden rounded-sm border border-border-cream md:mx-0">
            <img
              src={ASSETS.formalMain}
              alt="Ben and Issie dressed up for a formal occasion"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover object-[50%_20%]"
            />
          </figure>
          <div>
            <p className="eyebrow mb-3">One more thing</p>
            <h2 className="text-4xl text-forest">We hope you can make it</h2>
            <GoldDivider className="my-4 ml-0 max-w-[10rem]" />
            <p className="mt-2 leading-relaxed text-muted">
              This night is all about the people who have been part of our story so far. Come for
              the food, stay for the speeches, and help us celebrate this next chapter in style.
            </p>
            <p className="mt-4 text-sm text-muted">
              Please RSVP by <strong className="text-forest">{engagementParty.rsvpDeadline}</strong>{' '}
              so we can finalise catering.
            </p>
            <div className="mt-7">
              <ButtonLink to="/rsvp">RSVP</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
