import type { Gift, GiftCategory } from '../types';

export const giftCategories: GiftCategory[] = [
  'All',
  'Under $50',
  '$50–$100',
  '$100+',
  'Experiences',
  'Group Gifts',
  'Wishing Well'
];

export const gifts: Gift[] = [
  {
    id: 'dinnerware-set',
    title: 'Stoneware Dinner Set',
    description: 'A timeless set for future dinners together, and the occasional fancy breakfast.',
    priceLabel: '$89',
    priceValue: 89,
    categories: ['$50–$100'],
    image:
      'https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=900&q=80',
    link: 'https://www.myer.com.au/c/home/dinnerware',
    actionLabel: 'Reserve Gift'
  },
  {
    id: 'olive-tree',
    title: 'Olive Tree',
    description: 'A little tree to grow alongside us. We have the perfect sunny corner waiting.',
    priceLabel: '$45',
    priceValue: 45,
    categories: ['Under $50'],
    image:
      'https://images.unsplash.com/photo-1596205244125-6d0b83ee0e0a?auto=format&fit=crop&w=900&q=80',
    link: 'https://www.bunnings.com.au/search/products?q=olive%20tree',
    actionLabel: 'Reserve Gift'
  },
  {
    id: 'le-creuset-pot',
    title: 'Le Creuset Pot',
    description: "A kitchen classic we'll cook with for decades. Slow Sunday dinners, sorted.",
    priceLabel: '$399',
    priceValue: 399,
    categories: ['$100+', 'Group Gifts'],
    image:
      'https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=900&q=80',
    link: 'https://www.lecreuset.com.au/',
    actionLabel: 'Reserve Gift'
  },
  {
    id: 'coffee-machine',
    title: 'Coffee Machine',
    description: 'For slow mornings and strong coffee, the foundation of any good marriage.',
    priceLabel: '$249',
    priceValue: 249,
    categories: ['$100+', 'Group Gifts'],
    image:
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80',
    link: 'https://www.thegoodguys.com.au/coffee-machines',
    actionLabel: 'Reserve Gift'
  },
  {
    id: 'wine-glass-set',
    title: 'Wine Glass Set',
    description: 'For toasts, date nights and Tuesday evenings that deserve a nice glass.',
    priceLabel: '$65',
    priceValue: 65,
    categories: ['$50–$100'],
    image:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80',
    link: 'https://www.riedel.com/en-au',
    actionLabel: 'Reserve Gift'
  },
  {
    id: 'weekend-getaway',
    title: 'Weekend Getaway Contribution',
    description: 'Help us escape to the hills for a weekend of nature, wine and no phone reception.',
    priceLabel: 'Any amount',
    priceValue: null,
    categories: ['Experiences', 'Group Gifts'],
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    link: '#',
    actionLabel: 'Contribute'
  },
  {
    id: 'hiking-adventure',
    title: 'Hiking Adventure',
    description: 'New trails, questionable navigation, great views. Fuel our next walk in the bush.',
    priceLabel: '$75+',
    priceValue: 75,
    categories: ['$50–$100', 'Experiences'],
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80',
    link: '#',
    actionLabel: 'Reserve Gift'
  },
  {
    id: 'wishing-well',
    title: 'Wishing Well',
    description: 'A contribution towards our honeymoon and the adventures that come after.',
    priceLabel: 'Any amount',
    priceValue: null,
    categories: ['Wishing Well'],
    image:
      'https://images.unsplash.com/photo-1521477448248-9630e85ba52a?auto=format&fit=crop&w=900&q=80',
    link: '#',
    actionLabel: 'Contribute'
  }
];
