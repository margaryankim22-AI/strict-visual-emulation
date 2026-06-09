// Neutral image placeholder. Thematic prompts: solidarity, community
// empowerment meetings, legal aid clinic settings — NEVER mining/industrial.
export function Placeholder({
  label,
  aspect = "aspect-[4/3]",
  accent = "blue",
}: {
  label: string;
  aspect?: string;
  accent?: "red" | "blue" | "yellow" | "green" | "purple";
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-border bg-surface ${aspect}`}
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          background: `radial-gradient(circle at 30% 20%, var(--accent-${accent}) 0%, transparent 60%), radial-gradient(circle at 80% 80%, var(--accent-yellow) 0%, transparent 55%)`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex items-end p-6">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Photo placeholder · {label}
        </span>
      </div>
    </div>
  );
}
