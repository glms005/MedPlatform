export default function Loading() {
  return (
    <div
      className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-4 warm-page-bg px-6"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="h-1 w-14 overflow-hidden rounded-full bg-brand-outline">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-brand-blue/50" />
      </div>
      <p className="font-display text-base font-medium text-brand-ink">Loading…</p>
    </div>
  );
}
