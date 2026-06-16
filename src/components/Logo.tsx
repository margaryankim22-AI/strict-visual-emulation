import logoAsset from "@/assets/citadel-icon.png.asset.json";
import { useT } from "@/lib/i18n";

// Official Citadel mark (icon only). Wordmark sits beside it and switches with language.
export function Logo({ className = "" }: { className?: string }) {
  const t = useT();
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logoAsset.url}
        alt={t("brand.wordmark")}
        className="h-9 w-auto shrink-0 object-contain sm:h-10"
      />
      <span className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
        {t("brand.wordmark")}
      </span>
    </div>
  );
}

