/**
 * Edities van de Proef op de Som.
 * Datum is de kalenderdag in Europe/Amsterdam. Start en eind zijn kloktijden op die dag.
 * De sectie wisselt zodra de eindtijd bereikt is.
 */

export type ProefEdition = {
  date: string
  start: string
  end: string
}

export const PROEF_EDITIONS: readonly ProefEdition[] = [
  { date: '2026-11-05', start: '15:00', end: '18:00' },
  { date: '2027-02-04', start: '15:00', end: '18:00' },
  { date: '2027-05-13', start: '15:00', end: '18:00' },
  { date: '2027-09-02', start: '15:00', end: '18:00' },
  { date: '2027-11-04', start: '15:00', end: '18:00' },
  { date: '2028-02-03', start: '15:00', end: '18:00' },
]

const AMSTERDAM = 'Europe/Amsterdam'

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

const MONTHS_SHORT = ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'] as const

export type ProefEditionLabel = {
  shortLabel: string
  year: string
  when: string
  buttonWhen: string
  full: string
}

export type ProefScheduleView = {
  hasEdition: boolean
  shortLabel: string
  year: string
  when: string
  button: string
  /** Datum in de knop, bijvoorbeeld "5 november". Leeg als de lijst op is. */
  buttonWhen: string
  /** "4 februari 2027", of null als er geen editie na de huidige in de lijst staat. */
  nextEdition: string | null
  /** Alle eindtijden zijn voorbij. */
  listExhausted: boolean
}

function wallClockToUtc(date: string, time: string): Date {
  const [year, month, day] = date.split('-').map(Number)
  const [hour, minute] = time.split(':').map(Number)
  const utcGuess = Date.UTC(year, month - 1, day, hour, minute, 0)
  const offset = amsterdamOffsetMs(utcGuess)
  let utc = utcGuess - offset
  const offsetAtResult = amsterdamOffsetMs(utc)
  if (offsetAtResult !== offset) utc = utcGuess - offsetAtResult
  return new Date(utc)
}

function amsterdamOffsetMs(utcMs: number): number {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: AMSTERDAM,
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).formatToParts(new Date(utcMs))
  const pick = (type: Intl.DateTimeFormatPartTypes) => Number(parts.find((part) => part.type === type)?.value)
  let hour = pick('hour')
  if (hour === 24) hour = 0
  const asUtc = Date.UTC(pick('year'), pick('month') - 1, pick('day'), hour, pick('minute'), pick('second'))
  return asUtc - utcMs
}

function clockLabel(time: string) {
  const [hour, minute] = time.split(':')
  return `${hour}.${minute}`
}

function weekdayLabel(date: string) {
  const noon = wallClockToUtc(date, '12:00')
  const name = new Intl.DateTimeFormat('nl-NL', { timeZone: AMSTERDAM, weekday: 'long' }).format(noon)
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export function formatProefEdition(edition: ProefEdition): ProefEditionLabel {
  const [year, month, day] = edition.date.split('-').map(Number)
  const monthName = MONTHS[month - 1]
  const monthShort = MONTHS_SHORT[month - 1]
  return {
    shortLabel: `${day} ${monthShort}`,
    year: String(year),
    when: `${weekdayLabel(edition.date)}, ${clockLabel(edition.start)} tot ${clockLabel(edition.end)} uur`,
    buttonWhen: `${day} ${monthName}`,
    full: `${day} ${monthName} ${year}`,
  }
}

/** Eerste editie waarvan de eindtijd nog niet bereikt is, plus de editie daarna. */
export function proefScheduleAt(now: Date, editions: readonly ProefEdition[] = PROEF_EDITIONS): ProefScheduleView {
  const upcoming = editions.filter((edition) => wallClockToUtc(edition.date, edition.end).getTime() > now.getTime())
  const current = upcoming[0]
  if (!current) {
    return {
      hasEdition: false,
      shortLabel: '',
      year: '',
      when: '',
      button: 'Meld je aan',
      buttonWhen: '',
      nextEdition: null,
      listExhausted: true,
    }
  }
  const label = formatProefEdition(current)
  const following = upcoming[1]
  return {
    hasEdition: true,
    shortLabel: label.shortLabel,
    year: label.year,
    when: label.when,
    button: `Meld je aan voor ${label.buttonWhen}`,
    buttonWhen: label.buttonWhen,
    nextEdition: following ? formatProefEdition(following).full : null,
    listExhausted: false,
  }
}

/** Regel in de voettekst. Null zolang de laatste editie nog loopt en er geen editie na komt. */
export function proefFooterNote(view: ProefScheduleView): string | null {
  if (view.nextEdition) return `Volgende editie: ${view.nextEdition}`
  if (view.listExhausted) return 'Volgende editie wordt gepland.'
  return null
}
