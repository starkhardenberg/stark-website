'use client'

import Link from 'next/link'
import { useLayoutEffect, useRef, useState } from 'react'
import RouteCarousel, { RouteOption } from './RouteCarousel'
import TrainenBandLayout from './trainen/TrainenBandLayout'
import styles from './TrackItem.module.css'

/** Gelijk aan .itemNoTiles .num line-height in CSS (sync voor hoogte-meting) */
const NUM_LINE_HEIGHT = 0.82
const SYNC_MIN_WIDTH = 900

interface Track {
  id: string
  num: string
  cat: string
  desc: string
  routeOptions: RouteOption[]
  cta: string
  ctaHref: string
  photo: string
  photoAlt: string
  /** Optioneel: bij sterke portrait-foto in breed frame (object-fit cover) */
  photoObjectPosition?: string
  light?: boolean
  showTiles?: boolean
  readMoreHref?: string
  readMoreLabel?: string
  /** Kleine caps-regel boven introtekst (trainen zonder tiles; coaching en andere tracks met tiles) */
  introLabel?: string
}

export default function TrackItem({ track }: { track: Track }) {
  /** Onder de foto: altijd primaire oranje CTA (ook op licht coaching-blok). */
  const noTilesPhotoCtaClass = `${styles.cta} ${styles.ctaUnderPhoto}`
  const measureRef = useRef<HTMLDivElement>(null)
  const [numFontPx, setNumFontPx] = useState<number | null>(null)

  const descParagraphs = track.desc.includes('\n\n')
    ? track.desc.split(/\n\n/).map((s) => s.trim()).filter(Boolean)
    : null

  const descBlocks = descParagraphs?.length ? descParagraphs : [track.desc.trim()]

  useLayoutEffect(() => {
    if (track.showTiles !== false) return

    const el = measureRef.current
    if (!el || typeof window === 'undefined') return

    const applySize = () => {
      const wide = window.matchMedia(`(min-width: ${SYNC_MIN_WIDTH}px)`).matches
      if (!wide) {
        setNumFontPx(null)
        return
      }
      const h = el.getBoundingClientRect().height
      if (h < 4) return
      const raw = h / NUM_LINE_HEIGHT
      const clamped = Math.min(Math.max(raw, 52), 220)
      setNumFontPx(Math.round(clamped * 10) / 10)
    }

    applySize()
    const ro = new ResizeObserver(applySize)
    ro.observe(el)
    window.addEventListener('resize', applySize)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', applySize)
    }
  }, [track.showTiles, track.desc, track.introLabel])

  return (
    <article
      className={`${styles.item} ${track.light ? styles.light : ''} ${track.showTiles === false ? styles.itemNoTiles : ''}`}
      id={track.id}
    >
      {track.showTiles !== false ? (
        <>
          <div className={styles.header}>
            <span className={styles.num}>{track.num}</span>
            <span className={styles.cat}>{track.cat}</span>
          </div>

          <div className={styles.body}>
            {track.introLabel ? (
              <span className={styles.sectionIntroLabel}>{track.introLabel}</span>
            ) : null}
            {descParagraphs ? (
              descParagraphs.map((block, i) => (
                <p key={i} className={styles.desc}>
                  {block}
                </p>
              ))
            ) : (
              <p className={styles.desc}>{track.desc}</p>
            )}
            {track.readMoreHref ? (
              <Link href={track.readMoreHref} className={styles.readMore}>
                {track.readMoreLabel ?? 'Lees meer'}
                <span className={styles.readMoreArrow} aria-hidden>
                  →
                </span>
              </Link>
            ) : null}
            <RouteCarousel options={track.routeOptions} light={track.light} />
          </div>
        </>
      ) : (
        <div className={`${styles.noTilesHero} ${styles.noTilesHeroTrainen}`}>
          <div className={styles.trainenBandWrap}>
            <TrainenBandLayout
              sectionTitle={track.cat}
              num={track.num}
              introLabel={track.introLabel}
              paragraphs={descBlocks}
              readMoreHref={track.readMoreHref}
              readMoreLabel={track.readMoreLabel}
              cta={track.cta}
              ctaHref={track.ctaHref}
              photo={track.photo}
              photoAlt={track.photoAlt}
              photoObjectPosition={track.photoObjectPosition}
              measureRef={measureRef}
              numFontPx={numFontPx}
              ctaClassName={noTilesPhotoCtaClass}
              tightPhotoGap={track.id === 'trainen'}
              ctaUnderTitle
            />
          </div>
        </div>
      )}
    </article>
  )
}
