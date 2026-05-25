# STARK! website — sessie-handoff (mei 2026)

Gebruik dit document + de prompt hieronder om in een **nieuwe Cursor-chat** verder te werken.

---

## Git & deploy

| Item | Status |
|------|--------|
| **Repo** | `git@github.com:starkhardenberg/stark-website.git` — branch `main` |
| **Laatste commit** | `22b91b6` — *Homepage: oranje footer/CTA, witte quotes, Over-link* |
| **Push** | Gepusht naar `origin/main` (mei 2026) |
| **Netlify** | `netlify.toml`: `npm run build`, publish `.next`, `@netlify/plugin-nextjs` |
| **Build lokaal** | `npm run build` slaagt (17 routes) |
| **Netlify live-check** | Handmatig in Netlify-dashboard: deploy na `22b91b6`? |

---

## Homepage — wat in deze sessie is gedaan

### Footer (`components/Footer.tsx` + `Footer.module.css`)

**Gekozen richting: B** — gecentreerde oranje balk (geen witte box, geen aanbod-nav).

Volgorde:
1. **Wees welkom.** (Oswald, navy, ~2.1–3rem)
2. **Plan een kennismaking →** (navy knop op oranje)
3. Contact: 06 · info@ · Nijverheidsstraat 15c, Hardenberg
4. **© {jaar} STARK! Hardenberg · Opgericht 2013**

Styling:
- Achtergrond `var(--orange)`, border-top 2px navy
- Tekst navy / rgba navy; geen links naar Trainen/Coaching/Zakelijk

**Niet gekozen** (wel besproken): strapline-footer (optie 1), STARK+! typografie (optie 2), één-regel-footer (optie 3).

### CTA onder Ons aanbod (`components/AanbodSection.tsx` + `.module.css`)

- Blok `.sectionCta`: **oranje achtergrond**, navy tekst, **navy CTA-knop**
- Layout: tekst + knop **gecentreerd**; op desktop één rij
- Copy ongewijzigd: twijfel-tussen-routes + *Kom kennismaken*

### Resultaten / testimonials (`components/QuoteCard.module.css`)

- Losse kaartjes (`QuoteCard`): **witte achtergrond**, navy quote, oranje aanhalingstekens, slate context
- Grote Amanda-quote + foto (`heroQuote` in `ResultatenSection`) blijft op **navy** — contrast met witte kaartjes

### Over / team-sectie homepage (`components/OverSection.tsx`)

- Link naar `/team`: tekst **Meer over ons →** (was: *Maak kennis met ons team*)

---

## Wat stond al klaar (eerder)

### Landingspagina’s (`/trainen`, `/coaching`, `/zakelijk`)

- Menukaarten, **MEER DAN EEN GYM**, **LandingFooter** (geen oranje CTA-blok boven footer)
- Copy: `components/landing/landing-cards.ts`

### Team (`/team`)

- Hero OVER ONS, teamgrid, Over-ons-blok + duo-foto
- Yvonne quote: *Je begint door te beginnen.*

### Overige

- Homepage aanbod: 3 feature cards → `/trainen`, `/coaching`, `/zakelijk`
- `lib/contact.ts`: `mailtoKennismaking`, `mailtoInfo`
- Dev: `npm run dev` → **http://127.0.0.1:3456** (IPv4, zie `PREVIEW.md`)

---

## Nog niet gedaan / open

- **404-pagina** — blessure-copy + één CTA (`app/not-found.tsx`)
- Subpagina’s momentum, impact, fundament-*: nog oude layout, geen menukaart-patroon
- Netlify: bevestigen dat auto-deploy na GitHub-push werkt

---

## Lokaal draaien

```bash
cd stark-site
npm run dev          # http://127.0.0.1:3456
npm run dev:clean    # bij wit scherm / cache
npm run open:home
npm run open:team
```

**Niet** `localhost` als dat naar IPv6 springt — gebruik **127.0.0.1**.

---

## Design-regels (kort)

Lees: `../CLAUDE.md`, `../CONTEXT.md`, `../DESIGN-REGELS.md`, `../SCHRIJF-REGELS.md`

- Oswald + Work Sans; `--navy`, `--orange`, `--off`, `--slate`
- Oranje secties: navy tekst + navy CTA-knop (footer, aanbod-CTA)
- Geen em-dashes in nieuwe copy; idiomatisch NL

---

## Prompt voor nieuwe chat (kopieer dit)

```
Je werkt verder aan de STARK! Hardenberg-site in `stark-site/` (Next.js 14, CSS Modules).

Lees eerst: `stark-site/SESSION-HANDOFF.md`, `../CLAUDE.md`, `../CONTEXT.md`, `../SCHRIJF-REGELS.md`.

Huidige stand (homepage):
- Footer: oranje balk, Wees welkom + Plan een kennismaking + contact + ©/Opgericht 2013.
- Aanbod-CTA: oranje blok onder de 3 cards, gecentreerd.
- Testimonials: witte QuoteCards onder grote Amanda-quote.
- Over-sectie: link "Meer over ons" → /team.
- Git: main @ 22b91b6 op github.com/starkhardenberg/stark-website.

Dev: npm run dev in stark-site → http://127.0.0.1:3456

Wat wil ik nu als eerste stap? [vul in]
```
