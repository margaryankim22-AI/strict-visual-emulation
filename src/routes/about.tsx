import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";
import { Placeholder } from "@/components/Placeholder";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Citadel" },
      { name: "description", content: "Citadel's origin: from solidarity to institution. A human-rights NGO serving all of Syunik." },
      { property: "og:title", content: "About Citadel" },
      { property: "og:description", content: "From a single act of solidarity to a permanent legal institution for Syunik." },
    ],
  }),
  component: About,
});

const values = [
  { t: "about.value1.title", b: "about.value1.body", c: "red" },
  { t: "about.value2.title", b: "about.value2.body", c: "blue" },
  { t: "about.value3.title", b: "about.value3.body", c: "green" },
] as const;

const team = [
  { name: "about.founder.name", role: "about.founder.role", bio: "about.founder.bio", c: "red" },
  { name: "about.team.pm.name", role: "about.team.pm.role", bio: null, c: "blue" },
  { name: "about.team.coord.name", role: "about.team.coord.role", bio: null, c: "yellow" },
  { name: "about.team.media.name", role: "about.team.media.role", bio: null, c: "purple" },
] as const;

function About() {
  const t = useT();
  return (
    <>
      <PageHero
        eyebrow={t("pillar.about.title")}
        title={t("about.title")}
        lead={t("about.lead")}
        accent="red"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Placeholder label="Community gathering, 2025" aspect="aspect-[4/5]" accent="red" />
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              {t("about.originTitle")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t("about.originBody")}
            </p>

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
              <div key={v.t} className="rounded-2xl border border-border bg-background p-8">
                <span
                  className="block h-1.5 w-10 rounded-full"
                  style={{ backgroundColor: `var(--accent-${v.c})` }}
                />
                <h3 className="mt-5 font-display text-2xl font-semibold">{t(v.t)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(v.b)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">
          {t("about.teamTitle")}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="rounded-2xl border border-border bg-background p-6">
              <Placeholder label="Portrait placeholder" aspect="aspect-square" accent={m.c} />
              <h3 className="mt-5 font-display text-xl font-semibold">{t(m.name)}</h3>
              <p
                className="mt-1 text-xs font-semibold uppercase tracking-widest"
                style={{ color: `var(--accent-${m.c})` }}
              >
                {t(m.role)}
              </p>
              {m.bio && (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(m.bio)}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
