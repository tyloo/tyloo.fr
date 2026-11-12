"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
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

type Labels = { flip: string; tools: string; indicator: string };

function CornerIndex({ rank, bottom = false }: { rank: Rank; bottom?: boolean }) {
  return (
    <span aria-hidden="true" className={bottom ? `${styles.index} ${styles.indexBottom}` : styles.index}>
      {rank}
      <Spade />
    </span>
  );
}

export function Hand({ cards, labels }: { cards: Card[]; labels: Labels }) {
  // One card open at a time: in the fan, an open card would hide its neighbour's text.
  const [openId, setOpenId] = useState<ServiceId | null>(null);
  // Card closest to the centre of the scroll row (phones and tablets only).
  const [current, setCurrent] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const box = list.getBoundingClientRect();
      const middle = box.left + box.width / 2;
      let closest = 0;
      let distance = Number.POSITIVE_INFINITY;
      Array.from(list.children).forEach((child, i) => {
        const rect = child.getBoundingClientRect();
        const gap = Math.abs(rect.left + rect.width / 2 - middle);
        if (gap < distance) {
          distance = gap;
          closest = i;
        }
      });
      setCurrent(closest);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    list.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      list.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const showCard = (index: number) => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    listRef.current?.children[index]?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest", inline: "center" });
  };

  return (
    <>
      <ul ref={listRef} className={styles.hand}>
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
                        <p className={styles.backLabel}>{labels.tools}</p>
                        <ul className={styles.stack}>
                          {card.stack.map((tool) => (
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
                    aria-label={`${labels.flip} ${card.title}`}
                    onClick={() => setOpenId(flipped ? null : card.id)}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Mini cards under the scroll row: show where you are and that the row moves sideways. */}
      <nav aria-label={labels.indicator} className={styles.indicator}>
        {cards.map((card, i) => (
          <button
            key={card.id}
            type="button"
            className={styles.indicatorCard}
            aria-current={current === i ? "true" : undefined}
            aria-label={`${card.rankName}, ${card.title}`}
            onClick={() => showCard(i)}
          >
            <span aria-hidden="true" />
          </button>
        ))}
      </nav>
    </>
  );
}
