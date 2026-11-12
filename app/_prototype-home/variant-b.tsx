import { Hanken_Grotesk, Literata } from "next/font/google";
import Image from "next/image";
import type { ReactNode } from "react";
import { agent, type Highlight, highlights, profile, projects, services, steps, testimonials } from "./content";
import styles from "./variant-b.module.css";
import { VariantBNoteAligner } from "./variant-b-note-aligner";

const literata = Literata({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  variable: "--font-literata",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const ROOT_ID = "variant-b";

const imageHeights: Record<string, number> = {
  "/projects/lv-detailing.jpg": 1372,
  "/projects/1001-petales.jpg": 1372,
};

function career(company: string): Highlight {
  const highlight = highlights.find((h) => h.company === company);
  if (!highlight) throw new Error(`Missing highlight for ${company}`);
  return highlight;
}

function careerSource(h: Highlight) {
  return `${h.role} chez ${h.company}, ${h.period}`;
}

function Claim({ n, children }: { n: number; children: ReactNode }) {
  return (
    <span id={`ref-${n}`} data-ref={n} className={styles.claim}>
      <span className={styles.mark}>{children}</span>
      <sup className={styles.sup}>
        <a href={`#note-${n}`} className={styles.refLink}>
          <span className="sr-only">note </span>
          {n}
        </a>
      </sup>
    </span>
  );
}

function Note({ n, source, children }: { n: number; source: ReactNode; children: ReactNode }) {
  return (
    <div role="note" id={`note-${n}`} data-ref={n} data-note={n} className={styles.note}>
      <p>
        <a href={`#ref-${n}`} className={styles.noteNum} aria-label={`Note ${n}, revenir au texte`}>
          {n}
        </a>
        <span className={styles.noteSource}>{source}</span>
      </p>
      <p className={styles.noteBody}>
        <span className={styles.mark}>{children}</span>
      </p>
    </div>
  );
}

function CallButton() {
  return (
    <a href={profile.callUrl} className={styles.button}>
      {profile.callLabel}
    </a>
  );
}

export function VariantB() {
  const faume = career("FAUME");
  const meero = career("Meero");
  const prestashop = career("PrestaShop");
  const mindgeek = career("Mindgeek");
  const autonomy = testimonials[1];
  const agentStep = steps[3];
  const splitAt = agentStep.detail.indexOf(". ");
  const agentStepLead = splitAt === -1 ? "" : agentStep.detail.slice(0, splitAt + 2);
  const agentStepClaim = splitAt === -1 ? agentStep.detail : agentStep.detail.slice(splitAt + 2);

  return (
    <div id={ROOT_ID} className={`${literata.variable} ${hanken.variable} ${styles.root}`}>
      <VariantBNoteAligner rootId={ROOT_ID} />
      <div className={styles.page}>
        <header className={styles.header}>
          <p className={styles.brand}>{profile.name}</p>
          <nav aria-label="Navigation principale" className={styles.nav}>
            <span className={styles.lang}>
              <span aria-current="page">FR</span> / {/* PROTOTYPE: English version does not exist yet. */}
              <a href="#en" aria-disabled="true" lang="en" title="English version coming soon">
                EN
              </a>
            </span>
            <a href={agent.markdownUrl}>Lire en markdown</a>
            <a href={profile.callUrl} className={styles.navCall}>
              Réserver un appel
            </a>
          </nav>
        </header>

        <main>
          <section aria-labelledby="b-hero" className={`${styles.hero} ${styles.annotated} ${styles.annotatedWide}`}>
            <div className={styles.main}>
              <h1 id="b-hero" className={styles.heroText}>
                Je m'appelle Julien Bonvarlet. Depuis quinze ans, je construis des <Claim n={1}>applications web qui tiennent la charge</Claim> et des{" "}
                <Claim n={2}>équipes qui testent ce qu'elles livrent</Claim>. Aujourd'hui, je code aussi avec des agents IA, et{" "}
                <Claim n={3}>j'apprends aux équipes à le faire</Claim>.
              </h1>
              <p className={styles.heroMeta}>
                {profile.availability}. {profile.location}.
              </p>
              <div className={styles.actions}>
                <CallButton />
                <a href={profile.cv} download className={styles.textLink}>
                  Télécharger mon CV
                </a>
              </div>
            </div>
            <div className={styles.margin}>
              <Note n={1} source={careerSource(faume)}>
                {faume.fact}
              </Note>
              <Note n={2} source={careerSource(meero)}>
                {meero.fact}
              </Note>
              <Note n={3} source={careerSource(prestashop)}>
                {prestashop.fact}
              </Note>
            </div>
          </section>

          <section aria-labelledby="b-services" className={styles.section}>
            <h2 id="b-services" className={styles.h2}>
              Ce que je fais
            </h2>
            <p className={styles.lede}>Je travaille seul sur votre produit ou au sein de votre équipe, sur cinq types de missions.</p>
            <dl className={styles.services}>
              {services.map((service) => {
                const note =
                  service.id === "backend" ? (
                    <Note n={4} source={careerSource(mindgeek)}>
                      {mindgeek.fact}
                    </Note>
                  ) : service.id === "lead" ? (
                    <Note n={5} source={`${autonomy.author}, ${autonomy.title}`}>
                      «&nbsp;{autonomy.quote}&nbsp;»
                    </Note>
                  ) : null;
                const ref = service.id === "backend" ? 4 : service.id === "lead" ? 5 : null;

                return (
                  <div key={service.id}>
                    <dt className={styles.term}>{service.title}</dt>
                    <dd className={`${styles.def} ${styles.annotated}`}>
                      <div className={styles.main}>
                        <p className={styles.body}>{ref ? <Claim n={ref}>{service.summary}</Claim> : service.summary}</p>
                        <p className={styles.stack}>{service.stack.join(", ")}</p>
                      </div>
                      {note ? <div className={styles.margin}>{note}</div> : null}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </section>

          <section aria-labelledby="b-process" className={styles.section}>
            <h2 id="b-process" className={styles.h2}>
              Comment je travaille
            </h2>
            <p className={styles.lede}>Le même déroulé pour chaque mission, qu'elle dure deux semaines ou un an.</p>
            <ol className={styles.steps}>
              {steps.map((step, index) => (
                <li key={step.title}>
                  <div className={styles.annotated}>
                    <div className={styles.main}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={`${styles.body} ${styles.stepDetail}`}>
                        {index === 3 ? (
                          <>
                            {agentStepLead}
                            <Claim n={6}>{agentStepClaim.replace(/\.$/, "")}</Claim>.
                          </>
                        ) : (
                          step.detail
                        )}
                      </p>
                    </div>
                    {index === 3 ? (
                      <div className={styles.margin}>
                        <Note n={6} source="Ma règle avec les agents">
                          Un agent propose, je décide. Je relis chaque diff comme celui d'un collègue, et rien ne part en production sans tests qui passent. C'est aussi la méthode
                          que j'enseigne aux équipes.
                        </Note>
                      </div>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="b-projects" className={styles.section}>
            <h2 id="b-projects" className={styles.h2}>
              Ce que j'ai livré
            </h2>
            <p className={styles.lede}>Des sites pour des clients et des outils que je développe pour moi. Tous sont en ligne.</p>
            <div className={styles.projects}>
              {projects.map((project) => (
                <figure key={project.name} className={styles.annotated}>
                  <div className={styles.main}>
                    <Image
                      src={project.image}
                      alt={`Page d'accueil du site ${project.name}`}
                      width={2400}
                      height={imageHeights[project.image] ?? 1476}
                      sizes="(min-width: 64rem) 38rem, 100vw"
                      className={styles.shot}
                    />
                  </div>
                  <figcaption className={`${styles.margin} ${styles.caption}`}>
                    <div>
                      <p className={styles.kind}>{project.kind}</p>
                      <p className={styles.projectName}>{project.name}</p>
                      <p className={styles.projectDescription}>{project.description}</p>
                      <p className={styles.projectLinks}>
                        <a href={project.url} className={styles.textLink}>
                          Voir le site<span className="sr-only"> {project.name}</span>
                        </a>
                        {project.code ? (
                          <a href={project.code} className={styles.textLink}>
                            Voir le code<span className="sr-only"> de {project.name}</span>
                          </a>
                        ) : null}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section aria-labelledby="b-testimonials" className={styles.section}>
            <h2 id="b-testimonials" className={styles.h2}>
              Ce qu'ils en disent
            </h2>
            <div className={styles.quotes}>
              {testimonials.map((testimonial) => (
                <figure key={testimonial.quote} className={styles.annotated}>
                  <blockquote className={styles.main}>
                    <p className={styles.quote}>«&nbsp;{testimonial.quote}&nbsp;»</p>
                  </blockquote>
                  <figcaption className={`${styles.margin} ${styles.attribution}`}>
                    <div>
                      <p className={styles.author}>{testimonial.author}</p>
                      <p className={styles.authorTitle}>{testimonial.title}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section aria-labelledby="b-contact" className={`${styles.section} ${styles.annotated}`}>
            <div className={styles.main}>
              <h2 id="b-contact" className={styles.h2}>
                Parlons de votre projet
              </h2>
              <p className={styles.lede}>
                Vous avez un produit à lancer, une API à remettre d'aplomb ou une équipe à former aux agents de code&nbsp;? Réservez un appel de 30 minutes. On regarde votre
                situation ensemble et, à la fin, vous savez si je peux vous aider et comment.
              </p>
              <div className={styles.actions}>
                <CallButton />
                <a href={`mailto:${profile.email}`} className={styles.textLink}>
                  {profile.email}
                </a>
              </div>
              <p className={styles.agentNote}>
                Ce site existe aussi en{" "}
                <a href={agent.markdownUrl} className={styles.textLink}>
                  version markdown
                </a>{" "}
                et en{" "}
                <a href={agent.llmsUrl} className={styles.textLink}>
                  llms.txt
                </a>{" "}
                pour les agents IA.
              </p>
            </div>
            <div className={styles.margin}>
              <figure>
                <Image src={profile.photo} alt="Portrait de Julien Bonvarlet" width={1440} height={1440} sizes="9rem" className={styles.portrait} />
                <figcaption className={styles.portraitCaption}>C'est moi qui réponds aux appels et aux messages, pas une équipe commerciale.</figcaption>
              </figure>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <p>
            © 2026 {profile.name}, développeur freelance. <a href={profile.github}>GitHub</a>, <a href={profile.linkedin}>LinkedIn</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
