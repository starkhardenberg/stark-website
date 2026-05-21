# STARK! website — sessie-handoff (mei 2026)

Gebruik dit document + de prompt hieronder om in een **nieuwe Cursor-chat** verder te werken.

---

## Wat staat er klaar

### Landingspagina’s (zelfde layout als `/trainen`)
- **`/trainen`** — menukaarten (volwassenen, ZilverFitness, kids), sectie **MEER DAN EEN GYM**, footer **LandingFooter** (geen oranje CTA-blok meer)
- **`/coaching`** — Van A naar B, Momentum, Impact
- **`/zakelijk`** — Fundament preventief, re-integratie, teamtraject

Gedeeld:
- `components/landing/LandingServiceCard.tsx`
- `components/landing/landing-cards.ts` (alle copy per kaart)
- `components/landing/LandingFooter.tsx` + `.module.css`
- `app/landing.module.css`

Homepage aanbod-links: `/coaching`, `/zakelijk`, `/trainen` (`components/aanbod/aanbod-tracks.ts`).

### Team (`/team`)
- Hero: **OVER ONS** (OVER ~20% kleiner via `.heroLeadSmaller`)
- Intro + interactief teamgrid (ongewijzigd patroon)
- Nieuw blok **Over ons**: ontstaansgeschiedenis + foto `public/images/team/engbert-jan-yvonne-samen.png` (`object-position: center 8%`)
- CTA: regel “Gratis en vrijblijvend” verwijderd
- Yvonne quote teamlijst: *Je begint door te beginnen.*

### Overige site (eerder in sessie)
- Homepage: aanbod als 3 feature cards, intro/resultaten/footer-updates
- `PREVIEW.md` — lokaal openen (`127.0.0.1:3456`, `npm run open:*`)
- Dev: `scripts/stark-dev.sh` bindt aan **127.0.0.1** (IPv4), cache uit in dev via `next.config.mjs`

### Nog niet gedaan / bewust open
- **404-pagina** (CLAUDE.md workflow: eerst 1 vraag aan gebruiker)
- Coaching/zakelijk **subpagina’s** (momentum, impact, fundament-*) hebben nog **oude** landing-layout, niet het nieuwe menukaart-patroon
- Geen git in parent map `Workflow Anne Bindels` — repo zit in **`stark-site/`**

---

## Lokaal draaien

```bash
cd stark-site
npm run dev          # http://127.0.0.1:3456
npm run dev:clean    # bij wit scherm / rare cache
npm run open:trainen
npm run open:coaching
npm run open:zakelijk
npm run open:team
```

**Niet** `localhost` gebruiken als dat misgaat — wel **`127.0.0.1`**.

---

## Design-regels (kort)

Lees bij start: `../CONTEXT.md`, `../DESIGN-REGELS.md`, `../SCHRIJF-REGELS.md`, `CLAUDE.md`.

- Geen Inter/Geist/Roboto, geen blauwe gradients, geen shadcn-default
- Oswald + Work Sans, STARK-kleuren (`--navy`, `--orange`, `--off`)
- Copy: geen em-dashes, idiomatisch NL, geen AI-filler

---

## Prompt voor nieuwe chat (kopieer dit)

```
Je werkt verder aan de STARK! Hardenberg-site in `stark-site/` (Next.js 14, CSS Modules, geen Tailwind).

Lees eerst:
- `stark-site/SESSION-HANDOFF.md` (deze sessie)
- `../CLAUDE.md`, `../CONTEXT.md`, `../DESIGN-REGELS.md`, `../SCHRIJF-REGELS.md`

Huidige stand:
- Landingspagina’s trainen/coaching/zakelijk: zelfde structuur (hero → menukaart-tegels → witte “typisch” sectie → LandingFooter). Copy in `components/landing/landing-cards.ts`.
- Team `/team`: hero OVER/ONS, teamgrid, Over-ons-blok met duo-foto en geschiedenis, oranje CTA onderaan team verwijderd.
- Dev op http://127.0.0.1:3456 — `npm run dev` in `stark-site`.

Werk mobile-first. Eén visuele wijziging per keer. Geen generieke AI-slop.

Wat wil ik nu als eerste stap? [vul in]
```

---

## Git

Laatste commit van deze sessie bevat alle wijzigingen hierboven. Push naar `origin` indien gewenst: `git push` vanuit `stark-site/`.
