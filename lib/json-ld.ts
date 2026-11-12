import type { Dictionary } from "@/content/types";
import type { Locale } from "./i18n";
import { services, site } from "./site";

export function buildJsonLd(dict: Dictionary, locale: Locale) {
  const person = `${site.url}/#person`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": person,
        name: site.name,
        alternateName: site.handle,
        jobTitle: dict.hero.role.replace(/\.$/, ""),
        url: site.url,
        image: `${site.url}${site.photo}`,
        email: `mailto:${site.email}`,
        sameAs: [site.github, site.linkedin],
        address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
        knowsAbout: [...new Set(services.flatMap((service) => service.stack))],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/${locale}#service`,
        name: site.name,
        description: dict.meta.description,
        url: `${site.url}/${locale}`,
        inLanguage: locale,
        founder: { "@id": person },
        areaServed: { "@type": "Country", name: "France" },
        address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: dict.hand.heading,
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: dict.services[service.id].title, description: dict.services[service.id].summary },
          })),
        },
      },
    ],
  };
}
