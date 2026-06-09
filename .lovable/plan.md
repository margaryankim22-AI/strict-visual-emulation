## Pivot summary

Reframe Citadel from a mining-specific advocacy site to a **broad legal defense & human rights NGO** for all citizens of Syunik. The 2025 Kajaran/ZCMC strike remains the founding catalyst (mentioned in About → Roots & Resilience), not the central theme.

## Brand rules (locked)

- Brand name: always **"Citadel"** in Latin script — never translated, never transliterated as "Ցիտադել" or "Ամրոց".
- Primary headline: **"Defending Rights. Advancing Justice."** / **"Պաշտպանել Իրավունքները։ Առաջ մղել Արդարությունը։"**
- Tagline echo: **"Together for justice"** / **"Միասին՝ հանուն արդարության"**
- No mining/industrial language in hero or nav. Founding story is preserved only in About.

## Design system

Inspired by the colorful "people holding hands" logo (Armenian flag energy + warm human accents).

- Background: clean white (`oklch(1 0 0)`) and soft light-grey surfaces.
- Foreground: deep near-black for body text (no dark navy, no industrial blue).
- Accent palette (used for section highlights, icons, buttons, category chips — one accent per section):
  - Red — `oklch(0.62 0.22 25)` (Armenian flag red)
  - Blue — `oklch(0.55 0.20 250)` (Armenian flag blue)
  - Yellow — `oklch(0.82 0.16 85)` (Armenian flag apricot/yellow)
  - Green — `oklch(0.62 0.18 150)`
  - Purple — `oklch(0.55 0.20 300)`
- Typography: **Fraunces** (display serif, warm + humanist) for headings + **Inter** for body. **Noto Sans Armenian** for HY copy. Loaded via `<link>` in `__root.tsx`.
- Motion: restrained framer-motion fade/slide-up on section entry only.
- Logo mark: simple SVG of stylized figures holding hands using the 5 accent colors; wordmark "Citadel" beside it.

## Information architecture (routes)

```
src/routes/
  __root.tsx               -> shared shell (header/footer, fonts, LanguageProvider)
  index.tsx                -> /            Home
  about.tsx                -> /about       Roots & Resilience (founding story + team)
  programs.tsx             -> /programs    Path of Law (flagship program detail)
  vision.tsx               -> /vision      Strategic Vision 2030 (3-point roadmap)
  youth.tsx                -> /youth       Youth & Rights Ambassadors
  transparency.tsx         -> /transparency  Transparency Hub (reg #, financials)
  get-involved.tsx         -> /get-involved  Volunteer/contact/donate CTAs
```

Each route gets its own bilingual `head()` metadata (title, description, og).

## Bilingual system

- `src/lib/i18n.tsx` exports a `LanguageProvider` + `useT()` hook reading from a flat `{ en, hy }` dictionary in `src/lib/translations.ts`.
- Language defaults to EN; persisted in `localStorage`. Switcher in header toggles EN ↔ ՀԱՅ.
- HTML `lang` attribute updates with selection (set via `<html>` in `RootShell`).
- All copy from the PDF blueprint goes into the dictionary verbatim (English column + Armenian column), with the brand "Citadel" kept in Latin script in both.

## Page-by-page composition

**Home** — hero with the new headline (EN over HY), 4-stat band (citizens supported, legal cases, training seminars, Reg 211.171.1446066), 5 pillar cards (one per accent color) linking to each section, featured Path of Law block, founder/origin teaser linking to About.

**About** — origin narrative (2025 Kajaran strike framed as catalyst, not identity), founder profile (Shavarsh Margaryan), board/team grid, mission/values.

**Programs** — Path of Law detail: legal hotline, individual aid, 10 seminars, Caravan media series, 14M AMD budget infographic (simple bar breakdown), 2026 Labor Law amendment readiness.

**Vision** — 3-point 2030 roadmap (Digital Rights, Advocacy & Policy Reform, Syunik Model Expansion) as a vertical timeline.

**Youth** — Rights Ambassadors program explainer, ESC alignment note, prominent "Become a Rights Ambassador" CTA → `/get-involved`.

**Transparency** — Registration card (`Reg 211.171.1446066`), financial summary table, downloadable-report placeholder list, "Together for justice" trust badge.

**Get Involved** — three paths: Volunteer, Partner, Support — each with a contact CTA (mailto for now since no backend chosen).

## Imagery

Per user direction, keep `<img>` placeholders with thematic prompts about **solidarity, community meetings, and legal aid clinics** — no mining/industrial faces. Stored as commented prompt + neutral light-grey placeholder div until photos arrive.

## Technical / build details

- Tailwind v4 tokens in `src/styles.css`: redefine `--background`, `--foreground`, `--primary`, plus new `--accent-red/blue/yellow/green/purple` and `--font-display`, `--font-sans`, `--font-hy` via `@theme inline`.
- New components in `src/components/`: `Header.tsx`, `Footer.tsx`, `LanguageSwitcher.tsx`, `Logo.tsx`, `SectionHeading.tsx`, `StatCard.tsx`, `PillarCard.tsx`.
- New lib files: `src/lib/i18n.tsx`, `src/lib/translations.ts`.
- Update `__root.tsx`: add font `<link>` tags, wrap `RootComponent` in `LanguageProvider`, render shared `<Header />` and `<Footer />` around `<Outlet />`.
- Update default meta in `__root.tsx` to Citadel branding.
- No backend, no Lovable Cloud (user picked static multi-page; forms use `mailto:`).
- `framer-motion` install for entry animations.

## Out of scope (this iteration)

- Rights Ambassador signup form persistence (would need Lovable Cloud — flagged for a later turn).
- Real donor portal / payment flow.
- CMS for editable content.
- Mobile-app-style nav (we'll use a clean responsive hamburger).
