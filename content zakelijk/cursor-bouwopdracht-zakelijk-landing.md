# Bouwopdracht: zakelijke landingspagina naar /zakelijk

## Doel
De ondernemerspagina, die nu op `/zakelijk-v2` staat, wordt de zakelijke landingspagina op `/zakelijk`. Hij hoort bij de familie van de landingspagina's (Trainen, Coaching): dezelfde opbouw en stijl als nu. De inhoud blijft grotendeels hetzelfde. De teksten zijn deels herschreven en staan nu in een eigen tekstbestand.

Het idee achter de zakelijke kant is een volgorde: eerst de leiding (Leiderschap 1 op 1, Zakelijk traject), dan de mensen (Momentum @ Werk). Daarom blijven er twee ingangen in het menu.

## Voorwaarde
Alle wijzigingen aan de dienstenpagina's moeten eerst gecommit zijn. Staan er nog niet-gecommitte wijzigingen in `components/dienst/`? Stop dan en meld het.

## Lees eerst
- `components/zakelijk/zakelijk-landing.ts`: alle teksten van de landingspagina. Goedgekeurd door Yvonne. **Verander geen tekst.** Zie je een tekstprobleem, meld het. Pas het niet aan.
- `app/zakelijk-v2/page.tsx`: de huidige pagina. Dit is de opbouw die blijft.
- `components/zakelijk/HoeHetBegintSection.tsx`, `components/Nav.tsx`, `next.config.mjs`, `lib/site-seo.ts`, `lib/contact.ts`.
- `components/dienst/LeiderschapPage.tsx` en `TrajectPage.tsx`: voor punt 5 en 6.

## Bouwen

### 1. De pagina verhuist naar /zakelijk
- Zet de pagina van `app/zakelijk-v2/page.tsx` in `app/zakelijk/page.tsx`, in plaats van de oude pagina ("Bedrijven", "STARK! op het wark").
- Haal alle teksten uit `zakelijk-landing.ts`. Er staan geen teksten meer los in de pagina.
- Metadata: `ZAKELIJK_META` via `pageMetadata('zakelijk', …)`, zoals bij Trainen en Coaching. De vaste `robots: { index: false }` gaat eruit. Controleer dat de pagina op productie geïndexeerd mag worden.
- Haal `app/zakelijk-v2/`, `app/zakelijk/ondernemers/` en `app/zakelijk/werkgevers/` weg.

### 2. Doorverwijzingen (`next.config.mjs`, permanent)
- `/zakelijk-v2` → `/zakelijk`
- `/zakelijk/ondernemers` → `/zakelijk`
- `/zakelijk/werkgevers` → `/zakelijk/duurzame-inzetbaarheid`
- Laat de bestaande doorverwijzingen staan.

### 3. Links naar de pagina
- `components/Nav.tsx`: "Ondernemers" gaat naar `/zakelijk`. "Medewerkers" blijft `/zakelijk/duurzame-inzetbaarheid`. De actieve tab "Zakelijk" moet blijven werken op `/zakelijk` en op alle pagina's onder `/zakelijk/`.
- `components/aanbod/aanbod-tracks.ts`: `readMoreHref: '/zakelijk-v2'` wordt `/zakelijk`.
- Zoek ook elders naar `/zakelijk-v2`, `/zakelijk/ondernemers` en `/zakelijk/werkgevers`, en pas die links aan.
- `/zakelijk` staat al in `SITE_PATHS`. Controleer dat de sitemap klopt.

### 4. Inhoud van de pagina (opbouw blijft, teksten uit het tekstbestand)
- **Hero:** `ZAKELIJK_HERO`. Haal de afwijkende `ctaLabel` en `ctaHref` van `Nav` weg, zodat de knop rechtsboven dezelfde is als op de rest van de site.
- **Intro:** `ZAKELIJK_INTRO`. De kop op twee regels, met `titleMark` ("niet") in de accentstijl die er nu al is. Daarna de vier alinea's, de vier genummerde regels (`beats`) en de slotregel met `IntroClose` (`closeLine1`, `closeLine2`).
- **Hoe we werken:** `ZAKELIJK_WERK`. Drie blokjes, elk met `title`, `text` en `mark` (in de bestaande stijl van `workMark`).
- **Ingangen:** titel uit `ZAKELIJK_INGANGEN`, met dezelfde twee tegels als nu (Leiderschap 1 op 1 en Zakelijk traject). **Nieuw:** direct onder de tegels de regel `ZAKELIJK_INGANGEN.volgorde`, met "Momentum @ Werk" als tekstlink. Klein en rustig, gecentreerd onder de tegels.
- **Hoe het begint:** zie punt 5.
- **Quote van Patrick** en **footer**: zoals nu. Neem de footer-teksten uit `ZAKELIJK_FOOTER`.

### 5. Hoe het begint (`HoeHetBegintSection.tsx`)
- Teksten uit `ZAKELIJK_START`: de drie alinea's en daarna `highlight`.
- Twee knoppen naast elkaar, **even groot**:
  - `kennismaking`: de oranje hoofdknop, naar Bookings (`BOOKINGS_URL`, nieuw tabblad).
  - `proef`: een knop met een witte rand, geen vulling, naar `https://proefopdesom.starkhardenberg.nl` (nieuw tabblad).
- Op mobiel onder elkaar, ook even breed.
- De WhatsApp-link voor de Proef op de Som (`hrefProefOpDeSom` in `lib/contact.ts`) wordt dan niet meer gebruikt. Meld het als er nog iets anders naar verwijst. Verwijder hem niet.

### 6. De Proef op de Som op de twee dienstenpagina's (Leiderschap 1 op 1 en Zakelijk traject)
- In het slot ("Het begint met een gesprek") is de Proef nu een tekstlink. Maak er een tweede knop van, precies zoals op de landingspagina: naast de kennismakingsknop, even groot, met een rand in de tekstkleur van de sectie, zodat hij op licht en donker werkt.
- De volgorde in het slot wordt:
  1. de slottekst;
  2. "Na de kennismaking" met de stappen;
  3. de tekst over de Proef op de Som (`*_PROEF.text`), als gewone alinea;
  4. de twee knoppen naast elkaar: kennismaking en `*_PROEF.linkLabel`;
  5. "Kom moar op!".
- Momentum, Impact en Momentum @ Werk hebben geen Proef op de Som. Daar verandert niets.

### 7. Terugknop op de zakelijke dienstenpagina's
- Op Leiderschap 1 op 1, Zakelijk traject en Momentum @ Werk staat linksboven "← Home". Maak daar "← Zakelijk" van, naar `/zakelijk`, met de props `backHref` en `backLabel` van `Nav`.
- Momentum en Impact houden "← Home".

## Wat blijft liggen
Bestanden die na deze ronde nergens meer worden gebruikt, zoals `ZakelijkBridgeSection`, `ZakelijkRoutesSection`, `zakelijk-route-tracks.ts`, `zakelijk-start-steps.ts` en `zakelijk-detail-pages.ts`: meld ze in je samenvatting. Verwijder ze niet.

## Vaste afspraken
- Geen prijzen.
- Geen em-dashes in zichtbare tekst.
- Oranje spaarzaam: één oranje knop per knoppenrij.
- De landingspagina houdt de stijl van de landingspagina's. Neem niet het patroon van de dienstenpagina's over (geen genummerde cirkels, geen dienst-hero).

## Controleren
- `npm run build` zonder fouten.
- Bekijk `/zakelijk` op 390 px en op 1280 px breed. Staan alle teksten uit het tekstbestand erop? Staat de regel naar Momentum @ Werk onder de tegels? Zijn de twee knoppen even groot?
- Open `/zakelijk-v2`, `/zakelijk/ondernemers` en `/zakelijk/werkgevers`: kom je op de goede pagina uit?
- Klik in het menu op Zakelijk › Ondernemers en Zakelijk › Medewerkers.
- Bekijk het slot van `/zakelijk/leiderschap-1-op-1` en `/zakelijk/traject`: twee knoppen naast elkaar, klopt de volgorde?
- Staat "← Zakelijk" op de drie zakelijke dienstenpagina's, en "← Home" op Momentum en Impact?
- Controleer in de paginabron van `/zakelijk`: title, description, en geen noindex op productie.
- Bekijk de homepage: gaat de zakelijke tegel naar `/zakelijk`?

## Git
- Niet committen of pushen.
- Geef aan het eind de lijst met bestanden om toe te voegen, inclusief `components/zakelijk/zakelijk-landing.ts` en deze bouwopdracht (`content zakelijk/cursor-bouwopdracht-zakelijk-landing.md`). Neem ook de verwijderde mappen mee. Nooit `git add -A`. Nooit `tsconfig.tsbuildinfo`.
- Bij een git-commando eerst: `rm -f .git/index.lock`

Lever aan het eind een korte samenvatting per punt: wat je hebt gedaan, en wat je anders hebt gedaan dan hier staat, en waarom.
