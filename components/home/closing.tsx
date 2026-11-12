import type { CSSProperties } from "react";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { BookingLink } from "./booking-link";
import { container, focusOnDark, sectionHeading } from "./classes";
import styles from "./home.module.css";

export function Closing({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const quietLink = `underline underline-offset-4 ${focusOnDark}`;

  return (
    <section aria-labelledby="closing" className="bg-cobalt text-white">
      <div className={`${container} grid items-center gap-12 py-20 md:grid-cols-[1fr_auto] md:py-28`}>
        <div>
          <h2 id="closing" className={`${sectionHeading} max-w-[16ch] text-balance`}>
            {dict.closing.heading}
          </h2>
          <p className="mt-10 mb-0">
            <BookingLink
              newTabLabel={dict.cta.newTab}
              className={`inline-block rounded-full bg-sun px-7 py-3.5 font-bold text-ink text-lg shadow-[5px_5px_0_var(--color-ink)] hover:shadow-[3px_3px_0_var(--color-ink)] sm:text-xl ${focusOnDark}`}
            >
              {dict.cta.book}
            </BookingLink>
          </p>
          <p className="mt-10 mb-0">
            {dict.closing.orEmail}{" "}
            <a href={`mailto:${site.email}`} className={`font-bold underline decoration-2 underline-offset-4 ${focusOnDark}`}>
              {site.email}
            </a>
          </p>
          <p className="mt-6 mb-0 text-base text-white/85">
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
        <div aria-hidden="true" className="mx-auto rotate-[-8deg]">
          <span className={styles.chip} style={{ "--chip-color": "var(--color-pink)", "--chip-size": "clamp(12rem, 22vw, 16rem)" } as CSSProperties}>
            <span className={styles.chipInlay}>
              <span className="font-display text-3xl font-black [font-stretch:110%] md:text-4xl">15&nbsp;min</span>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
