import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { agent, highlights, profile, projects, services, steps, testimonials } from "./content";
import s from "./variant-a.module.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  display: "swap",
});

type Paper = "orange" | "blue" | "green" | "yellow";

const tilts = [-1.4, 1.1, -0.6, 1.8, -1.1, 0.7, -1.8, 0.4, 1.4, -0.3];

function tilt(index: number) {
  return tilts[index % tilts.length];
}

function cx(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function vars(rotate: number, index?: number): CSSProperties {
  return { "--r": `${rotate}deg`, "--i": index } as CSSProperties;
}

function sticky(paper: Paper, ...extra: (string | false | undefined)[]) {
  return cx(s.sticky, s.lift, s[paper], ...extra);
}

const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#23305A]";
const inkLink = cx("underline decoration-1 underline-offset-4 hover:decoration-2", focus);
const muted = "text-[#4A557A]";
const container = "mx-auto w-full max-w-[1200px] px-5 sm:px-8";

const commands: (string | null)[] = ["Réserver un appel", "Valider la spec", "Prioriser les tickets", null, "Suivre les livraisons"];

const lanes = ["Vous", "Vos demandes", "Ce qui se passe"];

const legend: { paper: Paper; text: string }[] = [
  { paper: "orange", text: "Orange\u00A0: ce qui s'est passé" },
  { paper: "blue", text: "Bleu\u00A0: ce que vous demandez" },
  { paper: "green", text: "Vert\u00A0: ce que vous voyez" },
  { paper: "yellow", text: "Jaune\u00A0: qui agit" },
];

const serviceOffsets = ["", "lg:mt-14", "lg:mt-5", "lg:-mt-2", "lg:mt-10"];
const serviceIndents = ["", "sm:ml-6", "lg:ml-3", "lg:ml-10", "sm:ml-2"];

export function VariantA() {
  return (
    <div className={cx(bricolage.className, s.board, "min-h-screen pb-28 text-[1.0625rem] leading-[1.55]")}>
      <Header />
      <main>
        <Hero />
        <Services />
        <Proof />
        <Testimonials />
        <About />
        <Closing />
      </main>
      <footer className={cx(container, "mt-24")}>
        <p className={cx("border-t border-dashed border-[#9AA5A2] pt-6 text-sm", muted)}>{profile.name}, 2026</p>
      </footer>
    </div>
  );
}

function Header() {
  return (
    <header className={cx(container, "flex flex-wrap items-center justify-between gap-x-8 gap-y-4 pt-6 sm:pt-8")}>
      <p className={cx(s.display, "text-[1.75rem] leading-none")}>{profile.name}</p>
      <nav aria-label="Liens principaux" className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[0.95rem]">
        <a href={profile.github} className={inkLink}>
          GitHub
        </a>
        <a href={profile.linkedin} className={inkLink}>
          LinkedIn
        </a>
        <a href={profile.callUrl} className={sticky("blue", s.label, s.press, "inline-block px-4 pt-4 pb-2.5 leading-tight", focus)} style={vars(-1.2)}>
          {profile.callLabel}
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <div className={cx(container, "pt-12 sm:pt-14")}>
      <h1 className={cx(s.display, "max-w-[17ch] text-[clamp(2.6rem,7vw,5rem)] leading-[0.92] tracking-[-0.01em]")}>
        Vous avez un produit à construire. Voici comment ça se passe.
      </h1>
      <p className="mt-6 max-w-[58ch] text-lg sm:text-xl">{profile.tagline}</p>
      <EventBoard />
    </div>
  );
}

function EventBoard() {
  return (
    <section aria-labelledby="a-board" className="mt-12 sm:mt-14">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <h2 id="a-board" className={cx(s.label, "text-2xl")}>
            Le déroulé d'une mission
          </h2>
          <p className={cx("mt-1 max-w-[52ch] text-[0.95rem]", muted)}>De gauche à droite, dans l'ordre où les choses arrivent.</p>
        </div>
        <Legend />
      </div>

      <p className={cx("mt-6 text-sm md:hidden", muted)}>Le tableau défile vers la droite.</p>

      <section
        // biome-ignore lint/a11y/noNoninteractiveTabindex: the scrollable board must be reachable by keyboard
        tabIndex={0}
        aria-label="Déroulé d'une mission, défilable horizontalement"
        className={cx("-mx-5 mt-4 overflow-x-auto px-5 pb-6 sm:-mx-8 sm:px-8", focus, "focus-visible:outline-offset-[-2px]")}
      >
        <div className="grid min-w-[66rem] grid-cols-[8rem_minmax(0,1fr)] grid-rows-[auto_auto_auto]">
          {lanes.map((lane, row) => (
            <div key={lane} aria-hidden="true" className="pointer-events-none col-span-2 col-start-1 border-t border-dashed border-[#9AA5A2]" style={{ gridRowStart: row + 1 }} />
          ))}
          {lanes.map((lane, row) => (
            <p key={lane} className={cx(s.label, "col-start-1 py-6 pr-4 text-[0.95rem] leading-tight", muted)} style={{ gridRowStart: row + 1 }}>
              {lane}
            </p>
          ))}

          <div aria-hidden="true" className="pointer-events-none relative col-start-2 row-start-3 mt-[4.5rem] h-0.5 self-start bg-[#23305A]">
            <svg viewBox="0 0 12 12" className="absolute -top-[5px] -right-1 size-3 fill-[#23305A]" aria-hidden="true">
              <path d="M0 0 L12 6 L0 12 Z" />
            </svg>
          </div>

          <ol className="col-start-2 row-span-3 row-start-1 grid grid-cols-5 grid-rows-subgrid gap-x-6">
            {steps.map((step, i) => {
              const command = commands[i];
              return (
                <li key={step.done} className="row-span-3 grid grid-rows-subgrid">
                  <div className="py-6">
                    {i === 0 && (
                      <p className={sticky("yellow", s.label, s.place, "flex h-20 w-28 items-end px-3 pb-3 text-lg leading-tight")} style={vars(tilt(0), 0)}>
                        Vous
                      </p>
                    )}
                  </div>

                  <div className="relative py-6">
                    {command === null ? (
                      <p className={cx("pt-3 text-[0.95rem] leading-snug", muted)}>Rien à faire de votre côté.</p>
                    ) : (
                      <>
                        {i === 0 ? (
                          <a
                            href={profile.callUrl}
                            className={sticky("blue", s.label, s.place, s.press, "flex h-24 w-full items-end p-3 text-[1.15rem] leading-tight", focus)}
                            style={vars(tilt(i + 3), 1 + i * 2)}
                          >
                            {command}
                          </a>
                        ) : (
                          <p className={sticky("blue", s.label, s.place, "flex h-24 w-full items-end p-3 text-[1.15rem] leading-tight")} style={vars(tilt(i + 3), 1 + i * 2)}>
                            {command}
                          </p>
                        )}
                        <svg viewBox="0 0 10 48" className="pointer-events-none absolute -bottom-6 left-8 h-12 w-2.5 fill-none stroke-[#23305A]" aria-hidden="true">
                          <path d="M5 0 V44" strokeWidth="1.5" />
                          <path d="M1 39 L5 46 L9 39" strokeWidth="1.5" />
                        </svg>
                      </>
                    )}
                  </div>

                  <div className="py-6">
                    <p className={sticky("orange", s.label, s.place, "flex h-24 w-full items-end p-3 text-[1.15rem] leading-tight")} style={vars(tilt(i + 6), 2 + i * 2)}>
                      {step.done}
                    </p>
                    <p className="mt-4 max-w-[24ch] text-[0.95rem] leading-snug">{step.detail}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </section>
  );
}

function Legend() {
  return (
    <div className="border border-[#23305A]/40 px-4 py-3 text-sm">
      <p className={s.label}>Légende</p>
      <ul className="mt-2 grid gap-1.5">
        {legend.map((item, i) => (
          <li key={item.paper} className="flex items-center gap-2.5">
            <span aria-hidden="true" className={sticky(item.paper, s.swatch, "inline-block size-3.5 shrink-0")} style={vars(tilt(i + 2))} />
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionHeading({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className={cx(s.display, "max-w-[20ch] text-[clamp(2.1rem,5vw,3.5rem)] leading-[0.95]")}>
      {children}
    </h2>
  );
}

function Services() {
  return (
    <section aria-labelledby="a-services" className={cx(container, "mt-28 sm:mt-36")}>
      <SectionHeading id="a-services">Ce que vous pouvez me demander</SectionHeading>
      <div className="mt-14 grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <article key={service.id} className={serviceOffsets[i]}>
            <h3 className={sticky("blue", s.label, "flex min-h-36 w-44 items-end p-4 text-[1.35rem] leading-[1.1] sm:w-48", serviceIndents[i])} style={vars(tilt(i + 1))}>
              {service.title}
            </h3>
            <p className="mt-6 max-w-[36ch]">{service.summary}</p>
            <p className={cx("mt-2 max-w-[36ch] text-[0.95rem]", muted)}>{service.stack.join(", ")}</p>
          </article>
        ))}
        <div className="self-end lg:mb-4">
          <p className="max-w-[30ch]">Un besoin qui n'entre dans aucune case&nbsp;? On le pose sur le tableau pendant l'appel.</p>
          <a href={profile.callUrl} className={cx(inkLink, "mt-3 inline-block")}>
            {profile.callLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

const projectTilts = [-1.2, 1, 0.6, -0.9];

// Screenshots are 2400px wide.
const screenshotHeights: Record<string, number> = {
  "/projects/poker-quiz.jpg": 1476,
  "/projects/poker-range-analyzer.jpg": 1476,
};

function Proof() {
  const timeline = [...highlights].reverse();
  return (
    <section aria-labelledby="a-proof" className={cx(container, "mt-28 sm:mt-36")}>
      <SectionHeading id="a-proof">Ce qui a déjà été livré</SectionHeading>
      <div className="mt-16 grid gap-x-14 gap-y-20 md:grid-cols-2">
        {projects.map((project, i) => (
          <article key={project.name}>
            <div className="relative">
              <div className={cx(s.tilted, s.lift, "relative bg-white p-2")} style={vars(projectTilts[i])}>
                <Image
                  src={project.image}
                  alt={`Capture d'écran de la page d'accueil de ${project.name}`}
                  width={2400}
                  height={screenshotHeights[project.image] ?? 1372}
                  sizes="(min-width: 1200px) 560px, (min-width: 768px) 46vw, 92vw"
                  className="block h-auto w-full"
                />
                <span aria-hidden="true" className={s.tape} style={{ "--t": `${i % 2 ? 4 : -3}deg` } as CSSProperties} />
              </div>
              <h3 className={sticky("orange", s.label, "absolute -bottom-8 left-4 max-w-[14rem] px-3 pt-4 pb-2.5 text-[1.1rem] leading-tight")} style={vars(tilt(i + 4))}>
                {project.name} mis en ligne
              </h3>
            </div>
            <p className={cx("mt-14 text-[0.95rem]", muted)}>{project.kind}</p>
            <p className="mt-1 max-w-[52ch]">{project.description}</p>
            <p className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              <a href={project.url} className={inkLink}>
                Voir le site
              </a>
              {project.code && (
                <a href={project.code} className={inkLink}>
                  Voir le code
                </a>
              )}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-28">
        <h3 className={cx(s.label, "text-2xl")}>Avant le freelance</h3>
        <div className="relative mt-10">
          <div aria-hidden="true" className="pointer-events-none absolute top-12 right-0 left-0 hidden h-0.5 bg-[#23305A] lg:block">
            <svg viewBox="0 0 12 12" className="absolute -top-[5px] -right-1 size-3 fill-[#23305A]" aria-hidden="true">
              <path d="M0 0 L12 6 L0 12 Z" />
            </svg>
          </div>
          <ol className="relative grid gap-10 border-l-2 border-[#23305A] pl-6 lg:grid-cols-5 lg:gap-6 lg:border-l-0 lg:pl-0">
            {timeline.map((item, i) => (
              <li key={item.company} className="relative">
                <div className={sticky("orange", "flex h-24 w-44 max-w-full flex-col justify-end p-3 leading-tight")} style={vars(tilt(i + 5))}>
                  <p className={cx(s.label, "text-[1.15rem]")}>{item.company}</p>
                  <p className="text-[0.9rem]">{item.role}</p>
                </div>
                <p className={cx(s.label, "mt-4 text-[0.95rem]")}>{item.period}</p>
                <p className="mt-1 max-w-[34ch] text-[0.95rem] leading-snug">{item.fact}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const quoteOffsets = ["", "md:mt-10", "md:mt-3"];

function Testimonials() {
  return (
    <section aria-labelledby="a-testimonials" className={cx(container, "mt-28 sm:mt-36")}>
      <SectionHeading id="a-testimonials">Ce qu'en disent les équipes</SectionHeading>
      <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {testimonials.map((t, i) => (
          <figure key={t.quote} className={cx(sticky("green", "flex min-h-64 flex-col justify-between gap-6 p-6 pt-8"), quoteOffsets[i])} style={vars(tilt(i + 7))}>
            <blockquote className={cx(s.label, "text-[1.2rem] leading-snug")}>
              <p>«&nbsp;{t.quote}&nbsp;»</p>
            </blockquote>
            <figcaption className="text-[0.95rem] leading-snug">
              <span className="font-semibold">{t.author}</span>
              <br />
              {t.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section aria-labelledby="a-about" className={cx(container, "mt-28 grid items-start gap-12 sm:mt-36 md:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] md:gap-16")}>
      <div className={cx(s.tilted, s.lift, "relative w-full max-w-[18rem] bg-white p-3 pb-10")} style={vars(-2)}>
        <span aria-hidden="true" className={s.pin} />
        <Image src={profile.photo} alt="Portrait de Julien Bonvarlet" width={1440} height={1440} sizes="288px" className="block h-auto w-full" />
      </div>
      <div>
        <SectionHeading id="a-about">Qui tient le marqueur</SectionHeading>
        <p className={cx(s.label, "mt-4 text-xl")}>{profile.role}</p>
        <p className="mt-5 max-w-[60ch]">{profile.intro}</p>
        <p className={cx("mt-4 max-w-[60ch]", muted)}>{profile.location}</p>
        <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <a href={profile.cv} download className={inkLink}>
            Télécharger mon CV
          </a>
          <a href={profile.github} className={inkLink}>
            GitHub
          </a>
          <a href={profile.linkedin} className={inkLink}>
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section aria-labelledby="a-closing" className={cx(container, "mt-28 sm:mt-40")}>
      <SectionHeading id="a-closing">La prochaine étape est la vôtre</SectionHeading>
      <div className="mt-14 flex flex-wrap items-end gap-x-12 gap-y-10">
        <a
          href={profile.callUrl}
          className={sticky("blue", s.display, s.press, "flex aspect-square w-[min(100%,19rem)] items-end p-6 text-[clamp(2rem,6vw,2.6rem)] leading-[0.95]", focus)}
          style={vars(-1.6)}
        >
          {profile.callLabel}
        </a>
        <p className={sticky("orange", s.label, "flex h-40 w-52 items-end p-4 text-[1.25rem] leading-tight")} style={vars(1.8)}>
          {profile.availability}
        </p>
      </div>
      <p className="mt-12 max-w-[60ch]">
        Vous préférez écrire&nbsp;?{" "}
        <a href={`mailto:${profile.email}`} className={inkLink}>
          {profile.email}
        </a>
      </p>
      <p className={cx("mt-3 max-w-[60ch] text-[0.95rem]", muted)}>
        Pour les agents IA&nbsp;:{" "}
        <a href={agent.markdownUrl} className={inkLink}>
          Version markdown
        </a>{" "}
        et{" "}
        <a href={agent.llmsUrl} className={inkLink}>
          llms.txt
        </a>
        .
      </p>
    </section>
  );
}
