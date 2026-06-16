import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

type AccentColor = "red" | "blue" | "yellow" | "green" | "purple";

export type HeroCta = {
  label: string;
  to: string;
  variant?: "primary" | "secondary";
};

export function PageHero({
  eyebrow,
  title,
  lead,
  accent = "blue",
  ctas,
}: {
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  accent?: AccentColor;
  ctas?: HeroCta[];
}) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        {eyebrow && (
          <div className="mb-5 flex items-center gap-3">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: `var(--accent-${accent})` }}
              aria-hidden="true"
            />
            <span
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: `var(--accent-${accent})` }}
            >
              {eyebrow}
            </span>
          </div>
        )}
        <h1 className="max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.05] md:text-6xl">
          {title}
        </h1>
        {lead && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{lead}</p>}
        {ctas && ctas.length > 0 && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {ctas.map((c) => {
              const isPrimary = (c.variant ?? "primary") === "primary";
              const base =
                "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold tracking-tight transition-colors sm:text-sm md:py-3";
              const cls = isPrimary
                ? `${base} text-white shadow-sm hover:opacity-90`
                : `${base} border border-border bg-background text-foreground hover:bg-surface`;
              const style = isPrimary
                ? { backgroundColor: `var(--accent-${accent})` }
                : undefined;
              return (
                <Link key={c.to + c.label} to={c.to} className={cls} style={style}>
                  {c.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
