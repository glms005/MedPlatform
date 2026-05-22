"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { Container } from "@/components/ui/Container";
import { useAuth } from "@/components/providers/AuthProvider";
import { useLocale } from "@/components/providers/LocaleProvider";
import type { Locale } from "@/lib/i18n";

const localeLabels: Record<Locale, string> = { en: "EN", ka: "KA", ru: "RU" };

const navLinks = [
  { href: "/surgeons", key: "plasticSurgeons" as const },
  { href: "/estheticians", key: "estheticians" as const },
  { href: "/plastic-surgery", key: "plasticSurgery" as const },
  { href: "/esthetic-procedures", key: "estheticProcedures" as const },
  { href: "/forum", key: "forum" as const },
] as const;

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`warm-nav-pill shrink-0 whitespace-nowrap px-2 py-1.5 text-[10px] font-medium sm:px-3 sm:py-2 sm:text-xs lg:text-sm ${
        active
          ? "warm-nav-pill--active text-brand-slate"
          : "text-brand-slate/80 hover:text-brand-blue"
      }`}
    >
      {children}
    </Link>
  );
}

export function Navbar() {
  const { locale, setLocale, t } = useLocale();
  const { user, loading: authLoading, signOut } = useAuth();

  const displayLabel = user
    ? user.anonymousName ?? user.displayName
    : null;

  return (
    <header className="warm-navbar fixed top-0 z-50 w-full">
      <Container>
        <div className="flex min-h-[3.5rem] items-center gap-2 py-2 sm:gap-3">
          <BrandLogo name={t.nav.brand} size="nav" />

          <div className="flex min-w-0 flex-1 items-center justify-end gap-1 sm:gap-2">
            <nav
              className="flex min-w-0 items-center gap-0.5 overflow-x-auto pr-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Sections"
            >
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {t.nav[link.key]}
                </NavLink>
              ))}
            </nav>

            <div
              className="flex shrink-0 items-center gap-0.5 rounded-full border border-brand-outline/40 bg-white/60 p-0.5 pl-1 sm:pl-1.5"
              aria-label={t.nav.language}
            >
              {(["en", "ka", "ru"] as const satisfies readonly Locale[]).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLocale(code)}
                  aria-pressed={locale === code}
                  className={
                    locale === code
                      ? "min-h-[2rem] min-w-[2rem] rounded-full bg-brand-gradient px-2 text-[10px] font-semibold text-white shadow-sm sm:min-h-[2.25rem] sm:min-w-[2.25rem] sm:text-xs"
                      : "warm-nav-pill min-h-[2rem] min-w-[2rem] px-2 text-[10px] font-medium text-brand-slate sm:min-h-[2.25rem] sm:min-w-[2.25rem] sm:text-xs"
                  }
                >
                  {localeLabels[code]}
                </button>
              ))}
            </div>

            {!authLoading && user ? (
              <div className="flex shrink-0 items-center gap-1 sm:gap-2">
                <span
                  className="max-w-[5rem] truncate rounded-full bg-brand-teal/10 px-2.5 py-1.5 text-[10px] font-semibold text-brand-teal sm:max-w-[8rem] sm:text-xs"
                  title={displayLabel ?? undefined}
                >
                  {displayLabel}
                </span>
                <button
                  type="button"
                  onClick={() => void signOut()}
                  className="warm-nav-pill min-h-[2.5rem] px-2 py-1.5 text-[10px] font-medium text-brand-muted sm:min-h-[2.75rem] sm:px-3 sm:py-2 sm:text-sm"
                >
                  {t.nav.signOut}
                </button>
              </div>
            ) : !authLoading ? (
              <Link href="/login" className="warm-btn-primary min-h-[2.5rem] px-4 py-2 text-[10px] sm:min-h-[2.75rem] sm:text-sm">
                {t.nav.login}
              </Link>
            ) : null}
          </div>
        </div>
      </Container>
    </header>
  );
}
