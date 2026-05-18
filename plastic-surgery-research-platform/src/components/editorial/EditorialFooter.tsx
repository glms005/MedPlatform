import Link from "next/link";

const links = [
  { label: "About", href: "/#introduction" },
  { label: "Surgeons", href: "/surgeons" },
  { label: "Clinics", href: "/clinics" },
  { label: "Procedures", href: "/procedures" },
  { label: "Forum", href: "/forum" },
  { label: "Rules", href: "/rules" },
  { label: "Pricing", href: "/pricing" },
  { label: "Privacy", href: "/#privacy" },
  { label: "Disclaimer", href: "/#medical-disclaimer" },
] as const;

export function EditorialFooter() {
  return (
    <footer
      id="privacy"
      className="border-t border-brand-outline/70 bg-brand-sand/20"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-12 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-xl font-medium tracking-tight text-brand-ink">
              Research Platform
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-brand-muted">
              Independent, transparency-first research for plastic surgery
              decisions. Informational only.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-brand-muted transition-colors hover:text-brand-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-14 border-t border-brand-outline/50 pt-8 text-xs text-brand-muted">
          © {new Date().getFullYear()} Plastic Surgery Research Platform. Mock
          data for demonstration.
        </p>
      </div>
    </footer>
  );
}
