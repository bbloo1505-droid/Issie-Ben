import { useState, type ReactNode } from 'react';
import { LockKeyhole } from 'lucide-react';
import { Button } from './Button';

type PasswordGateProps = {
  /** Temporary shared password; swap for guest-specific links later. */
  password: string;
  storageKey: string;
  title?: string;
  hint?: string;
  children: ReactNode;
};

export function PasswordGate({
  password,
  storageKey,
  title = 'Guest Portal',
  hint,
  children
}: PasswordGateProps) {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(storageKey) === 'true');
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  if (unlocked) return <>{children}</>;

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (value.trim().toLowerCase() === password.toLowerCase()) {
      sessionStorage.setItem(storageKey, 'true');
      setUnlocked(true);
    } else {
      setError(true);
    }
  }

  return (
    <div className="mx-auto max-w-md px-5 py-20">
      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-border-cream bg-linen p-8 text-center sm:p-10"
      >
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border-cream bg-cream">
          <LockKeyhole size={20} className="text-olive" aria-hidden="true" />
        </span>
        <h1 className="mt-5 text-4xl text-forest">{title}</h1>
        <p className="mt-2 text-sm text-muted">
          Enter the password from your invitation to continue.
        </p>
        <div className="mt-6 text-left">
          <label className="field-label" htmlFor="portal-password">
            Password
          </label>
          <input
            id="portal-password"
            type="password"
            className="field-input"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            autoComplete="off"
          />
          {error ? (
            <p className="mt-2 text-sm text-earth" role="alert">
              That's not quite right — check your invitation and try again.
            </p>
          ) : null}
          {hint ? <p className="mt-2 text-xs italic text-muted">{hint}</p> : null}
        </div>
        <Button type="submit" className="mt-6 w-full">
          Enter
        </Button>
      </form>
    </div>
  );
}
