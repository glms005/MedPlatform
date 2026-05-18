import Link from "next/link";

const links = [
  { label: "About", href: "/#introduction" },
  { label: "Surgeons", href: "/surgeons" },
  { label: "Procedures", href: "/procedures" },
  { label: "Clinics", href: "/clinics" },
  { label: "Community", href: "/forum" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Early access", href: "/early-access" },
  { label: "Privacy", href: "/#privacy" },
  { label: "Medical disclaimer", href: "/#medical-disclaimer" },
] as const;

export function EditorialFooter() {
  return (
    <footer id="privacy" className="border-t border-brand-outline/70 bg-brand-navy text-white">
      <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <p className="font-display text-2xl font-medium tracking-tight">MedPlatform</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
              A trust-first research community for plastic surgery in Georgia. Compare
              surgeons, clinics, procedures, and patient experiences—with moderation and
              clear boundaries.
            </p>
            <p className="mt-6 rounded-lg border border-white/15 bg-white/5 p-4 text-xs leading-relaxed text-white/80">
              This platform is for informational purposes only and does not provide medical
              advice, diagnosis, or treatment recommendations.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="min-h-[2.25rem] py-1 text-white/65 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-12 border-t border-white/12 pt-8 text-xs text-white/45">
          © {new Date().getFullYear()} MedPlatform · Fictional mock data for demonstration only
        </p>
      </div>
    </footer>
  );
}
