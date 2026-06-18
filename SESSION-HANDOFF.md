# STARK! website — sessie-handoff (juni 2026)

Gebruik dit document + de prompt hieronder om in een **nieuwe Cursor-chat** verder te werken.

---

## Git & deploy

| Item | Status |
|------|--------|
| **Repo** | `git@github.com:starkhardenberg/stark-website.git` — branch `main` |
| **Laatste push** | `4aec8f2` — *De Eerste Stap landingspagina, klikbare tegels en mobiele scroll-fix* |
| **Lokaal** | Er staan **ongepushte wijzigingen** (trainen/coaching/zakelijk/tegels, testimonials, aanbod-CTA, team WhatsApp, nav-CTA, etc.) |
| **Netlify** | `netlify.toml`: `npm run build`, publish `.next`, `@netlify/plugin-nextjs` |
| **Dev** | `npm run dev` → **http://127.0.0.1:3456** (IPv4, zie `PREVIEW.md`) |

---

## Design-systeem (kort)

Lees: `../CLAUDE.md`, `../CONTEXT.md`, `../DESIGN-REGELS.md`, `../SCHRIJF-REGELS.md`

- Kleuren: navy `#212431`, off-white `#F5F5F5`, oranje `#EA5C1F`, orange-deep `#C44715`, slate `#4F5D75`
- Fonts: Oswald (display), Work Sans (body), Barlow (quotes)
- Schrijfregels: geen em-dashes, enkele aanhalingstekens, kort/direct Nederlands, geen AI-filler
- Eén visuele wijziging per prompt, mobile-first, asymmetrie boven symmetrie
- Landingspagina's: hybride stijl (B-structuur + C-kleuren), afwisselende off-white/navy blokken waar van toepassing

---

## Wat al staat (niet opnieuw bouwen tenzij gevraagd)

### Homepage (`app/page.tsx` + components)

- **Hero / Nav:** CTA 'Kom kennismaken' uppercase + pijltje, extra padding op mobiel
- **Aanbod:** 3 feature cards → `/trainen`, `/coaching`, `/zakelijk`
- **Aanbod-CTA:** minimalistisch onder de tegels (2 regels + oranje knop, geen witte box):
  - *Niet zeker welke route bij je past?*
  - *Mooi, dan hebben we iets om over te praten.*
- **Testimonials:** carousel met ~17 quotes; mobiele scroll-fix (geen auto-jump naar footer bij laden)
- **Rosanne A / Rosanne K** onderscheiden; **Stephanie** op Momentum voor 'eerder aangedurfd'
- **Footer:** oranje balk, Wees welkom + Plan een kennismaking + contact + ©

### Landingspagina's

| Route | Status |
|-------|--------|
| `/trainen` | Tegels 01/02/03 op foto, sectietitel outline ('We zijn er voor iedereen'), meer ruimte boven tegels, feature tiles 'Meer dan een gym', inline links (WhatsApp + contact) in tegels, footer met WhatsApp |
| `/coaching` | Feature tiles 'Typisch STARK', 01/02/03 op tegels, footer met WhatsApp |
| `/zakelijk` | Tegeltitels FUNDAMENT / RE-INTEGREREN / STARKE TEAMS, 01/02/03, footer met WhatsApp |
| `/de-eerste-stap` | Volledige verkooppagina De Eerste Stap (€57) |
| `/van-punt-a-naar-punt-b` | Permanente redirect → `/de-eerste-stap` |
| `/momentum` | Herbouwde landingspagina (hybride stijl) |
| `/impact` | Nog oude layout |
| `/team` | Footer-CTA met Kom kennismaken + WhatsApp (oranje sectie) |

### Tegels & componenten

- **Volledig klikbare tegels** via stretched link (`LandingServiceCard` + `landing-cards.ts`)
- **Bullets** in tegel-menu (`bullets` array)
- **Inline links** in tegeltekst (`parts` array: WhatsApp, contactformulier, zilverfitness.nl)
- **Nummer-overlay** op foto (`num` prop → 01, 02, 03)
- **LandingFooter** met optionele `whatsapp` prop (dubbele knop: kennismaking + WhatsApp)

### Bronbestanden (parent map)

- `CONTEXT.md` en `content/aanbod.md` bijgewerkt naar **De Eerste Stap** (€57, niet meer Van A naar B €30)

---

## Belangrijke bestanden

| Onderdeel | Pad |
|-----------|-----|
| Tegels/data | `components/landing/landing-cards.ts` |
| Tegel-component | `components/landing/LandingServiceCard.tsx` |
| Landings-styling | `app/landing.module.css` |
| Footer landings | `components/landing/LandingFooter.tsx` |
| Contact/WhatsApp | `lib/contact.ts`, `components/contact/WhatsAppLink.tsx` |
| Aanbod homepage | `components/AanbodSection.tsx`, `components/aanbod/` |
| Testimonials | `components/ResultatenSection.tsx`, `components/RotatingTestimonials.tsx` |
| De Eerste Stap | `app/de-eerste-stap/page.tsx`, `page.module.css` |
| Momentum | `app/momentum/page.tsx`, `momentum.module.css` |

---

## Nog niet gedaan / mogelijke vervolgstappen

- **Impact** landingspagina herbouwen (zelfde hybride aanpak als Momentum/De Eerste Stap)
- **Checkout/betaalflow** voor De Eerste Stap (CTA's gaan nu naar `hrefCoaching`)
- **Fundament-subpagina's** klikbaar maken vanaf zakelijk-tegels (`/fundament-preventief`, etc.)
- **Coaching/zakelijk** sectietitels outline-stijl (zoals trainen) als gewenst
- **404-pagina** finetunen
- **Git push** van huidige lokale wijzigingen + Netlify deploy

---

## Lokaal draaien

```bash
cd stark-site
npm run dev          # http://127.0.0.1:3456
npm run dev:clean    # bij wit scherm / cache
```

Bij stale preview: kill poort 3456, `rm -rf .next`, opnieuw `npm run dev`, hard refresh (Cmd+Shift+R).

**Niet** `localhost` als dat naar IPv6 springt — gebruik **127.0.0.1**.

---

## Prompt voor nieuwe chat (kopieer dit)

```
STARK! Hardenberg website — vervolg bouwen

Ik werk aan de STARK! Hardenberg website in de map `stark-site` (Next.js 14, App Router, CSS Modules).

Lees eerst: `stark-site/SESSION-HANDOFF.md`, `../CLAUDE.md`, `../CONTEXT.md`, `../DESIGN-REGELS.md`, `../SCHRIJF-REGELS.md`.

Dev: `npm run dev` in `stark-site` → http://127.0.0.1:3456 (127.0.0.1, niet localhost). Bij stale preview: kill poort 3456, `rm -rf .next`, opnieuw dev, Cmd+Shift+R.

Design: navy #212431, off-white #F5F5F5, oranje #EA5C1F. Oswald + Work Sans + Barlow. Geen em-dashes, enkele quotes, mobile-first, één visuele wijziging per prompt.

Huidige stand (samenvatting):
- Homepage: minimalistische aanbod-CTA, testimonials-carousel (mobiel gefixt), hero-CTA uppercase
- Landings: trainen/coaching/zakelijk met 01/02/03 op tegels, klikbare tegels, WhatsApp in footer
- `/de-eerste-stap` live (redirect van oude route), `/momentum` herbouwd, `/impact` nog oud
- Team: WhatsApp-knop in footer-CTA
- Git: main @ 4aec8f2 op GitHub; lokale wijzigingen sindsdien nog niet gepusht

Mijn verzoek nu:
[VUL HIER IN]
```
