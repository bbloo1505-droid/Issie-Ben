import { Link } from 'react-router-dom';
import { Camera, Mail } from 'lucide-react';
import { site } from '../data/siteContent';

export function Footer() {
  return (
    <footer className="relative bg-olive text-linen">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-3xl">{site.coupleName}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-linen/80">
              We can't wait to celebrate this special moment with our favourite people.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sage">
              Quick links
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <li><Link className="hover:text-gold" to="/rsvp">RSVP</Link></li>
              <li><Link className="hover:text-gold" to="/engagement-party">Event Details</Link></li>
              <li><Link className="hover:text-gold" to="/gifts">Gift Ideas</Link></li>
              <li><Link className="hover:text-gold" to="/gallery">Photos</Link></li>
              <li><Link className="hover:text-gold" to="/faq">FAQ</Link></li>
              <li><Link className="hover:text-gold" to="/upload">Upload Photos</Link></li>
              <li><Link className="hover:text-gold" to="/our-story">Our Story</Link></li>
              <li><Link className="hover:text-gold" to="/guestbook">Guestbook</Link></li>
            </ul>
          </nav>
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sage">
              Get in touch
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  className="inline-flex items-center gap-2 hover:text-gold"
                  href={`mailto:${site.contactEmail}`}
                >
                  <Mail size={15} aria-hidden="true" /> {site.contactEmail}
                </a>
              </li>
              <li>
                <Link className="inline-flex items-center gap-2 hover:text-gold" to="/upload">
                  <Camera size={15} aria-hidden="true" /> Share your photos
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-linen/15 pt-6">
          <p className="text-xs text-linen/60">
            {site.domain} — made with love (and a few sunflowers)
          </p>
          {/* Tiny frog easter egg — hover to say hello */}
          <img
            src="/brand/frog-easter-egg.svg"
            alt=""
            aria-hidden="true"
            title="Ribbit."
            className="h-5 w-auto opacity-25 transition-opacity duration-300 hover:opacity-90"
          />
        </div>
      </div>
    </footer>
  );
}
