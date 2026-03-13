import type { Metadata } from "next";

import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";
import { getSiteContent } from "@/lib/site-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const content = getSiteContent(locale);
  const url = `https://saturn-agro.com/${locale}`;

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: {
      canonical: url,
      languages: {
        ru: "https://saturn-agro.com/ru",
        zh: "https://saturn-agro.com/zh",
      },
    },
    openGraph: {
      title: content.metadata.openGraphTitle,
      description: content.metadata.openGraphDescription,
      type: "website",
      url,
      locale: locale === "zh" ? "zh_CN" : "ru_RU",
    },
    twitter: {
      card: "summary_large_image",
      title: content.metadata.openGraphTitle,
      description: content.metadata.openGraphDescription,
    },
  };
}

export default function LangLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
