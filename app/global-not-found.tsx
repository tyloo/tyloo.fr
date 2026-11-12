import type { Metadata } from "next";
import "./globals.css";
import { Spade } from "@/components/spade";
import { fontVariables } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Carte introuvable | Card not found",
  robots: { index: false },
};

const link = "font-bold underline decoration-2 underline-offset-4 hover:decoration-sun focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-sun";

export default function GlobalNotFound() {
  return (
    <html lang="fr" className={fontVariables}>
      <body className="grid min-h-dvh place-items-center bg-cobalt px-5 py-16 font-sans text-lg text-white antialiased">
        <main className="flex max-w-xl flex-col items-start gap-6">
          <Spade className="size-16 text-sun" />
          <h1 className="m-0 font-display text-[clamp(2.5rem,8vw,4.5rem)] font-black leading-[0.95] [font-stretch:120%]">Cette carte n'est pas dans le paquet.</h1>
          <p className="m-0">La page demandée n'existe pas.</p>
          <p className="m-0" lang="en">
            This card isn't in the deck: the page you asked for doesn't exist.
          </p>
          <p className="m-0 flex gap-6">
            <a href="/fr" className={link}>
              Retour à l'accueil
            </a>
            <a href="/en" hrefLang="en" lang="en" className={link}>
              Back to the home page
            </a>
          </p>
        </main>
      </body>
    </html>
  );
}
