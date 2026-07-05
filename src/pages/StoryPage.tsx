import { Flourish, Section, SectionHeading } from '../components/Section';
import { ButtonLink } from '../components/Button';
import { story } from '../data/siteContent';

export function StoryPage() {
  return (
    <>
      <Section width="wide">
        <SectionHeading eyebrow="Our story" title={story.heading} intro={story.intro} />
        <Flourish />

        <div className="space-y-16 md:space-y-24">
          {story.sections.map((section, index) => (
            <article
              key={section.title}
              className={`grid items-center gap-8 md:grid-cols-2 ${
                index % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="overflow-hidden rounded-lg border border-border-cream">
                <img
                  src={section.image}
                  alt={section.imageAlt}
                  loading="lazy"
                  className="h-80 w-full object-cover md:h-[26rem]"
                />
              </div>
              <div className="md:px-6">
                <p className="eyebrow mb-3">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="text-4xl text-forest">{section.title}</h2>
                <p className="mt-4 leading-relaxed text-muted">{section.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="border-t border-border-cream bg-sage/20">
        <div className="mx-auto max-w-2xl px-5 py-14 text-center sm:px-8">
          <h2 className="text-4xl text-forest">Be part of the next chapter</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            The engagement party is where it all begins. We'd love you there.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/rsvp">RSVP Now</ButtonLink>
            <ButtonLink to="/engagement-party" variant="secondary">
              Event Details
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
