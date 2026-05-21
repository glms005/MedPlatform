"use client";

import Link from "next/link";
import { useLocale } from "@/components/providers/LocaleProvider";

export function EditorialFooter() {
  const { t } = useLocale();

  const links = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.plasticSurgeons, href: "/surgeons" },
    { label: t.nav.plasticSurgery, href: "/plastic-surgery" },
    { label: t.nav.estheticians, href: "/estheticians" },
    { label: t.nav.forum, href: "/forum" },
    { label: t.nav.rules, href: "/rules" },
    { label: "Medical disclaimer", href: "/#medical-disclaimer" },
  ] as const;

  return (
    <footer id="privacy" className="warm-footer">
      <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <p className="font-display text-2xl font-medium tracking-tight text-brand-ink">
              {t.nav.brand}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-muted">
              A trust-first research community for plastic surgery in Georgia. Compare
              surgeons, clinics, procedures, and patient experiences—with moderation and
              clear boundaries.
            </p>
            <p className="warm-footer-panel mt-6">{t.common.disclaimer}</p>
          </div>
          <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="min-h-[2.25rem] rounded-lg py-1 font-medium text-brand-muted transition-colors hover:bg-white/50 hover:text-brand-teal"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-12 border-t border-brand-outline/50 pt-8 text-xs text-brand-muted">
          © {new Date().getFullYear()} {t.nav.brand} · {t.common.mockData}
        </p>
      </div>
    </footer>
  );
}
