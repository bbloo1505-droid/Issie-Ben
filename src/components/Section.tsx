import type { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  className?: string;
  width?: 'default' | 'narrow' | 'wide';
  id?: string;
};

const widths = {
  default: 'max-w-5xl',
  narrow: 'max-w-2xl',
  wide: 'max-w-6xl'
};

export function Section({ children, className = '', width = 'default', id }: SectionProps) {
  return (
    <section id={id} className={`px-5 py-14 sm:px-8 md:py-20 ${className}`}>
      <div className={`mx-auto ${widths[width]}`}>{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, intro, align = 'center' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`mb-10 max-w-2xl ${alignment}`}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="text-4xl text-forest sm:text-5xl">{title}</h2>
      {intro ? <p className="mt-4 leading-relaxed text-muted">{intro}</p> : null}
    </div>
  );
}

/** Small sunflower divider used between heading and content. */
export function Flourish() {
  return (
    <div className="mb-8 flex items-center justify-center gap-3" aria-hidden="true">
      <span className="h-px w-12 bg-border-cream" />
      <img src="/brand/sunflower.svg" alt="" className="h-4 w-4 opacity-80" />
      <span className="h-px w-12 bg-border-cream" />
    </div>
  );
}
