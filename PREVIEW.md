# Lokaal bekijken (trainen / coaching / zakelijk)

## Wat er sinds de footer-aanpassing is veranderd

1. **Logo weg, koptekst erin**  
   Onderaan de **landingspagina’s** (`/trainen`, `/coaching`, `/zakelijk`) staat geen logo meer in de footer, maar de titel **Meer weten of gelijk starten?** (component `components/landing/LandingFooter.tsx`).

2. **Oranje CTA-blok weg**  
   De grote oranje sectie *direct boven* die footer (titel + knop) is van die drie pagina’s gehaald. De actie **Plan een kennismaking** zit nu alleen nog in de footer (oranje knop).

3. **Homepage ongewijzigd**  
   De grote footer op de **homepage** (`/`) is hetzelfde gebleven als eerder (eigen `Footer.tsx`).

4. **Kleine dingen daarna**  
   O.a. `npm run open:trainen` opent nu echt `/trainen` (niet meer alleen `#trainen` op de homepage).

---

## Zelf openen (dit moet één keer draaien)

In een terminal:

```bash
cd stark-site
npm run dev
```

De server luistert nu **alleen op IPv4** `127.0.0.1:3456`. Gebruik daarom **exact** deze URL’s (niet `http://localhost:...` als dat bij jou naar IPv6 springt):

| Pagina    | URL |
|-----------|-----|
| Trainen   | http://127.0.0.1:3456/trainen |
| Coaching  | http://127.0.0.1:3456/coaching |
| Zakelijk  | http://127.0.0.1:3456/zakelijk |
| Team      | http://127.0.0.1:3456/team |

Of met script (tweede terminal, terwijl `dev` draait):

```bash
npm run open:trainen
```

---

## “Hij opent niet goed” — checklist

1. **Staat de server aan?**  
   In de terminal waar `npm run dev` draait, moet je o.a. `Ready` zien. Stop met Ctrl+C en start opnieuw na een update van `scripts/stark-dev.sh`.

2. **Witte pagina of oude layout?**  
   ```bash
   cd stark-site
   npm run dev:clean
   ```  
   Daarna in de browser: **harde refresh** (Cmd+Shift+R).

3. **Gebruik `127.0.0.1`, niet per se `localhost`**  
   Sommige setups lossen `localhost` naar IPv6 (`::1`) terwijl de server op IPv4 draait. Daarom: plak **http://127.0.0.1:3456/trainen**.

4. **Cursor Simple Browser**  
   Command Palette (Cmd+Shift+P) → **Simple Browser: Show** → plak `http://127.0.0.1:3456/trainen`.

5. **`open` uit de chat doet niets**  
   Dat commando opent alleen een browser op **dezelfde Mac** waar Cursor draait. Bij Remote SSH of een andere setup: plak de URL handmatig op je eigen machine.

---

## Als ik in Cursor vraag “open de pagina”

Dan wordt hier `open http://127.0.0.1:3456/trainen` uitgevoerd. Dat werkt alleen als `npm run dev` bij jou draait en Cursor lokaal op je Mac staat.
