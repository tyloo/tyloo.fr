import type { ReactNode } from "react";
import { site } from "@/lib/site";

export function BookingLink({ className, newTabLabel, children }: { className: string; newTabLabel: string; children: ReactNode }) {
  return (
    <a href={site.callUrl} target="_blank" rel="noopener" className={className}>
      {children}
      <span className="sr-only"> {newTabLabel}</span>
    </a>
  );
}
