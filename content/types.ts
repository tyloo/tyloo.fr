import type { Locale } from "@/lib/i18n";
import type { ProjectId, ProjectKind, Rank, ServiceId } from "@/lib/site";

export type Testimonial = { quote: string; author: string; title: string };

export type Dictionary = {
  meta: { title: string; description: string; ogLocale: string };
  header: { skip: string; social: string; switchLabel: string; switchTo: Locale };
  cta: { book: string; newTab: string };
  hero: { role: string; tagline: string };
  hand: { heading: string; caption: string; flip: string; tools: string; ranks: Record<Rank, string> };
  services: Record<ServiceId, { title: string; summary: string }>;
  availability: { label: string; status: string; seat: string; location: string };
  steps: { heading: string; intro: string; items: { street: string; title: string; detail: string }[] };
  projects: {
    heading: string;
    intro: string;
    kinds: Record<ProjectKind, string>;
    visit: string;
    code: string;
    // "{name}" is replaced with the project name.
    screenshotAlt: string;
    items: Record<ProjectId, string>;
  };
  // The section is hidden while the list is empty.
  testimonials: { heading: string; items: Testimonial[] };
  about: {
    heading: string;
    intro: string;
    photoAlt: string;
    chipsLabel: string;
    chips: { value: string; label: string }[];
    careerHeading: string;
    careerIntro: string;
    career: { company: string; period: string; role: string; fact: string }[];
    cv: string;
  };
  closing: { heading: string; orEmail: string; agents: string; markdown: string; and: string; llms: string };
  footer: { line: string };
};
