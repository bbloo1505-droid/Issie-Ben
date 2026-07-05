import type { EventDetailItem, FaqItem } from '../types';

/**
 * Single source of truth for site copy and event details.
 * Edit values here — the rest of the site reads from this file.
 */

export const site = {
  coupleName: 'Ben & Issie',
  domain: 'benandissie.com.au',
  tagline: 'Our adventure begins',
  intro:
    "We're so excited to celebrate with our favourite people. Find all the details for our engagement party below, and stay tuned for wedding updates.",
  contactEmail: 'hello@benandissie.com.au',
  heroImage: '/images/optimized/hero-forest-balcony.webp',
  guestPortalPassword: 'sunflower'
};

export const engagementParty = {
  name: 'Engagement Party',
  date: 'Saturday 26 July 2025',
  time: '6:00pm – late',
  venueName: 'The Vine Room',
  address: '123 Greenhill Road, Wayville SA 5034',
  dressCode: 'Cocktail',
  dressCodeNote: 'Dress to impress',
  foodAndDrinks:
    'A selection of canapés, grazing stations and desserts will be served, along with wine, beer and non-alcoholic options.',
  parking:
    'Free street parking is available on Greenhill Road and surrounding streets. Please allow a few extra minutes on the night.',
  rsvpDeadline: 'Friday 4 July 2025',
  giftNote:
    "Your presence is the greatest gift of all. If you'd like to help us celebrate further, a few ideas are on our gift list.",
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=123+Greenhill+Road+Wayville+SA+5034',
  // ISO datetimes used to build the "Add to Calendar" file.
  startIso: '2025-07-26T18:00:00+09:30',
  endIso: '2025-07-26T23:30:00+09:30'
};

export const eventDetailItems: EventDetailItem[] = [
  { label: 'Date', value: engagementParty.date, icon: 'calendar' },
  { label: 'Time', value: engagementParty.time, icon: 'clock' },
  {
    label: 'Venue',
    value: engagementParty.venueName,
    note: engagementParty.address,
    icon: 'map-pin'
  },
  {
    label: 'Dress code',
    value: engagementParty.dressCode,
    note: engagementParty.dressCodeNote,
    icon: 'shirt'
  },
  { label: 'Food & drinks', value: engagementParty.foodAndDrinks, icon: 'utensils' },
  { label: 'Parking', value: engagementParty.parking, icon: 'car' },
  { label: 'RSVP by', value: engagementParty.rsvpDeadline, icon: 'mail' },
  { label: 'A note on gifts', value: engagementParty.giftNote, icon: 'gift' }
];

export const story = {
  heading: 'Better together',
  intro:
    "From quiet moments in nature to big adventures and everyday laughs, we can't wait to keep building our life together — with you along for the ride.",
  sections: [
    {
      title: 'How it started',
      body: "It began the way the best things do — without a plan. A shared group of friends, a few too many laughs, and the slow realisation that the person you keep looking for at every gathering might just be the one. Before long, weekends together weren't a coincidence. They were the point.",
      image: '/images/optimized/casual-drinks.webp',
      imageAlt: 'Ben and Issie sharing drinks and laughs together'
    },
    {
      title: 'Favourite memories',
      body: "Long drives with terrible singing, quiet mornings with good coffee, dressing up for the big occasions and dressing down for everything else. Some of our favourite memories aren't the milestones — they're the ordinary days that somehow felt like more.",
      image: '/images/optimized/formal-couple.webp',
      imageAlt: 'Ben and Issie dressed up for a formal occasion'
    },
    {
      title: 'The proposal',
      body: 'Surrounded by tall trees and morning light, with nobody else around — just us, the forest, and one very important question. She said yes before the sentence was finished.',
      image: '/images/optimized/hero-forest-balcony.webp',
      imageAlt: 'Ben and Issie on a forest balcony where the proposal happened'
    },
    {
      title: 'What comes next',
      body: "An engagement party with the people we love most, a wedding we're only just starting to dream up, and a lifetime of adventures in between. We're so glad you're part of it.",
      image: '/images/optimized/story-forest-back.webp',
      imageAlt: 'Ben and Issie looking out over the forest together'
    }
  ]
};

export const faqs: FaqItem[] = [
  {
    question: 'What should I wear?',
    answer:
      "The dress code is cocktail — dress to impress. Think a nice dress, or a shirt and trousers. A jacket is welcome but not required. Most importantly, wear something you can celebrate in."
  },
  {
    question: 'Can I bring a plus-one?',
    answer:
      'Please check your invitation, or add a note in the RSVP form. The guest list is managed by household so we can keep catering accurate — if in doubt, just ask us.'
  },
  {
    question: 'Are children invited?',
    answer:
      "We love your little ones, and children of close family are welcome. If you're planning to bring children, please mention it in your RSVP so we can plan seating and food."
  },
  {
    question: 'Where should I park?',
    answer:
      'Free street parking is available on Greenhill Road and the surrounding streets. Please allow a few extra minutes to find a spot, or consider ride-sharing if you plan to enjoy the drinks.'
  },
  {
    question: 'Will food and drinks be provided?',
    answer:
      'Yes — canapés, grazing stations and desserts will be served throughout the evening, along with wine, beer and non-alcoholic options. Let us know any dietary requirements in your RSVP.'
  },
  {
    question: 'Do I need to bring a gift?',
    answer:
      "Not at all. Your presence is the greatest gift. If you'd like to give a little extra, our gift ideas page has a few things we'd genuinely use — but please don't feel obliged."
  },
  {
    question: 'How do I upload photos?',
    answer:
      'Head to the Upload Photos page, choose an album, and select your photos. Uploads are reviewed by us before appearing in the public gallery, so nothing goes live without a once-over.'
  },
  {
    question: 'Who do I contact with questions?',
    answer:
      "Email us at hello@benandissie.com.au or message either of us directly — whichever is easier. We'd rather answer a quick question than have you wondering."
  },
  {
    question: 'What happens if it rains?',
    answer:
      'The celebration is indoors at The Vine Room, so the weather can do its worst. If anything changes on the night, we will update this site and message guests directly.'
  }
];

export const latestUpdate = {
  title: 'RSVPs are open',
  body: 'Thanks to everyone who has already responded. If you have not RSVPed yet, please do so by Friday 4 July so we can finalise catering.',
  date: 'June 2025'
};
