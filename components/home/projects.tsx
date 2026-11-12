import Image from "next/image";
import type { Dictionary } from "@/content/types";
import { projects } from "@/lib/site";
import { container, sectionHeading, textLink } from "./classes";

const tilt = ["-rotate-2", "rotate-[1.5deg]", "-rotate-1", "rotate-2"];

export function Projects({ dict }: { dict: Dictionary }) {
  return (
    <section aria-labelledby="projects" className={`${container} pb-24 md:pb-32`}>
      <h2 id="projects" className={sectionHeading}>
        {dict.projects.heading}
      </h2>
      <p className="mt-4 mb-0 max-w-[50ch]">{dict.projects.intro}</p>
      <ul className="m-0 mt-16 grid list-none gap-20 p-0 md:gap-28">
        {projects.map((project, i) => {
          const flipped = i % 2 === 1;
          return (
            <li key={project.id} className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
              <div className={`relative md:col-span-7 ${flipped ? "md:order-2" : ""}`}>
                <div className={`border-2 border-ink bg-white shadow-[10px_10px_0_var(--color-ink)] ${tilt[i % tilt.length]}`}>
                  <Image
                    src={project.image}
                    alt={dict.projects.screenshotAlt.replace("{name}", project.name)}
                    width={2400}
                    height={1400}
                    sizes="(min-width: 72rem) 40rem, (min-width: 48rem) 55vw, 100vw"
                    className="block aspect-[12/7] h-auto w-full object-cover object-top"
                  />
                </div>
                <p
                  className={`absolute -top-6 m-0 grid size-24 rotate-12 place-items-center rounded-full border-2 border-ink bg-sun p-2 text-center font-display text-sm font-extrabold leading-tight sm:size-28 sm:text-base ${flipped ? "-left-2 sm:-left-6" : "-right-2 sm:-right-6"}`}
                >
                  {dict.projects.kinds[project.kind]}
                </p>
              </div>
              <div className="md:col-span-5">
                <h3 className="m-0 font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[0.95] [font-stretch:120%]">{project.name}</h3>
                <p className="mt-4 mb-0">{dict.projects.items[project.id]}</p>
                <p className="mt-5 mb-0 flex flex-wrap gap-x-6 gap-y-2">
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
