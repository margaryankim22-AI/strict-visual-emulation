import type { ReactNode } from "react";

type AccentColor = "red" | "blue" | "yellow" | "green" | "purple";

export function PageHero({
  eyebrow,
  title,
  lead,
  accent = "blue",
}: {
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  accent?: AccentColor;
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
        <h1 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] md:text-6xl">
          {title}
        </h1>
        {lead && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{lead}</p>}
      </div>
    </section>
  );
}
