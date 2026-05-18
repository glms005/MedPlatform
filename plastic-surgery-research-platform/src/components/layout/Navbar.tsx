"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { useAuth } from "@/components/providers/AuthProvider";
import { useLocale } from "@/components/providers/LocaleProvider";
import type { Locale } from "@/lib/i18n";

const localeLabels: Record<Locale, string> = { en: "EN", ka: "KA", ru: "RU" };

const mainLinks = [
  { href: "/surgeons", key: "surgeons" as const },
  { href: "/procedures", key: "procedures" as const },
  { href: "/clinics", key: "clinics" as const },
  { href: "/forum", key: "community" as const },
  { href: "/#reviews", key: "reviews" as const },
  { href: "/#recovery", key: "recoveryStories" as const },
] as const;

function NavLink({
  href,
  children,
  solid,
  onNavigate,
}: {
  href: string;
  children: React.ReactNode;
  solid: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const active =
    href.startsWith("/#")
      ? false
      : href === "/"
        ? pathname === "/"
        : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={
        active
          ? solid
            ? "rounded-lg bg-brand-teal/12 px-3 py-2.5 text-sm font-semibold text-brand-ink"
            : "rounded-lg bg-white/70 px-3 py-2.5 text-sm font-semibold text-brand-ink ring-1 ring-brand-outline/50"
          : solid
            ? "rounded-lg px-3 py-2.5 text-sm font-medium text-brand-muted transition-colors hover:bg-brand-sand/80 hover:text-brand-ink"
            : "rounded-lg px-3 py-2.5 text-sm font-medium text-brand-ink/85 transition-colors hover:bg-white/55 hover:text-brand-ink"
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
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const langSwitcher = (className: string) => (
    <div className={className} aria-label={t.nav.language}>
      {(["en", "ka", "ru"] as const satisfies readonly Locale[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={
            locale === code
              ? "min-h-[2.25rem] min-w-[2.25rem] rounded-lg bg-brand-navy px-2.5 text-xs font-semibold text-white sm:text-sm"
              : "min-h-[2.25rem] min-w-[2.25rem] rounded-lg px-2.5 text-xs font-medium text-brand-muted hover:bg-brand-sand/80 hover:text-brand-ink sm:text-sm"
          }
        >
          {localeLabels[code]}
        </button>
      ))}
    </div>
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-[background,border-color,box-shadow] duration-500 motion-reduce:transition-none ${
        solidBar
          ? "border-b border-brand-outline/55 bg-brand-ivory/[0.96] shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-brand-ivory/40 backdrop-blur-md"
      }`}
    >
      <Container>
        <div className="flex min-h-[3.5rem] items-center justify-between gap-3 py-2">
          <Link
            href="/"
            className="shrink-0 font-display text-[1.05rem] font-medium tracking-tight text-brand-ink sm:text-[1.12rem]"
          >
            {t.nav.brand}
          </Link>

          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label="Main"
          >
            {mainLinks.map((link) => (
              <NavLink key={link.href} href={link.href} solid={solidBar}>
                {t.nav[link.key]}
              </NavLink>
            ))}
            <Link
              href="/early-access"
              className="ml-1 rounded-lg px-3 py-2.5 text-sm font-medium text-brand-muted hover:text-brand-ink"
            >
              {t.nav.earlyAccess}
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            {langSwitcher("hidden sm:flex items-center gap-0.5")}
            {!authLoading && user ? (
              <div className="hidden items-center gap-2 sm:flex">
                <span
                  className="max-w-[8rem] truncate rounded-lg bg-brand-teal/10 px-2.5 py-2 text-xs font-semibold text-brand-teal"
                  title={displayLabel ?? undefined}
                >
                  {displayLabel}
                </span>
                <button
                  type="button"
                  onClick={() => void signOut()}
                  className="min-h-[2.75rem] rounded-lg px-3 py-2 text-sm font-medium text-brand-muted hover:bg-brand-sand hover:text-brand-ink"
                >
                  {t.nav.signOut}
                </button>
              </div>
            ) : !authLoading ? (
              <Link
                href="/login"
                className="hidden min-h-[2.75rem] items-center rounded-lg border border-brand-outline px-4 py-2 text-sm font-semibold text-brand-ink hover:bg-brand-sand sm:inline-flex"
              >
                {t.nav.login}
              </Link>
            ) : null}
            <Link
              href="/reviews/new"
              className="hidden min-h-[2.75rem] items-center rounded-lg bg-brand-teal px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-teal-dark sm:inline-flex"
            >
              {t.nav.writeReview}
            </Link>
            <button
              type="button"
              className="inline-flex min-h-[2.75rem] min-w-[2.75rem] items-center justify-center rounded-lg border border-brand-outline/80 bg-white lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="sr-only">Menu</span>
              <span className="flex flex-col gap-1.5" aria-hidden>
                <span
                  className={`block h-0.5 w-5 bg-brand-ink transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 bg-brand-ink transition-opacity ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 bg-brand-ink transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav
            id="mobile-nav"
            className="border-t border-brand-outline/50 py-4 lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1">
              {mainLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  solid={solidBar}
                  onNavigate={closeMenu}
                >
                  {t.nav[link.key]}
                </NavLink>
              ))}
              <NavLink href="/early-access" solid={solidBar} onNavigate={closeMenu}>
                {t.nav.earlyAccess}
              </NavLink>
              {user ? (
                <>
                  <p className="px-3 py-2 text-sm font-semibold text-brand-teal">
                    {displayLabel}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      void signOut();
                      closeMenu();
                    }}
                    className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-brand-muted hover:bg-brand-sand"
                  >
                    {t.nav.signOut}
                  </button>
                </>
              ) : (
                <NavLink href="/login" solid={solidBar} onNavigate={closeMenu}>
                  {t.nav.login}
                </NavLink>
              )}
              <Link
                href="/reviews/new"
                onClick={closeMenu}
                className="mt-2 flex min-h-[3rem] items-center justify-center rounded-lg bg-brand-teal text-sm font-semibold text-white"
              >
                {t.nav.writeReview}
              </Link>
            </div>
            {langSwitcher("mt-4 flex items-center gap-1 sm:hidden")}
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
