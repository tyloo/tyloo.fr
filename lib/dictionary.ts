import { en } from "@/content/en";
import { fr } from "@/content/fr";
import type { Dictionary } from "@/content/types";
import type { Locale } from "./i18n";

const dictionaries: Record<Locale, Dictionary> = { fr, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
