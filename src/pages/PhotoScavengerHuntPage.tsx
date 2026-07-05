import type { LucideIcon } from 'lucide-react';
import { Camera, Heart, Music, Smile, Sparkles, Sun, Wine } from 'lucide-react';
import { ButtonLink } from '../components/Button';
import { GoldDivider } from '../components/GoldDivider';
import { ASSETS } from '../data/assets';
import { site } from '../data/siteContent';

type HuntPrompt = {
  number: number;
  text: string;
  icon: LucideIcon;
  wide?: boolean;
};

const prompts: HuntPrompt[] = [
  { number: 1, text: 'Take a photo with someone you just met', icon: Wine },
  { number: 2, text: 'Capture the best-dressed guest', icon: Sparkles },
  { number: 3, text: 'Get a photo of Ben laughing', icon: Smile },
  { number: 4, text: 'Take a photo of Issie with family', icon: Heart },
  { number: 5, text: 'Capture the dance floor', icon: Music },
  { number: 6, text: 'Find a sunflower detail', icon: Sun },
  { number: 7, text: 'Snap the couple when they\u2019re not posing', icon: Camera, wide: true }
];

function HuntCard({ prompt }: { prompt: HuntPrompt }) {
  const Icon = prompt.icon;

  return (
    <article
      className={`relative flex min-h-[9.5rem] flex-col border border-border-cream bg-linen px-4 pb-5 pt-4 sm:min-h-[10.5rem] sm:px-5 sm:pb-6 sm:pt-5 ${
        prompt.wide ? 'col-span-2' : ''
      }`}
    >
      <span
        className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-olive font-serif text-sm font-medium text-linen sm:h-8 sm:w-8 sm:text-base"
        aria-hidden="true"
      >
        {prompt.number}
      </span>

      <div
        className={`flex flex-1 flex-col items-center justify-center pt-5 text-center ${
          prompt.wide ? 'sm:flex-row sm:items-center sm:gap-6 sm:pt-4 sm:text-left' : ''
        }`}
      >
        <Icon
          size={prompt.wide ? 36 : 32}
          strokeWidth={1.35}
          className="shrink-0 text-gold"
          aria-hidden="true"
        />
        <p
          className={`mt-3 font-serif text-[0.95rem] leading-snug text-forest sm:text-base ${
            prompt.wide ? 'sm:mt-0 sm:max-w-md sm:text-lg' : 'max-w-[11rem]'
          }`}
        >
          {prompt.text}
        </p>
      </div>
    </article>
  );
}

export function PhotoScavengerHuntPage() {
  return (
    <div className="relative overflow-hidden bg-cream">
      {/* Title */}
      <section className="relative px-5 pb-2 pt-10 sm:px-8 sm:pt-12 md:pt-14">
        <img
          src={ASSETS.oliveLeft}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-2 w-[5.5rem] opacity-90 sm:w-28 md:w-32"
        />
        <img
          src={ASSETS.oliveRight}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-2 w-[5.5rem] opacity-90 sm:w-28 md:w-32"
        />

        <div className="relative mx-auto max-w-lg px-2 text-center">
          <h1 className="font-serif text-[2.35rem] leading-tight text-forest sm:text-5xl md:text-[3.25rem]">
            Photo Scavenger Hunt
          </h1>
          <GoldDivider className="my-5 max-w-[10rem]" />
          <p className="font-serif text-lg italic leading-relaxed text-forest/85 sm:text-xl">
            Help us capture the little moments we might miss.
          </p>
        </div>
      </section>

      {/* Grid + sunflower */}
      <section className="relative mx-auto max-w-md px-5 pb-6 sm:max-w-xl sm:px-8 md:max-w-2xl">
        <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
          {prompts.map((prompt) => (
            <HuntCard key={prompt.number} prompt={prompt} />
          ))}

          <img
            src={ASSETS.sunflowerCluster}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 -right-4 z-10 w-36 sm:-bottom-10 sm:-right-6 sm:w-44 md:w-48"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-[1] mx-auto max-w-md px-5 pb-16 pt-4 sm:max-w-xl sm:px-8 sm:pb-20">
        <GoldDivider className="mb-8 max-w-[10rem]" />

        <ButtonLink
          to="/upload"
          variant="ctaOlive"
          className="w-full rounded-lg font-serif text-sm tracking-[0.14em] sm:text-base"
        >
          Upload Your Photos
        </ButtonLink>

        <p className="mt-5 flex items-center justify-center gap-2 text-center font-serif text-base italic text-muted sm:text-lg">
          <Heart size={14} className="shrink-0 fill-gold text-gold" aria-hidden="true" />
          We can&apos;t wait to see your perspective.
        </p>
      </section>

      {/* In-page sign-off band — matches reference before site footer */}
      <section
        aria-label="Sign-off"
        className="border-t border-olive-deep/30 bg-olive px-5 py-10 text-center sm:py-12"
      >
        <p className="font-serif text-xs uppercase tracking-[0.28em] text-linen/90 sm:text-sm">
          With love, {site.coupleName}
        </p>
        <GoldDivider className="mt-4 max-w-[8rem] opacity-80 brightness-125" />
      </section>
    </div>
  );
}
