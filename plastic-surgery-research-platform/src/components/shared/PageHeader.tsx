type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <header className="mb-10">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-2 font-display text-3xl font-semibold text-brand-ink sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-3 max-w-2xl text-brand-muted">{description}</p>
      ) : null}
    </header>
  );
}
