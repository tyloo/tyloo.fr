"use client";

import { type CSSProperties, type FormEvent, useRef, useState } from "react";
import { agent, profile } from "./content";
import styles from "./variant-c.module.css";

type Kind = "client" | "agent" | "fail" | "pass" | "review";

type Line = { who: string; kind: Kind; text: string; pauseAfter?: number };

const script: Line[] = [
  { who: "client", kind: "client", text: "› Ajoute le paiement Stripe au tunnel de commande de la boutique", pauseAfter: 200 },
  { who: "agent", kind: "agent", text: "lire src/Checkout/CheckoutController.php" },
  { who: "agent", kind: "agent", text: "lire src/Order/OrderStateMachine.php" },
  { who: "agent", kind: "agent", text: "écrire la spec dans docs/specs/paiement.md" },
  { who: "agent", kind: "agent", text: "découper en 4 tickets, de #415 à #418" },
  { who: "agent", kind: "agent", text: "modifier src/Checkout/CheckoutController.php" },
  { who: "agent", kind: "agent", text: "créer src/Payment/StripeWebhookHandler.php" },
  { who: "agent", kind: "agent", text: "lancer les tests" },
  { who: "tests", kind: "fail", text: "✗ 1 test échoue : remboursement partiel", pauseAfter: 250 },
  { who: "julien", kind: "review", text: "revue faite, 2 corrections demandées : frais de port dans le remboursement partiel, webhooks rejoués en double", pauseAfter: 250 },
  { who: "agent", kind: "agent", text: "modifier src/Payment/RefundCalculator.php" },
  { who: "agent", kind: "agent", text: "ignorer les événements Stripe déjà traités" },
  { who: "agent", kind: "agent", text: "relancer les tests" },
  { who: "tests", kind: "pass", text: "✓ 148 tests passent" },
  { who: "julien", kind: "pass", text: "✓ julien a approuvé la PR #418" },
  { who: "prod", kind: "pass", text: "✓ déployé en production" },
];

const tone: Record<Kind, string> = {
  client: "text-[#E58FCB]",
  agent: "text-[#7FD1E0]",
  fail: "text-[#F07A7A]",
  pass: "text-[#8BD49C]",
  review: "text-[#F2C36B]",
};

const GAP = 40;

const timeline = (() => {
  let at = 300;
  const lines = script.map((line) => {
    const dur = Math.min(260, Math.max(100, line.text.length * 5));
    const timing = { delay: at, dur, steps: line.text.length };
    at += dur + GAP + (line.pauseAfter ?? 0);
    return { ...line, ...timing };
  });
  return { lines, total: at };
})();

type Exchange = { id: number; question: string };

export function VariantCSession() {
  const [skipped, setSkipped] = useState(false);
  const [exchanges, setExchanges] = useState<Exchange[]>([]);
  const [draft, setDraft] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const ask = (question: string) => {
    const trimmed = question.trim();
    if (!trimmed) return;
    setExchanges((list) => [...list, { id: list.length, question: trimmed }]);
    setDraft("");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    ask(draft);
  };

  const skip = () => {
    setSkipped(true);
    inputRef.current?.focus();
  };

  return (
    <div className={skipped ? styles.skipped : undefined} style={{ "--total": `${timeline.total}ms` } as CSSProperties}>
      <ol aria-label="Session rejouée : une demande client codée par un agent, relue et validée par Julien" className="space-y-1">
        {timeline.lines.map((line, index) => (
          <li
            key={index}
            className={`${styles.line} grid grid-cols-[7ch_minmax(0,1fr)] gap-x-3`}
            style={{ "--delay": `${line.delay}ms`, "--dur": `${line.dur}ms`, "--steps": line.steps } as CSSProperties}
          >
            <span className="text-[#B3A2B9] text-[13px] [font-stretch:75%]">{line.who}</span>
            <span className={`${tone[line.kind]} ${line.kind === "client" ? "font-semibold" : ""} [overflow-wrap:anywhere]`}>{line.text}</span>
          </li>
        ))}
      </ol>

      <div role="log" aria-live="polite" aria-label="Échanges avec mon agent">
        {exchanges.length > 0 && (
          <ol className="mt-1 space-y-1">
            {exchanges.map((exchange) => (
              <li key={exchange.id} className="space-y-1 pt-3">
                <p className="grid grid-cols-[7ch_minmax(0,1fr)] gap-x-3">
                  <span className="text-[#B3A2B9] text-[13px] [font-stretch:75%]">vous</span>
                  <span className="font-semibold text-[#E58FCB]">› {exchange.question}</span>
                </p>
                <p className="grid grid-cols-[7ch_minmax(0,1fr)] gap-x-3">
                  <span className="text-[#B3A2B9] text-[13px] [font-stretch:75%]">agent</span>
                  <span>{agent.cannedReply}</span>
                </p>
                <p className="grid grid-cols-[7ch_minmax(0,1fr)] gap-x-3">
                  <span aria-hidden="true" />
                  <span>
                    <a href={profile.callUrl} className="text-[#8BD49C] underline underline-offset-4 hover:no-underline">
                      {profile.callLabel}
                    </a>
                  </span>
                </p>
              </li>
            ))}
          </ol>
        )}
      </div>

      <div className={`${styles.stack} mt-6`}>
        <p className={`${styles.running} flex flex-wrap items-center gap-x-4 gap-y-2 self-start text-[#B3A2B9]`}>
          <span>Session en cours de lecture</span>
          <button type="button" onClick={skip} className="border border-[#8E7A95] px-2 py-0.5 text-[#EDE3D8] text-[13px] [font-stretch:75%] hover:border-[#EDE3D8]">
            Passer l'animation
          </button>
        </p>

        <div className={styles.prompt}>
          <form onSubmit={onSubmit}>
            <label htmlFor="variant-c-ask" className="block text-[#B3A2B9] text-[13px] [font-stretch:75%]">
              {agent.chatLabel}
            </label>
            <div className="mt-2 flex flex-wrap items-stretch gap-2">
              <div className="flex min-w-0 flex-1 basis-56 items-center gap-2 border border-[#8E7A95] bg-[#241629] px-3 focus-within:outline-2 focus-within:outline-[#F2C36B] focus-within:outline-offset-2">
                <span aria-hidden="true" className="font-semibold text-[#E58FCB]">
                  ›
                </span>
                <input
                  ref={inputRef}
                  id="variant-c-ask"
                  type="text"
                  autoComplete="off"
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder={agent.chatPlaceholder}
                  className="min-w-0 flex-1 bg-transparent py-2 text-[#EDE3D8] placeholder:text-[#B3A2B9] focus-visible:outline-none"
                />
              </div>
              <button type="submit" className="border border-[#EDE3D8] px-3 py-2 font-semibold hover:bg-[#EDE3D8] hover:text-[#241629]">
                Envoyer la question
              </button>
            </div>
          </form>

          <div className="mt-4">
            <p className="text-[#B3A2B9] text-[13px] [font-stretch:75%]">Ou lancez une de ces questions :</p>
            <ul className="mt-2 flex flex-col items-start gap-1">
              {agent.suggestions.map((suggestion) => (
                <li key={suggestion}>
                  <button type="button" onClick={() => ask(suggestion)} className="text-left text-[#E58FCB] underline-offset-4 hover:underline">
                    › {suggestion}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
