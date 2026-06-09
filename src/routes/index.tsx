import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useT } from "@/lib/i18n";
import { Placeholder } from "@/components/Placeholder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Citadel — Defending Rights. Advancing Justice." },
      {
        name: "description",
        content:
          "Independent legal defense and civic education for the people of Syunik, Armenia.",
      },
      { property: "og:title", content: "Citadel — Defending Rights. Advancing Justice." },
      {
        property: "og:description",
        content: "Together for justice. Citadel is the human-rights citadel of Syunik.",
      },
    ],
  }),
  component: Home,
});

const accents = ["red", "blue", "yellow", "green", "purple"] as const;

const pillars = [
  { to: "/about", titleKey: "pillar.about.title", descKey: "pillar.about.desc", accent: "red" },
  { to: "/programs", titleKey: "pillar.programs.title", descKey: "pillar.programs.desc", accent: "blue" },
  { to: "/vision", titleKey: "pillar.vision.title", descKey: "pillar.vision.desc", accent: "yellow" },
  { to: "/youth", titleKey: "pillar.youth.title", descKey: "pillar.youth.desc", accent: "green" },
  { to: "/transparency", titleKey: "pillar.transparency.title", descKey: "pillar.transparency.desc", accent: "purple" },
] as const;

const stats: ReadonlyArray<{ v: string; l: string; a: string; mono?: boolean }> = [
  { v: "stats.citizens.value", l: "stats.citizens.label", a: "red" },
  { v: "stats.budget.value", l: "stats.budget.label", a: "yellow" },
  { v: "stats.reach.value", l: "stats.reach.label", a: "green" },
  { v: "stats.reg.value", l: "stats.reg.label", a: "blue", mono: true },
];

function Home() {
  const t = useT();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
          style={{
            background:
              "radial-gradient(60% 50% at 15% 20%, var(--accent-red) 0%, transparent 60%), radial-gradient(50% 45% at 85% 30%, var(--accent-blue) 0%, transparent 60%), radial-gradient(45% 40% at 50% 95%, var(--accent-yellow) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="flex gap-1">
                {accents.map((c) => (
                  <span
                    key={c}
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: `var(--accent-${c})` }}
                  />
                ))}
              </span>
              <span>{t("home.heroEyebrow")}</span>
            </div>
            <h1 className="text-balance font-display text-5xl font-semibold leading-[1.02] md:text-7xl">
              {t("home.heroTitle").split("\n").map((line, i) => (
                <span key={i} className="block">
                  {i === 1 ? (
                    <span
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, var(--accent-red), var(--accent-yellow) 40%, var(--accent-blue))",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {line}
                    </span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t("home.heroLead")}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-[color:var(--accent-blue)]"
              >
                {t("home.heroCtaPrimary")}
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
              >
                {t("home.heroCtaSecondary")}
              </Link>
            </div>
            <p
              className="mt-10 text-sm font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--accent-red)" }}
            >
              {t("brand.tagline")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-5"
          >
            <Placeholder
              label="Community solidarity gathering, Syunik"
              aspect="aspect-[4/5]"
              accent="red"
            />
            <div className="absolute -bottom-6 -left-6 max-w-[240px] rounded-2xl bg-foreground p-6 text-background shadow-xl">
              <p className="font-display text-3xl font-semibold">2,600+</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest opacity-70">
                {t("stats.citizens.label")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-border lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="bg-surface px-6 py-8">
              <span
                className="block h-1 w-8 rounded-full"
                style={{ backgroundColor: `var(--accent-${s.a})` }}
                aria-hidden="true"
              />
              <p
                className={`mt-4 font-display text-3xl font-semibold ${s.mono ? "font-mono text-lg tracking-tight" : ""}`}
              >
                {t(s.v as never)}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {t(s.l as never)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {t("brand.tagline")}
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold md:text-5xl">
            Five pillars. One citadel.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.to}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                to={p.to}
                className="group block h-full rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-background"
                  style={{ backgroundColor: `var(--accent-${p.accent})` }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold">
                  {t(p.titleKey as never)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(p.descKey as never)}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-foreground">
                  Read more
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured: Path of Law */}
      <section className="bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--accent-yellow)" }}
            >
              {t("feature.eyebrow")}
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              {t("feature.title")}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-background/70">
              {t("feature.body")}
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {(["feature.point1", "feature.point2", "feature.point3"] as const).map((k, i) => (
                <li key={k} className="flex gap-3">
                  <span
                    className="mt-1 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: `var(--accent-${(["red", "yellow", "green"] as const)[i]})` }}
                  />
                  <span className="text-background/90">{t(k)}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/programs"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-[color:var(--accent-yellow)]"
            >
              {t("feature.cta")}
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <Placeholder
            label="Legal aid clinic in session"
            aspect="aspect-[5/4]"
            accent="yellow"
          />
        </div>
      </section>

      {/* Origin teaser */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <Placeholder
            label="Community empowerment meeting"
            aspect="aspect-[4/5]"
            accent="purple"
          />
          <div className="lg:col-span-7 lg:col-start-6">
            <p
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--accent-purple)" }}
            >
              {t("origin.eyebrow")}
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              {t("origin.title")}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {t("origin.body")}
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold underline decoration-[color:var(--accent-purple)] decoration-2 underline-offset-8"
            >
              {t("origin.cta")}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
