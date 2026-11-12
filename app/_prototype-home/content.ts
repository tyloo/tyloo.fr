// PROTOTYPE content shared by the four homepage variants.
// Fields marked PLACEHOLDER need real values from Julien before launch.

export const profile = {
  name: "Julien Bonvarlet",
  handle: "Tyloo",
  role: "Développeur freelance senior",
  tagline: "Je conçois et livre des applications web solides, et j'aide les équipes à travailler avec des agents IA sans rien céder sur la qualité.",
  intro:
    "Quinze ans de développement full-stack, de Symfony à React, jusqu'à la direction de l'équipe Core open source de PrestaShop. Aujourd'hui freelance, je prends en charge vos projets de bout en bout ou je renforce votre équipe là où elle en a besoin.",
  yearsOfExperience: 15,
  // PLACEHOLDER
  availability: "Disponible à partir de janvier 2027",
  // PLACEHOLDER
  location: "Basé en France, en remote ou sur site ponctuellement",
  photo: "/julien-bonvarlet.webp",
  cv: "/resume-julien-bonvarlet.pdf",
  email: "jbonva@gmail.com",
  github: "https://github.com/tyloo",
  linkedin: "https://www.linkedin.com/in/julien-bonvarlet/",
  // PLACEHOLDER: real Cal.com event link
  callUrl: "https://cal.com/tyloo/30min",
  callLabel: "Réserver un appel de 30 min",
};

export type Service = {
  id: string;
  title: string;
  summary: string;
  stack: string[];
};

export const services: Service[] = [
  {
    id: "backend",
    title: "Backend et API",
    summary: "Des API robustes et documentées, pensées pour durer et tenir la charge.",
    stack: ["Symfony", "API Platform", "PHP", "MySQL", "RabbitMQ"],
  },
  {
    id: "frontend",
    title: "Frontend",
    summary: "Des interfaces rapides, accessibles et faciles à faire évoluer.",
    stack: ["React", "Next.js", "Vue.js", "Nuxt", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "product",
    title: "Produit de A à Z",
    summary: "Du premier atelier à la mise en production : backend, frontend, CI/CD et hébergement.",
    stack: ["Docker", "GitHub Actions", "AWS", "Google Cloud"],
  },
  {
    id: "lead",
    title: "Lead technique à temps partagé",
    summary: "Architecture, revues de code, rituels et mentorat pour une équipe qui livre de façon prévisible.",
    stack: ["Scrum", "Modèle C4", "Event Modeling"],
  },
  {
    id: "ai",
    title: "Développement augmenté par l'IA",
    summary: "Former votre équipe aux agents de code : specs, tickets, garde-fous et revues, pour aller plus vite sans accumuler de dette.",
    stack: ["Claude Code", "Codex", "MCP", "Skills d'agent"],
  },
];

export type Step = {
  title: string;
  // Past-tense form, used by layouts that show the process as events.
  done: string;
  detail: string;
};

export const steps: Step[] = [
  {
    title: "Un appel de 30 minutes",
    done: "Appel réservé",
    detail: "On parle de votre besoin, de vos contraintes et de votre calendrier.",
  },
  {
    title: "Une spec écrite",
    done: "Spec validée",
    detail: "Je reformule le besoin en une spécification courte que vous validez.",
  },
  {
    title: "Des tickets découpés",
    done: "Tickets découpés",
    detail: "Chaque ticket est assez petit pour être livré, testé et relu.",
  },
  {
    title: "Implémentation avec agents",
    done: "Code relu et testé",
    detail: "Les agents écrivent une partie du code. Je pilote, je relis et je teste chaque changement.",
  },
  {
    title: "Livraison continue",
    done: "Mis en production",
    detail: "Vous voyez le produit avancer en production, semaine après semaine.",
  },
];

export type Highlight = {
  company: string;
  role: string;
  period: string;
  fact: string;
};

export const highlights: Highlight[] = [
  {
    company: "PrestaShop",
    role: "Engineering Manager",
    period: "2025",
    fact: "Direction de l'équipe Core open source, refonte du cycle de release et définition de la stratégie IA de l'entreprise.",
  },
  {
    company: "FAUME",
    role: "Tech Lead",
    period: "2022–2025",
    fact: "Plateforme servant plus de 30 marques, couverture de tests portée à 80 % et déploiements automatisés.",
  },
  {
    company: "Mindgeek",
    role: "Développeur backend senior",
    period: "2021–2022",
    fact: "Microservices entièrement dockerisés et service de vérification d'identité.",
  },
  {
    company: "Meero",
    role: "Développeur backend senior",
    period: "2019–2021",
    fact: "Couverture de tests de l'API principale passée de 10 % à plus de 60 %, et trois mois de formation des développeurs.",
  },
  {
    company: "Cirruseo",
    role: "Architecte Google Cloud",
    period: "2017–2019",
    fact: "Architecte Google Cloud certifié, missions de conseil pour de grands comptes.",
  },
];

export type Project = {
  name: string;
  kind: "Site client" | "Projet perso";
  description: string;
  url: string;
  code?: string;
  image: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "LV Detailing",
    kind: "Site client",
    description: "Site d'un service de detailing auto et moto à domicile en Île-de-France : offres, réels Instagram et demande de devis.",
    url: "https://www.lv-detailing.com",
    image: "/projects/lv-detailing.jpg",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "1001 Pétales",
    kind: "Site client",
    description: "Site de l'association qui apporte matériel informatique, spectacles et activités aux enfants atteints de leucémie à l'hôpital Clocheville de Tours.",
    url: "https://1001-petales.vercel.app",
    image: "/projects/1001-petales.jpg",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Poker Quiz",
    kind: "Projet perso",
    description: "Application mobile pour s'entraîner aux décisions préflop et postflop, avec suivi de progression.",
    url: "https://pq.tyloo.fr",
    code: "https://github.com/tyloo/poker-quiz",
    image: "/projects/poker-quiz.jpg",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Poker Range Analyzer",
    kind: "Projet perso",
    description: "Analyseur de ranges pour le No-Limit Hold'em 6-max : ranges GTO, calcul d'équité et recommandations d'action.",
    url: "https://poker.tyloo.fr",
    code: "https://github.com/tyloo/poker-range-analyzer",
    image: "/projects/poker-range-analyzer.jpg",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  title: string;
};

// PLACEHOLDER: invented quotes, to be replaced with real testimonials.
export const testimonials: Testimonial[] = [
  {
    quote: "Julien a remis à plat notre API et notre culture de tests en quelques mois. L'équipe livre plus souvent, et avec plus de sérénité.",
    author: "Prénom Nom",
    title: "CTO, entreprise à préciser",
  },
  {
    quote: "Il ne se contente pas d'écrire du code : il pose les bonnes questions avant, et laisse derrière lui une équipe plus autonome.",
    author: "Prénom Nom",
    title: "Product manager, entreprise à préciser",
  },
  {
    quote: "Son accompagnement sur les agents de code nous a fait gagner un temps considérable, sans jamais sacrifier la relecture.",
    author: "Prénom Nom",
    title: "Lead développeur, entreprise à préciser",
  },
];

export const agent = {
  markdownUrl: "/index.md",
  llmsUrl: "/llms.txt",
  chatLabel: "Posez une question à mon agent",
  chatPlaceholder: "Mon parcours, mes services, mes disponibilités…",
  suggestions: ["Tu as déjà travaillé avec API Platform ?", "Tu peux reprendre un projet existant ?", "Comment travailles-tu avec les agents ?"],
  // PROTOTYPE: canned reply until the real chat endpoint exists.
  cannedReply:
    "Oui. J'ai utilisé API Platform chez FAUME, Meero et PrestaShop, sur des API qui servaient des dizaines de marques. Le plus simple est d'en parler pendant un appel de 30 minutes.",
};
