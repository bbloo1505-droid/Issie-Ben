import { ASSETS } from '../data/assets';

/**
 * Object-position classes tuned per photo so faces stay in frame when cropped.
 * Values anchor the upper third where faces sit in each shot.
 */
export const photoFocus: Record<string, string> = {
  [ASSETS.hero]: 'object-[50%_26%]',
  [ASSETS.casualMain]: 'object-[50%_16%]',
  [ASSETS.formalMain]: 'object-[50%_10%]',
  [ASSETS.forestMain]: 'object-[50%_30%]'
};

export function photoFocusClass(src: string): string {
  return photoFocus[src] ?? 'object-[50%_20%]';
}
