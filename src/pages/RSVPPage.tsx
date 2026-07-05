import { Flourish, Section } from '../components/Section';
import { RSVPForm } from '../components/RSVPForm';
import { engagementParty } from '../data/siteContent';

export function RSVPPage() {
  return (
    <Section width="narrow">
      <div className="text-center">
        <p className="eyebrow mb-3">Kindly respond</p>
        <h1 className="text-5xl text-forest sm:text-6xl">RSVP</h1>
        <p className="mt-3 font-serif text-xl italic text-olive">
          We can't wait to celebrate with you!
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
          Please fill out the form below to let us know if you'll be joining us. RSVP by{' '}
          {engagementParty.rsvpDeadline}.
        </p>
      </div>
      <div className="my-8">
        <Flourish />
      </div>
      <RSVPForm />
    </Section>
  );
}
