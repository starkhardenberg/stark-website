import type { CSSProperties } from 'react'

/**
 * Optische links-uitlijning voor display-koppen (Oswald).
 *
 * Een glyph heeft een "left side bearing": witruimte links binnen het tekenvak.
 * Die ruimte schaalt mee met de fontgrootte, dus bij grote koppen staat de
 * zichtbare letter een paar pixels naar binnen t.o.v. het label/de content erboven.
 * Door per beginletter exact die bearing als negatieve margin terug te trekken,
 * valt de zichtbare linkerrand van de letter precies op de contentlijn.
 *
 * Waarden zijn gemeten uit het Oswald-fontbestand (units / unitsPerEm = em).
 */
const OSWALD_LSB_EM: Record<string, number> = {
  A: 0.021, B: 0.06, C: 0.049, D: 0.06, E: 0.06, F: 0.06, G: 0.049,
  H: 0.063, I: 0.061, J: 0.013, K: 0.06, L: 0.06, M: 0.057, N: 0.06,
  O: 0.049, P: 0.06, Q: 0.049, R: 0.06, S: 0.042, T: 0.011, U: 0.054,
  V: 0.022, W: 0.027, X: 0.007, Y: 0.008, Z: 0.029,
}

function firstLetter(text: string): string {
  const match = text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .match(/[A-Z]/)
  return match ? match[0] : ''
}

/**
 * Geeft een inline-style met negatieve margin-left zodat de eerste letter van
 * een Oswald-kop optisch strak op de contentlijn valt. Geef de zichtbare
 * (begin)tekst van de kop mee.
 */
export function oswaldTrim(text: string): CSSProperties | undefined {
  const lsb = OSWALD_LSB_EM[firstLetter(text)]
  return lsb ? { marginLeft: `-${lsb}em` } : undefined
}
