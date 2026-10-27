export type OpeningHoursSpecification = {
  dayOfWeek: string
  opens: string
  closes: string
}

/** Tijden dat er iemand aanwezig is. Bron voor de HealthClub JSON-LD. */
export const STARK_OPENING_HOURS: OpeningHoursSpecification[] = [
  { dayOfWeek: 'Monday', opens: '09:00', closes: '11:00' },
  { dayOfWeek: 'Monday', opens: '17:30', closes: '21:30' },
  { dayOfWeek: 'Tuesday', opens: '08:00', closes: '13:30' },
  { dayOfWeek: 'Tuesday', opens: '18:30', closes: '21:30' },
  { dayOfWeek: 'Wednesday', opens: '07:00', closes: '11:00' },
  { dayOfWeek: 'Wednesday', opens: '18:30', closes: '21:30' },
  { dayOfWeek: 'Thursday', opens: '07:00', closes: '10:00' },
  { dayOfWeek: 'Thursday', opens: '18:30', closes: '21:30' },
  { dayOfWeek: 'Friday', opens: '07:00', closes: '13:30' },
  { dayOfWeek: 'Friday', opens: '18:30', closes: '21:30' },
  { dayOfWeek: 'Saturday', opens: '08:30', closes: '12:00' },
  { dayOfWeek: 'Sunday', opens: '10:00', closes: '11:00' },
]

/** Centroïde van Nijverheidsstraat 15c, 7772 TP, via PDOK Locatieserver. */
export const STARK_GEO = {
  latitude: 52.56131045,
  longitude: 6.63255048,
} as const

export const STARK_POSTAL_CODE = '7772 TP'
