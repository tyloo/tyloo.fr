"use client";

import { useEffect } from "react";
import { profile } from "./content";

const isTyping = (target: EventTarget | null) => target instanceof HTMLElement && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

export function VariantCCallShortcut() {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "a" || event.repeat || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
      if (isTyping(event.target)) return;
      event.preventDefault();
      window.location.assign(profile.callUrl);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <a href={profile.callUrl} aria-keyshortcuts="a" className="inline-flex items-center gap-2 bg-[#EDE3D8] px-2 py-0.5 font-semibold text-[#241629] hover:bg-[#F2C36B]">
      <span aria-hidden="true">
        [<kbd className="font-[inherit] font-extrabold">a</kbd>]
      </span>
      Réserver un appel
    </a>
  );
}
