'use client'

import { useEffect, useState, type FocusEvent, type PointerEvent } from 'react'
import { QUOTE_INTERVAL_MS, type PortraitPerson } from './portrait-quotes'

export function useQuoteRotation(people: readonly PortraitPerson[]) {
  const [activeId, setActiveId] = useState(people[0].id)
  const [paused, setPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const quotedKey = people
    .filter((person) => person.text)
    .map((person) => person.id)
    .join('|')

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduceMotion(media.matches)
    apply()
    media.addEventListener('change', apply)
    return () => media.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    const quoted = quotedKey.split('|').filter(Boolean)
    if (paused || reduceMotion || quoted.length < 2) return
    const timer = window.setInterval(() => {
      setActiveId((current) => {
        const index = quoted.indexOf(current)
        return quoted[(index + 1) % quoted.length]
      })
    }, QUOTE_INTERVAL_MS)
    return () => window.clearInterval(timer)
  }, [paused, reduceMotion, activeId, quotedKey])

  const active = people.find((person) => person.id === activeId) ?? people[0]

  return {
    active,
    select: setActiveId,
    stageProps: {
      onPointerEnter: (event: PointerEvent<HTMLDivElement>) => {
        if (event.pointerType === 'mouse') setPaused(true)
      },
      onPointerLeave: (event: PointerEvent<HTMLDivElement>) => {
        if (event.pointerType === 'mouse') setPaused(false)
      },
      onFocus: () => setPaused(true),
      onBlur: (event: FocusEvent<HTMLDivElement>) => {
        const next = event.relatedTarget
        if (next instanceof Node && event.currentTarget.contains(next)) return
        setPaused(false)
      },
    },
  }
}
