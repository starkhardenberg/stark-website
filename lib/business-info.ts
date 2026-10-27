export type OpeningHoursSpecification = {
  dayOfWeek: string
  opens: string
  closes: string
  description: string
}

/** Rooster STARK!, bron voor de HealthClub JSON-LD. */
export const STARK_OPENING_HOURS: OpeningHoursSpecification[] = [
  { dayOfWeek: 'Monday', opens: '09:00', closes: '10:00', description: 'Open uur' },
  { dayOfWeek: 'Monday', opens: '17:30', closes: '18:30', description: 'Dagelijkse workout' },
  { dayOfWeek: 'Monday', opens: '18:30', closes: '19:30', description: 'Dagelijkse workout' },
  { dayOfWeek: 'Monday', opens: '19:30', closes: '20:30', description: 'Dagelijkse workout' },
  { dayOfWeek: 'Monday', opens: '20:30', closes: '21:30', description: 'Dagelijkse workout' },

  { dayOfWeek: 'Tuesday', opens: '08:00', closes: '09:00', description: 'Open uur' },
  { dayOfWeek: 'Tuesday', opens: '09:00', closes: '10:00', description: 'Dagelijkse workout' },
  { dayOfWeek: 'Tuesday', opens: '19:30', closes: '20:30', description: 'Dagelijkse workout' },
  { dayOfWeek: 'Tuesday', opens: '20:30', closes: '21:30', description: 'Dagelijkse workout' },

  { dayOfWeek: 'Wednesday', opens: '07:00', closes: '08:00', description: 'Dagelijkse workout' },
  { dayOfWeek: 'Wednesday', opens: '08:00', closes: '09:00', description: 'Open uur' },
  { dayOfWeek: 'Wednesday', opens: '09:00', closes: '10:00', description: 'Dagelijkse workout' },
  { dayOfWeek: 'Wednesday', opens: '10:00', closes: '11:00', description: 'Structuur uur (basis kracht)' },
  { dayOfWeek: 'Wednesday', opens: '18:30', closes: '19:30', description: 'Dagelijkse workout' },
  { dayOfWeek: 'Wednesday', opens: '19:30', closes: '20:30', description: 'Dagelijkse workout' },
  { dayOfWeek: 'Wednesday', opens: '20:30', closes: '21:30', description: 'Structuur uur' },

  { dayOfWeek: 'Thursday', opens: '07:00', closes: '08:00', description: 'Dagelijkse workout' },
  { dayOfWeek: 'Thursday', opens: '08:00', closes: '09:00', description: 'Open uur' },
  { dayOfWeek: 'Thursday', opens: '09:00', closes: '10:00', description: 'Dagelijkse workout' },
  { dayOfWeek: 'Thursday', opens: '19:30', closes: '20:30', description: 'Dagelijkse workout' },
  { dayOfWeek: 'Thursday', opens: '20:30', closes: '21:30', description: 'Dagelijkse workout' },

  { dayOfWeek: 'Friday', opens: '07:00', closes: '08:00', description: 'Dagelijkse workout' },
  { dayOfWeek: 'Friday', opens: '08:00', closes: '09:00', description: 'Open uur' },
  { dayOfWeek: 'Friday', opens: '09:00', closes: '10:00', description: 'Dagelijkse workout' },
  { dayOfWeek: 'Friday', opens: '10:00', closes: '11:00', description: 'Structuur uur (basiskracht)' },
  { dayOfWeek: 'Friday', opens: '18:30', closes: '19:30', description: 'Dagelijkse workout' },
  { dayOfWeek: 'Friday', opens: '20:30', closes: '21:30', description: 'Structuur uur' },

  { dayOfWeek: 'Saturday', opens: '10:00', closes: '11:00', description: 'Open uur' },
  { dayOfWeek: 'Saturday', opens: '11:00', closes: '12:00', description: 'Dagelijkse workout' },

  { dayOfWeek: 'Sunday', opens: '10:00', closes: '11:00', description: 'Open uur' },
]

/** Centroïde van Nijverheidsstraat 15c, 7772 TP, via PDOK Locatieserver. */
export const STARK_GEO = {
  latitude: 52.56131045,
  longitude: 6.63255048,
} as const

export const STARK_POSTAL_CODE = '7772 TP'
