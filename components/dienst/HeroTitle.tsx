'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import styles from './DienstPage.module.css'

export default function HeroTitle({
  word = 'Momentum',
  breakBefore,
}: {
  word?: string
  /** Breek vóór deze tekst, nooit midden in een woord. Zonder prop blijft de titel één regel. */
  breakBefore?: string
}) {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [outlineCount, setOutlineCount] = useState(0)

  useLayoutEffect(() => {
    const title = titleRef.current
    if (!title) return

    const measure = () => {
      const count = window.matchMedia('(min-width: 800px)').matches ? 2 : 0
      setOutlineCount((current) => (current === count ? current : count))
    }

    measure()
    const header = title.closest('header')
    const observer = new ResizeObserver(measure)
    if (header) observer.observe(header)
    window.addEventListener('resize', measure)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  const breakIndex = breakBefore ? word.indexOf(breakBefore) : -1

  return (
    <h1
      ref={titleRef}
      className={breakIndex > 0 ? `${styles.heroTitle} ${styles.heroTitleBreak}` : styles.heroTitle}
    >
      {word.split('').map((char, index) => {
        if (breakIndex > 0 && index === breakIndex - 1 && char === ' ') {
          return <br key="break" />
        }
        return (
          <span key={index} className={index < outlineCount ? styles.heroTitleOutline : undefined}>
            {char}
          </span>
        )
      })}
    </h1>
  )
}
