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
  return `header-nav-link relative inline-flex items-center py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] transition-colors ${
    isActive
      ? 'text-gold after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gold'
      : 'text-forest/80 hover:text-forest'
  }`;
}

/** Cream bar with a shallow downward arch — monogram sits in the crest. */
function HeaderArch() {
  return (
    <svg
      className="header-arch-shape"
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

      {/* Desktop — nav in the flat bar; monogram crest absolutely centred */}
      <div className="header-desktop hidden lg:block">
        <div className="header-bar-row relative z-[3] mx-auto grid max-w-6xl grid-cols-[1fr_9.5rem_1fr] items-center gap-6 px-10 xl:grid-cols-[1fr_10.5rem_1fr] xl:gap-8">
          <nav className="flex items-center justify-end gap-6 xl:gap-7" aria-label="Primary left">
            {leftNav.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div aria-hidden="true" />

          <nav className="flex items-center justify-start gap-6 xl:gap-7" aria-label="Primary right">
            {rightNav.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <Link
          to="/"
          aria-label="Ben and Issie — home"
          onClick={() => setOpen(false)}
          className="header-monogram header-monogram--desktop pointer-events-auto absolute left-1/2 top-0 z-[2] -translate-x-1/2"
        >
          <img src={ASSETS.monogram} alt="Ben & Issie" className="header-monogram-img" />
        </Link>
      </div>

      {/* Mobile — hamburger | wordmark | crest */}
      <div className="header-mobile relative z-[2] lg:hidden">
        <div className="header-bar-row mx-auto grid max-w-6xl grid-cols-[2.75rem_1fr_2.75rem] items-center gap-2 px-4 sm:px-8">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-forest"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
          </button>

          <Link
            to="/"
            aria-label="Ben and Issie — home"
            onClick={() => setOpen(false)}
            className="header-mobile-wordmark justify-self-center font-serif text-[1.2rem] leading-none tracking-wide text-forest sm:text-[1.35rem]"
          >
            Ben <span className="text-gold">&amp;</span> Issie
          </Link>

          <Link
            to="/"
            aria-label="Ben and Issie — home"
            onClick={() => setOpen(false)}
            className="header-mobile-crest justify-self-end"
          >
            <img src={ASSETS.monogram} alt="" aria-hidden="true" className="header-mobile-crest-img" />
          </Link>
        </div>
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
