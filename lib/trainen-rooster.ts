export type RoosterSlot = {
  time: string
  label: string
}

export type RoosterDay = {
  day: string
  slots: RoosterSlot[]
}

export type RoosterGroup = {
  id: string
  title: string
  lead?: string
  days: RoosterDay[]
}

/** Weekrooster — bij wijziging in de app hier bijwerken. */
export const TRAINEN_ROOSTER_GROUPS: RoosterGroup[] = [
  {
    id: 'volwassenen',
    title: 'Volwassenen',
    lead:
      'Dagelijkse workout, structuuruur, open uur en Impact (coachingtraject). Max. 12 per les, 60 minuten.',
    days: [
      {
        day: 'Maandag',
        slots: [
          { time: '09.00–10.00', label: 'Open uur' },
          { time: '17.30–18.30', label: 'Dagelijkse workout' },
          { time: '18.30–19.30', label: 'Dagelijkse workout' },
          { time: '19.30–20.30', label: 'Dagelijkse workout' },
          { time: '19.30–20.30', label: 'Impact' },
          { time: '20.30–21.30', label: 'Dagelijkse workout' },
        ],
      },
      {
        day: 'Dinsdag',
        slots: [
          { time: '08.00–09.00', label: 'Open uur' },
          { time: '09.00–10.00', label: 'Dagelijkse workout' },
          { time: '10.00–11.00', label: 'Impact' },
          { time: '19.30–20.30', label: 'Dagelijkse workout' },
          { time: '20.30–21.30', label: 'Dagelijkse workout' },
        ],
      },
      {
        day: 'Woensdag',
        slots: [
          { time: '07.00–08.00', label: 'Dagelijkse workout' },
          { time: '08.00–09.00', label: 'Open uur' },
          { time: '09.00–10.00', label: 'Dagelijkse workout' },
          { time: '10.00–11.00', label: 'Structuuruur (basiskracht)' },
          { time: '18.30–19.30', label: 'Dagelijkse workout' },
          { time: '19.30–20.30', label: 'Dagelijkse workout' },
          { time: '20.30–21.30', label: 'Structuuruur' },
        ],
      },
      {
        day: 'Donderdag',
        slots: [
          { time: '07.00–08.00', label: 'Dagelijkse workout' },
          { time: '08.00–09.00', label: 'Open uur' },
          { time: '09.00–10.00', label: 'Dagelijkse workout' },
          { time: '19.30–20.30', label: 'Dagelijkse workout' },
          { time: '19.30–20.30', label: 'Impact' },
          { time: '20.30–21.30', label: 'Dagelijkse workout' },
        ],
      },
      {
        day: 'Vrijdag',
        slots: [
          { time: '07.00–08.00', label: 'Dagelijkse workout' },
          { time: '08.00–09.00', label: 'Open uur' },
          { time: '09.00–10.00', label: 'Dagelijkse workout' },
          { time: '09.00–10.00', label: 'Impact' },
          { time: '10.00–11.00', label: 'Structuuruur (basiskracht)' },
          { time: '18.30–19.30', label: 'Dagelijkse workout' },
          { time: '20.30–21.30', label: 'Structuuruur' },
        ],
      },
      {
        day: 'Zaterdag',
        slots: [
          { time: '10.00–11.00', label: 'Open uur' },
          { time: '11.00–12.00', label: 'Dagelijkse workout' },
        ],
      },
      {
        day: 'Zondag',
        slots: [{ time: '10.00–11.00', label: 'Open uur' }],
      },
    ],
  },
  {
    id: 'zilverfitness',
    title: 'ZilverFitness',
    lead: 'Max. 12 per les, 60 minuten.',
    days: [
      {
        day: 'Maandag',
        slots: [
          { time: '09.00–10.00', label: 'ZilverFitness' },
          { time: '10.00–11.00', label: 'ZilverFitness' },
        ],
      },
      {
        day: 'Dinsdag',
        slots: [
          { time: '10.00–11.00', label: 'ZilverFitness' },
          { time: '11.00–12.00', label: 'ZilverFitness' },
          { time: '12.30–13.30', label: 'ZilverFitness' },
        ],
      },
      {
        day: 'Donderdag',
        slots: [{ time: '10.00–11.00', label: 'ZilverFitness' }],
      },
      {
        day: 'Vrijdag',
        slots: [
          { time: '11.00–12.00', label: 'ZilverFitness' },
          { time: '12.30–13.30', label: 'ZilverFitness' },
        ],
      },
    ],
  },
  {
    id: 'teens',
    title: 'Teens',
    lead: 'Max. 15 per les, 60 minuten.',
    days: [
      {
        day: 'Dinsdag',
        slots: [{ time: '18.30–19.30', label: 'Teens' }],
      },
      {
        day: 'Donderdag',
        slots: [{ time: '18.30–19.30', label: 'Teens' }],
      },
    ],
  },
  {
    id: 'kids',
    title: 'Kids & pre-teens',
    lead: 'Max. 15 per les. Kids 45 minuten, pre-teens 45 minuten.',
    days: [
      {
        day: 'Zaterdag',
        slots: [
          { time: '08.30–09.15', label: 'Kids' },
          { time: '09.15–10.00', label: 'Pre-teens' },
        ],
      },
    ],
  },
]
