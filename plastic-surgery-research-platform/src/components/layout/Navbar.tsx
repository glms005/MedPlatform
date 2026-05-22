"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Container } from "@/components/ui/Container";
import { useAuth } from "@/components/providers/AuthProvider";
import { useLocale } from "@/components/providers/LocaleProvider";

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
      className={`warm-nav-pill shrink-0 whitespace-nowrap px-2.5 py-2 text-[11px] font-medium sm:px-3 sm:text-xs lg:text-sm ${
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
  const { t } = useLocale();
  const { user, loading: authLoading, signOut } = useAuth();

  const displayLabel = user
    ? user.anonymousName ?? user.displayName
    : null;

  return (
    <header className="warm-navbar fixed top-0 z-50 w-full">
      <Container className="!px-4 sm:!px-6">
        <div className="flex flex-col gap-2 py-2 md:flex-row md:items-center md:gap-3 md:py-2">
          <div className="flex min-h-[2.75rem] items-center gap-2">
            <BrandLogo name={t.nav.brand} size="nav" className="min-w-0" />

            <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
              <LanguageSwitcher />

              {!authLoading && user ? (
                <div className="flex items-center gap-1">
                  <span
                    className="max-w-[4.5rem] truncate rounded-full bg-brand-teal/10 px-2 py-1.5 text-[10px] font-semibold text-brand-teal sm:max-w-[7rem] sm:px-2.5 sm:text-xs"
                    title={displayLabel ?? undefined}
                  >
                    {displayLabel}
                  </span>
                  <button
                    type="button"
                    onClick={() => void signOut()}
                    className="warm-nav-pill min-h-[2.5rem] px-2 py-1.5 text-[10px] font-medium text-brand-muted sm:min-h-[2.75rem] sm:px-3 sm:text-sm"
                  >
                    {t.nav.signOut}
                  </button>
                </div>
              ) : !authLoading ? (
                <Link
                  href="/login"
                  className="warm-btn-primary min-h-[2.5rem] shrink-0 px-3 py-2 text-[10px] sm:min-h-[2.75rem] sm:px-4 sm:text-sm"
                >
                  {t.nav.login}
                </Link>
              ) : null}
            </div>
          </div>

          <nav
            className="flex w-full min-w-0 items-center gap-0.5 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-1 md:justify-end md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
            aria-label="Sections"
          >
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {t.nav[link.key]}
              </NavLink>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
