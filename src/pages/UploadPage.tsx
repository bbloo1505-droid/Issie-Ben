import { Link } from 'react-router-dom';
import { GoldDivider } from '../components/GoldDivider';
import { Section } from '../components/Section';
import { PhotoUploader } from '../components/PhotoUploader';
import { ASSETS } from '../data/assets';
import { photoFocusClass } from '../lib/photoFocus';

export function UploadPage() {
  return (
    <>
      <section className="relative overflow-hidden" aria-hidden="true">
        <img
          src={ASSETS.casualMain}
          alt=""
          className={`h-52 w-full object-cover sm:h-64 md:h-72 ${photoFocusClass(ASSETS.casualMain)}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/35 to-transparent" />
      </section>

      <Section width="narrow" className="!pt-4 md:!pt-6">
        <div className="text-center">
          <p className="eyebrow mb-3">After the party</p>
          <h1 className="text-5xl text-forest sm:text-6xl">Share your photos</h1>
          <GoldDivider className="my-5 max-w-[11rem]" />
          <p className="mx-auto max-w-md leading-relaxed text-muted">
            Help us remember the little moments we might miss. Upload your favourites from the
            engagement party and beyond. Every photo is reviewed before it appears in the
            gallery.
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted">
            Playing along?{' '}
            <Link
              to="/photo-scavenger-hunt"
              className="font-medium text-gold underline-offset-4 transition-colors hover:text-earth hover:underline"
            >
              See the Photo Scavenger Hunt prompts
            </Link>
          </p>
        </div>
        <div className="mt-10">
          <PhotoUploader />
        </div>
      </Section>
    </>
  );
}
