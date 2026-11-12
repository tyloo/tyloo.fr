import { en } from "@/content/en";
import { site } from "@/lib/site";

// https://llmstxt.org
export function GET() {
  const body = [
    `# ${site.name}`,
    "",
    `> ${en.hero.role} ${en.hero.tagline} ${en.availability.status}. ${en.availability.location}`,
    "",
    "Julien is a freelance developer with fifteen years of experience: Symfony and API Platform backends, React and Vue.js frontends, part-time tech lead, and coaching teams on AI-augmented development. The site exists in French and English.",
    "",
    "## Pages",
    "",
    `- [Accueil (français)](${site.url}/fr/index.md): services, méthode, projets et parcours`,
    `- [Home (English)](${site.url}/en/index.md): services, process, projects and career`,
    "",
    "## Contact",
    "",
    `- [Book a 30-minute call](${site.callUrl})`,
    `- [Email](mailto:${site.email})`,
    "",
    "## Optional",
    "",
    `- [CV (PDF)](${site.url}${site.cv})`,
    `- [GitHub](${site.github})`,
    `- [LinkedIn](${site.linkedin})`,
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
