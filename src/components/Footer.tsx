import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { engagementParty, site } from '../data/siteContent';
import { ASSETS } from '../data/assets';
import { GoldDivider } from './GoldDivider';

const footerLinks = [
  { label: 'RSVP', to: '/rsvp' },
  { label: 'Details', to: '/engagement-party' },
  { label: 'Photos', to: '/gallery' },
  { label: 'Gift Ideas', to: '/gifts' },
  { label: 'FAQ', to: '/faq' }
];

const iconLinkClass =
  'rounded-full border border-linen/25 p-2.5 text-linen/80 transition-colors hover:border-gold hover:text-gold';

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 8h2.5V5.5H14c-1.9 0-3.5 1.6-3.5 3.5V11H8v2.5h2.5V19H13v-5.5h2.3L16 11h-3V9c0-.6.4-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-olive text-linen">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-16">
        <div className="grid items-center gap-10 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <img
              src={ASSETS.monogram}
              alt="Ben & Issie"
              className="h-14 w-auto brightness-0 invert opacity-90"
            />
            <p className="text-xs text-linen/55">
              &copy; {new Date().getFullYear()} {site.coupleName}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <p className="font-serif text-xl text-linen sm:text-2xl">{engagementParty.date}</p>
            <GoldDivider className="my-3 max-w-[10rem] opacity-80 brightness-125" />
            <p className="text-sm text-linen/70">
              {engagementParty.venueName}
              <span className="mx-1.5 text-linen/40">·</span>
              Wayville SA
            </p>
            <nav aria-label="Footer" className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-linen/75 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center justify-center gap-4 md:justify-end">
            <a href={`mailto:${site.contactEmail}`} aria-label="Email us" className={iconLinkClass}>
              <Mail size={16} aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="Instagram (coming soon)"
              className={iconLinkClass}
              onClick={(e) => e.preventDefault()}
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              aria-label="Facebook (coming soon)"
              className={iconLinkClass}
              onClick={(e) => e.preventDefault()}
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
