import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LockKeyhole, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Event Details', to: '/engagement-party' },
  { label: 'RSVP', to: '/rsvp' },
  { label: 'Gift Ideas', to: '/gifts' },
  { label: 'Photos', to: '/gallery' },
  { label: 'FAQ', to: '/faq' }
];

export function Header() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-colors ${
      isActive ? 'text-gold' : 'text-forest hover:text-olive'
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-border-cream bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link to="/" aria-label="Ben and Issie — home" onClick={() => setOpen(false)}>
          <img src="/brand/ben-issie-mark.svg" alt="Ben & Issie" className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/portal"
            className="hidden items-center gap-2 rounded-md bg-olive px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-linen transition-colors hover:bg-forest sm:inline-flex"
          >
            <LockKeyhole size={14} aria-hidden="true" />
            Guest Portal
          </Link>
          <button
            type="button"
            className="inline-flex rounded-md p-2 text-forest lg:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="border-t border-border-cream bg-linen px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2.5 text-sm font-medium ${
                      isActive ? 'bg-cream text-gold' : 'text-forest hover:bg-cream'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/portal"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-md bg-olive px-3 py-2.5 text-center text-sm font-medium text-linen"
              >
                Guest Portal
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
