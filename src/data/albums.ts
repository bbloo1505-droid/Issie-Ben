import type { Album } from '../types';
import { ASSETS } from './assets';

/** Albums highlighted on the homepage category row. */
export const featuredAlbumIds = ['couple-memories', 'proposal', 'engagement-party'] as const;

export const galleryHome = {
  heading: 'Photos & Moments',
  intro:
    'Browse our favourite albums, from everyday laughs to the proposal and the celebrations ahead.'
};

export const albumNames = [
  'Engagement Party',
  'Couple Memories',
  'Proposal',
  'Adventures',
  'Wedding',
  'Honeymoon'
] as const;

export const albums: Album[] = [
  {
    id: 'engagement-party',
    title: 'Engagement Party',
    description: 'Photos from our celebration with family and friends.',
    cover: ASSETS.casualMain,
    photos: [
      {
        src: ASSETS.casualMain,
        alt: 'Issie and Ben sharing drinks together',
        aspect: 'landscape'
      },
      {
        src: ASSETS.formalMain,
        alt: 'Issie and Ben smiling together',
        aspect: 'portrait'
      },
      {
        src: ASSETS.hero,
        alt: 'Issie and Ben embracing on the balcony',
        aspect: 'landscape'
      }
    ]
  },
  {
    id: 'couple-memories',
    title: 'Couple Memories',
    description: 'Our favourite moments together so far.',
    cover: ASSETS.formalMain,
    photos: [
      {
        src: ASSETS.formalMain,
        alt: 'Issie and Ben dressed for a formal occasion',
        aspect: 'portrait'
      },
      {
        src: ASSETS.casualMain,
        alt: 'Issie and Ben enjoying casual drinks',
        aspect: 'landscape'
      },
      {
        src: ASSETS.hero,
        alt: 'Issie and Ben embracing on the forest balcony',
        aspect: 'landscape'
      }
    ]
  },
  {
    id: 'proposal',
    title: 'Proposal',
    description: 'The moment we said yes to forever.',
    cover: ASSETS.hero,
    photos: [
      {
        src: ASSETS.hero,
        alt: 'Issie and Ben embracing after the proposal',
        aspect: 'landscape'
      },
      {
        src: ASSETS.formalMain,
        alt: 'Issie and Ben smiling together after the proposal',
        aspect: 'portrait'
      }
    ]
  },
  {
    id: 'adventures',
    title: 'Adventures',
    description: 'Trips, laughs and little adventures.',
    cover: ASSETS.casualMain,
    photos: [
      {
        src: ASSETS.casualMain,
        alt: 'Issie and Ben out for drinks together',
        aspect: 'landscape'
      },
      {
        src: ASSETS.hero,
        alt: 'Issie and Ben on a forest balcony',
        aspect: 'landscape'
      },
      {
        src: ASSETS.formalMain,
        alt: 'Issie and Ben dressed up for a night out',
        aspect: 'portrait'
      }
    ]
  },
  {
    id: 'wedding',
    title: 'Wedding',
    description: 'Coming soon. Stay tuned for the big day.',
    cover: ASSETS.formalMain,
    photos: [],
    comingSoon: true
  }
];
