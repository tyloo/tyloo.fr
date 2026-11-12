import type { Dictionary } from "@/content/types";
import { services } from "@/lib/site";
import { Hand } from "./hand";
import styles from "./home.module.css";

export function Hero({ dict }: { dict: Dictionary }) {
  const cards = services.map((service) => ({
    ...service,
    rankName: dict.hand.ranks[service.rank],
    ...dict.services[service.id],
  }));

  return (
    <>
      <section className="bg-cobalt text-white">
        <div className="mx-auto max-w-[100rem] px-5 pt-8 pb-6 sm:px-8 sm:pt-12">
          <h1 className={styles.name}>
            <span className="block">Julien</span> <span className="block">Bonvarlet</span>
          </h1>
          <p className="mt-8 mb-0 max-w-[60ch] text-lg sm:text-xl">
            <strong className="font-bold">{dict.hero.role}</strong> {dict.hero.tagline}
          </p>
        </div>
      </section>

      <section aria-labelledby="services" className="flex flex-col">
        {/* The heading comes first for assistive tech but sits under the cards on screen. */}
        <h2 id="services" className="order-2 mx-auto my-0 max-w-[40rem] px-5 text-center font-display text-2xl font-extrabold leading-tight [font-stretch:110%] sm:text-3xl">
          {dict.hand.heading}
        </h2>
        <div className="relative order-1">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[55%] bg-cobalt" />
          <div className="relative mx-auto max-w-[100rem]">
            <Hand cards={cards} flipLabel={dict.hand.flip} toolsLabel={dict.hand.tools} />
          </div>
        </div>
        <p className="order-3 mx-auto mt-3 mb-0 max-w-[40rem] px-5 pb-16 text-center">{dict.hand.caption}</p>
      </section>
    </>
  );
}
