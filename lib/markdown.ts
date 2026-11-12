import type { Dictionary } from "@/content/types";
import type { Locale } from "./i18n";
import { projects, services, site } from "./site";

// The same page as the HTML version, as plain Markdown for LLMs and agents.
export function renderMarkdown(dict: Dictionary, locale: Locale): string {
  const lines: string[] = [
    `# ${site.name}`,
    "",
    `> ${dict.hero.role} ${dict.hero.tagline}`,
    "",
    `- ${dict.availability.status}. ${dict.availability.location}`,
    `- ${dict.cta.book}: ${site.callUrl}`,
    `- Email: ${site.email}`,
    `- GitHub: ${site.github}`,
    `- LinkedIn: ${site.linkedin}`,
    `- HTML: ${site.url}/${locale}`,
    "",
    `## ${dict.hand.heading}`,
    "",
  ];

  for (const service of services) {
    const copy = dict.services[service.id];
    lines.push(`### ${dict.hand.ranks[service.rank]}: ${copy.title}`, "", copy.summary, "", `${dict.hand.tools}: ${service.stack.join(", ")}.`, "");
  }

  lines.push(`## ${dict.steps.heading}`, "", dict.steps.intro, "");
  dict.steps.items.forEach((step, i) => {
    lines.push(`${i + 1}. **${step.street}: ${step.title}.** ${step.detail}`);
  });
  lines.push("");

  lines.push(`## ${dict.projects.heading}`, "", dict.projects.intro, "");
  for (const project of projects) {
    const links = [`[${dict.projects.visit}](${project.url})`];
    if (project.code) links.push(`[${dict.projects.code}](${project.code})`);
    lines.push(`- **${project.name}** (${dict.projects.kinds[project.kind]}): ${dict.projects.items[project.id]} ${links.join(", ")}`);
  }
  lines.push("");

  if (dict.testimonials.items.length > 0) {
    lines.push(`## ${dict.testimonials.heading}`, "");
    for (const testimonial of dict.testimonials.items) {
      lines.push(`> ${testimonial.quote}`, ">", `> ${testimonial.author}, ${testimonial.title}`, "");
    }
  }

  lines.push(`## ${dict.about.heading}`, "", dict.about.intro, "");
  for (const chip of dict.about.chips) lines.push(`- **${chip.value}** ${chip.label}`);
  lines.push("", `### ${dict.about.careerHeading}`, "");
  for (const job of dict.about.career) lines.push(`- **${job.company}**, ${job.role} (${job.period}): ${job.fact}`);
  lines.push("", `[${dict.about.cv}](${site.url}${site.cv})`, "");

  lines.push(`## ${dict.closing.heading}`, "", `[${dict.cta.book}](${site.callUrl})`, "", `${dict.closing.orEmail} ${site.email}.`, "");

  return lines.join("\n");
}
