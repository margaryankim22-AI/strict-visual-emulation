import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center rounded-full border border-border bg-surface p-0.5 text-xs font-semibold"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          "rounded-full px-3 py-1 transition-colors",
          lang === "en" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("hy")}
        aria-pressed={lang === "hy"}
        className={cn(
          "rounded-full px-3 py-1 transition-colors",
          lang === "hy" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
        )}
      >
        ՀԱՅ
      </button>
    </div>
  );
}
