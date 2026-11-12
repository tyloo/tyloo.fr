import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Julien Bonvarlet, senior freelance developer in Paris",
    description: "Senior freelance developer: Symfony and API Platform backends, React and Vue.js frontends, tech leadership and AI-augmented development. Available now.",
    ogLocale: "en_US",
  },
  header: {
    skip: "Skip to content",
    social: "Social links",
    switchLabel: "Lire cette page en français",
    switchTo: "fr",
  },
  cta: {
    book: "Book a 15-min call",
    newTab: "(opens in a new tab)",
  },
  hero: {
    role: "Senior freelance developer.",
    photoAlt: "Portrait of Julien Bonvarlet",
    tagline: "I design and ship solid web applications, and I help teams work with AI agents without giving up on quality.",
  },
  hand: {
    heading: "My royal flush",
    caption: "Five ways I can help, the best possible hand in poker. Pick a card to flip it and see the details.",
    flip: "Flip the card",
    tools: "Tools",
    ranks: { A: "Ace of spades", K: "King of spades", Q: "Queen of spades", J: "Jack of spades", "10": "Ten of spades" },
  },
  services: {
    backend: { title: "Backend and APIs", summary: "Robust, documented APIs, built to last and to handle the load." },
    frontend: { title: "Frontend", summary: "Fast, accessible interfaces that are easy to evolve." },
    product: { title: "Product, end to end", summary: "From the first workshop to production: backend, frontend, CI/CD and hosting." },
    lead: { title: "Part-time tech lead", summary: "Architecture, code reviews, rituals and mentoring for a team that ships predictably." },
    ai: {
      title: "AI-augmented development",
      summary: "Training your team to work with coding agents: specs, tickets, guardrails and reviews, to move faster without piling up debt.",
    },
  },
  availability: {
    label: "Availability",
    status: "Available now",
    seat: "There's a seat open at my table.",
    location: "Based in Paris. Remote work, on-site only occasionally.",
  },
  steps: {
    heading: "How a hand plays out",
    intro: "A project plays in five betting rounds, from the first call to production.",
    items: [
      { street: "Preflop", title: "A 15-minute call", detail: "We look at your cards: your needs, your constraints and your timeline." },
      { street: "Flop", title: "A written spec", detail: "I restate the need as a short specification that you approve." },
      { street: "Turn", title: "Small tickets", detail: "Each ticket is small enough to be shipped, tested and reviewed." },
      { street: "River", title: "Building with agents", detail: "Agents write part of the code. I steer, review and test every change." },
      { street: "Showdown", title: "Continuous delivery", detail: "The product moves forward in production, week after week. No bluffing: you see everything." },
    ],
  },
  projects: {
    heading: "Already on the table",
    intro: "Sites shipped for clients, and tools I build for myself.",
    kinds: { client: "Client site", personal: "Side project" },
    visit: "Visit the site",
    code: "View the code",
    screenshotAlt: "Screenshot of the {name} home page",
    items: {
      "lv-detailing": "Website for an at-home car and motorbike detailing service around Paris: packages, Instagram reels and a quote request form.",
      "1001-petales": "Website for a charity that brings IT equipment, shows and activities to children with leukaemia at Clocheville Hospital in Tours.",
      "poker-quiz": "Mobile app to practise preflop and postflop decisions, with progress tracking.",
      "poker-range-analyzer": "Range analyser for 6-max No-Limit Hold'em: GTO ranges, equity calculation and action recommendations.",
    },
  },
  testimonials: {
    heading: "What other players say",
    items: [],
  },
  about: {
    heading: "Who holds the cards",
    intro:
      "Fifteen years of full-stack development, from Symfony to React, up to leading PrestaShop's open-source Core team. Now freelance, I take on your projects end to end or strengthen your team wherever it needs it.",
    chipsLabel: "My stack of chips",
    chips: [
      { value: "15", label: "years in the trade" },
      { value: "30+", label: "brands served by a single platform" },
      { value: "80%", label: "test coverage at FAUME" },
    ],
    careerHeading: "Previous hands",
    careerIntro: "Where I played before going freelance.",
    career: [
      {
        company: "PrestaShop",
        period: "2025",
        role: "Engineering Manager",
        fact: "Led the open-source Core team, redesigned the release cycle and defined the company's AI strategy.",
      },
      {
        company: "FAUME",
        period: "2022–2025",
        role: "Tech Lead",
        fact: "A platform serving more than 30 brands, test coverage raised to 80% and automated deployments.",
      },
      { company: "Mindgeek", period: "2021–2022", role: "Senior backend developer", fact: "Fully dockerised microservices and an identity verification service." },
      {
        company: "Meero",
        period: "2019–2021",
        role: "Senior backend developer",
        fact: "Main API test coverage raised from 10% to over 60%, and three months spent training developers.",
      },
      { company: "Cirruseo", period: "2017–2019", role: "Google Cloud architect", fact: "Certified Google Cloud architect, consulting for large enterprises." },
    ],
    cv: "Download my CV (PDF)",
  },
  closing: {
    heading: "Cards on the table?",
    orEmail: "Or email me at",
    agents: "No bluffing with AI agents either: this site also comes as",
    markdown: "Markdown",
    and: "and",
    llms: "llms.txt",
  },
  footer: {
    line: "Julien Bonvarlet, senior freelance developer in Paris.",
  },
};
