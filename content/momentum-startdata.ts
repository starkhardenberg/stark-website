export type MomentumStart = {
  start: string
  groep: number
}

export const MOMENTUM_STARTDATA: readonly MomentumStart[] = [
  { start: '2026-11-13', groep: 3 },
  { start: '2027-01-29', groep: 4 },
  { start: '2027-04-16', groep: 5 },
  { start: '2027-09-03', groep: 6 },
  { start: '2027-11-05', groep: 7 },
  { start: '2028-01-28', groep: 8 },
]

const MONTHS = [
  'januari',
  'februari',
  'maart',
  'april',
  'mei',
  'juni',
  'juli',
  'augustus',
  'september',
  'oktober',
  'november',
  'december',
] as const

/** Kalenderdag in Europe/Amsterdam, als YYYY-MM-DD. */
export function amsterdamTodayIso(now = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Amsterdam',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now)
}

/**
 * Zichtbaar zolang de startdag nog niet is aangebroken.
 * Op de startdag zelf is de datum weg.
 */
export function visibleMomentumStarts(today: string): MomentumStart[] {
  return MOMENTUM_STARTDATA.filter((item) => item.start > today)
}

/** Inclusief de startdag. Voor de waarschuwing vóór de build. */
export function momentumStartsOnOrAfter(today: string): MomentumStart[] {
  return MOMENTUM_STARTDATA.filter((item) => item.start >= today)
}

function utcNoon(iso: string): Date {
  const [year, month, day] = iso.split('-').map(Number)
  return new Date(Date.UTC(year, month - 1, day, 12))
}

function addDays(iso: string, days: number): string {
  const next = utcNoon(iso)
  next.setUTCDate(next.getUTCDate() + days)
  const year = next.getUTCFullYear()
  const month = String(next.getUTCMonth() + 1).padStart(2, '0')
  const day = String(next.getUTCDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

/** De maandag direct na de start. Valt de start op maandag, dan de maandag erna. */
export function firstCoachingIso(start: string): string {
  const weekday = utcNoon(start).getUTCDay()
  const daysUntilMonday = (8 - weekday) % 7 || 7
  return addDays(start, daysUntilMonday)
}

function dateParts(iso: string) {
  const [year, month, day] = iso.split('-').map(Number)
  const weekday = new Intl.DateTimeFormat('nl-NL', {
    timeZone: 'UTC',
    weekday: 'long',
  }).format(utcNoon(iso))
  return { weekday, day, month: MONTHS[month - 1], year }
}

/** "Vrijdag 29 januari 2027" */
export function formatStartLabel(iso: string): string {
  const { weekday, day, month, year } = dateParts(iso)
  const name = weekday.charAt(0).toUpperCase() + weekday.slice(1)
  return `${name} ${day} ${month} ${year}`
}

/** "maandag 1 februari" */
export function formatCoachingLabel(start: string): string {
  const { weekday, day, month } = dateParts(firstCoachingIso(start))
  return `${weekday} ${day} ${month}`
}
