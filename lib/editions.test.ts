import assert from 'node:assert/strict'
import { test } from 'node:test'
import { proefFooterNote, proefScheduleAt } from './editions.ts'

/** Vast klokmoment in Europe/Amsterdam, los van de klok van de machine. */
function amsterdam(date: string, time: string): Date {
  const [year, month, day] = date.split('-').map(Number)
  const [hour, minute] = time.split(':').map(Number)
  const desired = Date.UTC(year, month - 1, day, hour, minute, 0)
  let utc = desired
  for (let step = 0; step < 4; step += 1) {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Amsterdam',
      hourCycle: 'h23',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).formatToParts(new Date(utc))
    const pick = (type: Intl.DateTimeFormatPartTypes) => Number(parts.find((part) => part.type === type)?.value)
    let seenHour = pick('hour')
    if (seenHour === 24) seenHour = 0
    const seen = Date.UTC(pick('year'), pick('month') - 1, pick('day'), seenHour, pick('minute'), pick('second'))
    utc += desired - seen
  }
  const check = new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Europe/Amsterdam',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).format(new Date(utc))
  assert.equal(check, `${date} ${time}`)
  return new Date(utc)
}

test('5 november 2026 17:59 Amsterdam: nog 5 november', () => {
  const view = proefScheduleAt(amsterdam('2026-11-05', '17:59'))
  assert.equal(view.shortLabel, '5 nov')
  assert.equal(view.year, '2026')
  assert.equal(view.button, 'Meld je aan voor 5 november')
  assert.equal(view.listExhausted, false)
  assert.equal(proefFooterNote(view), 'Volgende editie: 4 februari 2027')
})

test('5 november 2026 18:01 Amsterdam: 4 februari 2027', () => {
  const view = proefScheduleAt(amsterdam('2026-11-05', '18:01'))
  assert.equal(view.shortLabel, '4 feb')
  assert.equal(view.year, '2027')
  assert.equal(view.button, 'Meld je aan voor 4 februari')
  assert.equal(view.listExhausted, false)
  assert.equal(proefFooterNote(view), 'Volgende editie: 13 mei 2027')
})

test('13 mei 2027 17:59 Amsterdam, zomertijd: nog 13 mei', () => {
  const view = proefScheduleAt(amsterdam('2027-05-13', '17:59'))
  assert.equal(view.shortLabel, '13 mei')
  assert.equal(view.year, '2027')
  assert.equal(view.button, 'Meld je aan voor 13 mei')
  assert.equal(view.listExhausted, false)
  assert.equal(proefFooterNote(view), 'Volgende editie: 2 september 2027')
})

test('13 mei 2027 18:01 Amsterdam, zomertijd: 2 september 2027', () => {
  const view = proefScheduleAt(amsterdam('2027-05-13', '18:01'))
  assert.equal(view.shortLabel, '2 sep')
  assert.equal(view.year, '2027')
  assert.equal(view.button, 'Meld je aan voor 2 september')
  assert.equal(view.listExhausted, false)
  assert.equal(proefFooterNote(view), 'Volgende editie: 4 november 2027')
})

test('3 februari 2028 18:01 Amsterdam: geen editie, voettekst wordt gepland', () => {
  const view = proefScheduleAt(amsterdam('2028-02-03', '18:01'))
  assert.equal(view.hasEdition, false)
  assert.equal(view.shortLabel, '')
  assert.equal(view.listExhausted, true)
  assert.equal(proefFooterNote(view), 'Volgende editie wordt gepland.')
})
