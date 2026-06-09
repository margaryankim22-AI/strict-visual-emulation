import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { useT } from "@/lib/i18n";

export function Footer() {
  const t = useT();
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {t("brand.tagline")} · {t("footer.address")}
            </p>
            <div className="mt-6 flex gap-1.5">
              {["red", "yellow", "green", "blue", "purple"].map((c) => (
                <span
                  key={c}
                  className="h-1.5 w-8 rounded-full"
                  style={{ backgroundColor: `var(--accent-${c})` }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
              {t("footer.linksTitle")}
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">{t("nav.about")}</Link></li>
              <li><Link to="/programs" className="hover:text-foreground">{t("nav.programs")}</Link></li>
              <li><Link to="/vision" className="hover:text-foreground">{t("nav.vision")}</Link></li>
              <li><Link to="/youth" className="hover:text-foreground">{t("nav.youth")}</Link></li>
              <li><Link to="/transparency" className="hover:text-foreground">{t("nav.transparency")}</Link></li>
              <li><Link to="/get-involved" className="hover:text-foreground">{t("nav.getInvolved")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
              {t("footer.contactTitle")}
            </h4>
            <p className="mt-4 text-sm text-muted-foreground">{t("footer.address")}</p>
            <a
              href={`mailto:${t("footer.email")}`}
              className="mt-2 inline-block text-sm font-medium text-foreground underline decoration-[color:var(--accent-blue)] underline-offset-4"
            >
              {t("footer.email")}
            </a>
            <p className="mt-4 font-mono text-xs text-muted-foreground">{t("footer.regLine")}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <span>{t("footer.rights")}</span>
          <span className="font-medium text-foreground">{t("brand.tagline")}</span>
        </div>
      </div>
    </footer>
  );
}
