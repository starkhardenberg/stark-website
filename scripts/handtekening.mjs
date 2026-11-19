#!/usr/bin/env node
/**
 * Beeld voor de e-mailhandtekeningen.
 * Draai vanuit stark-site: node scripts/handtekening.mjs
 *
 * Bij een nieuwe teamfoto: vervang het bronbestand en pas in PORTRETTEN
 * de getallen aan (pixels in de bronfoto).
 * - kruin: y van de bovenkant van het haar
 * - haarlijn: y waar het voorhoofd begint
 * - ogen: y van de ogen
 * - kin: y van de onderkant van de kin (bij een baard: onderkant van de baard)
 * - midden: x van het midden van het gezicht
 *
 * Het gezicht van haarlijn tot kin wordt de helft van de cirkel.
 * De ogen komen op dezelfde hoogte. Past de uitsnede niet in de foto,
 * dan stopt het script. Er wordt niet opgerekt en er komt geen rand bij.
 */
import { mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(fileURLToPath(new URL('..', import.meta.url)))
const outDir = join(root, 'public/handtekening')

const PORTRET = 176
const GEZICHT_FRACTIE = 0.5
const OGEN_FRACTIE = 0.285

const PORTRETTEN = [
  {
    bron: 'public/images/team/yvonne.png',
    doel: 'yvonne.png',
    kruin: 74,
    haarlijn: 145,
    ogen: 190,
    kin: 400,
    midden: 345,
  },
  {
    bron: 'public/images/team/engbert-jan.png',
    doel: 'engbert-jan.png',
    kruin: 86,
    haarlijn: 120,
    ogen: 205,
    kin: 440,
    midden: 337,
    // Baard maakt het hoofd langer. Vaste zijde: oren even breed als de anderen,
    // ogen op dezelfde hoogte, baard net boven de onderrand.
    zijde: 353,
  },
  {
    bron: 'public/images/team/anne.png',
    doel: 'anne.png',
    kruin: 47,
    haarlijn: 115,
    ogen: 170,
    kin: 370,
    midden: 345,
  },
  {
    bron: 'public/images/team/els.jpg',
    doel: 'els.png',
    kruin: 19,
    haarlijn: 100,
    ogen: 155,
    kin: 360,
    midden: 312,
  },
]

function vierkant(portret, width, height) {
  const zijde = portret.zijde ?? Math.round((portret.kin - portret.haarlijn) / GEZICHT_FRACTIE)
  const top = Math.round(portret.ogen - OGEN_FRACTIE * zijde)
  const left = Math.round(portret.midden - zijde / 2)
  return {
    left,
    top,
    width: zijde,
    height: zijde,
    past: top >= 0 && left >= 0 && top + zijde <= height && left + zijde <= width,
    luchtBovenKruin: portret.kruin - top,
    ruimteOnderKin: top + zijde - portret.kin,
    bronBovenKruin: portret.kruin,
    bronOnderKin: height - portret.kin,
  }
}

function cirkel(size) {
  const r = size / 2
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><circle cx="${r}" cy="${r}" r="${r}" fill="#fff"/></svg>`,
  )
}

const bronnen = await Promise.all(
  PORTRETTEN.map(async (portret) => {
    const meta = await sharp(join(root, portret.bron)).metadata()
    return { portret, meta, box: vierkant(portret, meta.width, meta.height) }
  }),
)

const krap = bronnen.filter((item) => !item.box.past)
if (krap.length > 0) {
  for (const item of krap) {
    const { box, portret } = item
    console.error(
      `${portret.doel}: te weinig ruimte in de bronfoto. ` +
        `Uitsnede zou op (${box.left}, ${box.top}) beginnen en ${box.width} px breed zijn. ` +
        `Boven de kruin zit ${box.bronBovenKruin} px, onder de kin ${box.bronOnderKin} px.`,
    )
  }
  process.exit(1)
}

await mkdir(outDir, { recursive: true })

await sharp(join(root, 'public/images/stark-logo-zwart.svg'), { density: 300 })
  .ensureAlpha()
  .trim({ threshold: 1 })
  .resize({ height: 72 })
  .png({ compressionLevel: 9 })
  .toFile(join(outDir, 'stark-logo.png'))

const masker = cirkel(PORTRET)

for (const { portret, box } of bronnen) {
  const { data, info } = await sharp(join(root, portret.bron))
    .extract({ left: box.left, top: box.top, width: box.width, height: box.height })
    .resize(PORTRET, PORTRET)
    .ensureAlpha()
    .composite([{ input: masker, blend: 'dest-in' }])
    .raw()
    .toBuffer({ resolveWithObject: true })

  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] === 0) {
      data[i] = 0
      data[i + 1] = 0
      data[i + 2] = 0
    }
  }

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png({ palette: false, compressionLevel: 9 })
    .toFile(join(outDir, portret.doel))
}

const tussen = 28
const rand = 28
const bladBreed = rand * 2 + PORTRETTEN.length * PORTRET + (PORTRETTEN.length - 1) * tussen
const bladHoog = rand * 2 + PORTRET
const portraits = await Promise.all(
  PORTRETTEN.map(async (portret, index) => ({
    input: join(outDir, portret.doel),
    left: rand + index * (PORTRET + tussen),
    top: rand,
  })),
)

await sharp({
  create: {
    width: bladBreed,
    height: bladHoog,
    channels: 3,
    background: '#111111',
  },
})
  .composite(portraits)
  .png()
  .toFile(join(root, 'scripts/controle-handtekening.png'))
