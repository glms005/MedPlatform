"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { LOCALE_STORAGE_KEY, dictionary, locales } from "@/lib/i18n";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(LOCALE_STORAGE_KEY);
  return v && locales.includes(v as Locale) ? (v as Locale) : null;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = readStoredLocale();
    if (stored) setLocaleState(stored);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(LOCALE_STORAGE_KEY, next);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang =
      locale === "ka" ? "ka" : locale === "ru" ? "ru" : "en";
    document.title = dictionary[locale].meta.title;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: dictionary[locale],
    }),
    [locale, setLocale]
  );

  return (
    <LocaleContext.Provider value={value}>
      <div
        className={
          locale === "ka" ? "min-h-screen font-georgian" : "min-h-screen font-sans"
        }
      >
        {children}
      </div>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
