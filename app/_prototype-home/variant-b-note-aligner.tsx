"use client";

import { useEffect } from "react";

// Desktop only: pushes each margin note down so it starts on the line of its reference.
// Without JS the notes simply stack at the top of their block.
export function VariantBNoteAligner({ rootId }: { rootId: string }) {
  useEffect(() => {
    const root = document.getElementById(rootId);
    if (!root) return;

    const desktop = window.matchMedia("(min-width: 64rem)");
    let frame = 0;

    const align = () => {
      const notes = Array.from(root.querySelectorAll<HTMLElement>("[data-note]"));
      for (const note of notes) note.style.marginTop = "";
      if (!desktop.matches) return;

      for (const note of notes) {
        const anchor = document.getElementById(`ref-${note.dataset.note}`)?.querySelector("sup");
        if (!anchor) continue;
        const offset = anchor.getBoundingClientRect().top - note.getBoundingClientRect().top;
        if (offset > 0) note.style.marginTop = `${Math.round(offset)}px`;
      }
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(align);
    };

    schedule();
    document.fonts?.ready.then(schedule);
    window.addEventListener("resize", schedule);
    desktop.addEventListener("change", schedule);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", schedule);
      desktop.removeEventListener("change", schedule);
    };
  }, [rootId]);

  return null;
}
