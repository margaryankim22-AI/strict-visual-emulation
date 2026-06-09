import { createFileRoute, Link } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";
import { ArrowRight, Info } from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Path of Law — Citadel Programs" },
      { name: "description", content: "Citadel's flagship Path of Law program: legal hotline, individual aid, seminars, and the Caravan media series." },
      { property: "og:title", content: "Path of Law — Citadel" },
      { property: "og:description", content: "Comprehensive legal infrastructure for the people of Syunik." },
    ],
  }),
  component: Programs,
});

const services = [
  { t: "programs.s1.title", b: "programs.s1.body", c: "blue", n: "01" },
  { t: "programs.s2.title", b: "programs.s2.body", c: "red", n: "02" },
  { t: "programs.s3.title", b: "programs.s3.body", c: "green", n: "03" },
  { t: "programs.s4.title", b: "programs.s4.body", c: "yellow", n: "04" },
] as const;

const budget = [
  { k: "programs.budget.legal", pct: 45, c: "blue" },
  { k: "programs.budget.edu", pct: 25, c: "green" },
  { k: "programs.budget.media", pct: 20, c: "yellow" },
  { k: "programs.budget.ops", pct: 10, c: "purple" },
] as const;

function Programs() {
  const t = useT();
  return (
    <>
      <PageHero
        eyebrow={t("feature.eyebrow")}
        title={t("programs.title")}
        lead={t("programs.lead")}
        accent="blue"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.t} className="rounded-2xl border border-border bg-background p-8">
              <div className="flex items-baseline gap-4">
                <span
                  className="font-mono text-sm font-semibold"
                  style={{ color: `var(--accent-${s.c})` }}
                >
                  {s.n}
                </span>
                <span
                  className="h-px flex-1"
                  style={{ backgroundColor: `var(--accent-${s.c})` }}
                />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">{t(s.t)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(s.b)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Budget */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            {t("programs.budgetTitle")}
          </h2>
          <p className="mt-2 font-mono text-sm text-muted-foreground">Total · 14,000,000 AMD</p>
          <div className="mt-10 space-y-5">
            {budget.map((b) => (
              <div key={b.k}>
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="text-sm font-semibold">{t(b.k)}</span>
                  <span className="font-mono text-sm text-muted-foreground">{b.pct}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-background">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${b.pct}%`, backgroundColor: `var(--accent-${b.c})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 law note */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div
          className="flex gap-5 rounded-2xl border-l-4 bg-surface p-8"
          style={{ borderLeftColor: "var(--accent-red)" }}
        >
          <Info className="size-6 shrink-0" style={{ color: "var(--accent-red)" }} />
          <div>
            <h3 className="font-display text-2xl font-semibold">{t("programs.lawNoteTitle")}</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {t("programs.lawNoteBody")}
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/get-involved"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:bg-[color:var(--accent-blue)]"
          >
            {t("nav.getInvolved")}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
