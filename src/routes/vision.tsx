import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Vision 2030 — Citadel" },
      { name: "description", content: "Citadel's three-point roadmap: digital rights, policy reform, and the Syunik Model." },
      { property: "og:title", content: "Vision 2030 — Citadel" },
      { property: "og:description", content: "A digital and legal shield for the Lesser Caucasus." },
    ],
  }),
  component: Vision,
});

const roadmap = [
  { y: "2026", t: "vision.r1.title", b: "vision.r1.body", c: "blue" },
  { y: "2027", t: "vision.r2.title", b: "vision.r2.body", c: "yellow" },
  { y: "2030", t: "vision.r3.title", b: "vision.r3.body", c: "green" },
] as const;

function Vision() {
  const t = useT();
  return (
    <>
      <PageHero
        eyebrow="Strategic roadmap"
        title={t("vision.title")}
        lead={t("vision.lead")}
        accent="yellow"
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <ol className="relative space-y-10 border-l-2 border-border pl-10">
          {roadmap.map((r) => (
            <li key={r.y} className="relative">
              <span
                className="absolute -left-[46px] top-1 inline-flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold text-background"
                style={{ backgroundColor: `var(--accent-${r.c})` }}
              >
                {r.y}
              </span>
              <div className="rounded-2xl border border-border bg-background p-8">
                <h3 className="font-display text-2xl font-semibold">{t(r.t)}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{t(r.b)}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
