import type { CSSProperties } from "react";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { BookingLink } from "./booking-link";
import { colouredSection, container, focusOnDark, sectionHeading } from "./classes";
import styles from "./home.module.css";

export function Closing({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const quietLink = `underline underline-offset-4 ${focusOnDark}`;

  return (
    <section aria-labelledby="closing" className="bg-cobalt text-white">
      <div className={`${container} ${colouredSection}`}>
        <h2 id="closing" className={sectionHeading}>
          {dict.closing.heading}
        </h2>
        <div className="mt-8 grid items-center gap-10 text-center sm:mt-10 lg:grid-cols-[1fr_auto] lg:gap-12 lg:text-left">
          <div>
            <p className="m-0">
              <BookingLink
                newTabLabel={dict.cta.newTab}
                className={`inline-block rounded-full bg-sun px-7 py-3.5 font-bold text-ink text-lg shadow-[5px_5px_0_var(--color-ink)] hover:shadow-[3px_3px_0_var(--color-ink)] sm:text-xl ${focusOnDark}`}
              >
                {dict.cta.book}
              </BookingLink>
            </p>
            <p className="mt-8 mb-0">
              {dict.closing.orEmail}{" "}
              <a href={`mailto:${site.email}`} className={`font-bold underline decoration-2 underline-offset-4 ${focusOnDark}`}>
                {site.email}
              </a>
            </p>
            <p className="mx-auto mt-4 mb-0 max-w-[60ch] text-base text-white/85 lg:mx-0">
              {dict.closing.agents}{" "}
              <a href={`/${locale}/index.md`} type="text/markdown" className={quietLink}>
                {dict.closing.markdown}
              </a>{" "}
              {dict.closing.and}{" "}
              <a href="/llms.txt" type="text/plain" className={quietLink}>
                {dict.closing.llms}
              </a>
              .
            </p>
          </div>
          <div aria-hidden="true" className="rotate-[-8deg] justify-self-center lg:justify-self-end">
            <span className={`${styles.chip} [--chip-size:9.5rem] sm:[--chip-size:10rem] lg:[--chip-size:13rem]`} style={{ "--chip-color": "var(--color-pink)" } as CSSProperties}>
              <span className={styles.chipInlay}>
                <span className="font-display text-lg font-black [font-stretch:110%] sm:text-xl lg:text-4xl">15&nbsp;min</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
