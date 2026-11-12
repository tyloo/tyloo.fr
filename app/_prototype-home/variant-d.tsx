import { Anybody, Figtree } from "next/font/google";
import Image from "next/image";
import { agent, highlights, profile, projects, steps, testimonials } from "./content";
import styles from "./variant-d.module.css";
import { VariantDHand } from "./variant-d-hand";

const anybody = Anybody({ subsets: ["latin"], axes: ["wdth"], variable: "--font-d-display" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-d-body" });

const display = "font-[family-name:var(--font-d-display)]";
const sectionHeading = `${display} m-0 text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[0.95] [font-stretch:120%]`;
const focusOnDark = "focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#FFD23F]";
const focusOnLight = "focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#10123A]";
const textLink = `font-bold underline decoration-2 underline-offset-4 hover:decoration-[#FF5470] ${focusOnLight}`;
const projectTilt = ["-rotate-2", "rotate-[1.5deg]", "-rotate-1", "rotate-2"];
const callLabel = profile.callLabel.replace("30 min", "30\u00a0min");

export function VariantD() {
  return (
    <div
      className={`${anybody.variable} ${figtree.variable} overflow-x-clip bg-[#F3F2FF] font-[family-name:var(--font-d-body)] text-[1.0625rem] text-[#10123A] leading-[1.55] sm:text-lg`}
    >
      <header className="bg-[#1F3BEA] text-white">
        <div className="mx-auto flex max-w-[100rem] flex-wrap items-center gap-x-6 gap-y-4 px-5 py-5 sm:px-8">
          <p className={`${display} m-0 mr-auto text-xl font-extrabold [font-stretch:110%]`}>Julien B.</p>
          <nav aria-label="Réseaux">
            <ul className="m-0 flex list-none gap-5 p-0 font-semibold">
              <li>
                <a href={profile.github} className={`underline-offset-4 hover:underline ${focusOnDark}`}>
                  GitHub
                </a>
              </li>
              <li>
                <a href={profile.linkedin} className={`underline-offset-4 hover:underline ${focusOnDark}`}>
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
          <a
            href={profile.callUrl}
            className={`w-full rounded-full bg-[#FFD23F] px-5 py-2.5 text-center font-bold text-[#10123A] shadow-[4px_4px_0_#10123A] sm:w-auto ${focusOnDark}`}
          >
            {callLabel}
          </a>
        </div>
      </header>

      <main>
        <section className="bg-[#1F3BEA] text-white">
          <div className="mx-auto max-w-[100rem] px-5 pt-8 pb-6 sm:px-8 sm:pt-12">
            <h1 className={styles.name}>
              <span className="block">Julien</span> <span className="block">Bonvarlet</span>
            </h1>
            <p className="mt-8 mb-0 max-w-[60ch] text-lg sm:text-xl">
              <strong className="font-bold">{profile.role}.</strong> {profile.tagline}
            </p>
          </div>
        </section>

        <section aria-labelledby="d-services" className="flex flex-col">
          <h2 id="d-services" className={`${display} order-2 mx-auto my-0 max-w-[40rem] px-5 text-center text-2xl font-extrabold leading-tight [font-stretch:110%] sm:text-3xl`}>
            Une quinte flush royale, cinq façons de vous aider
          </h2>
          <div className="relative order-1">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[55%] bg-[#1F3BEA]" />
            <div className="relative mx-auto max-w-[100rem]">
              <VariantDHand />
            </div>
          </div>
          <p className="order-3 mx-auto mt-3 mb-0 max-w-[40rem] px-5 pb-16 text-center">
            La meilleure main possible au poker. Sélectionnez une carte pour la retourner et voir le détail.
          </p>
        </section>

        <section aria-label="Disponibilité" className="bg-[#FFD23F]">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className={`${display} m-0 text-2xl font-extrabold leading-tight [font-stretch:110%]`}>{profile.availability}</p>
              <p className="m-0 mt-1">{profile.location}</p>
            </div>
            <a href={profile.callUrl} className={`shrink-0 self-start rounded-full bg-[#10123A] px-6 py-3 font-bold text-white md:self-auto ${focusOnLight}`}>
              {callLabel}
            </a>
          </div>
        </section>

        <section aria-labelledby="d-steps" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
          <h2 id="d-steps" className={sectionHeading}>
            Comment on travaille ensemble
          </h2>
          <p className="mt-4 mb-0 max-w-[50ch]">Cinq étapes, du premier appel à la mise en production.</p>
          <ol className="m-0 mt-12 grid list-none gap-8 p-0 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[4.5rem_1fr] gap-x-4 border-[#10123A] border-t-2 pt-5 lg:grid-cols-1">
                <span className={`${display} ${styles.numeral} text-[4.5rem] font-black leading-none [font-stretch:120%]`}>{i + 1}</span>
                <div className="lg:mt-5">
                  <h3 className={`${display} m-0 text-[1.0625rem] font-extrabold leading-tight xl:text-xl`}>{step.title}</h3>
                  <p className="mt-2 mb-0 text-base">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="d-projects" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 md:pb-32">
          <h2 id="d-projects" className={sectionHeading}>
            Déjà sur la table
          </h2>
          <p className="mt-4 mb-0 max-w-[50ch]">Quelques projets livrés, pour des clients et pour moi.</p>
          <ul className="m-0 mt-16 grid list-none gap-20 p-0 md:gap-28">
            {projects.map((project, i) => (
              <li key={project.name} className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
                <div className={`relative md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className={`border-2 border-[#10123A] bg-white shadow-[10px_10px_0_#10123A] ${projectTilt[i % projectTilt.length]}`}>
                    <Image
                      src={project.image}
                      alt={`Capture d'écran de la page d'accueil de ${project.name}`}
                      width={2400}
                      height={1400}
                      sizes="(min-width: 72rem) 40rem, (min-width: 48rem) 55vw, 100vw"
                      className="block aspect-[12/7] h-auto w-full object-cover object-top"
                    />
                  </div>
                  <p
                    className={`${display} absolute -top-6 m-0 grid size-24 rotate-12 place-items-center rounded-full border-2 border-[#10123A] bg-[#FFD23F] p-2 text-center text-sm font-extrabold leading-tight sm:size-28 sm:text-base ${i % 2 === 1 ? "-left-2 sm:-left-6" : "-right-2 sm:-right-6"}`}
                  >
                    {project.kind}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <h3 className={`${display} m-0 text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[0.95] [font-stretch:120%]`}>{project.name}</h3>
                  <p className="mt-4 mb-0">{project.description}</p>
                  <p className="mt-5 mb-0 flex flex-wrap gap-x-6 gap-y-2">
                    <a href={project.url} className={textLink}>
                      Voir le site<span className="sr-only"> {project.name}</span>
                    </a>
                    {project.code ? (
                      <a href={project.code} className={textLink}>
                        Voir le code<span className="sr-only"> de {project.name}</span>
                      </a>
                    ) : null}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="d-testimonials" className="bg-[#FF5470]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <h2 id="d-testimonials" className={sectionHeading}>
              Ce qu'ils en disent
            </h2>
            <ul className="m-0 mt-12 grid list-none gap-14 p-0 md:gap-20">
              {testimonials.map((testimonial, i) => (
                <li key={testimonial.quote} className={i === 1 ? "md:ml-auto md:max-w-[44rem]" : i === 2 ? "md:ml-[12%] md:max-w-[44rem]" : "md:max-w-[56rem]"}>
                  <figure className="m-0">
                    <blockquote className="m-0">
                      <p
                        className={`${display} m-0 font-bold leading-[1.15] [font-stretch:110%] ${i === 0 ? "text-[clamp(1.625rem,3.4vw,2.75rem)]" : "text-[clamp(1.375rem,2.4vw,2rem)]"}`}
                      >
                        «&nbsp;{testimonial.quote}&nbsp;»
                      </p>
                    </blockquote>
                    <figcaption className="mt-4">
                      <span className="font-bold">{testimonial.author}</span>, {testimonial.title}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="d-about" className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 md:grid-cols-[20rem_1fr] md:gap-16 md:py-28">
          <div className="relative mx-auto size-56 rounded-full shadow-[0_0_0_12px_#FFD23F,16px_16px_0_12px_#10123A] sm:size-72 md:mx-0 md:mt-4">
            <Image src={profile.photo} alt="Portrait de Julien Bonvarlet" fill sizes="(min-width: 40rem) 18rem, 14rem" className="rounded-full object-cover" />
          </div>
          <div>
            <h2 id="d-about" className={sectionHeading}>
              Qui tient les cartes
            </h2>
            <p className="mt-6 mb-0 max-w-[60ch]">{profile.intro}</p>
            <h3 className={`${display} mt-12 mb-0 text-2xl font-extrabold [font-stretch:110%]`}>Parcours</h3>
            <ul className="m-0 mt-4 list-none border-[#10123A] border-t-2 p-0">
              {highlights.map((highlight) => (
                <li key={highlight.company} className="grid gap-x-6 gap-y-1 border-[#10123A] border-b-2 py-4 sm:grid-cols-[10rem_1fr]">
                  <div>
                    <p className={`${display} m-0 text-xl font-extrabold leading-tight [font-stretch:110%]`}>{highlight.company}</p>
                    <p className="m-0 text-base">{highlight.period}</p>
                  </div>
                  <div className="text-base">
                    <p className="m-0 font-bold">{highlight.role}</p>
                    <p className="m-0 mt-1">{highlight.fact}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 mb-0">
              <a href={profile.cv} download className={textLink}>
                Télécharger mon CV
              </a>
            </p>
          </div>
        </section>

        <section aria-labelledby="d-cta" className="bg-[#1F3BEA] text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1fr_auto] md:py-28">
            <div>
              <h2 id="d-cta" className={`${display} m-0 text-2xl font-extrabold [font-stretch:110%]`}>
                On joue cartes sur table ?
              </h2>
              <p className="mt-6 mb-0">
                <a
                  href={profile.callUrl}
                  className={`${display} inline-block text-balance text-[clamp(2.75rem,7vw,6.5rem)] font-extrabold leading-[0.95] underline decoration-4 underline-offset-[0.12em] [font-stretch:120%] hover:decoration-[#FFD23F] ${focusOnDark}`}
                >
                  {callLabel}
                </a>
              </p>
              <p className="mt-10 mb-0">
                Ou écrivez-moi à{" "}
                <a href={`mailto:${profile.email}`} className={`font-bold underline decoration-2 underline-offset-4 ${focusOnDark}`}>
                  {profile.email}
                </a>
              </p>
              <p className="mt-6 mb-0 text-base text-white/85">
                Ce site se lit aussi par les agents IA :{" "}
                <a href={agent.markdownUrl} className={`underline underline-offset-4 ${focusOnDark}`}>
                  version Markdown
                </a>{" "}
                et{" "}
                <a href={agent.llmsUrl} className={`underline underline-offset-4 ${focusOnDark}`}>
                  llms.txt
                </a>
                .
              </p>
            </div>
            <div
              aria-hidden="true"
              className="mx-auto grid size-48 rotate-[-8deg] place-items-center rounded-full border-[14px] border-white border-dashed bg-[#FF5470] shadow-[8px_8px_0_#10123A] md:size-64"
            >
              <div className="grid size-[72%] place-items-center rounded-full border-2 border-[#FF5470] border-dashed bg-white text-[#10123A]">
                <span className={`${display} text-3xl font-black [font-stretch:110%] md:text-4xl`}>30 min</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#10123A] text-white">
        <p className="mx-auto my-0 max-w-6xl px-5 pt-6 pb-28 text-base sm:px-8">© 2026 Julien Bonvarlet, développeur freelance senior basé en France.</p>
      </footer>
    </div>
  );
}
