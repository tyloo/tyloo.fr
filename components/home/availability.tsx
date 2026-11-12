import type { Dictionary } from "@/content/types";
import { BookingLink } from "./booking-link";
import { focusOnLight } from "./classes";

export function Availability({ dict }: { dict: Dictionary }) {
  return (
    <section aria-label={dict.availability.label} className="bg-sun">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-8 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
        <div>
          <p className="m-0 font-display text-xl font-extrabold leading-tight sm:text-2xl sm:[font-stretch:110%]">{dict.availability.status}</p>
          <p className="m-0 mt-1">
            {dict.availability.seat} {dict.availability.location}
          </p>
        </div>
        <BookingLink newTabLabel={dict.cta.newTab} className={`shrink-0 rounded-full bg-ink px-6 py-3 font-bold text-white md:self-auto ${focusOnLight}`}>
          {dict.cta.book}
        </BookingLink>
      </div>
    </section>
  );
}
