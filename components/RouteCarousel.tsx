'use client'

import { useRef } from 'react'
import Image from 'next/image'
import styles from './RouteCarousel.module.css'

export interface RouteOption {
  title: string
  desc: string
  photo: string
  photoAlt: string
}

export default function RouteCarousel({ options, light }: { options: RouteOption[]; light?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'prev' | 'next') => {
    const el = trackRef.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement
    const step = card.offsetWidth + 10
    el.scrollBy({ left: dir === 'next' ? step : -step, behavior: 'smooth' })
  }

  return (
    <div className={styles.root}>
      <div className={styles.track} ref={trackRef}>
        {options.map((opt) => (
          <div className={styles.card} key={opt.title}>
            <div className={styles.imgWrap}>
              <Image
                src={`/images/${opt.photo}`}
                alt={opt.photoAlt}
                fill
                className={styles.img}
                sizes="(min-width: 900px) 220px, 78vw"
              />
            </div>
            <div className={styles.overlay}>
              <p className={styles.title}>{opt.title}</p>
              <p className={styles.desc}>{opt.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={`${styles.nav} ${light ? styles.navLight : ''}`}>
        <button className={styles.btn} onClick={() => scroll('prev')} aria-label="Vorige">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 13L5 8l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className={styles.btn} onClick={() => scroll('next')} aria-label="Volgende">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
