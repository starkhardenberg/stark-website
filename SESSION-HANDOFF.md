# STARK! website — sessie-handoff (juni 2026)

Gebruik dit document + de prompt onderaan om in een **nieuwe Cursor-chat** verder te werken.

---

## Git & deploy

| Item | Status |
|------|--------|
| **Repo** | `git@github.com:starkhardenberg/stark-website.git` — branch `main` (repo zit IN `stark-site`) |
| **Laatste commit** | `c73212b` — Nav, Bedrijven-naamgeving, mobiele CTA's |
| **Vorige commit** | `08ac4d6` — team-hover, mobiele CTA's, UI-polish |
| **Netlify** | GitHub-sync; live op **https://stark.roholt.nl** |
| **Dev** | `npm run dev` → **http://127.0.0.1:3456**. Bij corrupte `.next`: `npm run dev:clean` |
| **Pushen** | Alleen op expliciet verzoek |

---

## Design-systeem (kort)

Lees: `../CLAUDE.md`, `../CONTEXT.md`, `../DESIGN-REGELS.md`, `../SCHRIJF-REGELS.md`

- Kleuren: navy `#212431`, off-white `#F5F5F5`, oranje `#EA5C1F`
- Outline-dikte: **`--outline-stroke-hero: 2.5px`** (hero + tegelcijfers); **`--outline-stroke-display: 1.45px`** (sectietitels, footer, 404)
- Mobiele CTA's: globale classes in `app/globals.css` → `.starkCta`, `.starkCtaRow`, `.starkCtaNav` + `lib/stark-cta.ts`
- Pijlen: SVG via `components/icons/StarkArrow.tsx` (geen emoji-pijlen op iOS)
- Schrijfregels: geen em-dashes, kort/direct Nederlands, geen AI-filler

---

## Afgerond — recente sessies

### Mobiele navigatie (`components/Nav.tsx`, `Nav.module.css`)

- Dubbele Home-knop opgelost: header-Home verborgen als menu open; één teruglink in menu (`mobileNavBack`)
- Menu-CTA structureel gescheiden: `mobileMenuLinks` + `mobileMenuFoot` (geen CSS-conflict meer met nav-links)
- Menu-CTA typografie gelijkgetrokken met site-CTA's: `font-body`, 700, uppercase + `starkCta`

### Mobiele CTA's site-breed

- `globals.css`: ruimere padding, breakpoint tot 899px, nav-CTA zonder smalle max-width
- Coaching/bedrijven intro-CTA's: row-layout pas vanaf 900px (niet meer 720px); WhatsApp sentence case op mobiel

### Naamgeving Bedrijven (optie A)

Publiek **Bedrijven**, intern/URL blijft **`/zakelijk`**:

| Plek | Label |
|------|--------|
| Menu | Bedrijven |
| Hero `/zakelijk` | BEDRIJVEN BIJ STARK |
| Paginatitel | Bedrijven — STARK! Hardenberg |
| Homepage-aanbodkaart | Bedrijven / Bedrijven bij STARK |
| Contactformulier | Bedrijven / Fundament |
| Tegel-label | Via werkgever (was: Waarom zakelijk anders is) |

Bestanden: `app/zakelijk/page.tsx`, `components/aanbod/aanbod-tracks.ts`, `lib/contact.ts`, `public/contact-form.html`

### Trainen-pagina

- Gradient/schaduw onder tegelcijfers verwijderd (`.resultGridLight .mediaIndex` → `filter: none`)

### Team-pagina

- Hover foto ↔ quote hersteld via client component `app/team/TeamInteractiveGrid.tsx` + `team-members.ts`

### Homepage #over

- CTA "Alle 11 gezichten en ons ontstaan →" onder E&Y-quotes (oranje border)

### Contact & Kennismaken

| Route | Doel |
|-------|------|
| `/contact` | Formulier + gegevens + kaart |
| `/kennismaken` | Kennismaking plannen |

**CTA-label overal:** `Plan kennismaking` (`lib/contact.ts`)

---

## Zakelijk / Bedrijven-pagina — huidige staat

`app/zakelijk/page.tsx` — **veel al gebouwd sinds oude handoff:**

1. Hero — BEDRIJVEN BIJ STARK
2. Business-case blok (€405/dag, Arbo Unie 2024)
3. Drie tegels via `AanbodFeatureCard` + `zakelijk-tracks.ts` (Momentum voor teams, Impact voor re-integratie, Fundament voor starke teams)
4. Catalogus-CTA: "Niet zeker welk programma past? Plan een gesprek."
5. Startproces-blok (4 stappen) — `zakelijk-start-steps.ts`
6. FAQ — `faq-zakelijk.ts` (check of nog verouderde Fundament-termen in staan)
7. Footer kettlebells crop

**Geen doorkliks** naar `/fundament-*` subpagina's (bewuste keuze).

Fundament-subpagina's bestaan nog met oude copy — niet linken; later archiveren + redirects.

---

## Video — besproken, nog niet gebouwd

### Advies (juni 2026)

| Video | Duur | Aanpak | Max MB |
|-------|------|--------|--------|
| Hero-clip | ~20s | Native `<video>` + Cloudinary, muted loop autoplay | **≤ 3 MB** (streef ~2 MB) |
| Bedrijfsfilm | 1:12 | Click-to-play, lazy load, poster + play-knop | **≤ 15 MB** (streef 8–12 MB) |

- **Niet** YouTube/Vimeo embed voor hero (traag, minder premium)
- **Vimeo optioneel** alleen voor bedrijfsfilm als gemak > snelheid
- Homepage hero gebruikt al Cloudinary: `components/HeroSection.tsx`
- Wacht op: Cloudinary-URL's + poster-images vóór bouw

**Plaatsing bedrijfsfilm:** nog niet gekozen (homepage bij `#over` vs `/team`).

---

## Nog open / backlog

- [ ] Video: hero-clip + bedrijfsfilm embedden (Cloudinary-URL's nodig)
- [ ] Menu Training → Trainen (consistentie met pagina's; niet gedaan)
- [ ] Zakelijk FAQ controleren op verouderde Fundament-copy
- [ ] `landing-cards.ts`: contactformulier-links vs kennismaking-copy mismatch (bekend)
- [ ] Fundament-subpagina's hernoemen/archiveren
- [ ] Bookings koppelen aan `/kennismaken`
- [ ] Testimonial-quotes invullen waar nog placeholder

---

## Belangrijke bestanden

| Onderdeel | Pad |
|-----------|-----|
| Bedrijven-pagina | `app/zakelijk/page.tsx` |
| Zakelijke tegels | `components/aanbod/zakelijk-tracks.ts` |
| Homepage aanbod | `components/aanbod/aanbod-tracks.ts` |
| Mobiele nav | `components/Nav.tsx`, `Nav.module.css` |
| Mobiele CTA globals | `app/globals.css`, `lib/stark-cta.ts` |
| Hero video | `components/HeroSection.tsx` |
| Contact constants | `lib/contact.ts` |
| Landings-styling | `app/landing.module.css` |
| Team hover | `app/team/TeamInteractiveGrid.tsx` |

---

## Lokaal draaien

```bash
cd stark-site
npm run dev          # http://127.0.0.1:3456
npm run dev:clean    # bij corrupte .next
```

Hard refresh: Cmd+Shift+R. Gebruik **127.0.0.1**, niet localhost.

---

## Prompt voor nieuwe chat (kopieer dit)

```
STARK! Hardenberg website — vervolg

Ik werk aan de STARK! Hardenberg website in `stark-site` (Next.js 14, App Router, CSS Modules).

LEES EERST:
- `stark-site/SESSION-HANDOFF.md`
- Parent-map: CLAUDE.md, CONTEXT.md, DESIGN-REGELS.md, SCHRIJF-REGELS.md

Dev: `cd stark-site && npm run dev` → http://127.0.0.1:3456

Git: main is up-to-date op GitHub (Netlify sync). Laatste deploy-commit: c73212b.
Live: https://stark.roholt.nl
Geen git commit/push tenzij ik vraag.

Design: navy #212431, off-white #F5F5F5, oranje #EA5C1F. Geen em-dashes, geen AI-filler. Mobile-first. Eén wijziging per stap.

RECENT AF (niet opnieuw doen tenzij gevraagd):
- Mobiel menu: dubbele Home weg, CTA in mobileMenuFoot, typografie via starkCta
- Publieke naam Bedrijven (menu + hero + homepage + contact); URL blijft /zakelijk
- Mobiele CTA-padding site-breed; coaching/bedrijven intro-CTA's gestapeld tot 900px
- Trainen tegelcijfers zonder schaduw; team hover; homepage over-CTA

MOGELIJKE VOLGENDE STAPPEN (kies of vraag mij):
1. Video embedden: hero ~20s + bedrijfsfilm 1:12 via Cloudinary (URL's + posters nodig)
2. Zakelijk FAQ check + resterende copy-polish
3. Menu "Training" → "Trainen"
4. Fundament-subpagina's archiveren/redirects
5. Anders — zie backlog in SESSION-HANDOFF.md

Begin met: handoff lezen, bevestigen dat je het snapt. Vraag wat ik nu wil.

Mijn verzoek nu:
[VUL HIER IN]
```
