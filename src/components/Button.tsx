import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'outlineLight' | 'ghost' | 'cta' | 'ctaQuiet';

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive disabled:cursor-not-allowed disabled:opacity-50';

const variants: Record<Variant, string> = {
  primary: 'bg-gold text-linen font-bold tracking-[0.12em] hover:bg-[#b88a1f]',
  secondary: 'border border-olive/70 bg-linen/60 text-olive hover:border-olive hover:bg-linen',
  cta: 'min-h-[3.25rem] bg-gold px-8 text-sm font-bold tracking-[0.12em] text-linen hover:bg-[#b88a1f] sm:min-h-[3rem] sm:text-xs',
  ctaQuiet:
    'min-h-[3rem] border border-linen/45 bg-transparent px-6 text-[0.65rem] font-medium tracking-[0.14em] text-linen/80 hover:border-linen/70 hover:bg-linen/10 hover:text-linen sm:min-h-0 sm:py-3',
  outlineLight:
    'border-2 border-linen/85 bg-linen/20 text-linen shadow-[0_2px_14px_rgb(0_0_0_/_0.28)] backdrop-blur-[2px] hover:border-linen hover:bg-linen/35',
  ghost: 'text-olive/80 underline-offset-4 hover:text-olive hover:underline'
};

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant = 'primary', className = '', children, ...rest }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

type ButtonLinkProps = CommonProps & { to: string; external?: boolean };

export function ButtonLink({ variant = 'primary', className = '', to, external, children }: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a className={classes} href={to} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className={classes} to={to}>
      {children}
    </Link>
  );
}
