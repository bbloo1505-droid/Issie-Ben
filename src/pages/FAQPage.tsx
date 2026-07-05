import { ChevronDown } from 'lucide-react';
import { Flourish, Section, SectionHeading } from '../components/Section';
import { faqs, site } from '../data/siteContent';

export function FAQPage() {
  return (
    <Section width="narrow">
      <SectionHeading
        eyebrow="Need to know"
        title="Frequently Asked Questions"
        intro="Everything you might be wondering before the big night. Still unsure about something? Just ask us."
      />
      <Flourish />
      <div className="space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-lg border border-border-cream bg-linen open:shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-serif text-xl text-forest [&::-webkit-details-marker]:hidden">
              {faq.question}
              <ChevronDown
                size={18}
                aria-hidden="true"
                className="shrink-0 text-olive transition-transform duration-200 group-open:rotate-180"
              />
            </summary>
            <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{faq.answer}</p>
          </details>
        ))}
      </div>
      <p className="mt-10 text-center text-sm text-muted">
        Anything else?{' '}
        <a className="font-medium text-olive underline-offset-4 hover:underline" href={`mailto:${site.contactEmail}`}>
          {site.contactEmail}
        </a>
      </p>
    </Section>
  );
}
