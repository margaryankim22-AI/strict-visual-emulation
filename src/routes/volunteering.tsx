import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/volunteering")({
  head: () => ({
    meta: [
      { title: "Volunteering — Citadel" },
      {
        name: "description",
        content:
          "Volunteering opportunities and open applications at Citadel will be published here soon.",
      },
      { property: "og:title", content: "Volunteering — Citadel" },
      {
        property: "og:description",
        content: "Join Citadel as a volunteer in Syunik.",
      },
    ],
  }),
  component: Volunteering,
});

function Volunteering() {
  const t = useT();
  return (
    <PageHero
      eyebrow={t("transparency.eyebrow")}
      title={t("transparency.title")}
      lead={t("transparency.lead")}
      accent="green"
    />
  );
}
