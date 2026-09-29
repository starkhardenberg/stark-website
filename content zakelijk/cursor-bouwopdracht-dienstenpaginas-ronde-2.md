# Bouwopdracht: dienstenpagina's, ronde 2 (alle vijf)

## Doel
Eén ronde verbeteringen, doorgevoerd op alle vijf dienstenpagina's. Het moet één geheel worden: wat op de ene pagina geldt, geldt op alle.

| Pagina | Route | Component |
|---|---|---|
| Momentum | `/momentum` | `DienstPage.tsx` |
| Impact | `/impact` | `ImpactPage.tsx` |
| Momentum @ Werk | `/zakelijk/duurzame-inzetbaarheid` | `MomentumAtWerkPage.tsx` |
| Leiderschap 1 op 1 | `/zakelijk/leiderschap-1-op-1` | `LeiderschapPage.tsx` |
| Zakelijk traject | `/zakelijk/traject` | `TrajectPage.tsx` |

## Voorwaarde
Het zakelijk traject moet eerst gecommit zijn. Staan `TrajectPage.tsx` of `zakelijk-traject.ts` nog als niet-gecommit in git? Stop dan en meld het.

## Lees eerst
- Alle vijf componenten hierboven, plus `DienstParts.tsx`, `HeroTitle.tsx`, `DienstPage.module.css`, `LeiderschapPage.module.css` en `TrajectPage.module.css`.
- De tekstbestanden `impact.ts`, `momentum-at-werk.ts`, `leiderschap-1-op-1.ts` en `zakelijk-traject.ts`. Yvonne heeft daarin twee dingen aangepast (zie punt 2 en 10). **Verander verder geen tekst.**
- In deze ronde mag je de gedeelde bestanden wel aanpassen. Dat is juist de bedoeling.

## De punten

### 1. Hero-titel (alle vijf, alleen vanaf 800 px)
- Momentum is het voorbeeld. Daar staan de eerste twee letters met alleen een omlijning op de foto, en begint de derde letter precies op de rand van het zwarte vlak. Maak de andere vier precies zo.
- Het blok met de titel en de regel eronder staat verticaal in het midden van het zwarte vlak.
- Bij titels van twee regels (Momentum @ Werk, Leiderschap 1 op 1, Zakelijk traject) staan alleen de eerste twee letters van regel 1 op de foto, met omlijning. Regel 2 begint op de rand van het zwarte vlak, onder de derde letter van regel 1.
- Los het generiek op: meet de breedte van de eerste twee letters (in `HeroTitle.tsx` wordt al gemeten) en schuif de titel precies zoveel naar links. Dan werkt het voor elk woord. Vervang daarmee de losse oplossingen per pagina, zoals `heroStackImpact` en de vaste `translateX(-0.42em)`, maar alleen als het resultaat op Momentum en Impact er hetzelfde uitziet als nu.
- Kies de lettergrootte zo dat de langste regel in het zwarte vlak past, op 1280 px en op breder.
- Onder 800 px blijft de hero zoals hij nu is.

### 2. Laatste scène in de intro (Impact, Momentum @ Werk, Leiderschap, Traject)
- In de tekstbestanden is `sceneOpen` nu leeg. De zin staat als eerste zin in `prose[0]`, net als bij Momentum.
- Toon geen lege laatste scène. Haal het tonen van `sceneOpen` weg uit de componenten. Het lege veld mag daarna ook uit de tekstbestanden.

### 3. Broodtekst groter (alle vijf)
- `.prose`, `.part p` en `.afsluiter`: van `clamp(17px, 1.75vw, 19px)` naar `clamp(19px, 1.95vw, 21px)`, met line-height rond 1.6.
- `.list` en `.group .list`: naar `clamp(18px, 1.85vw, 20px)`.
- `.note`: naar 17 px. `.small`: naar 16 px. `.scenes`: van 22 naar 24 px.
- Houd de regellengte leesbaar, maximaal ongeveer 68 tekens.

### 4. Slotregel: "statement" (alle vijf)
- De slotregel van de intro (`close` + `closeAccent`) krijgt een nieuw ontwerp:
  - erboven een kort, dik oranje balkje van ongeveer 48 × 8 px;
  - Oswald 700, hoofdletters, `clamp(28px, 3.6vw, 44px)`, line-height rond 1.05;
  - `close` op regel 1, `closeAccent` op regel 2 in oranje;
  - ruim wit erboven (ongeveer 48 px).
- Bij Momentum is er alleen een oranje regel ("Dit keer lukt het."). Die krijgt hetzelfde ontwerp, op één regel.
- De andere slotregels in de secties (zoals `VRAAGT_CLOSE`, `TRAJECT_SAMEN.close`, `MAW_TERUG.close` en die bij Momentum en Impact 03) krijgen hetzelfde ontwerp in een kleinere maat: ongeveer `clamp(22px, 2.6vw, 30px)`, met een kleiner balkje.

### 5. Nummers in de cirkels (alle vijf)
- Nu staat elk nummer met dezelfde kleine scheve stand in de cirkel (`.numInk`, `translate(-0.16em, -0.11em)`).
- Nieuw: elk nummer krijgt een eigen, vaste stand. Dat mag duidelijk extremer en speelser: verder uit het midden, soms deels over de rand van de cirkel, en een paar graden gedraaid. Hetzelfde nummer ziet er op elke pagina hetzelfde uit.
- Startwaarden. Bekijk ze en stel bij tot het speels is en elk nummer leesbaar blijft:

| Nummer | Stand |
|---|---|
| 01 | `translate(-0.30em, -0.20em) rotate(-8deg)` |
| 02 | `translate(0.26em, -0.24em) rotate(6deg)` |
| 03 | `translate(-0.22em, 0.24em) rotate(-4deg)` |
| 04 | `translate(0.32em, 0.14em) rotate(9deg)` |
| 05 | `translate(-0.34em, 0.02em) rotate(-10deg)` |
| 06 | `translate(0.10em, -0.32em) rotate(5deg)` |
| 07 | `translate(0.24em, 0.26em) rotate(-6deg)` |
| 08 | `translate(-0.12em, -0.30em) rotate(8deg)` |
| 09 | `translate(0.30em, -0.06em) rotate(-7deg)` |

- Regel het in `Section` (`DienstParts.tsx`) aan de hand van het nummer, bijvoorbeeld met een `data-num`. Momentum en Impact geven hun nummers als vaste tekst mee, dus dat moet ook werken.

### 6. Donker en licht om en om (alle vijf)
- Het ritme is donker, licht, donker, licht. De hero is donker, dus de eerste sectie is licht.
- Tel de kleur uit in de code, zoals `num()` de nummers uittelt. Zet hem nergens vast in.
- Het quoteblok en het (verborgen) voorbeeldblok tellen mee in het ritme. Valt de quote op een lichte beurt, dan krijgt hij een licht vlak (`--off`) met donkere tekst. De foto blijft zoals hij is.
- De FAQ volgt het ritme. Geef `FaqList` de `tone` van zijn sectie mee.
- De footer krijgt altijd de andere kleur dan de laatste sectie (`Footer` kent `tone="light"`).
- Controleer in donkere én lichte secties: lijsten, notities, links, tegels (punt 9) en de FAQ.
- De regel `.light + .light` (lijn tussen twee lichte secties) is dan niet meer nodig.

### 7. Quote (alle vijf)
- De tekst wordt veel groter en nadrukkelijker: ongeveer `clamp(34px, 4.6vw, 60px)`, Oswald 700, line-height rond 1.08, maximaal ongeveer 16 tekens breed.
- Zet een groot oranje openingsaanhalingsteken (“) erboven of ernaast. Dat is het enige accent in dit blok.
- De naam eronder: 16 px, zoals nu in oranje hoofdletters.

### 8. FAQ (alle vijf)
- Haal `initialOpen={0}` weg op alle vijf pagina's. Alle vragen staan dicht tot je klikt. Pas `FaqList.tsx` zelf niet aan, want die wordt ook elders gebruikt.

### 9. Praktisch als tegels (alle vijf)
- Elk blokje in Praktisch wordt een eigen tegel. Op desktop staan de tegels naast elkaar, even hoog, en op mobiel onder elkaar.
- Aantal tegels: Momentum 2 (Tijden, Startdata), Impact 2 (Trainingstijden, Starten), Momentum @ Werk 2 (Zo ziet het eruit, Na tien weken), Leiderschap 3 (Zo ziet het eruit, Trainingstijden, Na de looptijd), Traject 2 (Zo ziet het eruit, Na de looptijd). "Zo verloopt het" gaat naar het slot (punt 10).
- Tegel: ruime binnenruimte (ongeveer 32 px), een vlak dat iets afwijkt van de sectie (licht: wit op `--off`; donker: iets lichter dan zwart) en geen lijn eromheen. Hairlines horen alleen in de intro.
- In de tegel: de kop (Oswald), de lijst met oranje blokjes, en de notitie onder de lijst.
- De knop staat onder de tegels.

### 10. "Zo verloopt het" naar het slot (Momentum @ Werk, Leiderschap, Traject)
- In de tekstbestanden is stap 1 "Kennismaking" uit `MAW_VERLOOP`, `L1O1_VERLOOP` en `TRAJECT_VERLOOP` gehaald. Het slot vertelt die stap al.
- Haal het verloop uit Praktisch weg. Zet het in de sectie "Het begint met een gesprek", in deze volgorde:
  1. de slottekst (`*_SLOT`);
  2. subkop "Na de kennismaking", met de stappen genummerd (oranje cijfers, zoals `.steps` in `TrajectPage.module.css`; zet die stijl in het gedeelde bestand) en de `*_VERLOOP_NOTE` eronder. Op desktop mogen de stappen naast elkaar staan als een route, op mobiel onder elkaar;
  3. de knop;
  4. de Proef op de Som als tekstlink (waar die er is);
  5. "Kom moar op!".
- Momentum en Impact hebben geen verloop. Daar blijft het slot zoals het is, alleen met punt 11.

### 11. Ruimte rond de knop in het slot (alle vijf)
- Duidelijk meer lucht boven en onder de knop in het slot: ongeveer 48 px op mobiel en 64 px op desktop. De knop staat vrij en is niet ingeklemd tussen tekst.
- De knop onder de tegels in Praktisch krijgt ongeveer 40 px ruimte erboven.

## Vaste afspraken (blijven gelden)
- Bronz alleen in de hero, Oswald voor koppen, Barlow voor tekst.
- Hairlines alleen in de intro. Lijsten met kleine oranje blokjes.
- Oranje spaarzaam: nummers, knoppen, balkjes bij de slotregels, het aanhalingsteken en één accentzin per sectie.
- Geen prijzen. De knop blijft de bestaande `BookButton`.
- Nummering en kleur worden uitgeteld, niet vastgezet.

## Controleren
- `npm run build` zonder fouten.
- Bekijk alle vijf pagina's op 390 px en op 1280 px breed. Let op:
  - de hero: staan precies twee omlijnde letters op de foto, en begint de rest op de rand van het zwart?
  - het ritme: wisselen de secties echt om, ook rond de quote, en verschilt de footer van het slot?
  - de nummers: elk nummer anders, allemaal leesbaar?
  - de FAQ: alles dicht bij het laden?
  - Praktisch: tegels even hoog en netjes naast elkaar?
  - het slot: klopt de volgorde, en staat de knop vrij?
- Bekijk ook `/zakelijk-v2` en de homepage: zien die er nog hetzelfde uit?

## Git
- Niet committen of pushen.
- Geef aan het eind de lijst met bestanden om toe te voegen, inclusief de vier tekstbestanden (`impact.ts`, `momentum-at-werk.ts`, `leiderschap-1-op-1.ts`, `zakelijk-traject.ts`) en deze bouwopdracht (`content zakelijk/cursor-bouwopdracht-dienstenpaginas-ronde-2.md`). Nooit `git add -A`. Nooit `tsconfig.tsbuildinfo`.
- Bij een git-commando eerst: `rm -f .git/index.lock`

Lever aan het eind een korte samenvatting per punt: wat je hebt gedaan, en wat je anders hebt gedaan dan hier staat, en waarom.
