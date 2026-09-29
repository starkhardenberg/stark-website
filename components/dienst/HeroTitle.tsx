'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import styles from './DienstPage.module.css'

/**
 * Vanaf 800 px hangen precies de eerste twee letters over de foto.
 * De derde letter, en een eventuele tweede regel, beginnen op de rand van het zwart.
 * De lettergrootte krimpt tot de langste regel in het zwarte vlak past.
 */
function fitHeroTitle(title: HTMLHeadingElement) {
  const copy = title.closest('[data-hero-copy]') as HTMLElement | null
  const desktop = window.matchMedia('(min-width: 800px)').matches
  if (!desktop) {
    title.style.removeProperty('--hero-hang')
    title.style.removeProperty('font-size')
    copy?.style.removeProperty('padding-top')
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
    const hang = letters[2].getBoundingClientRect().left - letters[0].getBoundingClientRect().left
    title.style.setProperty('--hero-hang', `${Math.max(0, hang)}px`)
    if (!copy) return true
    const pad = parseFloat(getComputedStyle(copy).paddingRight) || 0
    const limit = copy.getBoundingClientRect().right - pad
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
  return 2
}

/** Houd de titel onder het menu. Daarbinnen blijft het blok gecentreerd in het zwarte vlak. */
function clearNav(title: HTMLElement, copy: HTMLElement | null) {
  if (!copy) return
  const nav = title.closest('header')?.querySelector('nav')
  const stack = title.parentElement
  if (!nav || !stack) return
  copy.style.paddingTop = '32px'
  let guard = 0
  while (guard < 6) {
    const overlap = nav.getBoundingClientRect().bottom + 16 - stack.getBoundingClientRect().top
    if (overlap <= 1) break
    const current = parseFloat(getComputedStyle(copy).paddingTop) || 32
    copy.style.paddingTop = `${Math.round(current + overlap)}px`
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
  className,
}: {
  word?: string
  /** Breek vóór deze tekst, nooit midden in een woord. Zonder prop blijft de titel één regel. */
  breakBefore?: string
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
      className={[styles.heroTitle, hasBreak ? styles.heroTitleBreak : '', className]
        .filter(Boolean)
        .join(' ')}
    >
      <TitleLine text={line1} line={1} outlineCount={outlineCount} keyOffset={0} />
      {line2 ? <TitleLine text={line2} line={2} outlineCount={0} keyOffset={line1.length + 1} /> : null}
    </h1>
  )
}
