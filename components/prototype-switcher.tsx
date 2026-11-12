"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

type Variant = { key: string; name: string };

export function PrototypeSwitcher({ variants, current }: { variants: Variant[]; current: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const index = Math.max(
    0,
    variants.findIndex((v) => v.key === current),
  );

  const go = (step: number) => {
    const next = variants[(index + step + variants.length) % variants.length];
    router.replace(`${pathname}?variant=${next.key}`, { scroll: false });
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable]")) return;
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (process.env.NODE_ENV === "production") return null;

  const button = "grid h-8 w-8 place-items-center rounded-full hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

  return (
    <nav
      aria-label="Prototype variants"
      className="fixed bottom-4 left-1/2 z-[9999] flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/20 bg-black px-1.5 py-1 font-[system-ui] text-sm text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
    >
      <button type="button" className={button} onClick={() => go(-1)} aria-label="Previous variant">
        ‹
      </button>
      <span className="min-w-44 px-2 text-center tabular-nums">
        {variants[index].key} ({variants[index].name}) {index + 1}/{variants.length}
      </span>
      <button type="button" className={button} onClick={() => go(1)} aria-label="Next variant">
        ›
      </button>
    </nav>
  );
}
