"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { localeCookieName, type Locale } from "@/lib/i18n";
import type { SiteContent } from "@/lib/site-content";

type LocaleSwitcherProps = {
  locale: Locale;
  ui: SiteContent["ui"];
};

function replaceLocaleInPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${locale}`;
  }

  segments[0] = locale;
  return `/${segments.join("/")}`;
}

export default function LocaleSwitcher({ locale, ui }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const ruPath = replaceLocaleInPath(pathname, "ru");
  const zhPath = replaceLocaleInPath(pathname, "zh");

  const handleLocaleSelect = (nextLocale: Locale) => {
    document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
  };

  return (
    <div className="fixed right-4 top-4 z-[100] md:right-8 md:top-8">
      <div className="flex items-center rounded-full border border-white/35 bg-black/30 px-2 py-2 shadow-lg backdrop-blur-md">
        <Link
          href={ruPath}
          onClick={() => handleLocaleSelect("ru")}
          className={`rounded-full px-5 py-2.5 text-base font-semibold tracking-[0.08em] transition-all ${
            locale === "ru"
              ? "bg-white text-black shadow-sm"
              : "text-white/80 hover:bg-white/10 hover:text-white"
          }`}
        >
          {ui.languageRu}
        </Link>
        <Link
          href={zhPath}
          onClick={() => handleLocaleSelect("zh")}
          className={`rounded-full px-5 py-2.5 text-base font-semibold tracking-[0.02em] transition-all ${
            locale === "zh"
              ? "bg-white text-black shadow-sm"
              : "text-white/80 hover:bg-white/10 hover:text-white"
          }`}
        >
          {ui.languageZh}
        </Link>
      </div>
    </div>
  );
}
