import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ASSETS } from '../data/assets';

const leftNav = [
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Details', to: '/engagement-party' }
];

const rightNav = [
  { label: 'Photos', to: '/gallery' },
  { label: 'RSVP', to: '/rsvp' },
  { label: 'Gift Ideas', to: '/gifts' },
  { label: 'FAQ', to: '/faq' }
];

const allNav = [...leftNav, ...rightNav];

const SCROLL_THRESHOLD = 56;

function navClass({ isActive }: { isActive: boolean }) {
  return `relative pb-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] transition-colors ${
    isActive
      ? 'text-gold after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gold'
      : 'text-forest/80 hover:text-forest'
  }`;
}

/** Cream bar with a shallow downward arch — monogram sits in the crest. */
function HeaderArch({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`header-arch-shape ${className}`}
      viewBox="0 0 1200 160"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0 0 H1200 V100 H750
           C720 100 675 148 600 148
           C525 148 480 100 450 100
           H0 Z"
      />
    </svg>
  );
}

/** Compact scalloped crest for mobile — shown at page top only. */
function MobileHeaderArch() {
  return (
    <svg
      className="header-mobile-arch-shape"
      viewBox="0 0 400 88"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0 0 H400 V52 H268
           C252 52 232 82 200 82
           C168 82 148 52 132 52
           H0 Z"
      />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('header-menu-open', open);
    return () => document.body.classList.remove('header-menu-open');
  }, [open]);

  const showMobileArch = !scrolled && !open;

  return (
    <header
      className={[
        'header-cutout z-40',
        scrolled || open ? 'header-cutout--scrolled' : 'header-cutout--at-top',
        open ? 'header-cutout--open' : ''
      ].join(' ')}
    >
      <div className="header-arch-fill header-arch-fill--desktop" aria-hidden="true">
        <HeaderArch />
      </div>

      {showMobileArch ? (
        <div className="header-arch-fill header-arch-fill--mobile" aria-hidden="true">
          <MobileHeaderArch />
        </div>
      ) : null}

      <img
        src={ASSETS.oliveLeft}
        alt=""
        aria-hidden="true"
        className="header-olive header-olive--left"
      />
      <img
        src={ASSETS.oliveRight}
        alt=""
        aria-hidden="true"
        className="header-olive header-olive--right"
      />

      <div className="header-bar-row relative z-[2] mx-auto grid max-w-6xl grid-cols-[2.75rem_1fr_2.75rem] items-center gap-2 px-4 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-4 lg:px-10">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-forest lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
        </button>

        <nav
          className="hidden items-center justify-end gap-7 lg:flex"
          aria-label="Primary left"
        >
          {leftNav.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClass} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/"
          aria-label="Ben and Issie — home"
          onClick={() => setOpen(false)}
          className="header-monogram col-start-2 row-start-1 flex justify-center lg:col-start-2"
        >
          <img src={ASSETS.monogram} alt="Ben & Issie" className="header-monogram-img" />
        </Link>

        <nav
          className="hidden items-center justify-start gap-7 lg:flex"
          aria-label="Primary right"
        >
          {rightNav.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="h-10 w-10 lg:hidden" aria-hidden="true" />
      </div>

      {open ? (
        <nav className="header-mobile-menu lg:hidden" aria-label="Mobile">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-8">
            {allNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-3 text-sm font-medium ${
                      isActive ? 'bg-linen text-gold' : 'text-forest hover:bg-linen'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
