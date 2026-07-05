import type { Album } from '../types';

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
    cover: '/images/optimized/casual-drinks.webp',
    photos: [
      {
        src: '/images/optimized/casual-drinks.webp',
        alt: 'Ben and Issie sharing drinks together',
        aspect: 'portrait'
      }
    ]
  },
  {
    id: 'couple-memories',
    title: 'Couple Memories',
    description: 'Our favourite moments together so far.',
    cover: '/images/optimized/formal-couple.webp',
    photos: [
      {
        src: '/images/optimized/formal-couple.webp',
        alt: 'Ben and Issie dressed for a formal occasion',
        aspect: 'portrait'
      },
      {
        src: '/images/optimized/casual-drinks.webp',
        alt: 'Ben and Issie enjoying casual drinks',
        aspect: 'portrait'
      }
    ]
  },
  {
    id: 'proposal',
    title: 'Proposal',
    description: 'The moment we said yes to forever.',
    cover: '/images/optimized/hero-forest-balcony.webp',
    photos: [
      {
        src: '/images/optimized/hero-forest-balcony.webp',
        alt: 'Ben and Issie on the forest balcony',
        aspect: 'portrait'
      },
      {
        src: '/images/optimized/story-forest-back.webp',
        alt: 'Ben and Issie looking out over the forest',
        aspect: 'portrait'
      }
    ]
  },
  {
    id: 'adventures',
    title: 'Adventures',
    description: 'Trips, laughs and little adventures.',
    cover: '/images/optimized/story-forest-back.webp',
    photos: [
      {
        src: '/images/optimized/story-forest-back.webp',
        alt: 'Ben and Issie in the forest',
        aspect: 'portrait'
      },
      {
        src: '/images/optimized/hero-forest-balcony.webp',
        alt: 'Ben and Issie on a balcony among the trees',
        aspect: 'portrait'
      }
    ]
  },
  {
    id: 'wedding',
    title: 'Wedding',
    description: 'Coming soon — stay tuned for the big day.',
    cover: '/images/optimized/formal-couple.webp',
    photos: [],
    comingSoon: true
  }
];
