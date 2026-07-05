import { useRef, useState } from 'react';
import { ImagePlus, Upload, X } from 'lucide-react';
import { albumNames } from '../data/albums';
import { createId, recordPhotoUpload } from '../lib/store';
import { Button } from './Button';

const MAX_SIZE_MB = 25;
const ACCEPTED = ['image/jpeg', 'image/png', 'image/heic', 'image/heif'];

type Preview = {
  file: File;
  url: string;
};

export function PhotoUploader() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState<Preview[]>([]);
  const [album, setAlbum] = useState<string>(albumNames[0]);
  const [uploaderName, setUploaderName] = useState('');
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);
  const [saving, setSaving] = useState(false);

  function addFiles(list: FileList | null) {
    if (!list) return;
    setError('');
    const next: Preview[] = [];
    for (const file of Array.from(list)) {
      const isAccepted =
        ACCEPTED.includes(file.type) || /\.(heic|heif)$/i.test(file.name);
      if (!isAccepted) {
        setError(`"${file.name}" isn't a supported format. Please use JPG, PNG or HEIC.`);
        continue;
      }
      if (file.size > MAX_SIZE_MB * 1024 * 1024) {
        setError(`"${file.name}" is larger than ${MAX_SIZE_MB}MB.`);
        continue;
      }
      next.push({ file, url: URL.createObjectURL(file) });
    }
    setPreviews((prev) => [...prev, ...next]);
  }

  function removePreview(url: string) {
    setPreviews((prev) => {
      const target = prev.find((p) => p.url === url);
      if (target) URL.revokeObjectURL(target.url);
      return prev.filter((p) => p.url !== url);
    });
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (previews.length === 0) {
      setError('Please choose at least one photo first.');
      return;
    }
    setSaving(true);
    await recordPhotoUpload(
      {
        id: createId(),
        album,
        uploaderName: uploaderName.trim() || 'Anonymous guest',
        fileNames: previews.map((p) => p.file.name),
        fileCount: previews.length,
        status: 'pending',
        uploadedAt: new Date().toISOString()
      },
      previews.map((p) => p.file)
    );
    previews.forEach((p) => URL.revokeObjectURL(p.url));
    setPreviews([]);
    setSaving(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-lg border border-border-cream bg-linen p-10 text-center">
        <img src="/brand/sunflower.svg" alt="" aria-hidden="true" className="mx-auto h-8 w-8" />
        <h2 className="mt-4 text-3xl text-forest">Thank you</h2>
        <p className="mt-2 text-muted">Your photos have been uploaded for review.</p>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted">
          We review every upload before it appears in the gallery, so it may take a little while to
          show up.
        </p>
        <Button type="button" variant="secondary" className="mt-6" onClick={() => setDone(false)}>
          Upload more photos
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div
        role="button"
        tabIndex={0}
        aria-label="Drop photos here or press Enter to choose photos"
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click();
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          addFiles(e.dataTransfer.files);
        }}
        className={`flex cursor-pointer flex-col items-center gap-3 rounded-lg border-2 border-dashed p-10 text-center transition-colors ${
          dragging ? 'border-olive bg-sage/20' : 'border-border-cream bg-linen hover:border-sage'
        }`}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border-cream bg-cream">
          <Upload size={20} className="text-olive" aria-hidden="true" />
        </span>
        <p className="hidden text-sm text-muted sm:block">Drag and drop your photos here, or</p>
        <Button type="button" onClick={(e) => { e.stopPropagation(); inputRef.current?.click(); }}>
          <ImagePlus size={14} aria-hidden="true" /> Choose Photos
        </Button>
        <p className="text-xs text-muted">JPG, PNG or HEIC · Max {MAX_SIZE_MB}MB each</p>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept=".jpg,.jpeg,.png,.heic,.heif,image/jpeg,image/png,image/heic,image/heif"
        multiple
        className="sr-only"
        onChange={(e) => {
          addFiles(e.target.files);
          e.target.value = '';
        }}
      />

      {error ? (
        <p className="rounded-md border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-earth" role="alert">
          {error}
        </p>
      ) : null}

      {previews.length > 0 ? (
        <div>
          <p className="field-label">{previews.length} photo{previews.length === 1 ? '' : 's'} selected</p>
          <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
            {previews.map((preview) => (
              <li key={preview.url} className="group relative aspect-square overflow-hidden rounded-md border border-border-cream">
                <img
                  src={preview.url}
                  alt={preview.file.name}
                  className="h-full w-full object-cover"
                />
                <button
                  type="button"
                  aria-label={`Remove ${preview.file.name}`}
                  onClick={() => removePreview(preview.url)}
                  className="absolute right-1.5 top-1.5 rounded-full bg-forest/80 p-1 text-linen opacity-80 transition-opacity hover:opacity-100"
                >
                  <X size={12} aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="album">
            Album *
          </label>
          <select
            id="album"
            required
            className="field-input"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
          >
            {albumNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="uploaderName">
            Your name (optional)
          </label>
          <input
            id="uploaderName"
            type="text"
            className="field-input"
            placeholder="So we know who to thank"
            value={uploaderName}
            onChange={(e) => setUploaderName(e.target.value)}
          />
        </div>
      </div>

      <div className="text-center">
        <Button type="submit" disabled={saving || previews.length === 0} className="w-full sm:w-auto sm:min-w-56">
          {saving ? 'Uploading…' : 'Upload Photos'}
        </Button>
        <p className="mt-3 text-xs text-muted">
          Uploads are reviewed before appearing in the public gallery.
        </p>
      </div>
    </form>
  );
}
