import type { Dictionary } from "@/content/types";
import { container, lightSection, sectionHeading, sectionIntro } from "./classes";
import styles from "./home.module.css";

export function Steps({ dict }: { dict: Dictionary }) {
  return (
    <section aria-labelledby="steps" className={`${container} ${lightSection}`}>
      <h2 id="steps" className={sectionHeading}>
        {dict.steps.heading}
      </h2>
      <p className={sectionIntro}>{dict.steps.intro}</p>
      {/* On wide screens each step spans four shared rows (subgrid), so numerals, labels, titles and details line up across columns. */}
      <ol className="m-0 mt-8 grid list-none gap-8 p-0 sm:mt-12 lg:grid-cols-5 lg:grid-rows-[repeat(4,auto)] lg:gap-x-6 lg:gap-y-0">
        {dict.steps.items.map((step, i) => (
          <li key={step.street} className="grid grid-cols-[4.5rem_1fr] content-start gap-x-4 border-ink border-t-2 pt-5 lg:row-span-4 lg:grid-cols-1 lg:grid-rows-subgrid">
            <span aria-hidden="true" className={`${styles.numeral} row-span-3 font-display text-[4.5rem] font-black leading-none [font-stretch:120%] lg:row-span-1 lg:mb-5`}>
              {i + 1}
            </span>
            <p className="col-start-2 m-0 font-display text-base font-bold text-cobalt [font-stretch:110%] lg:col-start-1">{step.street}</p>
            <h3 className="col-start-2 m-0 mt-1 font-display text-[1.0625rem] font-extrabold leading-tight lg:col-start-1 xl:text-xl">{step.title}</h3>
            <p className="col-start-2 mt-2 mb-0 text-base lg:col-start-1">{step.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
