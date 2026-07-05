import { GoldDivider } from '../components/GoldDivider';
import { Section } from '../components/Section';
import { RSVPForm } from '../components/RSVPForm';
import { engagementParty } from '../data/siteContent';

export function RSVPPage() {
  return (
    <Section width="narrow">
      <div className="text-center">
        <p className="eyebrow mb-3">Kindly respond</p>
        <h1 className="text-5xl text-forest sm:text-6xl">RSVP</h1>
        <GoldDivider className="my-5 max-w-[11rem]" />
        <p className="font-serif text-xl italic text-olive">
          We can&apos;t wait to celebrate with you!
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
          Please fill out the form below to let us know if you&apos;ll be joining us. RSVP by{' '}
          {engagementParty.rsvpDeadline}.
        </p>
      </div>
      <div className="mt-10">
        <RSVPForm />
      </div>
    </Section>
  );
}
