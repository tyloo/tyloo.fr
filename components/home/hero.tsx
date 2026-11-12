import Image from "next/image";
import type { Dictionary } from "@/content/types";
import { services, site } from "@/lib/site";
import { sectionHeading } from "./classes";
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
          <div className="grid items-center gap-x-12 gap-y-12 lg:grid-cols-[1fr_auto]">
            <h1 className={styles.name}>
              <span className="block">Julien</span> <span className="block">Bonvarlet</span>
            </h1>
            <div className={`${styles.portrait} order-first mt-6 -translate-x-1.5 justify-self-center lg:order-none lg:translate-x-0 lg:mt-0 lg:mr-2.5 lg:justify-self-auto`}>
              <Image src={site.photo} alt={dict.hero.photoAlt} fill loading="eager" sizes="(min-width: 64rem) 16rem, min(62vw, 16rem)" className="rounded-full object-cover" />
            </div>
          </div>
          <p className="mt-8 mb-0 max-w-[60ch] text-lg sm:text-xl">
            <strong className="font-bold">{dict.hero.role}</strong> {dict.hero.tagline}
          </p>
        </div>
      </section>

      <section aria-labelledby="services" className="flex flex-col">
        {/* The heading comes first for assistive tech but sits under the cards on screen. */}
        <h2 id="services" className={`${sectionHeading} order-2 px-5 text-center`}>
          {dict.hand.heading}
        </h2>
        <div className="relative order-1">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[55%] bg-cobalt" />
          <div className="relative mx-auto max-w-[100rem]">
            <Hand cards={cards} labels={{ flip: dict.hand.flip, tools: dict.hand.tools, indicator: dict.hand.indicator }} />
          </div>
        </div>
        <p className="order-3 mx-auto mt-3 mb-0 max-w-[40rem] px-5 pb-14 text-center sm:mt-4 md:pb-16">{dict.hand.caption}</p>
      </section>
    </>
  );
}
