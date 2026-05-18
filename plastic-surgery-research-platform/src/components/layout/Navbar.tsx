"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { useLocale } from "@/components/providers/LocaleProvider";
import type { Locale } from "@/lib/i18n";

const localeLabels: Record<Locale, string> = { en: "EN", ka: "KA", ru: "RU" };

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
  const active =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={
        active
          ? solid
            ? "rounded-md bg-brand-blue/14 px-2.5 py-2 text-sm font-semibold text-brand-ink"
            : "rounded-md bg-white/65 px-2.5 py-2 text-sm font-semibold text-brand-ink backdrop-blur-sm ring-1 ring-brand-outline/50"
          : solid
            ? "rounded-md px-2.5 py-2 text-sm font-medium text-brand-muted transition-colors hover:bg-brand-sand/65 hover:text-brand-ink"
            : "rounded-md px-2.5 py-2 text-sm font-medium text-brand-ink/80 transition-colors hover:bg-white/50 hover:text-brand-ink hover:backdrop-blur-sm"
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
  const [solidBar, setSolidBar] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setSolidBar(true);
      return;
    }
    const onScroll = () => setSolidBar(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

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
              ? "rounded-md bg-brand-ink px-2 py-1.5 text-xs font-semibold text-white sm:px-2.5 sm:text-sm"
              : solidBar
                ? "rounded-md px-2 py-1.5 text-xs font-medium text-brand-muted hover:bg-brand-sand/65 hover:text-brand-ink sm:px-2.5 sm:text-sm"
                : "rounded-md px-2 py-1.5 text-xs font-medium text-brand-muted hover:bg-white/55 hover:text-brand-ink sm:px-2.5 sm:text-sm"
          }
        >
          {localeLabels[code]}
        </button>
      ))}
    </div>
  );

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-[background,border-color,box-shadow] duration-500 motion-reduce:transition-none ${
        solidBar
          ? "border-b border-brand-outline/55 bg-brand-ivory/[0.94] shadow-soft backdrop-blur-xl supports-[backdrop-filter]:bg-brand-ivory/90"
          : "border-b border-transparent bg-brand-ivory/[0.35] backdrop-blur-md supports-[backdrop-filter]:bg-brand-ivory/[0.28]"
      }`}
    >
      <Container>
        <div className="flex min-h-[3.25rem] flex-col gap-2 py-2.5 sm:min-h-14 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:py-2">
          <div className="flex items-center justify-between gap-3">
            <Link
              href="/"
              className="font-display text-[1.06rem] font-medium tracking-[0.01em] text-brand-ink transition-colors hover:text-brand-blue sm:text-[1.12rem]"
            >
              {t.nav.brand}
            </Link>
            {langSwitcher("flex items-center gap-0.5 sm:hidden")}
          </div>

          <nav
            className="flex flex-wrap items-center gap-0.5 overflow-x-auto pb-0.5"
            aria-label="Main"
          >
            <NavLink href="/surgeons" solid={solidBar}>
              {t.nav.surgeons}
            </NavLink>
            <NavLink href="/clinics" solid={solidBar}>
              {t.nav.clinics}
            </NavLink>
            <NavLink href="/procedures" solid={solidBar}>
              {t.nav.procedures}
            </NavLink>
            <NavLink href="/forum" solid={solidBar}>
              {t.nav.forum}
            </NavLink>
            <NavLink href="/rules" solid={solidBar}>
              {t.nav.rules}
            </NavLink>
            <NavLink href="/login" solid={solidBar}>
              {t.nav.login}
            </NavLink>
            <Link
              href="/reviews/new"
              className={`ml-0.5 shrink-0 rounded-md px-2.5 py-2 text-sm font-semibold transition-colors ${
                solidBar
                  ? "border border-brand-outline/85 bg-white/95 text-brand-ink shadow-sm hover:border-brand-blue/35"
                  : "border border-brand-outline/60 bg-white/55 text-brand-ink backdrop-blur-sm hover:bg-white/80"
              }`}
            >
              {t.nav.writeReview}
            </Link>
          </nav>

          {langSwitcher("hidden items-center gap-0.5 sm:flex")}
        </div>
      </Container>
    </header>
  );
}
