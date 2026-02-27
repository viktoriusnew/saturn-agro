import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Сатурн-Агро — Стратегическое инвестиционное предложение",
  description:
    "ООО «Сатурн-Агро» — агропромышленный актив, 22 002,96 га, Волгоградская область. Стратегическое инвестиционное предложение: 49% доли, 3 млрд ₽.",
  openGraph: {
    title: "Сатурн-Агро — Инвестиционное предложение",
    description: "Агропромышленный актив 22 002,96 га. Стратегическое партнёрство.",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Сатурн-Агро — Инвестиционное предложение",
    description: "Агропромышленный актив 22 002,96 га. Стратегическое партнёрство.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
