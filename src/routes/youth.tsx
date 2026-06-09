import { createFileRoute, Link } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";
import { Placeholder } from "@/components/Placeholder";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/youth")({
  head: () => ({
    meta: [
      { title: "Rights Ambassadors — Citadel Youth" },
      { name: "description", content: "Become a Rights Ambassador. Citadel trains young people in Syunik in labor law and digital advocacy." },
      { property: "og:title", content: "Rights Ambassadors — Citadel" },
      { property: "og:description", content: "Bridging the digital divide for a more just Armenia." },
    ],
  }),
  component: Youth,
});

function Youth() {
  const t = useT();
  return (
    <>
      <PageHero
        eyebrow={t("pillar.youth.title")}
        title={t("youth.title")}
        lead={t("youth.lead")}
        accent="green"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <Placeholder
              label="Youth empowerment workshop"
              aspect="aspect-[4/5]"
              accent="green"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              {t("youth.what.title")}
            </h2>
            <ul className="mt-8 space-y-4">
              {(["youth.what.b1", "youth.what.b2", "youth.what.b3"] as const).map((k, i) => {
                const colors = ["red", "blue", "yellow"] as const;
                return (
                  <li key={k} className="flex gap-4 rounded-xl border border-border bg-background p-5">
                    <span
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-background"
                      style={{ backgroundColor: `var(--accent-${colors[i]})` }}
                    >
                      <Check className="size-4" />
                    </span>
                    <span className="pt-1 text-base text-foreground">{t(k)}</span>
                  </li>
                );
              })}
            </ul>
            <Link
              to="/get-involved"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:bg-[color:var(--accent-green)]"
            >
              {t("youth.cta")}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
