// Data shared by every language. Translated copy lives in content/.

export const site = {
  url: "https://tyloo.fr",
  name: "Julien Bonvarlet",
  email: "jbonva@gmail.com",
  github: "https://github.com/tyloo",
  linkedin: "https://www.linkedin.com/in/julien-bonvarlet/",
  // Placeholder until the Cal.com event exists.
  callUrl: "https://cal.com/tyloo/30min",
  photo: "/julien-bonvarlet.webp",
  cv: "/resume-julien-bonvarlet.pdf",
} as const;

export type ServiceId = "backend" | "frontend" | "product" | "lead" | "ai";

export type Rank = "A" | "K" | "Q" | "J" | "10";

// Dealt in this order: a royal flush of spades.
export const services: { id: ServiceId; rank: Rank; stack: string[] }[] = [
  { id: "backend", rank: "A", stack: ["Symfony", "API Platform", "PHP", "MySQL", "RabbitMQ"] },
  { id: "frontend", rank: "K", stack: ["React", "Next.js", "Vue.js", "Nuxt", "TypeScript", "Tailwind CSS"] },
  { id: "product", rank: "Q", stack: ["Docker", "GitHub Actions", "AWS", "Google Cloud"] },
  { id: "lead", rank: "J", stack: ["Scrum", "C4", "Event Modeling"] },
  { id: "ai", rank: "10", stack: ["Claude Code", "Codex", "MCP", "Agent skills"] },
];

export type ProjectId = "lv-detailing" | "1001-petales" | "poker-quiz" | "poker-range-analyzer";

export type ProjectKind = "client" | "personal";

export const projects: { id: ProjectId; name: string; kind: ProjectKind; url: string; code?: string; image: string }[] = [
  { id: "lv-detailing", name: "LV Detailing", kind: "client", url: "https://www.lv-detailing.com", image: "/projects/lv-detailing.jpg" },
  { id: "1001-petales", name: "1001 Pétales", kind: "client", url: "https://1001-petales.vercel.app", image: "/projects/1001-petales.jpg" },
  { id: "poker-quiz", name: "Poker Quiz", kind: "personal", url: "https://pq.tyloo.fr", code: "https://github.com/tyloo/poker-quiz", image: "/projects/poker-quiz.jpg" },
  {
    id: "poker-range-analyzer",
    name: "Poker Range Analyzer",
    kind: "personal",
    url: "https://poker.tyloo.fr",
    code: "https://github.com/tyloo/poker-range-analyzer",
    image: "/projects/poker-range-analyzer.jpg",
  },
];
