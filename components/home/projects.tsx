import Image from "next/image";
import type { Dictionary } from "@/content/types";
import { projects } from "@/lib/site";
import { container, lightSection, sectionHeading, sectionIntro, textLink } from "./classes";

const tilt = ["-rotate-2", "rotate-[1.5deg]", "-rotate-1", "rotate-2"];

export function Projects({ dict }: { dict: Dictionary }) {
  return (
    <section aria-labelledby="projects" className={`${container} ${lightSection}`}>
      <h2 id="projects" className={sectionHeading}>
        {dict.projects.heading}
      </h2>
      <p className={sectionIntro}>{dict.projects.intro}</p>
      {/* Stacked below 64rem with a rule between projects; side by side and alternating above. */}
      <ul className="m-0 mt-8 grid list-none divide-y-2 divide-ink p-0 sm:mt-12 lg:gap-28 lg:divide-y-0">
        {projects.map((project, i) => {
          const flipped = i % 2 === 1;
          return (
            <li key={project.id} className="grid items-center gap-8 py-10 first:pt-0 last:pb-0 sm:gap-10 lg:grid-cols-12 lg:gap-12 lg:py-0">
              <div className={`relative lg:col-span-7 ${flipped ? "lg:order-2" : ""}`}>
                <div className={`border-2 border-ink bg-white shadow-[8px_8px_0_var(--color-ink)] sm:shadow-[10px_10px_0_var(--color-ink)] ${tilt[i % tilt.length]}`}>
                  <Image
                    src={project.image}
                    alt={dict.projects.screenshotAlt.replace("{name}", project.name)}
                    width={2400}
                    height={1400}
                    sizes="(min-width: 72rem) 40rem, (min-width: 64rem) 55vw, 100vw"
                    className="block aspect-[12/7] h-auto w-full object-cover object-top"
                  />
                </div>
                <p
                  className={`absolute -top-5 m-0 grid size-20 rotate-12 place-items-center rounded-full border-2 border-ink bg-sun p-2 text-center font-display text-xs font-extrabold leading-tight sm:-top-6 sm:size-28 sm:text-base ${flipped ? "-left-2 sm:-left-6" : "-right-2 sm:-right-6"}`}
                >
                  {dict.projects.kinds[project.kind]}
                </p>
              </div>
              <div className="lg:col-span-5">
                <h3 className="m-0 font-display text-xl font-extrabold leading-tight sm:text-2xl lg:text-[1.75rem] xl:text-[2rem]">{project.name}</h3>
                <p className="mt-3 mb-0">{dict.projects.items[project.id]}</p>
                <p className="mt-4 mb-0 flex flex-wrap gap-x-6 gap-y-2">
                  <a href={project.url} className={textLink}>
                    {dict.projects.visit}
                    <span className="sr-only"> {project.name}</span>
                  </a>
                  {project.code ? (
                    <a href={project.code} className={textLink}>
                      {dict.projects.code}
                      <span className="sr-only"> {project.name}</span>
                    </a>
                  ) : null}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
