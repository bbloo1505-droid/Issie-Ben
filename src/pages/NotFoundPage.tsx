import { ButtonLink } from '../components/Button';
import { GoldDivider } from '../components/GoldDivider';
import { Section } from '../components/Section';
import { ASSETS } from '../data/assets';

export function NotFoundPage() {
  return (
    <Section width="narrow" className="text-center">
      <img
        src={ASSETS.monogram}
        alt=""
        aria-hidden="true"
        className="mx-auto h-16 w-auto opacity-80"
      />
      <h1 className="mt-6 text-5xl text-forest">Page not found</h1>
      <GoldDivider className="my-5 max-w-[10rem]" />
      <p className="text-muted">This page doesn&apos;t exist — but our celebration does.</p>
      <div className="mt-8">
        <ButtonLink to="/">Back to home</ButtonLink>
      </div>
    </Section>
  );
}
