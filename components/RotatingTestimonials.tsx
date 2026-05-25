'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import QuoteCard from './QuoteCard'
import styles from './RotatingTestimonials.module.css'

export type Testimonial = {
  id: string
  text: string
  name: string
  context: string
}

const INTERVAL_MS = 5500

type Props = {
  items: Testimonial[]
}

export default function RotatingTestimonials({ items }: Props) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const viewportRef = useRef<HTMLDivElement>(null)
  const programmaticScroll = useRef(false)

  const total = items.length

  const scrollToIndex = useCallback((i: number, behavior: ScrollBehavior = 'smooth') => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    programmaticScroll.current = true
    slideRefs.current[i]?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : behavior,
      inline: 'center',
      block: 'nearest',
    })
    window.setTimeout(() => {
      programmaticScroll.current = false
    }, 500)
  }, [])

  useLayoutEffect(() => {
    scrollToIndex(index, index === 0 ? 'auto' : 'smooth')
  }, [index, scrollToIndex])

  useEffect(() => {
    if (paused || total <= 1) return

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total)
    }, INTERVAL_MS)

    return () => window.clearInterval(id)
  }, [paused, total])

  const goTo = (next: number) => setIndex(next)

  const handleScroll = () => {
    if (programmaticScroll.current) return
    const viewport = viewportRef.current
    if (!viewport) return

    const center = viewport.scrollLeft + viewport.clientWidth / 2
    let closest = index
    let closestDist = Infinity

    slideRefs.current.forEach((slide, i) => {
      if (!slide) return
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2
      const dist = Math.abs(center - slideCenter)
      if (dist < closestDist) {
        closestDist = dist
        closest = i
      }
    })

    if (closest !== index) setIndex(closest)
  }

  if (total === 0) return null

  return (
    <div
      className={styles.wrap}
      role="region"
      aria-roledescription="carrousel"
      aria-label="Korte testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={viewportRef}
        className={styles.viewport}
        id="rotating-testimonial-panel"
        aria-live="polite"
        onScroll={handleScroll}
      >
        <div className={styles.track}>
          {items.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => {
                slideRefs.current[i] = el
              }}
              className={`${styles.slide} ${i === index ? styles.slideActive : styles.slideIdle}`}
              aria-hidden={i !== index}
            >
              <QuoteCard
                text={item.text}
                name={item.name}
                context={item.context}
                active={i === index}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dots} role="tablist" aria-label="Kies testimonial">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-controls="rotating-testimonial-panel"
            className={i === index ? styles.dotActive : styles.dot}
            onClick={() => goTo(i)}
          >
            <span className={styles.srOnly}>
              {item.name}, testimonial {i + 1} van {total}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
