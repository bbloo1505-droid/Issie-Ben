import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
};

/** Shared page header: editorial title with optional photo panel. */
export function PageHero({ eyebrow, title, intro, image, imageAlt = '', children }: PageHeroProps) {
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
          {intro ? <p className="mt-4 max-w-lg leading-relaxed text-muted">{intro}</p> : null}
          {children ? <div className="mt-7 flex flex-wrap gap-3">{children}</div> : null}
        </div>
        {image ? (
          <div className="overflow-hidden rounded-lg border border-border-cream">
            <img
              src={image}
              alt={imageAlt}
              loading="eager"
              className="h-72 w-full object-cover md:h-96"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
