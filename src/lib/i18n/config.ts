export const locales = ["fr", "en", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";
export const LOCALE_COOKIE = "locale";

export const localeLabels: Record<Locale, { short: string; name: string }> = {
  fr: { short: "FR", name: "Français" },
  en: { short: "EN", name: "English" },
  zh: { short: "中文", name: "中文" },
};

export const htmlLang: Record<Locale, string> = {
  fr: "fr",
  en: "en",
  zh: "zh-CN",
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}
