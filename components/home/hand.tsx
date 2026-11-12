"use client";

import { type CSSProperties, useState } from "react";
import { Spade } from "@/components/spade";
import type { Rank, ServiceId } from "@/lib/site";
import styles from "./home.module.css";

export type Card = {
  id: ServiceId;
  rank: Rank;
  rankName: string;
  title: string;
  summary: string;
  stack: string[];
};

function CornerIndex({ rank, bottom = false }: { rank: Rank; bottom?: boolean }) {
  return (
    <span aria-hidden="true" className={bottom ? `${styles.index} ${styles.indexBottom}` : styles.index}>
      {rank}
      <Spade />
    </span>
  );
}

export function Hand({ cards, flipLabel, toolsLabel }: { cards: Card[]; flipLabel: string; toolsLabel: string }) {
  // One card open at a time: in the fan, an open card would hide its neighbour's text.
  const [openId, setOpenId] = useState<ServiceId | null>(null);

  return (
    <ul className={styles.hand}>
      {cards.map((card, i) => {
        const flipped = openId === card.id;
        return (
          <li key={card.id} className={styles.slot} data-flipped={flipped} style={{ "--i": i, "--o": i - 2 } as CSSProperties}>
            <div className={styles.deal}>
              <div className={styles.lift}>
                <div className={styles.flipper}>
                  <div className={`${styles.face} ${styles.front}`}>
                    <CornerIndex rank={card.rank} />
                    <div className={styles.centre}>
                      <span className={card.rank === "A" ? `${styles.pip} ${styles.pipAce}` : styles.pip}>
                        <Spade />
                        <Spade />
                      </span>
                      <h3 className={styles.title}>
                        <span className="sr-only">{card.rankName}, </span>
                        {card.title}
                      </h3>
                    </div>
                    <CornerIndex rank={card.rank} bottom />
                  </div>
                  <div className={`${styles.face} ${styles.back}`}>
                    <div className={styles.backInner}>
                      <p aria-hidden="true" className={styles.backTitle}>
                        {card.rank}♠&#xFE0E; {card.title}
                      </p>
                      <p className="m-0">{card.summary}</p>
                      <p className={styles.backLabel}>{toolsLabel}</p>
                      <ul className={styles.stack}>
                        {card.stack.map((tool) => (
                          <li key={tool}>{tool}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <button type="button" className={styles.hit} aria-pressed={flipped} aria-label={`${flipLabel} ${card.title}`} onClick={() => setOpenId(flipped ? null : card.id)} />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
