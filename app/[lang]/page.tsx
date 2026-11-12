import { notFound } from "next/navigation";
import { About } from "@/components/home/about";
import { Availability } from "@/components/home/availability";
import { Closing } from "@/components/home/closing";
import { Hero } from "@/components/home/hero";
import { Projects } from "@/components/home/projects";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import { Steps } from "@/components/home/steps";
import { Testimonials } from "@/components/home/testimonials";
import { getDictionary } from "@/lib/dictionary";
import { hasLocale } from "@/lib/i18n";
import { buildJsonLd } from "@/lib/json-ld";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const jsonLd = JSON.stringify(buildJsonLd(dict, lang)).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD built from our own content, with "<" escaped.
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <a
        href="#main"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-50 focus-visible:rounded-full focus-visible:bg-sun focus-visible:px-5 focus-visible:py-2.5 focus-visible:font-bold focus-visible:text-ink"
      >
        {dict.header.skip}
      </a>
      <SiteHeader dict={dict} />
      <main id="main">
        <Hero dict={dict} />
        <Availability dict={dict} />
        <Steps dict={dict} />
        <Projects dict={dict} />
        <Testimonials dict={dict} locale={lang} />
        <About dict={dict} />
        <Closing dict={dict} locale={lang} />
      </main>
      <SiteFooter dict={dict} />
    </>
  );
}
