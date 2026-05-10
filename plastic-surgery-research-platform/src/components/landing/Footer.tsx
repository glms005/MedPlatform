"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useLocale } from "@/components/providers/LocaleProvider";

export function Footer() {
  const { t, locale } = useLocale();

  return (
    <footer className="border-t border-brand-outline/50 bg-brand-cream">
      <Container>
        <div className="flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between lg:py-14">
          <div>
            <p
              className={
                locale === "ka"
                  ? "text-sm font-semibold text-brand-ink"
                  : "font-display text-sm font-semibold text-brand-ink"
              }
            >
              {t.meta.title}
            </p>
            <p className="mt-1 text-sm text-brand-muted">{t.footer.tagline}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {t.footer.links.map((l) =>
              l.href.startsWith("#") ? (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-brand-muted hover:text-brand-ink"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-brand-muted hover:text-brand-ink"
                >
                  {l.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
