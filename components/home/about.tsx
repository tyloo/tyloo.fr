import type { CSSProperties } from "react";
import type { Dictionary } from "@/content/types";
import { site } from "@/lib/site";
import { container, lightSection, sectionHeading, subHeading, textLink } from "./classes";
import styles from "./home.module.css";

const chipColors = ["var(--color-pink)", "var(--color-cobalt)", "var(--color-ink)"];

export function About({ dict }: { dict: Dictionary }) {
  return (
    <section aria-labelledby="about" className={`${container} ${lightSection}`}>
      <h2 id="about" className={sectionHeading}>
        {dict.about.heading}
      </h2>
      <div className="mt-3 grid gap-12 sm:mt-4 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="m-0 max-w-[60ch]">{dict.about.intro}</p>

          <h3 className="sr-only">{dict.about.chipsLabel}</h3>
          {/* Phones: one chip per row with its label beside it. Wider: chips side by side, labels underneath. */}
          <dl className="m-0 mt-8 grid gap-5 sm:mt-10 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-10">
            {dict.about.chips.map((chip, i) => (
              <div key={chip.label} className="flex flex-row-reverse items-center justify-end gap-4 sm:w-[9.5rem] sm:flex-col-reverse sm:justify-end sm:gap-3 sm:text-center">
                <dt className="text-base font-semibold leading-snug">{chip.label}</dt>
                <dd className="m-0 shrink-0">
                  <span className={`${styles.chip} [--chip-size:5.5rem] sm:[--chip-size:8.5rem]`} style={{ "--chip-color": chipColors[i % chipColors.length] } as CSSProperties}>
                    <span className={styles.chipInlay}>
                      <span className={`font-display font-black [font-stretch:110%] ${chip.value.length > 2 ? "text-[0.9375rem] sm:text-2xl" : "text-xl sm:text-3xl"}`}>
                        {chip.value}
                      </span>
                    </span>
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h3 className={subHeading}>{dict.about.careerHeading}</h3>
          <p className="mt-1 mb-0 text-base">{dict.about.careerIntro}</p>
          <ul className="m-0 mt-4 list-none border-ink border-t-2 p-0">
            {dict.about.career.map((job) => (
              <li key={job.company} className="grid gap-x-6 gap-y-1 border-ink border-b-2 py-4 sm:grid-cols-[10rem_1fr]">
                <div>
                  <p className="m-0 font-display text-lg font-extrabold leading-tight sm:text-xl sm:[font-stretch:110%]">{job.company}</p>
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
      </div>
    </section>
  );
}
