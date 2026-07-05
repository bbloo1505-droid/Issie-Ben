# Ben & Issie Design System

## Core design direction

Premium editorial wedding website with botanical restraint. Real photos first. Nature details second. No gimmicks.

## Colour palette

| Token | Hex | Use |
|---|---:|---|
| Warm Cream | `#F8F3E8` | Main background |
| White Linen | `#FFFDF7` | Cards/forms |
| Deep Forest | `#263226` | Text/headings |
| Deep Olive | `#4F5A32` | Buttons/nav/footer |
| Soft Olive | `#7C8052` | Secondary accents |
| Soft Sage | `#B9BE9A` | Section washes |
| Sunflower Gold | `#C99A24` | Tiny accents only |
| Border Cream | `#E7DDC9` | Borders/dividers |
| Muted Text | `#756F62` | Body/supporting copy |

## Colour ratio

- 65% warm cream / white linen
- 20% deep forest / olive
- 10% muted sage / border tones
- 5% sunflower gold

Do not use sunflower gold as a background except tiny decorative strips or icons.

## Typography

Display/headings:

- `Cormorant Garamond`
- fallback: Georgia, serif

Body/UI:

- `Inter`
- fallback: system sans-serif

Rules:

- Hero heading: very large serif, tight line-height.
- Section headings: serif, elegant, not bold-heavy.
- Navigation/buttons: small uppercase sans-serif with letter spacing.
- Body copy: readable, not tiny.

## Layout rules

- Large hero with real image.
- Strong left-aligned desktop hero.
- Mobile hero should keep text readable above image overlay.
- Use generous spacing.
- Cards should be simple and breathable.
- Avoid rounded-pill overload. Slight radius or square editorial cards are better.
- Use subtle borders instead of heavy shadows.

## Botanical rules

Sunflowers:

- Use as small accents in the logo, dividers, and footer.
- Avoid giant sunflower illustrations except maybe one low-opacity footer detail.

Olives:

- Use olive branches as elegant corner/framing elements.
- Keep opacity low.
- Do not put olive branches on every card.

Frog:

- Use only as a tiny easter egg.
- Best places: bottom-left hero, footer, or hidden guest portal detail.
- Never use as a main logo element.

## Photo rules

Use real photos wherever possible.

Hero:

- `hero-forest-balcony.webp`
- Apply cream/olive gradient overlay for readability.
- Do not distort faces or bodies.

Story/gallery:

- Use `story-forest-back.webp`, `formal-couple.webp`, `casual-drinks.webp`.
- Crop with `object-fit: cover` only.

## Components

### Buttons

Primary:

- Deep olive background.
- White linen text.
- Uppercase small sans-serif.

Secondary:

- Transparent/linen background.
- Deep olive border.

### Forms

- White linen card.
- Thin cream border.
- Large touch targets.
- Clear labels.
- Mobile-first.

### Gift cards

- Image first.
- Title, short note, price.
- `View` and `Reserve Gift` actions.
- Reserve status later.

### Photo upload

- One obvious button: `Choose Photos`.
- Drag/drop secondary.
- Show upload limits.
- Albums beneath.

## Copy tone

Warm, direct, not overdone.

Good:

> Your presence is the greatest gift. If you’d like to give a little extra, we’ve put together a few ideas we’d love.

Bad:

> We are eternally blessed by your love and light on this magical journey.

Keep it human.
