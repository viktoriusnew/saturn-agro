import { headers } from "next/headers";

import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = (await headers()).get("x-locale") === "zh" ? "zh" : "ru";

  return (
    <html lang={locale}>
      <body className={`antialiased ${locale === "zh" ? "locale-zh" : ""}`}>{children}</body>
    </html>
  );
}
