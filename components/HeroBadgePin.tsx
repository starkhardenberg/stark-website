'use client'

import { useLayoutEffect } from 'react'
import Sinds2013Badge from './Sinds2013Badge'

/** Midden van de homepage-sticker op het midden van de ondertitel. */
function pinBadge() {
  const badge = document.querySelector<HTMLElement>('[data-hero-badge]')
  const sub = document.querySelector<HTMLElement>('[data-hero-sub]')
  const hero = badge?.offsetParent
  if (!badge || !sub || !(hero instanceof HTMLElement)) return

  const subBox = sub.getBoundingClientRect()
  const heroBox = hero.getBoundingClientRect()
  const mid = subBox.top + subBox.height / 2 - heroBox.top
  const next = `${Math.round(mid - badge.offsetHeight / 2)}px`
  if (badge.style.top === next) return
  badge.style.top = next
  badge.style.bottom = 'auto'
}

export default function HeroBadgePin() {
  useLayoutEffect(() => {
    pinBadge()
    const sub = document.querySelector<HTMLElement>('[data-hero-sub]')
    const hero = document.querySelector('main')
    const ro = new ResizeObserver(pinBadge)
    if (sub) ro.observe(sub)
    if (sub?.previousElementSibling instanceof HTMLElement) ro.observe(sub.previousElementSibling)
    if (hero) ro.observe(hero)
    window.addEventListener('resize', pinBadge)
    document.fonts?.ready.then(pinBadge)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', pinBadge)
    }
  }, [])

  return <Sinds2013Badge />
}
