import logoAsset from "@/assets/citadel-icon.png.asset.json";

// Official Citadel mark (icon only). Wordmark "Ցիտադել" sits beside it as plain text.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logoAsset.url}
        alt="Ցիտադել"
        className="h-9 w-auto shrink-0 object-contain sm:h-10"
      />
      <span className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
        Ցիտադել
      </span>
    </div>
  );
}
