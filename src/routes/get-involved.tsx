import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";
import { ArrowRight, HandHeart, Handshake, Sprout } from "lucide-react";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Citadel" },
      { name: "description", content: "Volunteer, partner with, or support Citadel — defending rights and advancing justice in Syunik." },
      { property: "og:title", content: "Get Involved — Citadel" },
      { property: "og:description", content: "Stand with Citadel. Together for justice." },
    ],
  }),
  component: GetInvolved,
});

const paths = [
  { Icon: Sprout, t: "involved.volunteer.title", b: "involved.volunteer.body", c: "green", subject: "Volunteer" },
  { Icon: Handshake, t: "involved.partner.title", b: "involved.partner.body", c: "blue", subject: "Partnership" },
  { Icon: HandHeart, t: "involved.support.title", b: "involved.support.body", c: "red", subject: "Support" },
] as const;

function GetInvolved() {
  const t = useT();
  return (
    <>
      <PageHero
        eyebrow={t("brand.tagline")}
        title={t("involved.title")}
        lead={t("involved.lead")}
        accent="red"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {paths.map(({ Icon, t: tk, b, c, subject }) => (
            <div key={tk} className="flex flex-col rounded-2xl border border-border bg-background p-8">
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-background"
                style={{ backgroundColor: `var(--accent-${c})` }}
              >
                <Icon className="size-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold">{t(tk)}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{t(b)}</p>
              <a
                href={`mailto:contact@citadel-ngo.am?subject=${encodeURIComponent(subject)}`}
                className="mt-8 inline-flex items-center justify-between rounded-full border border-foreground px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                {t("involved.cta")}
                <ArrowRight className="size-4" />
              </a>
            </div>
          ))}
        </div>

        <div
          className="mt-16 rounded-3xl p-10 text-center"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklch, var(--accent-red) 12%, transparent), color-mix(in oklch, var(--accent-yellow) 12%, transparent), color-mix(in oklch, var(--accent-blue) 12%, transparent))",
          }}
        >
          <p className="font-display text-3xl font-semibold md:text-4xl">{t("brand.tagline")}</p>
          <a
            href="mailto:contact@citadel-ngo.am"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background"
          >
            contact@citadel-ngo.am
          </a>
        </div>
      </section>
    </>
  );
}
