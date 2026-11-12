import type { Dictionary } from "./types";

export const fr: Dictionary = {
  meta: {
    title: "Julien Bonvarlet, développeur freelance senior à Paris",
    description:
      "Développeur freelance senior : backend Symfony et API Platform, frontend React et Vue.js, lead technique et développement augmenté par l'IA. Disponible dès maintenant.",
    ogLocale: "fr_FR",
  },
  header: {
    skip: "Aller au contenu",
    social: "Réseaux",
    switchLabel: "Read this page in English",
    switchTo: "en",
  },
  cta: {
    book: "Réserver un appel de 15\u00a0min",
    newTab: "(s'ouvre dans un nouvel onglet)",
  },
  hero: {
    role: "Développeur freelance senior.",
    photoAlt: "Portrait de Julien Bonvarlet",
    tagline: "Je conçois et livre des applications web solides, et j'aide les équipes à travailler avec des agents IA sans rien céder sur la qualité.",
  },
  hand: {
    heading: "Une quinte flush royale, cinq façons de vous aider",
    caption: "La meilleure main possible au poker. Choisissez une carte pour la retourner et voir le détail.",
    flip: "Retourner la carte",
    tools: "Outils",
    ranks: { A: "As de pique", K: "Roi de pique", Q: "Dame de pique", J: "Valet de pique", "10": "Dix de pique" },
  },
  services: {
    backend: { title: "Backend et API", summary: "Des API robustes et documentées, pensées pour durer et tenir la charge." },
    frontend: { title: "Frontend", summary: "Des interfaces rapides, accessibles et faciles à faire évoluer." },
    product: { title: "Produit de A à Z", summary: "Du premier atelier à la mise en production : backend, frontend, CI/CD et hébergement." },
    lead: { title: "Lead technique à temps partagé", summary: "Architecture, revues de code, rituels et mentorat pour une équipe qui livre de façon prévisible." },
    ai: {
      title: "Développement augmenté par l'IA",
      summary: "Former votre équipe aux agents de code : specs, tickets, garde-fous et revues, pour aller plus vite sans accumuler de dette.",
    },
  },
  availability: {
    label: "Disponibilité",
    status: "Disponible dès maintenant",
    seat: "Une place est libre à ma table.",
    location: "Basé à Paris. Missions à distance, présentiel exceptionnel.",
  },
  steps: {
    heading: "Une mission se joue comme une main",
    intro: "Cinq tours d'enchères, du premier appel à la mise en production.",
    items: [
      { street: "Préflop", title: "Un appel de 15 minutes", detail: "On regarde vos cartes : votre besoin, vos contraintes et votre calendrier." },
      { street: "Flop", title: "Une spec écrite", detail: "Je reformule le besoin en une spécification courte que vous validez." },
      { street: "Turn", title: "Des tickets découpés", detail: "Chaque ticket est assez petit pour être livré, testé et relu." },
      { street: "River", title: "Implémentation avec agents", detail: "Les agents écrivent une partie du code. Je pilote, je relis et je teste chaque changement." },
      { street: "Abattage", title: "Livraison continue", detail: "Le produit avance en production, semaine après semaine. Pas de bluff : vous voyez tout." },
    ],
  },
  projects: {
    heading: "Déjà sur la table",
    intro: "Des sites livrés pour des clients, et des outils que je développe pour moi.",
    kinds: { client: "Site client", personal: "Projet perso" },
    visit: "Voir le site",
    code: "Voir le code",
    screenshotAlt: "Capture d'écran de la page d'accueil de {name}",
    items: {
      "lv-detailing": "Site d'un service de detailing auto et moto à domicile en Île-de-France : offres, réels Instagram et demande de devis.",
      "1001-petales": "Site de l'association qui apporte matériel informatique, spectacles et activités aux enfants atteints de leucémie à l'hôpital Clocheville de Tours.",
      "poker-quiz": "Application mobile pour s'entraîner aux décisions préflop et postflop, avec suivi de progression.",
      "poker-range-analyzer": "Analyseur de ranges pour le No-Limit Hold'em 6-max : ranges GTO, calcul d'équité et recommandations d'action.",
    },
  },
  testimonials: {
    heading: "Ce qu'en disent les autres joueurs",
    items: [],
  },
  about: {
    heading: "Qui tient les cartes",
    intro:
      "Quinze ans de développement full-stack, de Symfony à React, jusqu'à la direction de l'équipe Core open source de PrestaShop. Aujourd'hui freelance, je prends en charge vos projets de bout en bout ou je renforce votre équipe là où elle en a besoin.",
    chipsLabel: "Mon tapis",
    chips: [
      { value: "15", label: "ans de métier" },
      { value: "30+", label: "marques servies par une même plateforme" },
      { value: "80\u00a0%", label: "de couverture de tests chez FAUME" },
    ],
    careerHeading: "Les mains précédentes",
    careerIntro: "Où j'ai joué avant de passer freelance.",
    career: [
      {
        company: "PrestaShop",
        period: "2025",
        role: "Engineering Manager",
        fact: "Direction de l'équipe Core open source, refonte du cycle de release et définition de la stratégie IA de l'entreprise.",
      },
      {
        company: "FAUME",
        period: "2022–2025",
        role: "Tech Lead",
        fact: "Plateforme servant plus de 30 marques, couverture de tests portée à 80\u00a0% et déploiements automatisés.",
      },
      { company: "Mindgeek", period: "2021–2022", role: "Développeur backend senior", fact: "Microservices entièrement dockerisés et service de vérification d'identité." },
      {
        company: "Meero",
        period: "2019–2021",
        role: "Développeur backend senior",
        fact: "Couverture de tests de l'API principale passée de 10\u00a0% à plus de 60\u00a0%, et trois mois de formation des développeurs.",
      },
      { company: "Cirruseo", period: "2017–2019", role: "Architecte Google Cloud", fact: "Architecte Google Cloud certifié, missions de conseil pour de grands comptes." },
    ],
    cv: "Télécharger mon CV (PDF)",
  },
  closing: {
    heading: "On joue cartes sur table\u00a0?",
    orEmail: "Ou écrivez-moi à",
    agents: "Pas de bluff avec les agents IA non plus : ce site existe aussi en",
    markdown: "version Markdown",
    and: "et en",
    llms: "llms.txt",
  },
  footer: {
    line: "Julien Bonvarlet, développeur freelance senior à Paris.",
  },
};
