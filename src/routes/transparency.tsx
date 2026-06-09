import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";
import { FileText, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/transparency")({
  head: () => ({
    meta: [
      { title: "Transparency Hub — Citadel" },
      { name: "description", content: "Citadel's registration, finances, and reports — fully public. Reg. 211.171.1446066." },
      { property: "og:title", content: "Transparency Hub — Citadel" },
      { property: "og:description", content: "Trust is a public good." },
    ],
  }),
  component: Transparency,
});

const rows = [
  { label: "programs.budget.legal", amount: "6,300,000 ֏", pct: "45%", c: "blue" },
  { label: "programs.budget.edu", amount: "3,500,000 ֏", pct: "25%", c: "green" },
  { label: "programs.budget.media", amount: "2,800,000 ֏", pct: "20%", c: "yellow" },
  { label: "programs.budget.ops", amount: "1,400,000 ֏", pct: "10%", c: "purple" },
] as const;

const reports = [
  { k: "transparency.reports.annual", c: "red" },
  { k: "transparency.reports.audit", c: "blue" },
  { k: "transparency.reports.esc", c: "green" },
] as const;

function Transparency() {
  const t = useT();
  return (
    <>
      <PageHero
        eyebrow={t("pillar.transparency.title")}
        title={t("transparency.title")}
        lead={t("transparency.lead")}
        accent="purple"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <div
            className="rounded-2xl border-2 bg-background p-8 lg:col-span-1"
            style={{ borderColor: "var(--accent-purple)" }}
          >
            <ShieldCheck
              className="size-8"
              style={{ color: "var(--accent-purple)" }}
            />
            <h3 className="mt-5 font-display text-2xl font-semibold">
              {t("transparency.regTitle")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t("transparency.regBody")}
            </p>
            <p className="mt-5 rounded-lg bg-surface px-4 py-3 font-mono text-sm">
              {t("transparency.regNumber")}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background p-8 lg:col-span-2">
            <h3 className="font-display text-2xl font-semibold">
              {t("transparency.financialsTitle")}
            </h3>
            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-surface text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  <tr>
                    <th className="px-5 py-3">{t("transparency.financials.col1")}</th>
                    <th className="px-5 py-3">{t("transparency.financials.col2")}</th>
                    <th className="px-5 py-3">{t("transparency.financials.col3")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {rows.map((r) => (
                    <tr key={r.label}>
                      <td className="px-5 py-4">
                        <span className="flex items-center gap-3">
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{ backgroundColor: `var(--accent-${r.c})` }}
                          />
                          {t(r.label)}
                        </span>
                      </td>
                      <td className="px-5 py-4 font-mono">{r.amount}</td>
                      <td className="px-5 py-4 font-mono text-muted-foreground">{r.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="font-display text-3xl font-semibold">
          {t("transparency.reportsTitle")}
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reports.map((r) => (
            <div
              key={r.k}
              className="flex items-start gap-4 rounded-2xl border border-border bg-background p-6"
            >
              <FileText className="size-6" style={{ color: `var(--accent-${r.c})` }} />
              <div>
                <p className="font-semibold">{t(r.k)}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {t("transparency.reports.coming")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
