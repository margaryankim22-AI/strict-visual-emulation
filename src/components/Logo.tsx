import logoUrl from "@/assets/citadel-logo.png";

// Official Citadel logo. Brand suffix "-իրավապաշտպան ՀԿ" sits beside the mark.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logoUrl}
        alt="Citadel"
        className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
      />
      <span className="font-display text-sm font-semibold tracking-tight text-foreground sm:text-base">
        <span className="text-muted-foreground font-normal">-իրավապաշտպան ՀԿ</span>
      </span>
    </div>
  );
}
