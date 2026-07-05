# Ben & Issie — Wedding & Engagement Website

Premium editorial engagement/wedding website for benandissie.com.au. Warm cream, olive and soft gold botanical aesthetic, built mobile-first with real photos.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (theme tokens in `src/index.css`)
- React Router
- Supabase-ready backend layer (optional — the site works fully without it)

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
```

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, event summary, story preview, RSVP callout |
| `/engagement-party` | Event details, calendar/map/gift actions |
| `/rsvp` | Full RSVP form |
| `/gifts` | Gift ideas with category filters and reservations |
| `/upload` | Guest photo upload (reviewed before publishing) |
| `/gallery` | Curated photo albums |
| `/our-story` | Story timeline |
| `/faq` | Frequently asked questions |
| `/guestbook` | Guestbook / memory wall |
| `/portal` | Password-gated guest portal (password: `sunflower`) |
| `/admin` | Hidden admin dashboard with CSV exports |

## Editing content

Almost all copy and event details live in one place: `src/data/siteContent.ts`
(dates, venue, dress code, FAQs, story sections, portal password).
Gifts are in `src/data/gifts.ts`, albums in `src/data/albums.ts`.

## Connecting Supabase (optional)

1. Copy `.env.example` to `.env` and fill in:

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

2. Run `database/supabase.sql` in the Supabase SQL Editor.
3. Create a private storage bucket named `guest-photos`.

Without these, RSVPs, gift reservations, uploads and guestbook messages are saved to
localStorage and the site behaves normally. The persistence layer is `src/lib/store.ts`.

## Before launch

- Protect `/admin` (wrap it in `PasswordGate` or Supabase auth).
- Enable Row Level Security using the notes at the bottom of `database/supabase.sql`.
- Replace placeholder event details in `src/data/siteContent.ts`.
