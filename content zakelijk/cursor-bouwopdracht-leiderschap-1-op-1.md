# Bouwopdracht: dienstenpagina Leiderschap 1 op 1

## Doel
Bouw de dienstenpagina Leiderschap 1 op 1 op het patroon van Impact en Momentum @ Werk. De pagina komt op de bestaande route `/zakelijk/leiderschap-1-op-1` en vervangt de oude pagina.

Er zijn twee lezers. De hoofdlezer is de deelnemer zelf: eigenaar, directeur, MT-lid of teamleider. Bij iemand in loondienst leest ook de werkgever mee. Voor hem is sectie 05 een afgezet blok dat je kunt kopiëren en mailen.

## Lees eerst
- `components/dienst/leiderschap-1-op-1.ts`: alle teksten. Goedgekeurd door Yvonne. **Verander geen tekst.** Zie je een tekstprobleem, meld het. Pas het niet aan.
- `components/dienst/ImpactPage.tsx`, `components/dienst/MomentumAtWerkPage.tsx`, `DienstParts.tsx`, `DienstPage.module.css`, `HeroTitle.tsx`: het patroon.
- Momentum @ Werk is gecommit en gepusht (d8f333c). Begin vanaf die stand.

## Bouwen
1. Maak `components/dienst/LeiderschapPage.tsx`, opgebouwd zoals `MomentumAtWerkPage.tsx`.
2. Maak `components/dienst/WerkgeverBlok.tsx` voor sectie 05. Dit is een client component (`'use client'`), vanwege de knoppen.
3. Vervang de inhoud van `app/zakelijk/leiderschap-1-op-1/page.tsx` door deze pagina, zoals `app/zakelijk/duurzame-inzetbaarheid/page.tsx`:
   - metadata uit `L1O1_META`;
   - `robots: getSiteRobots()`. De vaste noindex van de oude pagina gaat eruit.
4. `components/zakelijk/zakelijk-detail-pages.ts`: `leiderschapDetail` wordt dan niet meer gebruikt. Haal alleen die export weg, en alleen als niets anders hem gebruikt. `jaartrajectDetail` blijft staan (die gebruikt `/zakelijk/traject`).
5. De tegel op `/zakelijk-v2`: vervang in `components/zakelijk/zakelijk-solo-routes.ts`, bij `id: 'leiderschap-1-op-1'`, de `eyebrow` en de drie `menu`-teksten door `L1O1_TEGEL`. Importeer ze uit het tekstbestand. De foto en de rest van de tegel blijven zoals ze zijn.
6. Sitemap: voeg in `lib/site-seo.ts` aan `SITE_PATHS` toe: `/zakelijk/leiderschap-1-op-1`, `/zakelijk/duurzame-inzetbaarheid` en `/zakelijk/traject`. Die ontbreken nu in `app/sitemap.ts`. Verander verder niets aan de robots-instellingen.

## Opbouw van de pagina

| Deel | Inhoud | Hoe |
|---|---|---|
| Hero | `L1O1_HERO` | Zoals Momentum @ Werk. Foto `foto-leiderschap-hero.jpg` (3:2). De titel is lang: "Leiderschap" op regel 1, "1 op 1" op regel 2. Gebruik `breakBefore="1 op 1"` op `HeroTitle`. "1 op 1" nooit uit elkaar laten vallen. Nooit midden in een woord afbreken. |
| 01 | `L1O1_INTRO` | Zoals 01 bij Impact en Momentum @ Werk: scènes met hairlines, prose, vetgedrukte zin, slotregel met oranje accent. |
| 02, donker | `L1O1_PARTS`, `L1O1_AFSLUITER`, `L1O1_KRIJGT`, `L1O1_KRIJGT_NOTE` | Zoals Impact 02 "Hoe het werkt". Drie onderdelen. Subkop "Wat je krijgt". |
| 03 | `L1O1_VRAAGT_TITLE`, `L1O1_VRAAGT`, `L1O1_VRAAGT_CLOSE`, `L1O1_ANDERS` | Zoals Impact 03 "Eerlijk is eerlijk". Titel uit `L1O1_VRAAGT_TITLE`. Subkop "Soms past iets anders beter". |
| Quote | `L1O1_QUOTE` | Zoals het quoteblok van Momentum @ Werk. Foto staand (2:3). Naam en rol met " · " ertussen. |
| (voorbeeld) | `L1O1_VOORBEELD` | Nu **niet tonen**: `show` is `false`. Bouw hem wel voor als `show` `true` wordt: titel, daaronder `wie` in vet, dan `start`, `gedaan` en `veranderd` als drie korte alinea's. Lichte achtergrond, na de quote. |
| 04 | `L1O1_OPZET`, `L1O1_SCHEDULE`, `L1O1_SCHEDULE_NOTE`, `L1O1_VERLOOP`, `L1O1_VERLOOP_NOTE`, `L1O1_DAARNA_TITLE`, `L1O1_DAARNA`, `L1O1_DAARNA_NOTE` | Titel "Praktisch". Vier groepen: "Zo ziet het eruit", "Trainingstijden" (notitie eronder, zoals Impact), "Zo verloopt het" (notitie eronder), en `L1O1_DAARNA_TITLE` (notitie eronder). Daarna de knop. |
| 05 | `L1O1_WERKGEVER` | Zie hieronder. |
| 06, donker | `L1O1_FAQ` | Titel "Goede vragen". `FaqList` en `FaqJsonLd` zoals bij Momentum @ Werk. |
| 07 | `L1O1_SLOT`, `L1O1_PROEF` | Titel "Het begint met een gesprek". Tekst, knop. Daaronder `L1O1_PROEF.text` als gewone alinea, met `linkLabel` als tekstlink naar `href` (nieuw tabblad). Een tekstlink, geen tweede oranje knop. Daaronder "Kom moar op!". |

Footer zoals Momentum @ Werk.

### Nummering
De nummers lopen door: 01 intro, 02 hoe het werkt, 03 wat het van je vraagt, dan de quote (zonder nummer), 04 praktisch, 05 voor je werkgever, 06 goede vragen, 07 slot. Wordt `L1O1_VOORBEELD.show` `true`, dan krijgt het voorbeeld 04 en schuift de rest één op. Reken de nummers dus uit in de code, niet hard erin.

### Sectie 05: Voor je werkgever
- Titel uit `L1O1_WERKGEVER.title`. Daaronder `intro` als gewone tekst.
- Daarna het blok zelf, visueel afgezet: een kader of vlak dat duidelijk één geheel is. Binnen de huisstijl: geen extra kleuren, oranje alleen voor de knoppen.
- In het blok: `heading`, dan per item het `label` als kleine kop (Oswald) en de `text` (Barlow). Onderaan `footer` met de volledige URL van deze pagina. Gebruik `getSiteUrl()` uit `lib/site-seo.ts` + `/zakelijk/leiderschap-1-op-1`.
- Twee knoppen onder het blok:
  - `copyLabel`: kopieert het blok als platte tekst naar het klembord (`navigator.clipboard.writeText`). Opbouw: heading, lege regel, per item label en tekst, lege regel, footer + URL. Na klikken toont de knop twee seconden `copiedLabel`.
  - `mailLabel`: een `mailto:` zonder ontvanger, met `mailSubject` als onderwerp en dezelfde platte tekst als body (goed ge-encoded).
- Op mobiel staan de knoppen onder elkaar.

## Vaste afspraken
- Koppatroon blijft zoals het nu is: geen streepje, op desktop het nummer in de marge, op mobiel boven de titel. Nummers in oranje.
- Bronz alleen in de hero, Oswald voor koppen, Barlow voor tekst.
- Hairlines alleen in de intro. Lijsten verder met kleine oranje blokjes.
- Oranje spaarzaam: nummers, knoppen en één accentzin per sectie.
- Geen prijzen.
- De knop is de bestaande `BookButton` (bestaande Bookings-pagina). Niet aanpassen.

## Gedeelde bestanden
`DienstParts.tsx`, `DienstPage.module.css` en `HeroTitle.tsx` worden ook gebruikt door Momentum, Impact en Momentum @ Werk. Wijzig ze alleen als het echt nodig is, bijvoorbeeld voor het werkgeversblok of de lange hero-titel. Doe dat zo dat de andere drie pagina's er precies hetzelfde uit blijven zien. Styles die alleen voor deze pagina zijn, mogen in een eigen `LeiderschapPage.module.css`. Noem elke wijziging aan een gedeeld bestand in je samenvatting.

## Controleren
- `npm run build` zonder fouten.
- Bekijk `/zakelijk/leiderschap-1-op-1` op 390 px en op 1280 px breed. Let op de hero-titel en op het werkgeversblok.
- Test de kopieerknop: plak de tekst in een leeg document. Staat alles erin, in de goede volgorde, met de URL?
- Test de mailknop: opent je mailprogramma met onderwerp en tekst?
- Bekijk `/momentum`, `/impact` en `/zakelijk/duurzame-inzetbaarheid`: zien ze er nog hetzelfde uit?
- Bekijk `/zakelijk-v2`: staan de nieuwe tegelteksten bij Leiderschap 1 op 1?
- Klik de links in "Soms past iets anders beter": `/impact` en `/zakelijk/traject`.

## Git
- Niet committen of pushen. Dat doet Yvonne.
- Geef aan het eind de lijst met bestanden die zij moet toevoegen. Nooit `git add -A`. Nooit `tsconfig.tsbuildinfo`.
- Neem ook deze drie mee in de lijst, die staan al klaar: `components/dienst/leiderschap-1-op-1.ts`, `public/images/foto-leiderschap-hero.jpg`, `public/images/foto-leiderschap-quote-julia.jpg`.
- Bij een git-commando eerst: `rm -f .git/index.lock`

Lever aan het eind een korte samenvatting: welke bestanden nieuw zijn, welke gewijzigd, en wat er in de gedeelde bestanden veranderd is.
