import { type NextRequest, NextResponse } from "next/server";
import { defaultLocale, hasLocale, type Locale } from "@/lib/i18n";

function preferredLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const ranked = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.map((param) => param.trim()).find((param) => param.startsWith("q="));
      return { language: tag.toLowerCase().split("-")[0], q: q ? Number(q.slice(2)) : 1 };
    })
    .filter((entry) => entry.q > 0)
    .sort((a, b) => b.q - a.q);

  return ranked.map((entry) => entry.language).find(hasLocale) ?? defaultLocale;
}

// Every page lives under /fr or /en: send unprefixed paths to the visitor's language.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (hasLocale(pathname.split("/")[1] ?? "")) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request.headers.get("accept-language"))}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, the generated Apple icon and files with an extension (llms.txt, robots.txt, images…).
  matcher: ["/((?!_next/|apple-icon|.*\\..*).*)"],
};
