import { NextResponse, type NextRequest } from "next/server";

import {
  defaultLocale,
  detectLocale,
  getCountryFromHeaders,
  isLocale,
  localeCookieName,
  type Locale,
} from "@/lib/i18n";

function getLocaleFromPath(pathname: string): Locale | null {
  const [maybeLocale] = pathname.split("/").filter(Boolean);
  return maybeLocale && isLocale(maybeLocale) ? maybeLocale : null;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const localeFromPath = getLocaleFromPath(pathname);

  if (localeFromPath) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", localeFromPath);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  const locale = detectLocale({
    cookieLocale: request.cookies.get(localeCookieName)?.value,
    country: getCountryFromHeaders((name) => request.headers.get(name)),
    acceptLanguage: request.headers.get("accept-language"),
  });

  const url = request.nextUrl.clone();
  url.pathname = `/${locale ?? defaultLocale}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
