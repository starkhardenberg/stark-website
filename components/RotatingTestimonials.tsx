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
  cardTone?: 'light' | 'dark'
  /** Meerekenen van een hero-quote vóór de carrousel (off-by-one fix). */
  quoteOffset?: number
}

function slideScrollLeft(viewport: HTMLDivElement, slide: HTMLDivElement) {
  const slideRect = slide.getBoundingClientRect()
  const viewportRect = viewport.getBoundingClientRect()
  const slideCenter = viewport.scrollLeft + (slideRect.left - viewportRect.left) + slideRect.width / 2
  const maxLeft = Math.max(0, viewport.scrollWidth - viewport.clientWidth)
  return Math.max(0, Math.min(slideCenter - viewport.clientWidth / 2, maxLeft))
}

export default function RotatingTestimonials({ items, cardTone = 'light', quoteOffset = 0 }: Props) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [inView, setInView] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const viewportRef = useRef<HTMLDivElement>(null)
  const programmaticScroll = useRef(false)
  const indexRef = useRef(0)
  const pendingUserScroll = useRef(false)
  const programmaticTimer = useRef<number | null>(null)

  const total = items.length
  const totalWithOffset = total + quoteOffset

  indexRef.current = index

  const releaseProgrammaticLock = useCallback(() => {
    programmaticScroll.current = false
    if (programmaticTimer.current !== null) {
      window.clearTimeout(programmaticTimer.current)
      programmaticTimer.current = null
    }
  }, [])

  const scrollToIndex = useCallback(
    (i: number, behavior: ScrollBehavior = 'smooth') => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const viewport = viewportRef.current
      const slide = slideRefs.current[i]
      if (!viewport || !slide) return

      const nextLeft = slideScrollLeft(viewport, slide)
      const instant = reduceMotion || behavior === 'auto'

      const pageY = window.scrollY
      const pageX = window.scrollX

      releaseProgrammaticLock()
      programmaticScroll.current = true
      viewport.scrollTo({
        left: nextLeft,
        behavior: instant ? 'auto' : behavior,
      })
      if (instant && (window.scrollY !== pageY || window.scrollX !== pageX)) {
        window.scrollTo(pageX, pageY)
      }

      if (instant) {
        releaseProgrammaticLock()
      } else {
        programmaticTimer.current = window.setTimeout(releaseProgrammaticLock, 450)
        viewport.addEventListener('scrollend', releaseProgrammaticLock, { once: true })
      }
    },
    [releaseProgrammaticLock],
  )

  const syncIndexFromViewport = useCallback(() => {
    if (programmaticScroll.current) return

    const viewport = viewportRef.current
    if (!viewport || total === 0) return

    const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth)
    const scrollLeft = viewport.scrollLeft

    if (maxScroll <= 1) {
      if (indexRef.current !== 0) setIndex(0)
      return
    }

    if (scrollLeft <= 1) {
      if (indexRef.current !== 0) {
        pendingUserScroll.current = true
        setIndex(0)
      }
      return
    }

    if (scrollLeft >= maxScroll - 1) {
      const last = total - 1
      if (indexRef.current !== last) {
        pendingUserScroll.current = true
        setIndex(last)
      }
      return
    }

    const viewportCenterX = viewport.getBoundingClientRect().left + viewport.clientWidth / 2

    let closest = 0
    let closestDist = Infinity

    slideRefs.current.forEach((slide, i) => {
      if (!slide) return
      const rect = slide.getBoundingClientRect()
      const slideCenterX = rect.left + rect.width / 2
      const dist = Math.abs(viewportCenterX - slideCenterX)
      if (dist < closestDist) {
        closestDist = dist
        closest = i
      }
    })

    if (closest !== indexRef.current) {
      pendingUserScroll.current = true
      setIndex(closest)
    }
  }, [total])

  useEffect(() => {
    slideRefs.current = slideRefs.current.slice(0, total)
    if (indexRef.current >= total) {
      setIndex(Math.max(0, total - 1))
    }
  }, [total])

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '0px 0px -20% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useLayoutEffect(() => {
    if (!inView) return
    if (pendingUserScroll.current) {
      pendingUserScroll.current = false
      return
    }
    scrollToIndex(index, index === 0 ? 'auto' : 'smooth')
  }, [index, inView, scrollToIndex])

  useEffect(() => {
    if (!inView) return

    const viewport = viewportRef.current
    if (!viewport) return

    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => syncIndexFromViewport())
    }

    viewport.addEventListener('scroll', onScroll, { passive: true })
    viewport.addEventListener('scrollend', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    onScroll()

    return () => {
      cancelAnimationFrame(raf)
      viewport.removeEventListener('scroll', onScroll)
      viewport.removeEventListener('scrollend', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [inView, syncIndexFromViewport, total])

  useEffect(() => {
    if (paused || total <= 1 || !inView) return

    const id = window.setInterval(() => {
      pendingUserScroll.current = false
      setIndex((i) => (i + 1) % total)
    }, INTERVAL_MS)

    return () => window.clearInterval(id)
  }, [paused, total, inView])

  useEffect(() => () => releaseProgrammaticLock(), [releaseProgrammaticLock])

  const goTo = (next: number) => {
    pendingUserScroll.current = false
    setIndex(next)
  }

  if (total === 0) return null

  return (
    <div
      ref={wrapRef}
      className={`${styles.wrap} ${cardTone === 'dark' ? styles.wrapDarkCards : ''}`}
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
              onClick={() => goTo((index + 1) % total)}
              title="Volgende quote"
            >
              <QuoteCard
                text={item.text}
                name={item.name}
                context={item.context}
                active={i === index}
                tone={cardTone}
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
              {item.name}, testimonial {i + 1 + quoteOffset} van {totalWithOffset}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
