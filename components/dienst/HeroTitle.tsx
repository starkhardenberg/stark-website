'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import styles from './DienstPage.module.css'

/** Deel van de derde letter dat mee over de foto hangt. De outline stopt na twee letters. */
const HERO_BLEED = 1 / 3

/**
 * Vanaf 800 px hangen de eerste twee letters over de foto, plus een derde van de derde letter.
 * Outline en gevuld vallen daardoor niet samen met de rand van het zwart.
 * Een tweede regel eindigt op dezelfde letter als de regel erboven.
 * De lettergrootte krimpt tot de langste regel in het zwarte vlak past.
 */
function fitHeroTitle(title: HTMLHeadingElement) {
  const copy = title.closest('[data-hero-copy]') as HTMLElement | null
  const desktop = window.matchMedia('(min-width: 800px)').matches
  if (!desktop) {
    title.style.removeProperty('--hero-hang')
    title.style.removeProperty('font-size')
    title.parentElement?.querySelector('p')?.style.removeProperty('transform')
    copy?.style.removeProperty('padding-top')
    copy?.style.removeProperty('justify-content')
    return 0
  }
  const line = title.querySelector<HTMLElement>('[data-hero-line="1"]')
  title.style.removeProperty('font-size')

  const hangAndFits = () => {
    const letters = line ? [...line.querySelectorAll<HTMLElement>(':scope > span')] : []
    if (letters.length < 3) {
      title.style.setProperty('--hero-hang', '0px')
      return true
    }
    const first = letters[0].getBoundingClientRect()
    const third = letters[2].getBoundingClientRect()
    const hang = third.left - first.left + third.width * HERO_BLEED
    title.style.setProperty('--hero-hang', `${Math.max(0, hang)}px`)
    if (!copy) return true
    const pad = parseFloat(getComputedStyle(copy).paddingRight) || 0
    const limit = copy.getBoundingClientRect().right - pad - 14
    const all = [...title.querySelectorAll<HTMLElement>('[data-hero-line] > span')]
    return all.every((span) => span.getBoundingClientRect().right <= limit + 0.5)
  }

  let guard = 0
  while (!hangAndFits() && guard < 48) {
    const size = parseFloat(getComputedStyle(title).fontSize)
    if (size <= 42) break
    title.style.fontSize = `${size - 2}px`
    guard += 1
  }

  clearNav(title, copy)
  centerSubline(title)
  return 2
}

/** Subregel in het midden onder de hele titel, ook de letters die over de foto hangen. */
function centerSubline(title: HTMLHeadingElement) {
  const sub = title.parentElement?.querySelector('p')
  if (!sub) return
  sub.style.transform = ''
  const letters = [...title.querySelectorAll<HTMLElement>('[data-hero-line] > span')]
  if (!letters.length) return
  const left = Math.min(...letters.map((span) => span.getBoundingClientRect().left))
  const right = Math.max(...letters.map((span) => span.getBoundingClientRect().right))
  const subBox = sub.getBoundingClientRect()
  const shift = (left + right) / 2 - (subBox.left + subBox.width / 2)
  sub.style.transform = `translateX(${Math.round(shift)}px)`
}

const NAV_GAP = 48

/**
 * Houd de titel onder het menu. Past hij gecentreerd al, dan blijft dat zo.
 * Anders komt het blok vast onder het menu te staan: padding op een gecentreerde
 * kolom schuift de titel maar half zo ver.
 */
function clearNav(title: HTMLElement, copy: HTMLElement | null) {
  if (!copy) return
  const nav = title.closest('header')?.querySelector('nav')
  const stack = title.parentElement
  if (!nav || !stack) return

  copy.style.removeProperty('justify-content')
  copy.style.removeProperty('padding-top')

  const shortfall = () =>
    nav.getBoundingClientRect().bottom + NAV_GAP - stack.getBoundingClientRect().top

  if (shortfall() <= 1) return

  copy.style.justifyContent = 'flex-start'
  let guard = 0
  while (guard < 4) {
    const need = shortfall()
    if (need <= 1) break
    const current = parseFloat(getComputedStyle(copy).paddingTop) || 0
    copy.style.paddingTop = `${Math.round(current + need)}px`
    guard += 1
  }
}

function TitleLine({
  text,
  line,
  outlineCount,
  keyOffset,
}: {
  text: string
  line: 1 | 2
  outlineCount: number
  keyOffset: number
}) {
  return (
    <span className={styles.heroTitleLine} data-hero-line={line}>
      {text.split('').map((char, index) => (
        <span
          key={keyOffset + index}
          className={line === 1 && index < outlineCount ? styles.heroTitleOutline : undefined}
        >
          {char}
        </span>
      ))}
    </span>
  )
}

export default function HeroTitle({
  word = 'Momentum',
  breakBefore,
  centerSecondLine = false,
  className,
}: {
  word?: string
  /** Breek vóór deze tekst, nooit midden in een woord. Zonder prop blijft de titel één regel. */
  breakBefore?: string
  /** Tweede regel in het midden onder de eerste, in plaats van rechts uitgelijnd. */
  centerSecondLine?: boolean
  className?: string
}) {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [outlineCount, setOutlineCount] = useState(0)

  useLayoutEffect(() => {
    const title = titleRef.current
    if (!title) return
    let cancelled = false
    let lastWidth = -1

    const measure = (force = false) => {
      if (cancelled || !title.isConnected) return
      const copy = title.closest('[data-hero-copy]') as HTMLElement | null
      const width = copy?.clientWidth ?? window.innerWidth
      if (!force && width === lastWidth) return
      lastWidth = width
      const count = fitHeroTitle(title)
      setOutlineCount((current) => (current === count ? current : count))
    }

    const onResize = () => measure(false)
    measure(true)
    const header = title.closest('header')
    const observer = new ResizeObserver(onResize)
    if (header) observer.observe(header)
    window.addEventListener('resize', onResize)
    document.fonts?.ready.then(() => measure(true))

    return () => {
      cancelled = true
      observer.disconnect()
      window.removeEventListener('resize', onResize)
    }
  }, [word, breakBefore])

  const breakIndex = breakBefore ? word.indexOf(breakBefore) : -1
  const hasBreak = breakIndex > 1 && word[breakIndex - 1] === ' '
  const line1 = hasBreak ? word.slice(0, breakIndex - 1) : word
  const line2 = hasBreak ? word.slice(breakIndex) : ''

  return (
    <h1
      ref={titleRef}
      className={[
        styles.heroTitle,
        hasBreak ? styles.heroTitleBreak : '',
        hasBreak && centerSecondLine ? styles.heroTitleBreakCenter : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <TitleLine text={line1} line={1} outlineCount={outlineCount} keyOffset={0} />
      {line2 ? <TitleLine text={line2} line={2} outlineCount={0} keyOffset={line1.length + 1} /> : null}
    </h1>
  )
}
