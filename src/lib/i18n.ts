export const locales = ["ru", "zh"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ru";
export const localeCookieName = "saturn_agro_locale";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "ru" ? "zh" : "ru";
}

export function getLocaleFromCountry(country?: string | null): Locale | null {
  if (!country) return null;

  const normalized = country.toUpperCase();

  if (normalized === "CN") return "zh";
  if (normalized === "RU") return "ru";

  return null;
}

export function getLocaleFromAcceptLanguage(header?: string | null): Locale {
  if (!header) return defaultLocale;

  const normalized = header.toLowerCase();

  if (normalized.includes("zh")) {
    return "zh";
  }

  return "ru";
}

export function detectLocale(options: {
  cookieLocale?: string | null;
  country?: string | null;
  acceptLanguage?: string | null;
}): Locale {
  const { cookieLocale, country, acceptLanguage } = options;

  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }

  return (
    getLocaleFromCountry(country) ??
    getLocaleFromAcceptLanguage(acceptLanguage) ??
    defaultLocale
  );
}

export function getCountryFromHeaders(
  getHeader: (name: string) => string | null | undefined,
): string | null {
  return (
    getHeader("x-vercel-ip-country") ??
    getHeader("cf-ipcountry") ??
    getHeader("x-country-code") ??
    null
  );
}
