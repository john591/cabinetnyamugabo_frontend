"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useMemo } from "react";

import {
  localeLabels,
  locales,
  LOCALE_COOKIE,
  type Locale,
} from "./config";
import { createT, type TFunction } from "./dictionaries";

const LocaleContext = createContext<Locale>("fr");

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function useT(): TFunction {
  const locale = useLocale();
  return useMemo(() => createT(locale), [locale]);
}

function saveLocale(next: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const t = useT();

  function change(next: Locale) {
    if (next === locale) return;
    saveLocale(next);
    router.refresh();
  }

  return (
    <div
      role="group"
      aria-label={t("lang.label")}
      className={`inline-flex items-center border border-slate-300 text-[11px] font-semibold ${className}`}
    >
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          title={localeLabels[code].name}
          aria-pressed={code === locale}
          onClick={() => change(code)}
          className={`px-2.5 py-2 transition ${
            code === locale
              ? "bg-[#0d4595] text-white"
              : "text-slate-700 hover:bg-slate-100"
          }`}
        >
          {localeLabels[code].short}
        </button>
      ))}
    </div>
  );
}
