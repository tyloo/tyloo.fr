import Image from "next/image";
import type { CSSProperties } from "react";
import type { Dictionary } from "@/content/types";
import { site } from "@/lib/site";
import { container, sectionHeading, textLink } from "./classes";
import styles from "./home.module.css";

const chipColors = ["var(--color-pink)", "var(--color-cobalt)", "var(--color-ink)"];

export function About({ dict }: { dict: Dictionary }) {
  return (
    <section aria-labelledby="about" className={`${container} grid gap-14 py-20 md:grid-cols-[20rem_1fr] md:gap-16 md:py-28`}>
      <div className="relative mx-auto size-56 rounded-full shadow-[0_0_0_12px_var(--color-sun),16px_16px_0_12px_var(--color-ink)] sm:size-72 md:mx-0 md:mt-4">
        <Image src={site.photo} alt={dict.about.photoAlt} fill sizes="(min-width: 40rem) 18rem, 14rem" className="rounded-full object-cover" />
      </div>
      <div>
        <h2 id="about" className={sectionHeading}>
          {dict.about.heading}
        </h2>
        <p className="mt-6 mb-0 max-w-[60ch]">{dict.about.intro}</p>

        <h3 className="sr-only">{dict.about.chipsLabel}</h3>
        <dl className="m-0 mt-12 flex flex-wrap gap-x-8 gap-y-10">
          {dict.about.chips.map((chip, i) => (
            <div key={chip.label} className="flex w-[10.5rem] flex-col-reverse items-center justify-end gap-3 text-center">
              <dt className="text-base font-semibold leading-snug">{chip.label}</dt>
              <dd className="m-0">
                <span className={styles.chip} style={{ "--chip-color": chipColors[i % chipColors.length] } as CSSProperties}>
                  <span className={styles.chipInlay}>
                    <span className={`font-display font-black [font-stretch:110%] ${chip.value.length > 2 ? "text-2xl" : "text-3xl"}`}>{chip.value}</span>
                  </span>
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <h3 className="mt-14 mb-0 font-display text-2xl font-extrabold [font-stretch:110%]">{dict.about.careerHeading}</h3>
        <p className="mt-1 mb-0 text-base">{dict.about.careerIntro}</p>
        <ul className="m-0 mt-4 list-none border-ink border-t-2 p-0">
          {dict.about.career.map((job) => (
            <li key={job.company} className="grid gap-x-6 gap-y-1 border-ink border-b-2 py-4 sm:grid-cols-[10rem_1fr]">
              <div>
                <p className="m-0 font-display text-xl font-extrabold leading-tight [font-stretch:110%]">{job.company}</p>
                <p className="m-0 text-base">{job.period}</p>
              </div>
              <div className="text-base">
                <p className="m-0 font-bold">{job.role}</p>
                <p className="m-0 mt-1">{job.fact}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 mb-0">
          <a href={site.cv} download className={textLink}>
            {dict.about.cv}
          </a>
        </p>
      </div>
    </section>
  );
}
