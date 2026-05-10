import { Container } from "@/components/ui/Container";

const links = [
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Medical Disclaimer", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-outline bg-brand-cream">
      <Container>
        <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-sm font-semibold text-brand-ink">
              Plastic Surgery Research Platform
            </p>
            <p className="mt-1 text-sm text-brand-muted">
              Transparency-first research for rhinoplasty decisions in Georgia.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-brand-muted hover:text-brand-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}

