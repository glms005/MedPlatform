type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <header className="warm-panel mb-10 p-6 sm:p-8">
      {eyebrow ? <p className="warm-eyebrow">{eyebrow}</p> : null}
      <h1 className="warm-title mt-3 text-3xl sm:text-4xl">{title}</h1>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-muted">
          {description}
        </p>
      ) : null}
    </header>
  );
}
