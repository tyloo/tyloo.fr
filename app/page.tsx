// PROTOTYPE: four homepage design directions on `/`, switchable via ?variant=A|B|C|D.
// Throwaway: once a direction wins, rewrite it properly and move the variants to a prototype branch.
import { Suspense } from "react";
import { PrototypeSwitcher } from "@/components/prototype-switcher";
import { VariantA } from "./_prototype-home/variant-a";
import { VariantB } from "./_prototype-home/variant-b";
import { VariantC } from "./_prototype-home/variant-c";
import { VariantD } from "./_prototype-home/variant-d";

const variants = [
  { key: "A", name: "Event model", Component: VariantA },
  { key: "B", name: "Annotated", Component: VariantB },
  { key: "C", name: "Session", Component: VariantC },
  { key: "D", name: "Royal flush", Component: VariantD },
];

export default function Home(props: PageProps<"/">) {
  return (
    <Suspense fallback={null}>
      <SelectedVariant searchParams={props.searchParams} />
    </Suspense>
  );
}

async function SelectedVariant({ searchParams }: Pick<PageProps<"/">, "searchParams">) {
  const { variant } = await searchParams;
  const key = typeof variant === "string" ? variant.toUpperCase() : "A";
  const current = variants.find((v) => v.key === key) ?? variants[0];
  const { Component } = current;

  return (
    <>
      <Component />
      <PrototypeSwitcher variants={variants.map(({ key, name }) => ({ key, name }))} current={current.key} />
    </>
  );
}
