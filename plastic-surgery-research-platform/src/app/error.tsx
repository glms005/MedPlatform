"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-brand-ivory px-6 text-center text-brand-ink">
      <h1 className="font-display text-2xl font-medium">Something went wrong</h1>
      {error.digest ? (
        <p className="text-xs text-brand-muted">
          <code className="rounded bg-brand-sand/80 px-1.5 py-0.5">{error.digest}</code>
        </p>
      ) : null}
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-full bg-brand-accent px-8 py-3 text-sm font-semibold text-white shadow-soft hover:bg-brand-accentDark"
      >
        Try again
      </button>
    </main>
  );
}
