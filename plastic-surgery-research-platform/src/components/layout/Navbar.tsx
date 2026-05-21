"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  solid,
}: {
  href: string;
  children: React.ReactNode;
  solid: boolean;
}) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={
        active
          ? solid
            ? "shrink-0 rounded-lg bg-brand-teal/12 px-1.5 py-1.5 text-[10px] font-semibold text-brand-ink whitespace-nowrap sm:px-2 sm:py-2 sm:text-xs lg:text-sm"
            : "shrink-0 rounded-lg bg-white/70 px-1.5 py-1.5 text-[10px] font-semibold text-brand-ink ring-1 ring-brand-outline/50 whitespace-nowrap sm:px-2 sm:py-2 sm:text-xs lg:text-sm"
          : solid
            ? "shrink-0 rounded-lg px-1.5 py-1.5 text-[10px] font-medium text-brand-muted transition-colors hover:bg-brand-sand/80 hover:text-brand-ink whitespace-nowrap sm:px-2 sm:py-2 sm:text-xs lg:text-sm"
            : "shrink-0 rounded-lg px-1.5 py-1.5 text-[10px] font-medium text-brand-ink/85 transition-colors hover:bg-white/55 hover:text-brand-ink whitespace-nowrap sm:px-2 sm:py-2 sm:text-xs lg:text-sm"
      }
    >
      {children}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { locale, setLocale, t } = useLocale();
  const { user, loading: authLoading, signOut } = useAuth();
  const [solidBar, setSolidBar] = useState(!isHome);

  const displayLabel = user
    ? user.anonymousName ?? user.displayName
    : null;

  useEffect(() => {
    if (!isHome) {
      setSolidBar(true);
      return;
    }
    const onScroll = () => setSolidBar(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-[background,border-color,box-shadow] duration-500 motion-reduce:transition-none ${
        solidBar
          ? "border-b border-brand-outline/55 bg-brand-ivory/[0.96] shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-brand-ivory/40 backdrop-blur-md"
      }`}
    >
      <Container>
        <div className="flex min-h-[3.5rem] items-center gap-2 py-2 sm:gap-3">
          <Link
            href="/"
            className="shrink-0 font-display text-[1rem] font-medium tracking-tight text-brand-ink sm:text-[1.12rem]"
          >
            {t.nav.brand}
          </Link>

          <div className="flex min-w-0 flex-1 items-center justify-end gap-1 sm:gap-2">
            <nav
              className="flex min-w-0 items-center gap-0.5 overflow-x-auto pr-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Sections"
            >
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} solid={solidBar}>
                  {t.nav[link.key]}
                </NavLink>
              ))}
            </nav>

            <div
              className="flex shrink-0 items-center gap-0.5 border-l border-brand-outline/40 pl-1 sm:pl-2"
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
                      ? "min-h-[2rem] min-w-[2rem] rounded-lg bg-brand-navy px-2 text-[10px] font-semibold text-white sm:min-h-[2.25rem] sm:min-w-[2.25rem] sm:text-xs"
                      : "min-h-[2rem] min-w-[2rem] rounded-lg px-2 text-[10px] font-medium text-brand-muted hover:bg-brand-sand/80 hover:text-brand-ink sm:min-h-[2.25rem] sm:min-w-[2.25rem] sm:text-xs"
                  }
                >
                  {localeLabels[code]}
                </button>
              ))}
            </div>

            {!authLoading && user ? (
              <div className="flex shrink-0 items-center gap-1 sm:gap-2">
                <span
                  className="max-w-[5rem] truncate rounded-lg bg-brand-teal/10 px-2 py-1.5 text-[10px] font-semibold text-brand-teal sm:max-w-[8rem] sm:py-2 sm:text-xs"
                  title={displayLabel ?? undefined}
                >
                  {displayLabel}
                </span>
                <button
                  type="button"
                  onClick={() => void signOut()}
                  className="min-h-[2.5rem] rounded-lg px-2 py-1.5 text-[10px] font-medium text-brand-muted hover:bg-brand-sand hover:text-brand-ink sm:min-h-[2.75rem] sm:px-3 sm:py-2 sm:text-sm"
                >
                  {t.nav.signOut}
                </button>
              </div>
            ) : !authLoading ? (
              <Link
                href="/login"
                className="inline-flex min-h-[2.5rem] shrink-0 items-center rounded-lg border border-brand-outline px-2 py-1.5 text-[10px] font-semibold text-brand-ink hover:bg-brand-sand sm:min-h-[2.75rem] sm:px-4 sm:py-2 sm:text-sm"
              >
                {t.nav.login}
              </Link>
            ) : null}
          </div>
        </div>
      </Container>
    </header>
  );
}
