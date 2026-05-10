"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { useLocale } from "@/components/providers/LocaleProvider";
import type { Locale } from "@/lib/i18n";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const active =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={
        active
          ? "rounded-full bg-brand-blue px-3 py-2 text-sm font-semibold text-white shadow-sm"
          : "rounded-full px-3 py-2 text-sm font-medium text-brand-muted transition-colors hover:bg-brand-blue/10 hover:text-brand-ink"
      }
    >
      {children}
    </Link>
  );
}

export function Navbar() {
  const { locale, setLocale, t } = useLocale();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-outline/50 bg-brand-cream/90 shadow-sm shadow-brand-ink/5 backdrop-blur-md supports-[backdrop-filter]:bg-brand-cream/80">
      <Container>
        <div className="flex min-h-14 flex-col gap-3 py-3 sm:min-h-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-2">
          <div className="flex items-center justify-between gap-4 sm:justify-start">
            <Link
              href="/"
              className={
                locale === "ka"
                  ? "text-base font-semibold tracking-tight text-brand-ink transition-colors hover:text-brand-blue"
                  : "font-display text-base font-semibold tracking-tight text-brand-ink transition-colors hover:text-brand-blue"
              }
            >
              {t.nav.brand}
            </Link>
            <nav
              className="flex flex-wrap items-center justify-end gap-1 sm:hidden"
              aria-label={t.nav.language}
            >
              {(["en", "ka"] as const satisfies readonly Locale[]).map(
                (code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLocale(code)}
                    aria-pressed={locale === code}
                    className={
                      locale === code
                        ? "rounded-full bg-brand-accent px-2.5 py-1.5 text-xs font-semibold text-white"
                        : "rounded-full px-2.5 py-1.5 text-xs font-medium text-brand-muted hover:text-brand-ink"
                    }
                  >
                    {code === "en" ? "EN" : "KA"}
                  </button>
                )
              )}
            </nav>
          </div>

          <nav
            className="flex flex-wrap items-center gap-1 overflow-x-auto pb-1 sm:pb-0"
            aria-label="Main"
          >
            <NavLink href="/">{t.nav.home}</NavLink>
            <NavLink href="/surgeons">{t.nav.surgeons}</NavLink>
            <NavLink href="/procedures">{t.nav.procedures}</NavLink>
            <NavLink href="/community">{t.nav.community}</NavLink>
            <Link
              href="/reviews/new"
              className="rounded-full bg-brand-accent/15 px-3 py-2 text-sm font-semibold text-brand-accentDark ring-1 ring-brand-accent/30 transition-colors hover:bg-brand-accent/25"
            >
              {t.nav.writeReview}
            </Link>
          </nav>

          <div className="hidden items-center gap-1 sm:flex" aria-label={t.nav.language}>
            {(["en", "ka"] as const satisfies readonly Locale[]).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                aria-pressed={locale === code}
                className={
                  locale === code
                    ? "rounded-full bg-brand-accent px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200"
                    : "rounded-full px-3.5 py-2 text-sm font-medium text-brand-muted transition-colors duration-200 hover:text-brand-ink"
                }
              >
                {code === "en" ? "EN" : "KA"}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}
