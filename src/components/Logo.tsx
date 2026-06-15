// Institutional shield mark in the Armenian flag palette (red, blue, apricot).
// Brand wordmark is "Citadel-իրավապաշտպան ՀԿ" — "Citadel" always Latin script.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="28"
        height="32"
        viewBox="0 0 28 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <clipPath id="citadel-shield">
            <path d="M14 0.5 L26.5 4 V16.5 C26.5 24 21 29.5 14 31.5 C7 29.5 1.5 24 1.5 16.5 V4 Z" />
          </clipPath>
        </defs>
        <g clipPath="url(#citadel-shield)">
          <rect x="0" y="0"  width="28" height="11"    fill="#D90012" />
          <rect x="0" y="11" width="28" height="10.5"  fill="#0033A0" />
          <rect x="0" y="21" width="28" height="11"    fill="#F2A800" />
        </g>
        <path
          d="M14 0.5 L26.5 4 V16.5 C26.5 24 21 29.5 14 31.5 C7 29.5 1.5 24 1.5 16.5 V4 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          className="text-foreground/90"
        />
      </svg>
      <span className="font-display text-base font-semibold tracking-tight text-foreground sm:text-lg">
        Citadel<span className="text-muted-foreground font-normal">-իրավապաշտպան ՀԿ</span>
      </span>
    </div>
  );
}
