# Cursor Build Prompt — Ben & Issie Wedding Website

Build the Ben & Issie engagement/wedding website using this asset pack. Treat the files in this repo as the starting point and improve from them, not as disposable references.

## Objective

Create a premium, editorial wedding website for `benandissie.com.au`. It is initially used for engagement party information, RSVP, gift ideas, and photo uploads. Later it should scale into the wedding hub.

This should feel like:

- Australian garden estate
- Olive grove
- Warm afternoon light
- Understated sunflower details
- Clean editorial layout
- Real couple photos as the emotional centre

This should not feel like:

- Canva wedding invitation
- Clip-art botanical template
- Cartoon frog/sunflower theme
- Generic wedding SaaS dashboard

## Visual direction

Use the included reference images in `/reference-mockups/` as the visual guide, but make the actual implementation cleaner, more responsive, and more production-ready.

Use the real couple photos in `/public/images/optimized/`:

- `hero-forest-balcony.webp` — primary hero image.
- `story-forest-back.webp` — story/gallery/event image.
- `formal-couple.webp` — event/details/gallery image.
- `casual-drinks.webp` — memories/gallery image.

Use botanical assets in `/public/brand/`:

- `ben-issie-mark.svg` for brand mark.
- `olive-branch.svg` for restrained decorative framing.
- `sunflower.svg` as tiny accent only.
- `frog-easter-egg.svg` only as a subtle hidden footer detail or tiny corner accent.

## Pages / sections to build

### Guest-facing MVP

1. Home hero
   - Large real image background.
   - `Ben & Issie` as hero heading.
   - Subtitle: `Our adventure begins`.
   - Primary action: `RSVP Now`.
   - Secondary actions: `Event Details`, `Upload Photos`.

2. Engagement Party
   - Date, time, venue, dress code, food/drinks, RSVP deadline.
   - Add-to-calendar button.
   - View map button placeholder.
   - Gift note.

3. RSVP
   - Name(s)
   - Attending yes/no
   - Number of guests
   - Dietary requirements
   - Song request
   - Message to Ben & Issie
   - Later backend-ready submission.

4. Gift Ideas
   - Gift cards with image, price, description, external link, reserve button.
   - Categories: All Gifts, Under $50, $50–$150, $150+, Experiences, Group Gifts, Wishing Well.
   - Do not make this feel demanding. Copy should say presence is the greatest gift.

5. Photo Upload
   - Large drag/drop upload area.
   - Mobile-first upload button.
   - Albums: Engagement Party, Couple Memories, Proposal, Adventures.
   - Uploaded photos should eventually require approval before public display.

6. FAQ
   - Plus-one rules.
   - Gift expectations.
   - Photo upload.

7. Footer
   - Simple mark.
   - Contact email.
   - Upload photo link.
   - Tiny frog easter egg only.

### Backend-ready features to preserve in code design

Prepare the code so these can be connected later:

- Household RSVP links.
- Guest portal/password gate.
- Gift reservation status.
- Photo upload moderation.
- Guestbook/memory wall.
- Admin dashboard.
- Email reminders.

Do not build a full admin dashboard in the MVP unless requested. Keep architecture ready.

## Non-negotiable quality rules

- Mobile-first. Most guests will use phones.
- Do not overload the page with illustrations.
- Real photos must dominate.
- Sunflower yellow is a small accent, never a main colour.
- Use deep olive for primary buttons and serious UI.
- Use serif display type for romance, sans-serif for clarity.
- Keep copy short and useful.
- Avoid animation unless subtle and purposeful.
- Do not auto-publish guest-uploaded photos.

## Tech preference

Use the current React + Vite + TypeScript structure.

Acceptable additions:

- Supabase client for backend.
- React Hook Form + Zod for form validation.
- Cloudinary/Supabase Storage for photo upload.
- Framer Motion only for subtle fades if it does not make the site heavy.

Avoid:

- Heavy page builders.
- Complex state management.
- Overengineered auth for the first version.

## First tasks in Cursor

1. Run the project.
2. Check mobile responsiveness.
3. Replace placeholder event details in `src/content.ts`.
4. Replace placeholder gift links.
5. Wire RSVP form to Supabase if backend is ready.
6. Wire gift reservation table if backend is ready.
7. Wire photo upload to storage with moderation status.
8. Deploy to Vercel.

## Deployment

Target Vercel deployment.

Environment variables to add later:

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

## Strategic constraint

The site should be beautiful, but the real win is operational leverage. Build it so it reduces admin for Ben and Issie, not just so it looks nice once.
