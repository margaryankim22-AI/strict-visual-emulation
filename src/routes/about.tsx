import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import type { TKey } from "@/lib/translations";
import { PageHero } from "@/components/PageHero";
import originImg from "@/assets/about-origin.jpg.asset.json";
import founderImg from "@/assets/about-founder.jpg.asset.json";
import pmImg from "@/assets/about-pm.jpg.asset.json";
import coordImg from "@/assets/about-coord.jpg.asset.json";
import mediaImg from "@/assets/about-media.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Citadel" },
      {
        name: "description",
        content:
          "The Road from Kajaran: how an 11-day strike and a AMD 4.7B SLAPP lawsuit gave rise to Citadel — a permanent legal shield for Syunik.",
      },
      { property: "og:title", content: "About Citadel — From Protest to Permanent Protection" },
      {
        property: "og:description",
        content:
          "How an 11-day strike and a AMD 4.7B SLAPP lawsuit gave rise to a permanent legal institution for Syunik.",
      },
      { property: "og:image", content: originImg.url },
      { name: "twitter:image", content: originImg.url },
    ],
  }),
  component: About,
});

type AccentColor = "red" | "blue" | "yellow" | "green" | "purple";

const values: {
  t: TKey;
  b: TKey;
  c: AccentColor;
}[] = [
  { t: "about.value1.title", b: "about.value1.body", c: "red" },
  { t: "about.value3.title", b: "about.value3.body", c: "green" },
];

const team: {
  name: TKey;
  role: TKey;
  bio: TKey;
  img: string;
  c: AccentColor;
}[] = [
  { name: "about.founder.name", role: "about.founder.role", bio: "about.founder.bio", img: founderImg.url, c: "red" },
  { name: "about.team.pm.name", role: "about.team.pm.role", bio: "about.team.pm.bio", img: pmImg.url, c: "blue" },
  { name: "about.team.coord.name", role: "about.team.coord.role", bio: "about.team.coord.bio", img: coordImg.url, c: "yellow" },
  { name: "about.team.media.name", role: "about.team.media.role", bio: "about.team.media.bio", img: mediaImg.url, c: "purple" },
];

function About() {
  const t = useT();
  return (
    <>
      <PageHero
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        lead={t("about.lead")}
        accent="red"
        ctas={[
          { label: t("about.cta.help"), to: "/get-involved", variant: "primary" },
          { label: t("about.cta.reports"), to: "/programs", variant: "secondary" },
        ]}
      />

      {/* Origin / Catalyst */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div
              className="aspect-square w-full overflow-hidden rounded-2xl border border-dashed border-border bg-surface"
              role="img"
              aria-label="Image placeholder"
            />
          </div>
          <div className="lg:col-span-7">
            <div className="mb-5 flex items-center gap-3">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: "var(--accent-red)" }}
                aria-hidden="true"
              />
              <span
                className="text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ color: "var(--accent-red)" }}
              >
                {t("about.originEyebrow")}
              </span>
            </div>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              {t("about.originTitle")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t("about.originBody")}
            </p>

            <div
              className="mt-8 rounded-2xl border border-border bg-surface p-6"
              style={{ borderLeft: "4px solid var(--accent-red)" }}
            >
              <div
                className="font-display text-4xl font-semibold tracking-tight md:text-5xl"
                style={{ color: "var(--accent-red)" }}
              >
                {t("about.slapp.value")}
              </div>
              <p className="mt-2 text-sm font-medium text-foreground">
                {t("about.slapp.label")}
              </p>
            </div>

            <h2 className="mt-12 font-display text-3xl font-semibold md:text-4xl">
              {t("about.missionTitle")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t("about.missionBody")}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            {t("about.valuesTitle")}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.t}
                className="flex flex-col rounded-2xl border border-border bg-background p-8"
              >
                <span
                  className="block h-1.5 w-10 rounded-full"
                  style={{ backgroundColor: `var(--accent-${v.c})` }}
                />
                <h3 className="mt-5 font-display text-2xl font-semibold">{t(v.t)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(v.b)}</p>
                {v.note && (
                  <p
                    className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-foreground"
                  >
                    {t(v.note)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
