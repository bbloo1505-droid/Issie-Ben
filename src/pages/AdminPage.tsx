import { useState } from 'react';
import { AdminTable } from '../components/AdminTable';
import { Section } from '../components/Section';
import { isSupabaseConfigured } from '../lib/supabase';
import {
  getLocalGuestbookMessages,
  getLocalReservations,
  getLocalRsvps,
  getLocalUploads
} from '../lib/store';
import { engagementParty, site } from '../data/siteContent';
import type {
  GiftReservation,
  GuestbookMessage,
  PhotoUploadRecord,
  RsvpSubmission
} from '../types';

/**
 * Mock rows shown alongside any real local submissions so the dashboard is
 * never empty while the backend is unconfigured.
 */
const mockRsvps: RsvpSubmission[] = [
  {
    id: 'mock-rsvp-1',
    guestNames: 'Jack & Emily Smith',
    email: 'jack.smith@example.com',
    attending: true,
    guestCount: 2,
    dietaryRequirements: 'One vegetarian',
    songRequest: 'September — Earth, Wind & Fire',
    submittedAt: '2025-06-10T09:30:00.000Z'
  },
  {
    id: 'mock-rsvp-2',
    guestNames: 'Sophie Nguyen',
    email: 'sophie.n@example.com',
    attending: false,
    guestCount: 0,
    message: 'So sorry to miss it — celebrating from afar!',
    submittedAt: '2025-06-12T14:05:00.000Z'
  }
];

const mockReservations: GiftReservation[] = [
  {
    id: 'mock-res-1',
    giftId: 'coffee-machine',
    giftTitle: 'Coffee Machine',
    reservedByName: 'The Wilsons',
    reservedByEmail: 'wilsons@example.com',
    reservedAt: '2025-06-11T11:00:00.000Z'
  }
];

const mockUploads: PhotoUploadRecord[] = [
  {
    id: 'mock-up-1',
    album: 'Couple Memories',
    uploaderName: 'Aunty Sue',
    fileNames: ['IMG_2041.jpg', 'IMG_2042.jpg'],
    fileCount: 2,
    status: 'pending',
    uploadedAt: '2025-06-14T18:20:00.000Z'
  }
];

const mockGuestbook: GuestbookMessage[] = [
  {
    id: 'mock-gb-1',
    name: 'Mum & Dad',
    message: 'So proud of you both. Here comes the fun part!',
    marriageAdvice: 'Never stop laughing at each other\u2019s terrible jokes.',
    createdAt: '2025-06-01T10:00:00.000Z'
  }
];

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString('en-AU', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  });
}

type Tab = 'rsvps' | 'gifts' | 'photos' | 'guestbook' | 'settings';

const tabs: { id: Tab; label: string }[] = [
  { id: 'rsvps', label: 'RSVPs' },
  { id: 'gifts', label: 'Gift Reservations' },
  { id: 'photos', label: 'Photo Review' },
  { id: 'guestbook', label: 'Guestbook' },
  { id: 'settings', label: 'Event & Site' }
];

export function AdminPage() {
  const [tab, setTab] = useState<Tab>('rsvps');

  const rsvps = [...getLocalRsvps(), ...mockRsvps];
  const reservations = [...getLocalReservations(), ...mockReservations];
  const uploads = [...getLocalUploads(), ...mockUploads];
  const guestbook = [...getLocalGuestbookMessages(), ...mockGuestbook];

  const attendingCount = rsvps
    .filter((r) => r.attending)
    .reduce((sum, r) => sum + r.guestCount, 0);

  return (
    <Section width="wide">
      <div className="mb-8">
        <p className="eyebrow mb-2">Admin</p>
        <h1 className="text-4xl text-forest sm:text-5xl">Dashboard</h1>
        <p className="mt-2 text-sm text-muted">
          {isSupabaseConfigured
            ? 'Connected to Supabase.'
            : 'Supabase not configured — showing local submissions and mock data. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to connect.'}
        </p>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        {[
          { label: 'Guests attending', value: attendingCount },
          { label: 'Gift reservations', value: reservations.length },
          { label: 'Photos pending review', value: uploads.filter((u) => u.status === 'pending').length }
        ].map((stat) => (
          <div key={stat.label} className="rounded-lg border border-border-cream bg-linen p-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
              {stat.label}
            </p>
            <p className="mt-1 font-serif text-4xl text-forest">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Admin sections">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`rounded-full border px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
              tab === t.id
                ? 'border-olive bg-olive text-linen'
                : 'border-border-cream bg-linen text-forest hover:border-sage'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'rsvps' ? (
        <AdminTable
          title="RSVP responses"
          description="Every response, newest submissions first."
          rows={rsvps}
          csvFilename="rsvps.csv"
          csvRows={rsvps.map((r) => ({
            names: r.guestNames,
            email: r.email,
            phone: r.phone ?? '',
            attending: r.attending ? 'Yes' : 'No',
            guests: r.guestCount,
            dietary: r.dietaryRequirements ?? '',
            song: r.songRequest ?? '',
            message: r.message ?? '',
            submitted: r.submittedAt
          }))}
          columns={[
            { header: 'Name(s)', render: (r) => <span className="font-medium">{r.guestNames}</span> },
            { header: 'Email', render: (r) => r.email },
            {
              header: 'Attending',
              render: (r) => (
                <span className={r.attending ? 'text-olive' : 'text-earth'}>
                  {r.attending ? 'Yes' : 'No'}
                </span>
              )
            },
            { header: 'Guests', render: (r) => r.guestCount },
            { header: 'Dietary', render: (r) => r.dietaryRequirements ?? '—' },
            { header: 'Submitted', render: (r) => formatDate(r.submittedAt) }
          ]}
        />
      ) : null}

      {tab === 'gifts' ? (
        <AdminTable
          title="Gift reservations"
          rows={reservations}
          csvFilename="gift-reservations.csv"
          csvRows={reservations.map((r) => ({
            gift: r.giftTitle,
            reservedBy: r.reservedByName,
            email: r.reservedByEmail ?? '',
            reservedAt: r.reservedAt
          }))}
          columns={[
            { header: 'Gift', render: (r) => <span className="font-medium">{r.giftTitle}</span> },
            { header: 'Reserved by', render: (r) => r.reservedByName },
            { header: 'Email', render: (r) => r.reservedByEmail ?? '—' },
            { header: 'Reserved', render: (r) => formatDate(r.reservedAt) }
          ]}
        />
      ) : null}

      {tab === 'photos' ? (
        <AdminTable
          title="Photo uploads pending review"
          description="Approve uploads in Supabase before they appear in the gallery."
          rows={uploads}
          csvFilename="photo-uploads.csv"
          csvRows={uploads.map((u) => ({
            album: u.album,
            uploader: u.uploaderName,
            files: u.fileNames.join('; '),
            count: u.fileCount,
            status: u.status,
            uploadedAt: u.uploadedAt
          }))}
          columns={[
            { header: 'Album', render: (u) => <span className="font-medium">{u.album}</span> },
            { header: 'Uploader', render: (u) => u.uploaderName },
            { header: 'Files', render: (u) => `${u.fileCount} file${u.fileCount === 1 ? '' : 's'}` },
            {
              header: 'Status',
              render: (u) => (
                <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-earth">
                  {u.status}
                </span>
              )
            },
            { header: 'Uploaded', render: (u) => formatDate(u.uploadedAt) }
          ]}
        />
      ) : null}

      {tab === 'guestbook' ? (
        <AdminTable
          title="Guestbook messages"
          rows={guestbook}
          csvFilename="guestbook.csv"
          csvRows={guestbook.map((g) => ({
            name: g.name,
            message: g.message,
            favouriteMemory: g.favouriteMemory ?? '',
            advice: g.marriageAdvice ?? '',
            createdAt: g.createdAt
          }))}
          columns={[
            { header: 'Name', render: (g) => <span className="font-medium">{g.name}</span> },
            { header: 'Message', render: (g) => <span className="block max-w-sm">{g.message}</span> },
            { header: 'Advice', render: (g) => g.marriageAdvice ?? '—' },
            { header: 'Posted', render: (g) => formatDate(g.createdAt) }
          ]}
        />
      ) : null}

      {tab === 'settings' ? (
        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-lg border border-border-cream bg-linen p-6">
            <h2 className="text-2xl text-forest">Event settings</h2>
            <p className="mt-1 text-sm text-muted">
              Edit these in <code className="rounded bg-cream px-1.5 py-0.5 text-xs">src/data/siteContent.ts</code>.
            </p>
            <dl className="mt-4 space-y-3 text-sm">
              {[
                ['Event', engagementParty.name],
                ['Date', `${engagementParty.date}, ${engagementParty.time}`],
                ['Venue', `${engagementParty.venueName}, ${engagementParty.address}`],
                ['Dress code', `${engagementParty.dressCode} — ${engagementParty.dressCodeNote}`],
                ['RSVP deadline', engagementParty.rsvpDeadline]
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-6 border-b border-border-cream/60 pb-2 last:border-0">
                  <dt className="shrink-0 font-semibold text-forest">{label}</dt>
                  <dd className="text-right text-muted">{value}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section className="rounded-lg border border-border-cream bg-linen p-6">
            <h2 className="text-2xl text-forest">Site content</h2>
            <p className="mt-1 text-sm text-muted">Key copy and configuration at a glance.</p>
            <dl className="mt-4 space-y-3 text-sm">
              {[
                ['Couple', site.coupleName],
                ['Domain', site.domain],
                ['Tagline', site.tagline],
                ['Contact', site.contactEmail],
                ['Portal password', site.guestPortalPassword]
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-6 border-b border-border-cream/60 pb-2 last:border-0">
                  <dt className="shrink-0 font-semibold text-forest">{label}</dt>
                  <dd className="text-right text-muted">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 rounded-md bg-cream p-3 text-xs leading-relaxed text-muted">
              This route is unlisted but not protected. Before launch, wrap it in the same
              PasswordGate used by the guest portal, or put it behind Supabase auth.
            </p>
          </section>
        </div>
      ) : null}
    </Section>
  );
}
