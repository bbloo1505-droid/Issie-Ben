import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost';

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive disabled:cursor-not-allowed disabled:opacity-50';

const variants: Record<Variant, string> = {
  primary: 'bg-olive text-linen hover:bg-forest',
  secondary: 'border border-olive bg-transparent text-olive hover:bg-olive hover:text-linen',
  ghost: 'text-olive underline-offset-4 hover:underline'
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
