-- Ben & Issie Wedding Website — Supabase Schema
-- Run this in the Supabase SQL Editor when ready to connect backend features.
-- Column names match the insert payloads in src/lib/store.ts.

create extension if not exists "uuid-ossp";

-- Households group guests for invitations and guest-specific portal links.
create table if not exists households (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  household_name text not null,
  primary_contact_name text,
  email text,
  phone text,
  guest_group text,
  access_code text,
  created_at timestamptz default now()
);

create table if not exists guests (
  id uuid primary key default uuid_generate_v4(),
  household_id uuid references households(id) on delete cascade,
  full_name text not null,
  invited_to_engagement boolean default true,
  invited_to_wedding boolean default false,
  plus_one_allowed boolean default false,
  child boolean default false,
  notes text,
  created_at timestamptz default now()
);

create table if not exists events (
  id uuid primary key default uuid_generate_v4(),
  event_key text unique not null,
  name text not null,
  event_date text,
  event_time text,
  venue_name text,
  address text,
  dress_code text,
  dress_code_note text,
  food_and_drinks text,
  parking text,
  rsvp_deadline text,
  gift_note text,
  map_link text,
  starts_at timestamptz,
  ends_at timestamptz,
  visible boolean default true,
  created_at timestamptz default now()
);

create table if not exists rsvps (
  id uuid primary key default uuid_generate_v4(),
  household_id uuid references households(id) on delete set null,
  event_key text not null default 'engagement_party',
  guest_names text not null,
  email text not null,
  phone text,
  attending boolean not null,
  guest_count integer not null default 1,
  household_guests text,
  dietary_requirements text,
  song_request text,
  message text,
  plus_one_note text,
  children_note text,
  submitted_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists gifts (
  id uuid primary key default uuid_generate_v4(),
  gift_key text unique,
  title text not null,
  description text,
  price_label text,
  category text,
  image_url text,
  external_url text,
  status text not null default 'available' check (status in ('available', 'reserved', 'purchased', 'hidden')),
  priority integer default 0,
  created_at timestamptz default now()
);

create table if not exists gift_reservations (
  id uuid primary key default uuid_generate_v4(),
  gift_id uuid references gifts(id) on delete cascade,
  gift_key text,
  gift_title text,
  household_id uuid references households(id) on delete set null,
  reserved_by_name text not null,
  reserved_by_email text,
  message text,
  status text not null default 'reserved' check (status in ('reserved', 'purchased', 'cancelled')),
  reserved_at timestamptz default now()
);

create table if not exists photo_uploads (
  id uuid primary key default uuid_generate_v4(),
  event_key text not null default 'engagement_party',
  album text not null default 'Engagement Party',
  uploader_name text,
  uploader_email text,
  storage_path text not null,
  caption text,
  status text not null default 'pending' check (status in ('pending', 'approved', 'hidden', 'deleted')),
  uploaded_at timestamptz default now()
);

create table if not exists guestbook_messages (
  id uuid primary key default uuid_generate_v4(),
  household_id uuid references households(id) on delete set null,
  name text not null,
  message text not null,
  favourite_memory text,
  marriage_advice text,
  status text not null default 'pending' check (status in ('pending', 'approved', 'hidden')),
  created_at timestamptz default now()
);

create table if not exists site_updates (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  body text not null,
  visible boolean default true,
  priority integer default 0,
  starts_at timestamptz,
  ends_at timestamptz,
  created_at timestamptz default now()
);

-- Storage:
-- Create a private bucket called `guest-photos`.
-- The app uploads to `guest-photos/{album}/{uuid}-{file-name}` and stores the
-- path in `photo_uploads.storage_path`. Only approved photos should appear publicly.

-- Row Level Security: enable before production.
-- Suggested minimal policies for the anon key (public site):
--   rsvps:               insert only
--   gift_reservations:   insert only
--   photo_uploads:       insert only
--   guestbook_messages:  insert only, select where status = 'approved'
-- Admin reads should go through the service role or an authenticated dashboard.
