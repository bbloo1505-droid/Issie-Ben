import { ASSETS } from '../data/assets';

type GoldDividerProps = {
  className?: string;
};

/** Supplied gold botanical divider — use under headings and in hero/footer. */
export function GoldDivider({ className = '' }: GoldDividerProps) {
  return (
    <img
      src={ASSETS.goldDivider}
      alt=""
      aria-hidden="true"
      className={`mx-auto h-auto w-full max-w-[14rem] bg-transparent object-contain ${className}`}
    />
  );
}
