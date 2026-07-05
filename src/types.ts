export type GiftCategory =
  | 'All'
  | 'Under $50'
  | '$50–$100'
  | '$100+'
  | 'Experiences'
  | 'Group Gifts'
  | 'Wishing Well';

export type Gift = {
  id: string;
  title: string;
  description: string;
  priceLabel: string;
  priceValue: number | null;
  categories: GiftCategory[];
  image: string;
  link: string;
  actionLabel: 'Reserve Gift' | 'Contribute';
};

export type Album = {
  id: string;
  title: string;
  description: string;
  cover: string;
  photos: AlbumPhoto[];
  comingSoon?: boolean;
};

export type AlbumPhoto = {
  src: string;
  alt: string;
  aspect?: 'portrait' | 'landscape' | 'square';
};

export type RsvpSubmission = {
  id: string;
  guestNames: string;
  email: string;
  phone?: string;
  attending: boolean;
  guestCount: number;
  householdGuests?: string;
  dietaryRequirements?: string;
  songRequest?: string;
  message?: string;
  plusOneNote?: string;
  childrenNote?: string;
  submittedAt: string;
};

export type GiftReservation = {
  id: string;
  giftId: string;
  giftTitle: string;
  reservedByName: string;
  reservedByEmail?: string;
  message?: string;
  reservedAt: string;
};

export type PhotoUploadRecord = {
  id: string;
  album: string;
  uploaderName: string;
  fileNames: string[];
  fileCount: number;
  status: 'pending' | 'approved' | 'hidden';
  uploadedAt: string;
};

export type GuestbookMessage = {
  id: string;
  name: string;
  message: string;
  favouriteMemory?: string;
  marriageAdvice?: string;
  createdAt: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type EventDetailItem = {
  label: string;
  value: string;
  note?: string;
  icon:
    | 'calendar'
    | 'clock'
    | 'map-pin'
    | 'shirt'
    | 'utensils'
    | 'car'
    | 'mail'
    | 'gift';
};
