import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { colouredSection, container, sectionHeading } from "./classes";

const layout = ["md:max-w-[56rem]", "md:ml-auto md:max-w-[44rem]", "md:ml-[12%] md:max-w-[44rem]"];
const quoteMarks: Record<Locale, [string, string]> = { fr: ["«\u00a0", "\u00a0»"], en: ["“", "”"] };

export function Testimonials({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  if (dict.testimonials.items.length === 0) return null;
  const [open, close] = quoteMarks[locale];

  return (
    <section aria-labelledby="testimonials" className="bg-pink">
      <div className={`${container} ${colouredSection}`}>
        <h2 id="testimonials" className={sectionHeading}>
          {dict.testimonials.heading}
        </h2>
        <ul className="m-0 mt-8 grid list-none gap-10 p-0 sm:mt-12 md:gap-20">
          {dict.testimonials.items.map((testimonial, i) => (
            <li key={testimonial.quote} className={layout[i % layout.length]}>
              <figure className="m-0">
                <blockquote className="m-0">
                  <p
                    className={`m-0 font-display font-bold leading-[1.15] [font-stretch:110%] ${i === 0 ? "text-[clamp(1.375rem,3.4vw,2.75rem)]" : "text-[clamp(1.25rem,2.4vw,2rem)]"}`}
                  >
                    {open}
                    {testimonial.quote}
                    {close}
                  </p>
                </blockquote>
                <figcaption className="mt-4">
                  <span className="font-bold">{testimonial.author}</span>, {testimonial.title}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
