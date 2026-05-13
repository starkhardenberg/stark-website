'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Ref } from 'react'
import trackStyles from '../TrackItem.module.css'
import styles from './TrainenBandLayout.module.css'

export type TrainenBandLayoutProps = {
  sectionTitle: string
  num: string
  introLabel?: string
  paragraphs: string[]
  readMoreHref?: string
  readMoreLabel?: string
  cta: string
  ctaHref: string
  photo: string
  photoAlt: string
  photoObjectPosition?: string
  measureRef: Ref<HTMLDivElement>
  numFontPx: number | null
  ctaClassName: string
  /** Kleinere afstand tussen tekst/01 en foto (o.a. sectie trainen) */
  tightPhotoGap?: boolean
  /** CTA onder de sectietitel, links (trainen, coaching, zakelijk) */
  ctaUnderTitle?: boolean
}

export default function TrainenBandLayout({
  sectionTitle,
  num,
  introLabel,
  paragraphs,
  readMoreHref,
  readMoreLabel,
  cta,
  ctaHref,
  photo,
  photoAlt,
  photoObjectPosition,
  measureRef,
  numFontPx,
  ctaClassName,
  tightPhotoGap,
  ctaUnderTitle,
}: TrainenBandLayoutProps) {
  const ctaEl = (
    <a className={ctaClassName} href={ctaHref}>
      {cta}
    </a>
  )

  return (
    <div
      className={`${styles.band} ${tightPhotoGap ? styles.bandTight : ''} ${ctaUnderTitle ? styles.bandCtaUnderTitle : ''}`}
    >
      <div className={styles.leftCol}>
        <h2 className={`${trackStyles.trainenRoutesTitle} ${styles.bandTitle}`}>{sectionTitle}</h2>

        {ctaUnderTitle ? (
          <div className={styles.ctaUnderTitleWrap}>{ctaEl}</div>
        ) : null}

        <div className={styles.copyRow}>
          <div className={styles.numOnlyCol}>
            <span
              className={trackStyles.num}
              style={
                numFontPx != null
                  ? { fontSize: `${numFontPx}px`, lineHeight: 0.82 }
                  : undefined
              }
            >
              {num}
            </span>
          </div>

          <div className={styles.textStack}>
            <div className={trackStyles.introLeft}>
              <div ref={measureRef} className={trackStyles.introMeasure}>
                {introLabel ? <span className={trackStyles.noTilesLabel}>{introLabel}</span> : null}
                {paragraphs.map((text, i) => (
                  <p key={i} className={trackStyles.desc}>
                    {text}
                  </p>
                ))}
              </div>
              {readMoreHref ? (
                <Link href={readMoreHref} className={trackStyles.readMore}>
                  {readMoreLabel ?? 'Lees meer'}
                  <span className={trackStyles.readMoreArrow} aria-hidden>
                    →
                  </span>
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rightCol}>
        <div className={`${trackStyles.introPhotoRail} ${styles.photoRail}`}>
          <div className={trackStyles.photoVisual}>
            <div className={trackStyles.photoFrame}>
              <div className={trackStyles.singlePhoto}>
                <Image
                  src={`/images/${photo}`}
                  alt={photoAlt}
                  fill
                  className={trackStyles.singlePhotoImg}
                  sizes="(min-width: 900px) 48vw, 100vw"
                  priority
                  style={photoObjectPosition ? { objectPosition: photoObjectPosition } : undefined}
                />
              </div>
            </div>
          </div>
        </div>

        {!ctaUnderTitle ? (
          <div className={`${trackStyles.introPhotoCta} ${styles.ctaRail}`}>{ctaEl}</div>
        ) : null}
      </div>
    </div>
  )
}
