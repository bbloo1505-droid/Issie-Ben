import { ButtonLink } from '../components/Button';
import { Section } from '../components/Section';

export function NotFoundPage() {
  return (
    <Section width="narrow" className="text-center">
      <img src="/brand/frog-easter-egg.svg" alt="" aria-hidden="true" className="mx-auto h-12 w-auto opacity-60" />
      <h1 className="mt-6 text-5xl text-forest">Page not found</h1>
      <p className="mt-3 text-muted">
        Looks like you've hopped somewhere that doesn't exist.
      </p>
      <div className="mt-8">
        <ButtonLink to="/">Back to home</ButtonLink>
      </div>
    </Section>
  );
}
