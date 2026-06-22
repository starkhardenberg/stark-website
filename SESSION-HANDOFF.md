# STARK! website — sessie-handoff (juni 2026)

Gebruik dit document + de prompt onderaan om in een **nieuwe Cursor-chat** verder te werken.

---

## Git & deploy

| Item | Status |
|------|--------|
| **Repo** | `git@github.com:starkhardenberg/stark-website.git` — branch `main` (repo zit IN `stark-site`, niet in de parent) |
| **Laatste pushes** | `ee3ed22` contactformulier honeypot-fix · `87bd81f` De Eerste Stap hero/route herontwerp + site-polish |
| **Lokaal** | Werktree schoon bij laatste push; nieuwe redesign-stappen nog niet begonnen |
| **Netlify** | GitHub-sync; `netlify.toml`: `npm run build`, publish `.next`, `@netlify/plugin-nextjs`. Custom domein `stark.roholt.nl` draait via **Cloudflare** vóór Netlify |
| **Dev** | `npm run dev` → **http://127.0.0.1:3456** (IPv4, niet localhost) |
| **Pushen** | Alleen op expliciet verzoek |

---

## Design-systeem (kort)

Lees: `../CLAUDE.md`, `../CONTEXT.md`, `../DESIGN-REGELS.md`, `../SCHRIJF-REGELS.md`, `../FONT-PALETTE.md`

- Kleuren: navy `#212431`, off-white `#F5F5F5`, oranje `#EA5C1F`, orange-deep `#C44715`, slate `#4F5D75`
- Fonts: Oswald (display), Work Sans (body), Barlow (quotes)
- Schrijfregels: geen em-dashes, enkele aanhalingstekens, kort/direct Nederlands, geen AI-filler, geen prijzen in lopende tekst
- Werkwijze: één visuele wijziging per stap, mobile-first, asymmetrie boven symmetrie, eerst tonen/reviewen daarna door. Bij grotere keuzes: 2-3 opties pitchen, dan kiezen.
- Landingspagina's: hybride stijl (B-structuur + C-kleuren), afwisselende off-white/navy blokken

---

## De Eerste Stap — VERWIJDERD (juni 2026)

De landingspagina `/de-eerste-stap` en **alle** verwijzingen ernaar zijn uit de site gehaald. Verwijderd of opgeschoond:

- `app/de-eerste-stap/` (`page.tsx` + `page.module.css`) — hele map weg
- coaching-tegel 'De Eerste Stap' uit `components/landing/landing-cards.ts` (Momentum/Impact `inverted`-volgorde rechtgezet)
- pad `/de-eerste-stap` uit `components/Nav.tsx` (coaching-prefixes)
- `/van-punt-a-naar-punt-b` → `/de-eerste-stap` redirect uit `next.config.mjs` (redirects-blok helemaal weg)
- vermeldingen in `components/faq/faq-coaching.ts` herschreven naar enkel Momentum/Impact

Niet opnieuw bouwen tenzij expliciet gevraagd.

---

## Contactformulier (afgerond, evt. nog 1 check)

Werkt nu live:
- Submit gaat naar **`/contact-form.html`** (statisch bestand zodat Netlify Forms het oppikt — NIET naar `/`, dat wordt door Next afgehandeld en gaf 404).
- Honeypot-veld `bot-field` wordt meegestuurd (leeg voor mensen).
- Form-detectie + e-mailnotificatie staan aan in Netlify.

Open check: doe één **echte** inzending (echte naam + e-mail, geen 'test') en bevestig dat 'ie in de gewone lijst komt + mail aankomt. Testverkeer kon door Akismet in de **Spam**-map belanden; daar 'Mark as not spam' om het filter te trainen.

Relevante bestanden: `components/contact/ContactForm.tsx`, `public/contact-form.html`.

---

## Hosting Vimexx (geparkeerd tot redesign af is)

Doel: Vimexx live NAAST Netlify (Netlify als preview/test).

- Vimexx shared hosting kan **geen Node** → statische export nodig: `output: 'export'`, `images.unoptimized: true`, `trailingSlash` via een aparte `build:static`-stap. `out/` via FTP naar `public_html`.
- Formulier op Vimexx via klein **PHP-mailscript** (`public/contact-handler.php`), submit-endpoint per env instelbaar.
- `.htaccess` voor 404 + HTTPS. SSL via DirectAdmin.
- **BLOKKEREND voordat dit kan:** naar welk e-mailadres moeten formulier-aanvragen? (liefst adres op eigen domein.)

---

## Wat al staat (niet opnieuw bouwen tenzij gevraagd)

### Homepage (`app/page.tsx` + components)
- Hero/Nav: CTA 'Kom kennismaken' uppercase + pijltje, extra padding op mobiel
- Aanbod: 3 feature cards → `/trainen`, `/coaching`, `/zakelijk`; minimalistische CTA eronder
- Testimonials: carousel (~17 quotes), mobiele scroll-fix
- Footer: oranje balk, Wees welkom + Plan een kennismaking + contact + ©

### Landingspagina's
| Route | Status |
|-------|--------|
| `/trainen` | Tegels 01/02/03 op foto, sectietitel outline, feature tiles, inline links, footer met WhatsApp |
| `/coaching` | Feature tiles 'Typisch STARK', 01/02/03 op tegels, footer met WhatsApp |
| `/zakelijk` | Tegels FUNDAMENT / RE-INTEGREREN / STARKE TEAMS, 01/02/03, footer met WhatsApp |
| `/momentum` | Herbouwde landingspagina (hybride stijl) |
| `/impact` | Nog oude layout |
| `/team` | Footer-CTA met Kom kennismaken + WhatsApp |

### Tegels & componenten
- Volledig klikbare tegels via stretched link (`LandingServiceCard` + `landing-cards.ts`)
- Bullets + inline links (WhatsApp, contact, zilverfitness.nl) in tegeltekst
- Nummer-overlay op foto (`num` prop)
- `LandingFooter` met optionele `whatsapp` prop

---

## Belangrijke bestanden

| Onderdeel | Pad |
|-----------|-----|
| Momentum (referentie) | `app/momentum/page.tsx`, `momentum.module.css` |
| Landings-styling | `app/landing.module.css` |
| FAQ-component | `components/faq/FaqList.tsx` + `faq-*.ts` |
| Gedeelde footer | `components/Footer.tsx` |
| Tegels/data | `components/landing/landing-cards.ts`, `LandingServiceCard.tsx` |
| Contact | `components/contact/ContactForm.tsx`, `public/contact-form.html`, `lib/contact.ts` |

---

## Nog niet gedaan / vervolgstappen (later)

- **Impact** landingspagina herbouwen (zelfde hybride aanpak als Momentum)
- **Fundament-subpagina's** klikbaar maken vanaf zakelijk-tegels
- **404-pagina** finetunen
- **Vimexx-hosting** opzetten (zie boven)

---

## Lokaal draaien

```bash
cd stark-site
npm run dev          # http://127.0.0.1:3456
```

Bij stale preview: kill poort 3456, `rm -rf .next`, opnieuw `npm run dev`, hard refresh (Cmd+Shift+R). Gebruik **127.0.0.1**, niet localhost.

---

## Prompt voor nieuwe chat (kopieer dit)

```
STARK! Hardenberg website — vervolg bouwen

Ik werk aan de STARK! Hardenberg website in de map `stark-site` (Next.js 14, App Router, CSS Modules).

LEES EERST: `stark-site/SESSION-HANDOFF.md` en in de parent-map CLAUDE.md, CONTEXT.md, DESIGN-REGELS.md, SCHRIJF-REGELS.md, FONT-PALETTE.md.

Dev: `npm run dev` in `stark-site` → http://127.0.0.1:3456 (127.0.0.1, niet localhost). Bij stale preview: hard refresh (Cmd+Shift+R).

Design: navy #212431, off-white #F5F5F5, oranje #EA5C1F, orange-deep #C44715, slate #4F5D75. Oswald (display) + Work Sans (body) + Barlow (quotes). Geen em-dashes, enkele aanhalingstekens, kort/direct Nederlands, geen AI-filler, geen prijzen in lopende tekst. Eén visuele wijziging per stap, mobile-first, asymmetrie boven symmetrie. Eerst tonen/reviewen, dan door. Bij grotere keuzes: 2-3 opties pitchen.

De Eerste Stap is volledig uit de site verwijderd (pagina + alle verwijzingen). Niet opnieuw bouwen tenzij expliciet gevraagd.

Deploy: git-repo zit in `stark-site`, remote starkhardenberg/stark-website, branch main. Deploy = commit + push naar main (Netlify GitHub-sync, Cloudflare ervoor). Alleen pushen als ik daarom vraag.

Open punten: contactformulier werkt (Netlify Forms via /contact-form.html + honeypot) — nog 1 echte inzending checken op spam/mail. Vimexx-hosting (statische export + PHP-formulier) staat geparkeerd; blokkerend: ontvanger-e-mailadres. Later: /impact herbouwen, fundament-subpagina's klikbaar, 404 finetunen.

Begin met: context-files bevestigen, dev-server starten, en wachten op mijn verzoek.

Mijn verzoek nu:
[VUL HIER IN]
```
