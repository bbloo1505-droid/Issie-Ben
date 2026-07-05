import type { LucideIcon } from 'lucide-react';
import {
  Camera,
  Disc3,
  Handshake,
  Heart,
  Smile,
  Sparkles,
  Sun
} from 'lucide-react';
import { ButtonLink } from '../components/Button';
import { GoldDivider } from '../components/GoldDivider';
import { Section } from '../components/Section';
import { ASSETS } from '../data/assets';

type HuntPrompt = {
  number: number;
  text: string;
  icon: LucideIcon;
};

const prompts: HuntPrompt[] = [
  { number: 1, text: 'Take a photo with someone you just met', icon: Handshake },
  { number: 2, text: 'Capture the best-dressed guest', icon: Sparkles },
  { number: 3, text: 'Get a photo of Ben laughing', icon: Smile },
  { number: 4, text: 'Take a photo of Issie with family', icon: Heart },
  { number: 5, text: 'Capture the dance floor', icon: Disc3 },
  { number: 6, text: 'Find a sunflower detail', icon: Sun },
  { number: 7, text: 'Snap the couple when they\u2019re not posing', icon: Camera }
];

export function PhotoScavengerHuntPage() {
  return (
    <div className="relative overflow-hidden bg-cream">
      <section className="relative border-b border-border-cream">
        <img
          src={ASSETS.oliveLeft}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-3 top-8 w-20 opacity-30 sm:w-24"
        />
        <img
          src={ASSETS.oliveRight}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-3 top-8 w-20 opacity-30 sm:w-24"
        />

        <div className="relative mx-auto max-w-3xl px-5 py-14 text-center sm:px-8 md:py-16">
          <p className="eyebrow mb-3">Engagement party</p>
          <h1 className="font-serif text-4xl leading-tight text-forest sm:text-5xl md:text-6xl">
            Photo Scavenger Hunt
          </h1>
          <GoldDivider className="my-6 max-w-[12rem]" />
          <p className="mx-auto max-w-lg text-sm leading-relaxed text-muted sm:text-base">
            Help us capture the little moments we might miss.
          </p>
        </div>
      </section>

      <Section width="wide" className="!pt-10 md:!pt-12">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
          {prompts.map((prompt) => {
            const Icon = prompt.icon;
            return (
              <article
                key={prompt.number}
                className="relative flex flex-col rounded-xl border border-border-cream bg-linen p-4 shadow-soft sm:p-5 md:p-6"
              >
                <div className="mb-3 flex items-start justify-between gap-2">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-olive text-[0.7rem] font-bold text-linen sm:h-8 sm:w-8 sm:text-xs"
                    aria-hidden="true"
                  >
                    {prompt.number}
                  </span>
                  <Icon size={18} className="shrink-0 text-gold sm:size-5" aria-hidden="true" />
                </div>
                <p className="text-[0.8rem] leading-snug text-forest sm:text-sm md:text-[0.95rem]">
                  {prompt.text}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-md text-center sm:mt-14">
          <ButtonLink to="/upload" variant="cta" className="w-full sm:w-auto">
            Upload Your Photos
          </ButtonLink>
          <p className="mt-5 font-serif text-lg italic text-muted sm:text-xl">
            We can&apos;t wait to see your perspective.
          </p>
        </div>
      </Section>
    </div>
  );
}
