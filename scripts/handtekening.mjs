#!/usr/bin/env node
/**
 * Beeld voor de e-mailhandtekeningen.
 * Draai vanuit stark-site: node scripts/handtekening.mjs
 *
 * Bij een nieuwe teamfoto: vervang het bronbestand en pas in PORTRETTEN
 * de drie getallen aan (pixels in de bronfoto).
 * - kruin: y van de bovenkant van het haar
 * - ogen: y van de ogen
 * - midden: x van het midden van het gezicht
 * De formule zet de ogen op dezelfde hoogte en houdt de kruin net in beeld.
 */
import { mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(fileURLToPath(new URL('..', import.meta.url)))
const outDir = join(root, 'public/handtekening')

const PORTRET = 176
const OGEN_FRACTIE = 0.46
const KRUIN_FRACTIE = 0.045

const PORTRETTEN = [
  {
    bron: 'public/images/team/yvonne.png',
    doel: 'yvonne.png',
    kruin: 84,
    ogen: 220,
    midden: 345,
  },
  {
    bron: 'public/images/team/engbert-jan.png',
    doel: 'engbert-jan.png',
    kruin: 88,
    ogen: 178,
    midden: 337,
  },
  {
    bron: 'public/images/team/anne.png',
    doel: 'anne.png',
    kruin: 40,
    ogen: 158,
    midden: 345,
  },
  {
    bron: 'public/images/team/els.jpg',
    doel: 'els.png',
    kruin: 27,
    ogen: 150,
    midden: 312,
  },
]

function vierkant({ width, height, kruin, ogen, midden }) {
  const zijde = Math.round((ogen - kruin) / (OGEN_FRACTIE - KRUIN_FRACTIE))
  let top = Math.round(kruin - KRUIN_FRACTIE * zijde)
  let left = Math.round(midden - zijde / 2)
  if (top < 0) top = 0
  if (left < 0) left = 0
  if (left + zijde > width) left = Math.max(0, width - zijde)
  if (top + zijde > height) top = Math.max(0, height - zijde)
  return { left, top, width: zijde, height: zijde }
}

function cirkel(size) {
  const r = size / 2
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><circle cx="${r}" cy="${r}" r="${r}" fill="#fff"/></svg>`,
  )
}

await mkdir(outDir, { recursive: true })

const logoBron = join(root, 'public/images/stark-logo-zwart.svg')
const logoDoel = join(outDir, 'stark-logo.png')
await sharp(logoBron, { density: 300 })
  .ensureAlpha()
  .trim({ threshold: 1 })
  .resize({ height: 72 })
  .png({ compressionLevel: 9 })
  .toFile(logoDoel)

const masker = cirkel(PORTRET)

for (const portret of PORTRETTEN) {
  const bron = join(root, portret.bron)
  const meta = await sharp(bron).metadata()
  const box = vierkant({
    width: meta.width,
    height: meta.height,
    kruin: portret.kruin,
    ogen: portret.ogen,
    midden: portret.midden,
  })
  if (box.left + box.width > meta.width || box.top + box.height > meta.height) {
    throw new Error(`${portret.doel} valt buiten de bronfoto. Pas kruin, ogen of midden aan.`)
  }
  await sharp(bron)
    .extract(box)
    .resize(PORTRET, PORTRET)
    .ensureAlpha()
    .composite([{ input: masker, blend: 'dest-in' }])
    .png({ compressionLevel: 9, palette: true, quality: 80, effort: 10, colors: 48 })
    .toFile(join(outDir, portret.doel))
}
