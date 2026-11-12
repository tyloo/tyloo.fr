import { getDictionary } from "@/lib/dictionary";
import { hasLocale, locales } from "@/lib/i18n";
import { renderMarkdown } from "@/lib/markdown";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function GET(_request: Request, { params }: RouteContext<"/[lang]/index.md">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return new Response("Not found", { status: 404 });

  return new Response(renderMarkdown(getDictionary(lang), lang), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
