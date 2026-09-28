'use client'

import { useRef, useState } from 'react'
import StarkImage from '@/components/StarkImage'
import Link from 'next/link'
import { CTA_KENNISMAKING_LABEL, hrefKennismaking } from '@/lib/contact'
import { STARK_CTA, STARK_CTA_PRIMARY } from '@/lib/stark-cta'
import styles from './RouteCarousel.module.css'

export interface RouteOption {
  title: string
  desc: string
  photo: string
  photoAlt: string
  objectPosition?: string
  href?: string
  grayscale?: boolean
}

export default function RouteCarousel({ options, light }: { options: RouteOption[]; light?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState<RouteOption | null>(null)

  const scroll = (dir: 'prev' | 'next') => {
    const el = trackRef.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement
    const step = card.offsetWidth + 10
    el.scrollBy({ left: dir === 'next' ? step : -step, behavior: 'smooth' })
  }

  return (
    <>
      <div className={styles.root}>
        <div className={styles.track} ref={trackRef}>
          {options.map((opt) => {
            return opt.href ? (
              <Link
                key={opt.title}
                href={opt.href}
                className={styles.card}
                data-stark-hover=""
                aria-label={`Meer info over ${opt.title}`}
              >
                <div className={styles.imgWrap}>
                  <StarkImage
                    src={`/images/${opt.photo}`}
                    alt={opt.photoAlt}
                    fill
                    hoverColor
                    className={styles.img}
                    sizes="(min-width: 900px) 180px, 52vw"
                    style={{ objectPosition: opt.objectPosition ?? 'center' }}
                  />
                </div>
                <div className={styles.overlay}>
                  <p className={styles.title}>{opt.title}</p>
                  <span className={styles.more}>(meer)</span>
                </div>
              </Link>
            ) : (
              <button
                key={opt.title}
                className={styles.card}
                data-stark-hover=""
                onClick={() => setSelected(opt)}
                aria-label={`Meer info over ${opt.title}`}
              >
                <div className={styles.imgWrap}>
                  <StarkImage
                    src={`/images/${opt.photo}`}
                    alt={opt.photoAlt}
                    fill
                    hoverColor
                    className={styles.img}
                    sizes="(min-width: 900px) 180px, 52vw"
                    style={{ objectPosition: opt.objectPosition ?? 'center' }}
                  />
                </div>
                <div className={styles.overlay}>
                  <p className={styles.title}>{opt.title}</p>
                  <span className={styles.more}>(meer)</span>
                </div>
              </button>
            )
          })}
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

      {selected && (
        <div className={styles.modalBackdrop} onClick={() => setSelected(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalImg}>
              <StarkImage
                src={`/images/${selected.photo}`}
                alt={selected.photoAlt}
                fill
                className={styles.modalImgEl}
                sizes="(min-width: 900px) 480px, 100vw"
              />
            </div>
            <div className={styles.modalBody}>
              <p className={styles.modalTitle}>{selected.title}</p>
              <p className={styles.modalDesc}>{selected.desc}</p>
              <a className={`${styles.modalCta} ${STARK_CTA} ${STARK_CTA_PRIMARY}`} href={hrefKennismaking} onClick={() => setSelected(null)}>
                {CTA_KENNISMAKING_LABEL}
              </a>
            </div>
            <button className={styles.modalClose} onClick={() => setSelected(null)} aria-label="Sluiten">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
