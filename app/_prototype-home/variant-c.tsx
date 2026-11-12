import { Martian_Mono } from "next/font/google";
import Image from "next/image";
import type { ReactNode } from "react";
import { agent, highlights, profile, projects, services, steps, testimonials } from "./content";
import styles from "./variant-c.module.css";
import { VariantCSession } from "./variant-c-session";
import { VariantCCallShortcut } from "./variant-c-shortcut";

const martian = Martian_Mono({ subsets: ["latin"], axes: ["wdth"], display: "swap" });

const shortHash = (seed: string) => {
  let hash = 0x811c9dc5;
  for (const char of seed) {
    hash ^= char.codePointAt(0) ?? 0;
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(16).padStart(8, "0").slice(0, 7);
};

const slug = (name: string) =>
  name
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");

const windows = [
  { id: "services", label: "services" },
  { id: "process", label: "process" },
  { id: "projets", label: "projets" },
  { id: "parcours", label: "parcours" },
  { id: "temoignages", label: "témoignages" },
  { id: "contact", label: "contact" },
];

const small = "text-[13px] [font-stretch:75%]";
const dim = "text-[#B3A2B9]";
const link = "underline decoration-[#8E7A95] underline-offset-4 hover:decoration-[#EDE3D8]";

export function VariantC() {
  return (
    <div className={`${martian.className} ${styles.root} min-h-screen bg-[#241629] pb-24 text-[#EDE3D8] text-[15px] leading-[1.6]`}>
      <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-[#EDE3D8] focus:px-3 focus:py-1 focus:text-[#241629]">
        Aller au contenu
      </a>

      <header className={`sticky top-0 z-40 border-[#4A3552] border-b bg-[#2F1E35] ${small}`}>
        <div className="mx-auto flex max-w-[80rem] flex-wrap items-center gap-x-5 gap-y-1 px-4 py-1.5 sm:px-6">
          <p className="font-semibold">
            <span className={dim}>[0] </span>julien@tyloo.fr
          </p>
          <nav aria-label="Sections de la page" className="hidden xl:block">
            <ul className="flex gap-4">
              {windows.map((item, index) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={`${dim} hover:text-[#EDE3D8]`}>
                    {index + 1}:{item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="ml-auto flex flex-wrap items-center gap-x-5 gap-y-1">
            <p className="text-[#F2C36B]">{profile.availability}</p>
            <p className={`hidden lg:block ${dim}`}>France, en remote ou sur site</p>
            <VariantCCallShortcut />
          </div>
        </div>
      </header>

      <main id="contenu" className="mx-auto max-w-[80rem] px-4 pt-6 sm:px-6 sm:pt-10">
        <div className="grid border border-[#4A3552] bg-[#2F1E35] lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)]">
          <section aria-labelledby="variant-c-name" className="min-w-0">
            <PaneTitle label="session" aside="~/boutique-en-ligne" />
            <div className="p-5 sm:p-8">
              <h1 id="variant-c-name" className="font-extrabold text-[clamp(2rem,6vw,4.5rem)] leading-[1.02] [font-stretch:112.5%]">
                {profile.name}
              </h1>
              <p className="mt-4 font-semibold text-[17px] [font-stretch:112.5%]">{profile.role}</p>
              <p className="mt-2 max-w-[62ch]">{profile.tagline}</p>

              <p className={`mt-8 max-w-[62ch] border-[#4A3552] border-t pt-4 ${dim}`}>
                Une session type, rejouée : la demande d'un client, le travail de l'agent, ma relecture, puis la mise en production.
              </p>
              <div className="mt-4 max-w-[75ch]">
                <VariantCSession />
              </div>
            </div>
          </section>

          <aside aria-labelledby="variant-c-profile" className="border-[#4A3552] border-t lg:border-t-0 lg:border-l">
            <PaneTitle label="profil" />
            <h2 id="variant-c-profile" className="sr-only">
              Profil
            </h2>
            <div className="grid gap-6 p-5 sm:grid-cols-[13rem_minmax(0,1fr)] sm:p-8 lg:grid-cols-1">
              <Duotone className="aspect-square w-full max-w-[20rem]">
                <Image
                  src={profile.photo}
                  alt="Portrait de Julien Bonvarlet"
                  fill
                  sizes="(min-width: 1024px) 20rem, (min-width: 640px) 13rem, 100vw"
                  className="object-cover grayscale contrast-125 mix-blend-multiply"
                  loading="eager"
                />
              </Duotone>
              <div className="space-y-6">
                <p className="max-w-[62ch]">{profile.intro}</p>
                <dl className="grid grid-cols-[11ch_minmax(0,1fr)] gap-x-3 gap-y-1">
                  <dt className={`${dim} ${small} pt-0.5`}>expérience</dt>
                  <dd>{profile.yearsOfExperience} ans</dd>
                  <dt className={`${dim} ${small} pt-0.5`}>lieu</dt>
                  <dd>{profile.location}</dd>
                  <dt className={`${dim} ${small} pt-0.5`}>dispo</dt>
                  <dd className="text-[#F2C36B]">{profile.availability}</dd>
                </dl>
                <ul className="space-y-1">
                  <li>
                    <a href={profile.cv} className={link}>
                      Télécharger mon CV (PDF)
                    </a>
                  </li>
                  <li>
                    <a href={profile.github} className={link}>
                      Voir mon GitHub
                    </a>
                  </li>
                  <li>
                    <a href={profile.linkedin} className={link}>
                      Voir mon LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${profile.email}`} className={link}>
                      {profile.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>

        <Command id="services" title="Services" command="cat services.md">
          <ul className="grid gap-x-12 gap-y-10 lg:grid-cols-2">
            {services.map((service) => (
              <li key={service.id}>
                <h3 className="font-bold text-[clamp(1.25rem,2.6vw,1.75rem)] leading-tight [font-stretch:112.5%]">
                  <span aria-hidden="true" className={dim}>
                    ##{" "}
                  </span>
                  {service.title}
                </h3>
                <p className="mt-3 max-w-[62ch]">{service.summary}</p>
                <p className={`mt-2 ${dim} ${small}`}>
                  <span className="sr-only">Outils : </span>
                  {service.stack.join(", ")}
                </p>
              </li>
            ))}
          </ul>
        </Command>

        <Command id="process" title="Comment on travaille" command="cat process.md">
          <ol className="max-w-[70ch] space-y-5">
            {steps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[3ch_minmax(0,1fr)] gap-x-3">
                <span aria-hidden="true" className={dim}>
                  {index + 1}.
                </span>
                <div>
                  <h3 className="font-bold [font-stretch:112.5%]">{step.title}</h3>
                  <p className="mt-1">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </Command>

        <Command id="projets" title="Projets" command="ls projets/">
          <ul className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <li key={project.name}>
                <article className="group h-full border border-[#4A3552] bg-[#2F1E35]">
                  <div className={`flex justify-between gap-3 border-[#4A3552] border-b px-3 py-1 ${small} ${dim}`}>
                    <span aria-hidden="true">{slug(project.name)}/</span>
                    <span>{project.kind}</span>
                  </div>
                  <Duotone className="aspect-[16/9] border-[#4A3552] border-b" hoverToColour>
                    <Image
                      src={project.image}
                      alt={`Capture d'écran de ${project.name}`}
                      fill
                      sizes="(min-width: 1280px) 39rem, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top grayscale mix-blend-multiply group-focus-within:mix-blend-normal group-focus-within:grayscale-0 group-hover:mix-blend-normal group-hover:grayscale-0"
                    />
                  </Duotone>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-bold text-[clamp(1.125rem,2vw,1.375rem)] leading-tight [font-stretch:112.5%]">{project.name}</h3>
                    <p className="mt-2 max-w-[62ch]">{project.description}</p>
                    <p className={`mt-2 ${dim} ${small}`}>
                      <span className="sr-only">Outils : </span>
                      {project.stack.join(", ")}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
                      <li>
                        <a href={project.url} className={link}>
                          voir le site<span className="sr-only"> {project.name}</span>
                        </a>
                      </li>
                      {project.code && (
                        <li>
                          <a href={project.code} className={link}>
                            voir le code<span className="sr-only"> de {project.name}</span>
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Command>

        <Command id="parcours" title="Parcours" command="git log --author=julien --oneline">
          <ol className="max-w-[75ch] space-y-5">
            {highlights.map((highlight) => (
              <li key={highlight.company} className="grid grid-cols-[7ch_minmax(0,1fr)] gap-x-3">
                <span aria-hidden="true" className={dim}>
                  {shortHash(highlight.company)}
                </span>
                <div>
                  <p>
                    <span className="text-[#F2C36B]">{highlight.period}</span> <strong className="font-bold [font-stretch:112.5%]">{highlight.company}</strong>{" "}
                    <span className={dim}>{highlight.role}</span>
                  </p>
                  <p className="mt-1">{highlight.fact}</p>
                </div>
              </li>
            ))}
          </ol>
        </Command>

        <Command id="temoignages" title="Témoignages" command="git log --grep=témoignage">
          <ol className="max-w-[75ch] space-y-10">
            {testimonials.map((testimonial) => (
              <li key={testimonial.quote}>
                <figure>
                  <p className={dim}>
                    <span aria-hidden="true">commit {shortHash(testimonial.quote)}</span>
                  </p>
                  <p className="mt-1 pl-[4ch] font-bold [font-stretch:112.5%]">témoignage : {testimonial.title.split(",")[0]}</p>
                  <blockquote className="mt-3 pl-[4ch]">
                    <p>«&nbsp;{testimonial.quote}&nbsp;»</p>
                  </blockquote>
                  <figcaption className="mt-3 pl-[4ch] text-[#E58FCB]">
                    Co-authored-by: {testimonial.author} ({testimonial.title})
                  </figcaption>
                </figure>
              </li>
            ))}
          </ol>
        </Command>

        <Command id="contact" title="Contact" command="open cal.com">
          <a
            href={profile.callUrl}
            className="inline-block border border-[#EDE3D8] px-5 py-4 font-extrabold text-[clamp(1.5rem,4.6vw,3.5rem)] leading-[1.1] [font-stretch:112.5%] hover:bg-[#EDE3D8] hover:text-[#241629]"
          >
            {profile.callLabel}
          </a>
          <div className="mt-6 max-w-[70ch] space-y-2">
            <p className={dim}>Le lien ouvre mon agenda sur Cal.com, vous choisissez le créneau.</p>
            <p className="text-[#F2C36B]">{profile.availability}</p>
            <p>
              Ou écrivez-moi :{" "}
              <a href={`mailto:${profile.email}`} className={link}>
                {profile.email}
              </a>
            </p>
            <p>
              Ce site se lit aussi par vos agents :{" "}
              <a href={agent.markdownUrl} className={link}>
                index.md
              </a>{" "}
              <span className={dim}>et</span>{" "}
              <a href={agent.llmsUrl} className={link}>
                llms.txt
              </a>
            </p>
          </div>
        </Command>
      </main>

      <footer className={`mt-20 border-[#4A3552] border-y bg-[#2F1E35] ${small}`}>
        <div className="mx-auto flex max-w-[80rem] flex-wrap items-center justify-between gap-x-5 gap-y-1 px-4 py-1.5 sm:px-6">
          <p className="font-semibold">
            <span className={dim}>[0] </span>julien@tyloo.fr
          </p>
          <p className={dim}>fin de session, merci d'avoir lu jusqu'ici</p>
          <p className={dim}>© 2026 {profile.name}</p>
        </div>
      </footer>
    </div>
  );
}

function PaneTitle({ label, aside }: { label: string; aside?: string }) {
  return (
    <div aria-hidden="true" className={`flex justify-between gap-3 border-[#4A3552] border-b px-3 py-1 ${small} ${dim}`}>
      <span>{label}</span>
      {aside && <span>{aside}</span>}
    </div>
  );
}

function Duotone({ children, className, hoverToColour }: { children: ReactNode; className?: string; hoverToColour?: boolean }) {
  return (
    <div className={`relative isolate overflow-hidden bg-[#EDE3D8] ${className ?? ""}`}>
      {children}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-[#4A2A55] mix-blend-lighten ${hoverToColour ? "group-focus-within:opacity-0 group-hover:opacity-0" : ""}`}
      />
    </div>
  );
}

function Command({ id, title, command, children }: { id: string; title: string; command: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-command`} className="mt-20 scroll-mt-16">
      <h2 id={`${id}-command`} className="font-medium text-[17px]">
        <span className="sr-only">{title}, commande : </span>
        <span aria-hidden="true" className={dim}>
          ${" "}
        </span>
        {command}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
