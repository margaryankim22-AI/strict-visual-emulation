// Stylized "people holding hands" mark using the Citadel accent palette.
// Brand wordmark "Citadel" is always Latin script in both EN and HY.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* heads */}
        <circle cx="6" cy="10" r="2.4" fill="var(--accent-red)" />
        <circle cx="13" cy="7" r="2.4" fill="var(--accent-yellow)" />
        <circle cx="19" cy="7" r="2.4" fill="var(--accent-green)" />
        <circle cx="26" cy="10" r="2.4" fill="var(--accent-purple)" />
        {/* arched arms = "holding hands" */}
        <path
          d="M4 18 Q9 13 13 18 Q16 22 19 18 Q23 13 28 18"
          stroke="var(--accent-blue)"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        {/* shoulders/bodies */}
        <rect x="3.6" y="18" width="4.8" height="8" rx="1.5" fill="var(--accent-red)" />
        <rect x="10.6" y="15" width="4.8" height="11" rx="1.5" fill="var(--accent-yellow)" />
        <rect x="16.6" y="15" width="4.8" height="11" rx="1.5" fill="var(--accent-green)" />
        <rect x="23.6" y="18" width="4.8" height="8" rx="1.5" fill="var(--accent-purple)" />
      </svg>
      <span className="font-display text-xl font-semibold tracking-tight text-foreground">
        Citadel
      </span>
    </div>
  );
}
