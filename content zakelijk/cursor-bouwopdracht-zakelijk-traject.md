# Bouwopdracht: dienstenpagina Zakelijk traject

## Doel
Bouw de dienstenpagina Zakelijk traject op het patroon van Leiderschap 1 op 1. De pagina komt op de bestaande route `/zakelijk/traject` en vervangt de oude pagina. `/zakelijk/jaartraject` stuurt al door naar `/zakelijk/traject` (`next.config.mjs`). Laat die redirect staan.

De lezer is de eigenaar of directeur die het traject koopt en er zelf in meedoet. De naam is "Zakelijk traject". Gebruik nergens "jaartraject" in zichtbare tekst.

## Voorwaarde
Leiderschap 1 op 1 moet eerst gecommit zijn. Deze pagina bouwt daarop voort (`LeiderschapPage.tsx`, `DienstParts.tsx`, `DienstPage.module.css`). Staan er nog niet-gecommitte wijzigingen van Leiderschap? Stop dan en meld het.

## Lees eerst
- `components/dienst/zakelijk-traject.ts`: alle teksten. Goedgekeurd door Yvonne. **Verander geen tekst.** Zie je een tekstprobleem, meld het. Pas het niet aan.
- `components/dienst/LeiderschapPage.tsx`: het voorbeeld. Bouw deze pagina daarop.
- `components/dienst/MomentumAtWerkPage.tsx`, `DienstParts.tsx`, `DienstPage.module.css`, `HeroTitle.tsx`: het patroon.

## Bouwen
1. Maak `components/dienst/TrajectPage.tsx`, opgebouwd zoals `LeiderschapPage.tsx`.
2. Vervang de inhoud van `app/zakelijk/traject/page.tsx` door deze pagina, zoals `app/zakelijk/leiderschap-1-op-1/page.tsx`:
   - metadata uit `TRAJECT_META`;
   - `robots: getSiteRobots()`. De vaste noindex van de oude pagina gaat eruit.
3. `components/zakelijk/zakelijk-detail-pages.ts`: `jaartrajectDetail` wordt dan niet meer gebruikt. Haal alleen die export weg, en alleen als niets anders hem gebruikt. Blijft het bestand of `ServiceDetailPage` daarna ongebruikt achter? Meld dat. Verwijder het niet.
4. De tegel op `/zakelijk-v2`: vervang in `components/zakelijk/zakelijk-solo-routes.ts`, bij `id: 'jaartraject'`, de `eyebrow` en de drie `menu`-teksten door `TRAJECT_TEGEL`. Importeer ze uit het tekstbestand, zoals bij de tegel van Leiderschap 1 op 1. De `id`, de foto en de rest van de tegel blijven zoals ze zijn.
5. Sitemap: `/zakelijk/traject` staat al in `SITE_PATHS` in `lib/site-seo.ts`. Controleer dat hij in de sitemap komt. Verander verder niets.

## Opbouw van de pagina

| Deel | Inhoud | Hoe |
|---|---|---|
| Hero | `TRAJECT_HERO` | Zoals Leiderschap 1 op 1. Foto `foto-traject-hero.jpg` (3:2, al zwart-wit). Past "Zakelijk traject" niet op één regel, dan "Zakelijk" op regel 1 en "traject" op regel 2 (`breakBefore="traject"`). Nooit midden in een woord afbreken. |
| 01 | `TRAJECT_INTRO` | Zoals 01 bij Leiderschap 1 op 1: scènes met hairlines, `sceneOpen`, prose, vetgedrukte zin, slotregel met oranje accent. |
| 02, donker | `TRAJECT_PARTS`, `TRAJECT_AFSLUITER`, `TRAJECT_KRIJGT`, `TRAJECT_KRIJGT_NOTE` | Titel "Hoe het werkt". Zoals 02 bij Leiderschap 1 op 1, nu met vier onderdelen. Subkop "Wat je krijgt". |
| 03 | `TRAJECT_SAMEN` | Titel uit `TRAJECT_SAMEN.title`. Drie items: `strong` vet, `text` erachter, zoals de items in "Wat het van je vraagt" bij Leiderschap 1 op 1. Daaronder `close` met `closeAccent` in oranje. |
| 04 | `TRAJECT_VRAAGT_TITLE`, `TRAJECT_VRAAGT`, `TRAJECT_WELK_TEAM`, `TRAJECT_VRAAGT_CLOSE`, `TRAJECT_ANDERS` | Zoals 03 bij Leiderschap 1 op 1. Na de drie items de subkop `TRAJECT_WELK_TEAM.title` met de tekst als alinea. Dan `TRAJECT_VRAAGT_CLOSE`. Dan de subkop "Soms past iets anders beter" met `TRAJECT_ANDERS`. |
| Quote | `TRAJECT_QUOTE` | Zoals het quoteblok van Leiderschap 1 op 1. Foto `foto-traject-quote.jpg`, staand (2:3), al zwart-wit. `role` is leeg: toon dan alleen de naam, zonder " · ". |
| (voorbeeld) | `TRAJECT_VOORBEELD` | Nu **niet tonen**: `show` is `false`. Bouw hem zoals het voorbeeldblok van Leiderschap 1 op 1, voor als `show` `true` wordt. |
| 05 | `TRAJECT_OPZET`, `TRAJECT_OPZET_NOTE`, `TRAJECT_VERLOOP`, `TRAJECT_VERLOOP_NOTE`, `TRAJECT_DAARNA_TITLE`, `TRAJECT_DAARNA`, `TRAJECT_DAARNA_NOTE` | Titel "Praktisch". Drie groepen: "Zo ziet het eruit" (notitie eronder), "Zo verloopt het" (genummerd, notitie eronder), en `TRAJECT_DAARNA_TITLE` (notitie eronder). Geen trainingstijden. Daarna de knop. |
| 06, donker | `TRAJECT_FAQ` | Titel "Goede vragen". `FaqList` en `FaqJsonLd` zoals bij Leiderschap 1 op 1. Acht vragen. |
| 07 | `TRAJECT_SLOT`, `TRAJECT_PROEF` | Titel "Het begint met een gesprek". Precies zoals 07 bij Leiderschap 1 op 1: tekst, knop, de Proef op de Som als gewone alinea met tekstlink (nieuw tabblad), daaronder "Kom moar op!". |

Er is geen werkgeversblok. Footer zoals Leiderschap 1 op 1.

### Nummering
01 intro, 02 hoe het werkt, 03 waarom je samen traint, 04 wat het van je vraagt, quote (zonder nummer), 05 praktisch, 06 goede vragen, 07 slot. Wordt `TRAJECT_VOORBEELD.show` `true`, dan krijgt het voorbeeld 05 en schuift de rest één op. Reken de nummers uit in de code, zoals `num()` in `LeiderschapPage.tsx`.

## Vaste afspraken
- Koppatroon blijft zoals het nu is: geen streepje, op desktop het nummer in de marge, op mobiel boven de titel. Nummers in oranje.
- Bronz alleen in de hero, Oswald voor koppen, Barlow voor tekst.
- Hairlines alleen in de intro. Lijsten verder met kleine oranje blokjes.
- Oranje spaarzaam: nummers, knoppen en één accentzin per sectie.
- Geen prijzen.
- De knop is de bestaande `BookButton` (bestaande Bookings-pagina). Niet aanpassen.

## Gedeelde bestanden
`DienstParts.tsx`, `DienstPage.module.css` en `HeroTitle.tsx` worden ook gebruikt door Momentum, Impact, Momentum @ Werk en Leiderschap 1 op 1. Wijzig ze alleen als het echt nodig is. Doe dat zo dat die vier pagina's er precies hetzelfde uit blijven zien. Styles die alleen voor deze pagina zijn, mogen in een eigen `TrajectPage.module.css`. Noem elke wijziging aan een gedeeld bestand in je samenvatting.

## Controleren
- `npm run build` zonder fouten.
- Bekijk `/zakelijk/traject` op 390 px en op 1280 px breed. Let op de hero-titel, de vier onderdelen in 02 en de quote zonder rol.
- Open `/zakelijk/jaartraject`: kom je op `/zakelijk/traject` uit?
- Bekijk `/momentum`, `/impact`, `/zakelijk/duurzame-inzetbaarheid` en `/zakelijk/leiderschap-1-op-1`: zien ze er nog hetzelfde uit?
- Bekijk `/zakelijk-v2`: staan de nieuwe tegelteksten bij Zakelijk traject, met eyebrow "Team · Half jaar tot een jaar"?
- Klik de links in "Soms past iets anders beter": `/zakelijk/leiderschap-1-op-1` en `/zakelijk/duurzame-inzetbaarheid`.
- Controleer in de paginabron: title, description, geen noindex op productie, en de FAQ als JSON-LD.

## Git
- Niet committen of pushen. Dat doet Yvonne.
- Geef aan het eind de lijst met bestanden die zij moet toevoegen. Nooit `git add -A`. Nooit `tsconfig.tsbuildinfo`.
- Neem ook deze bestanden mee in de lijst, die staan al klaar: `components/dienst/zakelijk-traject.ts`, `components/dienst/leiderschap-1-op-1.ts` (de FAQ over het zakelijk traject is aangepast naar "een half jaar tot een jaar"), `public/images/foto-traject-hero.jpg`, `public/images/foto-traject-quote.jpg`, `content zakelijk/cursor-bouwopdracht-zakelijk-traject.md`.
- Bij een git-commando eerst: `rm -f .git/index.lock`

Lever aan het eind een korte samenvatting: welke bestanden nieuw zijn, welke gewijzigd, en wat er in de gedeelde bestanden veranderd is.
