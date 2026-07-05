import {
  CalendarDays,
  Car,
  Clock,
  Gift,
  Mail,
  MapPin,
  Shirt,
  Utensils,
  type LucideIcon
} from 'lucide-react';
import type { EventDetailItem } from '../types';

const icons: Record<EventDetailItem['icon'], LucideIcon> = {
  calendar: CalendarDays,
  clock: Clock,
  'map-pin': MapPin,
  shirt: Shirt,
  utensils: Utensils,
  car: Car,
  mail: Mail,
  gift: Gift
};

export function EventInfoCard({ detail }: { detail: EventDetailItem }) {
  const Icon = icons[detail.icon];
  return (
    <article className="flex gap-4 rounded-lg border border-border-cream bg-linen p-5">
      <Icon size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" strokeWidth={1.75} />
      <div>
        <h3 className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">
          {detail.label}
        </h3>
        <p className="mt-1 text-[0.95rem] leading-relaxed text-forest">{detail.value}</p>
        {detail.note ? <p className="mt-1 text-sm italic text-muted">{detail.note}</p> : null}
      </div>
    </article>
  );
}
