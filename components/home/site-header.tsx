import type { Dictionary } from "@/content/types";
import { site } from "@/lib/site";
import { BookingLink } from "./booking-link";
import { focusOnDark } from "./classes";

export function SiteHeader({ dict }: { dict: Dictionary }) {
  const other = dict.header.switchTo;
  const navLink = `font-semibold underline-offset-4 hover:underline ${focusOnDark}`;

  return (
    <header className="bg-cobalt text-white">
      <div className="mx-auto flex max-w-[100rem] flex-wrap items-center gap-x-6 gap-y-4 px-5 py-5 sm:px-8">
        <p className="m-0 mr-auto font-display text-xl font-extrabold [font-stretch:110%]">Julien B.</p>
        <nav aria-label={dict.header.social}>
          <ul className="m-0 flex list-none gap-5 p-0">
            <li>
              <a href={site.github} className={navLink}>
                GitHub
              </a>
            </li>
            <li>
              <a href={site.linkedin} className={navLink}>
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`/${other}`} hrefLang={other} lang={other} aria-label={dict.header.switchLabel} className={navLink}>
                {other.toUpperCase()}
              </a>
            </li>
          </ul>
        </nav>
        <BookingLink
          newTabLabel={dict.cta.newTab}
          className={`w-full rounded-full bg-sun px-5 py-2.5 text-center font-bold text-ink shadow-[4px_4px_0_var(--color-ink)] sm:w-auto ${focusOnDark}`}
        >
          {dict.cta.book}
        </BookingLink>
      </div>
    </header>
  );
}
