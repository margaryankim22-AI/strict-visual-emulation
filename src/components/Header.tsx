import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/about", key: "nav.about" },
  { to: "/programs", key: "nav.programs" },
  { to: "/vision", key: "nav.vision" },
  { to: "/youth", key: "nav.youth" },
  { to: "/volunteering", key: "nav.transparency" },
] as const;

export function Header() {
  const t = useT();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" aria-label="Citadel home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {t(item.key as never)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            to="/get-involved"
            className="hidden rounded-full bg-foreground px-4 py-2 text-xs font-semibold uppercase tracking-wider text-background transition-colors hover:bg-[color:var(--accent-blue)] sm:inline-flex"
          >
            {t("nav.getInvolved")}
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background lg:hidden",
          open ? "max-h-96" : "max-h-0",
          "transition-[max-height] duration-300",
        )}
      >
        <nav className="flex flex-col px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium text-foreground"
            >
              {t(item.key as never)}
            </Link>
          ))}
          <Link
            to="/get-involved"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-foreground px-4 py-3 text-center text-sm font-semibold text-background"
          >
            {t("nav.getInvolved")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
