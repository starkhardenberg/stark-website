# Bouwopdracht: dienstenpagina Momentum @ Werk

## Doel
Bouw de dienstenpagina Momentum @ Werk op het patroon van Impact. De pagina komt op `/zakelijk/duurzame-inzetbaarheid`. De lezer is HR of directie.

## Lees eerst
- `components/dienst/momentum-at-werk.ts`: alle teksten. Goedgekeurd door Yvonne. **Verander geen tekst.** Zie je een tekstprobleem, meld het. Pas het niet aan.
- `components/dienst/ImpactPage.tsx`, `impact.ts`, `DienstParts.tsx`, `DienstPage.module.css`: het patroon.
- Let op: in `DienstPage.module.css`, `DienstPage.tsx` en `ImpactPage.tsx` staan nog niet-gecommitte wijzigingen. Laat die staan.

## Bouwen
1. Maak `components/dienst/MomentumAtWerkPage.tsx`, opgebouwd zoals `ImpactPage.tsx`.
2. Vervang de stub in `app/zakelijk/duurzame-inzetbaarheid/page.tsx` door deze pagina. Metadata uit `MAW_META`. Houd `robots: { index: false, follow: false }` zolang de rest van de site dat ook heeft.
3. Doorverwijzing: zet in `next.config.mjs` een permanente redirect van `/zakelijk/momentum-at-werk` naar `/zakelijk/duurzame-inzetbaarheid`. Verwijder daarna `app/zakelijk/momentum-at-werk/page.tsx`.
4. Links bijwerken naar `/zakelijk/duurzame-inzetbaarheid`:
   - `components/Nav.tsx` (ZAKELIJK_LINKS: href naar de nieuwe URL, en het label "Werknemers" wordt "Medewerkers");
   - `components/zakelijk/zakelijk-solo-routes.ts` (`readMoreHref` van `momentum-at-werk`).
   Zoek met grep of er nog andere links naar de oude URL staan.

## Opbouw van de pagina

| Deel | Inhoud | Hoe |
|---|---|---|
| Hero | `MAW_HERO` | Zoals Impact. De titel "Momentum @ Werk" is langer dan "Impact". Laat hem netjes afbreken: "Momentum" op regel 1, "@ Werk" op regel 2 waar dat nodig is. Nooit midden in een woord. De foto is 3:2. |
| 01 | `MAW_INTRO` | Zoals Impact 01: scènes met hairlines, prose, vetgedrukte zin, slotregel met oranje accent. |
| 02, donker | `MAW_PARTS`, `MAW_AFSLUITER`, `MAW_KRIJGT`, `MAW_KRIJGT_NOTE` | Zoals Impact 02 "Hoe het werkt". Vier onderdelen in plaats van drie. Subkop "Wat je krijgt". |
| 03 | `MAW_WIE`, `MAW_WIE_CLOSE`, `MAW_ANDERS` | Zoals Impact 03 "Eerlijk is eerlijk". Titel: "Wie er meedoet". Subkop "Soms past iets anders beter". |
| Quote | `MAW_QUOTE` | Zoals het quoteblok van Impact. `role` is leeg: toon dan alleen de naam, zonder " · ". De foto is staand (2:3). |
| 04 | `MAW_TERUG` | Nieuwe sectie, lichte achtergrond. Intro als prose. Subkop `listTitle` met een lijst (oranje blokjes). Daaronder `note` als notitie. Daarna een slotregel met `close` en `closeAccent` in oranje, zoals in 01. |
| 05 | `MAW_OPZET`, `MAW_VERLOOP`, `MAW_VERLOOP_NOTE`, `MAW_DAARNA` | Titel "Praktisch". Drie groepen zoals bij Impact: "Zo ziet het eruit", "Zo verloopt het" (notitie eronder), "Na tien weken". Daarna de knop. |
| 06, donker | `MAW_FAQ` | Titel "Goede vragen". `FaqList` en `FaqJsonLd` zoals bij Impact. |
| 07 | `MAW_SLOT` | Titel "Het begint met een gesprek". Knop, daaronder "Kom moar op!". |

Footer zoals Impact.

## Vaste afspraken
- Koppatroon blijft zoals het nu is: geen streepje, op desktop het nummer in de marge, op mobiel boven de titel. Nummers 01 tot en met 07 in oranje.
- Bronz alleen in de hero, Oswald voor koppen, Barlow voor tekst.
- Hairlines alleen in de intro. Lijsten verder met kleine oranje blokjes.
- Oranje spaarzaam: nummers, knoppen en één accentzin per sectie.
- Geen prijzen.
- De knop is de bestaande `BookButton` (bestaande Bookings-pagina). Niet aanpassen.

## Gedeelde bestanden
`DienstParts.tsx`, `DienstPage.module.css` en `HeroTitle.tsx` worden ook gebruikt door Momentum en Impact. Wijzig ze alleen als het echt nodig is, bijvoorbeeld voor de lange hero-titel of een quote zonder rol. Doe dat zo dat Momentum en Impact er precies hetzelfde uit blijven zien. Noem elke wijziging in je samenvatting.

## Controleren
- `npm run build` zonder fouten.
- Bekijk `/zakelijk/duurzame-inzetbaarheid` op 390 px en op 1280 px breed. Let op de hero-titel.
- Bekijk `/momentum` en `/impact`: zien ze er nog hetzelfde uit?
- Open `/zakelijk/momentum-at-werk`: komt je uit op de nieuwe pagina?

## Git
- Niet committen of pushen. Dat doet Yvonne.
- Geef aan het eind de lijst met bestanden die zij moet toevoegen. Nooit `git add -A`. Nooit `tsconfig.tsbuildinfo`.
- Bij een git-commando eerst: `rm -f .git/index.lock`

Lever aan het eind een korte samenvatting: welke bestanden nieuw zijn, welke gewijzigd, en wat er in de gedeelde bestanden veranderd is.
