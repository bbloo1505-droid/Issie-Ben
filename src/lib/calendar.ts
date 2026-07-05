import { engagementParty, site } from '../data/siteContent';

function toIcsDate(iso: string): string {
  return new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

/** Builds and downloads an .ics calendar file for the engagement party. */
export function downloadCalendarInvite(): void {
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    `PRODID:-//${site.domain}//Engagement Party//EN`,
    'BEGIN:VEVENT',
    `UID:engagement-party@${site.domain}`,
    `DTSTAMP:${toIcsDate(new Date().toISOString())}`,
    `DTSTART:${toIcsDate(engagementParty.startIso)}`,
    `DTEND:${toIcsDate(engagementParty.endIso)}`,
    `SUMMARY:${site.coupleName} - ${engagementParty.name}`,
    `LOCATION:${engagementParty.venueName}\\, ${engagementParty.address}`,
    `DESCRIPTION:Dress code: ${engagementParty.dressCode} (${engagementParty.dressCodeNote}). RSVP by ${engagementParty.rsvpDeadline}.`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'ben-and-issie-engagement-party.ics';
  link.click();
  URL.revokeObjectURL(url);
}
