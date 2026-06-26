# STARK! website — sessie-handoff (juni 2026)

Gebruik dit document + de prompt onderaan om in een **nieuwe Cursor-chat** verder te werken.

---

## Git & deploy

| Item | Status |
|------|--------|
| **Repo** | `git@github.com:starkhardenberg/stark-website.git` — branch `main` (repo zit IN `stark-site`) |
| **Lokaal** | Veel uncommitted wijzigingen — **niet gepusht** |
| **Netlify** | GitHub-sync; custom domein `stark.roholt.nl` via Cloudflare |
| **Dev** | `npm run dev` → **http://127.0.0.1:3456** (IPv4). Bij corrupte `.next`: `npm run dev:clean` |
| **Pushen** | Alleen op expliciet verzoek |

---

## Design-systeem (kort)

Lees: `../CLAUDE.md`, `../CONTEXT.md`, `../DESIGN-REGELS.md`, `../SCHRIJF-REGELS.md`

- Kleuren: navy `#212431`, off-white `#F5F5F5`, oranje `#EA5C1F`
- Outline-dikte: **2.5px** op hero-outline + tegelcijfers; **1.8px** op sectietitels/footer/404
- Tekst tegels: body `clamp(16px, 1.7vw, 18px)`, eyebrows **14px**
- Tegelfoto's: `grayscale(1) contrast(1.04)` via `.resultMediaImg`
- Optische uitlijning titels: `lib/displayTrim.ts` → `oswaldTrim()`
- Schrijfregels: geen em-dashes, kort/direct Nederlands, geen AI-filler

---

## Contact & Kennismaken (afgerond deze sessie)

| Route | Doel |
|-------|------|
| `/contact` | Vragen stellen — **formulier eerst**, dan gegevens + kaart + eigenaren |
| `/kennismaken` | Kennismaking plannen — WhatsApp + bellen |

**CTA-label overal:** `Plan kennismaking` (was: Kom kennismaken)  
**Paginatitel kennismaken:** blijft warm → `Kom kennismaken` (`KENNISMAKING_TITLE` in `lib/contact.ts`)

**Contact-copy:** eyebrow "Vragen of langskomen", geen kennismaak-verwarring in lead  
**Kennismaken:** alle body-tekst op tegelgrootte; donker expect-blok **binnen kolom** (niet full-bleed); `tel:+31621248107` fix voor bel-knop  
**Kennismaken copy-fix:** "volgt binnenkort" niet afbreken → `volgt&nbsp;binnenkort`

Bestanden: `lib/contact.ts`, `app/contact/`, `app/kennismaken/`

---

## Coaching-pagina (afgerond deze sessie)

- Tegel-chips **weggelaten** (dubbeling met tegels zelf)
- Header: **"Twee trajecten."** groter + outline op "trajecten."
- Extra spacing tussen subkop en tegels
- Tegels: eyebrow + pill-link + pijl naar `/momentum` en `/impact`
- **Momentum-tegel foto:** `foto-coaching-tegel-momentum-gesprek.png` + extra contrast filter
- **Impact-tegel foto:** `foto-coaching-tegel-impact-gesprek.png` (≠ hero Impact)
- **Footer coaching:** `footer-coaching-sessie.png` (nieuwe gespreksfoto), uitsnede `center 32%`
- `/momentum` + `/impact`: Nav terug-link → **← Coaching** (`backHref="/coaching"`)

---

## Trainen-pagina (deze sessie)

- Footer-foto: `footer-trainen.png` (kids-groep), uitsnede `center 14%` / mobiel `12%`
- Nav terug blijft Home

---

## Homepage testimonials (deze sessie)

- **Renske:** dark portrait variant (`darkPortrait: true`) — zwart blok, contain, zoom
- **Amanda:** dark portrait + cover + zoom getest (`imageCover`, `imageScale: 1.3`) — **check of dit blijft**
- Carousel: klik op slide → volgende quote; namen/programma groter
- Hero quote namen: tegelgrootte

---

## Zakelijk / Bedrijven-pagina — STATUS & VOLGENDE STAP

### Beslissing (juni 2026)

**Geen aparte subpagina's** voor de drie zakelijke tegels (voorlopig). Geen doorkliks. Eén landingspagina + gesprek = juiste B2B-route.

### Huidige staat (`app/zakelijk/page.tsx`)

1. Hero
2. **Business-case blok** (introSection light) — €405/dag, bron Arbo Unie 2024, stakes vs payoff, CTA
3. **Drie tegels** (geen links):
   - **Momentum voor teams** (was Fundament preventief)
   - **Impact voor re-integratie** (was Re-integreren)
   - **Fundament voor starke teams** (was Starke teams — bewust "starke")
4. Typisch STARK (featureTiles)
5. FAQ — **NOG VEROUDERD** (noemt nog "Fundament", "preventief programma")
6. Footer

Data: `components/landing/landing-cards.ts` → `zakelijkCards`

### Nog te doen op zakelijk (afgesproken, niet gebouwd)

1. **FAQ updaten** naar nieuwe namen (Momentum voor teams / Impact voor re-integratie / Fundament voor starke teams)
2. **Startproces-blok** toevoegen (3–4 stappen: gesprek → situatie → voorstel → start)
3. **Keuzezin** onder tegelheader: "Niet zeker welk programma past? Plan een gesprek."
4. Geen pill-links/pijltjes op tegels (die suggereren doorklik)

### Fundament-subpagina's

`/fundament-preventief`, `/fundament-reintegratie`, `/fundament-teamtraject` bestaan nog met oude namen/copy. **Niet linken** vanaf zakelijk. Later: hernoemen of archiveren + redirects.

---

## Overige fixes deze sessie

- Scroll jank mobile hero: `100svh`, GPU layers
- Tegel borders: wit op foto-tegels, navy hairline op lichte tegels
- Gray grid lines verwijderd uit featureTiles/optionRow
- FAQ vragen/antwoorden tegelgrootte site-wide
- Trainen FAQ: "Wat kost **een** lidmaatschap"
- Impact tegel coaching: Startpakket-uitleg in "Wat erin zit"
- Footer homepage: "Plan kennismakingsgesprek" tekst weg
- 404: outline op "blessure", uppercase CTA

---

## Belangrijke bestanden

| Onderdeel | Pad |
|-----------|-----|
| Zakelijk pagina | `app/zakelijk/page.tsx` |
| Zakelijk tegels + coaching tegels | `components/landing/landing-cards.ts` |
| Tegel component | `components/landing/LandingServiceCard.tsx` |
| Zakelijk FAQ | `components/faq/faq-zakelijk.ts` |
| Landings-styling | `app/landing.module.css` |
| Nav (backHref) | `components/Nav.tsx` |
| Contact constants | `lib/contact.ts` |
| Testimonials data | `components/testimonials/testimonials-data.ts` |
| Footer foto's | `components/Footer.tsx`, `Footer.module.css` |
| Optical trim | `lib/displayTrim.ts` |

---

## Nog niet gedaan (algemeen)

- Zakelijk: FAQ + startproces + keuzezin (prioriteit)
- Impact-pagina volledig herbouwen (ouder plan in git history)
- Amanda dark portrait: bevestigen of terugdraaien
- Fundament-subpagina's hernoemen/archiveren
- Testimonial-quotes Erwin / Anne / Monique invullen
- Bookings koppelen aan `/kennismaken`
- Git commit + push (niet gedaan)

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
STARK! Hardenberg website — vervolg bouwen (focus: pagina Bedrijven /zakelijk)

Ik werk aan de STARK! Hardenberg website in `stark-site` (Next.js 14, App Router, CSS Modules).

LEES EERST:
- `stark-site/SESSION-HANDOFF.md` (volledige status)
- Parent-map: CLAUDE.md, CONTEXT.md, DESIGN-REGELS.md, SCHRIJF-REGELS.md

Dev: `cd stark-site && npm run dev` → http://127.0.0.1:3456

Design: navy #212431, off-white #F5F5F5, oranje #EA5C1F. Oswald + Work Sans. Geen em-dashes, geen AI-filler. Eén wijziging per stap, mobile-first.

Wat al staat op /zakelijk (niet opnieuw doen tenzij gevraagd):
- Business-case blok onder hero: €405/dag (bron Arbo Unie 2024), stakes vs payoff, CTA
- Drie tegels hernoemd: Momentum voor teams, Impact voor re-integratie, Fundament voor starke teams
- Geen doorkliks naar subpagina's (bewuste keuze: één landingspagina + gesprek)

VOLGENDE STAP — zakelijk pagina afmaken:
1. FAQ updaten (faq-zakelijk.ts) naar nieuwe programmanamen — geen "Fundament" meer als preventief
2. Startproces-blok toevoegen (3–4 stappen na tegels of vóór FAQ): gesprek → situatie in kaart → voorstel → start
3. Keuzezin onder tegelheader: "Niet zeker welk programma past? Plan een gesprek."
4. Geen pill-links op tegels

Regels: Geen git commit/push tenzij ik vraag. Geen aparte subpagina's voor zakelijke tegels.

Begin met: handoff lezen, dev-server checken, bevestigen dat je het snapt. Vraag waar ik wil starten.

Mijn verzoek nu:
[VUL HIER IN]
```
