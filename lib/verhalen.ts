import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { parseLegalMarkdown, type LegalBlock } from '@/lib/legal-markdown'
import { isProductionDeploy } from '@/lib/site-seo'

const DIR = join(process.cwd(), 'content', 'verhalen')
const SLUG_FILE = /^[a-z0-9]+(?:-[a-z0-9]+)*\.md$/
const DATE = /^\d{4}-\d{2}-\d{2}$/
const SOORTEN = ['lid', 'coach', 'bedrijf'] as const
const FIELDS = [
  'titel',
  'beschrijving',
  'verteller',
  'bedrijf',
  'plaats',
  'programma',
  'soort',
  'datum',
  'foto',
  'uitspraak',
  'pagina',
  'concept',
] as const

export type VerhaalSoort = (typeof SOORTEN)[number]

export type Verhaal = {
  slug: string
  titel: string
  beschrijving: string
  verteller: string
  bedrijf: string
  plaats: string
  programma: string
  soort: VerhaalSoort
  datum: string
  foto: string
  uitspraak: string
  pagina: string
  concept: boolean
  blocks: LegalBlock[]
}

function fail(file: string, message: string): never {
  throw new Error(`${file}: ${message}`)
}

function isSoort(value: string): value is VerhaalSoort {
  return (SOORTEN as readonly string[]).includes(value)
}

function isRealDate(value: string) {
  const [year, month, day] = value.split('-').map(Number)
  const date = new Date(Date.UTC(year, month - 1, day))
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day
}

function parseFile(file: string, source: string): Verhaal {
  const text = source.replace(/\r\n/g, '\n')
  if (!text.startsWith('---\n')) fail(file, 'het blok bovenaan ontbreekt')
  const end = text.indexOf('\n---\n', 4)
  if (end === -1) fail(file, 'het blok bovenaan is niet afgesloten')

  const data: Record<string, string> = {}
  for (const line of text.slice(4, end).split('\n')) {
    if (line.trim() === '') continue
    const colon = line.indexOf(':')
    if (colon === -1) fail(file, `regel zonder dubbele punt: ${line}`)
    data[line.slice(0, colon).trim()] = line.slice(colon + 1).trim()
  }

  for (const key of FIELDS) {
    if (!(key in data)) fail(file, `veld ontbreekt: ${key}`)
  }

  if (data.beschrijving.length === 0) fail(file, 'beschrijving is leeg')
  if (data.beschrijving.length > 155) {
    fail(file, `beschrijving is ${data.beschrijving.length} tekens, maximaal 155`)
  }
  if (!isSoort(data.soort)) fail(file, 'soort moet lid, coach of bedrijf zijn')
  if (!DATE.test(data.datum) || !isRealDate(data.datum)) fail(file, 'datum moet JJJJ-MM-DD zijn')
  if (!data.foto.startsWith('/images/') || data.foto.includes('..')) {
    fail(file, 'foto moet een pad in /images/ zijn')
  }
  if (!data.pagina.startsWith('/')) fail(file, 'pagina moet met / beginnen')
  if (data.concept !== 'true' && data.concept !== 'false') fail(file, 'concept moet true of false zijn')

  for (const key of ['titel', 'verteller', 'plaats', 'programma', 'uitspraak'] as const) {
    if (data[key].length === 0) fail(file, `${key} is leeg`)
  }

  return {
    slug: file.slice(0, -3),
    titel: data.titel,
    beschrijving: data.beschrijving,
    verteller: data.verteller,
    bedrijf: data.bedrijf,
    plaats: data.plaats,
    programma: data.programma,
    soort: data.soort,
    datum: data.datum,
    foto: data.foto,
    uitspraak: data.uitspraak,
    pagina: data.pagina,
    concept: data.concept === 'true',
    blocks: parseLegalMarkdown(text.slice(end + 5).trim()),
  }
}

export function getVerhalen(): Verhaal[] {
  const files = readdirSync(DIR).filter((file) => file.endsWith('.md'))
  const verhalen = files.map((file) => {
    if (!SLUG_FILE.test(file)) {
      fail(file, 'bestandsnaam moet een slug zijn, bijvoorbeeld overmaat-draagkracht.md')
    }
    return parseFile(file, readFileSync(join(DIR, file), 'utf8'))
  })

  return verhalen.sort((a, b) => b.datum.localeCompare(a.datum) || a.slug.localeCompare(b.slug))
}

/** Zonder concept. Voor de sitemap, ook lokaal. */
export function getGepubliceerdeVerhalen(): Verhaal[] {
  return getVerhalen().filter((verhaal) => !verhaal.concept)
}

/** Concepten alleen buiten de productieversie. */
export function getZichtbareVerhalen(): Verhaal[] {
  const verhalen = getVerhalen()
  if (isProductionDeploy()) return verhalen.filter((verhaal) => !verhaal.concept)
  return verhalen
}

export function getZichtbaarVerhaal(slug: string): Verhaal | undefined {
  return getZichtbareVerhalen().find((verhaal) => verhaal.slug === slug)
}

export function afsluiterKnop(soort: VerhaalSoort): { href: string; label: string } {
  if (soort === 'bedrijf') {
    return {
      href: 'https://proefopdesom.starkhardenberg.nl',
      label: 'Kom naar De Proef op de Som',
    }
  }

  return {
    href: 'https://kennismaken.starkhardenberg.nl',
    label: 'Plan een kennismaking',
  }
}
