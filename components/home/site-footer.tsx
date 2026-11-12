import type { Dictionary } from "@/content/types";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer className="bg-ink text-white">
      <p className="mx-auto my-0 max-w-6xl px-5 py-8 text-base sm:px-8">{dict.footer.line}</p>
    </footer>
  );
}
