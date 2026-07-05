import { CalendarPlus, Gift, MapPin } from 'lucide-react';
import { Button, ButtonLink } from '../components/Button';
import { EventInfoCard } from '../components/EventInfoCard';
import { PageHero } from '../components/PageHero';
import { Section } from '../components/Section';
import { downloadCalendarInvite } from '../lib/calendar';
import { engagementParty, eventDetailItems } from '../data/siteContent';

export function EngagementPartyPage() {
  return (
    <>
      <PageHero
        eyebrow="You're invited to our"
        title="Engagement Party"
        intro="Let's celebrate this next chapter together with good food, drinks and even better company."
        image="/images/optimized/story-forest-back.webp"
        imageAlt="Ben and Issie looking out over the forest"
      >
        <ButtonLink to="/rsvp">RSVP Now</ButtonLink>
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
          <ButtonLink to="/rsvp">RSVP Now</ButtonLink>
          <Button variant="secondary" type="button" onClick={downloadCalendarInvite}>
            <CalendarPlus size={14} aria-hidden="true" /> Add to Calendar
          </Button>
          <ButtonLink to={engagementParty.mapLink} external variant="secondary">
            <MapPin size={14} aria-hidden="true" /> View Map
          </ButtonLink>
          <ButtonLink to="/gifts" variant="secondary">
            <Gift size={14} aria-hidden="true" /> Gift Ideas
          </ButtonLink>
        </div>
      </Section>

      <section className="border-t border-border-cream bg-sage/20">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-5 py-14 sm:px-8 md:grid-cols-[1fr_1.2fr]">
          <div className="overflow-hidden rounded-lg border border-border-cream">
            <img
              src="/images/optimized/formal-couple.webp"
              alt="Ben and Issie dressed up for a formal occasion"
              loading="lazy"
              className="h-80 w-full object-cover object-top md:h-96"
            />
          </div>
          <div>
            <p className="eyebrow mb-3">One more thing</p>
            <h2 className="text-4xl text-forest">We hope you can make it</h2>
            <p className="mt-4 leading-relaxed text-muted">
              This night is all about the people who have been part of our story so far. Come for
              the food, stay for the speeches, and help us kick off the road to the wedding in
              style.
            </p>
            <p className="mt-4 text-sm text-muted">
              Please RSVP by <strong className="text-forest">{engagementParty.rsvpDeadline}</strong>{' '}
              so we can finalise catering.
            </p>
            <div className="mt-7">
              <ButtonLink to="/rsvp">RSVP Now</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
