import type { ReactNode } from 'react';
import { GoldDivider } from './GoldDivider';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  children?: ReactNode;
};

/** Shared page header: editorial title with optional photo panel. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = '',
  imagePosition = 'object-[50%_30%]',
  children
}: PageHeroProps) {
  return (
    <div className="border-b border-border-cream bg-cream">
      <div
        className={`mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 sm:px-8 md:py-16 ${
          image ? 'md:grid-cols-2' : ''
        }`}
      >
        <div className={image ? '' : 'mx-auto max-w-2xl text-center'}>
          {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
          <h1 className="text-5xl leading-tight text-forest sm:text-6xl">{title}</h1>
          <GoldDivider className={`my-4 max-w-[11rem] ${image ? 'ml-0' : ''}`} />
          {intro ? <p className="mt-2 max-w-lg leading-relaxed text-muted">{intro}</p> : null}
          {children ? <div className="mt-7 flex flex-wrap gap-3">{children}</div> : null}
        </div>
        {image ? (
          <figure className="shadow-soft overflow-hidden rounded-sm border border-border-cream">
            <img
              src={image}
              alt={imageAlt}
              loading="eager"
              className={`h-72 w-full object-cover md:h-96 ${imagePosition}`}
            />
          </figure>
        ) : null}
      </div>
    </div>
  );
}
