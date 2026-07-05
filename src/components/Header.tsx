import { useState } from 'react';
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

function navClass({ isActive }: { isActive: boolean }) {
  return `relative pb-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] transition-colors ${
    isActive
      ? 'text-gold after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gold'
      : 'text-forest/80 hover:text-forest'
  }`;
}

/** Cream bar with a shallow downward arch — monogram sits in the crest (desktop). */
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

  return (
    <header className={`header-cutout z-40 ${open ? 'header-cutout--open' : ''}`}>
      <div className="header-arch-fill" aria-hidden="true">
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

      <div className="header-bar-row relative z-[2] mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 sm:px-8 lg:px-10">
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
          className="header-monogram col-start-2 flex justify-center"
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

        <button
          type="button"
          className="absolute right-4 top-1/2 z-[3] -translate-y-1/2 rounded-md p-2 text-forest lg:hidden sm:right-8"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <nav className="header-mobile-menu lg:hidden" aria-label="Mobile">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
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
