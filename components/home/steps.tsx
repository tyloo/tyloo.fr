import type { Dictionary } from "@/content/types";
import { container, sectionHeading } from "./classes";
import styles from "./home.module.css";

export function Steps({ dict }: { dict: Dictionary }) {
  return (
    <section aria-labelledby="steps" className={`${container} py-20 md:py-28`}>
      <h2 id="steps" className={sectionHeading}>
        {dict.steps.heading}
      </h2>
      <p className="mt-4 mb-0 max-w-[50ch]">{dict.steps.intro}</p>
      <ol className="m-0 mt-12 grid list-none gap-8 p-0 lg:grid-cols-5 lg:gap-6">
        {dict.steps.items.map((step, i) => (
          <li key={step.street} className="grid grid-cols-[4.5rem_1fr] gap-x-4 border-ink border-t-2 pt-5 lg:grid-cols-1">
            <span aria-hidden="true" className={`${styles.numeral} font-display text-[4.5rem] font-black leading-none [font-stretch:120%]`}>
              {i + 1}
            </span>
            <div className="lg:mt-5">
              <p className="m-0 font-display text-base font-bold text-cobalt [font-stretch:110%]">{step.street}</p>
              <h3 className="m-0 mt-1 font-display text-[1.0625rem] font-extrabold leading-tight xl:text-xl">{step.title}</h3>
              <p className="mt-2 mb-0 text-base">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
