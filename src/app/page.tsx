import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

import {
  defaultLocale,
  detectLocale,
  getCountryFromHeaders,
  localeCookieName,
} from "@/lib/i18n";

export default async function RootPage() {
  const cookieStore = await cookies();
  const requestHeaders = await headers();

  const locale = detectLocale({
    cookieLocale: cookieStore.get(localeCookieName)?.value,
    country: getCountryFromHeaders((name) => requestHeaders.get(name)),
    acceptLanguage: requestHeaders.get("accept-language"),
  });

  redirect(`/${locale ?? defaultLocale}`);
}
