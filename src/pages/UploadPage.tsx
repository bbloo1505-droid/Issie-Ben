import { Flourish, Section } from '../components/Section';
import { PhotoUploader } from '../components/PhotoUploader';

export function UploadPage() {
  return (
    <Section width="narrow">
      <div className="text-center">
        <p className="eyebrow mb-3">Upload your photos</p>
        <h1 className="text-5xl text-forest sm:text-6xl">Share your photos with us</h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">
          Upload your favourite moments from the engagement party and other memories. Every photo
          is reviewed before it appears in the public gallery.
        </p>
      </div>
      <div className="my-8">
        <Flourish />
      </div>
      <PhotoUploader />
    </Section>
  );
}
