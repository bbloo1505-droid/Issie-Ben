import type { Album } from '../types';
import { ASSETS } from './assets';

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
        alt: 'Ben and Issie sharing drinks together',
        aspect: 'landscape'
      },
      {
        src: ASSETS.formalMain,
        alt: 'Ben and Issie smiling together',
        aspect: 'portrait'
      },
      {
        src: ASSETS.hero,
        alt: 'Ben and Issie embracing on the balcony',
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
        alt: 'Ben and Issie dressed for a formal occasion',
        aspect: 'portrait'
      },
      {
        src: ASSETS.casualMain,
        alt: 'Ben and Issie enjoying casual drinks',
        aspect: 'landscape'
      },
      {
        src: ASSETS.hero,
        alt: 'Ben and Issie embracing on the forest balcony',
        aspect: 'landscape'
      },
      {
        src: ASSETS.forestMain,
        alt: 'Ben and Issie looking out over the forest',
        aspect: 'landscape'
      }
    ]
  },
  {
    id: 'proposal',
    title: 'Proposal',
    description: 'The moment we said yes to forever.',
    cover: ASSETS.forestMain,
    photos: [
      {
        src: ASSETS.forestMain,
        alt: 'Ben and Issie on the forest balcony',
        aspect: 'landscape'
      },
      {
        src: ASSETS.hero,
        alt: 'Ben and Issie embracing after the proposal',
        aspect: 'landscape'
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
        alt: 'Ben and Issie out for drinks together',
        aspect: 'landscape'
      },
      {
        src: ASSETS.forestMain,
        alt: 'Ben and Issie in the forest',
        aspect: 'landscape'
      },
      {
        src: ASSETS.hero,
        alt: 'Ben and Issie on a forest balcony',
        aspect: 'landscape'
      }
    ]
  },
  {
    id: 'wedding',
    title: 'Wedding',
    description: 'Coming soon — stay tuned for the big day.',
    cover: ASSETS.formalMain,
    photos: [],
    comingSoon: true
  }
];
