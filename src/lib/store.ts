import { supabase } from './supabase';
import type {
  GiftReservation,
  GuestbookMessage,
  PhotoUploadRecord,
  RsvpSubmission
} from '../types';

/**
 * Persistence layer: writes to Supabase when configured, and always mirrors to
 * localStorage so the site is fully functional without a backend.
 */

const KEYS = {
  rsvps: 'bi_rsvps',
  reservations: 'bi_gift_reservations',
  uploads: 'bi_photo_uploads',
  guestbook: 'bi_guestbook_messages'
} as const;

export function createId(): string {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function readLocal<T>(key: string): T[] {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T[]) : [];
  } catch {
    return [];
  }
}

function writeLocal<T>(key: string, items: T[]): void {
  localStorage.setItem(key, JSON.stringify(items));
}

function appendLocal<T>(key: string, item: T): void {
  writeLocal(key, [...readLocal<T>(key), item]);
}

/* ---------- RSVPs ---------- */

export async function submitRsvp(rsvp: RsvpSubmission): Promise<void> {
  appendLocal(KEYS.rsvps, rsvp);
  if (supabase) {
    await supabase.from('rsvps').insert({
      guest_names: rsvp.guestNames,
      email: rsvp.email,
      phone: rsvp.phone ?? null,
      attending: rsvp.attending,
      guest_count: rsvp.guestCount,
      household_guests: rsvp.householdGuests ?? null,
      dietary_requirements: rsvp.dietaryRequirements ?? null,
      song_request: rsvp.songRequest ?? null,
      message: rsvp.message ?? null,
      plus_one_note: rsvp.plusOneNote ?? null,
      children_note: rsvp.childrenNote ?? null
    });
  }
}

export function getLocalRsvps(): RsvpSubmission[] {
  return readLocal<RsvpSubmission>(KEYS.rsvps);
}

/* ---------- Gift reservations ---------- */

export async function reserveGift(reservation: GiftReservation): Promise<void> {
  appendLocal(KEYS.reservations, reservation);
  if (supabase) {
    await supabase.from('gift_reservations').insert({
      gift_key: reservation.giftId,
      gift_title: reservation.giftTitle,
      reserved_by_name: reservation.reservedByName,
      reserved_by_email: reservation.reservedByEmail ?? null,
      message: reservation.message ?? null
    });
  }
}

export function getLocalReservations(): GiftReservation[] {
  return readLocal<GiftReservation>(KEYS.reservations);
}

export function getReservedGiftIds(): Set<string> {
  return new Set(getLocalReservations().map((r) => r.giftId));
}

/* ---------- Photo uploads ---------- */

export async function recordPhotoUpload(record: PhotoUploadRecord, files: File[]): Promise<void> {
  appendLocal(KEYS.uploads, record);
  if (supabase) {
    for (const file of files) {
      const path = `${record.album}/${createId()}-${file.name}`;
      const { error } = await supabase.storage.from('guest-photos').upload(path, file);
      if (!error) {
        await supabase.from('photo_uploads').insert({
          album: record.album,
          uploader_name: record.uploaderName,
          storage_path: path,
          status: 'pending'
        });
      }
    }
  }
}

export function getLocalUploads(): PhotoUploadRecord[] {
  return readLocal<PhotoUploadRecord>(KEYS.uploads);
}

/* ---------- Guestbook ---------- */

export async function addGuestbookMessage(entry: GuestbookMessage): Promise<void> {
  appendLocal(KEYS.guestbook, entry);
  if (supabase) {
    await supabase.from('guestbook_messages').insert({
      name: entry.name,
      message: entry.message,
      favourite_memory: entry.favouriteMemory ?? null,
      marriage_advice: entry.marriageAdvice ?? null
    });
  }
}

export function getLocalGuestbookMessages(): GuestbookMessage[] {
  return readLocal<GuestbookMessage>(KEYS.guestbook);
}

/* ---------- CSV export ---------- */

export function exportToCsv(filename: string, rows: Record<string, unknown>[]): void {
  if (rows.length === 0) return;
  const headers = Object.keys(rows[0]);
  const escape = (value: unknown) => {
    const str = value == null ? '' : String(value);
    return /[",\n]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str;
  };
  const csv = [
    headers.join(','),
    ...rows.map((row) => headers.map((h) => escape(row[h])).join(','))
  ].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
