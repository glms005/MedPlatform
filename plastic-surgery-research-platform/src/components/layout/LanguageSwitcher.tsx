"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useLocale } from "@/components/providers/LocaleProvider";
import type { Locale } from "@/lib/i18n";

const localeLabels: Record<Locale, string> = { ka: "GE", en: "EN", ru: "RU" };

const allLocales: Locale[] = ["ka", "en", "ru"];

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  const otherLocales = allLocales.filter((code) => code !== locale);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function pick(next: Locale) {
    setLocale(next);
    setOpen(false);
  }

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listId}
        className="flex min-h-[2.5rem] items-center gap-1 rounded-full border border-brand-outline/50 bg-white/80 px-2.5 py-1.5 text-[10px] font-semibold text-brand-slate shadow-sm transition-colors hover:border-brand-blue/50 hover:bg-brand-aqua-light/80 sm:min-h-[2.75rem] sm:gap-1.5 sm:px-3 sm:text-xs"
      >
        <span className="rounded-full bg-brand-gradient px-2 py-0.5 text-[10px] font-bold text-[#f4f3f1] sm:text-[11px]">
          {localeLabels[locale]}
        </span>
        <span className="text-brand-muted" aria-hidden>
          {open ? "▴" : "▾"}
        </span>
        <span className="sr-only">{t.nav.language}</span>
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label={t.nav.language}
          className="absolute right-0 top-[calc(100%+0.35rem)] z-[60] min-w-[5.5rem] overflow-hidden rounded-xl border border-brand-outline/70 bg-white py-1 shadow-lift"
        >
          {otherLocales.map((code) => (
            <li key={code} role="option" aria-selected={false}>
              <button
                type="button"
                onClick={() => pick(code)}
                className="flex w-full items-center px-3 py-2 text-left text-xs font-medium text-brand-slate transition-colors hover:bg-brand-aqua-light/90 hover:text-brand-blue sm:text-sm"
              >
                {localeLabels[code]}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
