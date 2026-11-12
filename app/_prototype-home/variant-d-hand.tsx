"use client";

import { type CSSProperties, useState } from "react";
import { services } from "./content";
import styles from "./variant-d.module.css";
import { Spade } from "./variant-d-spade";

const ranks = [
  { short: "A", name: "As de pique" },
  { short: "K", name: "Roi de pique" },
  { short: "Q", name: "Dame de pique" },
  { short: "J", name: "Valet de pique" },
  { short: "10", name: "Dix de pique" },
];

function CornerIndex({ rank, bottom = false }: { rank: string; bottom?: boolean }) {
  return (
    <span aria-hidden="true" className={bottom ? `${styles.index} ${styles.indexBottom}` : styles.index}>
      {rank}
      <Spade />
    </span>
  );
}

export function VariantDHand() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <ul className={styles.hand}>
      {services.map((service, i) => {
        const rank = ranks[i];
        const flipped = openId === service.id;
        return (
          <li key={service.id} className={styles.slot} data-flipped={flipped} style={{ "--i": i, "--o": i - 2 } as CSSProperties}>
            <div className={styles.deal}>
              <div className={styles.lift}>
                <div className={styles.flipper}>
                  <div className={`${styles.face} ${styles.front}`}>
                    <CornerIndex rank={rank.short} />
                    <div className={styles.centre}>
                      <span className={i === 0 ? `${styles.pip} ${styles.pipAce}` : styles.pip}>
                        <Spade />
                        <Spade />
                      </span>
                      <h3 className={styles.title}>
                        <span className="sr-only">{rank.name} : </span>
                        {service.title}
                      </h3>
                    </div>
                    <CornerIndex rank={rank.short} bottom />
                  </div>
                  <div className={`${styles.face} ${styles.back}`}>
                    <div className={styles.backInner}>
                      <p aria-hidden="true" className={styles.backTitle}>
                        {rank.short}♠&#xFE0E; {service.title}
                      </p>
                      <p className="m-0">{service.summary}</p>
                      <p className={styles.backLabel}>Outils</p>
                      <ul className={styles.stack}>
                        {service.stack.map((tool) => (
                          <li key={tool}>{tool}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className={styles.hit}
                  aria-pressed={flipped}
                  aria-label={`Retourner la carte ${service.title}`}
                  onClick={() => setOpenId(flipped ? null : service.id)}
                />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
